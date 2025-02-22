"use client";

import { useState } from "react";
import { IconPicker, IconName, Icon } from "../../../registry/ui/icon-picker";
import { PreviewCode } from "../preview-code";

const IconPickerExample = () => {
  const [icon, setIcon] = useState<IconName | undefined>(undefined);
  return (
    <div className="flex flex-col gap-2 items-center">
      <IconPicker value={icon} onValueChange={(icon) => setIcon(icon)} className="w-fit" />
      <div className="flex items-center gap-2">
        Selected icon: {
        icon ? (
          <>
            <Icon name={icon}/> {icon}
          </>
        ) : (
          "None"
        )}
      </div>
    </div>
  );
};

export function IconPickerControlled() {
  const code = `"use client";
import { useState } from "react";
import { IconPicker, IconName } from "@/components/ui/icon-picker";
import { Icon } from "@/components/ui/icon";

export function IconPickerExample() {
  const [icon, setIcon] = useState<IconName | undefined>(undefined);
  return (
        <div className="flex flex-col gap-2 items-center">
            <IconPicker value={icon} onValueChange={(icon) => setIcon(icon)} className="w-fit" />
            <div className="flex items-center gap-2">
            Selected icon: {
            icon ? (
                <>
                <Icon name={icon} /> {icon}
                </>
            ) : (
                "None"
            )}
            </div>
        </div>
    );
}`;

  return (
    <>
      <PreviewCode code={code} language="tsx" preview={<IconPickerExample />} />
    </>
  );
}
