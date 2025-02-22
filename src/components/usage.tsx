import { ScriptCopy } from "./script-copy";

export function Usage() {
  return (
    <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Usage</h2>
          <p className="text-sm text-muted-foreground">
          Import the IconPicker component and use it in your project.
        </p>
        <h2 className="text-xl font-bold">Installation</h2>
        <ScriptCopy 
          language="tsx"
          commandMap={{
            pnpm: `pnpm dlx shadcn@latest add "${process.env.NEXT_PUBLIC_REGISTRY_URL}"`,
            npm: `npx shadcn@latest add "${process.env.NEXT_PUBLIC_REGISTRY_URL}"`,
            yarn: `npx shadcn@latest add "${process.env.NEXT_PUBLIC_REGISTRY_URL}"`,
            bun: `bunx --bun shadcn@latest add "${process.env.NEXT_PUBLIC_REGISTRY_URL}"`,
          }}
        />
      </div>
  );
}