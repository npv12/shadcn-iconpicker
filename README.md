# Shadcn Icon Picker

A sleek and customizable icon picker component for React, built with shadcn/ui and Lucide Icons.

<div align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/98748425/436409260-43833d8f-47ff-4693-97e2-2be838f9aa2b.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250423T071822Z&X-Amz-Expires=300&X-Amz-Signature=7cd8cc859379577ab87e27ff8122dde8dd054941405e448fc157a022a076a2b7&X-Amz-SignedHeaders=host" width="600" />
</div>

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
| `categorized` | `boolean` | `true` | Display icons in categories and add categories buttons to scroll to the desired category. |

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
