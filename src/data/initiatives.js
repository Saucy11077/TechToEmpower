// Content for the five initiative pages. Each page imports its slice and feeds
// the shared InitiativeLayout. Keeping copy here keeps the template DRY.

export const initiatives = {
  help_in_india: {
    slug: 'help_in_india',
    pageTitle: 'STEM in India',
    region: 'India · International',
    heroImage: '/assets/images/india-hero.webp',
    opening: 'Taking FIRST robotics into rural Indian classrooms that had never seen a robot before.',
    problem:
      'Most students in rural Indian schools have no access to hands-on STEM. FIRST was virtually unknown in these communities.',
    did: [
      'Partnered with Village Technology Schools (VTS).',
      'Introduced FIRST to 5,000+ students across 5 rural schools in Tamil Nadu.',
      'Sent 9 3D printers, creating 5 makerspaces.',
      'Started 5 FTC teams: 25228, 25229, 25230, 25231, 25232.',
      'Fully funded 2 teams — registration, parts, and travel.',
      'Hosted multiple online bootcamps for robot building.',
    ],
    stats: [
      { value: '5,000+', label: 'students reached' },
      { value: '9', label: '3D printers' },
      { value: '5', label: 'FTC teams' },
      { value: '2', label: 'fully funded' },
    ],
    gallery: [
      '/assets/images/india-1.webp',
      '/assets/images/india-2.webp',
      '/assets/images/india-3.webp',
      '/assets/images/india-4.webp',
      '/assets/images/india-5.webp',
      '/assets/images/india-6.webp',
      '/assets/images/india-7.webp',
    ],
    next: 'Expanding our partnership with VTS to reach more districts and sustain the teams we have already started.',
  },

  neurodiversity_in_first: {
    slug: 'neurodiversity_in_first',
    pageTitle: 'Neurodiversity in FIRST',
    region: 'Texas · LISD',
    heroImage: '/assets/images/neuro-hero.jpg',
    opening:
      'Making FIRST genuinely accessible for neurodiverse students — not just permitted, but truly welcoming.',
    problem:
      'Neurodiverse students are underrepresented in STEM programs. The barrier isn’t ability — it’s environment and communication.',
    did: [
      'Started FIRST Access in LISD — 7 dedicated teams for neurodiverse and physically disabled students.',
      'Mentored students weekly throughout the season.',
      'Advocated to the LISD CTE Board for program integration.',
      'Collaborated with FIRST in Texas.',
      'Worked with researchers: Dr. Stasik (Vanderbilt), Dr. Grandin (University of Illinois), Dr. Harrison (University of Melbourne), and Mr. Bernstein (published author).',
      'Mentored FTC team 15477 through the Neurodiversity Education Research Center.',
      'Hosted an FLL Mock Scrimmage — 8 teams attended.',
    ],
    stats: [
      { value: '7', label: 'FIRST Access teams' },
      { value: '4', label: 'university research partners' },
      { value: '1', label: 'FLL scrimmage' },
      { value: '40+', label: 'students reached' },
    ],
    gallery: [
      '/assets/images/neuro-1.jpg',
      '/assets/images/neuro-2.jpg',
      '/assets/images/neuro-3.jpg',
      '/assets/images/neuro-4.jpg',
      '/assets/images/neuro-5.jpg',
      '/assets/images/neuro-6.jpg',
    ],
    quote: {
      text: 'I did not know that I was capable of doing something in this field; this has shown me I can and grow up to do great things.',
      attribution: 'Burhan, First Access student',
    },
    next: 'Developing a mentor-connection app and a video resource library for neurodiverse-focused teams nationwide.',
  },

  diwali_fundraising: {
    slug: 'diwali_fundraising',
    pageTitle: 'Cultural Fundraising',
    region: 'DFW · Community',
    heroImage: '/assets/images/cultural-hero.jpg',
    opening: 'We took our robot everywhere — and let curiosity do the rest.',
    problem:
      'FIRST is one of the most transformative youth programs in the world, but most people have never heard of it.',
    did: [
      'Ran a STEM booth at a Diwali event: 10,000+ attendees, robot demos, driver control for kids.',
      'Hosted a FIRST Awareness Event at FMHS: 300+ students, started FTC team 32164.',
      'Visited 11 elementary schools across DFW, connecting with 1,000+ students and parents.',
      'Showcased FIRST at the FMHS Open House to recruit new members.',
      'Hosted an FLL Mock Scrimmage: 8 teams in a full competition setting.',
      'Hosted a Last Call Qualifier at FMHS: 28 teams in attendance.',
      'Taught at 8 Wize Academy summer camps: 200+ students learning CAD, programming, and LEGO robotics.',
      'Ran the annual Tech Club Summer Camp at FMHS: 200+ students, helping raise $20,000 for the school club.',
      'Donated computers to the GRACE donation center for underprivileged students in Dallas.',
    ],
    stats: [
      { value: '10,000+', label: 'Diwali attendees' },
      { value: '300+', label: 'at FIRST Awareness Event' },
      { value: '11', label: 'elementary schools' },
      { value: '1,000+', label: 'students reached' },
    ],
    gallery: [
      '/assets/images/cultural-1.jpg',
      '/assets/images/cultural-2.jpg',
      '/assets/images/cultural-3.jpg',
      '/assets/images/cultural-4.jpg',
      '/assets/images/cultural-5.jpg',
      '/assets/images/cultural-6.jpg',
    ],
    quote: {
      text: 'We put the robot on the floor, handed a kid the controller, and watched everything change.',
    },
    next: 'Expanding our community presence across more DFW cultural and civic events.',
  },

  makerspaces_in_jamaica: {
    slug: 'makerspaces_in_jamaica',
    pageTitle: 'Makerspaces in Jamaica',
    region: 'Jamaica · International',
    heroImage: '/assets/images/jamaica-hero.jpg',
    opening:
      'Four printers. Fifty teams. The math is simple — what those teams can build now is anything but.',
    problem:
      'Most FTC teams in Jamaica have little to no funding, and the few teams that do have investment behind them are far and few between. Without access to a 3D printer, the rest are left without custom parts or rapid prototyping. By placing printers in college makerspaces, every team can now use them, not just the ones who could afford their own.',
    did: [
      'Coordinated with Jamaica’s FIRST Program Development Partner.',
      'Financed and shipped 4 3D printers and 16 filaments to designated makerspaces.',
      'Gave 50+ Jamaican FTC teams access to 3D printing for the first time.',
      'Hosted multiple online bootcamps for robot building and CAD.',
    ],
    stats: [
      { value: '4', label: '3D printers' },
      { value: '16', label: 'filaments' },
      { value: '50+', label: 'FTC teams' },
      { value: 'PDP', label: 'Jamaican partnership' },
    ],
    gallery: [
      '/assets/images/jamaica-1.jpg',
      '/assets/images/jamaica-2.jpg',
      '/assets/images/jamaica-3.jpg',
      '/assets/images/jamaica-4.jpg',
      '/assets/images/jamaica-5.jpg',
      '/assets/images/jamaica-6.jpg',
      '/assets/images/jamaica-7.jpg',
      '/assets/images/jamaica-8.jpg',
      '/assets/images/jamaica-9.jpg',
    ],
    quote: {
      text: 'Fifty teams. Four printers. Every one of them can now build what they imagine.',
    },
    next: 'Expanding the makerspace program and exploring filament supply partnerships.',
  },

  nexus: {
    slug: 'nexus',
    pageTitle: 'NEXUS',
    region: 'Girls in STEM',
    heroImage: '/assets/images/nexus-hero.jpg',
    opening:
      'A Girls in STEM program built by the Pro2type team — because girls deserve more than an afterthought.',
    problem:
      'Girls are underrepresented in robotics programs. NEXUS exists to change that with a program built specifically around them.',
    did: [
      'Created NEXUS — Next Engineers eXploring and United in Stem.',
      'Launched January 7, 2026.',
      'Runs online and in-person meetings, mentorship, skill-building, and collaboration.',
      'Built by Pro2type (FTC Team 21813).',
    ],
    stats: [
      { value: 'Jan 2026', label: 'launched' },
      { value: 'Girls', label: 'in STEM' },
      { value: '21813', label: 'Pro2type initiative' },
      { value: 'Growing', label: 'and expanding' },
    ],
    gallery: [],
    galleryNote: 'Photos coming soon.',
    quote: {
      text: 'NEXUS isn’t a side program. It’s a signal that girls belong at the center of this.',
    },
    next: 'Growing the program, hosting upcoming events, and bringing on more mentors.',
  },
};
