import { calculateRevenue } from "./calc_revenue";
import { GUESTS } from "../contants/guest";

describe('calcuateRevenue', () => {
  it.each([
    [3, 3, 3, 738, 3, 167],
    [7, 5, 6, 1054, 4, 189],
    [2, 7, 2, 583, 4, 189],
    [7, 1, 7, 1153, 1, 45],
  ])(
    "returns correct revenue and occupancy",
    async (
      premiumRooms,
      economyRooms,
      premiumOccupancy,
      premiumRevenue,
      economyOccupancy,
      economyRevenue
    ) => {
      const result = calculateRevenue(premiumRooms, economyRooms, GUESTS);
      expect(result).toEqual({
        premiumOccupancy,
        premiumRevenue,
        economyOccupancy,
        economyRevenue
      });
    }
  );
});
