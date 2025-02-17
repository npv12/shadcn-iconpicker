"use client";

import { useState } from "react";
import { IconPicker } from "../../registry/ui/icon-picker";
import { Button } from "@/components/ui/button";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { PreviewCode } from "@/components/preview-code";

export function IconPickerExample() {
  const [icon, setIcon] = useState<IconName | null>(null);
  const iconPickerPreview = (
    <IconPicker onSelect={(icon) => setIcon(icon)}>
      <Button>
        {icon ? (
          <>
            <DynamicIcon name={icon} /> {icon}
          </>
        ) : (
          "Pick Icon"
        )}
      </Button>
    </IconPicker>
  );

  const iconPickerCode = `"use client";

import { useState } from "react";
import { IconPicker } from "@/components/ui/icon-picker";
import { Button } from "@/components/ui/button";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

export function IconPickerExample() {
  const [icon, setIcon] = useState<IconName | null>(null);
  return (
    <IconPicker onSelect={(icon) => setIcon(icon)}>
      <Button>
        {icon ? (
          <>
            <DynamicIcon name={icon} /> {icon}
          </>
        ) : (
          "Pick Icon"
        )}
      </Button>
    </IconPicker>
  );
}`;

  return (
    <PreviewCode
      preview={iconPickerPreview}
      code={iconPickerCode}
      language="tsx"
      v0Url="https://alan-crts.github.io/shadcn-iconpicker/icon-picker.json"
    />
  );
}
