/**
 * Real-time search across units: book topics, video metadata, PDF metadata.
 * PDF file *contents* are not read — add keywords in title/description for search.
 */

function normalize(text) {
  return (text ?? "").toLowerCase();
}

function topicHaystack(unit, book, topic) {
  const tags = Array.isArray(topic.tags) ? topic.tags.join(" ") : "";
  return normalize(
    `${unit.title} ${unit.description ?? ""} ${book.title} ${book.subject ?? ""} ${topic.title} ${tags} ${topic.content}`
  );
}

function videoHaystack(unit, video) {
  const tags = Array.isArray(video.tags) ? video.tags.join(" ") : "";
  return normalize(
    `${unit.title} ${unit.description ?? ""} ${video.title} ${video.description ?? ""} ${tags} ${video.channel ?? ""} ${video.url ?? ""}`
  );
}

function pdfHaystack(unit, pdf) {
  return normalize(`${unit.title} ${unit.description ?? ""} ${pdf.title} ${pdf.description ?? ""} ${pdf.file ?? ""}`);
}

function tokensFromQuery(query) {
  return query.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

/**
 * @param {object[]} units
 * @param {string} query
 * @param {string} [unitFilterId] 'all' or e.g. 'unit-1'
 */
export function searchUnits(units, query, unitFilterId = "all") {
  const tokens = tokensFromQuery(query);
  if (tokens.length === 0) return [];

  const scoped =
    unitFilterId === "all" ? units : units.filter((u) => u.id === unitFilterId);

  const results = [];

  for (const unit of scoped) {
    for (const book of unit.books ?? []) {
      for (const topic of book.topics ?? []) {
        const hay = topicHaystack(unit, book, topic);
        if (tokens.every((t) => hay.includes(t))) {
          results.push({ kind: "topic", unit, book, topic });
        }
      }
    }
    for (const video of unit.videos ?? []) {
      const hay = videoHaystack(unit, video);
      if (tokens.every((t) => hay.includes(t))) {
        results.push({ kind: "video", unit, video });
      }
    }
    for (const pdf of unit.pdfs ?? []) {
      const hay = pdfHaystack(unit, pdf);
      if (tokens.every((t) => hay.includes(t))) {
        results.push({ kind: "pdf", unit, pdf });
      }
    }
  }

  return results;
}

/** Short excerpt around first token match */
export function excerptAroundMatch(content, query, maxLen = 220) {
  const c = content ?? "";
  const q = query.trim();
  if (!q) return c.slice(0, maxLen) + (c.length > maxLen ? "…" : "");

  const lower = c.toLowerCase();
  const token = tokensFromQuery(q).find((t) => lower.includes(t)) ?? q.toLowerCase();
  const idx = lower.indexOf(token);
  if (idx === -1) return c.slice(0, maxLen) + (c.length > maxLen ? "…" : "");

  const pad = Math.floor((maxLen - token.length) / 2);
  const start = Math.max(0, idx - pad);
  const end = Math.min(c.length, idx + token.length + pad);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < c.length ? "…" : "";
  return `${prefix}${c.slice(start, end)}${suffix}`;
}

export function countTopicsInUnits(units) {
  return units.reduce(
    (n, u) =>
      n +
      (u.books ?? []).reduce((m, b) => m + (b.topics?.length ?? 0), 0),
    0
  );
}

export function countVideosInUnits(units) {
  return units.reduce((n, u) => n + (u.videos?.length ?? 0), 0);
}

export function countPdfsInUnits(units) {
  return units.reduce((n, u) => n + (u.pdfs?.length ?? 0), 0);
}

export function getBooksInUnitScope(units, unitFilterId) {
  if (unitFilterId === "all") {
    const list = [];
    for (const unit of units) {
      for (const book of unit.books ?? []) {
        list.push({ unit, book });
      }
    }
    return list;
  }
  const unit = units.find((u) => u.id === unitFilterId);
  if (!unit) return [];
  return (unit.books ?? []).map((book) => ({ unit, book }));
}
