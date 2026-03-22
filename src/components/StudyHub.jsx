"use client";

import { useMemo, useState, useCallback, useId, useEffect } from "react";
import { allUnits } from "@/data/units";
import {
  searchUnits,
  excerptAroundMatch,
  countTopicsInUnits,
  countVideosInUnits,
  countPdfsInUnits,
} from "@/lib/searchNotes";

function HighlightText({ text, query }) {
  const q = query.trim();
  if (!q) return <>{text}</>;

  const tokens = [...new Set(q.split(/\s+/).filter(Boolean))].sort(
    (a, b) => b.length - a.length
  );
  if (tokens.length === 0) return <>{text}</>;

  const pattern = new RegExp(
    `(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );

  const parts = String(text).split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        tokens.some((t) => part.toLowerCase() === t.toLowerCase()) ? (
          <mark
            key={i}
            className="rounded-sm bg-amber-200/90 px-0.5 text-slate-900 dark:bg-amber-400/40 dark:text-amber-50"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function KindBadge({ kind }) {
  const map = {
    topic: { label: "Notes", className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200" },
    video: { label: "Video", className: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200" },
    pdf: { label: "PDF", className: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100" },
  };
  const m = map[kind] ?? map.topic;
  return (
    <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${m.className}`}>{m.label}</span>
  );
}

