/** Unit 6 — add books, videos, and PDFs here. Files: public/unit-6/ */

const unit6 = {
  id: "unit-6",
  number: 6,
  title: "Unit 6 — Computer Networks and Security",
  description: `Network: Types, Topologies, Transmission modes and Connecting Devices
Internet: Internet Service Providers, World Wide Web, Domain Name System, IP Address, Web browsers, Search engines 
Computer Security:  Confidentiality, Integrity, Availability, Authenticity, and Non-Repudiation 
Threats, Attacks, Viruses, Trojan, and Firewall`,

  books: [ 
      {
      id: "u5-computer-networks",
      title: "Computer Networks and Security",
      subject: "Computer Science",
      topics: [        
        {
          id: "u6-security-intro",
          title: "SECURITY INTRODUCTION",
          tags: ["SECURITY INTRODUCTION"],
          content: `This is a book on network and Internet security. As such, before we embark on
our journey of understanding the various concepts and technical issues related
to security, it is essential to know what we are trying to protect. What are the
dangers of using computers, computer networks, and the biggest network of
them all, the Internet? What are the likely pitfalls? What happens if we do
not implement the right security policies, frameworks, and technology? This
chapter attempts to provide answers to these basic questions.
We start with a discussion of the fundamental point: Why is security
required in the first place? People sometimes say that security is like statistics:
what it reveals is trivial, what it conceals is vital. In other words, the right security infrastructure opens up just enough doors. We will discuss a few real-life
incidents that should prove beyond any doubt that security is important. Now 
that critical business and other types of transactions are being conducted over
the Internet to such a large extent, inadequate or improper security mechanisms can destroy a business or play havoc with people’s lives.
We will also discuss the key principles of security. These principles will
help us identify the various areas that are crucial while determining the security threats and possible solutions. Electronic documents and messages are
now considered the equivalent to paper documents in terms of their legal
validity, and we will examine the implications of this new view of information
`,
        },
         {
          id: "u6-security-need",
          title: "THE NEED FOR SECURITY",
          tags: ["THE NEED FOR SECURITY"],
          content: `Most of the first computer applications had no or at best, very little, security.
This lack of security continued for a number of years until the importance of
data was truly realized. Until then, computer data was considered useful, but
not something that needed to be protected. When computer applications were
developed to handle financial and personal data, the real need for security
was felt like never before. People realized that the data on computers is an
extremely important aspect of modern life, and various areas in security began
to gain importance. Two typical examples of security mechanisms are as follows:
● Provide a user id and password to every user, and use that information to
authenticate a user
● Encode information stored in the databases in some fashion so that it is
not visible to users who do not have the right permissions.
Organizations employed their own mechanisms to provide security. As technology improved, the communication infrastructure became extremely mature,
and newer applications were developed to meet various user demands and
needs. Soon, people realized that the basic security measures were not enough.
The Internet is used globally, and there were many examples of what could
happen if there was insufficient security built into the applications developed
for the Internet. Figure 1.1 shows such an example of what can happen when
you use your credit card for making purchases over the Internet. From the
user’s computer, the user’s details, such as the user id, order details, such as
the order id and item id, and payment details, such as the credit card information, travel across the Internet to the merchant’s server. The merchant’s
server stores these details in its database.
There are various security holes in this process. First, an intruder can
capture the credit card details as they travel from the client to the server.
If we somehow protect this transit from an intruder’s attack, it still does not 
solve our problem. Once the merchant receives the credit card details and
validates them to process the order and obtain payments, the merchant stores
the credit card details in its database. An attacker can simply access this database and gain access to all the credit a card numbers stored therein! One
Russian attacker (called Maxim) managed to hack a merchant’s Internet site
and obtain 300,000 credit card numbers from its database. He then attempted
extortion by demanding protection money ($100,000) from the merchant.
The merchant refused to oblige. Following this, the attacker published about
25,000 of the credit card numbers on the Internet. Some banks reissued all
the credit cards at a cost of $20 per card, and others warned their customers
about unusual entries in their statements.
Such attacks can obviously lead to great losses, both in terms of finances
and goodwill. Generally, it takes about $20 to replace a credit card. Therefore,
if a bank has to replace 300,000 such cards, the total cost of such an attack is
about $6 million. Had the merchant in the example employed proper security
measures, he would have saved money and bother.
Of course, this is just one example. More cases have been reported,
and the need for proper security is increasing with every attack. In another
example, in 1999, a Swedish hacker broke into Microsoft’s Hotmail Website
and created a mirror site. This site allowed anyone to enter any Hotmail user’s
email id and read the user’s emails.
Also in 1999, two independent surveys were conducted to invite people’s
opinions about the losses that occur due to successful attacks on security. One
survey pegged the losses at an average of $256,296 per incident, and another
found the average was $759,380 per incident. In the following year, this figure
rose to $972,857.
`,
        },
         {
          id: "u6-security-principles",
          title: "PRINCIPLES OF SECURITY",
          tags: ["PRINCIPLES OF SECURITY"],
          content: `Having discussed some of the attacks that have occurred in real life, let us
now classify the principles related to security. This will help us understand the
attacks better and think about the possible solutions.
Let us assume that a person, A, wants to send a check worth $100 to another
person, B. Normally, what are the factors that A and B think of in such a case?
A will write the check for $100, put it inside an envelope, and send it to B.
● A wants to ensure that no one expects B will get the envelope, and even if
someone else gets it, she does not want anyone to know about the details
of the check. This is the principle of confidentially.
● A and B would like to make sure that no one can tamper with the contents
of the check (such as its amount, date, signature, or name of the payee).
This is the principle of integrity.
● B would like to be assured that the check has indeed come from A, and
not from someone else posing as A (as it could be a fake check). This is the
principle of authentication.
● What will happen tomorrow if B deposits the check into her account, the
money is transferred from A’s account, and then A claims to have not written/
sent the check? The court of law will use A’s signature to disallow A to refute
this claim and settle the dispute. This is the principle of non-repudiation.
These are the four chief principles of security. There are two more, access
control and availability, which are not related to the particular message, but
are linked to the overall system as a whole.
1.4.1 Confidentiality:
The principle of confidentiality specifies that only the sender and the intended
recipient(s) should be able to access the content of a message. Confidentiality
gets compromised if an unauthorized person is unable to access a message.
An example of compromising the confidentiality of a message is shown in
Figure 1.2. The user of a computer A sends the message to the user of a computer B. (From here onwards, we use “A” to mean the user A, and “B” to mean
user B, although we just show the computers of the users A and B). Another
user, C, gets access to this message, which is not desired, and therefore, defeats
the purpose of confidentiality. An example of this could be a confidential email
message sent by A and B. This type of attack is called interception.
1.4.2 Authentication:
Authentication mechanisms help establish proof of identities. The authentication process ensures that the origin of an electronic message or document
is correctly identified. For instance, suppose that user C sends an electronic
document over the Internet to user B. However, the trouble is that user C
is posing as user A when she sent this document to user B. However, would
user B know that the message has come from user C, who is posing as user
A? A real-life example of this would be the case of a user C, posing as user A,
sending a funds transfer request (from A’s account to C’s account) to bank B. 
The bank will happily transfer the funds from A’s account to C’s account, and
it would think that user A has requested the funds transfer. This concept is
shown in Figure 1.3. This type of attack is called fabrication.
1.4.3 Integrity:
When the contents of a message are changed after the sender sends it, but
before it reaches the intended recipient, we say that the integrity of the
message is lost. For example, suppose you write a cheque for $100 to pay
for some goods. However, when you see your next account statement, you
are startled to see that the cheque resulted in a payment of $1,000. This is
type of case is about the loss of the message’s integrity. Conceptually, this is
shown in Figure 1.4. User C tampers with a message originally sent by user A,
which was actually destined for user B. User C somehow manages to access
it, change its contents, and send the changed message to user B. User B has
no way of knowing that the contents of the message were changed after user
A sent it. User A also does not know about this change. This type of attack is
called modification.
1.4.4 Non-Repudiation:
There are situations where a user sends a message, and then says that she
never sent that message. For instance, user A could send a funds transfer
request to bank B over the Internet. After the bank performs the funds transfer as per A’s instructions, A could claim that she never sent the funds transfer instruction to the bank. Thus, A repudiates, or denies, her funds transfer 
instruction. The principle of non-repudiation defeats the possibility of denying something after having done it.
1.4.5 Access Control:
The principle of access control determines who should be able to access what.
For instance, we should be able to specify that user A can view the records
in a database, but cannot update them. However, user B might be allowed to
make updates, as well. An access control is broadly related to two areas: role
management and rule management. Role management concentrates on the
user side (which user can do what), whereas rule management focuses on the
decisions taken, and so an access control matrix is prepared. A list of items is
generated, including what they can access (e.g., it can say that user A can write
to file X, but can only update files Y and Z). An Access Control List (ACL) is a
subset of an access control matrix.
1.4.6 Availability:
The principle of availability states that resources should be available to
authorized parties at all times. For example, due to the intentional actions
of another unauthorized user C, the authorized user A may not be able to 
contact a server computer B, as shown in Figure 1.5. This would defeat the
principle of availability. Such an attack is called interruption.
Having discussed the various principles of security, let us now discuss the
different types of attacks that are possible from a technical perspective.
`,
        },
         {
          id: "u6-types-of-attacks",
          title: "TYPES OF ATTACKS",
          tags: ["TYPES OF ATTACKS"],
          content: `We can classify the types of attacks on computers and network systems into
two categories for a better understanding: (a) the theoretical concepts behind
these attacks and (b) practical approaches used by the attackers.
1.5.1 Theoretical Concepts
The principle of security faces threats from various attacks. These attacks are
generally classified into four categories. They are
● Interception: Discussed in the context of confidentiality earlier.
● Fabrication: Discussed in the context of authentication earlier.
● Modification: Discussed in the context of integrity earlier.
● Interruption: Discussed in the context of availability earlier.
These attacks are further grouped into two types: passive attacks and
active attacks
1.5.1.1 Passive Attacks:
Passive attacks are those wherein the attacker indulges in eavesdropping or the
monitoring of data transmissions. The attacker attempts to obtain information
that is in transit. The term passive indicates that the attacker does not attempt
to perform any modifications to the data. In fact, this is also why passive attacks
are harder to detect, thus, the general approach to deal with passive attacks is
to think about prevention, rather than detection or corrective actions.
Figure 1.7 shows a further classification of passive attacks into two subcategories. These categories are the release of the message contents and
traffic analysis.
The release of message contents is quite simple to understand. When we
send a confidential email message to our friend, we only want her to access
it. Otherwise, the contents of the message are released against our wishes
to someone else. Using certain security mechanisms, we can prevent the
release of the message contents. For example, we can encode messages using
a code language, so that only the desired parties understand the contents of a
message because only they know the code language. However, if many such
messages are passing through, a passive attacker could try to figure out the 
similarities between them to come up with a pattern that provides her some
clues regarding the communication that is taking place. Such attempts at analyzing (encoded) messages to come up with likely patterns are the work of
traffic analysis attacks.
1.5.1.2 Active Attacks:
Unlike passive attacks, active attacks are based on the modification of the
original messages in some manner or on the creation of a false message. These
attacks cannot be prevented easily. However, they can be detected with some
effort, and attempts can be made to recover from them. These attacks can be
in the form of interruption, modification, and fabrication.
● Interruption attacks are called masquerade attacks.
● Modification attacks can be classified further into the replay attacks and
alteration of messages.
● Fabrication causes Denial of Service (DoS) attacks.
A masquerade is caused when an unauthorized entity pretends to be
another entity. User C might pose as user A and send a message to user B.
User B might be led to believe that the message indeed came from user A.
In a replay attack, a user captures a sequence of events, or some data
units, and resends them. For instance, suppose user A wants to transfer some
amount to user C’s bank account. Both users A and C have accounts with
bank B. User A might send an electronic message to bank B, requesting the 
funds transfer. User C could capture this message and send a second copy
of the same to bank B. Bank B would have no idea that it is an unauthorized
message and would treat this as a second, and different, funds transfer request
from user A. Therefore, user C would get the benefit of the funds transfer
twice: once actually authorized and once through a replay attack.
The alteration of messages involves some change to the original message. For instance, suppose user A sends an electronic message to transfer
$10,000 to C’s account. The beneficiary captures this and changes it to transfer $100,000 to B’s account. Note that both the beneficiary and the amount
have been changed: only one of these could have caused the alteration of the
message.
Denial-of-Service (DoS) attacks make an attempt to prevent legitimate
users from accessing some services that they are eligible for. For instance, an
unauthorized user might send too many emails so as to flood the network and
deny other legitimate users access to the network.
`,
        },
         {
          id: "u6-practical-side-of-attacks",
          title: "The Practical Side of Attacks",
          tags: ["The Practical Side of Attacks"],
          content: `The attacks discussed earlier can come in a number of forms in real life.
They can be classified into two broad categories: application-level attacks and
network-level attacks
● Application level attacks: These attacks happen at an application level in
the sense that the attacker attempts to access, modify, or prevent access to
information of a particular application or the application itself. Examples
of this are trying to obtain someone’s credit information on the Internet or
changing the contents of message to change the amount in a transaction.
● Network level attacks: These attacks are generally aimed at reducing the
capabilities of network. These attacks make an attempt to either slow 
down, or completely bring to halt, a computer network. Note that this
automatically can lead to application level attacks, because once someone
is able to gain access to a network, she is able to access/modify at least
some sensitive information, causing havoc.
These two types of attacks can be attempted by using varies mechanisms.
These attacks are not encompassed in the above two categories, since they can
span across application as well as network levels.
1.5.2.1 Virus:
One can launch an application-level attack or a network level attack using
a virus. A virus is a piece of program code that attaches itself to legitimate
program code and runs when the legitimate program runs.
It can then infect other programs in that computer or programs that are
on other computers but on the same network. This is shown in Figure 1.10.
After deleting all the files from the current user’s computer, the virus selfpropagates by sending its code to all users whose e-mail addresses are stored
in the current user’s address book.
Viruses can also be triggered by specific events (e.g., a virus could automatically execute at 12 p.m. every day). Viruses cause damage to computers
and network systems, but this damage can be repaired, assuming that the
organization deploys good backup and recovery producers.
1.5.2.2 Worms:
Similar in concept to a virus, a worm is actually different in implementation.
A virus modifies a program (i.e., it attaches itself to the program under attack).
This is shown in Figure 1.11. The replication grows so much that ultimately
the computer or the network, on which the worm resides, become very slow,
finally coming to a halt. Thus, the basic purpose of a worm attack is different
from that of a virus. A worm attempts to make the computer or the network
under attack unusable by consuming all its resources.
A worm does not perform any destructive actions, but instead only consumes system resources to bring it down.
1.5.2.3 Trojan Horse
A Trojan horse is a hidden piece of code, like a virus. However, the purpose
of a Trojan horse is different. The main purpose of a virus is to make modifications to the target computer or network, whereas a Trojan horse attempts
to reveal confidential information to an attacker. The name (Trojan horse)
is taken from the secret attack executed by Greek soldiers, who hid inside a
large hollow horse that was pulled into the city of Troy by its citizens, unaware
of its contents. Once the Greek soldiers entered the city of Troy, they opened
the gates for the rest of their army. 
In a similar fashion, a Trojan horse could silently sit in the code for a
login screen by attaching itself to it. When the user enters the user ID and
password, the Trojan horse captures these details and sends this information
to the attacker without the knowledge of the user who entered the ID and
password. The attacker can then use the user ID and password to gain access
to the system.
`,
        },
         {
          id: "u6-specific-attacks",
          title: "Specific Attacks",
          tags: ["Specific Attacks"],
          content: `On the Internet, computers exchange messages with each other in the form of
small groups of data, called packets. A packet is like an envelope that contains
the actual data to be sent and the address information. Attackers target these
packets as they travel from the source computer to the destination computer
over the Internet. These attacks take two main forms: (a) packet sniffing (also
called snooping) and (b) packet spoofing. The protocol used in this communication is called the Internet Protocol (IP). Other names for these two attacks
are (a) IP sniffing and (b) IP spoofing.
Understanding the Two Attacks
a. Packet sniffing: Packet sniffing is a passive attack on a conversation. An
attacker need not hijack a conversation, but instead, can simply observe
(i.e., sniff) the packets as they pass by. To prevent an attacker from sniffing packets, the information that is passed needs to be protected in some
ways. This can be done at two levels: (i) The data that is traveling can be
encoded in some way or (ii) the transmission link itself can be encoded.
To read a packet, the attacker needs to access it in the first place. The simplest way to do this is to control a computer that the traffic goes through.
Usually, this is a router. However, routers are highly protected resources.
Therefore, an attacker might not be able to attack it and instead attack a
less-protected computer on the same path.
b. Packet spooling: In this technique, an attacker sends packets with an incorrect source address. When this happens, the receiver (i.e., the party who
receives these packets containing a false source address) would inadvertently send replies back to this forged address (called the spoofed address),
and not to the attacker. This can lead to three possible scenarios:
(i.) The attacker can intercept the reply: If the attacker is between the
destination and the forged source, the attacker can see the reply
and use that information for the hijacking.
(ii.)   The attacker need not see the reply: If the attacker’s intention was
a Denial Of Service (DOS) attack, the attacker need not bother
about the reply.
(iii.) The attacker does not want the reply: The attacker could simply be
angry with the host, so it may put that host’s address as the forged
source address and send the packet to the destination. The attacker
does not want a reply from the destination, as it wants the host with
the forged address to receive it and get confused.
Another attack, which is similar to these attacks, is the DNS spoofing
attack. People usually can’t identify Websites using the Domain Name System
(DNS) because they are not really memorable (for example, 120.10.1.67). For
this, a special server computer called as a DNS server maintains the mappings
between domain names and the corresponding IP address. The DNS server
could be located anywhere. Usually, it is with the Internet Service Provider
(ISP) of the users. With this background, the DNS spoofing attack works as
follows.
1. Suppose that there is a merchant (Bob), whose site’s domain name is
www.bob.com, and the IP address is 100.10.20. Therefore, the DNS
entry for Bob in all the DNS is www.bob.com.
2. The attacker (Trudy) manages to hack and replace the IP address of Bob
with her own (say 100.20.20.20) in the DNS server maintained by the ISP
of another user, Alice. Therefore, the DNS server maintained by the ISP
of Alice now has the following entry: www.bob.com, 100.20.20.20.
3. When Alice wants to communicate with Bob’s site, her web browser
queries the DNS server maintained by her ISP for Bob’s IP address,
providing it with the domain name (i.e., www.bob.com). Alice gets the
replaced (i.e., Trudy’s) IP address, which is 100.20.20.20.
4. Alice then starts communicating with Trudy, believing that she is communicating with Bob.
Such attacks of DNS spoofing are quite common and cause havoc. Even
worse, the attacker (Trudy) does not have to listen to the conversation on the
wire. She has to simply be able to hack the DNS server of the ISP and replace
a single IP address with her own.
A protocol called the DNSSec (secure DNS) is being used to thwart such
attacks. Unfortunately, it is not widely used.
`,
        },
         {
          id: "u6-internet-firewalls",
          title: "Internet Firewalls",
          tags: ["Internet Firewalls"],
          content: `A firewall is a system or group that enforces an access control policy between
two or more networks. The firewall can be thought of as a pair of mechanisms
that exist to block traffic. A firewall’s purpose is to keep unauthorized users
out of a network while still allowing people to get their jobs done. It is scarcely
possible to go anywhere, read a magazine or a newspaper, or listen to a news
broadcast without seeing or hearing about the Internet. It is so popular that
no advertisement is complete without a reference to a Webpage. While nontechnical publications are obsessed with the Internet, technical publications
are obsessed with security. It’s a logical progression: Once the first excitement
of having a superhighway in your neighborhood wears off, people notice that
not only does it allow for rapid travel, but it also lets in a very large number
of strangers to the neighborhood. (Not all of them are people you would have
invited.)
The Internet is a marvelous technological advance that provides access to
information and the ability to publish information in revolutionary ways. This
book is about one way to balance the advantages and the risks to take part in
the Internet while still protecting yourself.
Later in this chapter, we describe different models of security that people
have used to protect their data and resources on the Internet. Our emphasis
in this book is on the network security model and in particular, the use of
Internet firewalls. A firewall is a form of protection that allows a network to
connect to the Internet while maintaining a degree of security. The section
later in this chapter called “What is an Internet firewall”? describes the basics
of firewalls and summarizes what they can and cannot do to help make a site
secure. There are some important questions addressed here: What are you
protecting on your systems? What types of attacks and attackers are common?
What types of security can you use to security can you use to protect your site?
`,
        },
         {
          id: "u6-protective-devices",
          title: "Protective Devices",
          tags: ["Protective Devices"],
          content: `A firewall is basically a protective device. If you are building a firewall, the
first thing you need to worry about is what you’re trying to protect. When you
connect to the Internet, you’re putting three things at risk:
● Your data: The information you keep on the computers
● Your resources: the computers themselves
● Your reputation
4.2.1 Your Data
Your data has three separate characteristics that need to protected.
Secrecy
You might not want other people to know it.
Integrity
You probably don’t want other people to change it.
Availability
You almost certainly want to be able to use it yourself.
People tend to focus on the risks associated with secrecy, and it’s true
that those are usually large risks. Many organizations have some of their most
important secrets—the designs for their products, financial records, or student records—on their computers. However, you may find that for your site,
it is relatively easy to separate the machines containing highly secret data from
the machines that connect to the Internet. (Or you may not. You cannot carry
out e-commerce without having information about orders and money pass
through Internet-accessible machines.)
Suppose that you can separate your data in this way, and that none of
the information that is Internet accessible is secret. In that case, why should
you worry about security? Because secrecy isn’t the only thing that must be
protected. There are also important concerns about integrity and availability.
(After all, if your data isn’t secret, and if you don’t mind it being changed,
and if you don’t care whether anybody can get to it, why are you wasting disk
space on it?)
Even if your data isn’t particularly secret, you’ll suffer the consequences
if it’s destroyed or modified. Some of these consequences have readily calculable costs: once data is lost, it is costly to have it reconstructed. If you
were planning to sell that data in some form, you’ll have lost sales regardless
of whether the data is something you sell directly, the designs from which
you build things, or the code for a software product. Intangible costs are also
associated with security incidents. The most serious is the loss of confidence
(user confidence, customer confidence, investor confidence, staff confidence,
student confidence, and public confidence) in your systems and data. Consequently, this results in a loss of confidence in your organization.
Computer security incidents are different from many other types of
crimes because detection is unusually difficult. It may take a long
time to find out that someone has broken into your site—sometimes
you’ll never know. Even if somebody breaks in but doesn’t actually do
anything to your system or data, you’ll probably lose time (hours or
days) while you verify that the intruder did not do anything. In a lot of
ways, a brute-force “trash-everything” attack is easier to manage than
an attack that doesn’t appear to damage your system. If the intruder
destroys everything, you restore from backups and start over. But if
the intruder doesn’t appear to have done anything, you spend a lot of
time second-guessing yourself, wondering what he or she might have
done to the system or data. The intruder almost certainly has done
something—most intruders start attacks by making sure that they have
a way to get back in before they do anything else.
Although this book is primarily about preventing security incidents,
it also includes responding to security incidents, and supplies some
general guidelines for detecting, investigating, and recovering from
security incidents.
4.2.2 Resources
Even if you have data you don’t care about (or, perhaps you enjoy reinstalling your operating system every week), if other people are going to use your
computers, you probably would like to benefit from this use in some way.
Most people want to use their own computers or they want to charge other
people for using them. Even people who give away computer time and disk
space usually expect to get good publicity and good will; they aren’t going to
get it from intruders. Since you spend time and money on your computing
resources, it is your right to determine how they are used.
Intruders often argue that they are using only excess resources; as a consequence, their intrusions don’t cost their victims anything. There are two
problems with this argument.
First, it’s impossible for an intruder to determine successfully what
resources are excess and use only those. It may look as if a system has a significant amount of empty disk space and hours of unused computing time.
In fact, though, the user might be just about to start computing animation
sequences that are going to use every bit and every microsecond. An intruder
cannot restore resources when the user wants them, either. (Here is another
way to think about this: I don’t ordinarily use my car between midnight and
6 a.m. However, that doesn’t mean I am willing to lend it to you without being
asked. What if I have an early morning flight the next day, or what if I’m called
out to deal with an emergency?)
Second, it is the computer user’s right to use their resources the way they
want to. That may mean that a significant amount of disk space remains empty
and unused.
4.2.3 Reputation
When an intruder appears on the Internet with a stolen identity, anything he
or she does is attributed to their victim. What are the consequences of this
type of action?
Most of the time, the consequences involve other sites or law enforcement agencies trying find out why the intruder is breaking into these systems.
This is not as rare an occurrence as it may seem. One site got serious about
security when its system administration staff added a line item to the company’s time cards after a conversation with the FBI about break-in attempts
originating from the company’s site.
Sometimes, such imposters cost more than lost time. An intruder who
actively dislikes someone or takes pleasure in making life difficult for others 
may change a Website, send electronic mail, or post new messages that purposely claim to come from a company or individual. Generally, the people
who choose to do this are doing it for spite, rather than believability. However, even if only a few people believe these messages, the recovery process
can be long and humiliating. Anything even remotely believable can do permanent damage to a reputation.
For example, an impostor posing as a Texas A&M professor sent out hate
email containing racist comments to thousands of recipients. The impostor
was never found, but the professor is still dealing with the repercussions of the
forged message. In another case, a student at Dartmouth sent out an email
using the signature of a professor late one night during exams. The email
claimed the professor had a family emergency: The forged email canceled the
next day’s exam, and only a few students showed up
It’s possible to forge electronic mail or news without gaining access to a
Website, but it’s much easier to show that a message is a forgery if it’s generated from outside the forged site. The message coming from an intruder
who has gained access to your site will look exactly like yours because they
are pretending to be you. An intruder will also have access to details that an
external forger won’t. For example, an intruder who has all of your mailing
lists available and knows exactly who you send mail to has inside information.
Currently, attacks that replace Websites are very popular; one list shows
more than 160 successful attacks simply replaced the sites via boosting by the
attackers, but a significant portion of the attacks were directed at the content
of the sites. A site that should have touted Al Gore’s suitability for the U.S.
presidency was replaced by a similar anti-Gore site. Political movements in
Peru, Mexico, and China have been involved in cyberattacks, and many entertainment sites, including those for pop stars, pro Wrestling, and the Boston
Lyric Opera, all suffered as well.
Even if an intruder does not steal an identity, a break-in at a site isn’t good
for a company’s reputation. It shakes people’s confidence in an organization.
In addition, most intruders will attempt to go from one company’s machines
to other companies’ machines, which is going to make their next victims think
of the first site as a platform for computer criminals. Many intruders will also
use a compromised site as distribution site for pirated software, pornography,
and/or other stolen information. It is difficult to recover when a business or
person’s name is linked to software piracy or pornography.
What’s out there to worry about? What types of attacks are you likely to
face on the Internet, and what types of attackers are likely to be carrying them
out? In the sections that follow, we touch on these topics, but don’t go into any
technical detail. Later chapters describe the kinds of attacks in some detail
and explain how firewalls can help protect against them.
`,
        },
         {
          id: "u6-types-of-attacks",
          title: "Types of Attacks",
          tags: ["Types of Attacks"],
          content: `There are many types of attacks on systems, and various ways of categorizing
these attacks. In this section, we break attacks down into three basic categories: intrusion, denial of service, and information theft.
4.3.1 Intrusion
The most common attacks on computer systems are intrusions. With intrusions, hackers are able to use someone else’s computers. Most attackers want
to use these computers as if they were legitimate users. Attackers have dozens
of ways to obtain access. They range from social engineering attacks (where
a hacker discovers the name of a high-level individual in the company, calls a
system administrator claiming to be that person, and then saying their password needs to be changed right now so that they can get important work
done) to simple guesswork (the attacker tries account names and password
combinations until one works) to intricate ways to get in a system without
knowing an account name and a password.
Firewalls help prevent intrusions in a number of ways. Ideally, they block
all ways to get into a system without needing an account name and password.
Properly configured, they reduce the number of accounts accessible from the
outside that are vulnerable to guesswork or social engineering. Most people
configure their firewalls to use one-time passwords that prevent guessing
attacks. Even if you do not use these passwords and authentication and auditing services, a firewall will give you a controlled place to log attempts to get
into your system, and, in this way, they help detect guessing attacks.
4.3.2 Denial of Service
A denial of service attack is aimed entirely at preventing users from using
their own computers.
In late 1994, writer Josh Quittner and Michelle Slatalla were the target
of an “electronic mail bomb.” Apparently in retaliation for an article on the
cracker community they’d published in Wired magazine, someone broke into
IBM, Sprint, and the writers’ network provider, and modified programs so
their email and telephone service was disrupted. A flood of emails couldn’t get
through; eventually, their Internet connection was shut down entirely. Their
phone service also fell victim to the intruders, who reprogrammed the service
so that the callers were routed to an out-of-state number where they heard an
obscene recording.
Although some cases of electronic sabotage involve the actual destruction
or shutting down of equipment or data, more often they follow the pattern
of flooding seen in the Quittner-Slatalla case or in the case of 1988 Morris
Internet worm. An intruder so floods a system or network—with messages,
processes, or network requests—that no real work can be done. The system
or network spends all its time responding to messages and requests and can’t
satisfy any of them.
While flooding is the simplest and most common way to carry out a denial
of service attack, a clever attacker can also disable services, re-route them, or
replace them. For example, the phone attack in Quittner-Slatalla case denied
phone service by re-routing the phone calls elsewhere. It is possible to mount
the same kind of attack against an Internet service.
It is almost impossible to avoid all denial of service attacks. For example,
many times, administrators set accounts to become unusable after a certain
number of failed login attempts. This prevents attackers from simply trying
passwords until they find the right one. Unfortunately, this approach provides
attackers with an easy way to mount a denial of service attack: they can lock
any user’s account simply by trying to log in a few times.
Most often, denial of service attacks are un-avoidable. If you accept things
from the outside world, be it electronic mail, telephone calls or packages, it is
possible to get flooded. The notorious college prank of ordering a pizza or two
from every pizzeria in town to be delivered to your least favorite person is a
form of denial of service: it’s hard to do much else while arguing with 42 pizza
deliverers. In the electronic world, denial-of-service is as likely to happen by
accident as on purpose (such as a persistent fax machine faxing something to 
a voice line). The most important thing is to set up services so that if one of
them is flooded, the rest of them can still function while the problem is found
and corrected.
Flooding attacks are considered “unsporting” by many attackers because
they are not difficult to carry out. For most attackers, they are also pointless,
because they do not provide the attackers with the information or the ability
to use your computers (the payoff for most other attacks). Intentional flooding
attacks are usually the work of people who are angry at a particular person or
company, and such people are quite rare.
With the right tools and co-operation, its fairly easy to trace flood packets
back to their source, but that might not help determine who is behind the
attacks. The attacks almost always come from machines that have themselves
been broken into. Only a really low-level attacker generates an easily traced
flood of packets from their own machine. Sometimes flooding attacks are
carried out by remote control. Attackers install remotely controlled flooding
software on systems that they break into over the course of many weeks or
months. This software lies dormant and undiscovered until some later time,
when they trigger many of these remotely-controlled installations to simultaneously bombard their victims with massive floods of traffic from many different directions at once. This was the method behind the highly publicized
denial of service attacks on Yahoo!, CNN, and other high profile Internet sites
early in the year 2000.
Unintentional flooding problems are more common than intentional ones,
as we discuss in the “Stupidity and Accidents Section” later in this chapter.
Some denial of service attacks are easy for attackers to carry out, and
these are relatively popular. Attacks that involve sending a small amount of
data that cause machines to reboot or hang are very popular with the same
sort of people who like to set off fire alarms in dormitories in the middle of
the night, for much the same reason; with a small investment, an attacker
can annoy a very large number of people who are unlikely to be able to find
him afterwards. The good news is that most of these attacks are avoidable. A
well-designed firewall will usually not be susceptible to them and will prevent
them from reaching internal machines that are vulnerable.
`,
        },
         {
          id: "u6-html-files",
          title: "HTML files",
          tags: ["HTML files"],
          content: `
          How does the internet work?
MDN Web Docs. (n.d.). How does the Internet work? https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work

ISP
MDN Web Docs. (n.d.). ISP. https://developer.mozilla.org/en-US/docs/Glossary/ISP

World wide web
MDN Web Docs. (n.d.). World Wide Web. https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web

DNS
Cloudflare. (n.d.). What is DNS? | How DNS works. https://www.cloudflare.com/learning/dns/what-is-dns/

MDN Web Docs. (n.d.). DNS. https://developer.mozilla.org/en-US/docs/Glossary/DNS

MDN Web Docs. (n.d.). What is a domain name? https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name

IP address
Cloudflare. (n.d.). What is my IP address? | IP address definition. https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/

MDN Web Docs. (n.d.). How the Web works. https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works

MDN Web Docs. (n.d.). IP address. https://developer.mozilla.org/en-US/docs/Glossary/IP_Address

Web browser
MDN Web Docs. (n.d.). Browser. https://developer.mozilla.org/en-US/docs/Glossary/Browser

MDN Web Docs. (n.d.). How browsers work. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work

MDN Web Docs. (n.d.). IBrowsing the Web. https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web

Search engine
MDN Web Docs. (n.d.). Search engine. https://developer.mozilla.org/en-US/docs/Glossary/Search_engine
`,
        },
      ]}
      ],
  videos: [
      {
      id: "u6-v-deadlock1",
      title: "Classification of computer networks",
      description: "Classification of computer networks",
      url: "https://www.youtube.com/watch?v=9BIN99rHOCQ",
      tags: ["Classification of computer networks"],
      channel: "Neso Academy",
    },
     {
      id: "u6-v-deadlock2",
      title: "What is network topology? | Types of network topology | BUS, RING, STAR, TREE, MESH | Simplilearn",
      description: "What is network topology? | Types of network topology | BUS, RING, STAR, TREE, MESH | Simplilearn",
      url: "https://www.youtube.com/watch?v=QGykYWbdf0A",
      tags: ["What is network topology? | Types of network topology | BUS, RING, STAR, TREE, MESH | Simplilearn"],
      channel: "Simplilearn",
    },
     {
      id: "u6-v-deadlock3",
      title: "Simplex, Half-Duplex and Full-Duplex Communication | Transmission modes in communication system",
      description: "Simplex, Half-Duplex and Full-Duplex Communication | Transmission modes in communication system",
      url: "https://www.youtube.com/watch?v=RzAXEQ4XsSI",
      tags: ["Simplex, Half-Duplex and Full-Duplex Communication | Transmission modes in communication system"],
      channel: "ALL ABOUT ELECTRONICS",
    },
     {
      id: "u6-v-deadlock4",
      title: "ALL network topologies explained in 5 mins!",
      description: "ALL network topologies explained in 5 mins!",
      url: "https://www.youtube.com/watch?v=lEmBNqoBpZU",
      tags: ["ALL network topologies explained in 5 mins!"],
      channel: "Network Direction",
    },
     {
      id: "u6-v-deadlock5",
      title: "Understanding network topology",
      description: "Understanding network topology",
      url: "https://www.youtube.com/watch?v=Q4M0sg_cWXw",
      tags: ["Understanding network topology"],
      channel: "WhatIsMyIP",
    },
    {
      id: "u6-v-deadlock6",
      title: "How the Internet works in 5 minutes",
      description: "How the Internet works in 5 minutes",
      url: "https://www.youtube.com/watch?v=7_LPdttKXPc",
      tags: ["How the Internet works in 5 minutes"],
      channel: "Davis",
    },
      {
      id: "u6-v-deadlock7",
      title: "What is Internet Service Provider | How Internet Service Provider Works | Intellipaat",
      description: "What is Internet Service Provider | How Internet Service Provider Works | Intellipaat",
      url: "https://www.youtube.com/watch?v=IrE6RlcXVdk",
      tags: ["What is Internet Service Provider | How Internet Service Provider Works | Intellipaat"],
      channel: "Intellipaat",
    },
     {
      id: "u6-v-deadlock8",
      title: "IP addresses and DNS | Internet 101 | Computer Science | Khan Academy",
      description: "IP addresses and DNS | Internet 101 | Computer Science | Khan Academy",
      url: "https://www.youtube.com/watch?v=MwxMsaFFycg",
      tags: ["IP addresses and DNS | Internet 101 | Computer Science | Khan Academy"],
      channel: "Khan Academy",
    },
     {
      id: "u6-v-deadlock9",
      title: "What are the CIA triad, AAA, and non-repudiation in cybersecurity",
      description: "What are the CIA triad, AAA, and non-repudiation in cybersecurity",
      url: "https://www.youtube.com/watch?v=_cFxNYDp5qU",
      tags: ["What are the CIA triad, AAA, and non-repudiation in cybersecurity"],
      channel: "Simplilearn",
    },
     {
      id: "u6-v-deadlock10",
      title: "Understanding viruses, trojans, worms & malware for beginners",
      description: "Understanding viruses, trojans, worms & malware for beginners",
      url: "https://www.youtube.com/watch?v=M7aKq9T_Ciw",
      tags: [" Understanding viruses, trojans, worms & malware for beginners"],
      channel: "Simplilearn",
    },
     {
      id: "u6-v-deadlock11",
      title: "How Hackers Attack (Ransomware, Spyware & More!)",
      description: "How Hackers Attack (Ransomware, Spyware & More!)",
      url: "https://www.youtube.com/watch?v=oZ3WAREM2xo",
      tags: ["How Hackers Attack (Ransomware, Spyware & More!)"],
      channel: "Cybersecurity Explained",
    },
      {
      id: "u6-v-deadlock12",
      title: "What is firewall? | Firewall explained | Firewalls and network security",
      description: "What is firewall? | Firewall explained | Firewalls and network security",
      url: "https://www.youtube.com/watch?v=9GZlVOafYTg",
      tags: ["What is firewall? | Firewall explained | Firewalls and network security"],
      channel: "Simplilearn",
    },
  ],
  pdfs: [
      {
      id: "u6-pdf-slides1",
      title: "Unit 6 — Computer_Systems_Application_----_(6.13._Networ",
      description:
        "Computer systems application",
      file: "/unit-6/Computer_Systems_Application_----_(6.13._Networ.pdf",
    },
     {
      id: "u6-pdf-slides2",
      title: "Unit 6 — Computer_Systems_Application_----_(6.14._History_Of_Network)",
      description:
        "Computer_Systems_Application_----_(6.14._History_Of_Network)",
      file: "/unit-6/Computer_Systems_Application_----_(6.14._History_Of_Network).pdf",
    },
     {
      id: "u6-pdf-slides3",
      title: "Unit 6 — Computer_Systems_Application_----_(6.15._Distributed_Processing)",
      description:
        "Computer_Systems_Application_----_(6.15._Distributed_Processing)",
      file: "/unit-6/Computer_Systems_Application_----_(6.15._Distributed_Processing).pdf",
    },
     {
      id: "u6-pdf-slides4",
      title: "Unit 6 — Computer_Systems_Application_----_(6.16._Network",
      description:
        "Computer_Systems_Application_----_(6.16._Network",
      file: "/unit-6/Computer_Systems_Application_----_(6.16._Network.pdf",
    },
     {
      id: "u6-pdf-slides5",
      title: "Unit 6 — Computer_Systems_Application_----_(6.17._Physica",
      description:
        "Computer_Systems_Application_----_(6.17._Physica",
      file: "/unit-6/Computer_Systems_Application_----_(6.17._Physica.pdf",
    },
     {
      id: "u6-pdf-slides6",
      title: "Unit 6 — Computer_Systems_Application_----_(6.19._Categor",
      description:
        "Computer_Systems_Application_----_(6.19._Categor",
      file: "/unit-6/Computer_Systems_Application_----_(6.19._Categor.pdf",
    },
     {
      id: "u6-pdf-slides7",
      title: "Unit 6 — Computer_Security_and_Encryption_An_Introduction",
      description:
        "Computer_Security_and_Encryption_An_Introduction",
      file: "/unit-6/Computer_Security_and_Encryption_An_Introduction.pdf",
    },
     {
      id: "u6-pdf-slides8",
      title: "Unit 6 — Computer_Security_and_Encryption_An_Introduction_----_(Computer_Security_and_En",
      description:
        "Computer_Security_and_Encryption_An_Introduction_----_(Computer_Security_and_En",
      file: "/unit-6/Computer_Security_and_Encryption_An_Introduction_----_(Computer_Security_and_En.pdf",
    },
  ],
};

export default unit6;
