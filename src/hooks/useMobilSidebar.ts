import { useEffect, useState } from "react";
// import { checkValidClick } from "../utils/checkValidClick";

export const useMobilSidebar = () =>
  //exception?: HTMLDivElement | null
  {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktopView, setIsDesktopView] = useState(true);

    const toggleOpen = () => {
      setIsOpen((prev) => !prev);
    };

    useEffect(() => {
      const controller = new AbortController();
      // let firstClick = false;
      // const handleCloseClick = (ev: MouseEvent) => {
      //   if (isOpen) {
      //     const value = checkValidClick({
      //       ev,
      //       exception,
      //       valid: ["form"],
      //       exclude: ["button"],
      //     });

      //     if (value) {
      //       return;
      //     }
      //     if (!firstClick) {
      //       firstClick = true;
      //       return;
      //     }
      //     setIsOpen(false);
      //   }
      // };

      const handleResizeClose = () => {
        if (window.innerWidth >= 768) {
          setIsDesktopView(true);
          setIsOpen(false);
        } else {
          setIsDesktopView(false);
        }
      };

      // window.addEventListener("click", handleCloseClick, {
      //   signal: controller.signal,
      // });
      window.addEventListener("resize", handleResizeClose, {
        signal: controller.signal,
      });

      handleResizeClose();

      return () => {
        controller.abort();
      };
    }, [isOpen]);

    return { isOpen, toggleOpen, isDesktopView };
  };
