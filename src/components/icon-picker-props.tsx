import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const props = [
    {
      prop: "onSelect",
      type: "function (icon: IconName) => void",
      default: "-",
      description: "The function to call when the icon is selected.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The trigger element to open the icon picker.",
    },
    {
      prop: "iconsList",
      type: `array of objects { icon: IconName, alias?: string[] }[]`,
      default: "all lucide icons",
      description: "The list of icons to display in the icon picker.",
    },
    {
      prop: "searchable",
      type: "boolean",
      default: "true",
      description: "Whether the icon picker is searchable.",
    },
    {
      prop: "searchPlaceholder",
      type: "string",
      default: "Search for an icon...",
      description: "The placeholder for the search input.",
    },
  ]
  
  export function IconsPickerProps() {
    return (
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead className="">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.prop}>
              <TableCell className="font-medium"><span className="text-foreground">{prop.prop}</span></TableCell>
              <TableCell>{prop.type}</TableCell>
              <TableCell>{prop.default}</TableCell>
              <TableCell className="">{prop.description}</TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    )
  }
  