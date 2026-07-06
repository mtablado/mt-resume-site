"use client";

import { useMemo, useState } from "react";
import type { Publication, PublicationType } from "@/content/speaking";
import ExpandableText from "./ExpandableText";
import { NAVY, TYPE_STYLES, VideoThumb, CtaButtons } from "./shared";

const CATEGORY_ORDER: PublicationType[] = ["talk", "panel", "press", "article", "podcast"];
type SortOption = "relevance" | "date";

function parseDate(dateStr: string): number {
  const parsed = Date.parse(dateStr);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function toggleInSet<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

function PillButton({
  active,
  activeColor,
  onClick,
  children,
}: {
  active: boolean;
  activeColor: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors"
      style={
        active
          ? { backgroundColor: activeColor, borderColor: activeColor, color: "#ffffff" }
          : { borderColor: "#e5e7eb", color: "#6b7280" }
      }
    >
      {children}
    </button>
  );
}

function FeaturedCard({ pub }: { pub: Publication }) {
  const typeStyle = TYPE_STYLES[pub.type];
  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-white">
      <VideoThumb pub={pub} className="aspect-video md:aspect-auto md:w-2/5 md:flex-shrink-0" />
      <div className="p-10 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {pub.eventBadge && (
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: "#4285F4" }}
            >
              {pub.eventBadge}
            </span>
          )}
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: typeStyle.color }}>
            {typeStyle.label}
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">{pub.title}</h3>
        <p className="text-sm text-gray-500 mb-5">
          {pub.venue} · {pub.date}
        </p>
        <ExpandableText text={pub.description} className="mb-8 flex-1" />
        <CtaButtons pub={pub} />
      </div>
    </div>
  );
}

function GridCard({ pub }: { pub: Publication }) {
  const typeStyle = TYPE_STYLES[pub.type];
  const hasVideo = Boolean(pub.videoUrl && pub.videoUrl !== "#");

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">
      <VideoThumb pub={pub} className="aspect-video" />

      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {pub.eventBadge && (
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: "#4285F4" }}
            >
              {pub.eventBadge}
            </span>
          )}
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: typeStyle.color }}>
            {typeStyle.label}
          </p>
          {hasVideo && !pub.thumbnail && (
            <span className="text-xs font-semibold" style={{ color: NAVY }}>
              ▶ Video available
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{pub.title}</h3>
        <p className="text-sm text-gray-500 mb-4">
          {pub.venue} · {pub.date}
        </p>
        <ExpandableText text={pub.description} className="mb-6 flex-1" />
        <CtaButtons pub={pub} />
      </div>
    </div>
  );
}

export default function PublicationsExplorer({ publications }: { publications: Publication[] }) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [activeCategories, setActiveCategories] = useState<Set<PublicationType>>(new Set());
  const [activeEvents, setActiveEvents] = useState<Set<string>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = useMemo(
    () => CATEGORY_ORDER.filter((cat) => publications.some((pub) => pub.type === cat)),
    [publications]
  );
  const events = useMemo(
    () => Array.from(new Set(publications.map((pub) => pub.event))).sort((a, b) => a.localeCompare(b)),
    [publications]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = publications.filter((pub) => {
      if (activeCategories.size > 0 && !activeCategories.has(pub.type)) return false;
      if (activeEvents.size > 0 && !activeEvents.has(pub.event)) return false;
      if (q && !`${pub.title} ${pub.venue} ${pub.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
    if (sortBy === "date") {
      return [...list].sort((a, b) => parseDate(b.date) - parseDate(a.date));
    }
    return [...list].sort((a, b) => a.relevance - b.relevance || parseDate(b.date) - parseDate(a.date));
  }, [publications, query, activeCategories, activeEvents, sortBy]);

  const featuredMatches = filtered.filter((pub) => pub.featured);
  const gridMatches = filtered.filter((pub) => !pub.featured);

  const activeFilterCount = activeCategories.size + activeEvents.size;
  const hasActiveFilters = query.length > 0 || activeFilterCount > 0 || sortBy !== "relevance";

  function clearFilters() {
    setQuery("");
    setSortBy("relevance");
    setActiveCategories(new Set());
    setActiveEvents(new Set());
  }

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#f1f5f9" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center" style={{ color: NAVY }}>
          Selected Work
        </p>
        <h2 className="text-4xl font-bold text-gray-900 text-center leading-tight mb-10">
          Talks, Articles &amp; Participations
        </h2>

        {/* ── Toolbar ─────────────────────────────────────────────────────── */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search talks, articles, panels..."
              aria-label="Search publications"
              className="w-full flex-1 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <div className="flex items-center gap-2 text-sm shrink-0">
              <label htmlFor="sort-by" className="text-gray-500 font-medium">
                Sort:
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-slate-400"
                style={{ color: NAVY }}
              >
                <option value="relevance">Relevance</option>
                <option value="date">Date (Newest First)</option>
              </select>
            </div>
          </div>

          {(categories.length > 1 || events.length > 1) && (
            <button
              type="button"
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="text-xs font-semibold underline"
              style={{ color: NAVY }}
            >
              {filtersOpen ? "Hide filters" : "More filters"}
              {!filtersOpen && activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
            </button>
          )}

          {filtersOpen && categories.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400 mr-1">Category</span>
              {categories.map((cat) => (
                <PillButton
                  key={cat}
                  active={activeCategories.has(cat)}
                  activeColor={TYPE_STYLES[cat].color}
                  onClick={() => setActiveCategories((prev) => toggleInSet(prev, cat))}
                >
                  {TYPE_STYLES[cat].label}
                </PillButton>
              ))}
            </div>
          )}

          {filtersOpen && events.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400 mr-1">Event</span>
              {events.map((ev) => (
                <PillButton
                  key={ev}
                  active={activeEvents.has(ev)}
                  activeColor={NAVY}
                  onClick={() => setActiveEvents((prev) => toggleInSet(prev, ev))}
                >
                  {ev}
                </PillButton>
              ))}
            </div>
          )}

          {hasActiveFilters && (
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">
                Showing {filtered.length} of {publications.length}
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold underline"
                style={{ color: NAVY }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* ── Highlight ───────────────────────────────────────────────────── */}
        {featuredMatches.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border"
                style={{ color: "#d97706", borderColor: "#d97706" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#d97706" }} />
                Career Highlight — In Progress, More To Come
              </span>
            </div>
            {featuredMatches.map((pub) => (
              <FeaturedCard key={pub.title} pub={pub} />
            ))}
          </div>
        )}

        {/* ── Grid ────────────────────────────────────────────────────────── */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-16">No results match your search or filters.</p>
        ) : gridMatches.length === 0 ? (
          <p className="text-center text-gray-500 py-8">The rest of the results are shown in the highlight above.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridMatches.map((pub) => (
              <GridCard key={pub.title} pub={pub} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
