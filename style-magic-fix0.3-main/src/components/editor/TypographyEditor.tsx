import { TypographyConfig } from "@/types/config";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Type } from "lucide-react";

interface TypographyEditorProps {
  config: TypographyConfig;
  onChange: (updates: Partial<TypographyConfig>) => void;
}

const fontFamilies = ["Roboto", "Inter", "Poppins", "Montserrat", "Playfair Display"];
const fontWeights = ["300", "400", "500", "600", "700", "800", "900"];

export const TypographyEditor = ({ config, onChange }: TypographyEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Type className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">Typography</h3>
      </div>

      <div className="space-y-3">
        <div>
          <Label className="text-xs">Font Family</Label>
          <Select
            value={config.fontFamily}
            onValueChange={(value) => onChange({ fontFamily: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontFamilies.map((font) => (
                <SelectItem key={font} value={font}>
                  <span style={{ fontFamily: font }}>{font}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-xs">Font Weight</Label>
          <Select
            value={config.fontWeight}
            onValueChange={(value) => onChange({ fontWeight: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontWeights.map((weight) => (
                <SelectItem key={weight} value={weight}>
                  {weight}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs">Font Size</Label>
            <span className="text-xs text-muted-foreground">{config.fontSize}px</span>
          </div>
          <Slider
            min={10}
            max={60}
            step={1}
            value={[parseInt(config.fontSize)]}
            onValueChange={(value) => onChange({ fontSize: value[0].toString() })}
          />
        </div>
      </div>
    </div>
  );
};
