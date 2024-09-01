const clubs = [
  {
    name: "Astronomy Club",
    image: "/images/club-images/astronomy-club.jpg",
    description: "A club dedicated to the exploration and discussion of astronomy and space science."
  },
  {
    name: "Bachelor of Computer Science Student Association",
    image: "/images/club-images/bsc.png",
    description: "The official student organization for Bachelor of Computer Science students, providing resources and community."
  },
  {
    name: "Biological Science Society (BIOSOC)",
    image: "",
    description: "A society that connects students in the biological sciences through events and academic support."
  },
  {
    name: "Biochemistry Student Association",
    image: "",
    description: "A society that connects students in the biological sciences through events and academic support."
  },
  {
    name: "Cognitive Systems Society (CSS)",
    image: "/images/club-images/cognitive-systems.jpg",
    description: "A society for students interested in cognitive systems, AI, and interdisciplinary studies."
  },
  {
    name: "Computer Science Students Society (CSSS)",
    image: "/images/club-images/csss.webp",
    description: "The hub for computer science students, offering academic and social events, resources, and networking opportunities."
  },
  {
    name: "Data Science Club",
    image: "/images/club-images/data-science.webp",
    description: "A club for data enthusiasts, offering workshops, talks, and projects in the field of data science."
  },
  {
    name: "Undergraduate Mathematics Society (UMS)",
    image: "/images/club-images/ums-math.webp",
    description: "A club dedicated to supporting women in computer science through mentorship, events, and resources."
  },
  {
    name: "Environmental Science Students Association (ESSA)",
    image: "",
    description: "An association for students passionate about environmental science, promoting sustainability and research."
  },
  {
    name: "Geography Students’ Association",
    image: "",
    description: "A community for geography students, organizing events and providing academic support."
  },
  {
    name: "Microbiology and Immunology Students Association (MISA)",
    image: "/images/club-images/microbio.png",
    description: "A community for geography students, organizing events and providing academic support."
  },
  {
    name: "Integrated Sciences Student Association (ISSA)",
    image: "",
    description: "A community for geography students, organizing events and providing academic support."
  },
  {
    name: "Pharmacology & CAPS Student Association (PCSA)",
    image: "",
    description: "A society for pharmacology students, offering academic guidance and networking opportunities."
  },
  {
    name: "Physics Society (PHYSSOC)",
    image: "/images/club-images/physics.png",
    description: "A society for students interested in physics, offering resources and events to foster learning and collaboration."
  },
  {
    name: "Science One Survivors (SOS)",
    image: "/images/club-images/science-one.png",
    description: "A support network for students who have completed the Science One program, offering community and resources."
  },
  {
    name: "UBC Neuroscience Club",
    image: "/images/club-images/neuroscience.jpg",
    description: "A club dedicated to neuroscience, providing talks, events, and opportunities for students interested in the brain."
  },
  {
    name: "UBC - BCIT Biotechnology Club (BIOT)",
    image: "",
    description: "A club for biotechnology students, offering networking, projects, and events related to biotech fields."
  },
  {
    name: "Undergraduate Chemistry Society (UCS)",
    image: "/images/club-images/chemistry.jpg",
    description: "A society for chemistry students, providing academic support and organizing social events."
  },
  {
    name: "Women in Data Science Club",
    image: "/images/club-images/wids.png",
    description: "A club empowering women in data science, offering workshops, mentorship, and networking opportunities."
  },
  {
    name: "AMS Autism Associates Club (AAC)",
    image: "",
    description: "A club focused on raising awareness and supporting individuals with autism through various initiatives."
  },
  {
    name: "AMS Girls in STEAM",
    image: "/images/club-images/ams-girls-in-steam.png",
    description: "A club promoting the involvement of women in STEAM fields, offering events and networking opportunities."
  },
  {
    name: "AMS Medical Genetics Club",
    image: "",
    description: "A club focused on the study of medical genetics, offering educational events and discussions."
  },
  {
    name: "AMS Medical Ethics Club",
    image: "",
    description: "A club dedicated to discussing and exploring ethical issues in the medical field."
  },
  {
    name: "Blood for Life",
    image: "/images/club-images/blood-for-life.jpg",
    description: "A club promoting blood donation and organizing blood drives to save lives."
  },
  {
    name: "Canadian Liver Foundation (CLF)",
    image: "",
    description: "A club supporting liver health through awareness, fundraising, and educational initiatives."
  },
  {
    name: "Friends of MSF (Doctors Without Borders)",
    image: "/images/club-images/fmsf.jpg",
    description: "A club supporting the work of Doctors Without Borders through awareness campaigns and fundraising events."
  },
  {
    name: "Heart and Stroke Foundation Club (UBC HSF)",
    image: "",
    description: "A club dedicated to promoting heart health and preventing strokes through various initiatives."
  },
  {
    name: "Humanities in Healthcare",
    image: "/images/club-images/humanities-in-healthcare.png",
    description: "A club exploring the intersection of humanities and healthcare, offering discussions and events."
  },
  {
    name: "nwPlus",
    image: "/images/club-images/nwplus.webp",
    description: "A club focused on technology and innovation, organizing hackathons and tech events."
  },
  {
    name: "Pre-Dental Society",
    image: "/images/club-images/pre-dental.png",
    description: "A society for students interested in pursuing a career in dentistry, offering guidance and resources."
  },
  {
    name: "Psychology Student's Association (PSA)",
    image: "/images/club-images/psychology.png",
    description: "A society for students interested in pursuing a career in dentistry, offering guidance and resources."
  },
  {
    name: "Pre-Optometry Society",
    image: "",
    description: "A society for students aspiring to enter the field of optometry, providing resources and networking."
  },
  {
    name: "Project PATHS",
    image: "/images/club-images/ubc-paths.png",
    description: "A club focused on public health initiatives, particularly in underserved communities."
  },
  {
    name: "STEM Fellowship",
    image: "/images/club-images/stem-fellowship.jpg",
    description: "A fellowship program promoting STEM education and research opportunities for students."
  },
  {
    name: "Third World Eye Care Society (TWECS)",
    image: "/images/club-images/third-world-eyecare.png",
    description: "A society dedicated to improving eye care in developing countries through fundraising and outreach."
  },
  {
    name: "UBC AI Club",
    image: "",
    description: "A club for AI enthusiasts, offering projects, workshops, and discussions on artificial intelligence."
  },
  {
    name: "UBC Cancer Association",
    image: "",
    description: "A club dedicated to raising awareness and supporting cancer research through events and fundraising."
  },
  {
    name: "UBC iGEM",
    image: "/images/club-images/igem.png",
    description: "A club focused on synthetic biology, participating in the iGEM competition and related projects."
  },
  {
    name: "UBC Operation Smile",
    image: "",
    description: "A club supporting the global charity Operation Smile, which provides surgeries for children with cleft conditions."
  },
  {
    name: "UBC Transplant Club",
    image: "",
    description: "A club raising awareness about organ donation and supporting transplant patients and research."
  },
  {
    name: "unboundED UBC",
    image: "",
    description: "A club dedicated to empowering students through education and community outreach."
  },
  {
    name: "Undergraduate Research Opportunities (URO)",
    image: "",
    description: "A club promoting research opportunities for undergraduates across various disciplines."
  },
  {
    name: "Vaccine Literacy Club",
    image: "/images/club-images/ams-vaccine-literacy.png",
    description: "A club focused on promoting vaccine education and awareness, combating misinformation."
  },
  {
    name: "Women in Science Club (WiS)",
    image: "",
    description: "A club empowering women in science, providing mentorship, networking, and educational opportunities."
  },
  {
    name: "Women in Computer Science (WICS)",
    image: "/images/club-images/wics.png",
    description: "A club dedicated to supporting women in computer science through mentorship, events, and resources."
  },
  {
    name: "Quantum Club",
    image: "/images/club-images/quantum.png",
    description: "A club dedicated to supporting women in computer science through mentorship, events, and resources."
  },
  {
    name: "Undergraduate Statistics Society (USS)",
    image: "/images/club-images/stats.jpg",
    description: "A club dedicated to supporting women in computer science through mentorship, events, and resources."
  },
  {
    name: "AMS UBC Synapse",
    image: "/images/club-images/ubc-synapse.png",
    description: "A club dedicated to supporting women in computer science through mentorship, events, and resources."
  },
];

export default clubs;