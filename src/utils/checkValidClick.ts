interface ValidProps {
  ev: MouseEvent;
  exception: HTMLDivElement | null | undefined;
  valid: string[];
  exclude: string[];
}

export const checkValidClick = ({
  ev,
  exception,
  valid = ["form"],
  exclude = ["button"],
}: ValidProps) => {
  const value =
    !exclude.filter((item) =>
      //@ts-ignore
      item.toLowerCase().includes(ev?.target?.localName.toLowerCase()),
    ).length &&
    (!!valid.filter((val) =>
      val
        .toLowerCase()
        //@ts-ignore
        .includes(ev?.target?.parentNode.localName.toLowerCase()),
    ).length ||
      !!valid.filter((val) =>
        //@ts-ignore
        val.toLowerCase().includes(ev?.target?.localName.toLowerCase()),
      ).length ||
      (exception && ev.target === exception));
  return value;
};
