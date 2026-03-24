/** Unit 8 — add books, videos, and PDFs here. Files: public/unit-8/ */

const unit8 = {
  id: "unit-8",
  number: 8,
  title: "Unit 8 — Overview of Emerging Trends",
  description: `Machine learning: Overview of Supervised, Unsupervised, and Reinforcement learning  
Cloud Computing, Big Data and Blockchain Technology 
IoT and Robotics: Sensors and Actuators  
Virtual Reality Applications`,

  books: [ 
      {
      id: "u8-artificial-intelligence",
      title: "How Artificial Intelligence and Machine Learning Work",
      subject: "Computer Science",
      topics: [        
        {
          id: "u8-teach-machines",
          title: "How we teach Machines to ‘Learn",
          tags: ["How we teach Machines to ‘Learn"],
          content: `The last type of machine intelligence we’ll describe is ML, the ability for a machine to improve what it does over time based on past
results.
ML is achieved using the AI equivalent of how children used to be taught at school: ‘Practice makes perfect’. It involves a computer
repeating a piece of intelligent activity many times, adjusting the activity each time until the results improve. Different types of ML
use different types of adjustment and evaluation. At a high level, all types of ML follow a common approach, which we’ll now look
at. As we’ve done previously, our starting point is looking at the human equivalent of the artificial version.
`,
        },
         {
          id: "u8-humans-learn",
          title: "How Humans Learn to Improve How They Do Something",
          tags: ["How Humans Learn to Improve How They Do Something"],
          content: `Rather than exploring education theory or neuroscience, we’ll stay with common sense and everyday experience. Usually, when we
perform a task for the first time, whether learning multiplication or cooking, we know if we’ve got the right result. The teacher
corrects or praises us, the meal tastes good or bad. So, a crucial part of learning is feedback on how well we’re doing.
ML needs an equivalent feedback mechanism, some way for a computer to know which of its attempts to perform its designed
activity are correct. It also needs to know how close wrong efforts have been. For example, NLP speech recognition will only get
better through ML if the smart speaker has a way of knowing which words it understood correctly, and how close the wrong ones
were.
Now let’s look at what a human does with that feedback. The main task is deciding what to change to improve the result. This is
the crux of ML and explains its dependency on data: Machines learn by analysing huge quantities of data about their own
performance.
In most situations involving human learning, we use feedback on incorrect results to figure out what to do differently. If it’s a
multiplication error, we try harder to remember the table we got wrong. If it’s a meal that tastes bad, we try to understand what
was bad and how bad, such as if it was overcooked or under-salted. We assess a variety of factors to isolate the specific
improvement needed, then try again with a change that should address it. Assessing the right factors, and even knowing what
factors to consider, depends on our understanding of how the activity works, and our experience of improving it. Hence, teachers
and coaches can help us learn faster.
`,
        },
         {
          id: "u8-machines-learn",
          title: "How Machines Learn to Improve How They Do Something",
          tags: ["How Machines Learn to Improve How They Do Something"],
          content: `
          For a machine to learn, it needs an equivalent strategy to get feedback, assess correctness and evaluate options for improvement.
Once it has feedback on how well an attempt at something worked, it starts learning by repeating each step of the activity in as
many different ways as possible. It evaluates the likely results of every possible next step it could take differently, churning
through all possible next steps until it finds one that would give the best answer.
For example, a ML approach to recognizing a letter on a page might be to compare it with every letter in the alphabet, and set a
score each time for how closely it matches. The score would be a mathematical calculation by the AI, which compares the maths
representation of the target image with a similar representation of each letter in the alphabet.
Unlike humans, a computer doesn’t initially ‘know’ which available steps are likely to succeed, so it has to try all of them. It rejects
those that give a worse result and keeps track of ones that give a better result. This is why data matters so much in ML. If AI is
seeking the best way to change how it does each step of an activity to improve it, it needs data for each different attempt of each
step. Once it finds something that seems to be an improvement, it needs to repeat that enough times to be sure it’s really an
improvement, not just a fluke or coincidence
`,
        },
          {
          id: "u8-random-trial-error",
          title: "Random Trial and Error as a Learning Strategy",
          tags: ["Random Trial and Error as a Learning Strategy"],
          content: `A slightly desperate approach for a human to learn might be random trial and error. This isn’t usually how people try to improve
something they’re not doing very well. But if it’s something we don’t really understand, we might resort to trying out random
changes.
This rarely works other than by luck for humans and is usually a frustrating exercise. However, computers don’t feel frustration,
and can perform many tasks unimaginably quick, so random trial and error can be viable. The OCR example would theoretically
be a good candidate for this, because the learning is simply comparing images of every letter on the page with 26 initial reference
images of letters of the alphabet. With each correct guess, the computer will have another example of what each letter looks like,
say in different fonts and styles. This will increase the number of reference images to compare with, and so increase the AI
equivalent of confidence in future matches. In other words, it will learn to recognize letters better.
`,
        },
          {
          id: "u8-learning-strategies",
          title: "Better Learning Strategies than Random Trial and Error",
          tags: ["Better Learning Strategies than Random Trial and Error"],
          content: `Trial and error works as a learning strategy if we know whether each attempt is better or worse than earlier ones and can then
            select the one which was best of all. It’s very inefficient, because we won’t know the best choice available until we’ve evaluated all
            of them.
            To speed up learning, there are mathematical techniques to reduce the number of guesses required to find improvement. These
            lead to the three common ways to design ML systems, each with its own name: supervised, unsupervised and reinforcement. Each
            works well for particular types of problem and data. There’s also a fourth version called transfer learning, which is a variation of
            these.
            Supervised Learning
            Supervised learning53 is the ML equivalent of having a teacher marking each of your answers as you work, so you can continuously
            adjust your remaining work to improve your marks.
            If a human student had this, they’d check each answer as they go, to make sure they’re approaching things correctly. But soon,
            they’d only refer to answers for questions they’re uncertain about. In other words, once they had confidence in their
            understanding of solving each type of question, they’d not spend much further time checking that type. But if that confidence
            reduces, say for a new type of problem, they’d refer to the answers again until they had figured out how to solve the new type of
            problem confidently.
            The ML equivalent involves giving AI a known set of data along with the correct results of performing an activity with it. This is
            known as training data and should be the representative of the kind of data that will be used in real situations. The AI performs
            the activity as designed on the training data, adjusting and refining how it performs the individual steps until it gets an acceptable
            percentage of them correct. It will then use these improved steps on any new data. The AI has now been ‘trained’, and works in a
            better way than it was originally designed, for data comparable with its training.
            Illustration: Supervised Learning in Traffic Cameras
            To take this from the abstract to the concrete, we’ll use an example from computer vision. Not OCR this time, but traffic cameras.
            As usual, we’ll break the activity down into steps, pick out a smaller task that requires intelligence (in this case computer vision),
            and look at how ML could be used for that piece of the overall AI.
            The intelligent human activity to be performed by AI in this case is monitoring a traffic camera, spotting accidents, traffic jams or
            other incidents, and taking appropriate action. This might mean informing the police or changing the speed limit elsewhere to
            reduce the flow of traffic into the jam.
            Many steps are needed, several of which are intelligent. For example, distinguishing vehicles from pedestrians; distinguishing
            between two stationary cars in a traffic jam and two that have collided; or being able to detect when rush-hour traffic has changed
            from acceptably busy to abnormal volumes requiring intervention.
            The supervised learning example is the first of these: spotting the cars in an image. Easy and obvious for a human, but surprisingly
            difficult for a computer. The way it’s done is to start by creating some logic that instructs the traffic camera system how to spot a
            car in an image. This logic is part of what’s called the traffic camera’s AI algorithm. Supervised ML is then used to train the traffic
            camera system, by showing it many real pictures of cars, so that it can adjust and improve the algorithm and other computer
            vision steps. The training ends when the cameras can recognize cars in the training data with enough accuracy for real-life traffic
            management.
            The key to this learning is the training data: a set of images of real cars on real roads. The crucial feature of training data is that it
            needs to have the correct answers, in this case car images, identified and labelled. That’s usually in the form of boxes drawn
            around each car in the image, labelled with the word ‘car’, and perhaps its make and model. Other objects such as people and
            lampposts might be similarly identified. (It makes no material difference to the example if the images are stills or video).
            One part of the algorithm would describe what generic cars look like, including features such as shapes and sizes, presence of
            wheels, windows and so on. As we know, the language used for that description is maths rather than English. The AI can compare
            this mathematical description of a generic car, with an equivalent mathematical description of any other image, and quantify how
            closely they match. In other words, it can give itself a ‘score’ of how likely any image in the training data will be a car.
            Supervised learning happens during training, when the traffic camera system compares its calculated score of whether something
            is a car with the label that tells it whether it was a car. Where it gets answers wrong, it will make adjustments to its mathematical
            description of a car or how it compares descriptions to improve accuracy. The skill of data scientists is in the sophistication and
            choice of ML techniques used to make these adjustments. The details of such adjustments aren’t relevant here. What matters is
            that by the end of the training, the use of labelled images of cars has improved the original description of a car and how it’s
            compared with new images, so that the system spots cars more reliably.
            In case you think this is about identifying different models of car, it’s actually something far trickier. A challenge for the AI
            designer in this example is dealing with incomplete images, such as seeing cars from different angles, or only seeing part of a car
            because of obstacles in front of it.
            As with most of the examples used, this description of supervised learning has been simplified for clarity, to the point where it’s no
            longer strictly accurate. This is a conscious decision, so that the concepts and ideas can be illustrated more accessibly.
            Unsupervised Learning
            We’ve looked at ML, and seen that it’s essentially using feedback on the correctness of a result, based on large amounts of known
            data, to improve the way an intelligent activity is performed.
            Unsupervised learning54 is a version of this where feedback is not directly available, because suitable examples of correct results
            don’t exist. This may be because we don’t know what we’re looking for, or it could be that there isn’t enough training data available
            labelled with the ‘correct’ answers.
            There are many practical examples in the first category: When we don’t quite know what we’re looking for, so can’t use supervised
            learning because we don’t know what a ‘right’ answer looks like. For example, if we had customers in an online store who bought
            clothes from us, and personal information about them such as demographics, employment and so on, we might want to know the
            characteristics of customers likely to buy specific products. We don’t know what those characteristics are, so can’t use supervised
            learning, as there’s no way to label training data. Instead, we could use unsupervised learning to figure out what those
            characteristics are.
            Unsupervised learning works by examining the data about the problem we’re trying to solve, and looks for patterns, associations
            and exceptions to find possible answers to the questions we were trying to answer. So, with unsupervised learning, human
            intervention may be needed to apply sense to the possible answers.
            In the e-commerce example above, let’s suppose we wanted to find out what kind of customers buy red skirts, so we can promote
            red skirts to similar customers likely to be interested in them. The unsupervised learning system would churn through all the
            available data about all customers who’ve previously bought red skirts and look for patterns and associations. It might find that
            most of them are female, most have bought lots of other red clothes, and that they’ve also bought lots of skirts. So far, no real
            surprises. But it might also spot something unexpected, such as a disproportionately high number work in the travel industry, or
            have ‘senior executive’ in their job title, or live in Liverpool and list soccer as one of their interests. There’s no way of knowing
            immediately if these are insights or coincidences, and they certainly don’t tell us what we should meaningfully infer.
            A human could take those results, and either apply some judgement to the results, or do some further investigation, such as
            customer surveys. But the AI system doesn’t have that option. What it can do instead is repeat the exercise with further data,
            either fresh training data to use during development, or new data obtained with use such as monthly purchases. Doing this, the
            unsupervised learning might find many new examples to confirm an earlier pattern, such as customers working in the travel
            industry are more likely to buy red skirts.
            The point of the example is not whether these answers are plausible or useful, but to illustrate how ML can be used to generate
            objective answers to questions humans can’t confidently answer.
            Reinforcement Learning (Also Known as Semi-Supervised)
            Reinforcement Learning55 is a variation of unsupervised learning that is based on the ‘carrot and stick’ approach. It’s different to
            the other two types of ML because it doesn’t concentrate on whether results of an individual’s activity are right or wrong, but on
            the overall result of a series of activities. It uses the computer equivalent of rewards and punishments to change the individual’s
            choices made during a complete set of activities.
            The goal is for the AI application to learn over time the most effective combination of activities to get the optimal overall result. It
            continuously adjusts individual and groups of steps to maintain or improve that bigger result. For example, if reinforcement
            learning were used to design AI to play chess, it would set overall game victory to be the optimal result. Intermediate results, that
            is, individual moves would be rewarded or punished based on whether they help lead to a win or a loss, not whether a specific
            move was good in the short term, for example taking a low-value piece instead of a high value one.
            Rewards and punishments in this context means, rather boringly, simply a numerical indication of likely success of the whole
            game. Rewards increase it, punishments decrease it.
            To evaluate each move in terms of the best overall result, the ML system uses a degree of trial and error. It tries many, perhaps all
            possible, variations of each individual step in the bigger activity (the overall game), and starts to favour the ones which give it the
            best overall results (victory).
            Reinforcement learning isn’t as well-known as the other forms of ML, but its applications are common. The most obvious, given
            the description above, is teaching AI to play games. If you’ve heard of game theory, then you might also correctly expect that
            reinforcement learning can help solve other problems that can be ‘gamed’. Examples include stock trading, online advertising
            placement and pricing, and even medical research.
            For now, we’ll complete this section on ML by looking at how scientists have modelled advanced ML techniques based on the
            human brain. This brings us to two widely used AI terms: deep learning and neural networks. Here’s what they mean and how
            they work.
            `,
        },
         {
          id: "u8-ubiquitous-cloud-computing",
          title: "Ubiquitous Cloud computing",
          tags: ["Ubiquitous Cloud computing"],
          content: `As a representative of a new technology, cloud competing, like internet, has closely
          penetrated into our daily live. For example, we want to share an electronic material
          of hundreds of Mb with a friend from distance place, what happens if it exceeds the
          limitation of email attachment size? In the past, we generally used express delivery
          of storage media such as CDs, flash drives, or mobile hard drives which is time
          consuming and cost more work. Now we have a much more convenient way with the
          help of cloud storage service such as Baidu disk. Just put the data file into your own
          cloud disk and send the sharing link and access password to the recipient. The
          recipient can obtain the shared data file anytime and anywhere via the Internet.
          Another example is that an organizer wants to hold a special meeting while the
          participants are located all over the country. In an epidemic prevention and control
          situation, having participants gather by transport from all over the country for an onsite meeting not only takes considerable time and expense to travel back and forth,
          but also increases the risk of spreading the epidemic. Therefore, people will prioritize ZOOM meeting, Tecent meeting, or Webex as an option to hold online meeting.
          Participants only need to use the Internet to perform simple operations using a
          browser, and they can quickly and efficiently share voice, data files, and videos with
          participants in different geographical locations. In fact, participants in a cloud
          conference only need to have a device (computer, mobile phone, tablet, etc.) that
          can access the Internet that can be used normally to achieve online communication
          and video conferences without having to care about the complex technologies such
          as data transmission and data processing, all of which are provided by cloud
          conference service providers.
          Such a way of preparing resources in advance and using these resources to
          perform specific tasks through specific technologies anytime and anywhere is
          generally a cloud computing type. The provider is a cloud service provider such as
          Huawei’s public cloud. Let’s take a look at the Huawei cloud website as shown in
          Fig. 1.1.
          Under “Product” ! “Fundamental services”, we can find computing, storage,
          network, database, container services, etc. These divisions can be divided into
          different subdivision types. Take a popular service—ECS, an elastic cloud server,
          as an example, as shown in Figs. 1.2 and 1.3.
          The elastic cloud server on the website is actually a virtual server (we will
          introduce it later). Similar to our own purchase of computer, the website provides
          different grades and types of cloud server instances to choose from. The configuration includes parameters such as the number of CPU, frequency, memory, and
          network bandwidth. Users can choose the most effective cloud server according to
          their needs. In fact, buying a cloud server instance is like buying a physical machine.
          You can complete most of the work that can be done on a physical machine, such as
          editing documents, sending emails, or working together. It’s just that the cloud
          server is not in front of you, but on the far end of the network (cloud). In addition,
          the cloud server also has some advantages that the local physical machine does not
          have. For example, the access to the cloud server is not restricted by time and place.
          As long as there is Internet, it can be used anytime and anywhere. And the equipment
          (terminals) for operating the cloud server can be varied. For example, the user can
          operate the cloud server through a personal computer (PC), mobile phone, etc., and
          can modify or expand the performance configuration of the cloud server if necessary.
          In addition to providing cloud servers to users, cloud service providers generally
          provide some other cloud services. For example, on Huawei’s public cloud, users
          who need to build a website can purchase the cloud speed website building service,
          which can help users quickly complete the construction of the website; users who
          need to store data can purchase object storage services or cloud hard drives. More
          advanced services also include artificial intelligence (Artificial Intelligence, AI)
          functions such as face recognition, voice recognition, image recognition, or text
          recognition.
          In short, cloud computing allows us to use IT services like water and electricity as
          soon as the user turns on the faucet, water rushes out. This is because the water plant
          has sent water into the pipeline network (water network) that connects thousands of
          households; electricity is similar. For cloud computing, cloud service providers have
          prepared all resources and services for users, and users can use them via the Internet.
          The Internet here is similar to the previous water network, and the tap can be a
          browser or a mobile application (App).
          In fact, cloud services around you can be seen everywhere. In addition to the
          examples introduced in the previous article, other cloud services such as automatic
          backup of mobile phones, Youdao Cloud Notes and NetEase Cloud Music are all
          cloud services around us. At present, mainstream mobile phone manufacturers such
          as Huawei and Apple provide cloud-based mobile phone backup and recovery
          services. Users can back up files on the mobile phone to a data center in the cloud.
          After replacing the phone, you can restore your data to the new phone using your
          account and password. Youdao Cloud Notes is a product launched by NetEase,
          which provides online document creation and editing functions. When the user
          needs to record his inspiration at a certain moment, but unfortunately finds that
          there is no paper and pen around, the user can use Youdao Cloud Notes to record the
          inspiration online. Another advantage of this product is that no matter when and
          where, no matter what terminal the user uses (personal computer, mobile phone,
          etc.), online data can be edited, shared, and collaborated anytime, anywhere, and
          every edit can be done immediately Sync to the cloud. Music lovers may like
          NetEase Cloud Music App, through which songs can be listened to online and
          played at any time.
          With the rapid development of cloud computing technology, similar cloud
          services will increasingly penetrate our daily lives. The spring weather turns rain,
          moisturizing things silently. We can truly feel the convenience of cloud computing
          technology in our lives.
        `,
        },
         {
          id: "u8-properties-cloud-computing",
          title: "The Properties of Cloud Computing",
          tags: ["The Properties of Cloud Computing"],
          content: `Cloud computing, as a new computing model, mainly has the following
characteristics.
1.2.1 On-Demand Self-Service
Speaking of on-demand self-service, the first thing comes to your mind is supermarket. Every customer can collect goods according to their requirements. If it is the
same type of goods, you can check description, price, and brand information to
decide whether to buy or which one to buy. On-demand self-service is one of the
mail characteristics of cloud computing. We will later introduce the Infrastructure as
a Service (IaaS), platform as a service (PaaS) and Software as a Service (SaaS)
model. Users can choose among one of these models based on their necessity. After
selecting the mode, there will generally be different configurations to choose from,
and users can purchase the services according to their needs. The entire process is
generally self-service and does not require third-party intervention unless you have a
problem that requires consultation. As shown in Fig. 1.3, Huawei’s elastic cloud
server specifications for public clouds have many different configurations of cloud
server instances to choose from.
On-demand self-service is premised on knowing your needs and which products
will address them. This requires the relevant expertise of users using cloud computing. Users who do not have the knowledge and capabilities to use cloud services can
consult a cloud service provider or turn to a relevant professional services provider.
1.2.2 Extensive Network Access
Another feature of cloud computing is that all clouds must rely on network connectivity. It can be said that the network is the foundation of cloud computing.
Especially the Internet, the cloud is always inseparable from the Internet. The
Internet provides remote, anytime, anywhere access to IT resources. Some people
even think of cloud computing as “Internet plus computing,” and network access is
an intrinsic property of cloud computing.
Although most cloud access is over the Internet, cloud users also have the option
of using a private channel to access the cloud. The level of service for network
connectivity between cloud users and cloud service providers (quality of service,
Quality of Service, QoS) depends on the Internet Service Provider (ISP) that provides them with network access.
In today’s society, the Internet can cover almost every corner of the world, we can
connect to the Internet through a variety of digital terminals, such as personal
computers and mobile phones and connect to the cloud through the Internet, using
cloud services. Therefore, extensive network access is an important feature of cloud
computing. This can either be a wired network or a wireless network such as a Wi-Fi
network. In short, without the network, there would be no cloud computing.
1.2.3 Resource Pooling
Resource pooling is one of the prerequisites for on-demand self-service, through
resource pooling can not only put similar goods together, but also can refine the units
of goods. Slightly large-scale supermarkets will generally be divided into fresh
areas, fruit and vegetable areas, daily necessities areas and other areas to facilitate
customers to quickly find their own needs of goods, but this form is not a pool of
resources, can only be regarded as a classification of resources. So what is pooling
resources? In addition to converting similar resources into resource pools, resource
pooling requires the decomposition of all resources into smaller units. If we buy our
own hard drives, a mechanical drive (Hard Disk, HDD) often has a few terabytes
(TB, 1TB, 1012B); solid-state drives (Solid State Drive, SSDs) have a slightly
smaller capacity, and an SSD typically has a capacity of 128 to 512GB (Gigabytes,
1GB, 109B). Storage pooling cannot be measured in the number of hard drives
because a hard drive has a large capacity, some applications only need a few
gigabytes (GB), allocating the capacity of a hard disk is obviously a huge waste.
Therefore, the way to use resource pooling need to break the number of physical
hard disk unit “one” and combined all the capacity of the hard disk, gathered into a
“pool.” Then allocation can be assigned in smaller units such as “GB” as a unit.
Users can apply for as much as they need.
The computing resources include CPU and memory. If the CPU is pooled, the
smallest unit of the CPU that the user sees can be a virtual core, and the CPU
manufacturer no longer reflects the physical attributes of AMD or Intel.
Another function of resource pooling is to screen the differences between different resources. After the storage resources containing the mechanical hard drive and
the SSD are pooled, if the user requests a certain amount of storage space, which
corresponds to the mechanical hard drive or SSD, or both, he cannot tell the
difference. In cloud computing, resources that can be pooled include computing,
storage, and networking. Computing resources include CPU and memory. If CPU is
pooled, the smallest unit of the CPU that the user sees can be a virtual core, and no
longer reflect physical attributes such as the CPU’s manufacturer being AMD or
Intel.
1.2.4 Fast and Elastic Scaling
Fast elastic scaling is one of the characteristics of cloud computing and is often cited
as one of the core reasons for attracting users to “embrace” cloud computing. Cloud
users can automatically and transparently scale their IT resources according to their
needs. For example, in order to deal with the sudden high traffic of hot events, users
can temporary self-purchase a large number of virtual resources to expand capacity.
When hotspot events “cool down” and access traffic tends decline, users can release
these newly added virtual resources, which is typical of fast elastic scaling. Cloud
providers with large IT resources can provide a wide range of elastic scaling.
Fast elastic scaling includes several types, and in addition to manual capacity
expansion or reduction, cloud computing supports automatic scaling or reduction
based on preset policies. Scaling can be an increase or decrease in the number of
servers, or an increase or decrease in resources for a single server.
In cloud computing, the biggest benefit of fast elastic scaling for users is cost
savings while keeping the business or application running smoothly. Enterprises can
purchase small amounts of resources when they are in low initial demand, gradually
increase their investment in resources as the size of the enterprise expands, or
concentrate all resources on priority business use during special periods, and, if
resources are not sufficient, immediately apply for additional resources and, after a
special period, release new resources. Either scenario is convenient for the user.
1.2.5 Measurable Services
Measuring is not billing although measuring is the basis of billing. Among the
services provided by cloud computing, most services need to be paid for, but there
are also services that are free. For example, elastic scaling can be opened as a free
service for users.
Metrology is the use of technology and other means to achieve unity and accurate
and reliable measurement. It can be said that the services in cloud computing are all
measurable, some are based on time, some are based on resource quotas, and some
are based on traffic. Measuring service can help users to automatically control and
optimize resource allocation accurately according to their own business. In cloud
computing systems, there is generally a billing management system that is specifically used to collect and process usage data. It involves the settlement of cloud
service providers and the billing of cloud users. The billing management system
allows for the development of different pricing rules and can also customize the
pricing model for each cloud user or each IT resource.
Billing can choose between prepaid use or pay after use. The latter payment type
is divided into predefined limits and unlimited use. If the limit is set, they often
appear in the form of quota. When the quota is exceeded, the billing management
system can reject the cloud user’s further use request. Assuming that a user’s
memory quota is 500GB, once the user’s storage capacity in the cloud computing
system reaches 500GB, new storage requests will be rejected.
Users can purchase services according to their needs and can clearly see the usage
of their purchased services. For contract users, the type of product used, service
quality requirements, cost per unit time, or cost per service request are usually
specified in the contract.
Figure 1.4 shows the pricing standards of Huawei Elastic Cloud Server instances,
which shows the pricing standards of virtual server instances with different configurations. In this example, they are charged monthly.

`,
        },
         {
          id: "u8-definition-cloud-computing",
          title: "Definition of Cloud Computing",
          tags: ["Definition of Cloud Computing"],
          content: `There are several definitions of cloud computing. There are many definitions of what
cloud computing is.
Wikipedia: Cloud computing is an Internet-based computing method. In this way,
shared hardware and software resources and information can be provided to computers and other devices on demand, just like water and electricity for everyday use,
paid for on demand, without caring about their source. National Institute of Standards and Technology, NIST: Cloud computing is a pay-per-use model that provides
usable, convenient, on-demand network access to configurable computing resource
sharing pools (resources including storage, software, services) that can be delivered
quickly with minimal administrative effort or little interaction with service providers.
In the past, engineers used to use clouds to abstractly describe telecommunications networks or the Internet and underlying infrastructure when drawing pictures.
The name of cloud computing has an inextricable origin. The “cloud” in cloud
computing can be seen as a vast pool of IT resources where users can purchase the
services they need on demand and pay for what they use.
Cloud computing is a broad concept, not a specific technology or standard,
different people from different perspectives will have different understanding,
there is no authoritative definition.
1. The definition of cloud computing by analysts
Early Merrill Lynch argued that cloud computing was the use of the Internet to
run personal applications (E-mail, document processing, and presentations) and
commercial applications (sales management, customer service, and financial
management) on centrally managed servers. By sharing resources from these
servers, such as storage and processing power, resources can be used more
efficiently and costs can be reduced by 80% to 90%. Information Week, on the
other hand, defines cloud computing more broadly: cloud computing is an
environment in which any IT resource can be delivered as a service. The media
is also interested in cloud computing. The Wall Street Journal, America’s bestselling magazine, is also keeping a close eye on the evolution of cloud computing.
It argues that cloud computing enables enterprises to gain computing power,
storage space, software applications, and data from very large data centers over
the Internet. Customers pay only for the resources they use when necessary,
avoiding the huge costs of building their own data centers and purchasing servers
and storage devices.
2. The definition of cloud computing by enterprises
IBM believes that cloud computing is a computing style based on the delivery
of services, software, and processing power over public or private networks.
Cloud computing focuses on the user experience, with the core separating the
delivery of computing services from the underlying technology. Cloud computing is also a way to share infrastructure, using pools of resources to connect public
or private networks together to provide IT services to users. Eric Schmidt,
Google’s former CEO, argues that cloud computing distributes computing and
data across a large number of distributed computers, making computing and
storage capabilities highly scalable and allowing users to easily access applications and services over the network through a variety of access methods, such as
computers and mobile phones. Its important feature is open, there will not be an
enterprise can control and monopolize it. According to Kaifu Li, a former global
vice president at Google, the entire Internet is a beautiful cloud where Internet
users need to easily connect to any device, access any information, create content
freely, and share it with friends. Cloud computing is based on open standards and
services, the Internet as the center, to provide secure, fast, and convenient data
storage and network computing services, so that the Internet “cloud” is to become
every Netizen’s data center and computing center. Cloud computing is actually
Google’s business model, and Google has been working hard to promote the
concept.
Microsoft’s approach to cloud computing is much more contradictory than
Google’s. If future computing power and software are all concentrated in the
cloud, then clients don’t need a lot of processing power, and Windows loses most
of its power. As a result, Microsoft’s approach has always been “cloud+end.”
Microsoft believes that the future of computing model is not just cloud computing. The “end” here refers to the client, which means that cloud computing must
have a client to work with. “From an economic point of view, bandwidth, storage,
and computing are not going to be free, and consumers need to find a model that
fits what they need, so there must be end-of-the-line computing. In terms of
communication supply and demand, although bandwidth has increased, content is
also growing simultaneously, such as video and images. Bandwidth limitations
are always there. From a technical point of view, the end of the computing power
is strong, in order to bring users more exciting applications” said Dr. Yaqin
Zhang, a former senior global vice president at Microsoft. Microsoft’s definition
of cloud computing is no different, it just underlines the importance of the “end”
in cloud computing. Today, with the rise of Azure Cloud, Microsoft has
embraced cloud computing across the scale.
The overview of cloud computing across the business market is shown in
Fig. 1.5.
3. The definition of cloud computing by academia
In academia, Ian Foster, the father of grid computing, argues that cloud
computing is a model of large-scale distributed computing driven by the economics of scale. In this model, abstract, virtualized, dynamically scalable, and
managed computing power, storage, platforms, and services converge into a pool
of resources that are delivered to external users on demand over the Internet. He
believes that several key points of cloud computing are: high scalability; can be
encapsulated as an abstract entity and provide different levels of service for
external users; economics resulting from scale; and services can be dynamically
configured (via virtualization or other means) to deliver on demand.
Based on these different definitions, it’s not hard to find out that the basic view
of cloud computing is the same, but there are differences in the delimitation of
certain areas. A more complete definition of cloud computing can be given from a
comprehensive perspective: “Cloud computing is a computing model in which
dynamically scalable and virtualized resources are delivered as services over the
Internet.” End-users don’t need to know the details of the infrastructure in the
cloud, do not need to have the appropriate expertise knowledge, do not need
direct control, just pay attention to what resources they really need, and how to
get the appropriate services over the network.”
Zhu Jinzhi, who once worked at IBM, gave a relatively broad definition in his
book Smart Cloud Computing: The Platform of the Internet of Things in order to
cover cloud computing more comprehensively. The definition is as follows:
“Cloud computing is a computing model: IT resources, data and applications
are provided as services to users through the network.” Its practical definition of
“cloud” is a metaphorical method used to express the abstraction of complex
infrastructure. Cloud computing is an abstraction of traditional computing infrastructure, so we choose to use “cloud” as a metaphor, as shown in Fig. 1.6.
Cloud computing starts with “software as a service,” and then transforms all IT
resources into services and provide to users. Think of cloud computing as a model
that can easily access a common set of configurable computing resources (such as
servers, storage devices, software, and services) through the network. These
resources can be quickly provided and released, while minimizing management
costs and the intervention of service providers.
We can look at cloud computing from two perspectives, the place where
computing occurs and the form of resource supply. From the perspective of
where computing occurs, cloud computing moves the operation of software
from a personal computer (or desktop computer) to the cloud, that is, on a server
or server cluster located in a “mysterious” geographic location. These servers or
server clusters can be local, remote, or even far away. This seems to be a Client/
Server (C/S) model, but cloud computing is not a traditional client/server model,
but a huge improvement on this model. From the perspective of resource supply,
cloud computing is a computing service, that is, all IT resources, including
hardware, software, and architecture, are sold and charged as a service. For
cloud computing, there are three main types of services: infrastructure as a
service, providing hardware resources, similar to the traditional CPU, memory
and I/O; platform as a service, providing an environment for software operation,
similar to traditional operating system and programming framework in programming mode; software as a service, providing application software functions,
similar to application software in traditional mode. In the cloud computing
model, users no longer purchase or buy out certain hardware, system software,
or application software to become the owner of these resources, but purchase the
usage time of the resource, and consume according to the billing model such as
paying for the length of use.
It can be seen that cloud computing treats all resources as services and
consumes them in a pay-as-you-go manner, which is the characteristic of the
host era. In the host era, all users are connected to the host through a display
terminal and a network cable, and billing is based on the consumed CPU time and
storage capacity. The difference is that in the host mode, the calculation occurs on
one host; in the cloud computing mode, the calculation occurs in a server cluster
or data center.
Therefore, cloud computing is both a new computing model and a new
business model. It is a new computing model because all computing is organized
as a service; it is a new business model because the way users pay is different
from the past, and pay according to what you use, which greatly reduces resource
users’ operating costs. It is not difficult to see that these two aspects of cloud
computing rely on each other and are indispensable. Because only using
resources as services can support the pay-as-you-go payment model; because
the billing is based on what you use as you pay, resources can only be provided as
services (not as packaged software or hardware). In fact, it can be said that cloud
computing is a computing model, where computing boundary here is not determined by technical limitations, but by economic factors.
In a nutshell, cloud computing is the result of the hybrid evolution and
integration of various concepts such as virtualization, utility computing, service
computing, grid computing, and automatic computing. It started from mainframe
computing and went through minicomputer computing, client/server computing,
distributed computing, grid computing, and utility computing. It is not only a
technological breakthrough (technical integration), but also a leap in business
model (pay as much as you use, no waste). For users, cloud computing shields all
the details of IT. Users do not need to have any knowledge or any control over the
technical infrastructure of the services provided by the cloud, or even the system
configuration and geographic location of the services provided. They only need to
“turn on the switch“(Connect to the Internet) to enjoy the service.
It can be seen that cloud computing describes a new mode of supplying,
consuming, and delivering IT services. This model is based on the Internet
protocol and will inevitably involve the configuration of dynamically scalable
and often virtualized resources. To some extent, cloud computing is a by-product
of people’s pursuit of easy access to remote computing resources.
The huge advantages of cloud computing in both technology and business
model determine that it will become the leading technology and operating model
of the IT industry in the future.
`,
        },
        {
          id: "u8-advantage-cloud-computing",
          title: "The Advantage of Cloud Computing",
          tags: ["The Advantage of Cloud Computing"],
          content: `The implementation and innovation of any technology is to meet the application
needs of a certain group of people. Cloud computing is not an exception. It gradually
penetrates into all areas of people’s life and production, bringing convenience and
benefits to people. The advantages of cloud computing are as follows:
1. Cut costs
Through cloud computing, companies can minimize or completely cut initial
investment because they do not need to build data centers or build software/
hardware platforms on their own, nor do they need to hire professionals for
development, operation, and maintenance. It is usually much cheaper to use
cloud computing services than to purchase software/hardware to build the
required system.
2. Data can be accessed instantly anytime, anywhere
“Cloud” brings greater flexibility and mobility. Using the cloud, companies
can instantly access their accounts through any device anytime, anywhere; data
can be stored, downloaded, restored, or processed easily, saving a lot of time and
effort.
3. Improve adaptability and flexibly expand it needs
In most cases, the capacity of the IT system does not match the needs of the
enterprise. If an enterprise configures IT equipment according to the peak
demand, it will be idle at ordinary times, resulting in a waste of investment. If
an enterprise configures IT equipment according to average demand, it will not be
enough during peak demand. However, with cloud services, companies can have
more flexible choices and can increase, decrease, or release the resources they
apply for at any time.
4. Unified platform
Companies may be running different types of platforms and devices at the
same time. In the cloud service platform, the application and the hardware
platform are not directly related, thereby eliminating the need for multiple
versions of the same application.
`,},
 {
          id: "u8-classification-cloud-computing",
          title: "Classification of Cloud Computing",
          tags: ["Classification of Cloud Computing"],
          content: `The layering of clouds focuses on the construction and structure of the cloud, but not
all clouds of the same construction are used for the same purpose. Traditional
operating systems can be divided into desktop operating systems, host operating
systems, server operating systems, and mobile operating systems. Cloud platforms
can also be divided into many different types. Cloud classification is mainly based on
the cloud’s operating mode and service mode. The former category is concerned
with who owns the cloud platform, who is operating the cloud platform, and who can
use the cloud platform. From this perspective, clouds can be divided into public
clouds, private clouds (or dedicated clouds), community clouds, hybrid clouds, and
industry clouds. The latter classification is based on the service model of cloud
computing, and the cloud can be divided into three layers: IaaS, PaaS, and SaaS.
1.6.1 Classification by Operating Model
1. Public cloud
Public cloud is a type of cloud environment that can be publicly accessed, usually
owned by a third-party cloud service provider. It is called public cloud because it
can be accessed by the unrestricted public. Public cloud service providers can
provide the installation, management, deployment, and maintenance of IT
resources in all aspects, from applications and software operating environments
to physical infrastructure. End-users achieve their goals through shared IT
resources, and only pay for the resources they use, and obtain the IT resource
services they need in this relatively economical way.
In the public cloud, users do not know with whom to share resources, and how
the underlying resources are implemented, and they cannot control the physical
infrastructure. Therefore, the cloud service provider must guarantee the security
and reliability of the provided resources and other non-functional requirements.
The level of these non-functional services also determines the service level of the
cloud service provider. For those cloud services that need to strictly comply with
security and regulatory compliance, higher level and more mature service levels
are required. Examples of public clouds include foreign Google App Engine,
Amazon EC2, IBM Developer, etc. domestic Tencent Cloud, Alibaba Cloud,
Huawei Cloud, Ucloud, etc.
2. Private cloud
Enterprises and other social organizations are not open to the public. Data
centers that provide cloud services (IT resources) for the enterprises or organizations are called private clouds. Compared with public clouds, users of private
clouds own the entire cloud center facility, can control where program run and
can decide which users are allowed to use cloud services. Since private cloud
services are provided for enterprises or organizations, private cloud services can
be less subject to many restrictions that must be considered in public clouds, such
as bandwidth, security, and regulatory compliance. Moreover, private clouds can
provide more guarantees of security and privacy through means such as user
range control and network restrictions.
The types of services provided by private clouds can also be diversified.
Private cloud can not only provide IT infrastructure services, but also support
cloud services such as application and middleware operating environment, such
as internal management information system (IMS) cloud services.
3. Community cloud
Both public and private clouds have disadvantages. A compromised cloud is
the community cloud. As the name suggests, it is a cloud platform owned by a
community, not an enterprise. Community cloud generally belongs to a certain
enterprise group, institution alliance or industry association, and generally also
serves the same group, alliance, or association. If some organizations are closely
connected or have common (or similar) IT needs and trust each other, they can
jointly construct and operate a community cloud in order to share infrastructure
and enjoy the benefits of cloud computing. All members of the group can use the
community cloud. In order to facilitate management, community cloud is generally operated and maintained by one organization, but it can also be managed by a
cloud platform operation and maintenance team formed by multiple
organizations.
Public cloud, private cloud, and community cloud are shown in Fig. 1.8.
4. Hybrid cloud
Hybrid cloud combines “public cloud” and “private cloud” together. Users can
partly own and share partly with others in a controlled way. Enterprises can take
advantage of the cost advantages of public clouds to run non-critical applications
on the public cloud, and at the same time provide services through the internal
private cloud for major applications with higher security requirements and more
criticality.
There are many reasons for using hybrid cloud. There are two main reasons:
the compromise of various considerations; the transition from private cloud to
public cloud. For the first reason, although some organizations are eager to use the
public cloud, because of various regulations, confidentiality requirements or
security restrictions, they cannot put all their resources on the public cloud, so
some IT resources will be deployed in the public cloud. In the above situation,
part of the IT resources is deployed in the business location, which will form a
hybrid cloud.
In the long run, public cloud is the mainstream of cloud computing development due to its higher resource utilization efficiency, but private cloud and public
cloud will coexist for a long time in the form of common development. Just like
the emergence of banking services, the transfer of currency from individuals to
bank custody is a safer and more convenient process, but some people may
choose to keep them on their own.
5. Industry cloud
The industry cloud is for the purpose of the cloud, not for the owner or user of
the cloud. If the cloud platform is customized for a certain industry (e.g., for the
automotive industry), it is called an industry cloud. The components used in the
industry cloud ecological environment should be more suitable for related industries, and the software deployed on it is also industry software or its supporting
software. For example, for the cloud platform established by the hospital, the data
storage mechanism deployed above should be particularly suitable for the storage, indexing, and query of medical data.
There is no doubt that the industry cloud is suitable for the specified industry,
but it may be of little value to the average user. Generally speaking, the structure
of the industry cloud will be simpler, and its management is usually taken care of
by the industry’s “leading” or a computing center (supercomputer center) designated by the government.
The relationship between the industry cloud and the four types of clouds
mentioned above is not exclusive, and there may be an overlapping or
overlapping relationship between them. For example, industry clouds can be
built on public clouds, private clouds, and more likely community clouds.
6. Other cloud types
In addition to the cloud types above, there are other cloud types. For example,
according to whether the cloud is aimed at individuals or enterprises, it can be
divided into consumer cloud and enterprise cloud. The consumer cloud audience
is the general public or individuals, so it is also called the public cloud. This kind
of cloud promotes personal storage and document management needs; the enterprise cloud is for enterprises and promotes comprehensive IT services for enterprises. The classification of these clouds is still a certain segmentation or
combination of the above cloud types in essence.
1.6.2 Classification by Service Model
According to the service model of cloud computing, the cloud can also be divided
into three layers: IaaS, PaaS, and SaaS. Different cloud layers provide different cloud
services. Figure 1.9 shows the composition of a typical cloud computing.
1. IaaS
IaaS is at the bottom of the three-layer service of cloud computing, and it is
also the scope covered by the narrow definition of cloud computing. IaaS provides IT infrastructure to users in the form of services like water and electricity
and provides highly scalable and on-demand IT capabilities based on hardware
resources such as servers and storage in the form of services. It is usually charged
according to the cost of the resources consumed.
This layer provides basic computing and storage capabilities. Taking the
provision of computing capabilities as an example, the basic unit it provides is
a virtual server, including CPU, memory, operating system, and some software,
as shown in Fig. 1.10. Specific instance is Amazon EC2.
2. PaaS
PaaS is located in the middle of the three-layer service of cloud computing and
is often referred to as a “cloud operating system,” as shown in Fig. 1.11. It
provides end-users with an Internet-based application development environment,
including application programming interfaces and operating platforms and supports various software/hardware resources and tools required for the entire life
cycle of applications from creation to operation. The billing is usually based on
user or login status. At the PaaS layer, service providers provide encapsulated IT
capabilities, or some logical resources, such as databases, file systems, and
application operating environments. Examples of PaaS products include
Huawei’s software development cloud DevCloud, Salesforce’s Force.com, and
Google’s Google App Engine.
PaaS is mainly for software developers. It used to be a difficult problem for
developers to write and run programs in a cloud computing environment through
the network. Under the premise of gradual increase in network bandwidth, the
emergence of two technologies has solved this problem. One is online development tools. Developers can use browsers, remote consoles (running development
tools in the console), and other technologies to directly develop applications
remotely, without the need to install development tools locally; the other is
local development tools and cloud computing integrated technology, that is,
deploying the developed application to the cloud computing environment through
local development tools, while enabling remote debugging.
3. SaaS
SaaS is the most common cloud computing service, located at the top of the
three-tier cloud computing service, as shown in Fig. 1.12. The user uses the
software on the Internet through a standard Web browser. Cloud service providers are responsible for maintaining and managing software and hardware
facilities and provide services to end-users for free or on-demand rental.
These services are both for general users, such as Google Calendar and Gmail,
and for enterprise groups to help with payroll processes, human resource management, collaboration, customer relationship management and business partner
relationship management, such as Salesforce.com and Sugar CRM. These SaaSprovided applications reduce the time for users to install and maintain software
and their skills requirements and can reduce software license fees through
pay-per-use.
The above three layers, each has corresponding technical support to provide the
services of this layer, with the characteristics of cloud computing, such as elastic
scaling and automatic deployment. Each layer of cloud services can be independent
into a cloud or based on the services provided by the clouds below. Each kind of
cloud can be directly provided to end-users for use, or it can only be used to support
upper-layer services. The three types of service models usually have different user
groups (see Fig. 1.13).
`,},
        {
          id: "u8-big-data",
          title: "Big data",
          tags: ["Big data"],
          content: `Segal, T. (2022, November 29). What is big data? Definition, how it works, and uses. Investopedia. https://www.investopedia.com/terms/b/big-data.asp
        `,},
        {
          id: "u8-introduction-blockchain",
          title: "Introduction to Blockchain",
          tags: ["Introduction to Blockchain"],
          content: `Blockchain Technology is one of the four hot technologies shaping the future of the tech world in
the coming decades, these four technologies (IBAC) are: Internet of Things (IoT), Blockchain, A
rtificial Intelligence (AI), and Cybersecurity (Figure 1.1). All four technologies are
interconnected and impact each other in many ways. As Figure 1.2 shows that you can explain
each technology with an analogy to human acts: IoT: Feels, Blockchain: Remembers, AI: Thinks,
and Cybersecurity: Protects.
Recently, “Quantum Computing” presented itself as a new player impacting IBAC in many ways,
for example, Quantum Computing will make IoT faster in processing data and extracting insights,
Quantum Computing will force Blockchain to invent new encryption techniques and will make
processing data faster solving one of the main issues of Blockchain Technology, in the case of AI
Quantum Computing will make analysis extremely faster which will, in turn, makes decisions
done real-time in many cases not possible with current computing tools, in Cybersecurity,
Quantum Computing will help in detection and prevention of cyber-attacks and open the doors
for new Quantum Encryptions algorithms which will make it very hard for hackers to access
systems and data.


        `,},
          {
          id: "u8-what-is-blockchain",
          title: "What is Blockchain",
          tags: ["What is Blockchain"],
          content: `Blockchain is simply a software to start with the classical definition of Blockchain is “a
distributed database existing on multiple computers at the same time. It is constantly growing as
new sets of recordings, or ‘blocks’, are added to it. Each block contains a timestamp and a link to
the previous block, so they actually form a chain”, but the best definition of Blockchain according
to MIT is: Cryptography +Human Logic.
If the internet is all about providing connectivity, Blockchain is all about enabling trust. For
example, imagine there are 30 people in a classroom or an office building, with one main door
and a security guard holding a list of authorized students/employees who can get into the
building, you will show your card to him/her to check the list and if you are on the list you are in.
This is the current centralized system. With the use of Blockchain, each one of the 30 people will
have a list with pictures of people who are authorized to be in the room so if somebody came in,
and that person was not on the list, they would start talking to each other, asking “Hey, can you
please check if this person belongs here?” That is a synchronization and referred to as gossip
protocol within the Blockchain. Human logic is the list you have, and the motion of everybody
starting to talk to each other. On the top of the current system using encryption (user name and
password), we added the human logic, consensus protocols and algorithms.


        `,},
          {
          id: "u8-five-components-blockchain",
          title: "The Five Components of a Blockchain",
          tags: ["The Five Components of a Blockchain"],
          content: `
            The Five Components of a Blockchain
            1.Cryptography
            2.P2P Network
            3.Consensus Mechanism
            4.Ledger
            5.Validity Rules

        `,},
          {
          id: "u8-blockchain-programming-languages",
          title: "Blockchain Programming Languages",
          tags: ["Blockchain Programming Languages"],
          content: `
          Any of the following programming languages can be used to create Blockchain platforms:
            1.C++ (Bitcoin)
            2.Python
            3.JavaScript
            4.Solidity (Smart Contract)
            5.Java
            6.Go

        `,},
          {
          id: "u8-mechanism-blockchain-technology",
          title: "Mechanism of Blockchain Technology",
          tags: ["Mechanism of Blockchain Technology"],
          content: `
          First block called Genesis Block, created by the miner or validator based on consensuses protocol,
each block have five elements (Index, Time-Stamp, Previous Hash, Hash, and Data), a
Blockchain is initialized with the genesis block which is the foundation of the trading system and
the prototype for the other blocks in the Blockchain. When you change any of these data’s you
will change the whole block and the following blocks will see that something has changed, in
addition to the other nodes with copies of the blocks and the altered node will be rejected, all
nodes sync using a gossip protocol, Figure 1.6 shows this type of mechanism.
A gossip protocol is a procedure or process of computer peer-to-peer communication that is
based on the way epidemics spread. Some distributed systems including Blockchain use peer-topeer gossip to ensure that data is disseminated to all members of a group. Some ad-hoc networks
have no central registry and the only way to spread common data is to rely on each member to
pass it along to their neighbors.


        `,},
          {
          id: "u8-blockchain-vs-traditional-database",
          title: "Block chain vs Traditional database",
          tags: ["Block chain vs Traditional database"],
          content: `
          Here’s a point-by-point comparison of blockchain databases vs. traditional databases:

Authority:
Blockchain: Decentralized
Traditional Database: Centralized and controlled by the admin
Architecture:
Blockchain: Distributed
Traditional Database: Client-server
Data Handling:
Blockchain: Read and Write
Traditional Database: CRUD (Create, Read, Update, Delete)
Integrity:
Blockchain: High (Data is secured and difficult to alter)
Traditional Database: Can be altered by hackers or admins
Transparency:
Blockchain: High (Visible to all participants in the network)
Traditional Database: Controlled by the admin
Cost:
Blockchain: High
Traditional Database: Low
Performance:
Blockchain: Slow (Due to consensus mechanisms)
Traditional Database: Very fast

        `,},
          {
          id: "u8-challenges-blockchain-technology",
          title: "Challenges facing Blockchain Technology",
          tags: ["Challenges facing Blockchain Technology"],
          content: `
          Every new technology face challenge and Blockchain is not an exception, the following is a list of
          both technical and non-technical challenges (Figure 1.9):
          Technical Challenges:
          Scalability
          Processing Time
          Processing Power
          51% Attack
          Double Spending
          Bad Smart Contracts
          Storage
          First Mile and Last Mile problem (Data before and after going through the Blockchain)
          Non-Technical Challenges:
          Regulations
          Public perception (Blockchain is Bitcoin)
          Lack of skilled staff

        `,},
          {
          id: "u8-types-blockchain-networks",
          title: "Types of Blockchain Networks",
          tags: ["Types of Blockchain Networks"],
          content: `
          There are three types of Blockchain Networks (Figure 1.10):
          Public: 
          a public Blockchain is the one where everyone can see all the transactions,
          anyone can expect their transaction to appeal on the ledger and finally anyone can -
          participate in the consensus process.
          Federated/Hybrid: 
          federated/hybrid Blockchain does not allow everyone to participate
          in the consensus process. Indeed, only a limited number of nodes are given permission to
          do so. For instance, in a group of 20 pharmaceutical companies, we could imagine that
          for a block to be valid, 15 of them have to agree. The access to the Blockchain, however,
          can be public or restricted to the participants.
          Private: 
          private Blockchains are generally used inside a company. Only specific
          members are allowed to access it and carry out transactions.

        `,},
         {
          id: "u8-what-is-IoT101",
          title: "What is IoT 101",
          tags: ["What is IoT 101"],
          content: `The term IoT was coined by Kevin Ashton in 1999. At that time, most of the data fed to computers was generated
by humans; he proposed that the best way would be for computers to take data directly, without any intervention
from humans. And so he proposed things such as RFID and sensors, which gather data, should be connected to the
network, and feed directly to the computer.
Today IoT (also called the internet of everything and sometimes, the fog network) refers to a wide range of
things such as sensors, actuators, and smartphones connected to the internet. These things can be anything: a
person with a wearable device (or even mobile phone), an RFID-tagged animal, or even our day-to-day devices
such as a refrigerator, washing machine, or even a coffee machine. These things can be physical things—that is,
things that exist in the physical world and can be sensed, actuated, and connected—or of the information world (a
virtual thing)—that is, things that aren't tangibly present but exist as information (data) and can be stored,
processed, and accessed. These things necessarily have the ability to communicate directly with the internet;
optionally, they might have the potentiality of sensing, actuation, data capture, data storage, and data processing.
The International Telecommunication Unit (ITU), a United Nations agency, defines IoT as:
"a global infrastructure for the information society, enabling advanced services by interconnecting (physical and
virtual) things based on existing and evolving interoperable information and communication technologies."
The wide expanse of ICT already provided us with communication at any time or any place; the IoT added the
new dimension of ANY THING communication:
It's predicted that IoT as a technology will have a far-reaching impact on people and the society we live in. To
give you a glimpse of its far-reaching effects, consider the following scenarios:
You, like me, live in a high rise building and are very fond of plants. With lots of effort and care, you've
made a small indoor garden of your own using potted plants. Your boss asks you to go for a week-long trip,
and you're worried your plants won't survive for a week without water. The IoT solution is to add soil
moisture sensors to your plants, connect them to the internet, and add actuators to remotely switch on or off
the water supply and artificial sunlight. Now, you can be anywhere in the world, but your plants won't die,
and you can check the individual plant's soil moisture condition and water it as needed.
You had a very tiring day at the office; you just want to go home and have someone make you coffee,
prepare your bed, and heat up water for a bath, but sadly you're home alone. Not anymore; IoT can help.
Your IoT-enabled home assistant can prepare the right flavor coffee from the coffee machine, order your
smart water heater to switch on and maintain the water temperature exactly the way you want, and ask your
smart air conditioner to switch on and cool the room.
The choices are limited only by your imagination. The two preceding scenarios correspond to consumer IoT—the
IoT with a focus on consumer-oriented applications. There also exists a large scope of Industry IoT (IIoT) where
manufacturers and industries optimize processes and implement remote monitoring capabilities to increase
productivity and efficiency. In this book, you'll find the hands-on experience with both IoT applications.

        `,},
          {
          id: "u8-IoT-reference-model",
          title: "IoT reference model",
          tags: ["IoT reference model"],
          content: `
          Just like the OSI reference model for the internet, IoT architecture is defined through six layers: four horizontal
          layers and two vertical layers. The two vertical layers are Management and Security and they're spread over all
          four horizontal layers
          The Device Layer: 
          At the bottom of the stack, we have the device layer, also called the perception layer. This
          layer contains the physical things needed to sense or control the physical world and acquire data (that is, by
          perceiving the physical world). Existing hardware, such as sensors, RFID, and actuators, constitutes the perception
          layer.
          The Network Layer: 
          This layer provides the networking support and transfer of data over either wired or wireless
          network. The layer securely transmits the information from the devices in the device layer to the information
          processing system. Both transmission Medium and Technology are part of the networking layer. Examples
          include 3G, UMTS, ZigBee, Bluetooth, Wi-Fi, and so on.
          The Service Layer: This layer is responsible for service management. It receives information from the network
          layer, stores it into the database, processes that information, and can make an automatic decision based on the
          results.
          The Application Layer: 
          This layer manages the applications dependent upon the information processed in the
          service layer. There's a wide range of applications that can be implemented by IoT: smart cities, smart farming,
          and smart homes, to name a few.

        `,},
          {
          id: "u8-IoT-platforms",
          title: "IoT platforms",
          tags: ["IoT platforms"],
          content: `Information from the network layer is often managed with the help of IoT platforms. Many companies today
          provide IoT platform services, where they help not only with data but also enable seamless integration with
          different hardware. Since they function as a mediator between the hardware and application layer, IoT platforms
          are also referred to as IoT middleware and are part of the service layer in the IoT reference stack. IoT platforms
          provide the ability to connect and communicate with things from anywhere in the world. In this book, we'll briefly
          cover some popular IoT platforms such as the Google Cloud Platform, Azure IoT, Amazon AWS IoT, Predix, and
          H2O.
          You can select which IoT platform is best for you based on the following criteria:
          Scalability: 
          Addition and deletion of new devices to the existing IoT network should be possible
          Ease of use: 
          The system should be perfectly working and delivering all its specifications with minimum
          intervention
          Third party integration: 
          Heterogeneous devices and protocols should be able to inter-network with each
          other
          Deployment options: 
          It should be workable on a broad variety of hardware devices and software platforms
          Data security:
           The security of data and devices is ensured
        `,},
          {
          id: "u8-IoT-verticals",
          title: "IoT verticals",
          tags: ["IoT verticals"],
          content: `A vertical market is a market in which vendors offer goods and services specific to an industry, trade, profession,
            or other groups of customers with specialized needs. IoT enables the possibility of many such verticals, and some
            of the top IoT verticals are as follows:
            Smart building: 
            Buildings with IoT technologies can help in not only reducing the consumption of
            resources but also improving the satisfaction of the humans living or working in them. The buildings have
            smart sensors that not only monitor resource consumption but can also proactively detect residents' needs.
            Data is collected via these smart devices and sensors to remotely monitor a building, energy, security,
            landscaping, HVAC, lighting, and so on. The data is then used to predict actions, which can be automated
            according to events and hence efficiency can be optimized, saving time, resources, and cost.
            Smart agriculture: 
            IoT can enable local and commercial farming to be more environmentally friendly,
            cost-effective, and production efficient. Sensors placed through the farm can help in automating the process
            of irrigation. It's predicted that smart agricultural practices will enable a manifold increase in productivity,
            and hence food resources.
            Smart city: 
            A smart city can be a city with smart parking, a smart mass transit system, and so on. A smart
            city has the capability to address traffic, public safety, energy management, and more for both its
            government and citizens. By using advanced IoT technologies, it can optimize the usage of the city
            infrastructure and quality of life for its citizens.
            Connected healthcare: 
            IoT enables critical business and patient monitoring decisions to be made remotely
            and in real time. Individuals carry medical sensors to monitor body parameters such as heartbeat, body
            temperature, glucose level, and so on. The wearable sensors, such as accelerometers and gyroscopes, can be
            used to monitor a person's daily activity.
            We'll be covering some of them as a case study in this book. The content of this book is focused on information
            processing and the applications being implemented on IoT and so we'll not be going into details of the devices,
            architecture, and protocols involved in IoT reference stacks any further.            
        `,},
        {
          id: "u8-IoT-robotics-html",
          title: "IoT & robotics",
          tags: ["IoT & robotics"],
          content: ` 
          1. H.V, S. (2023, May 29). IoT & robotics. https://www.linkedin.com/pulse/iot-robotics-shreyas-h-v/

          2. Miner, T. (2023, February 10). Sensors and actuators in robotics: 
          How they work. Ziva Robotics. https://www.zivarobotics.com/sensors-actuators-robotics-work/  
          3.Thompson, S. (2022, March 1). VR applications: 23 industries using virtual reality. 
          Virtual Speech. https://virtualspeech.com/blog/vr-applications
        `,},
       
      ]}
      ],
  videos: [
    {
      id: "u8-v-deadlock1",
      title: "What is Machine Learning?",
      description: "What is Machine Learning?",
      url: "https://www.youtube.com/watch?v=9gGnTQTYNaE",
      tags: ["What is Machine Learning?",],
      channel: "IBM Technology",
    }, {
      id: "u8-v-deadlock2",
      title: "Supervised vs Unsupervised vs Reinforcement Learning",
      description: "Supervised vs Unsupervised vs Reinforcement Learning",
      url: "https://www.youtube.com/watch?v=1FZ0A1QCMWc",
      tags: ["Supervised vs Unsupervised vs Reinforcement Learning",],
      channel: "Simplilearn",
    },
    {
      id: "u8-v-deadlock3",
      title: "Cloud computing in 6 minutes | What is cloud computing? | Cloud computing explained",
      description: "Cloud computing in 6 minutes | What is cloud computing? | Cloud computing explained",
      url: "https://www.youtube.com/watch?v=M988_fsOSWo",
      tags: ["Cloud computing in 6 minutes | What is cloud computing? | Cloud computing explained",],
      channel: "Simplilearn",
    },
     {
      id: "u8-v-deadlock4",
      title: "Cloud computing explained",
      description: "Cloud computing explained",
      url: "https://www.youtube.com/watch?v=_a6us8kaq0g",
      tags: ["Cloud computing explained",],
      channel: "PowerCert Animated Videos",
    },
     {
      id: "u8-v-deadlock5",
      title: "Big Data in 5 minutes | What is Big Data?| Big Data Analytics | Big Data Tutorial",
      description: "Big Data in 5 minutes | What is Big Data?| Big Data Analytics | Big Data Tutorial",
      url: "https://www.youtube.com/watch?v=bAyrObl7TYE",
      tags: ["Big Data in 5 minutes | What is Big Data?| Big Data Analytics | Big Data Tutorial",],
      channel: "Simplilearn",
    },
    {
      id: "u8-v-deadlock6",
      title: "Blockchain in 7 minutes | What is Blockchain | Blockchain Explained|How Blockchain Works",
      description: "Blockchain in 7 minutes | What is Blockchain | Blockchain Explained|How Blockchain Works",
      url: "https://www.youtube.com/watch?v=yubzJw0uiE4",
      tags: ["Blockchain in 7 minutes | What is Blockchain | Blockchain Explained|How Blockchain Works",],
      channel: "Simplilearn",
    },
      {
      id: "u8-v-deadlock7",
      title: "Internet of Things (IoT) in 10 minutes | What is IoT and how it works | Great learning",
      description: "Internet of Things (IoT) in 10 minutes | What is IoT and how it works | Great learning",
      url: "https://www.youtube.com/watch?v=Fj02iTrWUx0",
      tags: ["Internet of Things (IoT) in 10 minutes | What is IoT and how it works | Great learning",],
      channel: "Great Learning",
    },
      {
      id: "u8-v-deadlock8",
      title: "Smart Sensors & Actuators: Basics and Benefits in IIoT",
      description: "Smart Sensors & Actuators: Basics and Benefits in IIoT",
      url: "https://www.youtube.com/watch?v=i0_gJFYyb2g",
      tags: ["Smart Sensors & Actuators: Basics and Benefits in IIoT",],
      channel: "Mouser Electronics",
    },
     {
      id: "u8-v-deadlock9",
      title: "The promise of virtual reality in 2020 and beyond",
      description: "The promise of virtual reality in 2020 and beyond",
      url: "https://www.youtube.com/watch?v=aXN6Hc4K8T0",
      tags: ["The promise of virtual reality in 2020 and beyond",],
      channel: "Science Time",
    },
     {
      id: "u8-v-deadlock10",
      title: "What is AR and VR | Virtual reality and augmented reality explained | AR VR tutorial",
      description: "What is AR and VR | Virtual reality and augmented reality explained | AR VR tutorial",
      url: "https://www.youtube.com/watch?v=04AMaTsXFJU",
      tags: ["What is AR and VR | Virtual reality and augmented reality explained | AR VR tutorial",],
      channel: "Simplilearn",
    },
  ],
  pdfs: [
    {
      id: "u8-pdf-slides1",
      title: "Unit 8 — How Artificial Intelligence and Machine Learning Work ",
      description:
        "How Artificial Intelligence and Machine Learning Work ",
      file: "/unit-8/pp 43-73 AI_and_Machine_Learning_----_(3._How_Artificia.pdf",
    },
     {
      id: "u8-pdf-slides3",
      title: "Unit 8 — Cloud_Computing_Technology",
      description:
        "Cloud_Computing_Technology",
      file: "/unit-8/Cloud_Computing_Technology.pdf",
    },
     {
      id: "u8-pdf-slides4",
      title: "Unit 8 — Introduction_to_Blockchain",
      description:
        "Introduction_to_Blockchain",
      file: "/unit-8/Blockchain_Technology_and_Applications_----_(Chapter_1_Introduction_to_Blockchain).pdf",
    },
    {
      id: "u8-pdf-slides5",
      title: "IoT platforms,IoT reference model,IoT vertical model",
      description:
        "IoT platforms",
      file: "/unit-8/Hands-On_Artificial_Intelligence_for_IoT_Expert_Ma..._----_(Principles_and_Foundations_of_IoT_and_AI).pdf",
    },
   
   
  ],
};

export default unit8;
