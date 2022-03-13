import * as React from "react";

import { BackgroundPicker } from "./Header/Header";
import { Container } from "./Container/Container";

export const App: React.VFC = () => {
  return (
    <div>
      <BackgroundPicker />
      <Container />
    </div>
  );
};
