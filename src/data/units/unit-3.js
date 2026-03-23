/** Unit 3 — DBMS. Edit only this file. PDFs: public/unit-3/… */

const unit3 = {
  id: "unit-3",
  number: 3,
  title: "Unit 3 — Boolean Algebra and Logic Gates",
  description: "Boolean Algebra and Logic Gates,Commutative law, Associative law, Distributive law, AND law, OR law, and INVERSION law.",

  books: [
    {
      id: "u3-logic-gates1",
      title: "Logic Gates",
      subject: "Computer Science",
      topics: [
        {
          id: "u3-logic-gates-intro",
          title: "Logic Gates intro",
          tags: ["Logic Gates"],
          content: `Logic functions provide ways to combine different digital signals – or signals that can only take
one of two possible levels: low level (0) and high level (1) – based on the laws of Boolean
algebra. These laws are applied using logic gates, which can be classified according to the
number of available inputs.
Each logic gate has an equivalent electric circuit. However, an electronic logic gate is very
different from its electrical equivalent. It is much faster, smaller, and consumes less electric
energy.
`,
        },
        {
          id: "u3-logic-gates2",
          title: "Logic Gates",
          tags: ["Logic Gates"],
          content: `Logic gates can be used to combine digital signals based on basic Boolean functions
          2.2.1. NOT gate
The NOT function provides the complementary state to a given variable. The function is
represented by a bar placed above the input variable and implemented by a NOT gate (or logic
inverter)
2.2.2. AND gate

The AND function, which is also called logic product, is represented by a dot (·).
2.2.3. OR gate

The OR function, which is also called logic addition, is represented by a plus (+).
2.2.4. XOR gate

The XOR (exclusive OR) function is represented by a plus within a circle (⊕).
2.2.5. Complementary logic gates

The NAND (NOT AND), NOR (NOT OR), and XNOR (NOT exclusive OR or inclusive AND)
gates are said to be complementary and correspond, respectively, to the AND, OR and XOR gates
when followed by a NOT gate. 
The NAND and NOR gates are considered to be universal gates. This means that any logic
function can be implemented using just NAND or NOR gates. It must be noted that neither the
XOR gate nor the XNOR gate is universal.
`,
        },
        {
          id: "u3-logic-function",
          title: "Logic function",
          tags: ["Logic function"],
          content: `A logic function is completely defined when, for all combinations of input variables, the function
value is defined. The number of these combinations is 2 for variables. n
n
A function is incompletely defined when there is at least one combination of input variables for
which the logic level is unknown.
 When a logic system is implemented, two cases may occur:
 – one of the possible combinations will never exist in the normal functioning of the system.
This is called a forbidden condition and is denoted by - (hyphen);
– one of the combinations exists but can take either the state 0 or 1. This is called the do not
care condition and is represented by the symbol x or #.
In general, a logic function can thus take four states: 0, 1, x and -.
A function with n variables may be represented by a truth table having n + 1 columns and a
maximum of 2 lines.
`,
        },
        {
          id: "u3-boolean-algebra",
          title: "Boolean algebra",
          tags: ["Boolean algebra"],
          content: `Boolean algebra is applied to operations and functions on logic variables.
Let X and Y be logic (or Boolean) functions, whose values can only be 0 or 1. The following
properties are verified:
1) commutativity: X + Y = Y + X and X · Y = Y · X;
2) associativity: X + (Y + Z) = (X + Y ) + Z and X · (Y · Z) = (X · Y ) · Z;
3) distributivity: X · (Y +Z) = X ·Y +X ·Z and (X + Y )(X +Z) = X +Y ·Z;
4)(X + Y = X · Y) above nor (DeMorgan’s theorem – NOR);
5)(X · Y = X + Y) above nor (DeMorgan’s theorem – NAND).
2.6.1. Boolean algebra theorems

Boolean algebra is governed by a certain number of theorems (or properties). The algebraic
method of simplification uses properties of Boolean algebra to make it possible to minimize
Boolean expressions (or logic functions), thus reducing the material cost for practical
implementation.rest is in pdf
`,
        },
        {
          id: "u3-digital-theory",
          title: "Digital Theory",
          tags: ["Digital Theory"],
          content: `The idea of linking the binary digits 1 and 0 to high-voltage and lowvoltage levels, respectively, made possible revolutionary changes in
how we use electronics. Great strides had already been made in electronics prior to this digital revolution, especially in the field of communications and the launch of radio and television. But once digital concepts were
overlaid on electronics theory, the pace of change in technology accelerated
to warp speed.
The Idea Behind Digital Concepts
In 1937, a Massachusetts Institute of Technology (MIT) graduate student named Claude Shannon wrote “A Symbolic Analysis of Relay and
Switching Circuits,” which has been called the one of the most important
master’s theses of the century. In the paper, Shannon proposed the use
of Boolean algebra’s two-position analysis in creating digital circuits. The
world of electronics was from then on destined to change, even if it took a
few decades for the idea to reach its full potential.
Titans of Electronics
Claude Shannon (1916–2001) is considered the father of digital
circuits, but his impact goes much further. His work at Bell Labs
and MIT with electronics, cryptography, and mathematics provided
inspiration to generations of future engineers.
Shannon was quite a character, and often invented contraptions for
pure enjoyment: a motorized pogo stick, a rocket-powered flying disk,
and a mechanical mouse that could solve a maze. He would ride his
unicycle through the halls of Bell Labs while juggling balls. He and a
fellow MIT professor enjoyed taking their mathematical research on
trips to Las Vegas to test drive some theories at the blackjack table and
roulette wheel. Unfortunately, his final years were spent in the fog of
Alzheimer’s, but his lasting impact remains perfectly clear.
Analog vs. Digital
An analog signal is a continuous wave in both amplitude and in time.
A digital signal is composed of individual, identifiable steps. A wave in the
ocean is an analog signal; the tick-tick-tick of the second hand on a clock
is digital. The following figure shows a sine wave in analog form and digital form. The digital wave approximates the analog wave by representing
points along the waveform.
There are pros and cons to working with each signal type. Because an
analog wave is a continuous wave, it has more information. However, because it has more information, it needs more processing and storage space.
A digital signal can be much more compact than its analog counterpart,
which means it requires fewer resources to transmit, receive, or store. A
digital signal is also less likely to be affected by noise.
In electronics, noise is any unwanted interference with a signal. Noise
sources can be natural, due to the natural interaction of electromagnetic
fields, or man-made—from motors, fluorescent lights, radio or radar
transmissions, wireless signals, and numerous other sources.
One of the primary benefits of digital waves for electronics is that each
discrete bit of information can be expressed numerically using Boolean algebra. The states of “on” and “off” or “high voltage” and “low voltage” can
be represented by 1 or 0, which in turn can be easily transmitted using
switches, diodes, and transistors in circuits.
Boolean algebra is an approach to the study of numbers that is based on
logic.
Logic is a branch of philosophy that was developed by the ancient Greeks,
including Aristotle. It starts with the basic premise that an answer is either
true or false. Aristotle proposed that there are laws of logic regarding a
bi-valued reality in which statements are either true or false: X = X, X ≠ Y,
not–X = Y, and X = not–Y. English mathematician George Boole expanded
upon these classical views of logic and developed a system of algebra based
on them.
Boolean numbers are not the same as real numbers. Instead, Boolean numbers represent a decision. They ask: Is it 1? If yes, 1. If no, 0. Each decision
has the possibility of producing just two outcomes: 1 or 0.
Truth Tables
The most common questions asked about a relationship of numbers in
Boolean logic can be expressed by the following logical operations:
n NOT: negation
n AND: conjunction
n OR: inclusion
n NOR: neither/nor
n NAND: not both
XOR: exclusive
n XNOR: equality
To represent these concepts, we can use something called a truth table.
One value, called an operand, goes across the top of the table horizontally
and the second operand goes down the table vertically. For each question
or logical operation, the various answers populate the box.
An operand is a quantity that has a mathematical or logical operation
performed on it.
A truth table is used in Boolean logic to give the results for the possible
inputs and outputs.
The columns represent one side of the logical decision and the rows
represent the other side of the logical decision. The result of each combination is depicted in the box where the column and row intersect.
In this table, 0 ≠ 1 is true (because 0 is NOT equal to 1), whereas 0 ≠
0 is false. Let’s now represent true with 1 and false with 0, as shown in the
following figure.
This table does not represent multiplication, division, or any other real
mathematical operation.
Instead, it the outputs of the question, “Is A not equal to B?” The answer can be true or false, and we are using the binary digits 0 and 1 to represent both the operands and the answers.
Truth tables can be created for each of the logical operations you just
learned. Let’s look at AND. The operation AND is true only if both operands are true—in other words, only when both operands are 1. Stated
another way, the operand 0 represents false and the operand 1 represents
true. So false AND false is false; true AND false is false; false AND true is
false but true AND true is true.
The operation OR is false only if both operands are false—that is, only
when both operands are 0.
The operation NOR is true only if both operands are false—only when
both operands are 0.
The operation NAND is true only if at least one of its operands is false.
One operand must be 0 and one must be 1.
Two common operations of Boolean logic that we use in electronics require two inputs: XOR or “exclusive-OR” and XNOR or “exclusive-NOR.”
These operations compare the two inputs and ask a question about them.
Here is the truth table for XOR. Looking at the two inputs, the output
is true if one (and only one) of the inputs is true.
The XNOR gate is the inverse of XOR. For XNOR, looking at the two
inputs, the output produces a value of true if and only if both operands are
false or both operands are true.
The field of logic takes some getting used to. It all makes sense—it is
logic, after all—but only if you work deliberately through each statement. This is not a problem for electronic signals; they simply do what
their circuit tells them to do. When working with logical statements,
designers and programmers use tools such as truth tables to keep their
ones and zeroes straight.
Binary Numbers
Binary numbers are distinct from Boolean numbers. Binary numbers
use the same two digits as Boolean numbers, but binary numbers are real
numbers that represent values beyond 0 and 1. (See Appendix C for details
on working with binary numbers.) A binary system can represent numbers
from the base 10 system (our familiar numbering system with digits from 0
to 9) with a string of binary zeroes and ones. Binary number representations
of decimal numbers or binary-coded decimals (BCDs) can be sent as individual digits (in series) or as a group of bits (in parallel). The usual arrangement is in a byte, which is eight bits.
A bit is a binary digit. Four bits are called a nibble. A set of eight bits is a
byte.
Application to Electronics
So why do you need to know about binary numbers and Boolean operations? Because of the real-world application of these concepts to electronics. You’ve already learned that, using diodes and transistors, you can create
circuits that can pass through no (or relatively low-) voltage or relatively
higher-voltage signals.
If you go back to the idea of a computer as something that performs
computations, you can see that creating a series of questions or logical operations could get you to a result. Of course, the number of operations required to perform even simple tasks would require lots of these operations
and, therefore, lots of circuits.
Logic Gates
Each of the circuits that do these computations contains gates. In digital or logic circuits, the gates are called logic gates. Each gate gives one
output but can have multiple inputs.
NAND gates and NOR gates are known as universal gates because
given enough combinations, they can mimic the function of any other logic
gate. A NOT gate is also called an inverter because it inverts one signal into
the reverse.
DEFINITION
When you begin designing your own circuits or doing your own
programming, you need to think like a circuit or a computer. It is
important to map out the processes step by step.
Designers and programmers often use flowcharts to represent the
inputs and the decisions at each step. As you start out in electronics, get in the habit of planning things out. You might be going
high-tech, but a pencil and paper can still be your most useful tools!

`,
        },
      ],
    },
  ],

  videos: [
     {
      id: "u3-v-deadlock1",
      title: "The laws of Boolean algebra explained",
      description: "The laws of Boolean algebra explained",
      url: "https://www.youtube.com/watch?v=RMe69AdlFdI",
      tags: ["Boolean algebra laws"],
      channel: "ALL ABOUT ELECTRONICS",
    },
     {
      id: "u3-v-deadlock2",
      title: "Boolean algebra/Boolean laws/De Morgan’s Theorem",
      description: "Boolean algebra/Boolean laws/De Morgan’s Theorem",
      url: "https://www.youtube.com/watch?v=kNHLRoE8qNI",
      tags: ["Boolean algebra laws","De Morgan’s theorems"],
      channel: "Read Electric Vehicle",
    },
    {
      id: "u3-v-deadlock3",
      title: "Introduction to Boolean Algebra",
      description: "Introduction to Boolean Algebra (Part 1)",
      url: "https://www.youtube.com/watch?v=WW-NPtIzHwk",
      tags: ["Boolean algebra"],
      channel: "Neso Academy",
    },
     {
      id: "u3-v-deadlock4",
      title: "De Morgan’s Law in Boolean Algebra Explained (with Solved Examples)",
      description: "De Morgan’s Law in Boolean Algebra Explained (with Solved Examples)",
      url: "https://www.youtube.com/watch?v=W7YTfLaPWRY",
      tags: ["Boolean algebra"],
      channel: "ALL ABOUT ELECTRONICS",
    },
     {
      id: "u3-v-deadlock5",
      title: "What is Logic Gate? Logic Gates Explained",
      description: "What is Logic Gate? Logic Gates Explained",
      url: "https://www.youtube.com/watch?v=0lwhoQ5aQe8",
      tags: ["Logic Gates"],
      channel: "ALL ABOUT ELECTRONICS",
    },
     {
      id: "u3-v-deadlock6",
      title: "Logic Gates and Truth Tables",
      description: "Logic Gates and Truth Tables",
      url: "https://www.youtube.com/watch?v=gnyDqpRyoqI",
      tags: ["Logic Gates","Truth Tables"],
      channel: "Mr Bulmer's Learning Zone",
    },
     {
      id: "u3-v-deadlock7",
      title: "Logic Gates, Truth Tables, Boolean Algebra AND, OR, NOT, NAND & NOR ",
      description: "Logic Gates, Truth Tables, Boolean Algebra AND, OR, NOT, NAND & NOR ",
      url: "https://www.youtube.com/watch?v=JQBRzsPhw2w",
      tags: ["Logic Gates","Truth Tables","Boolean Algebra"],
      channel: "The Organic Chemistry Tutor",
    },
     {
      id: "u3-v-deadlock8",
      title: "AP CSA 3.6 Equivalent Boolean expressions - Explore",
      description: "AP CSA 3.6 Equivalent Boolean expressions - Explore",
      url: "https://www.youtube.com/watch?v=pS1HnU6Rtyc",
      tags: ["Boolean expressions"],
      channel: "Sara Kazemi",
    },
     {
      id: "u3-v-deadlock9",
      title: "Equivalence of Boolean expressions - Discrete mathematics",
      description: "Equivalence of Boolean expressions - Discrete mathematics",
      url: "https://www.youtube.com/watch?v=MTw0-70pcoI",
      tags: ["Boolean expressions"],
      channel: "DrOfEng",
    },
    {
      id: "u3-v-deadlock10",
      title: "Equivalent Boolean Expressions",
      description: "Equivalent Boolean Expressions",
      url: "https://www.youtube.com/watch?v=I-C2JxdGRSY",
      tags: ["Boolean expressions"],
      channel: "CodeHS",
    },
  ],

  pdfs: [
      {
      id: "u3-pdf-slides1",
      title: "Unit 3 — Digital_Electronics_1_Combinational_Logic_Circuits_----_(2_Logic gate)",
      description:
        "Digital_Electronics_1_Combinational_Logic_Circuits_----_(2_Logic gate)",
      file: "/unit-3/Digital_Electronics_1_Combinational_Logic_Circuits_----_(2_Logi.pdf",
    },
    {
      id: "u3-pdf-slides12",
      title: "Unit 3 — Basic_Electronics_Theory_and_Practice",
      description:
        "Basic_Electronics_Theory_and_Practice",
      file: "/unit-3/Basic_Electronics_Theory_and_Practice_----_(Basic_Electronics_CH14.p.pdf",
    },
  ],
};

export default unit3;
