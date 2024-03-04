import { createContext, useContext } from "react";

export type PinDataType = {
  name: string;
};

export type PinsType = PinDataType[];

export type PinContextType = {
  pins: PinsType;
  togglePin: (pin: string) => void;
};

export const PinContext = createContext<PinContextType>({
  pins: [],
  togglePin: () => {},
});

export const usePinContext = () => useContext<PinContextType>(PinContext);
