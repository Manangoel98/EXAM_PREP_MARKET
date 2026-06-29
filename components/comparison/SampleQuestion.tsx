import { CheckCircle } from "lucide-react";

interface SampleQuestionProps {
  testName: string;
  question: string;
  options?: string[];
  solution: string;
  answer: string;
  tip?: string;
  variant?: "primary" | "accent";
}

export function SampleQuestion({
  testName,
  question,
  options,
  solution,
  answer,
  tip,
  variant = "primary",
}: SampleQuestionProps) {
  const variantStyles = {
    primary: {
      border: "border-black/[0.12]",
      bg: "bg-zinc-50/80",
      answerColor: "text-neutral-900",
      tipBg: "bg-accent-lime/10 border-accent-lime/30",
    },
    accent: {
      border: "border-black/[0.12]",
      bg: "bg-white",
      answerColor: "text-emerald-800",
      tipBg: "bg-emerald-50 border-emerald-200",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`rounded-2xl border-2 p-6 font-barlow ${styles.border} ${styles.bg}`}>
      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {testName} sample question
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <p className="mb-2 font-semibold text-neutral-900">Question</p>
          <p className="font-medium text-neutral-700">{question}</p>
        </div>

        {options && options.length > 0 && (
          <div className="space-y-1">
            {options.map((option, index) => (
              <p key={index} className="text-sm font-medium text-neutral-600">
                {option}
              </p>
            ))}
          </div>
        )}

        <div className="border-t border-black/[0.08] pt-4">
          <p className="mb-2 font-semibold text-neutral-900">Solution</p>
          <p className="text-sm font-medium leading-relaxed text-neutral-700">{solution}</p>
          <div className="mt-3 flex items-center gap-2">
            <CheckCircle className={`h-5 w-5 ${styles.answerColor}`} aria-hidden />
            <p className={`font-bold ${styles.answerColor}`}>Answer: {answer}</p>
          </div>
        </div>

        {tip && (
          <div className={`mt-4 rounded-xl border p-3 ${styles.tipBg}`}>
            <p className="mb-1 text-sm font-semibold text-neutral-900">Expert tip</p>
            <p className="text-sm font-medium leading-relaxed text-neutral-700">{tip}</p>
          </div>
        )}
      </div>
    </div>
  );
}
