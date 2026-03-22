/** Unit 5 — Software engineering. Edit only this file. */

const unit5 = {
  id: "unit-5",
  number: 5,
  title: "Unit 5 — Software engineering",
  description: "SDLC, testing, and design principles.",

  books: [
    {
      id: "u5-se",
      title: "Software Engineering",
      subject: "Computer Science",
      topics: [
        {
          id: "u5-se-sdlc",
          title: "SDLC models",
          tags: ["waterfall", "agile"],
          content: `Waterfall: sequential, rigid, docs-heavy. Agile: iterations, feedback, working software.
Scrum: roles (PO, SM, devs), sprints, backlog, ceremonies.
Risk: spiral model emphasizes risk analysis each iteration.`,
        },
        {
          id: "u5-se-testing",
          title: "Testing levels",
          tags: ["unit", "integration"],
          content: `Unit: smallest parts, mocks. Integration: modules together. System: full system.
Black-box vs white-box. Regression ensures fixes don't break old behavior.`,
        },
        {
          id: "u5-se-oop",
          title: "SOLID (quick)",
          tags: ["SOLID", "design"],
          content: `S: single responsibility. O: open/closed. L: Liskov substitution. I: interface segregation. D: dependency inversion.
Coupling low, cohesion high — maintainable modules.`,
        },
      ],
    },
  ],

  videos: [],

  pdfs: [],
};

export default unit5;
