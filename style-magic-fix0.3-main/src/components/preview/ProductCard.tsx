import { UIConfig } from "@/types/config";
import { useState } from "react";
import { Maximize2, Copy, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  config: UIConfig;
  productImages: string[];
  getFontFamily: (family: string) => string;
  getShadowClass: (shadow: string) => string;
  getJustifyClass: (alignment: string) => string;
}

const materialOptions = [
  { type: "LEATHER", colors: ["#8B4513", "#556B2F", "#2F4F4F", "#3A5F3F", "#6A0DAD", "#5C4033", "#4682B4", "#B22222", "#800020", "#008B8B"] },
  { type: "SILICON", colors: ["#2F4F4F", "#B22222", "#6A0DAD", "#4682B4", "#CD5C5C", "#708238"] },
  { type: "ALUMINIUM", colors: ["#C0C0C0", "#696969"] },
];

export const ProductCard = ({
  config,
  productImages,
  getFontFamily,
  getShadowClass,
  getJustifyClass,
}: ProductCardProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedArm, setSelectedArm] = useState("1. Arms");
  const [selectedFinish, setSelectedFinish] = useState("2. Arms Finish");
  const [selectedMaterial, setSelectedMaterial] = useState<{type: string, color: string}>({
    type: "LEATHER",
    color: "#8B4513"
  });
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleZoom = () => {
    toast.info("Zoom feature - Opening full screen view");
  };

  const handleCopy = () => {
    toast.success("Product configuration copied!");
  };

  const handleCompare = () => {
    toast.info("Compare feature - Add to comparison");
  };

  const isCompact = config.layoutType === "compact";

  return (
    <div
      className={`bg-white transition-all duration-300 ${
        isCompact ? "max-w-sm mx-auto" : "grid lg:grid-cols-2 gap-8"
      }`}
      style={{
        borderRadius: `${config.layout.cardRadius}px`,
        padding: `${config.layout.containerPadding}px`,
        borderWidth: `${config.stroke.weight}px`,
        borderColor: config.stroke.color,
        borderStyle: "solid",
      }}
    >
      {/* Main Product Image & Thumbnails */}
      <div className="space-y-4">
        <div className="relative bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={productImages[selectedImageIndex]}
            alt="Product"
            className="w-full h-auto object-contain"
            style={{
              borderRadius: `${config.gallery.borderRadius}px`,
            }}
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button 
              onClick={handleZoom}
              className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
            <button 
              onClick={handleCopy}
              className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Copy className="h-4 w-4" />
            </button>
            <button 
              onClick={handleCompare}
              className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div
          className={`flex flex-wrap ${getJustifyClass(config.gallery.alignment)}`}
          style={{ gap: `${config.gallery.spacing}px` }}
        >
          {productImages.slice(0, 6).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`flex-shrink-0 w-16 h-16 overflow-hidden border-2 transition-all ${
                selectedImageIndex === idx ? "border-primary" : "border-gray-200"
              }`}
              style={{
                borderRadius: `${config.gallery.borderRadius}px`,
              }}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
          {productImages.length > 6 && (
            <button
              className="flex-shrink-0 w-16 h-16 overflow-hidden border-2 border-gray-200 bg-gray-100 flex items-center justify-center font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
              style={{
                borderRadius: `${config.gallery.borderRadius}px`,
              }}
            >
              +{productImages.length - 6}
            </button>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div
          className={getFontFamily(config.typography.fontFamily)}
          style={{
            fontWeight: config.typography.fontWeight,
            fontSize: `${config.typography.fontSize}px`,
          }}
        >
          <h2
            className="font-bold mb-2"
            style={{
              fontSize: `${parseInt(config.typography.fontSize) * 1.5}px`,
            }}
          >
            Cozy Longe chair
          </h2>
          <p className="text-gray-600 mb-4">Customize your Chair</p>

          {/* Customization Options */}
          <div className="space-y-4">
            {/* Arms Selection */}
            <div
              className="border rounded-lg p-3"
              style={{
                borderRadius: `${config.layout.cardRadius}px`,
                borderColor: config.stroke.color,
                borderWidth: `${config.stroke.weight}px`,
              }}
            >
              <button
                className="w-full flex items-center justify-between"
                onClick={() => setExpandedSection(expandedSection === "arms" ? null : "arms")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded" />
                  <div className="text-left text-sm">
                    <div className="font-medium">{selectedArm}</div>
                    <div className="text-gray-500">Fixed Arms</div>
                  </div>
                </div>
                <span className="text-gray-400">{expandedSection === "arms" ? "▲" : "▼"}</span>
              </button>
            </div>

            {/* Finish Selection */}
            <div
              className="border rounded-lg p-3"
              style={{
                borderRadius: `${config.layout.cardRadius}px`,
                borderColor: config.stroke.color,
                borderWidth: `${config.stroke.weight}px`,
              }}
            >
              <button
                className="w-full flex items-center justify-between"
                onClick={() => setExpandedSection(expandedSection === "finish" ? null : "finish")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded"
                    style={{ backgroundColor: selectedMaterial.color }}
                  />
                  <div className="text-left text-sm">
                    <div className="font-medium">{selectedFinish}</div>
                    <div className="text-gray-500">{selectedMaterial.type} {selectedMaterial.color === "#8B4513" ? "Brown" : ""}</div>
                  </div>
                </div>
                <span className="text-gray-400">{expandedSection === "finish" ? "▲" : "▼"}</span>
              </button>

              {/* Material Colors */}
              {expandedSection === "finish" && (
                <div className="mt-4 space-y-4">
                  {materialOptions.map((material) => (
                    <div key={material.type}>
                      <div className="text-xs text-gray-500 mb-2">{material.type}</div>
                      <div className="flex flex-wrap gap-2">
                        {material.colors.map((color, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedMaterial({ type: material.type, color });
                              toast.success(`Selected ${material.type} finish`);
                            }}
                            className={`w-8 h-8 rounded-full border-2 transition-colors ${
                              selectedMaterial.color === color && selectedMaterial.type === material.type
                                ? "border-primary ring-2 ring-primary ring-offset-2"
                                : "border-gray-200 hover:border-gray-400"
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Legs Selection */}
            <div
              className="border rounded-lg p-3"
              style={{
                borderRadius: `${config.layout.cardRadius}px`,
                borderColor: config.stroke.color,
                borderWidth: `${config.stroke.weight}px`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded" />
                  <div className="text-left text-sm">
                    <div className="font-medium">3. Legs Finish</div>
                    <div className="text-gray-500">Steel</div>
                  </div>
                </div>
                <span className="text-gray-400">▼</span>
              </div>
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-500">Product Price</div>
                <div className="text-2xl font-bold">$ 200</div>
              </div>
              <div className="text-sm text-gray-400 line-through">$ 245</div>
            </div>

            <div className={`flex ${getJustifyClass(config.button.alignment)}`}>
              <button
                className={`px-6 py-3 font-medium transition-all ${getShadowClass(config.button.shadow)}`}
                style={{
                  borderRadius: `${config.button.borderRadius}px`,
                  backgroundColor: config.button.backgroundColor,
                  color: config.button.textColor,
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
