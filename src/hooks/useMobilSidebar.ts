import { useEffect, useState } from "react";

export const useMobilSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopView, setIsDesktopView] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const controller = new AbortController();
    let firstClick = false;

    const handleCloseClick = () => {
      if (isOpen) {
        if (!firstClick) {
          firstClick = true;
          return;
        }
        setIsOpen(false);
      }
    };

    const handleResizeClose = () => {
      if (window.innerWidth >= 768) {
        setIsDesktopView(true);
        setIsOpen(false);
      } else {
        setIsDesktopView(false);
      }
    };

    window.addEventListener("click", handleCloseClick, {
      signal: controller.signal,
    });
    window.addEventListener("resize", handleResizeClose, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [isOpen]);

  return { isOpen, toggleOpen, isDesktopView };
};
