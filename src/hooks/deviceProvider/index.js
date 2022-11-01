import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// eslint-disable-next-line import/no-anonymous-default-export
const deviceContext = createContext();
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [device, setDevice] = useState("");

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  // const isRetina = useMediaQuery({ minResolution: '2dppx' })
  useEffect(() => {
    isDesktopOrLaptop && setDevice("laptop");
  }, [isDesktopOrLaptop]);

  useEffect(() => {
    isBigScreen && setDevice("bigScreen");
  }, [isBigScreen]);

  useEffect(() => {
    isTabletOrMobile && setDevice("mobile");
  }, [isTabletOrMobile]);
  // isBigScreen && setDevice("bigScreen")
  // isTabletOrMobile && setDevice("mobile")
  return (
    <deviceContext.Provider value={{ device: device }}>
      {children}
    </deviceContext.Provider>
  );
};
export const useDevice = () => useContext(deviceContext);
