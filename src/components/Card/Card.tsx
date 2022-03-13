import * as React from "react";

import { useBackgroundStore } from "../../store";

import Styles from "./Card.module.css";

export type CardProps = {
  name: string;
  email: string;
  phone: string;
  picture: string;
  city: string;
};

export const Card: React.VFC<CardProps> = (props) => {
  const { name, email, phone, picture, city } = props;
  const background = useBackgroundStore((state) => state.background);

  return (
    <div className={Styles.card} style={{ backgroundColor: background }} data-testid="card">
      <div className={Styles["card--image"]} data-testid="card--image">
        <img src={picture} alt={picture} />
      </div>
      <div className={Styles["card--paragraph"]}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{city}</p>
      </div>
    </div>
  );
};
