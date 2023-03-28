export interface IRevenueCardProps {
  premiumRoomRevenue: number;
  premiumRoomOccupancy: number;
  economyRoomRevenue: number;
  economyRoomOccupancy: number;
}

export const RevenueCard = (props: IRevenueCardProps) => {
  const {
    premiumRoomRevenue,
    premiumRoomOccupancy,
    economyRoomRevenue,
    economyRoomOccupancy,
  } = props;

  return (
    <section aria-label="revenue-card">
      <h2>Earnings</h2>
      <div className="mt-8">
        <div>
          <p>Premium rooms</p>
          <div>
            Room:{" "}
            <span data-testid="premium-occupancy">{premiumRoomOccupancy}</span>
          </div>
          <div>
            Revenue:{" "}
            <span data-testid="premium-revenue">
              &euro;{premiumRoomRevenue}
            </span>
          </div>
        </div>
        <div>
          <p>Economy rooms</p>
          <div>
            Rooms:{" "}
            <span data-testid="economy-occupancy">{economyRoomOccupancy}</span>
          </div>
          <div>
            Revenue:{" "}
            <span data-testid="economy-revenue">
              &euro;{economyRoomRevenue}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
