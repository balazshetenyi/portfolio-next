export const experiences = [
  {
    title: "Senior Software Developer",
    company: "COSMIC – Wellcome Sanger Institute",
    location: "Cambridge, UK · Hybrid",
    period: "Nov 2024 – Present",
    description: [
      "Promoted for consistently exceeding expectations across technical delivery, team contribution, and mentoring junior developers.",
      "Led full-stack development of a document management system for research data ingestion, owning architecture decisions across a FastAPI/PostgreSQL backend and React frontend end-to-end from database schema through to UI.",
      "Designed an Elasticsearch sync architecture for full-text search across scientific documents, integrating two-phase S3 upload workflows with automatic indexing triggered via Celery task queues.",
      "Delivered a genomic data platform in Next.js/React and TypeScript with an AWS S3-backed secure download system using pre-signed URLs and Elasticsearch-powered curation workflows for cancer variant data.",
      "Mentored junior developers through code reviews, pair programming, and structured technical guidance.",
    ],
    stack:
      "React, TypeScript, Next.js, Python, FastAPI, SQLAlchemy, Alembic, Elasticsearch, Celery, Redis, PostgreSQL, AWS S3, Docker, GitLab CI",
  },
  {
    title: "Software Developer",
    company: "COSMIC – Wellcome Sanger Institute",
    location: "Cambridge, UK · Hybrid",
    period: "Nov 2022 – Nov 2024",
    description: [
      "Built and maintained a research data management platform using FastAPI, PostgreSQL, and Elasticsearch, with async background task pipelines via Celery/Redis for document ingestion, PubMed literature syncing, and S3 file management.",
      "Built full-stack curation tooling for cancer integration and actionability workflows, integrating a Django/OAuth backend with JWT token refresh, custom API client abstraction, and multi-step form validation.",
      "Delivered production-quality frontend infrastructure: Storybook component library, Jest/React Testing Library tests, auth flows, and GitLab CI with Husky pre-commit hooks on a large-scale bioinformatics web application.",
      "Contributed to async Python backend with SQLAlchemy async sessions, Alembic migrations, and Docker Compose orchestration supporting CI/CD deployment via GitLab.",
    ],
    stack:
      "React, TypeScript, Python, FastAPI, Django, PostgreSQL, Elasticsearch, Celery, Redis, AWS, Docker, GitLab CI, Jest, Storybook",
  },
  {
    title: "Web/Software Development Mentor (Part-Time)",
    company: "OpenClassrooms International",
    location: "UK · Remote",
    period: "Nov 2022 – Present",
    description: [
      "Mentored students through full-stack projects in JavaScript, React, and Node.js, guiding them from fundamentals to production-ready application architecture.",
      "Provided structured feedback on frontend and backend design, API integration, and deployment, with emphasis on scalability, clean code, and professional engineering practices.",
    ],
    stack: "JavaScript, TypeScript, React, Node.js, REST API, HTML, CSS",
  },
  {
    title: "Full-Stack Software Developer",
    company: "Passle Ltd.",
    location: "Oxford, UK · Hybrid",
    period: "May 2021 – Nov 2022",
    description: [
      "Delivered customer-facing features across a commercial SaaS platform using Angular, TypeScript, and C#.NET, contributing to a shared codebase across multiple product teams.",
      "Built secure, reliable full-stack solutions in close collaboration with product and design, developing strong foundations in agile delivery and cross-functional teamwork.",
    ],
    stack: "Angular, TypeScript, C#, .NET, MongoDB",
  },
];
