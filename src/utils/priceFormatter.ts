export const priceFormatter = (price: number = 0) => {
  const dollar = price.toString().split(".")[0];
  const cents = Number(price).toFixed(2).toString().split(".")[1];

  return `$${dollar.padStart(1, "0")}.${cents.padStart(2, "0")}`;
};
