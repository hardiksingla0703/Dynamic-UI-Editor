import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Columns2, Maximize2 } from "lucide-react";

interface LayoutSwitcherProps {
  layoutType: "compact" | "expanded";
  onChange: (layout: "compact" | "expanded") => void;
}

export const LayoutSwitcher = ({ layoutType, onChange }: LayoutSwitcherProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-xs font-semibold">Layout Switching</Label>
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant={layoutType === "compact" ? "default" : "outline"}
          size="sm"
          onClick={() => onChange("compact")}
          className="gap-2"
        >
          <Columns2 className="h-4 w-4" />
          Mobile
        </Button>
        <Button
          variant={layoutType === "expanded" ? "default" : "outline"}
          size="sm"
          onClick={() => onChange("expanded")}
          className="gap-2"
        >
          <Maximize2 className="h-4 w-4" />
          Desktop
        </Button>
      </div>
    </div>
  );
};
