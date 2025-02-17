"use client";

import { useState, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

const toSnakeCase = (str: string): string => {
  const transformations = [
    [/Icon$/, ''],                       
    [/([A-Z]+)([A-Z][a-z])/g, '$1-$2'],   
    [/([a-z])([A-Z])/g, '$1-$2'],        
    [/([a-zA-Z])(\d+)|(\d+)([a-zA-Z])/g, '$1$3-$2$4'],
    [/([a-zA-Z])(\d+)/g, '$1-$2'],
    [/(\d+)([a-zA-Z])/g, '$1-$2'],
  ] as const;

  return transformations.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    str
  ).toLowerCase();
};

const ICONS = Object.keys(LucideIcons)
  .filter(name => name.endsWith('Icon'))
  .map(toSnakeCase)
  .filter(name => !name.includes('create-lucide') && name !== '');

const uniqueIcons = [...new Set(ICONS)];

const ICON_BUTTONS = uniqueIcons.map((icon) => ({
  icon,
  component: <DynamicIcon name={icon as IconName} className="w-6 h-6" />
}));

export function IconPicker({ 
  onSelect,
  children,
  searchable = true,
  searchPlaceholder = "Search for an icon..."
}: { 
  onSelect: (icon: IconName) => void,
  children?: React.ReactNode,
  searchable?: boolean,
  searchPlaceholder?: string
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [displayCount, setDisplayCount] = useState(32);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setDisplayCount(32);
    }
  };

  const filteredIcons = useMemo(() => 
    search.trim() === "" 
      ? ICON_BUTTONS 
      : ICON_BUTTONS.filter(({ icon }) =>
          icon.toLowerCase().includes(search.toLowerCase())
        ),
    [search]
  );

  const displayedIcons = useMemo(() => 
    filteredIcons.slice(0, displayCount),
    [filteredIcons, displayCount]
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 20) {
      setDisplayCount(prev => Math.min(prev + 32, filteredIcons.length));
    }
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        {children || (
          <Button variant="outline">
            Select an icon
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2">
        {searchable && (
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-2"
          />
        )}
        <div 
          className="grid grid-cols-4 gap-2 max-h-60 overflow-auto"
          onScroll={handleScroll}
        >
          {displayedIcons.map(({ icon, component }) => (
            <button
              key={icon}
              className={cn(
                "p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition",
                "flex items-center justify-center"
              )}
              onClick={() => {
                onSelect(icon as IconName);
                setDisplayCount(32);
                setOpen(false);
              }}
            >
              {component}
            </button>
          ))}
          {filteredIcons.length === 0 && (
            <div className="text-center text-gray-500 col-span-4">
              No icon found
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
