import { cn } from "@/lib/utils";

type PriorityTagProps = {
  priority: "low" | "medium" | "high" | "critical";
  className?: string;
};

export default function PriorityTag({ priority, className }: PriorityTagProps) {
  const priorityConfig = {
    low: {
      text: "Low",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      icon: "↓",
    },
    medium: {
      text: "Medium",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      icon: "→",
    },
    high: {
      text: "High",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      icon: "↑",
    },
    critical: {
      text: "Critical",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      icon: "⚠",
    },
  };

  const config = priorityConfig[priority] || priorityConfig.medium;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium",
        config.bgColor,
        config.textColor,
        className
      )}
    >
      <span>{config.icon}</span>
      <span>{config.text} Priority</span>
    </span>
  );
}