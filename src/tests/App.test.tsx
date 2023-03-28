import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { typeIntoInput } from "./testUtils";

describe("App", () => {
  const renderPage = () => render(<App />);

  it("renders page", () => {
    renderPage();
    screen.getByRole("heading", { name: "Hotel Revenue Calculator" });
    screen.getByRole("region", { name: "available-rooms-form" });
    screen.getByRole("region", { name: "revenue-card" });
  });

  it.each([
    ["3", "3", "3", "738", "3", "167"],
    ["7", "5", "6", "1054", "4", "189"],
    ["2", "7", "2", "583", "4", "189"],
    ["7", "1", "7", "1153", "1", "45"],
  ])(
    "calculates revenue correctly",
    async (
      premiumRooms,
      economyRooms,
      premiumOccupancy,
      premiumRevenue,
      economyOccupancy,
      economyRevenue
    ) => {
      renderPage();
      await act(async () => {
        await typeIntoInput("Premium Rooms", premiumRooms);
        await typeIntoInput("Economy Rooms", economyRooms);
      });
      const button = screen.getByRole("button", { name: "Calculate Revenue" });
      userEvent.click(button);
      await waitFor(() => {
        expect(screen.getByTestId("premium-revenue")).toHaveTextContent(
          "€" + premiumRevenue
        );
      });
      expect(screen.getByTestId("premium-occupancy")).toHaveTextContent(
        premiumOccupancy
      );
      expect(screen.getByTestId("economy-revenue")).toHaveTextContent(
        "€" + economyRevenue
      );
      expect(screen.getByTestId("economy-occupancy")).toHaveTextContent(
        economyOccupancy
      );
    }
  );
});
