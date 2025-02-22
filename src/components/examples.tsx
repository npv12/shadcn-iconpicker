import { IconPickerControlled } from "./examples/icon-picker-controlled";
import { IconPickerDefault } from "./examples/icon-picker-default";
import { IconPickerCustomTrigger } from "./examples/icon-picker-custom-trigger";
import { IconPickerIconsList } from "./examples/icon-picker-icons-list";

export function Examples() {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Example</h2>
        <p className="text-sm text-muted-foreground">
          Use the IconPicker component in your project.
        </p>
        <h3 className="text-lg font-bold">Controlled</h3>
        <IconPickerControlled />
        <h3 className="text-lg font-bold">Default</h3>
        <IconPickerDefault />
        <h3 className="text-lg font-bold">Custom Trigger</h3>
        <IconPickerCustomTrigger />
        <h3 className="text-lg font-bold">Custom Icons List</h3>
        <IconPickerIconsList />
      </div>
  );
}