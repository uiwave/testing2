import type { LucideIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterFieldProps {
  icon: LucideIcon;
  label: string;
  value?: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}

export function FilterField({
  icon: Icon,
  label,
  value,
  onValueChange,
  placeholder,
  options,
}: FilterFieldProps) {
  return (
    <div className="group lg:border-border relative flex flex-col gap-2 px-5 py-4 lg:flex-1 lg:border-r">
      <div className="flex items-center gap-2">
        <Icon className="text-primary size-4 shrink-0" />
        <span className="font-heading text-primary text-xs tracking-[3px] uppercase">
          {label}
        </span>
      </div>
      <Select value={value || undefined} onValueChange={onValueChange}>
        <SelectTrigger className="border-border hover:border-primary/60 [&>svg]:text-primary flex h-auto w-full cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white/5 px-4 py-3 text-sm text-white/50 transition-colors focus:ring-0 focus:ring-offset-0 data-placeholder:text-white/50 [&>svg]:size-4 [&>svg]:opacity-100">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="border-border bg-zinc-900 text-white">
          <SelectItem value="todos">Todos</SelectItem>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
