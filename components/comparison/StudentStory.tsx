import { TrendingUp, Calendar, Target, Sparkles, CheckCircle } from "lucide-react";

interface StudentStoryProps {
  title: string;
  studentName: string;
  studentType: string;
  startScore: string;
  endScore: string;
  timeframe: string;
  strategy: string[];
  keyTakeaways: string[];
  featuresUsed?: string[];
}

export function StudentStory({
  title,
  studentName,
  studentType,
  startScore,
  endScore,
  timeframe,
  strategy,
  keyTakeaways,
  featuresUsed,
}: StudentStoryProps) {
  return (
    <div className="rounded-2xl border border-black/[0.08] bg-gradient-to-br from-zinc-50 to-white p-6 font-barlow md:p-8">
      <div className="mb-6">
        <h3 className="font-heading text-2xl font-semibold text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm font-medium text-neutral-600">
          {studentName} • {studentType}
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/[0.08] bg-white/90 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-neutral-500" aria-hidden />
            <span className="text-sm font-semibold text-neutral-900">Starting Score</span>
          </div>
          <p className="text-2xl font-bold text-neutral-900">{startScore}</p>
        </div>

        <div className="rounded-xl border border-black/[0.08] bg-white/90 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" aria-hidden />
            <span className="text-sm font-semibold text-neutral-900">Ending Score</span>
          </div>
          <p className="text-2xl font-bold text-emerald-700">{endScore}</p>
        </div>

        <div className="rounded-xl border border-black/[0.08] bg-white/90 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-neutral-500" aria-hidden />
            <span className="text-sm font-semibold text-neutral-900">Timeframe</span>
          </div>
          <p className="text-2xl font-bold text-neutral-900">{timeframe}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900">Strategy used</h4>
          <ul className="space-y-1">
            {strategy.map((item, index) => (
              <li key={index} className="text-sm font-medium text-neutral-600">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-neutral-900">Key takeaways</h4>
          <ul className="space-y-1">
            {keyTakeaways.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm font-medium text-neutral-600">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {featuresUsed && featuresUsed.length > 0 && (
          <div>
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
              <Sparkles className="h-4 w-4 text-neutral-700" aria-hidden />
              NomoExam features that helped
            </h4>
            <div className="flex flex-wrap gap-2">
              {featuresUsed.map((feature, index) => (
                <span
                  key={index}
                  className="rounded-full border border-black/[0.08] bg-zinc-100 px-3 py-1 text-sm font-semibold text-neutral-900"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
