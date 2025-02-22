"use client";

import { IconPicker, IconName, Icon } from "../../../registry/ui/icon-picker";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PreviewCode } from "../preview-code";

export function IconPickerCustomTriggerExample() {
  const [icon, setIcon] = useState<IconName | undefined>(undefined);

  return (
    <IconPicker value={icon} onValueChange={(icon) => setIcon(icon)}>
      <Button>{icon ? <Icon name={icon} /> : "Select Icon"}</Button>
    </IconPicker>
  );
}

export function IconPickerCustomTrigger() {
  const code = `"use client";
import { IconPicker, IconName, Icon } from "@/components/ui/icon-picker";
import { useState } from "react";

export function IconPickerCustomTriggerExample() {
    const [icon, setIcon] = useState<IconName | undefined>(undefined);

    return (
        <IconPicker value={icon} onValueChange={(icon) => setIcon(icon)}>
            <Button>{icon ? <Icon name={icon} /> : "Select Icon"}</Button>
        </IconPicker>
    );
}`;

  return (
    <PreviewCode
      code={code}
      preview={<IconPickerCustomTriggerExample />}
      language="tsx"
    />
  );
}
