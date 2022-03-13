import * as React from "react";

import { setFetchUsers, useUsersStore } from "../../store";

import { Card } from "../Card/Card";

import Styles from "./Container.module.css";

setFetchUsers(1, 9);

export const Container: React.VFC = () => {
  /* This RULE is here, to showcase, howt his component, could be improved */
  /* eslint-disable-next-line no-unused-vars */
  const { data, error, isError, isLoading } = useUsersStore((state) => state);

  return (
    <div className={Styles.container}>
      {data &&
        data.results.map(({ phone, picture, name, email, location }) => (
          <Card
            key={phone}
            name={name.first}
            email={email}
            phone={phone}
            picture={picture.large}
            city={location.city}
          />
        ))}
    </div>
  );
};
