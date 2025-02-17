"use client";

import { useState, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { lazy, Suspense } from 'react';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={<div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-md " />}>
      <LucideIcon {...props} />
    </Suspense>
  );
}

const ICON_BUTTONS = Object.keys(dynamicIconImports).map((icon) => ({
  icon: icon as keyof typeof dynamicIconImports,
  component: <Icon name={icon as keyof typeof dynamicIconImports} className="w-6 h-6" />
}));

export function IconPicker({ 
  onSelect,
  children,
  searchable = true,
  searchPlaceholder = "Search for an icon..."
}: { 
  onSelect: (icon: keyof typeof dynamicIconImports) => void,
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
      setSearch("");
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
    <Popover open={open} onOpenChange={handleOpenChange} modal={true}>
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
            <TooltipProvider key={icon}>
              <Tooltip>
                <TooltipTrigger
                  className={cn(
                    "p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition",
                    "flex items-center justify-center"
                  )}
                  onClick={() => {
                    onSelect(icon as keyof typeof dynamicIconImports);
                    setOpen(false);
                    setDisplayCount(32);
                    setSearch("");
                  }}>
                  {component}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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