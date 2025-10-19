import { GalleryConfig } from "@/types/config";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Images } from "lucide-react";

interface GalleryEditorProps {
  config: GalleryConfig;
  onChange: (updates: Partial<GalleryConfig>) => void;
}

export const GalleryEditor = ({ config, onChange }: GalleryEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Images className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">Galleries/Images</h3>
      </div>

      <div className="space-y-3">
        <div>
          <Label className="text-xs">Gallery Alignment</Label>
          <Select
            value={config.alignment}
            onValueChange={(value: any) => onChange({ alignment: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Grid Left</SelectItem>
              <SelectItem value="center">Grid Center</SelectItem>
              <SelectItem value="right">Grid Right</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs">Spacing Between Images</Label>
            <span className="text-xs text-muted-foreground">{config.spacing}px</span>
          </div>
          <Slider
            min={0}
            max={48}
            step={4}
            value={[parseInt(config.spacing)]}
            onValueChange={(value) => onChange({ spacing: value[0].toString() })}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs">Image Border Radius</Label>
            <span className="text-xs text-muted-foreground">{config.borderRadius}px</span>
          </div>
          <Slider
            min={0}
            max={24}
            step={2}
            value={[parseInt(config.borderRadius)]}
            onValueChange={(value) => onChange({ borderRadius: value[0].toString() })}
          />
        </div>
      </div>
    </div>
  );
};
