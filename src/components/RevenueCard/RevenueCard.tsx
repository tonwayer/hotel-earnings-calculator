export interface IRevenueCardProps {
  premiumRoomRevenue: number,
  premiumRoomOccupancy: number,
  economyRoomRevenue: number,
  economyRoomOccupancy: number,
};

export const RevenueCard = (props: IRevenueCardProps) => {
  return <section aria-label="revenue-card"></section>;
};
