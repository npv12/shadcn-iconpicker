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
npx shadcn@latest add "https://icon-picker.alan-courtois.fr/r/icon-picker"
```

### Using pnpm
```shell
pnpm dlx shadcn@latest add "https://icon-picker.alan-courtois.fr/r/icon-picker"
```

### Using Yarn
```shell
npx shadcn@latest add "https://icon-picker.alan-courtois.fr/r/icon-picker"
```

### Using Bun
```shell
bunx shadcn@latest add "https://icon-picker.alan-courtois.fr/r/icon-picker"
```

## Usage

```tsx
import { IconPicker } from "@/components/ui/iconPicker";
  
export default function Home() {
  return <IconPicker />;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `IconName` | - | The controlled value of the selected icon |
| `defaultValue` | `IconName` | - | The default value of the selected icon |
| `onValueChange` | `(value: IconName) => void` | - | Callback invoked when an icon is selected |
| `open` | `boolean` | - | Controlled open state of the picker |
| `defaultOpen` | `boolean` | `false` | Default open state of the picker |
| `onOpenChange` | `(open: boolean) => void` | - | Callback invoked when the open state changes |
| `children` | `ReactNode` | - | The trigger element to open the icon picker |
| `searchable` | `boolean` | `true` | Whether the icon picker is searchable |
| `searchPlaceholder` | `string` | "Search for an icon..." | The placeholder for the search input |
| `triggerPlaceholder` | `string` | "Select an icon" | The text displayed on the default trigger button when no icon is selected |
| `iconsList` | `IconList` | all lucide icons | The list of icons to display in the picker |

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