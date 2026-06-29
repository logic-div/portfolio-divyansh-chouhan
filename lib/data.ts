/**
 * ──────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT  —  Edit everything here to personalise the portfolio.
 *  All copy, links, images and lists are placeholders. Replace freely.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Divyansh Singh Chouhan',
  firstName: 'Divyansh',
  role: 'AI / ML Engineer',
  // Phrases used by the typing animation in the hero section
  typed: [
    'AI & Machine Learning Engineer',
    'Computer Science Engineering Student',
    'Deep Learning Enthusiast',
    'Data Science Practitioner',
  ],
  tagline:
    'Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I build intelligent systems that turn data into meaningful, real-world impact.',
  avatar: '/profile-cropped.png',
  resumeUrl: '/resume.pdf', // place your resume PDF in /public
  location: 'Indore, Madhya Pradesh, India',
  email: 'divyanshc2305@gmail.com',
  phone: '+91 9691939471',
  socials: {
    github: 'https://github.com/logic-div',
    linkedin: 'https://www.linkedin.com/in/divyansh-singh-chouhan-4a6713367',
    twitter: 'https://x.com/logic_div',
  },
}

export const about = {
  bio: [
    'I am a Computer Science Engineering student with a deep passion for Artificial Intelligence and Machine Learning. I love exploring how intelligent systems can learn from data to solve complex, real-world problems.',
    'My work sits at the intersection of research and engineering — designing models, building robust data pipelines, and shipping production-ready applications that are fast, accessible and elegant.',
  ],
  goals:
    'My goal is to contribute to impactful AI research and engineering at a world-class organization, building systems that are responsible, scalable and human-centered.',
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Software Engineering',
  ],
}

export type SkillGroup = {
  category: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 90 },
      { name: 'XGBoost', level: 82 },
      { name: 'Feature Engineering', level: 85 },
      { name: 'Model Evaluation', level: 88 },
    ],
  },
  {
    category: 'Deep Learning',
    skills: [
      { name: 'PyTorch', level: 88 },
      { name: 'TensorFlow', level: 82 },
      { name: 'Transformers', level: 80 },
      { name: 'CNNs / RNNs', level: 85 },
    ],
  },
  {
    category: 'Data Science',
    skills: [
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 90 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Statistics', level: 84 },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 86 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Node.js', level: 80 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Jupyter', level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS', level: 78 },
      { name: 'Vercel', level: 88 },
      { name: 'GCP', level: 72 },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'CI/CD', level: 76 },
    ],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'NLP Assistant — Conversational AI',
    description:
      'A transformer-based conversational assistant with retrieval-augmented generation, semantic search and a streaming chat interface.',
    image: '/projects/nlp-assistant.png',
    tech: ['Transformers', 'LangChain', 'Next.js', 'Pinecone'],
    github: 'https://github.com/logic-div/nlp-assistant',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Insight — Data Science Platform',
    description:
      'An end-to-end analytics platform that ingests, cleans and visualizes large datasets with automated ML-driven insights and forecasting.',
    image: '/projects/data-platform.png',
    tech: ['Pandas', 'Plotly', 'PostgreSQL', 'Streamlit'],
    github: 'https://github.com/logic-div/insight',
    demo: 'https://example.com',
  },
  {
    title: 'MLOps Pipeline — Model Deployment',
    description:
      'A production-grade ML pipeline with automated training, versioning, monitoring and continuous deployment to the cloud.',
    image: '/projects/ml-pipeline.png',
    tech: ['Docker', 'MLflow', 'AWS', 'GitHub Actions'],
    github: 'https://github.com/logic-div/mlops-pipeline',
    demo: 'https://example.com',
  },
]

export type TimelineItem = {
  title: string
  org: string
  period: string
  description: string
  tags?: string[]
}

export const experience: TimelineItem[] = [
  {
    title: 'Machine Learning Intern',
    org: 'Tech Company',
    period: '2025 — Present',
    description:
      'Built and deployed ML models for production, improving prediction accuracy by 18% and automating data pipelines used across teams.',
    tags: ['Python', 'PyTorch', 'AWS'],
  },
  {
    title: 'Undergraduate Research Assistant',
    org: 'University AI Lab',
    period: '2024 — 2025',
    description:
      'Conducted research on deep learning for computer vision, co-authoring a paper and presenting results at a college symposium.',
    tags: ['Research', 'Deep Learning', 'CV'],
  },
  {
    title: 'Hackathon Winner',
    org: 'National AI Hackathon',
    period: '2025',
    description:
      'Led a team of four to build an AI-powered accessibility tool, winning first place among 200+ teams.',
    tags: ['Teamwork', 'Prototyping'],
  },
  {
    title: 'Technical Lead — Coding Club',
    org: 'College',
    period: '2024 — 2025',
    description:
      'Organized workshops on ML and web development, mentoring 50+ students and leading collaborative open-source projects.',
    tags: ['Leadership', 'Mentorship'],
  },
]

export const education: TimelineItem[] = [
  {
    title: 'B.Tech Computer Science Engineering (AI & ML)',
    org: 'Acropolis Institute of Technology and Research',
    period: '2024 — 2028',
    description:
      'Specialization in Artificial Intelligence and Machine Learning. Relevant coursework: Deep Learning, NLP, Data Structures, Statistics.',
  },
  {
    title: 'Higher Secondary (Science)',
    org: 'Your School',
    period: '2020 — 2022',
    description:
      'Graduated with distinction in Physics, Chemistry, Mathematics and Computer Science.',
  },
]

export type Certification = {
  title: string
  issuer: string
  date: string
  url: string
}

export const certifications: Certification[] = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2024',
    url: 'https://example.com',
  },
  {
    title: 'Machine Learning',
    issuer: 'Stanford Online',
    date: '2025',
    url: 'https://example.com',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2024',
    url: 'https://example.com',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    url: 'https://example.com',
  },
  {
    title: 'Data Science Professional',
    issuer: 'IBM',
    date: '2025',
    url: 'https://example.com',
  },
  {
    title: 'Applied Data Science with Python',
    issuer: 'University of Michigan',
    date: '2025',
    url: 'https://example.com',
  },
]

export const achievements = [
  { value: 25, suffix: '+', label: 'Projects Built' },
  { value: 12, suffix: '+', label: 'Certifications' },
  { value: 5, suffix: '', label: 'Hackathons Won' },
  { value: 500, suffix: '+', label: 'GitHub Commits' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
