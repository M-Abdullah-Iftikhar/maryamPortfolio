"use client";

import { PrintIcon } from "./Icons";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-token bg-elev text-sm font-medium hover:border-accent hover:text-accent transition-colors"
      aria-label="Print resume"
    >
      <PrintIcon className="h-4 w-4" />
      <span className="hidden sm:inline">Print</span>
    </button>
  );
}
