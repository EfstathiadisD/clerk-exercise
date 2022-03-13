import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import { Card, type CardProps } from "./Card";
import { setBackground } from "../../store";

const initProps: CardProps = {
  name: "Name",
  email: "Name@clerk.io",
  phone: "222555000",
  picture: "picutre",
  city: "Athens",
};

describe("Card", () => {
  it("should render the User properties", () => {
    const { getByText, getByTestId } = render(<Card {...initProps} />);

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Name@clerk.io")).toBeInTheDocument();
    expect(getByText("222555000")).toBeInTheDocument();
    expect(getByTestId("card--image")).toBeInTheDocument();
    expect(getByText("Athens")).toBeInTheDocument();
  });
  it("should render with no styles by default", () => {
    const { getByTestId } = render(<Card {...initProps} />);

    expect(getByTestId("card")).toHaveStyle({ backgroundColor: "" });
  });
  it("should render with {backgroundColor: 'FAFAFA'} when we call setBackground", async () => {
    const { getByTestId } = render(<Card {...initProps} />);

    act(() => {
      setBackground("FAFAFA");
    });

    await waitFor(() => expect(getByTestId("card")).toHaveStyle({ backgroundColor: "FAFAFA" }));
  });
});
