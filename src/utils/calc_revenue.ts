export const calculateRevenue = (
  numberOfPremiumRooms: number,
  numberOfEconomyRooms: number,
  guests: number[]
) => {
  guests.sort((a, b) => b - a);

  let premiumOccupancy = 0;
  let premiumRevenue = 0;

  let economyRevenue = 0;
  let economyOccupancy = 0;
  for (let i = 0; i < guests.length; i++) {
    if (guests[i] >= 100) {
      if (premiumOccupancy < numberOfPremiumRooms) {
        premiumRevenue += guests[i];
        premiumOccupancy++;
      }
    } else {
      if (
        premiumOccupancy < numberOfPremiumRooms &&
        guests.length - i > numberOfEconomyRooms
      ) {
        premiumRevenue += guests[i];
        premiumOccupancy++;
      } else if (numberOfEconomyRooms > economyOccupancy) {
        economyOccupancy++;
        economyRevenue += guests[i];
      }
    }
  }
  return {
    premiumRevenue,
    premiumOccupancy,
    economyRevenue,
    economyOccupancy,
  }
};
