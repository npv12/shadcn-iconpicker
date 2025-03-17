import { IconData, IconPicker } from "../../../registry/ui/icon-picker";
import { PreviewCode } from "../preview-code";

export function IconPickerExample() {
    const icons: IconData[] = [
        {
            name: "github",
            tags: ["git", "social"],
            categories: ["social"]
        },
        {
            name: "twitter",
            tags: ["X", "social"],
            categories: ["social"]
        },
        {
            name: "facebook",
            tags: ["meta", "fb", "social"],
            categories: ["social"]
        },
        {
            name: "instagram",
            tags: ["meta", "ig", "social"],
            categories: ["social"]
        },
        {
            name: "linkedin",
            tags: ["linkedin", "social"],
            categories: ["social"]
        },
        {
            name: "youtube",
            tags: ["yt", "social"],
            categories: ["social"]
        }
    ];

  return <IconPicker iconsList={icons} categorized={false} />;
}

export function IconPickerIconsList() {
  const code = `"use client";
import { IconPicker, IconList } from "@/components/ui/icon-picker";

export function IconPickerExample() {
    const icons: IconList = [
        {
            name: "github",
            tags: ["git", "social"],
            categories: ["social"]
        },
        {
            name: "twitter",
            tags: ["X", "social"],
            categories: ["social"]
        },
        {
            name: "facebook",
            tags: ["meta", "fb", "social"],
            categories: ["social"]
        },
        {
            name: "instagram",
            tags: ["meta", "ig", "social"],
            categories: ["social"]
        },
        {
            name: "linkedin",
            tags: ["linkedin", "social"],
            categories: ["social"]
        },
        {
            name: "youtube",
            tags: ["yt", "social"],
            categories: ["social"]
        }
    ];

    return <IconPicker iconsList={icons} />;
}`;

  return (
    <PreviewCode code={code} preview={<IconPickerExample />} language="tsx" />
  );
}
