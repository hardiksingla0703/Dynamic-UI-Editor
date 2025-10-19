export interface TypographyConfig {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
}

export interface ButtonConfig {
  borderRadius: string;
  shadow: "none" | "small" | "medium" | "large";
  alignment: "left" | "center" | "right";
  backgroundColor: string;
  textColor: string;
}

export interface GalleryConfig {
  alignment: "left" | "center" | "right";
  spacing: string;
  borderRadius: string;
}

export interface LayoutConfig {
  cardRadius: string;
  containerPadding: string;
  backgroundColor: string;
}

export interface StrokeConfig {
  color: string;
  weight: string;
}

export interface UIConfig {
  typography: TypographyConfig;
  button: ButtonConfig;
  gallery: GalleryConfig;
  layout: LayoutConfig;
  stroke: StrokeConfig;
  layoutType: "compact" | "expanded";
}

export const defaultConfig: UIConfig = {
  typography: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16",
  },
  button: {
    borderRadius: "8",
    shadow: "medium",
    alignment: "center",
    backgroundColor: "#D84A3F",
    textColor: "#FFFFFF",
  },
  gallery: {
    alignment: "left",
    spacing: "16",
    borderRadius: "8",
  },
  layout: {
    cardRadius: "16",
    containerPadding: "24",
    backgroundColor: "#FFFFFF",
  },
  stroke: {
    color: "#E5E7EB",
    weight: "1",
  },
  layoutType: "compact",
};
