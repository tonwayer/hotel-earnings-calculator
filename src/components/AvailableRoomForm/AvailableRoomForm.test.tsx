import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AvailableRoomForm, IAvalableRoomFormProps } from "./AvailableRoomForm";
import { typeIntoInput } from "../../tests/testUtils";

describe("AvailableRoomsForm", () => {
  const renderComponent = (
    props: IAvalableRoomFormProps = {
      onRoomStateSubmit: jest.fn(),
    }
  ) => render(<AvailableRoomForm {...props} />);

  it("renders correctly", () => {
    renderComponent();
    screen.getByRole("heading", { name: "Available Rooms" });
    screen.getByLabelText("Premium Rooms");
    screen.getByLabelText("Economy Rooms");
    screen.getByRole("button", { name: "Calculate Earnings" });
  });

  it("updates value of inputs when user types", async () => {
    renderComponent();
    await act(async () => {
      await typeIntoInput("Premium Rooms", "10");
      await typeIntoInput("Economy Rooms", "10");
    });
  });

  it("calls onRoomStateSubmit with proper value", async () => {
    const mockedOnRoomStateSubmit = jest.fn();
    renderComponent({ onRoomStateSubmit: mockedOnRoomStateSubmit });
    await act(async () => {
      await typeIntoInput("Premium Rooms", "10");
      await typeIntoInput("Economy Rooms", "10");
    });
    userEvent.click(screen.getByRole("button", { name: "Calculate Earnings" }));
    await waitFor(() => {
      expect(mockedOnRoomStateSubmit).toHaveBeenCalledWith(10, 10);
    });
  });
});
