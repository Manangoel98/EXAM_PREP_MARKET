"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { MKT } from "@/lib/marketing-ui";

interface ComparisonRow {
  feature: string;
  option1: string | boolean;
  option2: string | boolean;
}

interface ComparisonTableProps {
  option1Name: string;
  option2Name: string;
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({
  option1Name,
  option2Name,
  rows,
  className = "",
}: ComparisonTableProps) {
  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle className="mx-auto h-6 w-6 text-emerald-600" />
      ) : (
        <XCircle className="mx-auto h-6 w-6 text-red-500/90" />
      );
    }
    return <span className="text-sm font-medium text-neutral-800 md:text-base">{value}</span>;
  };

  return (
    <div className={`${MKT.tableShell} ${className}`}>
      <table className="w-full border-collapse font-barlow text-neutral-900">
        <thead>
          <tr className="border-b border-black/[0.08] bg-zinc-100/90">
            <th className="border-r border-black/[0.06] p-3 text-left text-sm font-semibold md:p-4 md:text-base">
              Feature
            </th>
            <th className="border-r border-black/[0.06] bg-zinc-50/80 p-3 text-center text-sm font-semibold md:p-4 md:text-base">
              {option1Name}
            </th>
            <th className="bg-white p-3 text-center text-sm font-semibold md:p-4 md:text-base">{option2Name}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <motion.tr
              key={index}
              className="border-b border-black/[0.06] transition-colors hover:bg-zinc-50/80"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: Math.min(index * 0.03, 0.4) }}
            >
              <td className="border-r border-black/[0.06] p-3 text-sm font-semibold text-neutral-900 md:p-4 md:text-base">
                {row.feature}
              </td>
              <td className="border-r border-black/[0.06] bg-zinc-50/50 p-3 text-center md:p-4">
                {renderCell(row.option1)}
              </td>
              <td className="bg-white p-3 text-center md:p-4">{renderCell(row.option2)}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
