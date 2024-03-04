import { PinContext, PinsType } from "./PinContext";
import { ContextProviderPropsType } from "../context.type";
import { useCallback, useEffect, useMemo, useState } from "react";

export const PinProvider = ({ children }: ContextProviderPropsType) => {
  const [pins, setPins] = useState<PinsType>(() => {
    const savePins = localStorage.getItem("pins");
    try {
      return savePins ? JSON.parse(savePins) : [];
    } catch (error) {
      console.error("Error parsing pins from localStorage:", error);
      return [];
    }
  });

  const togglePin = useCallback((pinName: string) => {
    setPins((prev) => {
      const exists = prev.some((item) => item.name === pinName.toLowerCase());
      const newPins = exists
        ? prev.filter((item) => item.name !== pinName.toLowerCase())
        : [...prev, { name: pinName.toLowerCase() }];

      return newPins;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("pins", JSON.stringify(pins));
  }, [pins]);

  const value = useMemo(
    () => ({
      pins,
      togglePin,
    }),
    [pins, togglePin],
  );

  return <PinContext.Provider value={value}>{children}</PinContext.Provider>;
};
