import { useState } from "react";
import { UIConfig, defaultConfig } from "@/types/config";
import { EditorPanel } from "@/components/editor/EditorPanel";
import { PreviewCanvas } from "@/components/preview/PreviewCanvas";
import { Button } from "@/components/ui/button";
import { Download, Settings2 } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [config, setConfig] = useState<UIConfig>(defaultConfig);
  const [showEditor, setShowEditor] = useState(true);

  const updateConfig = <K extends keyof UIConfig>(
    section: K,
    updates: Partial<UIConfig[K]>
  ) => {
    setConfig((prev) => {
      if (section === "layoutType") {
        return { ...prev, layoutType: updates as any };
      }
      return {
        ...prev,
        [section]: {
          ...(prev[section] as object),
          ...updates,
        },
      };
    });
  };

  const exportConfig = () => {
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ui-config.json";
    link.click();
    toast.success("Configuration exported successfully!");
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Settings2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Dynamic UI Editor</h1>
              <p className="text-xs text-muted-foreground">Customize your design in real-time</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowEditor(!showEditor)}
            >
              {showEditor ? "Hide" : "Show"} Editor
            </Button>
            <Button size="sm" onClick={exportConfig} className="gap-2">
              <Download className="h-4 w-4" />
              Export Config
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        {showEditor && (
          <div className="w-80 border-r border-border bg-card overflow-y-auto">
            <EditorPanel config={config} updateConfig={updateConfig} />
          </div>
        )}

        {/* Preview Canvas */}
        <div className="flex-1 overflow-auto bg-muted/30">
          <PreviewCanvas config={config} />
        </div>
      </div>
    </div>
  );
};

export default Index;
