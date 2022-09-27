export const calculateAge = (
  birthDay: number,
  birthMonth: number,
  birthYear: number,
): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  let calculatedAge = currentYear - birthYear;

  if (currentMonth < birthMonth - 1) {
    calculatedAge -= 1;
  }
  if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
    calculatedAge -= 1;
  }

  return calculatedAge;
};
