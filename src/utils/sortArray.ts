export const sortArray = <T>(array: T[], sortBy: string) => {
  if (!array.length) return array;

  let sortingValue = "";

  if (sortBy.endsWith("Desc")) {
    sortingValue = sortBy.slice(0, sortBy.length - 4);
    if (typeof array[0][sortingValue as keyof T] === "string") {
      return array.sort((itemA, itemB) =>
        (itemB[sortingValue as keyof T] as string).localeCompare(
          itemA[sortingValue as keyof T] as string,
        ),
      );
    }
    return array.sort(
      (itemA, itemB) =>
        (itemB[sortingValue as keyof T] as number) -
        (itemA[sortingValue as keyof T] as number),
    );
  } else {
    if (sortBy.endsWith("Asc")) {
      sortingValue = sortBy.slice(0, sortBy.length - 3);
    } else {
      sortingValue = sortBy;
    }
    if (typeof array[0][sortingValue as keyof T] === "string") {
      return array.sort((itemA, itemB) =>
        (itemA[sortingValue as keyof T] as string).localeCompare(
          itemB[sortingValue as keyof T] as string,
        ),
      );
    }
    return array.sort(
      (itemA, itemB) =>
        (itemA[sortingValue as keyof T] as number) -
        (itemB[sortingValue as keyof T] as number),
    );
  }
};
