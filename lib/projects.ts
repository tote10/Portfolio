export const projects = [
  {
    number: "01",
    title: "API Health Monitor",
    category: "Backend / Monitoring",
    repo: "api-monitor-health",
    description:
      "A self-hosted service for keeping track of HTTP endpoints. Scheduled checks record status, response times, and failures, with a web dashboard to inspect the history.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Docker"],
    detail:
      "Separate liveness and database readiness checks; SQLite or PostgreSQL storage.",
    type: "monitor",
  },
  {
    number: "02",
    title: "Stock & Property Management",
    category: "Full-stack / Institutional tools",
    repo: "Stock_Management_System",
    description:
      "An inventory application for university stores, covering goods receipts, requisitions, transfers, and fixed assets. A React interface connects to an Express API and PostgreSQL database.",
    technologies: ["React", "Express", "PostgreSQL"],
    detail:
      "Role-based workflows and stock ledgers connect the material lifecycle.",
    type: "stock",
  },
  {
    number: "03",
    title: "Driving School Management",
    category: "Web application / Administration",
    repo: "Driver-license-school-management-system",
    description:
      "A database-driven system for managing driving-school operations, from student enrollment and instructor assignments to training schedules, exams, and certificates.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    detail:
      "Dedicated portals for students, instructors, supervisors, managers, and administrators.",
    type: "school",
  },
] as const;
