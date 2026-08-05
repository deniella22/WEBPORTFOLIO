import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'medicore-ai',
    title: 'MediCore AI',
    subtitle: 'School Clinic Management System',
    category: 'Community Capstone & AI',
    shortDescription: 'A centralized school clinic management system designed to replace manual paper records and Excel files with instant medical history access, AI-assisted consultation summaries, soft-delete, and PIN authentication.',
    fullDescription: 'MediCore AI is a School Clinic Management System designed to improve the efficiency of managing student medical records in the school clinic. Instead of relying on separate paper folders and Excel files, the system centralizes student information into a single platform where clinic personnel can quickly access medical records, consultation history, follow-up schedules, and other essential information. To further support clinic personnel, the system includes an AI-assisted consultation summary that helps organize consultation history into a concise summary for easier review. It also incorporates security and accountability features, such as PIN authentication, activity logs, and soft-delete functionality, to help protect confidential student information.',
    tools: ['React', 'Gemini AI', 'Tailwind CSS', 'PIN Authentication', 'Soft-Delete Logs', 'Bolt.host'],
    iconName: 'rocket',
    year: '2026',
    location: 'Silang, Cavite',
    problem: 'During our observation of the existing workflow, we found that retrieving student medical records can become time-consuming because clinic personnel need to search through paper folders while also checking information stored in Excel files. Although these records are available, locating and verifying information from multiple sources may delay consultations, especially during busy clinic hours when several students require immediate attention. As a result, clinic personnel spend valuable time searching for records instead of focusing entirely on student care.',
    outcome: 'To address this challenge, our team developed MediCore AI. Rather than simply converting paper records into digital files, we designed a centralized clinic management system that supports the daily workflow of clinic personnel. The system organizes student information, consultation records, follow-up schedules, and clinic activities in one platform while providing AI-assisted consultation summaries and built-in security features to improve both efficiency and accountability.',
    role: 'Medical Asset Curation & Pitch Deck',
    responsibilities: [
      'Compiling and organizing clinic workflows to help define a clear and structured system process for the MediCore AI prototype.',
      'Gathering clinic workflows to support the organization of the system process.',
      'Preparing and managing feedback surveys to collect user opinions and support system evaluation and improvement.',
      'Developing and organizing pitch slides to effectively present the project during the defense.'
    ],
    teammates: [
      { name: 'Alianna Gem Abejero', role: 'UI/UX Prototyping & Web Layout', initials: 'Ali' },
      { name: 'Irish Dawn Baximen', role: 'AI Engine Programming', initials: 'RC' },
      { name: 'Joana Mae Cabasan', role: 'Database Design & Integration', initials: 'TM' },
      { name: 'Deniella A. Halili', role: 'Medical Asset Curation & Pitch Deck', initials: 'DH', isUser: true }
    ],
    timeline: [
      {
        step: '1',
        title: 'Research & Problem Identification',
        timeframe: 'Week 1',
        description: 'Conducted community surveys and identified the key challenges encountered in different sectors in the community.'
      },
      {
        step: '2',
        title: 'System Design & Planning',
        timeframe: 'Week 2',
        description: 'Focuses on designing and structuring the MediCore AI system, including UI/UX wireframes, system architecture, database planning, and workflow mapping to ensure a clear and organized solution.'
      },
      {
        step: '3',
        title: 'Prototyping & Refinement',
        timeframe: 'Week 3',
        description: 'Building and refining the MediCore AI prototype, including the development of core modules, UI interactions, system testing, and final polishing to prepare a fully functional and presentation-ready system.'
      }
    ],
    learnings: [
      {
        title: 'Community Impact',
        description: 'I learned that improving small processes in a school clinic system can create meaningful impact by helping clinic personnel serve students more efficiently.',
        iconName: 'heart-handshake'
      },
      {
        title: 'Teamwork & Collaboration',
        description: 'Working with a team developing a prototype taught me how to divide tasks effectively, communicate clearly, and align our work to build a unified system.',
        iconName: 'users'
      },
      {
        title: 'System Design Understanding',
        description: 'I gained experience in understanding how clinic workflows can be translated into a structured digital system, including modules like records, consultations, and follow-ups.',
        iconName: 'presentation'
      },
      {
        title: 'Time Management',
        description: 'Balancing the development of the prototype with academic responsibilities helped me improve my ability to manage time and meet deadlines efficiently.',
        iconName: 'lightbulb'
      },
      {
        title: 'Problem-Solving',
        description: 'I learned how to adapt the system design and features based on challenges and feedback to better match the needs of clinic operations.',
        iconName: 'target'
      }
    ],
    prototypeUrl: 'https://medicore-ai-student-7irn.bolt.host/'
  }
];
