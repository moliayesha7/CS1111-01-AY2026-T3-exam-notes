/** Unit 4 — Computer networks. Edit only this file. */

const unit4 = {
  id: "unit-4",
  number: 4,
  title: "Unit 4 — Computer networks",
  description: "Layers, TCP/UDP, HTTP basics.",

  books: [
    {
      id: "u4-cn",
      title: "Computer Networks",
      subject: "Computer Science",
      topics: [
        {
          id: "u4-cn-layers",
          title: "OSI vs TCP/IP",
          tags: ["OSI", "layers"],
          content: `OSI 7: Physical, Data Link, Network, Transport, Session, Presentation, Application.
TCP/IP: Link, Internet, Transport, Application.
Key devices: switches (L2), routers (L3).`,
        },
        {
          id: "u4-cn-tcp",
          title: "TCP vs UDP",
          tags: ["TCP", "UDP", "reliable"],
          content: `TCP: connection-oriented, reliable, ordered, flow & congestion control, heavier header.
UDP: connectionless, best-effort, low latency — VoIP, DNS often use UDP.
Three-way handshake: SYN, SYN-ACK, ACK.`,
        },
        {
          id: "u4-cn-http",
          title: "HTTP & REST basics",
          tags: ["HTTP", "REST", "status"],
          content: `Methods: GET safe, POST create, PUT replace, PATCH partial, DELETE.
Status: 2xx success, 3xx redirect, 4xx client, 5xx server.
REST: stateless resources with standard verbs and representations (often JSON).`,
        },
      ],
    },
  ],

  videos: [],

  pdfs: [],
};

export default unit4;
