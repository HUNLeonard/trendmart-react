export const correctMax = (paramMin: number, paramMax: number) => {
  return paramMax <= 0 ? 0 : paramMax < paramMin ? paramMin : paramMax;
};
