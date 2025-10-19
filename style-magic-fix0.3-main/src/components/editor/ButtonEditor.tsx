import { ButtonConfig } from "@/types/config";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { RectangleHorizontal } from "lucide-react";

interface ButtonEditorProps {
  config: ButtonConfig;
  onChange: (updates: Partial<ButtonConfig>) => void;
}

export const ButtonEditor = ({ config, onChange }: ButtonEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <RectangleHorizontal className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">Button</h3>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs">Border Radius</Label>
            <span className="text-xs text-muted-foreground">{config.borderRadius}px</span>
          </div>
          <Slider
            min={0}
            max={50}
            step={1}
            value={[parseInt(config.borderRadius)]}
            onValueChange={(value) => onChange({ borderRadius: value[0].toString() })}
          />
        </div>

        <div>
          <Label className="text-xs">Shadow</Label>
          <Select
            value={config.shadow}
            onValueChange={(value: any) => onChange({ shadow: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-xs">Alignment</Label>
          <Select
            value={config.alignment}
            onValueChange={(value: any) => onChange({ alignment: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-xs">Background Color</Label>
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

        <div>
          <Label className="text-xs">Text Color</Label>
          <div className="flex gap-2 mt-1.5">
            <Input
              type="color"
              value={config.textColor}
              onChange={(e) => onChange({ textColor: e.target.value })}
              className="w-12 h-10 p-1"
            />
            <Input
              type="text"
              value={config.textColor}
              onChange={(e) => onChange({ textColor: e.target.value })}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
