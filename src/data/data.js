import record from "../assets/record.svg";
import refresh from "../assets/refresh.svg";
import send from "../assets/send.svg";
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: record,
    title: "Simple Screen Recording",
    content:
      "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
  },
  {
    id: "feature-2",
    icon: send,
    title: "Easy-to-Share URL",
    content:
      "Share your recordings instantly with a single link. No attachments, no downloads.",
  },
  {
    id: "feature-3",
    icon: refresh,
    title: "Revisit Recordings",
    content:
      "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
  },
];
export const feedback = [
  {
    id: "feedback-1",
    content:
      'Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.',
    step: "1",
    title: "Record Screen",
  },
  {
    id: "feedback-2",
    content:
      "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    step: "2",
    title: "Share Your Recording",
  },
  {
    id: "feedback-3",
    content:
      "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    step: "3",
    title: "Learn Effortlessly",
  },
];
export const footerLinks = [
  {
    title: "Menu",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Converter",
        link: "/",
      },
      {
        name: "How it Works",
        link: "/",
      },
    
    ],
  },
  {
    title: "About us",
    links: [
      {
        name: "About",
        link: "/",
      },
      {
        name: "Contact Us",
        link: "/",
      },
      {
        name: "Privacy Policy",
        link: "/",
      },
      
    ],
  },
  {
    title: "Screen Record",
    links: [
      {
        name: "Browser Window",
        link: "/",
      },
      {
        name: "Desktop",
        link: "/",
      },
      {
        name: "Application",
        link: "/",
      },
    ],
  },
];
