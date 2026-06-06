import portfolioImg from '@/assets/portfolio-square.png';
import isthereworkImg from '@/assets/istherework-square.png';
import handleitImg from '@/assets/handleit-square.png';
import tafebuddyImg from '@/assets/tafebuddy-square.png';

type ProjectLink = {
  label: string;
  source: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  tech: string[];
  liveLink?: string;
  sourceCodeLink?: string;
  otherLinks?: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: 'Online Portfolio',
    subtitle: '2024',
    description:
      "Yes - I added my portfolio to the list! I finally built a personal portfolio and will start coding outside of work. I plan to keep improving it over time and will be adding a blog, night mode, etc.",
    imageUrl: portfolioImg,
    tech: ['Vue', 'Tailwind', 'Typescript', 'Firebase'],
    sourceCodeLink: 'https://github.com/kathrynfieg/my-online-portfolio-2025',
  },
  {
    title: 'IsThereWorkToday',
    subtitle: '2024 • Mini Project',
    description:
      "A fun and quirky web app that checks if today is a public holiday in Australia based on your location! If it's not a holiday, it gives you a playful message and counts down to the next one, complete with cheeky encouragement and a random gif (thanks to the Giphy API).",
    imageUrl: isthereworkImg,
    tech: ['Vue', 'TypeScript', 'Vue query', 'Geolocation', 'LocationIQ API'],
    liveLink: 'https://istherework.today/',
    sourceCodeLink: 'https://github.com/kathrynfieg/isthereworktoday',
  },
  {
    title: 'Handleit Cleaning',
    subtitle: '2024',
    description:
      'Website built for our family-owned cleaning business, designed to showcase the services we offer in Adelaide. Built with Webflow and integrated with Booking Koala, it streamlines online bookings, payments, and reviews, providing a seamless experience for our customers.',
    imageUrl: handleitImg,
    tech: ['Webflow', 'BookingKoala', 'Canva'],
    liveLink: 'https://www.handleitcleaning.com.au/',
  },
  {
    title: 'TafeBuddy',
    subtitle: '2020 • Capstone project',
    description:
      'An oldie but a goodie: the TAFE SA Student Results View (SRV) app. I built this with two fellow student developers during my time at TAFE SA as part of our Capstone project. The app addresses the challenge of manually tracking student qualifications by providing a clear display of their progress and grades.',
    imageUrl: tafebuddyImg,
    tech: ['UWP', 'C#', 'XAML', 'MySQL'],
    sourceCodeLink: 'https://github.com/kathrynfieg/TafeBuddy_SRV_App',
    otherLinks: [
      {
        label: 'Preview clip',
        source: 'https://youtu.be/0Y-oiwLbFMA',
      },
    ],
  },
];
