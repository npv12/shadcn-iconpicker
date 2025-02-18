"use client";

import { useState } from "react";
import { IconName, IconPicker } from "../../registry/ui/icon-picker";
import { Icon } from "../../registry/ui/icon";
import { Button } from "@/components/ui/button";
import { PreviewCode } from "@/components/preview-code";

export function IconPickerExample() {
  const [icon, setIcon] = useState<IconName | null>(null);
  const iconPickerPreview = (
    <IconPicker onSelect={(icon) => setIcon(icon)}>
      <Button>
        {icon ? (
          <>
            <Icon name={icon} /> {icon}
          </>
        ) : (
          "Pick Icon"
        )}
      </Button>
    </IconPicker>
  );

  const iconPickerCode = `"use client";

import { useState } from "react";
import { IconName, IconPicker } from "@/components/ui/icon-picker";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export function IconPickerExample() {
  const [icon, setIcon] = useState<IconName | null>(null);
  return (
    <IconPicker onSelect={(icon) => setIcon(icon)}>
      <Button>
        {icon ? (
          <>
            <Icon name={icon} /> {icon}
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
      v0Url={process.env.NEXT_PUBLIC_REGISTRY_URL}
    />
  );
}