export default function StudyHub() {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [unitFilter, setUnitFilter] = useState("all");
  const [openTopicId, setOpenTopicId] = useState(null);

  const topicCount = useMemo(() => countTopicsInUnits(allUnits), []);
  const videoCount = useMemo(() => countVideosInUnits(allUnits), []);
  const pdfCount = useMemo(() => countPdfsInUnits(allUnits), []);

  const unitsInBrowseScope = useMemo(() => {
    if (unitFilter === "all") return allUnits;
    return allUnits.filter((u) => u.id === unitFilter);
  }, [unitFilter]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchUnits(allUnits, query, unitFilter);
  }, [query, unitFilter]);

  const clearSearch = useCallback(() => {
    setQuery("");
    setOpenTopicId(null);
  }, []);

  const activeTopic = useMemo(() => {
    if (!openTopicId) return null;
    for (const unit of allUnits) {
      for (const book of unit.books ?? []) {
        const t = book.topics?.find((x) => x.id === openTopicId);
        if (t) return { unit, book, topic: t };
      }
    }
    return null;
  }, [openTopicId]);

  useEffect(() => {
    if (!activeTopic || !query.trim()) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenTopicId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeTopic, query]);

  const renderSearchResult = (item, i) => {
    if (item.kind === "topic") {
      const { unit, book, topic } = item;
      return (
        <li key={`t-${unit.id}-${topic.id}-${i}`}>
          <button
            type="button"
            onClick={() => setOpenTopicId(topic.id)}
            className="w-full rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700"
          >
            <div className="flex flex-wrap items-center gap-2">
              <KindBadge kind="topic" />
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Unit {unit.number} · {book.title}
              </span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">
              <HighlightText text={topic.title} query={query} />
            </h2>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <HighlightText text={excerptAroundMatch(topic.content, query)} query={query} />
            </p>
            {topic.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </button>
        </li>
      );
    }

    if (item.kind === "video") {
      const { unit, video } = item;
      return (
        <li key={`v-${unit.id}-${video.id}-${i}`}>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-center gap-2">
              <KindBadge kind="video" />
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Unit {unit.number}
              </span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">
              <HighlightText text={video.title} query={query} />
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <HighlightText text={excerptAroundMatch(video.description ?? "", query, 280)} query={query} />
            </p>
            {video.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
            >
              Open video
            </a>
          </div>
        </li>
      );
    }

    if (item.kind === "pdf") {
      const { unit, pdf } = item;
      return (
        <li key={`p-${unit.id}-${pdf.id}-${i}`}>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-center gap-2">
              <KindBadge kind="pdf" />
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Unit {unit.number}
              </span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">
              <HighlightText text={pdf.title} query={query} />
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <HighlightText text={excerptAroundMatch(pdf.description ?? "", query, 280)} query={query} />
            </p>
            <a
              href={pdf.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500"
            >
              Open / download PDF
            </a>
          </div>
        </li>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Last-minute exam prep
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Exam Notes Hub</h1>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            9 units · {topicCount} note topics · {videoCount} videos · {pdfCount} PDFs · real-time search
            across notes, video titles/descriptions, and PDF titles/descriptions.
          </p>

          <div className="mt-6">
            <label htmlFor={searchId} className="sr-only">
              Search notes, videos, PDFs
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                aria-hidden
              >
                ⌕
              </span>
              <input
                id={searchId}
                type="search"
                autoComplete="off"
                placeholder="Search notes, video titles, PDF names, tags, keywords…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenTopicId(null);
                }}
                className="w-full rounded-xl border border-zinc-200 bg-white py-3.5 pl-11 pr-24 text-base shadow-sm outline-none ring-emerald-500/30 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-4 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-emerald-400"
              />
              {query ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  Clear
                </button>
              ) : null}
            </div>
          </div>

          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
            Limit PDF search: we don’t read inside PDF files — add important words in each PDF’s title
            or description in the unit data file.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setUnitFilter("all")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                unitFilter === "all"
                  ? "bg-emerald-600 text-white dark:bg-emerald-500"
                  : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              All units
            </button>
            {allUnits.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => setUnitFilter(u.id)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                  unitFilter === u.id
                    ? "bg-emerald-600 text-white dark:bg-emerald-500"
                    : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                Unit {u.number}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        {query.trim() ? (
          <section aria-live="polite">
            <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
              {searchResults.length} match{searchResults.length === 1 ? "" : "es"} for{" "}
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                &ldquo;{query}&rdquo;
              </span>
              {unitFilter !== "all" ? (
                <span className="text-zinc-400">
                  {" "}
                  (Unit {allUnits.find((x) => x.id === unitFilter)?.number})
                </span>
              ) : null}
            </p>
            {searchResults.length === 0 ? (
              <p className="rounded-xl border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                No matches in notes, videos, or PDF metadata. Try different keywords.
              </p>
            ) : (
              <ul className="space-y-3">{searchResults.map((item, i) => renderSearchResult(item, i))}</ul>
            )}
          </section>
        ) : (
          <section>
            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
              Browse by unit (separate pages in code:{" "}
              <code className="rounded bg-zinc-200 px-1 text-xs dark:bg-zinc-800">src/data/units/unit-1.js</code>{" "}
              … <code className="rounded bg-zinc-200 px-1 text-xs dark:bg-zinc-800">unit-9.js</code>
              ).
            </p>

            {unitsInBrowseScope.map((unit) => {
              const hasBooks = (unit.books ?? []).some((b) => (b.topics?.length ?? 0) > 0);
              const hasVideos = (unit.videos?.length ?? 0) > 0;
              const hasPdfs = (unit.pdfs?.length ?? 0) > 0;
              const empty = !hasBooks && !hasVideos && !hasPdfs;

              return (
                <article
                  key={unit.id}
                  className="mb-12 scroll-mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <header className="border-b border-zinc-100 pb-4 dark:border-zinc-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Unit {unit.number}
                    </p>
                    <h2 className="mt-1 text-xl font-bold">{unit.title}</h2>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{unit.description}</p>
                    <p className="mt-2 text-xs text-zinc-400">
                      Data file:{" "}
                      <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
                        src/data/units/unit-{unit.number}.js
                      </code>
                      {hasPdfs || unit.number === 1 ? (
                        <>
                          {" "}
                          · PDFs folder:{" "}
                          <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">
                            public/unit-{unit.number}/
                          </code>
                        </>
                      ) : null}
                    </p>
                  </header>

                  {empty ? (
                    <p className="mt-4 text-sm text-zinc-500">
                      No books, videos, or PDFs yet — edit this unit’s data file to add content.
                    </p>
                  ) : null}

                  {hasBooks ? (
                    <div className="mt-6">
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-500">
                        Books &amp; notes
                      </h3>
                      <ul className="space-y-2">
                        {(unit.books ?? []).flatMap((book) =>
                          (book.topics ?? []).map((topic) => {
                            const rowKey = `${unit.id}-${book.id}-${topic.id}`;
                            const open = openTopicId === topic.id;
                            return (
                              <li
                                key={rowKey}
                                className="overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-800"
                              >
                                <button
                                  type="button"
                                  onClick={() => setOpenTopicId(open ? null : topic.id)}
                                  className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/80"
                                >
                                  <div>
                                    <p className="text-xs text-emerald-600 dark:text-emerald-400">
                                      {book.title}
                                    </p>
                                    <span className="font-semibold">{topic.title}</span>
                                  </div>
                                  <span className="shrink-0 text-zinc-400">{open ? "▲" : "▼"}</span>
                                </button>
                                {open ? (
                                  <div className="border-t border-zinc-100 px-4 py-4 dark:border-zinc-800">
                                    {topic.tags?.length ? (
                                      <div className="mb-3 flex flex-wrap gap-1.5">
                                        {topic.tags.map((tag) => (
                                          <span
                                            key={tag}
                                            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800"
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    ) : null}
                                    <div className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                                      {topic.content}
                                    </div>
                                  </div>
                                ) : null}
                              </li>
                            );
                          })
                        )}
                      </ul>
                    </div>
                  ) : null}

                  {hasVideos ? (
                    <div className="mt-8">
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-500">
                        Video tutorials
                      </h3>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {(unit.videos ?? []).map((video) => (
                          <li
                            key={video.id}
                            className="rounded-xl border border-violet-200/80 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-950/20"
                          >
                            <p className="text-sm font-semibold">{video.title}</p>
                            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                              {video.description}
                            </p>
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-block text-sm font-medium text-violet-700 underline hover:no-underline dark:text-violet-300"
                            >
                              Watch →
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {hasPdfs ? (
                    <div className="mt-8">
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-500">
                        PDF files
                      </h3>
                      <ul className="space-y-2">
                        {(unit.pdfs ?? []).map((pdf) => (
                          <li
                            key={pdf.id}
                            className="flex flex-col gap-1 rounded-xl border border-amber-200/80 bg-amber-50/50 px-4 py-3 dark:border-amber-900/40 dark:bg-amber-950/20 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div>
                              <p className="font-medium">{pdf.title}</p>
                              <p className="text-xs text-zinc-600 dark:text-zinc-400">{pdf.description}</p>
                            </div>
                            <a
                              href={pdf.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 rounded-lg bg-amber-600 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-amber-500"
                            >
                              Open PDF
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </section>
        )}

        {activeTopic && query.trim() ? (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="topic-modal-title"
            onClick={() => setOpenTopicId(null)}
          >
            <div
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
              role="document"
            >
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Unit {activeTopic.unit.number} · {activeTopic.book.title}
              </p>
              <h2 id="topic-modal-title" className="mt-1 text-xl font-bold">
                {activeTopic.topic.title}
              </h2>
              {activeTopic.topic.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {activeTopic.topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <HighlightText text={activeTopic.topic.content} query={query} />
              </div>
              <button
                type="button"
                onClick={() => setOpenTopicId(null)}
                className="mt-6 w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        One data file per unit:{" "}
        <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">src/data/units/unit-N.js</code>
      </footer>
    </div>
  );
}
