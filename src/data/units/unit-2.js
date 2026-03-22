/** Unit 2 — Operating systems (sample notes). Edit only this file. */

const unit2 = {
  id: "unit-2",
  number: 2,
  title: "Unit 2 — Operating systems",
  description: "Processes, scheduling, memory, and file systems.",

  books: [
    {
      id: "u2-os",
      title: "Operating Systems",
      subject: "Computer Science",
      topics: [
        {
          id: "u2-os-process",
          title: "Process vs thread",
          tags: ["process", "thread", "PCB"],
          content: `Process: program in execution, own address space, heavier context switch.
Thread: lightweight unit within process, shares heap, separate stack.
PCB stores state, registers, memory maps, open files.`,
        },
        {
          id: "u2-os-scheduling",
          title: "CPU scheduling algorithms",
          tags: ["FCFS", "SJF", "RR"],
          content: `FCFS: simple, convoy effect. SJF: optimal avg waiting for batch, starvation risk.
Priority scheduling: aging prevents starvation. Round Robin: time quantum, interactive systems.
Metrics: throughput, turnaround time, waiting time, response time.`,
        },
        {
          id: "u2-os-sync",
          title: "Synchronization & deadlocks",
          tags: ["mutex", "semaphore", "deadlock"],
          content: `Mutex/binary semaphore for mutual exclusion. Counting semaphore for resource pools.
Deadlock: mutual exclusion, hold and wait, no preemption, circular wait.
Banker's algorithm: safe state avoidance. Detection: resource allocation graph.`,
        },
        {
          id: "u2-os-memory",
          title: "Memory management",
          tags: ["paging", "segmentation"],
          content: `Paging: fixed-size frames, internal fragmentation. TLB caches VPN→PFN.
Segmentation: logical units, external fragmentation.
Virtual memory: demand paging, page faults, replacement (FIFO, LRU approximations).`,
        },
        {
          id: "u2-os-files",
          title: "File systems",
          tags: ["inode", "directory"],
          content: `inode stores metadata; pointers to data blocks. Directory maps names → inode.
Journaling: crash consistency. FAT vs inode-based designs.`,
        },
        {
          id: "u2-os-io",
          title: "I/O & disk scheduling",
          tags: ["disk", "FCFS", "SCAN"],
          content: `Disk scheduling: FCFS, SSTF (starvation), SCAN/C-SCAN (elevator), LOOK.
Buffering/spooling decouple CPU and devices.`,
        },
      ],
    },
  ],

  videos: [
    {
      id: "u2-v-deadlock",
      title: "Deadlock conditions and banker's algorithm",
      description: "Exam-focused summary of deadlock prevention, avoidance, and detection.",
      url: "https://www.youtube.com/watch?v=UV57yxtCp4U",
      tags: ["deadlock", "banker", "OS"],
      channel: "Replace with your link",
    },
  ],

  pdfs: [],
};

export default unit2;
