import { Button } from "../commons/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const AccountInfoReg = () => {
  return (
    <Accordion type="single" collapsible className="border-t mt-5">
      <AccordionItem value="acc-info">
        <AccordionTrigger className=" px-2 text-zinc-700 py-3 outline-blue-500 data-[state=open]:text-blue-600 data-[state=open]:outline hover:no-underline">
          Account information
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
