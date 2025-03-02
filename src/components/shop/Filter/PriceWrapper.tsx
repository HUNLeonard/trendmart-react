import { ChevronDown, DollarSign } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { cn } from "../../../utils/cn";
import { useMobilSidebar } from "../../../hooks/useMobilSidebar";

const PriceWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDesktopView } = useMobilSidebar()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isDesktopView) {
      setIsOpen(false);
    }
  }, [isDesktopView])

  const toggleOpen = useCallback(() => {
    setIsOpen(p => !p)
  }, [])

  return (
    <div className="w-full">
      {isDesktopView ?
        <div className="relative w-full">
          <div className="flex items-center gap-1 mb-1.5">
            <DollarSign size={16} className="text-primary" />
            <p className="font-medium text-sm text-neutral-dark/80">Price Range</p>
          </div>
          <button
            type="button"
            onClick={toggleOpen}
            className="border border-neutral-medium/80 rounded-lg p-2.5 w-full bg-white hover:bg-neutral-medium/20 transition-colors duration-300 flex items-center justify-between cursor-pointer">
            {/* <span className="text-neutral-dark">
              {searchParams.priceMin || 0} - {searchParams.priceMax || "any"}
            </span> */}
            <ChevronDown
              size={18}
              className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={cn(
              "bg-white rounded-lg shadow-lg overflow-hidden z-10 w-full",
              isOpen ? "max-h-96 py-4 px-4 border" : "max-h-0 border-0",
              "absolute top-full mt-1 left-0",
              "flex gap-4 flex-col transition-all duration-300",
            )}
          >
            {children}
          </div>
        </div>
        : <div className="w-full">
          <div className="flex items-center gap-1 mb-1.5">
            <DollarSign size={16} className="text-primary" />
            <p className="font-medium text-sm text-neutral-dark/80">Price Range</p>
          </div>
          {children}
        </div>
      }
    </div>
  );
};

export default PriceWrapper;
