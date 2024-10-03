"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "../ui/scroll-area";

export function Collapse() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[250px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Starred</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <ScrollArea className="h-full w-full p-2">
        <div className="px-3 py-2 font-kanit text-sm">@radix-ui/primitives</div>
        <CollapsibleContent className="space-y-2">
          <div className="px-3 py-2 font-kanit text-sm">@radix-ui/colors</div>
          <div className="px-3 py-2 font-kanit text-sm">@stitches/react</div>
        </CollapsibleContent>
      </ScrollArea>
    </Collapsible>
  );
}
