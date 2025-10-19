import { UIConfig } from "@/types/config";
import { ProductCard } from "./ProductCard";

interface PreviewCanvasProps {
  config: UIConfig;
}

const productImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop",
];

export const PreviewCanvas = ({ config }: PreviewCanvasProps) => {
  const getFontFamily = (family: string) => {
    const fontMap: Record<string, string> = {
      Inter: "font-sans",
      Roboto: "font-roboto",
      Poppins: "font-poppins",
      Montserrat: "font-montserrat",
      "Playfair Display": "font-display",
    };
    return fontMap[family] || "font-sans";
  };

  const getShadowClass = (shadow: string) => {
    const shadowMap: Record<string, string> = {
      none: "shadow-none",
      small: "shadow-sm",
      medium: "shadow-md",
      large: "shadow-lg",
    };
    return shadowMap[shadow] || "shadow-md";
  };

  const getJustifyClass = (alignment: string) => {
    const alignMap: Record<string, string> = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    };
    return alignMap[alignment] || "justify-center";
  };

  return (
    <div
      className="min-h-full p-8"
      style={{
        backgroundColor: config.layout.backgroundColor,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <ProductCard
          config={config}
          productImages={productImages}
          getFontFamily={getFontFamily}
          getShadowClass={getShadowClass}
          getJustifyClass={getJustifyClass}
        />
      </div>
    </div>
  );
};
