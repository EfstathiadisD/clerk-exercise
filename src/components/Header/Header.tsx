import * as React from "react";

import { setBackground, setFetchUsers, useBackgroundStore, useUsersStore } from "../../store";

import Styles from "./Header.module.css";

export const BackgroundPicker: React.VFC = () => {
  const data = useUsersStore((state) => state.data);
  const { background } = useBackgroundStore((state) => state);

  const onChangeBackground = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event) return;
    setBackground(event.target.value);
  }, []);

  const onFetchNext = React.useCallback(() => {
    if (!data) return;
    setFetchUsers(data.info.page + 1, 9);
  }, [data]);

  const onFetchPrev = React.useCallback(() => {
    if (!data) return;

    setFetchUsers(data.info.page - 1, 9);
  }, [data]);

  const isPrevButtonDisabled = React.useMemo<boolean>(() => {
    if (!data) return true;
    return data.info.page === 1;
  }, [data]);

  return (
    <div className={Styles["header--container"]}>
      <div className={Styles["header--picker"]}>
        <p>Set Card Background</p>
        <input
          type="color"
          id="background"
          defaultValue={background}
          onChange={onChangeBackground}
        />
      </div>
      <div className={Styles["header--actions"]}>
        <button type="button" onClick={onFetchPrev} disabled={isPrevButtonDisabled}>
          Fetch Prev Page
        </button>
        <button type="button" onClick={onFetchNext}>
          Fetch Next Page
        </button>
      </div>
    </div>
  );
};
