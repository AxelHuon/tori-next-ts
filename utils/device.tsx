export type BreakPointType =
  | "mobileS"
  | "mobileM"
  | "mobileL"
  | "tablet"
  | "tabletL"
  | "laptop"
  | "laptopM"
  | "laptopL"
  | "laptopXL"
  | "laptopXXL"
  | "desktop";

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "860px",
  laptop: "1024px",
  laptopM: "1264px",
  laptopL: "1440px",
  laptopXL: "1660px",
  laptopXXL: "1900px",
  desktop: "2560px",
};

export const getSizeInNumber = (device: BreakPointType) => {
  const pixelString = size[device];
  if (pixelString) {
    return parseInt(pixelString, 10);
  }
  return null;
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  laptopXL: `(min-width: ${size.laptopXL})`,
  laptopXXL: `(min-width: ${size.laptopXXL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
