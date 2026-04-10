"use client";

import { MKT } from "@/lib/marketing-ui";

interface ScoreConversion {
  sat: number;
  act: number;
  percentile: number;
}

interface ScoreChartProps {
  data: ScoreConversion[];
  highlightSAT?: number;
  highlightACT?: number;
}

export function ScoreChart({ data, highlightSAT, highlightACT }: ScoreChartProps) {
  return (
    <div className={MKT.tableShell}>
      <table className="w-full border-collapse font-barlow text-neutral-900">
        <thead>
          <tr className="border-b border-black/[0.08] bg-zinc-100/90">
            <th className="border-r border-black/[0.06] p-3 text-left text-sm font-semibold md:p-4">
              SAT score
            </th>
            <th className="border-r border-black/[0.06] p-3 text-left text-sm font-semibold md:p-4">
              ACT equivalent
            </th>
            <th className="p-3 text-left text-sm font-semibold md:p-4">Percentile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const isHighlighted =
              (highlightSAT && row.sat === highlightSAT) ||
              (highlightACT && row.act === highlightACT);

            return (
              <tr
                key={index}
                className={`border-b border-black/[0.06] ${
                  isHighlighted ? "bg-accent-lime/15 font-semibold" : "hover:bg-zinc-50/80"
                }`}
              >
                <td className="border-r border-black/[0.06] p-3 md:p-4">{row.sat}</td>
                <td className="border-r border-black/[0.06] p-3 md:p-4">{row.act}</td>
                <td className="p-3 md:p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 max-w-[100px] flex-1 rounded-full bg-zinc-200">
                      <div
                        className="h-2 rounded-full bg-neutral-900 transition-all"
                        style={{ width: `${row.percentile}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{row.percentile}%</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

interface SimpleScoreTableProps {
  title: string;
  data: Array<{
    label: string;
    value: string;
    highlight?: boolean;
  }>;
}

export function SimpleScoreTable({ title, data }: SimpleScoreTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.08] font-barlow shadow-sm">
      <div className="border-b border-black/[0.08] bg-zinc-100/90 px-4 py-3">
        <h4 className="font-semibold text-neutral-900">{title}</h4>
      </div>
      <div className="divide-y divide-black/[0.06] bg-white">
        {data.map((row, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-4 py-3 ${
              row.highlight ? "bg-accent-lime/10 font-semibold" : ""
            }`}
          >
            <span className="text-sm font-medium text-neutral-600">{row.label}</span>
            <span className="font-medium text-neutral-900">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
