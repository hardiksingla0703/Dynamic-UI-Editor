import { UIConfig } from "@/types/config";
import { TypographyEditor } from "./TypographyEditor";
import { ButtonEditor } from "./ButtonEditor";
import { GalleryEditor } from "./GalleryEditor";
import { LayoutEditor } from "./LayoutEditor";
import { StrokeEditor } from "./StrokeEditor";
import { LayoutSwitcher } from "./LayoutSwitcher";
import { Separator } from "@/components/ui/separator";

interface EditorPanelProps {
  config: UIConfig;
  updateConfig: <K extends keyof UIConfig>(
    section: K,
    updates: Partial<UIConfig[K]>
  ) => void;
}

export const EditorPanel = ({ config, updateConfig }: EditorPanelProps) => {
  return (
    <div className="p-6 space-y-6">
      <LayoutSwitcher
        layoutType={config.layoutType}
        onChange={(layoutType) => updateConfig("layoutType" as any, layoutType as any)}
      />
      
      <Separator />
      
      <TypographyEditor
        config={config.typography}
        onChange={(updates) => updateConfig("typography", updates)}
      />
      
      <Separator />
      
      <ButtonEditor
        config={config.button}
        onChange={(updates) => updateConfig("button", updates)}
      />
      
      <Separator />
      
      <GalleryEditor
        config={config.gallery}
        onChange={(updates) => updateConfig("gallery", updates)}
      />
      
      <Separator />
      
      <LayoutEditor
        config={config.layout}
        onChange={(updates) => updateConfig("layout", updates)}
      />
      
      <Separator />
      
      <StrokeEditor
        config={config.stroke}
        onChange={(updates) => updateConfig("stroke", updates)}
      />
    </div>
  );
};
