import React from "react";
import { render, screen } from "@testing-library/react";
import { IRevenueCardProps, RevenueCard } from "./RevenueCard";

describe("RevenueCard", () => {
  const defaultProps = {
    premiumRoomRevenue: 100,
    premiumRoomOccupancy: 2,
    economyRoomRevenue: 200,
    economyRoomOccupancy: 4,
  };
  const renderComponent = (props: IRevenueCardProps = defaultProps) =>
    render(<RevenueCard {...props} />);

  it("should display correct information", () => {
    renderComponent();
    expect(screen.getByTestId("premium-revenue")).toHaveTextContent(
      "€" + defaultProps.premiumRoomRevenue
    );
    expect(screen.getByTestId("premium-occupancy")).toHaveTextContent(
      String(defaultProps.premiumRoomOccupancy)
    );
    expect(screen.getByTestId("economy-revenue")).toHaveTextContent(
      "€" + defaultProps.economyRoomRevenue
    );
    expect(screen.getByTestId("economy-occupancy")).toHaveTextContent(
      String(defaultProps.economyRoomOccupancy)
    );
  });
});
