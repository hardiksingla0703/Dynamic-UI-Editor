import { LayoutConfig } from "@/types/config";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Layout } from "lucide-react";

interface LayoutEditorProps {
  config: LayoutConfig;
  onChange: (updates: Partial<LayoutConfig>) => void;
}

export const LayoutEditor = ({ config, onChange }: LayoutEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Layout className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">General Layout</h3>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs">Card Corner Radius</Label>
            <span className="text-xs text-muted-foreground">{config.cardRadius}px</span>
          </div>
          <Slider
            min={0}
            max={32}
            step={2}
            value={[parseInt(config.cardRadius)]}
            onValueChange={(value) => onChange({ cardRadius: value[0].toString() })}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs">Container Padding</Label>
            <span className="text-xs text-muted-foreground">{config.containerPadding}px</span>
          </div>
          <Slider
            min={0}
            max={48}
            step={4}
            value={[parseInt(config.containerPadding)]}
            onValueChange={(value) => onChange({ containerPadding: value[0].toString() })}
          />
        </div>

        <div>
          <Label className="text-xs">Section Background Color</Label>
          <div className="flex gap-2 mt-1.5">
            <Input
              type="color"
              value={config.backgroundColor}
              onChange={(e) => onChange({ backgroundColor: e.target.value })}
              className="w-12 h-10 p-1"
            />
            <Input
              type="text"
              value={config.backgroundColor}
              onChange={(e) => onChange({ backgroundColor: e.target.value })}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
