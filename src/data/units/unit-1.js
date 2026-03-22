/**
 * Unit 1 — edit this file only for Unit 1.
 * Put PDF files in: public/unit-1/your-file.pdf  →  file: "/unit-1/your-file.pdf"
 * Search uses: title, description, tags, notes, video titles/descriptions, PDF titles/descriptions.
 */

const unit1 = {
  id: "unit-1",
  number: 1,
  title: "Unit 1 — Data structures & algorithms",
  description: "Core DSA topics, video walkthroughs, and PDF handouts for this unit.",

  books: [
    {
      id: "u1-ds",
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      topics: [
        {
          id: "u1-ds-big-o",
          title: "Time & space complexity (Big-O)",
          tags: ["complexity", "asymptotic", "exam"],
          content: `Big-O describes worst-case growth as input size n grows.
Common classes (fastest → slowest): O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n).
Rules: drop constants, keep dominant term, nested loops multiply.
Space complexity counts extra memory (arrays, recursion stack).`,
        },
        {
          id: "u1-ds-arrays",
          title: "Arrays & dynamic arrays",
          tags: ["array", "list", "memory"],
          content: `Array: contiguous memory, O(1) index access, O(n) insert/delete in middle.
Dynamic array: amortized O(1) append via doubling capacity when full.
2D arrays: row-major vs column-major layout affects cache performance.`,
        },
        {
          id: "u1-ds-linked",
          title: "Linked lists vs arrays",
          tags: ["linked list", "pointer"],
          content: `Singly linked: O(1) insert at head, O(n) search, no backward traversal.
Doubly linked: O(1) delete with node pointer, more memory overhead.
Arrays win for cache locality; lists win for frequent inserts/deletes at ends.`,
        },
        {
          id: "u1-ds-stack-queue",
          title: "Stack & queue",
          tags: ["LIFO", "FIFO"],
          content: `Stack: LIFO — push/pop O(1). Used for DFS, parentheses matching, undo.
Queue: FIFO — enqueue/dequeue O(1) with pointers. Used for BFS, scheduling.
Deque generalizes both ends.`,
        },
        {
          id: "u1-ds-hash",
          title: "Hash tables",
          tags: ["hashing", "collision"],
          content: `Average O(1) get/insert with good hash function and load factor.
Collisions: chaining (linked lists in buckets) vs open addressing (linear/quadratic probing).
Rehash when load factor too high. Keys must be hashable and comparable for equality.`,
        },
        {
          id: "u1-ds-trees",
          title: "Binary trees & BST",
          tags: ["tree", "BST", "traversal"],
          content: `BST property: left < root < right. Inorder traversal gives sorted order for BST.
Balanced BST (AVL/Red-Black) keeps height O(log n) for operations.
Traversals: preorder (copy tree), inorder (sorted), postorder (delete).`,
        },
        {
          id: "u1-ds-heaps",
          title: "Heaps & priority queues",
          tags: ["heap", "priority"],
          content: `Min-heap: parent ≤ children. Insert/fix-up O(log n), extract-min O(log n).
Array representation: node i has children 2i+1, 2i+2.
Used in Dijkstra, heap sort, scheduling.`,
        },
        {
          id: "u1-ds-graphs",
          title: "Graph representations & BFS/DFS",
          tags: ["graph", "BFS", "DFS"],
          content: `Adjacency list: O(V+E) space, good for sparse graphs.
Adjacency matrix: O(V²), fast edge lookup O(1).
BFS: shortest path in unweighted graphs, level-order. DFS: cycles, topological sort, components.`,
        },
        {
          id: "u1-ds-sort",
          title: "Sorting quick recap",
          tags: ["sort", "merge", "quick"],
          content: `Merge sort: stable, O(n log n) time, O(n) space.
Quick sort: average O(n log n), worst O(n²) if bad pivot; in-place.
Heap sort: O(n log n), in-place, not stable. Counting/radix for integers in range.`,
        },
        {
          id: "u1-ds-dp",
          title: "Dynamic programming patterns",
          tags: ["DP", "memoization"],
          content: `Identify optimal substructure + overlapping subproblems.
Top-down memoization vs bottom-up tabulation.
Classic: Fibonacci, LCS, knapsack, coin change, edit distance.`,
        },
      ],
    },
  ],

  videos: [
    {
      id: "u1-v-big-o",
      title: "Big-O notation for exams",
      description:
        "Quick revision of time complexity, common classes, and how to read nested loops — matches your written notes on complexity.",
      url: "https://www.youtube.com/watch?v=Mo4vesaut8g",
      tags: ["Big-O", "complexity", "revision"],
      channel: "Sample — replace with your playlist",
    },
    {
      id: "u1-v-bfs-dfs",
      title: "BFS and DFS explained",
      description:
        "Graph traversal patterns for viva and MCQs: queue vs stack, use cases, and complexity.",
      url: "https://www.youtube.com/watch?v=oDqjPvD54Ss",
      tags: ["graph", "BFS", "DFS", "tutorial"],
      channel: "Sample — replace with your playlist",
    },
  ],

  /** Add your real PDFs under public/unit-1/ — these paths are searchable by title & description */
  pdfs: [
    {
      id: "u1-pdf-slides",
      title: "Unit 1 — Lecture slides (PDF)",
      description:
        "Chapter overview and diagrams — search keywords: slides, lecture, unit one, PDF handout.",
      file: "/unit-1/lecture-slides.pdf",
    },
    {
      id: "u1-pdf-practice",
      title: "Unit 1 — Practice questions (PDF)",
      description: "Short exam-style questions for last-minute practice before the test.",
      file: "/unit-1/practice-questions.pdf",
    },
  ],
};

export default unit1;
