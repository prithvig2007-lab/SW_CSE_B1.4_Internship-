export const categories = ['all', 'web', 'iot', 'hardware'];

export const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal developer portfolio',
    longDesc:
      'A responsive React portfolio showcasing my projects, technical skills, education, and contact information with a clean and modern user interface.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'web',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'RFID Attendance System',
    description: 'Arduino-based smart attendance system',
    longDesc:
      'An IoT-based attendance management system developed using Arduino and RFID technology. Students can mark attendance by scanning their RFID cards, and the system records attendance accurately while reducing manual effort.',
    tech: ['Arduino', 'RFID', 'C++', 'Embedded Systems'],
    category: 'iot',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Smart Toll Booth System',
    description: 'Automated toll collection prototype',
    longDesc:
      'A smart toll booth prototype developed for a hackathon that automates vehicle identification and toll collection using RFID technology, reducing waiting time and improving traffic flow.',
    tech: ['Arduino', 'RFID', 'Embedded C', 'Sensors'],
    category: 'hardware',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  }
];