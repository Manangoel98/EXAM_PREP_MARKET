import { Lightbulb } from "lucide-react";

interface ExpertTipProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
}

export function ExpertTip({ title, children, variant = "default" }: ExpertTipProps) {
  const variants = {
    default: "border-black/[0.08] bg-zinc-50 text-neutral-900",
    primary: "border-accent-lime/40 bg-accent-lime/10 text-neutral-900",
    success: "border-emerald-200 bg-emerald-50/80 text-emerald-950",
    warning: "border-amber-200 bg-amber-50/90 text-amber-950",
  };

  return (
    <div className={`rounded-2xl border p-4 font-barlow md:p-5 ${variants[variant]}`}>
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
        <div>
          <p className="mb-1 font-semibold text-neutral-900">Expert tip: {title}</p>
          <div className="text-sm font-medium leading-relaxed text-neutral-600">{children}</div>
        </div>
      </div>
    </div>
  );
}
