import { IconsList, IconPicker } from "../../../registry/ui/icon-picker";
import { PreviewCode } from "../preview-code";

export function IconPickerExample() {
    const icons: IconsList = [
        {
            icon: "Github",
            alias: ["git", "social"]
        },
        {
            icon: "Twitter",
            alias: ["X", "social"]
        },
        {
            icon: "Facebook",
            alias: ["meta", "fb", "social"]
        },
        {
            icon: "Instagram",
            alias: ["meta", "ig", "social"]
        },
        {
            icon: "Linkedin",
            alias: ["linkedin", "social"]
        },
        {
            icon: "Youtube",
            alias: ["yt", "social"]
        }
    ];

  return <IconPicker iconsList={icons} />;
}

export function IconPickerIconsList() {
  const code = `"use client";
import { IconPicker, IconList } from "@/components/ui/icon-picker";

export function IconPickerExample() {
    const icons: IconList = [
        {
            icon: "Github",
            alias: ["git", "social"]
        },
        {
            icon: "Twitter",
            alias: ["X", "social"]
        },
        {
            icon: "Facebook",
            alias: ["meta", "fb", "social"]
        },
        {
            icon: "Instagram",
            alias: ["meta", "ig", "social"]
        },
        {
            icon: "Linkedin",
            alias: ["linkedin", "social"]
        },
        {
            icon: "Youtube",
            alias: ["yt", "social"]
        }
    ];

    return <IconPicker iconsList={icons} />;
}`;

  return (
    <PreviewCode code={code} preview={<IconPickerExample />} language="tsx" />
  );
}
