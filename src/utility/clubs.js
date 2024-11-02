const clubs = [
  {
    name: "Astronomy Club",
    image: "/images/club-images/astronomy-club.jpg",
    link: "https://www.ubcastronomyclub.com/",
    description:
      "A club dedicated to the exploration and discussion of astronomy and space science.",
  },
  {
    name: "Bachelor of Computer Science Student Association",
    image: "/images/club-images/bsc.png",
    link: "https://www.ubcbcs.ca/",
    description:
      "The official student organization for Bachelor of Computer Science students, providing resources and community.",
  },
  {
    name: "Biological Science Society (BIOSOC)",
    image: "/images/club-images/BIOSOC.webp",
    link: "https://www.zoology.ubc.ca/biosoc/blog/",
    description:
      "A society that connects students in the biological sciences through events and academic support.",
  },
  {
    name: "Biochemistry Student Association",
    image: "/images/club-images/biochemistry.png",
    link: "https://blogs.ubc.ca/biochemistryassociation/",
    description:
      "A society that connects students in the biological sciences through events and academic support.",
  },
  {
    name: "Cognitive Systems Society (CSS)",
    image: "/images/club-images/cognitive-systems.jpg",
    link: "http://www.ubccogssoc.ca/",
    description:
      "A society for students interested in cognitive systems, AI, and interdisciplinary studies.",
  },
  {
    name: "Computer Science Students Society (CSSS)",
    image: "/images/club-images/csss.webp",
    link: "https://ubccsss.org/",
    description:
      "The hub for computer science students, offering academic and social events, resources, and networking opportunities.",
  },
  {
    name: "Data Science Club",
    image: "/images/club-images/data-science.webp",
    link: "https://www.ubcdsci.club/home",
    description:
      "A club for data enthusiasts, offering workshops, talks, and projects in the field of data science.",
  },
  {
    name: "Undergraduate Mathematics Society (UMS)",
    image: "/images/club-images/ums-math.webp",
    link: "https://ums-ubc.com/",
    description:
      "A club dedicated to supporting women in computer science through mentorship, events, and resources.",
  },
  {
    name: "Environmental Science Students Association (ESSA)",
    image: "/images/club-images/ESSA.png",
    link: "https://essaubc.wixsite.com/earth",
    description:
      "An association for students passionate about environmental science, promoting sustainability and research.",
  },
  {
    name: "Geography Students’ Association",
    image: "/images/club-images/GSA.webp",
    link: "https://www.ubcgsa.ca/",
    description:
      "A community for geography students, organizing events and providing academic support.",
  },
  {
    name: "Microbiology and Immunology Students Association (MISA)",
    image: "/images/club-images/microbio.png",
    link: "https://ubcmisacontact.wixsite.com/ubcmisa",
    description:
      "A community for geography students, organizing events and providing academic support.",
  },
  {
    name: "Integrated Sciences Student Association (ISSA)",
    image: "/images/club-images/issa.jpeg",
    link: "http://ubc-issa.weebly.com/",
    description:
      "A community for geography students, organizing events and providing academic support.",
  },
  {
    name: "Pharmacology & CAPS Student Association (PCSA)",
    image: "/images/club-images/PCSA.webp",
    link: "https://linktr.ee/pcsaubc?fbclid=PAZXh0bgNhZW0CMTEAAaZqUl6uWUP8U8m4hr49EAJPcnHftdrAY7bfbCeugKsPKIXvRPHSQ04EGCc_aem_PFZe7vJFtnT3dWJ5qc4bwQ",
    description:
      "A society for pharmacology students, offering academic guidance and networking opportunities.",
  },
  {
    name: "Physics Society (PHYSSOC)",
    image: "/images/club-images/physics.png",
    link: "https://physsoc.phas.ubc.ca/",
    description:
      "A society for students interested in physics, offering resources and events to foster learning and collaboration.",
  },
  {
    name: "Science One Survivors (SOS)",
    image: "/images/club-images/science-one.png",
    description:
      "A support network for students who have completed the Science One program, offering community and resources.",
  },
  {
    name: "UBC Neuroscience Club",
    image: "/images/club-images/neuroscience.jpg",
    link: "https://ubcneuroscienceclub.wixsite.com/uncweb",
    description:
      "A club dedicated to neuroscience, providing talks, events, and opportunities for students interested in the brain.",
  },
  {
    name: "UBC - BCIT Biotechnology Club (BIOT)",
    image: "/images/club-images/bcitbiotech.webp",
    description:
      "A club for biotechnology students, offering networking, projects, and events related to biotech fields.",
  },
  {
    name: "Undergraduate Chemistry Society (UCS)",
    image: "/images/club-images/chemistry.jpg",
    link: "https://ucs.chem.ubc.ca/",
    description:
      "A society for chemistry students, providing academic support and organizing social events.",
  },
  {
    name: "Women in Data Science Club",
    image: "/images/club-images/wids.png",
    link: "https://www.ubcwids.com/",
    description:
      "A club empowering women in data science, offering workshops, mentorship, and networking opportunities.",
  },
  {
    name: "AMS Autism Associates Club (AAC)",
    image: "/images/club-images/AMS_AutismAssociatesClub.jpg",
    link: "https://amsclubs.ca/autism-associates/club/club-page/?preview=true",
    description:
      "A club focused on raising awareness and supporting individuals with autism through various initiatives.",
  },
  {
    name: "AMS Girls in STEAM",
    image: "/images/club-images/ams-girls-in-steam.png",
    link: "https://girlsinsteam.org/",
    description:
      "A club promoting the involvement of women in STEAM fields, offering events and networking opportunities.",
  },
  {
    name: "AMS Medical Genetics Club",
    image: "/images/club-images/MedicalGenetics.webp",
    link: "https://mggsa.ca/",
    description:
      "A club focused on the study of medical genetics, offering educational events and discussions.",
  },
  {
    name: "AMS Medical Ethics Club",
    image: "",
    description:
      "A club dedicated to discussing and exploring ethical issues in the medical field.",
  },
  {
    name: "Blood for Life",
    image: "/images/club-images/blood-for-life.jpg",
    link: "https://www.instagram.com/ubcbloodforlife/",
    description:
      "A club promoting blood donation and organizing blood drives to save lives.",
  },
  {
    name: "Canadian Liver Foundation (CLF)",
    image: "/images/club-images/CLF.webp",
    link: "https://www.instagram.com/ubc.clf/",
    description:
      "A club supporting liver health through awareness, fundraising, and educational initiatives.",
  },
  {
    name: "Friends of MSF (Doctors Without Borders)",
    image: "/images/club-images/fmsf.jpg",
    link: "https://www.instagram.com/friendsofmsfubc/",
    description:
      "A club supporting the work of Doctors Without Borders through awareness campaigns and fundraising events.",
  },
  {
    name: "Heart and Stroke Foundation Club (UBC HSF)",
    image: "/images/club-images/HSF.jpg",
    link: "http://ubchsf.22web.org/index.html",
    description:
      "A club dedicated to promoting heart health and preventing strokes through various initiatives.",
  },
  {
    name: "Humanities in Healthcare",
    image: "/images/club-images/humanities-in-healthcare.png",
    link: "https://www.ubchih.com/",
    description:
      "A club exploring the intersection of humanities and healthcare, offering discussions and events.",
  },
  {
    name: "nwPlus",
    image: "/images/club-images/nwplus.webp",
    link: "https://nwplus.io/",
    description:
      "A club focused on technology and innovation, organizing hackathons and tech events.",
  },
  {
    name: "Pre-Dental Society",
    image: "/images/club-images/pre-dental.png",
    link: "https://ubcpredent.wixsite.com/home",
    description:
      "A society for students interested in pursuing a career in dentistry, offering guidance and resources.",
  },
  {
    name: "Psychology Student's Association (PSA)",
    image: "/images/club-images/psychology.png",
    link: "https://psa.psych.ubc.ca/",
    description:
      "A society for students interested in pursuing a career in dentistry, offering guidance and resources.",
  },
  {
    name: "Pre-Optometry Society",
    image: "/images/club-images/Pre-Optometry.jpg",
    link: "https://www.instagram.com/ubc.preoptometry/",
    description:
      "A society for students aspiring to enter the field of optometry, providing resources and networking.",
  },
  {
    name: "Project PATHS",
    image: "/images/club-images/ubc-paths.png",
    link: "https://www.ubcpaths.com/",
    description:
      "A club focused on public health initiatives, particularly in underserved communities.",
  },
  {
    name: "STEM Fellowship",
    image: "/images/club-images/stem-fellowship.jpg",
    link: "https://live.stemfellowship.org/",
    description:
      "A fellowship program promoting STEM education and research opportunities for students.",
  },
  {
    name: "Third World Eye Care Society (TWECS)",
    image: "/images/club-images/third-world-eyecare.png",
    link: "https://www.twecs.ca/",
    description:
      "A society dedicated to improving eye care in developing countries through fundraising and outreach.",
  },
  {
    name: "UBC AI Club",
    image: "",
    description:
      "A club for AI enthusiasts, offering projects, workshops, and discussions on artificial intelligence.",
  },
  {
    name: "UBC Cancer Association",
    image: "/images/club-images/Cancer_Association.webp",
    link: "https://www.instagram.com/ubc_ca/",
    description:
      "A club dedicated to raising awareness and supporting cancer research through events and fundraising.",
  },
  {
    name: "UBC iGEM",
    image: "/images/club-images/igem.png",
    link: "https://ubcigem.com/",
    description:
      "A club focused on synthetic biology, participating in the iGEM competition and related projects.",
  },
  {
    name: "UBC Operation Smile",
    image: "/images/club-images/Operation_Smile.webp",
    link: "https://linktr.ee/ubcoperationsmile",
    description:
      "A club supporting the global charity Operation Smile, which provides surgeries for children with cleft conditions.",
  },
  {
    name: "UBC Transplant Club",
    image: "",
    description:
      "A club raising awareness about organ donation and supporting transplant patients and research.",
  },
  {
    name: "unboundED UBC",
    image: "/images/club-images/unboundED.webp",
    link: "https://ubcunbounded.weebly.com/",
    description:
      "A club dedicated to empowering students through education and community outreach.",
  },
  {
    name: "Undergraduate Research Opportunities (URO)",
    image: "/images/club-images/URO.webp",
    link: "https://www.uroubc.com/",
    description:
      "A club promoting research opportunities for undergraduates across various disciplines.",
  },
  {
    name: "Vaccine Literacy Club",
    image: "/images/club-images/ams-vaccine-literacy.png",
    link: "https://www.ubcvaccine.club/",
    description:
      "A club focused on promoting vaccine education and awareness, combating misinformation.",
  },
  {
    name: "Women in Science Club (WiS)",
    image: "/images/club-images/WIS.webp",
    link: "https://amsclubs.ca/women-in-science-club/",
    description:
      "A club empowering women in science, providing mentorship, networking, and educational opportunities.",
  },
  {
    name: "Women in Computer Science (WICS)",
    image: "/images/club-images/wics.png",
    link: "https://ubcwics.com/",
    description:
      "A club dedicated to supporting women in computer science through mentorship, events, and resources.",
  },
  {
    name: "Quantum Club",
    image: "/images/club-images/quantum.png",
    link: "https://www.ubcquantum.com/",
    description:
      "A club dedicated to supporting women in computer science through mentorship, events, and resources.",
  },
  {
    name: "Undergraduate Statistics Society (USS)",
    image: "/images/club-images/stats.jpg",
    link: "https://ubcundergraduatestatisticssociety.github.io/website/",
    description:
      "A club dedicated to supporting women in computer science through mentorship, events, and resources.",
  },
  {
    name: "AMS UBC Synapse",
    image: "/images/club-images/ubc-synapse.png",
    link: "https://amsclubs.ca/ubc-synapse/",
    description:
      "A club dedicated to supporting women in computer science through mentorship, events, and resources.",
  },
];

export default clubs;
