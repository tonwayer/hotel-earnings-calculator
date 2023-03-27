import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AvailableRoomForm, IAvalableRoomFormProps } from "./AvailableRoomForm";
import { typeIntoInput } from "../../tests/testUtils";

describe("FreeRoomsForm", () => {
  const renderComponent = (props: IAvalableRoomFormProps={
    onRoomStateSubmit: jest.fn()
  }) => render(<AvailableRoomForm {...props} />);

  it("renders correctly", () => {
    renderComponent();
    screen.getByRole("heading", { name: "Available Rooms" });
    screen.getByLabelText("Premium Rooms");
    screen.getByLabelText("Economy Rooms");
    screen.getByRole('button', { name: "Calculate Earnings" });
  });

  it("updates value of inputs when user types", async () => {
    renderComponent();
    await typeIntoInput("Premium Rooms", "10");
    const numberOfPremiumRoomInput = screen.getByLabelText("Premium Rooms");
    expect(numberOfPremiumRoomInput).toHaveValue(10);
    const numberOfEconomyRoomInput = screen.getByLabelText("Economy Rooms");
    await typeIntoInput("Economy Rooms", "10");
    expect(numberOfEconomyRoomInput).toHaveValue(10);
  });

  it("calls onRoomStateSubmit with proper value", async () => {
    const mockedOnRoomStateSubmit = jest.fn();
    renderComponent({onRoomStateSubmit: mockedOnRoomStateSubmit});
    await typeIntoInput("Premium Rooms", "10");
    await typeIntoInput("Economy Rooms", "10");
    userEvent.click(screen.getByRole('button', { name: "Calculate Earnings" }));
    await waitFor(() => {
      expect(mockedOnRoomStateSubmit).toHaveBeenCalledWith(10, 10);
    });
  });
});
