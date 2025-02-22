# Shadcn Icon Picker

A sleek and customizable icon picker component for React, built with shadcn/ui and Lucide Icons.

## Features

- 🎨 Modern and responsive UI
- 🔍 Real-time icon search
- ⚡️ Progressive icon loading
- 🎯 Full Lucide icons support
- 🌗 Dark mode compatible
- 🎛️ Highly customizable

## Installation

### Using npm
```shell
npx shadcn@latest add icon-picker
```

### Using pnpm
```shell
pnpm dlx shadcn@latest add icon-picker
```

### Using Yarn
```shell
yarn dlx shadcn@latest add icon-picker
```

### Using Bun
```shell
bunx shadcn@latest add icon-picker
```

## Usage

```tsx
"use client";

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
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSelect` | `(icon: IconName) => void` | - | Function called when an icon is selected |
| `children` | `ReactNode` | - | Trigger element to open the picker |
| `iconsList` | `{ icon: IconName, alias?: string[] }[]` | all Lucide icons | List of icons to display |
| `searchable` | `boolean` | `true` | Enable/disable search functionality |
| `searchPlaceholder` | `string` | "Search for an icon..." | Search input placeholder |

## Development

### Clone the repository
```shell
git clone https://github.com/alan-crts/shadcn-iconpicker.git
```

### Install dependencies
```shell
npm install
```

### Start development server
```shell
npm run dev
```

## License

MIT © [Alan Courtois](https://github.com/alan-crts)

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the UI components
- [Lucide](https://lucide.dev) for the icons
- [Next.js](https://nextjs.org) for the framework