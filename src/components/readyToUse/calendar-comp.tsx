"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import ruLocale from "date-fns/locale/ru";

import { cn } from "@/lib/utils";
import { Button } from "@/components/readyToUse/button";
import { Calendar } from "@/components/readyToUse/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/readyToUse/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 10, 6),
    to: addDays(new Date(2023, 10, 9), 3),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            //variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd LLL , y", { locale: ruLocale })} -{" "}
                  {format(date.to, "dd LLL , y", { locale: ruLocale })}
                </>
              ) : (
                format(date.from, "dd LLL , y", { locale: ruLocale })
              )
            ) : (
              <span>Выберите дату</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
           locale={ruLocale}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
