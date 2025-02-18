import { IconPickerExample } from "@/components/Icon-picker-example";
import { IconsPickerProps } from "@/components/icons-picker-props";
import { PreviewCode } from "@/components/preview-code";
import { ScriptCopy } from "@/components/script-copy";
import { IconPicker } from "../../registry/ui/icon-picker";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const iconPickerPreview = <IconPicker />;
  const iconPickerCode = `import { IconPicker } from "@/components/ui/iconPicker";

export default function Home() {
  return <IconPicker />;
}`;

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <main className="max-w-4xl mx-auto px-4 py-20 space-y-4">
        <h1 className="text-2xl font-bold">Icon Picker</h1>
        <p className="text-sm text-muted-foreground">
          A simple icon picker component that allows you to pick an icon from a list of lucide icons.
        </p>
        <PreviewCode
        preview={iconPickerPreview}
        code={iconPickerCode}
        language="tsx"
        v0Url={process.env.NEXT_PUBLIC_REGISTRY_URL}
      />
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Usage</h2>
        <p className="text-sm text-muted-foreground">
          Import the IconPicker component and use it in your project.
        </p>
        <h2 className="text-xl font-bold">Installation</h2>
        <ScriptCopy 
          language="tsx"
          commandMap={{
            pnpm: `pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_REGISTRY_URL}`,
            npm: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_REGISTRY_URL}`,
            yarn: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_REGISTRY_URL}`,
            bun: `bunx --bun shadcn@latest add ${process.env.NEXT_PUBLIC_REGISTRY_URL}`,
          }}
        />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Example</h2>
        <p className="text-sm text-muted-foreground">
          Use the IconPicker component in your project.
        </p>
        <IconPickerExample />
      </div>

      <Separator />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Props</h2>
        <p className="text-sm text-muted-foreground">
          The IconPicker component has the following props:
        </p>
        <IconsPickerProps />
      </div>
      </main>
      <footer className="text-sm text-muted-foreground text-center pb-4">
        <p>
          Made with ❤️ by <a href="https://github.com/alan-crts" className="underline">Alan</a>
        </p>
      </footer>
    </div>
  );
}

