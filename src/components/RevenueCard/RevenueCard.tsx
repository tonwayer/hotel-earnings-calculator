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
    <section
      aria-label="revenue-card"
      className="border p-4 border-blue-300/80 rounded-md w-[320px]"
    >
      <h2>Revenue</h2>
      <div className="mt-8">
        <div>
          <p>Premium rooms</p>
          <div className="flex justify-around text-center">
            <div className="flex flex-col">
              <img alt="premium rooms" className="w-10" src="./premium.png" />
              <span data-testid="premium-occupancy">
                {premiumRoomOccupancy}
              </span>
            </div>
            <div>
              <img alt="premium revenue" className="w-10" src="./revenue.png" />
              <span data-testid="premium-revenue">
                &euro;{premiumRoomRevenue}
              </span>
            </div>
          </div>
        </div>
        <div>
          <p>Economy rooms</p>
          <div className="flex justify-around text-center">
            <div className="flex flex-col">
              <img alt="economy rooms" className="w-10" src="./economy.png" />
              <span data-testid="economy-occupancy">
                {economyRoomOccupancy}
              </span>
            </div>
            <div>
              <img alt="economy revenue" className="w-10" src="./revenue.png" />
              <span data-testid="economy-revenue">
                &euro;{economyRoomRevenue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
