/** Unit 7 — add books, videos, and PDFs here. Files: public/unit-7/ */

const unit7 = {
  id: "unit-7",
  number: 7,
  title: "Unit 7 — Programming Fundamentals",
  description: `Programming Paradigm: Structured, Functional, and Object Oriented 
Program: Problem analysis, design, and development of solution 
Algorithm: Sequencing, Selection, and Iteration 
Debugging: Logical Errors`,

   books: [ 
      {
      id: "u5-programing-fundamentals",
      title: "Programming Fundamentals",
      subject: "Computer Science",
      topics: [        
        {
          id: "u7-programing-html-files",
          title: "Programming Html Files",
          tags: ["Programming Html Files"],
          content: `
          MV, T. (2019, November 12). What exactly is a programming paradigm? freeCodeCamp.org. https://www.freecodecamp.org/news/what-exactly-is-a-programming-paradigm/
Busbee, K. L., & Braunschweig, D. (2018).Structured programming. In Programming fundamentals: A modular structured approach using C++. Rebus Community. https://press.rebus.community/programmingfundamentals/chapter/structured-programming/
`,
        },
        {
          id: "u7-programing-languages",
          title: "Computer Programming Languages",
          tags: ["Computer Programming Languages"],
          content: `A programming language is an artificial language used by programmers and
understandable (not necessarily directly) for computers. It is an intermediary in the
transfer instructions from the programmer to the computer which may be the compiler
or interpreter. Before run, the programmer’s instructions are usually translated into
machine language and only then are executed by a computer. In contrast to natural
human languages, computer programming language must be clear so that only a
single meaning can be derived from its sentences. The main objective of the study of
programming languages is to improve the use of programming languages. This means
to increase the programmer’s ability to develop effective programs by growing the
vocabulary of useful programming constructs, but also to allow them a better choice
of programming language in the context of the problems to be solved.
3.1.1 A Very Brief History of Languages and Programming Paradigms
To be executed, a computer program should reside in primary memory (RAM). To be
understandable for processor, a program should be represented in memory as a set
of binary numbers − machine instructions. The instruction pointer, which points to
the next machine instruction to be executed, defines the actual state of the computer.
The execution sequence of a group of machine instructions is called flow of control.
One can say that a program running on a computer is simply a sequence of bytes.
Professionally, this is referred to as machine code. Programs for the first computers
were only written in machine code; this period lasted until the end of the 1940s, and
it is known in informatics as the pre-lingual phase. Each instruction of machine code
performs a task, which is specific for the computer design, i.e. is hardware dependent.
Modern computers still perform numerical machine codes, but they are created
through the compilation of original programs, written by programmers in a highlevel language. Direct writing of numerical machine code is not often done nowadays,
because it is a painstaking, labor-intensive and error inclined job. The writing of
machine code has been facilitated by assembly languages, which are more palatable
to programmers. An assembly language is a low-level programming language and is
specific to particular computer architecture like a machine code, but it uses mnemonic
technique to aid information retention by programmers. The ability to program in
assembly language is considered to be an indicator of a high level of programming
skills because when the program is written in assembly language the programmer is
responsible of allocating memory and managing the use of processor registers and
other memory resources.
In the history of programming languages, the 1950s-1960s are known as a period of
exploiting machine power. It was at this time the first high-level compiled programming
languages (more abstract than assemblers) came about. These were autocodes like
FORTRAN and COBOL. To be executed, the autocode program had to be compiled and
assembled. Autocode versions written for different computer architectures were not
necessarily similar to each other. The languages created during this period are often
referred to as algorithmic languages. They were designed to express mathematical
or symbolic computations (e.g., algebraic and logic operations in notation similar
to scientific notation). These languages allow the use of subroutines to aid in the
reusing of code. The most common algorithmic languages are FORTRAN, Algol, Lisp
and C. Programs which are written in a high-level programming language, consist of
English-like statements with very limited vocabulary. The statements are controlled
by a strict syntax rules.
From today’s point of view, the most important event in the development of
programming languages turned out to be what is known as the ‘software crisis’. It
is a state of conflict between increasing customer demands and the impossibility of
distributing in time new, useful, efficient and cheap software systems by software
developers. Such a situation began for the first time in the 1960s, and in accordance
with some opinion, it continues today. To address the problems of the software crisis
the discipline of software engineering came into being. In response to this situation,
computer scientists have developed new types [19] of programming languages. The
first are languages for business problem solving like COBOL and SQL, which were
designed to be more similar to English, so that both programmers and business
people could read and understand code written in these languages. The second, but
not the last are education-oriented languages like Basic, Pascal, Logo and Hypertalk,
which were developed to expand the group of software developers, and provided easy
and convenient tools for programming time-sharing computers and later personal
computers. It is worth noting that they were built to simplify the existing professional
languages and were intended to be easy to learn by novices. Yet one important
solution for the software crisis turned out to be the problem complexity reduction.
The struggle to manage the complexity of software systems gave us object oriented
languages (C++, Ada, Java). They carry on a hierarchy of types (classes of objects) that
inherit both methods (functions) and attributes (states) from base type.
Historically, computer scientists have favored four fundamental approaches to
computer programming, which are called programming paradigms. They describe
conceptually the process of computation as well as structuration and arrangement of
tasks, which have to be processed by the computer. Here they are:
1. Imperative, this is a machine-model based programming, because programs should
detail the procedure for obtaining results in terms of the base machine model;
2. Functional, programming equations and expression evaluation;
3. Logical, is based on first-order logic deduction;
4. Object-oriented, this is programming with data types.
An unambiguous, strict, universally accepted definition of these paradigms does not
exist, so the classification of programming languages by these paradigms is indistinct.
However, it makes sense to study some points concerning this classification, especially
because each paradigm induces the particular way of looking at the programming
tasks. Some programming language were designed to support one of the paradigms
(e.g., Haskell supports functional programming, Smalltalk − object-oriented
programming), other programming languages can support multiple paradigms (e.g.,
C++, Lisp, Visual Basic, Object Pascal), and some of them can be supported partially.
Languages that support imperative programming (e.g., C, C++, Java, PHP, and Python)
should be able to describe the process of computation in terms of statements that
will change a program state. In this case, a program is like a list of commands (or the
language primitives) to be performed; one can say about such languages that they
are not only machine-model based but also procedural. The imperative paradigm has
been nuanced several times by new ideas. The historically most recognized style of
imperative programming is structured programming, which suggests the extensive
use of block structures and subroutines to improve the clarity of computer programs.
A variation of structured programming has become procedural programming, which
introduced a more logical structure of program by disallowing the unconditional
transition operations.
Alternatively, languages that support a non-imperative programming style should
be able to describe the logic (meaning) of computation, mostly in terms of the problem
domain without reference to machine model. Non-imperative programs detail what
has to be computed conceptually, leaving the data organization and instruction
sequencing to the interpreter of code. This style clearly separates programmers’
responsibility (the problem description) from the implementation decisions. The
non-imperative style is referred to as declarative programming; this term is a metacategory that does not enter the list of underlying paradigms. In this style we can
include functional programming languages (Lisp, Scheme, ML, and Haskel) and logic
programming languages (Prolog, Datalog).
In accordance with a functional paradigm, a program treats computation as the
evaluation of mathematical functions and does not deal with state changes; such
a program may be perceived as a sequence of stateless function evaluations. In
accordance with a logic paradigm, a program is a set of sentences in the logical sense,
which are representing facts and rules of inference regarding the problem domain.
Object-oriented programming (OOP) uses special data structures, which
encapsulate the data and procedures as one; such structures are referred to as objects.
Objects are derived from classes, which are abstract data types. Key programming
techniques of OOP are based on data encapsulation, abstraction, inheritance,
modularity, and polymorphism. The origins of object-oriented programming refer to
1965, when Simula language was created. The extensive spread of this paradigm only
started the early 1990s. Most modern languages support OOP.
Based on these four fundamental programming paradigms a few programming
models (styles) were created to solve specific programming problems. For example,
to program the GUI (graphical user interfaces) service, an event-based programming
is introduced, where the control flow is subject to the events generated by the user
(e.g., mouse clicks or screen touches). Event-driven programs can detect events
derived from sensors and external programs as well. Of course, the handling of
such events consists in carrying out planned actions. While writing event-driven
programs, a programmer can use at the same time OOP style; so, in practice, models
of programming usually are mixed. Finally, a particular language may support
and the programmer may use not only one paradigm or style of programming but
many.
At the end of this section, an important remark about the two subclasses of
programming languages:
1. Scripting languages (e.g., Bash in Unix-like systems, Visual Basic for Application
in Microsoft Office, Perl, and Python) run in special run-time environments and
are used by programmers to mediate between programs in order to produce data;
this category is fuzzy but in general scripting languages are helpful to automate a
manual task during the use of programs or systems.
2. Markup languages (e.g., HTML, MathML, and XML) describe structure of data
and are needed to control data presentation, especially in case of document
formatting. It is a common opinion that markup languages are different from
scripting languages and can not be classified as programming languages.
The Popularity of Programming Languages
There are no strict criteria relating to the popularity of programming languages.
However, novice programmers particularly want to know, which programming
language should be studied first, which language is widely used, and which language
gives the maximum chance for well-paid job. The TIOBE Programming Community
gives an answer by presenting the annual ranking [20] of programming languages. A
top-ten list of languages with their average positions for a period of 12 months is shown
in the table for last 30 years. Other indexes of programming languages popularity (e.g.
RedMonk [21], PYPL [22] or TrendySkills [23]) are compatible with the TIOBE at least in
regards to the position of the most popular languages.        
`,
        },
         {
          id: "u7-software-engineering",
          title: "Software Engineering",
          tags: ["Software Engineering"],
          content: `
         The term software engineering was introduced into public circulation for the first time
at conferences organized by NATO in 1968 and 1969. The software crisis, that has been
previously mentioned, was discussed. The term was introduced to clearly suggest that
software developers should structure and manage a process of software development
similar to others industrial sectors. It was a suggestion to move away from an art and
get closer to the craft (business) of programming. An engineering approach to software
development needs to reduce the costs of software development and lead to software
that is more reliable [29]. Today, software engineering (SE) is a scientific discipline that
deals with the development, deployment and maintenance of computer software. It is
a part of computer science. SE promotes the methodical, disciplined, and quantifiable
approach to the development of software, i.e. a well defined development process
consisting of traceable actions and tasks with predictable size. Software engineers
have to take into consideration a lot of circumstances, e.g. the type of hardware the
software will be used on, operation systems by which the software will be handled,
and also the specificity of the company in which the software will be deployed or the
qualification level of the end users who will operate the software.
The primary objective of SE is the production of software systems in accordance
with a requirement specification; it should be done on time, and within budget.
One can say that software engineering is an instance of systems engineering (an
interdisciplinary field). However, carrying out its own tasks, software engineering
utilizes its own development processes and design methods for software.
`,
        },
           {
          id: "u7-software-develoment-process",
          title: "Software Development Process",
          tags: ["Software Development Process"],
          content: `Software development teams follow a specific theoretical life cycle in order to
guarantee the best quality of created software product. This life cycle was build around
the detailed study of the experiences of many software teams. It assumes similar
knowledge from general engineering as well. Normally, the life cycle of software is
comprised of the following phases:
1. Requirements gathering, analysis and specification
2. Software design
3. Implementation (coding)
4. Testing (validation) and integration
5. Deployment (installation)
6. Maintenance
7. Retirement (withdrawal)
Each phase produces deliverables required by the next phase in the life cycle, e.g.
requirements are translated into software design, code is produced in accordance
with blue prints, testing verifies the code taking into account the requirements, and so
on. Even the withdrawal from circulation of old software generates useful information
for the requirements and design phases of the next version of software.
In the first phase, business requirements are gathered. This means interviewing
a stakeholder about the software that is planned and its business goals. The answers
to the following questions will be significant: who is going to use the software, how
will they use the software, what data will be inputted into the programs, what data
should be outputted, and which action or data should be restricted? These answers
constitute requirements. They are analyzed for their validity, cohesion and the
possibility of realization in the planned software. The analysis ends with a document
called software requirements specification (SRS). This document is an essential part of
the contract for the software and should clearly determine “what the software should
be.”
The second phase is about blue prints. At the time, the software design is arranged
in accordance with the requirement specification. One of the most important tasks
is to determine the architecture of the planned of software. The designer should
describe a high-level software architecture that outlines the functions, relationships,
and interfaces for major components. This means that the designer should decide
on modularity of software, on the possible need to use libraries, frameworks, design
patterns, and the ready to use components. Based on these decisions, the third phase
will be organized − coding (implementation). This is the longest period of the software
development life cycle. Software design documents (blue prints) are guidelines for
programmers in the process of writing code. Coding is done in collaboration with
designers, because planned modules or other units of code may vary with respect to
those documented in the preceding phase.
In the fourth phase, ready-made units of code are integrated (combined one with
another so that they become a whole) and tested against the requirements. Testers have
to make sure that the product is really solving the needs formulated by stakeholders.
At a further stage other tests are performed to ensure a high quality of product. After
successful testing, the software can be delivered to the customers to be used. This
fifths stage is not a simple as it may seem. A customer’s hardware and infrastructure
should be ready to implement the new software. The customer’s personnel should be
trained in the use of the new software. The customer’s data and archives should be
available for the new software. After resolving all the problems, software developers
often have to adapt product to local requirements.
In the sixth phase, the customer operates the installed software. During the
period when the customer is using the software, problems may arise and they need
to be solved (occasionally very quickly, e.g. when they relate to information security).
Developers solve such problems and update the product. This activity is called
maintenance. With time there are so many fixes (patches) in the software that the
developers decide to release a new optimized version of software. This is a software
upgrade. The old version is withdrawn, and the new version is deployed. Sometimes,
this means the complete withdrawal of software from circulation for business reasons,
e.g. the production of a given software ending.
The modern software development process tends to run iteratively through some of
the seven phases rather than linearly. This is the most common flow of work: detailed
design, code construction, unit testing, integration, complete software testing and
release. Iterative production of software allows for managing software projects of high
complexity effectively. Successive iterations can be planned based on the priorities
identified by the stakeholders in relation to the functions of the software. The most
important functions should be scheduled for the first releases, and the less important
− for later. The necessity of such planning usually results from the limited resources
of software teams.
In implementing an operational business process methodology, software
developers use different approaches to the organization of the development process.
To visualize and then study the development processes, several models have been
elaborated. These models and corresponding approaches are referred to as software
development process models. The best-known classical approach is represented by the
waterfall model (Herbert D. Benington, 1956). This was often used for the creation of
large software systems; metaphorically, it looks like a cascade waterfalls. This is why
some people call it a cascade model. This model describes a linear process in which
the activities resulting from the software life cycle are executed one by one. The model
contains the ability to go back to one of the preceding activities when conditions
make this necessary or desirable. The main negative aspect of the waterfall model is
the trouble of making convenient changes when the process is ongoing. One can say
that this process is inflexible.
The idea of a more flexible process shows another classical model of software
development process − the spiral model (Barry Boehm, 1986). Here, the process is
represented as a set of loops − each loop leads the team to the final product, and the
current loop execution phase constitutes an indicator of the progress of the stage.
This model does not establish fixed phases of the life cycle, for instance requirements,
design and implementation. Loops are selected depending on what is required. The
spiral model provides an explicit assessment of the risk of failure, so managers can
respond quickly to changes in the project. One can say that it represents the process
driven by risk management.
Both of these models now have a generally historical significance. New experiences
and new knowledge have helped expand the idea of software production. The
most influential idea has turned out to be agile software development. This was
implemented in the methods called Scrum (Jeff Sutherland and Ken Schwaber, 1995)
or extreme programming (Ken Beck, 1999) and others (which fall between them
conceptually). An agile paradigm has changed priorities in software development.
More attention should be paid to people and interactions than to procedures and tools,
to functioning software than to complete documentation, to customer collaboration
that to contract negotiation, to responding to changes than to following the plan.
All agile methods take seriously active user involvement in software development.
Customer representatives are regular participants in all activities of the project team.
Development works through small increments of functionality (frequent releases with
completed features). This allows the evolution of requirements and timescale fixing
simultaneously.
An important attribute of agile methods is that software teams are empowered
to make decisions. One can say that agile methods actively use the human factor.
In this context, the aforementioned Scrum is an agile development method, which
uses the concept of a team-based development environment. It emphasizes team selfmanagement, which in conjunction with experiential feedback allows building the
correctly tested product gains within short intervals. At the same time, the necessary
role of product owner in Scrum team ensures the representation of the client’s
interests. In contrast to Scrum, extreme programming (XP) is a more radical agile
method. It concentrates more on the development and test phases of the software
engineering process. XP teams use a simplified structure of planning and monitoring
activities to choose what should be done next and to forecast project finalization.
An XP team usually delivers very small increments of functionality. It is focused
on continuous code improvement based on user involvement in the development
process. An unusual feature of this method is so-called pair-wise programming. Two
programmers, sitting side by side, at the same machine, create production software
(one can say this is continuous reviewing of code).
In conclusion, software development processes combines all activities associated
with the production and evaluation of software. To understand the development
process abstract representation, a model of this process, which shows the structure
(organization) of typical activities (e.g. specification, design, testing, implementation
and installation) is used. There is no possibility to closely classify all processes and
their models, because they were created in a spontaneous manner, in the context
of competition. To understand the essence of software engineering, one can look at
some historical examples (the best example is the Rational Unified Process). A good
idea might be to analyze several international standards on this issue, such as ISO/
IEC 12207 “Systems and software engineering − Software life cycle processes” or ISO/
IEC 15504 “Information technology − Process assessment”.
The Rational Unified Process
Rational Unified Process was developed in the second half of the 1990s. This new
model of the software engineering process was distributed as a native key component
of professional software (development kit, set of tools) targeted at software developers.
It was a very important event in the history of object-based software systems. Instead
of providing a large number of paper documents, the Unified Process concentrates
on the development and maintenance of semantically rich models [30], which must
represent the software system being developed. Rational software tools delivers full
support for such models, using the Universal Modeling Language (UML). The modeling
of large information systems with the use of this language is described in the next
chapter. RUP is not a constant process. Developers can fit it to the scale of the project
and adjust it to customer requirements. The Rational Unified Process has adopted
the best-known practices of modern software development and assists developers in
implementation of these practices.
RUP is an iterative development process. This means that a whole software
project is divided into several mini projects (iterations) planned one by one. It helps
to recognize the changing requirements and to organize early risk attenuation. After
each iteration, developers can correct errors in software and be more accurate with
their plans. Each RUP iteration increments the software functionality. This means that
the software is evolving to be the result of cumulative effort. Such an evolutionary
approach to developing software gives developers a chance to deal with the reliability,
stability, and usability of the product.
RUP’s standard sets out four phases of the project. The first phase, called
inception, refers to capturing the initial requirements, to analyzing initial risks and
cost benefits, and to defining the project scope. At this stage, developers arrange an
initial architecture of the software system. Then they build a prototype which is not
reusable and begin creating the key models − a use case model and a domain model.
The first model is used to analyze the required functionality of the software, while
the second one − to analyze the problem itself with its surroundings. The results of
this analysis will represent the problem in the design of software. One can say that
this phase deals most with business modeling and project management, not with the
design of software.
The second phase, called elaboration, continues capturing and analyzing the
requirements, modeling use cases and problem domain. During this phase, scenarios
of user activities are developed, a glossary model of the project is created and
prototypes of user interfaces are fleshed out. It is important that at this early stage,
even before the meticulous, detailed design, the customer (users) will be able to do
some work by using the real views (graphical user interfaces) of the future application.
As a result of such interactions with trial software, serious semantic errors are usually
detected that were overlooked during requirement gathering. One can say that this
phase is concentrated on requirements and on design of software.       
`,
        },
           {
          id: "u7-programing-html-files",
          title: "Programming Html Files",
          tags: ["Programming Html Files"],
          content: `
         
`,
        },
         {
          id: "u7-programing-html-files",
          title: "Programming Html Files",
          tags: ["Programming Html Files"],
          content: `
         
`,
        },
      ]}
      ],
  videos: [
     {
      id: "u7-v-deadlock1",
      title: "What is firewall? | Firewall explained | Firewalls and network security",
      description: "What is firewall? | Firewall explained | Firewalls and network security",
      url: "https://www.youtube.com/watch?v=9GZlVOafYTg",
      tags: ["What is firewall? | Firewall explained | Firewalls and network security"],
      channel: "Simplilearn",
    },
  ],
  pdfs: [
     {
      id: "u7-pdf-slides1",
      title: "Unit 7 — Insight_into_Theoretical_and_Applied_Informatics_I..._----_(3.1.1_A_Very_Brief_",
      description:
        "Insight_into_Theoretical_and_Applied_Informatics_I..._----_(3.1.1_A_Very_Brief_",
      file: "/unit-7/Insight_into_Theoretical_and_Applied_Informatics_I..._----_(3.1.1_A_Very_Brief_.pdf",
    },
     {
      id: "u7-pdf-slides2",
      title: "Unit 7 — Insight_into_Theoretical_",
      description:
        "Insight_into_Theoretical_",
      file: "/unit-7/Insight_into_Theoretical_.pdf",
    },
    {
      id: "u7-pdf-slides3",
      title: "Unit 7 — Insight_into_Theoretical_and_",
      description:
        "Insight_into_Theoretical_and_",
      file: "/unit-7/Insight_into_Theoretical_and_.pdf",
    },
     {
      id: "u7-pdf-slides3",
      title: "Unit 7 — Flowchart_and_Algorithm_Basics_The_Art_of_",
      description:
        "Flowchart_and_Algorithm_Basics_The_Art_of_",
      file: "/unit-7/Flowchart_and_Algorithm_Basics_The_Art_of_.pdf",
    },
  ],
};

export default unit7;
