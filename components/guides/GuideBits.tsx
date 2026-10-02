import type { ReactNode } from "react";
import Link from "next/link";

export function GuideH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-barlow mt-12 text-2xl font-bold text-neutral-900">{children}</h2>
  );
}

export function GuideH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-barlow mt-8 text-xl font-bold text-neutral-900">{children}</h3>
  );
}

export function InLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-primary hover:underline">
      {children}
    </Link>
  );
}

export function OfficialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="font-semibold text-primary hover:underline" rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}

export function GuideTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-neutral-50 text-neutral-900">
          <tr>
            {headers.map((header) => (
              <th key={header} className="p-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-neutral-200">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className={`p-3 ${index === 0 ? "font-semibold text-neutral-900" : "text-neutral-700"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
