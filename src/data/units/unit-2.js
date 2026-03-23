/** Unit 2 — Operating systems (sample notes). Edit only this file. */

const unit2 = {
  id: "unit-2",
  number: 2,
  title: "Unit 2 — Digital electronics",
  description: "Combinational logic circuits",

  books: [
    {
      id: "u2-digital-electronics",
      title: "Digital electronics 1: Combinational logic circuits. John Wiley & Sons",
      subject: "Computer Science",
      topics: [
        {
          id: "u2-number-systems",
          title: "Number Systems - Introduction",
          tags: ["Number Systems"],
          content: `Digital systems are used to process data and to perform calculations in most instrumentation,
monitoring and communication devices. As physical quantities and signals can only take discrete
values in a digital system, the interpretation of real-world information requires the use of interface
circuits such as data converters.
In general, numbers may be represented in different numeration systems. The decimal system is
commonly used in routine transactions while the binary system is the basis for digital electronics.
Every number (or numeration) system is defined by a base (or radix), which is a collection of
distinct symbols. The representation of a number in a numeration system may be considered as a
change in base. In a positional number system, a value of a number depends on the place
occupied by each of its digits in the representation.
`
        },
        {
          id: "u2-Decimal-numbers",
          title: "Decimal numbers",
          tags: ["Decimal numbers"],
          content: `The decimal number system uses the following 10 numbers or symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
The radix is thus 10.
EXAMPLE 1.1.– Decompose the numbers 734 and 12345 into powers of 10.
Depending on its position, each number is multiplied by the appropriate power of 10. The rightmost digit represents the unit digit.
`,
        },
        {
          id: "u2-Binary-numbers",
          title: "Binary numbers",
          tags: ["Binary numbers"],
          content: `Binary number system is based on two-level logic, conventionally noted as 0 (low level) and 1
(high level). It is a system with a radix of two.
EXAMPLE 1.2.– Convert the decimal numbers 13 and 125 into binary numbers.
The binary code that is then obtained for a positive number is called a natural binary code.
The coefficients or numbers (0 or 1) used in the binary representation of a number are called bits.
The right-most bit is called the least significant bit (LSB), while the left-most bit is called the
most significant bit (MSB).
The arithmetic and logic unit of a microprocessor manipulates binary numbers or words with a
fixed number of bits.
Logical states may be assigned to regions based on positive logic or negative logic. In the case of
positive logic, the region V corresponds to 1 (or the high level), and the region corresponds H
V
B
to 0 (or the low level); and in the case of negative logic, the region V corresponds to 0 (or low H
level), and the region V corresponds to 1 (or high level).`,
        },
        {
          id: "u2-octal-numbers",
          title: "Octal numbers",
          tags: ["octal numbers"],
          content: `The octal number system or a representation with radix eight consists of the following symbols: 0,
1, 2, 3, 4, 5, 6, 7.
EXAMPLE 1.3.– Convert the decimal numbers 250 and 777 to octal numbers.
The right-most digit is called the least significant digit (LSD), while the left-most digit is called
the most significant digit (MSD).
Octal numeration may be deduced from binary numeration by grouping, beginning from the right,
consecutive bits in triplets or, conversely, by replacing each octal number by its three
corresponding bits.
`,
        },
        {
          id: "u2-hexadecimal-numeration",
          title: "Hexadecimal numeration",
          tags: ["hexadecimal numeration"],
          content: `The hexadecimal number system or a representation with a radix 16 consists of the following
symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.
EXAMPLE 1.5.– Convert the decimal numbers 291 and 1000 to hexadecimal.
In practice, a series of integer divisions makes it possible to convert a decimal number to a
hexadecimal number. The different remainders constitute the results of the conversion, beginning
with the last, which is the MSD, to the first, which represents the LSD.
Binary to hexadecimal conversion is done by grouping the bits representing the binary four by
four and beginning from the right, conversely, replacing each hexadecimal digit by its four
corresponding bits.
It is generally more convenient to represent the value of an octet using two hexadecimal digits as
it is more compact.`,
        },
        {
          id: "u2-radix-B",
          title: "Representation in a radix B",
          tags: ["radix B"],
          content: ``,
        },
         {
          id: "u2-binary-coded-decimal-numbers",
          title: "Binary-coded decimal numbers",
          tags: ["Binary-coded decimal numbers"],
          content: `To represent a 8421-type binary-coded decimal (BCD) number, each digit must be replaced by its
equivalent 4-bit binary.
EXAMPLE 1.8.– Give the BCD representation for the decimal numbers 90 and 873.
It must be noted that with n bits, we can represent the decimal numbers between 0 and 10 − 1. n/4
In addition to the 8421 BCD code, there are other types of BCD codes.`,
        },
        {
          id: "u2-data-representation",
          title: "Data representation",
          tags: ["Data representation"],
          content: `As the arithmetic unit of a digital system recognizes only the binary states 0 and 1, a code is
necessary to manipulate and transfer alphanumeric data (numbers, letters, special characters)
between a digital system and its peripheral devices.
1.12.1. Gray code
Gray code (or reflected binary code) is a non-weighted code, as it does not ascribe a specific
weight to each bit position. It is not used for arithmetic calculations.
An interesting feature presented by Gray code representation is related to the fact that only a
single bit changes value during the transition from one code to the next. Table 1.6 gives the
binary and Gray code representation of decimal numbers from 0 to 15.
The conversion of a binary number to Gray code is carried out by making use of the following
observations:
– the most significant Gray code bit, situated to the extreme left, is the same as the
corresponding MSB for the binary number;
– starting from the left, add, without taking into account the carry-out bit, each pair of
adjacent bits to obtain the next bit in Gray code.
EXAMPLE 1.22.– Convert the binary number 11001 to Gray code.
For the binary number 11001 , the corresponding Gray code is 10101. 2
To convert Gray code to a binary number:
– the MSB of the binary number, located at the extreme left, is identical to the corresponding
Gray code bit;
– starting from the left, add each new bit of the binary code to the next bit of the Gray code,
without taking into account any carry-out bit, to obtain the next bit of the binary code.
EXAMPLE 1.23.– Convert the Gray code 10111 to a binary number.
The binary number corresponding to Gray code 10111 is 11010 .
2
Gray code is used in Karnaugh maps and in the design of logic circuits. They also find application
in rotary encoders, where the predisposition to errors increases with the number of bits that
change logical states between two consecutive positions.
1.12.3. ASCII code
ASCII code (or American standard code for information interchange) has seven bits allowing for
the representation of 2 = 128 symbols. 7
Table 1.8 gives the correspondence between certain characters and the decimal and hexadecimal
numbers of the ASCII code. The letter N, for example, is represented in ASCII code by the
number 78 in decimal and by 4E in hexadecimal. The ASCII code contains 34 characters used to
define the format of information and the space between data and to control the transmission and
reception of symbols.
1.12.4. Other codes
Given the ever-increasing number of characters, other systems of data representation were
developed based on the ASCII code:
– EBCDIC (or extended binary coded decimal interchange code) is an eight bit code;
– ANSI (or American national standard institute) allows for the representation of alphabetical
letters from many languages;
– using eight bit words (for UTF-8), 16 bit words (for UTF-16) and 32 bit words (for UTF32), the universal code, named Unicode (or Universal code) represents each character in a
unique way by a number. It covers symbols used in most languages.`,
        },
         {
          id: "u2-more-about-the-alphabets",
          title: "More about the alphabets-Coding for the modern era",
          tags: ["More about the alphabets","Coding for the modern era"],
          content: `As we entered the computer age in the 1960s, new coding systems were
defined. In fact there were two main rival schemes, EBCDIC (pronounced
ebsidik, for IBM machines) and ASCII (pronounced askey, for all other computer manufacturers). I will leave EBCDIC aside, but ASCII is worth some
discussion. The American Standard Code for Information Interchange is a
more ambitious system than Baudot, and was used for multiple purposes
in the transmission and storage of data in the early computer age, and in
fact is still in use. It is a seven-bit code, allowing a total of 132 different
combinations. These include the 26 letters, in both upper and lower case
(making 52), the ten digits (62), a significant number of punctuation marks
and special symbols (96), and 32 codes reserved for control purposes. Minor variations on this system were defined for various European languages
with features not seen in English, e.g. accented characters. More systematic variation is provided for by the scheme known as ANSI, which started
from ASCII, but has different code pages for different languages. Each code
page provides a complete coding of a set of characters for a language—but
the computer must ‘know’ which code page is in use to interpret ANSI correctly.
The coding scheme known as Unicode, which is currently becoming the
standard for many purposes, is a much larger set. It includes not only all
the characters for other alphabets than the Latin one, e.g. Greek, Russian
and Arabic, but also characters for non-alphabetic languages, e.g. Japanese,
Chinese. This is a fascinating development: the idea of a coding of characters could only have developed in the context of a small alphabet; but given
the idea, it now becomes possible to apply it to much larger character sets.
Unicode in its original full form requires 16 or 32 bits per character, but there
are alternative encodings for the same scheme, which allows the old ASCII
character set to be represented as it traditionally was, in eight bits. (Yes, I
know I said seven. ASCII is a seven-bit code, but since most computers operate with multiples of eight bits, ASCII is usually embedded in eight bits.)
Although there remain some languages and scripts in the world that
have not yet been incorporated into the scheme, nevertheless we seem (in
the early twenty-first century) to be approaching the state where any text
character in any language can be represented by means of a standard binary
code. This is a remarkable achievement`,
        },
      ],
    },
  ],

  videos: [
    // {
    //   id: "u2-v-deadlock1",
    //   title: "Number Systems Introduction - Decimal, Binary, Octal & Hexadecimal",
    //   description: "Number Systems Introduction - Decimal, Binary, Octal & Hexadecimal",
    //   url: "https://www.youtube.com/watch?v=FFDMzbrEXaE",
    //   tags: ["Number Systems Introduction", "Decimal", "Binary"],
    //   channel: "The Organic Chemistry Tutor",
    // },
    //   {
    //   id: "u2-v-deadlock2",
    //   title: "Binary Number System: Counting in binary number system | Binary to decimal conversion",
    //   description: "Binary Number System: Counting in binary number system | Binary to decimal conversion",
    //   url: "https://www.youtube.com/watch?v=XrSgsJ-28Do",
    //   tags: ["Binary Number System", "Binary to decimal conversion"],
    //   channel: "ALL ABOUT ELECTRONICS",
    // },
    //   {
    //   id: "u2-v-deadlock3",
    //   title: "Decimal to Binary Conversion Explained (with Solved Examples) ",
    //   description: "Decimal to Binary Conversion Explained (with Solved Examples) ",
    //   url: "https://www.youtube.com/watch?v=QAHyFa3gKKc",
    //   tags: ["Decimal to Binary"],
    //   channel: "ALL ABOUT ELECTRONICS",
    // },
    //  {
    //   id: "u2-v-deadlock4",
    //   title: "Octal and hexadecimal number system explained",
    //   description: "Octal and hexadecimal number system explained",
    //   url: "https://www.youtube.com/watch?v=k3Z322T3sjs",
    //   tags: ["octal and hexadecimal number systems"],
    //   channel: "ALL ABOUT ELECTRONICS",
    // },
    // {
    //   id: "u2-v-deadlock5",
    //   title: "Binary codes: Classification of binary codes explained",
    //   description: "Binary codes: Classification of binary codes explained",
    //   url: "https://www.youtube.com/watch?v=ZNFyOSHh8P0",
    //   tags: ["Binary codes"],
    //   channel: "ALL ABOUT ELECTRONICS",
    // },
    //  {
    //   id: "u2-v-deadlock6",
    //   title: "Number System Conversion Techniques |Very Easy|Fast |Decimal |Binary|Octal |Hexadecimal| ",
    //   description: "Number System Conversion Techniques |Very Easy|Fast |Decimal |Binary|Octal |Hexadecimal| ",
    //   url: "https://www.youtube.com/watch?v=E-Sg2YsvZds",
    //   tags: ["Number System Conversion Techniques"],
    //   channel: "Info Pack",
    // },
  ],

  pdfs: [
    //  {
    //   id: "u2-pdf-slides1",
    //   title: "Unit 2 — Digital_Electronics_1_Combinational_Logic_Circuits",
    //   description:
    //     "Digital_Electronics_1_Combinational_Logic_Circuits",
    //   file: "/unit-2/Digital_Electronics_1_Combinational_Logic_Circuits_----_(1_Number_Systems).pdf",
    // },
    // {
    //   id: "u2-pdf-slides2",
    //   title: "Unit 2 — Digital_Electronics_1_Combinational_Logic_Circuits_Exercises",
    //   description:
    //     "Digital_Electronics_1_Combinational_Logic_Circuits_Exercises",
    //   file: "/unit-2/Digital_Electronics_1_Combinational_Logic_Circuits_----_(1.14._Exercises).pdf",
    // },
    // {
    //   id: "u2-pdf-slides3",
    //   title: "Unit 2 — Digital_Electronics_1_Combinational_Logic_Circuits_Solutions",
    //   description:
    //     "Digital_Electronics_1_Combinational_Logic_Circuits_Solutions",
    //   file: "/unit-2/Digital_Electronics_1_Combinational_Logic_Circuits_----_(1.15._Solutions).pdf",
    // },
    //   {
    //   id: "u2-pdf-slides4",
    //   title: "Unit 2 — B_C_Before_Computers_On_In",
    //   description:
    //     "B_C_Before_Computers_On_In",
    //   file: "/unit-2/B_C_Before_Computers_On_In.pdf",
    // },
  ],
};

export default unit2;
