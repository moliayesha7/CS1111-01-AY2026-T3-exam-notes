/**
 * Unit 1 — edit this file only for Unit 1.
 * Put PDF files in: public/unit-1/your-file.pdf  →  file: "/unit-1/your-file.pdf"
 * Search uses: title, description, tags, notes, video titles/descriptions, PDF titles/descriptions.
 */

const unit1 = {
  id: "unit-1",
  number: 1,
  title: "Introduction to Computer Systems",
  description: `Computer System: Characteristics and classification. 
  Von Neumann computer system architecture. 
  Memory: Units of measurement, RAM, ROM, and secondary storage devices. 
  Overview of system software, application software, and embedded software`,

  books: [
    {
      id: "u1-ds",
      title: "Computer concepts and management information systems",
      subject: "Computer Science",
      topics: [
        {
          id: "u1-ds-introduction",
          title: "Introduction",
          tags: ["IT evolution", "technology", "business", "society"],
          content: `The extraordinary development of information technology during the past few decades has
           changed the way business is done in the real world. In the early years of IT development, 
           very few big corporate houses were capable of buying computers and using them because they were very 
           costly and their implementation required a unlimited technical and professional skills and aptitude to operate them. 
           Nowadays the situation is reversed: computer systems, which were costly, have become affordable even for a middle-class family. 
           Large computer systems have been reduced in size and only require a small amount of desktop space. Previously, 
           computer programming and operations required hard work, time, and professional help to learn, but today, thanks to the 
           invention of the graphical user interface (GUI), users can easily operate any software. With the introduction of wireless 
           technology, the utility of a computer system has been further enhanced as wiring requirements have been significantly reduced and 
           with the availability of the laptop, it is possible to carry a system from one place to another. During transit it is very easy 
           for the user to communicate with their clients and complete pending work. Introduction of low-cost computer systems and a 
           lower-cost Internet has helped in the prevalence of computer systems in a wider section of society. In the present era, 
           information technology has the potential to influence the lives of ordinary citizens as much as it influences business, 
           education, and government. The high penetration of smartphones, computers,and the Internet, is changing the lives of people 
           across the globe. The information superhighway (bringing IT, entertainment, and the communication industry onto one platform), 
           which was a concept in the nineties is now a reality because of the availability of smartphones. Today, a PC is no more considered 
           a device to be used by only IT professionals, rather it’s considered essential to a household.`,
        },
        {
          id: "u1-ds-data-processing",
          title: "Data, Processing, and Information",
          tags: ["data", "information", "processing"],
          content: `Data: Data can be defined as a collection of raw facts and figures which in
              itself has no meaning. Take for example, “10, 15.” The 10 and 15 can be two
              numbers, two weights, two distances, the height of any two persons or they
              can be the measurement of any two liquids. Thus, one can say that data has no
              meaning unless and until it has been given a shape of some meaningful result.
              Processing: Processing is done on raw data which gives it a meaningful
              form. In a computer, four types of processing activities can be performed.
              They are:
              Calculation This includes addition, subtraction, multiplication,
              and division
              Comparison This includes comparisons like >, >=, <, <=, <> etc.
              Decision Making This includes making decisions on a basis of a
              condition
              Logical Branching This means, based on the decision made, jumping
              from one part of the computer program to another
              Information: Information can be defined as the processed data that
              has meaning.
              For example: Add the numbers 10 and 15.
              In this example the data is the numbers 10 and 15. Processing is the
              addition of these two numbers; and the information is 25, which is the
              result of this addition.Can We Say Data and Information Are Interchangeable?
              Yes, data and information are interchangeable. What is considered information
              in one instance may be considered data in another. For example, the
              grades of all the students in a class in all subject areas are data. When thesegrades are calculated to find out a percentage, the percentage marks are the
              information. But when a teacher is willing to find out the percentage result
              of his class, all the individual percentage marks of all the students is called
              data. When the teacher adds these percentage marks of all the students
              and divides them by the total number of students, the obtained result is
              information, such as a class percentage.
              Why There Is a Need for Data and Information
              In today’s world, business organizations are facing cut-throat competition
              in the marketplace. It has become very difficult to survive and to secure the
              relevant market share; it is becoming harder to maintain the market and
              the market share. Only proper access to data and the information generated
              from that data can help business organizations make quick and relevant
              decisions. These decisions not only help business organizations in retaining
              their market shares, but they also help in keeping track of their competitors’
              activities in the marketplace.
              In today’s business organizations, data and information are no longer
              treated as mere tools for conducting business, rather they are considered
              important assets, which help them in making proper and timely decisions
              at various levels of management. For example, decision support systems at
              the middle level of management, and executive support systems at the top
              levels of management which processe data to generate information.`,
        },
        {
          id: "u1-ds-computer-system",
          title: "Defining The Computer System",
          tags: ["computer", "system", "hardware", "information"],
          content: `A computer system can be defined as an electronic device and thus has two
            states, one when current flows in circuits, represented as “ON” and second,
            when current does not flow in circuits, represented as “OFF.” These two
            states in a computer system are represented by a binary number system
            which consists of two digits: “1” and “0.” The “ON” state is represented by
            “1” and the “OFF” state is represented by “0.” A computer system performs
            four tasks for the user as follows:
            ■ It accepts data.
            ■ It stores the data.
            ■ It does the processing.
            ■ It gives the output or result to the user.A computer system accepts data in the form of alpha numeric characters
            for example 2A/127 Govind Nagar Agra-282004, or in numeric digits
            for example 100, 250, 6285 or in alphabetic form, for example “Robert
            Smith.”
            A computer system can also be called an information processing system
            because it:
            ■ manages voluminous data perfectly,
            ■ provides confirmation of the validity of data and transaction.
            ■ performs the complex processing of data and multidimensional analysis,
            ■ helps in quick search and retrieval of related data,
            ■ provides mass storage,
            ■ provides timely information to the user, and
            ■ it is adaptable, as per changing needs of individual users and corporations.
            A railway reservation system is a perfect example of this, as it handles millions
            of reservations daily, and checks for the data entered such as the correct
            train name, date, gender of customer, etc. It processes thousands of
            reservations across the country simultaneously, searches the status of millions
            of tickets in virtually no time, and provides the latest updates to travelers,
            thus providing all the information required by users.`,
        },
        {
          id: "u1-ds-computer-classification",
          title: "Computer Classification",
          tags:["hashing", "collision", "classification", "computer architecture"],
          content: `A computer system can be classified into the following types:
            On Purpose Basis: On the basis of purpose, computers can be classified
            as:
            ■ General Purpose Computers: Computers that perform regular
            work such as data analysis, accounting, generating bills and receivables,
            billing payables, stock management, etc. Computers used in offices
            for commercial, educational, and other applications are included
            in this category.
            ■ Special Purpose Computers: Computers that perform special tasks
            such as weather forecasting, space applications, medical diagnostics, etc.On Technology Basis: On the basis of the technology, a computer
            system can be grouped into three categories:
            ■ Analog Computers: Analog computers are those computers that measure
            quantities such as current, voltage, frequency, pressure, temperature,
            speed, etc.; and convert them into their numeric equivalent. For example:
            ––A thermometer that measures the rise in mercury level and
            converts it into its numeric equivalent.
            ––Machine gasoline pump that measures the flow of liquid and
            converts it into its numeric equivalent.
            ■ Digital Computers: Digital computers are those computers in which
            all the processing is done in binary digits (0’s and 1’s).
            ■ Hybrid Computers: Hybrid computers are those computers which
            process analog signals and convert them into digital signals and vice-versa.
            Hybrid computers are mainly used in artificial intelligence (robotics) and
            computer-aided manufacturing (e.g., process control).
            On the Basis of Memory Size and Capacity: According to the size
            and memory/storage capacity, there are four types of computers:
            ■ Microcomputer: Microcomputers are also known as desktop PCs or
            personal computers and serve a single user at any given time. They are also
            known as “stand-alone systems” and consist of a main chip called a microprocessor.
            A microprocessor is a chip that consists of an arithmetic and
            logic unit (ALU) and a control unit (CU). A company called INTEL makes
            microprocessor chips. The extended technology of “(XT)” PCs have various
            versions of the microprocessors with names like 8086, 8087, 8088. The
            advanced technology of “(AT)” PCs include versions 80486, P1, P2, P3, and
            P4. The P# series is known as the Pentium series. As of today, the line-up
            of INTEL Core processors include the Intel Core i9, Intel Core i7, Intel
            Core i5, and Intel Core i3, along with the Y-Series Intel Core CPUs.
            ■ Minicomputers: Minicomputers serve multiple users at the same time
            and are general-purpose systems. They have more processing power and
            are more expensive than the microcomputers. Unlike microcomputers,
            minicomputers have a single central processing unit (CPU) and have various
            terminals attached. A terminal consists of a monitor, keyboard, mouse,
            and sometimes a printer. For example, see the IBM 9375, PDP-1.■ Mainframe: Mainframe systems can support thousands of users at a
            time. They are similar to minicomputers but with greater storage and
            processing capabilities. Identifying numbers of terminals supported by
            a mainframe are much higher in comparison to the minicomputers. For
            example, the IBM system/370, IBM 4300 series are mainframe systems.
            ■ Supercomputers: Supercomputers are designed to process complex
            scientific applications and are the most powerful and the most expensive
            computers. They are based on the principle of parallel processing which
            is also known as a “Non_Von Neumann Design.” In parallel processing
            there is one main processor and to it are attached various coprocessors
            and all work simultaneously. Main usages of supercomputers are in the
            field of climate forecasting, petroleum exploration, nuclear energy
            research, defense, etc. For example, CRAY-3, CRAY-2, ETA-10,
            PARAM are supercomputers.
            On the basis of the generations of a computer: On the basis of
            development, a computer can be classified into the following generations:
            ■ First Generation (1940-1956): First-generation computers were built
            before the 1960s. These computers used thermionic valves or vacuum tubes
            for the purpose of making circuits. These computers were not reliable as
            they consumed large amounts of electricity, and the vacuum tubes that were
            used in these computers generated a enormous amounts of heat causing
            frequent breakdowns. They used magnetic drums for memory. Some
            examples of first-generation computers are the UNIVAC and the ENIAC.■ Second Generation (1956-1963): In the
            second generation of computers, thermionic
            valve/vacuum tubes were replaced by transistor
            technology. The development of the transistor
            technology helped in the development of
            a smaller, faster, and more reliable computer
            system. This development also resulted in the
            improved efficiency and storage capacity of a
            computer system. It was this development that
            made the computer system more popular and
            reduced the prices. Assembly language replaced the binary language
            during this period.
            ■ Third Generation (1964-1971):
            Individual components were interconnected
            in the first and second
            generation of computers to form the
            circuits, but with the introduction
            of integration technology it became
            possible to have more than one circuit
            packed into a single integrated circuit container known as an “IC Chip.”
            This development reduced the size of the computer significantly and
            increased the data storage and processing capabilities to an enormous
            level. Punched cards were replaced by keyboards in the third-generation
            computer as an input device.
            ■ Fourth Generation (1971-present):
            Development of large-scale integration
            (LSI), and very large-scale integration
            (VLSI), further reduced the size of
            computers and increased the processing
            speed and storage capabilities. This
            development made it possible to have
            thousands of integrated circuits built
            onto a single silicon chip.
            ■ Fifth Generation (Artificial Intelligence): Development of ultra
            large-scale integration (ULSI), led to the dramatic reduction in the
            size of computers, and increased the processing capabilities of a system
            beyond imagination. With this technological development, computers were now capable of supporting a very large storage-capacity hard-disk,
            optic disk, multimedia, and Internet capability, etc. Parallel processing is
            now helping to make artificial intelligence a reality `,
        },
        {
          id: "u1-ds-block-diagram",
          title: "Block Diagram",
          tags: ["block diagram", "CPU", "memory", "input/output"],
          content: `Data in a computer system is entered with the help of an input device.
            Once the data reaches the central processing unit, the control unit directs
            the data into the memory. This means as soon as data is entered in the computer
            system, it first gets stored in the random access memory (RAM), or
            primary memory of the system. When a command is given to a system for
            processing, the data from the memory is transferred to the arithmetic and
            logical unit for processing. Processing generates the result, which is again
            directed by the control unit to the memory of a system. Once an instruction
            is issued to produce the output, this result from the memory is directed
            to an output device by the control unit. Let us understand this with an
            example.10 Let A = 15
            20 Let B = 25
            30 Let C = A + B
            40 Print C
            50 End
            As soon as the variables A and B are assigned a value of 15 and 25, a memory
            location with a name A and B will be opened in the RAM of the system
            with values of 15 and 25 stored in it. The next instruction is C = A + B. Now
            the data from the RAM will be transferred to the ALU for processing and
            the result (which is 15 + 25 = 40) will be stored in another location “C” in
            the RAM of the system. The next instruction is “print C,” the control unit
            will read the value of the location C in the RAM and will display that on the
            monitor of the computer system. The command “End” will tell the computer
            that program is over.
            Various devices of a computer system form a BLOCK DIAGRAM:
            ■ Input Device: The input devices are used to enter data and instructions
            into a computer system. These devices act as a linking point for
            the external environment of a computer system to its internal environment.
            These input devices accept the data in English or any other
            language from the user and then convert the data entered by the user
            into the machine code, which a computer can understand. The most
            commonly used input device is the keyboard.
            ■ Central Processing Unit: The central processing unit (CPU) is
            also termed the brain of a computer system. As in humans, the brain
            controls all of the activities; similarly in a computer system, it is the
            CPU that controls all of the processing functions. It has the following
            main parts:
            ––Arithmetic and Logic Unit: The arithmetic and logic unit (ALU)
            is a place where all the functions are performed. The ALU not only
            executes the mathematical calculations, but it also performs the
            logical comparison and decision making. Logical comparison and
            decision making are the functions that make a computer system
            different from a calculator.––Control Unit: The control unit (CU) acts as a supervisor of
            the system. It is the responsibility of the CU to synchronize and
            coordinate all the activities performed by a computer system. The
            CU acts as a traffic policeman and directs the transfer of data from
            one part of the CPU to another and vice versa.
            ■ Memory: Memory, which stays inside a central processing unit, is known
            as a primary memory. It is in the form of a silicon chip in which data is
            stored in the form of electronic pulses. The presence of current is shown
            as “1” and absence of current is shown as “0.” Data in this memory is
            stored in the form of 0’s and 1’s.
            ■ Output Device: After processing the data, the result is generated and
            it is directed to a device called an “output device.” This device may be a
            monitor (visual display unit) or a printer attached to a computer system,
            or a hard disk, an optical disk, etc.`,
        },
        {
          id: "u1-ds-hardware-software",
          title: "Hardware Versus Software",
          tags: ["hardware", "software", "system", "technology"],
          content: `All the physical components of a computer system that a user can touch are
            termed as the hardware of a computer system, for example, the keyboard, the
            monitor, CPU, mouse, the printer, etc. However, software is that part of a computer
            system that we cannot touch and we can only see, such as an Internet
            browser, Microsoft Office, etc. Software can be defined as the program that
            instructs a computer how to process the data and generate required output.`,
        },
        {
          id: "u1-ds-computer-memory",
          title: "Computer Memory",
          tags: ["memory", "RAM", "ROM", "storage devices"],
          content: `Primary Memory: Primary memory is the memory that is found inside
              a computer system. Data in the primary memory is stored in the form of
              electronic charges, and that is why this memory is temporary in nature. The
              moment the computer is switched off, data written in primary memory will
              be wiped out. The measurement unit of the memory is bits and bytes and
              can be defined as follows:
              A Bit = 0 or 1
              A Byte = any combination of 8 bits.
              1024 Bytes = 1 Kilo Byte (KB)
              1024 Kilo Bytes = 1 Mega Byte (MB)
              1024 Mega Bytes = 1 Giga Byte (GB)
              1024 Giga Bytes = 1 Tera Byte (TB)
              In a computer system one character needs one byte of memory space
              for the purpose of storage. For example, if one wants to store “RED” in a computer system, then one needs three bytes of memory space. Primary
              memory can be further divided into two categories.
              ROM: ROM stands for “Read Only Memory,” and as the name suggests
              in ROM we can only read. We can neither write nor erase whatever
              is written in a ROM chip. A ROM chip is required to execute instructions,
              which are very frequently executed by a computer system. Because of this,
              these programs and instructions cannot be stored in RAM as it is volatile in
              nature; hence these are permanently stored in a ROM chip and are placed
              inside the CPU. The program, which is usually stored in a ROM chip, is the
              part of the operating system called the basic input-output system (BIOS
              program). It starts as soon as the computer is switched on and makes the
              computer ready to load the rest of the operating system in the memory of a
              computer so it is ready to work.
              ROM has a few variants as follows:
              ■ PROM is known as programmable read-only memory in which data can
              be written once and then it cannot be altered. PROM is sold as empty,
              and can then be filled with a program by the user. Once filled with the
              program, the contents of PROM cannot be removed.
              ■ EPROM is known as erasable programmable read-only memory in
              which data can be rewritten many times, and for this purpose the
              EPROM chip has to be removed from the CPU and exposed to ultraviolet
              rays so that new data can be written onto it.
              ■ EEPROM is known as electrically erasable programmable read-only
              memory that can be reprogrammed using special electronic pulses a
              number of times without removing it from the CPU.
              RAM stands for random access memory, and as the name suggests in RAM
              we can read, we can write, and we can erase whatever is written into it.
              RAM is also known as read/write memory because data can be read from a
              ram chip and can also be written onto it. It is a volatile memory, and as soon
              as the computer is switched off the data written in the RAM is wiped out.
              Various types of RAM on a PC are:
              ■ DRAM (Dynamic RAM): It needs to be refreshed periodically by the
              CPU so that the data contained in them is not lost.
              ■ SRAM (Static RAM): In it data contained remains stored properly;
              therefore it does not need to be refreshed by the CPU. This type of
              RAM has a higher speed than DRAM and is costly, too.■ EDO RAM (Extended Data-out RAM): It is basically used in the Pentium
              systems and is suitable for having bus with speeds up to 66 MHz.
              ■ SDRAM (Synchronous Dynamic RAM): It can be considered as an
              extension of DRAM, but has a higher speed than DRAM. It is suitable
              for a system bus with speeds up to 100 MHz.
              ■ RDRAM (Rambus Dynamic RAM): is a type of memory that is faster
              and more expensive than SDRAM. This memory is used on systems that
              use the Pentium 4.
              Secondary Memory: Secondary memory is a permanent memory and
              remains outside a computer system. In this memory data is stored in the
              form of magnetic particles on hard disk, floppy disk, magnetic tape, and in
              the form of pits on the optical disk.`,
        },
        {
          id: "u1-ds-storage-devices",
          title: "Storage Devices: DASD/SASD (Direct Access Storage Devices/Sequential Access Storage Devices) ",
          tags: ["storage", "DASD", "SASD", "data storage"],
          content: `Storage devices are referred to by a variety of names such as auxiliary storage,
            auxiliary memory, secondary storage, and backup storage. They are
            capable of storing large amounts of data. They are used as an online extension
            to the main memory; and are also used for offline storage of programs
            and data.
            Differences between DASD and SASD
            The workings of direct access storage devices (DASD) and sequential
            access storage devices (SASD) can be understood as follows:
            DASD: These devices allow the user to access any record directly.
            Examples of these types of devices are floppy, CD, DVD, hard disk, etc.
            SASD: These devices do not allow the user to access any record directly.
            For example, if a user needs to read and record the number 50, they have to
            first bypass record 49, only after that they would be able to read the desired
            record. It works like a cassette of a tape recorder. An example of this type
            of device is magnetic tape.
            Various storage devices are described in the following sections.
            1.10.1 Magnetic Tape
            Magnetic tape was used as offline storage for large amounts of data
            because it is inexpensive.A magnetic tape is similar to an audio tape. A metal foil called a
            marker indicates the beginning of the tape. Data is stored one character
            at a time; either 7 or 9 bits format is used for each character and they
            are recorded in parallel across the width of the tape. Data on the tape
            is saved in the form of records separated by a gap called inter record
            gap (IRG). The tape always remains in motion and is only stopped when
            a record gap comes below the read/write heads. The tape motion is
            stopped only when the read data is to be transferred to the memory of
            the system. During the time the tape is transferring the data into the
            memory any further reading process is not completed. So the IRG is
            given to allow the tape to attain its normal speed before the beginning
            of next record is reached. A group of related records is called a file, and
            a file marker identifies the beginning of the file. It is a specially coded
            record preceded by a gap longer than the record gap. The first record
            following the file mark may be used as a header or identifier for this file,
            and the last record may be used as a trailer or end for this file.In the nine tracks format a set of nine heads are mounted to read/
            write information on tape. Each head operates independently and stores
            information along one track of the tape. While eight tracks are used to
            record a byte of data, the ninth track is used to record a parity bit for each
            byte. The parity bit checks if the data has been read/written accurately
            or not. The recording density is measured in bits per inch, that is, bits
            per track of the tape. For example on one inch of a 9-track tape having
            a recording density of 1600 bits per inch the total number of bits stored
            is = 1600*9 = 14,400 bits. The tape travels at a speed of 100 inches per
            second, and during the time the tape takes to accelerate to its full speed,
            no recording takes place.
            If the record size is of lesser length than the block fixed for it,
            the rest of the block is left blank. Because of this a lot of space is
            wasted. To reduce this gap on tape, records can be blocked together
            and in place of inter-record gap (IGR) we will have inter-block gap
            (IGB). For example, in a blocking factor of 3, three records per unit
            are recorded.1.10.2 Floppy Disk
            Mylar plastic coated with magnetic oxide is used for making a floppy.
            This flexible material is cut into circular pieces of 5.25 inches or 3.5 inches
            in diameter. Because of the flexible material used during production, they
            are called floppy disks. These were small, low in cost, and could be very
            conveniently carried from one place to another. In a floppy disk, data is
            stored in the form of magnetic particles on the tracks. A hub in the center
            is used for mounting the disk into the disk drive. Because there is a long
            slit in a floppy provided for the read/write head to access the data, there
            are many chances of the disk becoming unusable because of its exposure
            to dust, scratches, etc. Data could easily be stored and retrieved with the
            help of the floppy disk. The floppy disk had a longer life in comparison to
            magnetic tape, but the data is less secure.
            For a standard IBM formatted double-sided, high-density 5.25 inch floppy
            diskette, the following properties applied:
            ■ Data is recorded on two sides of the disk
            ■ Single-sided, 9 sectors/track: 180 KB
            ■ Double-sided: 360 KB
            ■ High-Density (HD): 1.2 MB
            For a standard IBM formatted double-sided, high-density 3.25-inch
            floppy diskette, the following properties applied:
            ■ Data is recorded on two sides of the disk
            ■ Each side has 80 tracks
            ■ Each track has 18 sectors
            ■ Each sector holds 512 bytes (0.5 KB)
            ■ Each floppy disk holds 2880 sectors (2 * 80 * 18), for a total of 1440 KB
            or 1.44 MB 1.10.3 Hard Disk
            Magnetic disks or the “hard disk” or Winchester disk were first introduced
            in 1956 for the purpose of bulk data storage. A hard disk contains
            circular platters that are made of any metal or aluminum and are coated
            with magnetizable material. The number of platters depends on the disk
            capacity. The higher the number of platters, the higher the data-storage
            capacity of the disk. To be able to store data on the disk, it is essential to
            format it first. Formatting the disk creates magnetic tracks and sectors
            where data is stored in the form of magnetic particles. A conducting coil
            called the drive head is used to store/retrieve data from the disk. When
            a user tries to read/write data onto the disk, the head remains stationary
            while the platter rotates beneath it. Data is stored on both sides of the disk
            on concentric rings called tracks. Each track is of the same width as that of
            the head. To minimize errors due to the interference of the magnetic field,
            adjacent tracks are separated by gaps called intratrack gaps.Data is stored and read from the disk in blocks called sectors. The heads
            are mounted on a rigid arm that can be extended or retracted across all the
            tracks and are either fixed or movable. The speed of disk rotation is 7,200
            revolutions per minute. Nowadays, disks can rotate at a speed of 10,000
            revolutions per minute. The higher the speed of the rotation of the disk,
            the higher the rate of the transfer of data into the computer memory. This
            increases the chances of the disk becoming heated which will result in a
            shorter life of the hard disk.
            All the platters rotate at a constant speed around the spindle. The
            drive head, while positioned close to the center of the disk, reads from a surface that is passing by more slowly than the surface at the outer edges
            of the disk. Because of this, tracks toward the outer side of the disk are
            less densely populated with data in comparison to the tracks are toward
            the center of the disk. This results in the reading of same amount of data
            over the same period of time, either from the outermost track or from the
            innermost track.
            Position of the read/write head is at a fixed distance from the platter
            allowing an air gap. The read/write process always starts at the sector boundaries.
            A sector can store a maximum of 512 bytes. If the lesser number of
            bytes are to be stored in a sector, the rest of the sector is padded (filled) with
            the last byte recorded. For the purpose of storage, in a hard disk clusters are
            always allotted. A cluster consists of a number of sectors that are always an
            exponent of 2. The only odd number of sectors a cluster could consist of is 1
            (2^0=1). For example, if there is a file with a size of 1,000 bytes, one cluster
            (two sectors) would be allocated to the file on a disk, later, if data is appended
            to the file and its size grows to 1.600 bytes, another two clusters are allocated,
            storing the entire file within four clusters. If adjacent clusters are not available,
            the second two clusters may be written elsewhere on the same disk or
            within the same cylinder or on a different cylinder—wherever the file system
            finds two sectors available. A set of corresponding tracks on all surfaces of the
            disk pack equidistant from the spindle is called a cylinder.The hard disk allows the direct access of records. That is why they are
            also known as the direct access storage devices (DASD). To read/write
            data, the cylinder number, the surface number and the sector count must
            be known.
            1.10.4 Optical Disk
            The latest developments in hardware and enhanced processing speed
            of systems generated a need for quick and fast storage. Data is stored
            in the form of the magnetic particles in earlier data storage devices, but
            with the development of optical technology it is now possible to store
            data in the form of tiny particles called pits (created by a laser beam).
            Data is stored on the optical disk in the form of light particles which do
            not generate a magnetic field, thus they can be stored very close to one
            another. In optical disks, streams of digital data in the form of tiny pits
            are burned onto a thin coating of metal or other material deposited on
            a disk. A beam of laser light is used to read these pit patterns. When it
            encounters a pit, the intensity of the reflected light of the laser changes.
            The change is detected by photo sensors and converted into a digital
            signal. The disk can store up to 600 MB of data and can be addressed by
            track and sectors.Optical disks are available in the following forms:
            ■ CD/CD-ROM (Compact Disc or CD-Read-Only Memory): This is
            a very commonly used term and usually refers to non-writable discs.
            ■ CD-R (Writable Discs or CD Recordable): This means that a user
            can only burn (store) data a single time on it, or multiple times when
            using multisession mode until it reaches the disk capacity. Once data is
            written it cannot be overwritten or erased.
            ■ CD-RW (Rewritable Discs/CD Rewritable). This means that a user
            cannot only write data, but can also erase the data written on the disc
            and can write new data on it.
            ■ DVD/DVD-ROM (Digital Versatile Disc/DVD Read-Only Memory).
            Basically the same as CD-ROM, however, a DVD typically has a six
            times greater capacity than a CD.
            ■ DVD-R/DVD+R (Writable DVD or DVD Recordable). Basically
            the same as CD-R with greater capacity.
            ■ DVD-RW/DVD+RW (Rewritable DVD/DVD Rewritable). Basically
            the same as CD-RW with greater capacity.
            ■ DVD DL (Double or Dual Layer). Double-layer discs have twice as
            much disc space as standard DVDs.
            ■ BD-R (Blu-Ray Disc Recordable). It is a Blu-ray disc on which data
            can be written only once.
            ■ BD-RE (Blu-ray Disc Rewritable). It is a Blu-ray disc recordable
            erasable (BD-RE), which can be recorded on and erased any number of
            times.
            Blu-ray is a digital optical-disc data-storage format that has a data storage
            pattern that supersedes the DVD format. Blu-ray discs are capable
            of storing hours of video in high-definition and ultra high-definition
            resolution.
            1.10.5 Pen Drive
            A pen drive is a portable storage drive that can be carried easily
            from one place to another and is a very popular storage device
            among users (popularly called PD by users). A pen drive is very easy to operate; the user simply needs to put it into the Universal Serial
            Bus (USB) port and it is ready to use. A pen drive works on the
            principle of EEPROM.1.10.6 Flash Memory
            Flash memory can be defined as a nonvolatile memory that can be
            erased and reprogrammed in units of memory called blocks. It works on
            the concept of an EEPROM and the only difference is that in EEPROM
            data is erased at a byte level, whereas in flash memory it is done at a block
            level making flash memory faster. Flash memory is often used to hold control
            code such as the basic input/output system (BIOS) in a personal computer.
            When BIOS needs to be changed (rewritten), the flash memory can
            be written to in block (rather than byte) sizes, making it easy to update.
            However, flash memory is not as useful as random access memory (RAM)
            because RAM needs to be addressable at the byte level and not at the block
            level. Flash memory gets its name because the microchip is organized so
            that a section of memory cells are erased in a single action or a “flash.” Flash
            memory is used in digital cellular phones, digital cameras, LAN switches,
            PC cards for notebook computers, digital set-up boxes, embedded controllers,
            and other devices.`,
        },
          {
          id: "u1-ds-types-of-software",
          title: "Types of Software",
          tags: ["System Software", "Types of Software", "Application Software"],
          content: `Software can be divided into two categories:
System Software: A computer user does not understand the machine
language (a language that a computer understands), and similarly a computer
cannot understand a high-level language in which a user communicates. So,
if a user wants to work on a computer system and wants to run an application
program, the computer needs to have system software. System software can
be defined as a collection of programs that performs the following functions:
■ Receiving and interpreting user commands (i.e., converting users’
instructions into machine language and vice versa).
■ Running application programs and storing them in the hard disk or any
other secondary storage as per the directions given by the user.
■ Retrieval of the stored programs from the hard disk or any other
secondary storage device on the user’s command.
■ Creates an interface among the peripheral devices and the CPU, directs
and produces the results on the user’s command.
Thus, it can be said that system software is responsible for the coordination
of all activities in a computer system.And Application Software`,
        },
        {
          id: "u1-ds-operating-systems",
          title: "Operating Systems",
          tags: ["Operating Systems", "Functions of an Operating System", "Types and Classifications of Operating Systems","Components of an Operating System"],
          content: `An operating system is system software. It is a set of programs that provides an interface between the user and the computer system (hardware).
In other words, it coordinates the flow of information from the computer to
the user and vice versa.Functions of an Operating System - Memory Management,CPU Management,Disk Management,Input/Output Management,User Interface,Communication,Error Detection,Resource Allocation,Accounting,Protection
Types and Classifications of Operating Systems-System software can be broadly classified into the following categories on
the basis of their usage:
■ Batch Processing System Software: A negligible interaction between
the user and the program batch processing system software. In this type
of system jobs are processed in the order in which they are entered,
that is, on a “first in, first out” basis (FIFO). In a batch processing system, memory is divided into two parts; one is permanently occupied
by the software, whereas the other is used as per the need of the user.
It simplifies the processing operations because the instructions are
executed in batches, and thus saves the processor time.
■ Multi-User Operating System Software: The multi-user operating
system supports the multiple units of PCs called “terminals” that
are attached to the main computer system as in mini and mainframe
computer systems. It consists of only one central processing unit
(a microprocessor) that performs all the operations. These systems are
used when two or more users try to run programs at the same time.
Examples of the multi-user operating system are UNIX, MSV, etc.
■ Multiprogramming or Multi-Tasking System Software: This is the
system software that is capable of running more than one program at the
same time. Multiprogramming can be defined as a process of creating
a situation in which more than one program may be held in the main
memory at one time, thus making it possible to process several programs
at a time. The main objective of developing this kind of system software
is to minimize unused microprocessor time. A computer switches from
one job to another at a rapid rate under the time-sharing mode. Different
terminals are used to enter jobs into the computer. After processing the
first user’s job, it proceeds to the second and then to the third and so on for
a short period of time called the “time slices,” before returning to the first
user’s job from where it earlier started. This cycle continues indefinitely.
When one program is finished the other program replaces it. UNIX, OS/2,
and Windows are commonly used multiprogramming or multitasking
operating systems. The processor is kept busy while channels and buffers
are occupied with a job of bringing data and writing out information.
For example, let us assume that three users are working on a system simultaneously. In this concept the program of each user will be divided into a
number of pages (layers) of equal size. During execution, the processor will
divide its processing time equally among all of the users. It will first process
the layer 1(L1) of the program 1 (P1), then layer 1 (L1) of the program 2
(P2), and finally the layer 1 (L1) of the program 3 (P3). The processor will
give equal time to all the users, but it will appear to all of the users as if processor is giving its full time to them. When program 1 (P1) is finished, the
processor will divide its time equally among the remaining programs (P2
and P3) and finally to the program 3 (L3). 
■ Multiprocessing Operating System Software: In a multiprogramming
operating system, more than one program is processed by an operating
system, whereas in a multiprocessing operating system, one program
is processed by more than one processor. A multiprocessing operating
system software uses multiple processors that share a common memory.
Instructions from different and independent programs are processed at
the same time by different processors. On the contrary, the processors
may simultaneously execute different instructions from the same
program. Examples of commonly used multiprocessing operating systems
are OS/2, UNIX, MSV, etc. Multiprocessing systems can be classified as:
•	 loosely coupled multiprocessing
•	 functionally specialized processors
•	 tightly coupled multiprocessing
•	 parallel processing
Multiprocessor systems usually consist of two or more processors. Each
processor has its own CU, ALU, etc. An interconnection mechanism allows
each processor to access shared main memory and input/output devices.
The processors not only communicate with each other through memory but also are able to directly exchange signals. Memory is organized in such
a manner such that it provides a multiple simultaneous access to a separate
block of memory. The operating system controls this entire system and provides interaction between processors and their programs.
■ Real-Time System Software: Real-time systems are the systems in
which response time is critical. These are the systems that are involved
with the immediate processing of data, machines, and records. These
systems are designed to accept the data in real time, which means as
soon as an activity occurs, the system processes the data immediately and
generates the output in time to have an effect on the ongoing activity.
Real-time systems are online systems with tighter constraints on response
time. Examples of the real-time operating systems are C Executive,
communications control program (CCP), CTOS, CTRON, FADOS, etc.Components of an Operating System-An operating system consists of two primary components:
■ a supervisor
■ an integrated set of support utilities
1. The Supervisor (or Control Program): The supervisor is defined
as the component of an operating system that takes care of the overall
working of the computer system. It is a set of programs that are integrated to one another. It performs the following three basic functions:
•	 It initializes the system at the time of start-up
•	 It allows running of the application programs
•	 It controls input and output devices attached to the system.
The supervisor also performs some additional functions such as keeping a
track of computer time for different users, etc. The OS is generally found
on a hard disk and sometimes in the form of a chip called firmware. The
supervisor consists of two portions: a kernel and a transient portion. When
the supervisor is loaded into the memory for the first time, both portions
are loaded. The kernel part of supervisor always remains in the memory
with an application program. This is to monitor the system operations. It’s
the part of an operating system that directly interacts with the hardware,
and therefore it must be present in the memory as long as the computer is being used.2.The support utilities`,
        }
      ],
    },
  ],

  videos: [
    // {
    //   id: "u1-v-big-o",
    //   title: " Learn Computer Science. (2024, April 25). How computer works? Complete Beginners guide",
    //   description:
    //     "How computer works",
    //   url: "https://www.youtube.com/watch?v=fOcoLKHeOTI&t=2s",
    //   tags: ["How computer works"],
    //   channel: "Learn Computer Science",
    // },
    // {
    //   id: "u1-v-bfs-dfs",
    //   title: "Neso Academy. (2025). Von Neumann Architecture",
    //   description:
    //     "Von Neumann Architecture",
    //   url: "https://www.youtube.com/watch?v=kBXcrqwCVpQ",
    //   tags: ["Von Neumann Architecture"],
    //   channel: "Neso Academy",
    // },
    
    // {
    //   id: "u1-v-mit",
    //   title: "9.2.3 The von Neumann Model",
    //   description:
    //     "Von Neumann Model",
    //   url: "https://www.youtube.com/watch?v=H0xGKKpKaRE",
    //   tags: ["Von Neumann Model"],
    //   channel: "MIT OpenCourseWare",
    // },
    
    // {
    //   id: "u1-v-computer-memory",
    //   title: "RAM, ROM, Cache & more: Understanding computer memory!",
    //   description:
    //     "Understanding computer memory",
    //   url: "https://www.youtube.com/watch?v=3xhHhaCFAZI",
    //   tags: ["RAM, ROM, Cache"],
    //   channel: "Club Academia",
    // },
    
    // {
    //   id: "u1-v-software-type",
    //   title: "TYPES OF SOFTWARE || APPLICATION SOFTWARE || SYSTEM SOFTWARE || UTILITY SOFTWARE || COMPUTER BASICS",
    //   description:
    //     "TYPES OF SOFTWARE || APPLICATION SOFTWARE || SYSTEM SOFTWARE || UTILITY SOFTWARE || COMPUTER BASICS",
    //   url: "https://www.youtube.com/watch?v=BTB86HeZVwk",
    //   tags: ["TYPES OF SOFTWARE || APPLICATION SOFTWARE || SYSTEM SOFTWARE || UTILITY SOFTWARE || COMPUTER BASICS"],
    //   channel: "Make It Easy Education",
    // },
    
    // {
    //   id: "u1-v-embedded-101",
    //   title: "Embedded 101 Course: Embedded Software",
    //   description:
    //     "Embedded Software",
    //   url: "https://www.youtube.com/watch?v=n7zg5ECQyX4",
    //   tags: ["Embedded Software"],
    //   channel: "EmbeddedInventor",
    // },
  ],

  /** Add your real PDFs under public/unit-1/ — these paths are searchable by title & description */
  pdfs: [
    // {
    //   id: "u1-pdf-slides",
    //   title: "Unit 1 — Software: An Introduction",
    //   description:
    //     "Software: An Introduction,Types of Software,Operating Systems",
    //   file: "/unit-1/Computer_Concepts_and_Management_I.pdf",
    // },
    // {
    //   id: "u1-pdf-practice",
    //   title: "Unit 1 — Introduction_to_Information_Science (PDF)",
    //   description: "Introduction_to_Information_Science",
    //   file: "/unit-1/Introduction_to_Information_Science_----_(9_Digital_Technologies_and_Data_Systems).pdf",
    // },
  ],
};

export default unit1;
