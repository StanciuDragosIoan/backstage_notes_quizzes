const quizData = [
  {
    question: 'What are the three core entities in the Backstage system model?',
    options: [
      'Components, APIs, Users',
      'Components, APIs, Resources',
      'Systems, Domains, Locations',
      'Groups, Users, Templates',
    ],
    correct: [1],
    explanation:
      'The three core entities in Backstage are Components (software pieces), APIs (boundaries between components), and Resources (infrastructure).',
  },
  {
    question: 'Which of the following best describes a component?',
    options: [
      'A collection of APIs and systems',
      'A piece of software, such as a backend service, web site, or data pipeline',
      'An organizational unit like a team or business unit',
      'A template used in the scaffolding wizard',
    ],
    correct: [1],
    explanation:
      'A component is a piece of software that can implement or consume APIs, and may depend on resources at runtime.',
  },
  {
    question: 'What is the primary purpose of an API in Backstage?',
    options: [
      'To store and manage physical infrastructure',
      'To form boundaries between components and allow scalable discovery of functionality',
      'To track employee activities in an organization',
      'To define templates for scaffolding new projects',
    ],
    correct: [1],
    explanation:
      'APIs are first-class entities in Backstage. They form boundaries between components and enable the discovery and integration of existing functionality.',
  },
  {
    question: 'Which of the following is an example of a resource?',
    options: [
      'A backend service exposing GraphQL',
      'A BigTable database or S3 bucket',
      'A group of developers',
      'A domain like Payments or Ads',
    ],
    correct: [1],
    explanation:
      'Resources represent the infrastructure a component needs to operate at runtime, such as databases, messaging systems, or CDNs.',
  },
  {
    question: 'What is the role of a system in Backstage?',
    options: [
      'A single component with multiple APIs',
      'A collection of components and resources exposing one or several public APIs, hiding implementation details from consumers',
      'A domain grouping multiple organizations',
      'A template for scaffolding new components',
    ],
    correct: [1],
    explanation:
      'A system abstracts complexity by grouping components and resources, exposing only public APIs to consumers and allowing evolution of its implementation.',
  },
  {
    question: 'Which statement about domains is true?',
    options: [
      'Domains group systems that share business purpose, terminology, or metrics',
      'Domains are individual software components',
      'Domains represent physical infrastructure like servers or databases',
      'Domains are templates used for scaffolding',
    ],
    correct: [0],
    explanation:
      'Domains group related systems that share terminology, entity models, KPIs, or business goals, forming a bounded context.',
  },
  {
    question: 'Which of the following is NOT an organizational entity?',
    options: ['User', 'Group', 'Component', 'All are organizational entities'],
    correct: [2],
    explanation:
      'Components are software entities, not organizational entities. Organizational entities include Users and Groups.',
  },
  {
    question: 'What is a location in Backstage?',
    options: [
      'A grouping of systems into a domain',
      'A marker referencing other places to look for catalog data',
      'A resource like a database or CDN',
      'An API endpoint',
    ],
    correct: [1],
    explanation:
      'Locations in Backstage point to external sources of catalog data, such as Git repositories or cloud resources.',
  },
  {
    question: 'Which statement about templates is correct?',
    options: [
      'Templates describe APIs exposed by components',
      'Templates describe parameters for scaffolding and steps executed to create a component',
      'Templates group resources in a system',
      'Templates define organizational units',
    ],
    correct: [1],
    explanation:
      'Templates are used in Backstage scaffolding, defining the frontend parameters and backend steps for creating new components.',
  },
  {
    question:
      'How do APIs, components, and resources relate to each other in Backstage?',
    options: [
      'Components consume APIs and may depend on resources at runtime; APIs are implemented by components',
      'Resources define APIs, which implement components',
      'APIs and resources are independent; components do not interact with them',
      'Components are only used for organizational purposes',
    ],
    correct: [0],
    explanation:
      'Components implement and consume APIs and rely on resources at runtime. APIs form boundaries, and resources provide the infrastructure.',
  },
  {
    question:
      'Why are systems considered an important abstraction in large Backstage catalogues?',
    options: [
      'They reduce the number of APIs needed',
      'They allow ignoring implementation details for consumers while enabling the owning team to evolve the system freely',
      'They replace domains as the primary grouping mechanism',
      'They define user roles and permissions',
    ],
    correct: [1],
    explanation:
      'Systems encapsulate components and resources, exposing only public APIs, so consumers are insulated from implementation changes, reducing coupling.',
  },
  {
    question: 'Which of the following best illustrates a system example?',
    options: [
      'A playlist management system with backend services, a database, and public APIs like RPC, event streams, and datasets',
      'A team of developers working on multiple projects',
      'An S3 bucket storing images for a website',
      'A template for scaffolding new components',
    ],
    correct: [0],
    explanation:
      'A system groups multiple components and resources, exposing public APIs while hiding private implementation details, like in a playlist management system.',
  },
];
