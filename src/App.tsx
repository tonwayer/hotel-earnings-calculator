import React, { useState } from "react";
import { AvailableRoomForm } from "./components/AvailableRoomForm";
import { RevenueCard } from "./components/RevenueCard";
import { GUESTS } from "./contants/guest";
import { calculateRevenue } from "./utils/calc_revenue";

function App() {
  const [economyRoomState, setEconomyRoomState] = useState({
    occupancy: 0,
    revenue: 0,
  });

  const [premiumRoomState, setPremiumRoomState] = useState({
    occupancy: 0,
    revenue: 0,
  });

  const onRoomStateSubmit = (
    numberOfAvailablePremiumRooms: number,
    numberOfAvailableEconomyRooms: number
  ) => {
    const result = calculateRevenue(
      numberOfAvailablePremiumRooms,
      numberOfAvailableEconomyRooms,
      GUESTS
    );
    setEconomyRoomState({
      occupancy: result.economyOccupancy,
      revenue: result.economyRevenue,
    });
    setPremiumRoomState({
      occupancy: result.premiumOccupancy,
      revenue: result.premiumRevenue,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Hotel Revenue Calculator</h1>
      <div className="flex gap-3 items-center mt-10">
        <AvailableRoomForm onRoomStateSubmit={onRoomStateSubmit} />
        <span className="text-8xl">
          =&gt;
        </span>
        <RevenueCard
          economyRoomOccupancy={economyRoomState.occupancy}
          economyRoomRevenue={economyRoomState.revenue}
          premiumRoomOccupancy={premiumRoomState.occupancy}
          premiumRoomRevenue={premiumRoomState.revenue}
        />
      </div>
    </div>
  );
}

export default App;
