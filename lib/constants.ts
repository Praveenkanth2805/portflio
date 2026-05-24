// Environment variables with fallbacks
export const CONTACT_CONFIG = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ,
  github: process.env.NEXT_PUBLIC_GITHUB_URL ,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ,
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER 
    ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
    : "#",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ,
  contactEmailTo: process.env.CONTACT_EMAIL_TO ,
};

export const SITE_CONFIG = {
  name: "Praveenkanth G",
  title: "Full Stack Developer",
  description: "AI Assisted Full Stack Developer Portfolio — Python, Next.js, Freelancer",
  keywords: "Developer, Python, Freelancer, Next.js, Portfolio, Full Stack",
};