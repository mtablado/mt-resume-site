"use client";

import { useState } from "react";

const NAVY = "#1e3a5f";

export default function ExpandableText({ text, className }: { text: string; className?: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      {expanded && <p className="text-gray-600 leading-relaxed mb-2">{text}</p>}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="text-sm font-semibold hover:underline cursor-pointer"
        style={{ color: NAVY }}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
