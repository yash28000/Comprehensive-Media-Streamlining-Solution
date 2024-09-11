import { Button } from "@/components/commons/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowBigDown } from "lucide-react";

const menuMapping = [
  {
    label: "Active Agents",
    menuOptions: [
      {
        label: "Project Manager (PM) Agent",
      },
      {
        label: "Architecture Agent",
      },
      {
        label: "Reverse Engineering Agent",
      },
      {
        label: "Debugging Agent",
      },
      {
        label: "Senior Developer Review Agent",
      },
    ],
  },
  {
    label: "Passive Agents",
    menuOptions: [
      {
        label: "Code Generation Agent",
      },
      {
        label: "Code Analysis and Improvement Agents",
        menuOptions: [
          {
            label: "Code Review Agent",
          },
          {
            label: "Code Refactoring Agent",
          },
          {
            label: "Code Refactoring Agent",
          },
        ],
      },
      {
        label: "Testing Agent",
      },
      {
        label: "Security Agent",
      },
      {
        label: "Documentation Agent",
      },
    ],
  },
];
export default function Sidebar() {
  return (
    <div className="h-screen max-w-[300px]">
      {menuMapping.map((item, index) => (
        <Collapsible key={index}>
          <CollapsibleTrigger asChild>
            <Button>
              <span className="flex justify-between">
                {item.label}
                <ArrowBigDown size={10} />
              </span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {item.menuOptions.map((_item, _index) => (
              <>
                {_item.menuOptions ? (
                  <>
                    <Collapsible key={_index}>
                      <CollapsibleTrigger asChild>
                        <Button>
                          <span className="flex justify-between">
                            {_item.label}
                            <ArrowBigDown size={10} />
                          </span>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {_item.menuOptions.map((bmenu, bindex) => (
                          <Button key={bindex}>{bmenu.label}</Button>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </>
                ) : (
                  <>
                    <Button key={_index}>{_item.label}</Button>
                  </>
                )}
              </>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}
