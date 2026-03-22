/** Unit 3 — DBMS. Edit only this file. PDFs: public/unit-3/… */

const unit3 = {
  id: "unit-3",
  number: 3,
  title: "Unit 3 — Database systems",
  description: "SQL, normalization, transactions, and indexing.",

  books: [
    {
      id: "u3-dbms",
      title: "Database Management Systems",
      subject: "Computer Science",
      topics: [
        {
          id: "u3-db-keys",
          title: "Keys & normal forms",
          tags: ["normalization", "FD"],
          content: `Superkey: uniquely identifies row. Candidate key: minimal superkey. Primary key: chosen candidate.
1NF: atomic values. 2NF: no partial dependency on part of composite key.
3NF: no transitive dependency. BCNF: stricter — every determinant is a superkey.`,
        },
        {
          id: "u3-db-sql",
          title: "SQL essentials",
          tags: ["SELECT", "JOIN"],
          content: `JOIN types: INNER (match both), LEFT (all left + matches), RIGHT, FULL.
GROUP BY + HAVING (filter groups) vs WHERE (filter rows).
Indexes speed SELECT, cost space and slow writes slightly.`,
        },
        {
          id: "u3-db-transactions",
          title: "Transactions & ACID",
          tags: ["ACID", "isolation"],
          content: `ACID: Atomicity, Consistency, Isolation, Durability.
Isolation levels: Read Uncommitted → Read Committed → Repeatable Read → Serializable.
2PL prevents conflicts; can cause deadlocks.`,
        },
        {
          id: "u3-db-indexing",
          title: "Indexing & query optimization",
          tags: ["B-tree", "hash index"],
          content: `B+ tree: common for range queries, balanced I/O. Hash index: equality only.
Covering index includes all columns needed — avoids table lookup.
Explain plans show cost estimates.`,
        },
      ],
    },
  ],

  videos: [
    {
      id: "u3-v-sql",
      title: "SQL JOINs revision",
      description: "INNER, LEFT, RIGHT joins with examples for written exams.",
      url: "https://www.youtube.com/watch?v=9yeOJ0ZMUYw",
      tags: ["SQL", "JOIN", "exam"],
      channel: "Replace with your link",
    },
  ],

  pdfs: [],
};

export default unit3;
