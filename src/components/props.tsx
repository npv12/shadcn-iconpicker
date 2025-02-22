import { IconsPickerProps } from "./icon-picker-props";

export function Props() {
    return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Props</h2>
          <p className="text-sm text-muted-foreground">
            The IconPicker component has the following props:
          </p>
          <IconsPickerProps />
        </div>
    );
}
