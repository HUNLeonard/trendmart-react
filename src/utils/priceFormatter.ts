export const priceFormatter = (price: number) => {
  const dollar = price.toString().split(".")[0];
  const cents = price.toString().split(".")[1];

  return `${
    Number(dollar) < 9 ? dollar.padStart(2, "0") : dollar
  }.${cents.padStart(2, "0")}$`;
};
