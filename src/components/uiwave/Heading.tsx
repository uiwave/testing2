import { cn } from "cn";

interface Props {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function Heading({
  badge,
  title,
  description,
  centered = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-7.5 lg:mb-9.5",
        centered ? "text-center" : "",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-6",
          centered
            ? "items-center"
            : "items-start justify-between xl:flex-row xl:items-end",
        )}
      >
        <h2
          className={cn(
            "font-heading leading-[0.95] text-white",
            centered ? "w-full" : "xl:w-1/2",
          )}
        >
          <span className="font-decoration text-primary mb-1 block text-[clamp(1.5rem,0.5rem+3.5vw,3rem)] leading-none">
            {badge}
          </span>
          <span className="block text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)]">
            {title}
          </span>
        </h2>
        {description && (
          <p className={cn(centered ? "" : "xl:w-[38%]")}>{description}</p>
        )}
      </div>
    </div>
  );
}
