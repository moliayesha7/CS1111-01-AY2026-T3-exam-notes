/** Unit 4 — Computer networks. Edit only this file. */

const unit4 = {
  id: "unit-4",
  number: 4,
  title: "Unit 4 — Operating Systems",
  description: `Evolution and overview of OS functions   
Introduction to batch processing, multiprocessing, real-time, parallel, and distributed OS   
Overview of Mobile OS`,

  books: [
    {
      id: "u4-cn",
      title: "Operating Systems",
      subject: "Computer Science",
      topics: [
        {
          id: "u4-operating-system",
          title: "Operating System",
          tags: ["Operating System","Types of Operating System","main functions of Operating System"],
          content: `https://www.guru99.com/operating-system-tutorial.html/
          What is an Operating System?
An  Operating System (OS) is a  software that acts as an interface between 
 computer hardware components and the user. Every computer system must have at least one 
 operating system to run other programs. Applications like Browsers,
 MS Office, Notepad Games, etc., need some environment to run and perform its tasks.
 The OS helps you to communicate with the computer without knowing how to speak the computer’s language.
  It is not possible for the user to use any computer or mobile device without having an operating system.
  History Of OS
Operating systems were first developed in the late 1950s to manage tape storage
The General Motors Research Lab implemented the first OS in the early 1950s for their IBM 701
In the mid-1960s, operating systems started to use disks
In the late 1960s, the first version of the Unix OS was developed
The first OS built by Microsoft was DOS. It was built in 1981 by purchasing the 86-DOS software from a Seattle company
The present-day popular OS Windows first came to existence in 1985 when a GUI was created and paired with MS-DOS.
Types of Operating System (OS)
Following are the popular types of OS (Operating System):

Batch Operating System
Multitasking/Time Sharing OS
Multiprocessing OS
Real Time OS
Distributed OS
Network OS
Mobile OS
Multi-Tasking/Time-sharing Operating systems:
Time-sharing operating system enables people located at a different terminal(shell) to use a single computer system at the same time. 
The processor time (CPU) which is shared among multiple users is termed as time sharing.
Real time OS:
A real time operating system time interval to process and respond to inputs is very small. 
Examples: Military Software Systems, Space Software Systems are the Real time OS example.
Disstributed Operating System:
Distributed systems use many processors located in different machines to provide very fast computation to its users.
Network Operating System:
Network Operating System runs on a server. It provides the capability to 
serve to manage data, user, groups, security, application, and other networking functions.
Mobile OS:
Mobile operating systems are those OS which is especially that are designed to power smartphones, tablets, and wearables devices.

Some most famous mobile operating systems are Android and iOS, but others include BlackBerry, Web, and watchOS
Functions of Operating System
Some typical operating system functions may include managing memory, files, processes, I/O system & devices, security, etc.

Below are the main functions of Operating System:
In an operating system software performs each of the function:

Process management: Process management helps OS to create and delete processes. It also provides mechanisms for synchronization and communication among processes.
Memory management: Memory management module performs the task of allocation and de-allocation of memory space to programs in need of this resources.
File management: It manages all the file-related activities such as organization storage, retrieval, naming, sharing, and protection of files.
Device Management: Device management keeps tracks of all devices. This module also responsible for this task is known as the I/O controller. It also performs the task of allocation and de-allocation of the devices.
I/O System Management: One of the main objects of any OS is to hide the peculiarities of that hardware devices from the user.
Secondary-Storage Management: Systems have several levels of storage which includes primary storage, secondary storage, and cache storage. Instructions and data must be stored in primary storage or cache so that a running program can reference it.
Security: Security module protects the data and information of a computer system against malware threat and authorized access.
Command interpretation: This module is interpreting commands given by the and acting system resources to process that commands.
Networking: A distributed system is a group of processors which do not share memory, hardware devices, or a clock. The processors communicate with one another through the network.
Job accounting: Keeping track of time & resource used by various job and users.
Communication management: Coordination and assignment of compilers, interpreters, and another software resource of the various users of the computer systems.
Features of Operating System (OS)
Here is a list important features of OS:

Protected and supervisor mode
Allows disk access and file systems Device drivers Networking Security
Program Execution
Memory management Virtual Memory Multitasking
Handling I/O operations
Manipulation of the file system
Error Detection and handling
Resource allocation
Information and Resource Protection
Advantage of Operating System
Allows you to hide details of hardware by creating an abstraction
Easy to use with a GUI
Offers an environment in which a user may execute programs/applications
The operating system must make sure that the computer system convenient to use
Operating System acts as an intermediary among applications and the hardware components
It provides the computer system resources with easy to use format
Acts as an intermediator between all hardware’s and software’s of the system
Disadvantages of Operating System
If any issue occurs in OS, you may lose all the contents which have been stored in your system
Operating system’s software is quite expensive for small size organization which adds burden on them. Example Windows
It is never entirely secure as a threat can occur at any time
What is Kernel in Operating System?
The kernel is the central component of a computer operating systems. The only job performed by the kernel is to the manage the communication between the software and the hardware. A Kernel is at the nucleus of a computer. It makes the communication between the hardware and software possible.
 While the Kernel is the innermost part of an operating system, a shell is the outermost one.
 Features of Kernel
Low-level scheduling of processes
Inter-process communication
Process synchronization
Context switching
Types of Kernel
There are many types of kernels that exists, but among them, the two most popular kernels are:

1. Monolithic
A monolithic kernel is a single code or block of the program. It provides all the required services offered by the operating system. It is a simplistic design which creates a distinct communication layer between the hardware and software.

2. Microkernels
Microkernel manages all system resources. In this type of kernel, services are implemented in different address space. The user services are stored in user address space, and kernel services are stored under kernel address space.
 So, it helps to reduce the size of both the kernel and operating system.
 Difference between Firmware and Operating System
Below are the Key Differences between Firmware and Operating System:

Firmware	Operating System
Define Firmware: Firmware is one kind of programming that is embedded on a chip in the device which controls that specific device.	Define Operating System: OS provides functionality over and above that which is provided by the firmware.
Firmware is programs that been encoded by the manufacture of the IC or something and cannot be changed.	OS is a program that can be installed by the user and can be changed.
It is stored on non-volatile memory.	OS is stored on the hard drive.
Difference between 32-Bit and 64-Bit Operating System
Below are the Key Differences between 32-Bit and 64-Bit Operating System:

Parameters	32. Bit	64. Bit
Architecture and Software	Allow 32 bit of data processing simultaneously	Allow 64 bit of data processing simultaneously
Compatibility	32-bit applications require 32-bit OS and CPUs.	64-bit applications require a 64-bit OS and CPU.
Systems Available	All versions of Windows 8, Windows 7, Windows Vista, and Windows XP, Linux, etc.	Windows XP Professional, Vista, 7, Mac OS X and Linux.
Memory Limits	32-bit systems are limited to 3.2 GB of RAM.	64-bit systems allow a maximum 17 Billion GB of RAM.
Summary:
What is OS (Operating System definition) and its Types: An operating system is a software which acts as an interface between the end user and computer hardware. Different categories of Operating System in computer and other devices are: Batch Operating System, Multitasking/Time Sharing OS, Multiprocessing OS, Real Time OS, Distributed OS, Network OS & Mobile OS
Personal Computer Operating Systems were first developed in the late 1950s to manage tape storage
Explain Operating System working: OS works as an intermediate between the user and computer. It helps the user to communicate with the computer without knowing how to speak the computer’s language.
The kernel is the central component of a computer operating systems. The only job performed by the kernel is to the manage the communication between the software and the hardware
Two most popular kernels are Monolithic and MicroKernels
Process, Device, File, I/O, Secondary-Storage, Memory management are various functions of an Operating System`,
        },
        
      ],
    },
  ],

  videos: [
     {
      id: "u3-v-deadlock1",
      title: "The evolution of the operating system",
      description: "The evolution of the operating system",
      url: "https://www.youtube.com/watch?v=1lG7lFLXBIs",
      tags: ["operating system"],
      channel: "Asianometry",
    },
     {
      id: "u3-v-deadlock2",
      title: "Operating Systems: Crash course Computer Science #18",
      description: "Operating Systems: Crash course Computer Science #18",
      url: "https://www.youtube.com/watch?v=26QPDBe-NB8",
      tags: ["operating system"],
      channel: "CrashCourse",
    },
       {
      id: "u3-v-deadlock3",
      title: "Types of OS :Batch Processing, Multiprogramming Timesharing Operating System types Part 1",
      description: "Types of OS :Batch Processing, Multiprogramming Timesharing Operating System types Part 1",
      url: "https://www.youtube.com/watch?v=3Hwx4qRWyus",
      tags: ["Types of OS"],
      channel: "Learn with harshit",
    },
       {
      id: "u3-v-deadlock4",
      title: "Types of OS real time OS,Multiprocessor OS Distributed, Clustered Operating system part 2",
      description: "Types of OS real time OS,Multiprocessor OS Distributed, Clustered Operating system part 2",
      url: "https://www.youtube.com/watch?v=8zyEB1R8kR8",
      tags: ["Types of OS"],
      channel: "Learn with harshit",
    },
     {
      id: "u3-v-deadlock5",
      title: "Types of operating system (Batch, distributed, time sharing, real time) computer awareness",
      description: "Types of operating system (Batch, distributed, time sharing, real time) computer awareness",
      url: "https://www.youtube.com/watch?v=TW8VndfCNsY",
      tags: ["Types of OS"],
      channel: "Mustaq Kunnur Academy",
    },
      {
      id: "u3-v-deadlock6",
      title: "Mobile OS architecture: Android, iOS & future trends explained!",
      description: "Mobile OS architecture: Android, iOS & future trends explained!",
      url: "https://www.youtube.com/watch?v=KlamNkNrkcI",
      tags: ["Mobile OS architecture"],
      channel: "CodeLucky",
    },
  ],

  pdfs: [ ],
};

export default unit4;
