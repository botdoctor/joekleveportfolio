export interface ProjectDetail {
  title: string;
  content: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  date: string;
  client?: string;
  link?: string;
  links?: ProjectLink[];
  tags: string[];
  type: 'project' | 'certification' | 'business';
  details?: ProjectDetail[];
}

export const projectsData: Project[] = [
  {
    id: 'skynet-osint',
    title: 'Distributed OSINT Intelligence Platform',
    description: 'Full-stack reconnaissance platform with microservices architecture, async job queues, and horizontally scalable workers for open-source intelligence gathering.',
    fullDescription: 'Designed and built a production-grade OSINT platform using a microservices architecture. The system features a Next.js frontend, FastAPI orchestrator, PostgreSQL persistence layer, Redis-backed async job queue, and containerized Python workers that can be scaled horizontally. Built with Docker Compose for local development and production deployment behind Nginx with Clerk authentication and Stripe billing integration.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    date: 'December 2025',
    link: 'https://github.com/botdoctor/skynetosint',
    tags: ['Docker', 'FastAPI', 'PostgreSQL', 'Redis', 'Next.js', 'Python'],
    type: 'project',
    details: [
      {
        title: 'Microservices Architecture',
        content: 'Monorepo structure with independently deployable services: a Next.js frontend, FastAPI orchestrator API, and Python workers — all containerized with Docker and orchestrated via Docker Compose with health checks and service dependencies.'
      },
      {
        title: 'Async Job Queue & Worker Scaling',
        content: 'Redis-backed job queue enables the orchestrator to enqueue long-running tasks while returning immediate responses. Workers process jobs asynchronously and can be scaled horizontally with Docker replicas to handle parallel workloads.'
      },
      {
        title: 'Data Layer & API Design',
        content: 'PostgreSQL database with indexed tables for runs, entities, and raw responses. RESTful API with endpoints for initiating searches, polling run status, and retrieving results with structured entity data and confidence scoring.'
      },
      {
        title: 'Production Deployment',
        content: 'Production-ready configuration with Nginx reverse proxy, Clerk JWT authentication, Stripe subscription billing, proxy rotation support, and environment-based configuration. Designed for deployment on managed cloud services (RDS, ElastiCache).'
      }
    ]
  },
  {
    id: 'webspin-scraper',
    title: 'Automated Lead Generation Pipeline',
    description: 'Multi-source data aggregation tool that scrapes business listings, audits their web presence, and scores leads using an automated analysis pipeline.',
    fullDescription: 'Built a Python CLI tool that aggregates SMB data from multiple sources (Google Places, Yellow Pages, BBB, Yelp), performs automated website audits (SSL, mobile-friendliness, performance, content analysis), and scores each lead on a 1-10 scale based on web presence quality. Features browser impersonation, proxy rotation, and deep-audit mode for comprehensive site analysis. Outputs structured CSV reports ready for outreach.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    date: 'February 2026',
    link: 'https://github.com/botdoctor/webspinscraper',
    tags: ['Python', 'Web Scraping', 'Data Pipeline', 'Automation', 'CLI'],
    type: 'project',
    details: [
      {
        title: 'Multi-Source Data Aggregation',
        content: 'Queries Google Places API, Yellow Pages, BBB, and Yelp in parallel to build comprehensive business profiles. Deduplicates results across sources and merges data for maximum coverage.'
      },
      {
        title: 'Automated Website Auditing',
        content: 'Performs automated analysis of each business\'s web presence — checking SSL certificates, mobile responsiveness, page load performance, content freshness, and overall site quality. Deep-audit mode runs a full technical assessment.'
      },
      {
        title: 'Lead Scoring Algorithm',
        content: 'Scores leads 1-10 based on web presence quality and prioritizes them as hot, warm, or cold. Businesses with no website, broken sites, or social-media-only presence score highest as conversion opportunities.'
      },
      {
        title: 'Anti-Detection & Reliability',
        content: 'Uses browser impersonation via curl_cffi, rotating user agents, configurable proxy support, and rate limiting to ensure reliable data collection at scale without getting blocked.'
      }
    ]
  },
  {
    id: 'montecarlo-simulator',
    title: 'Probabilistic Financial Modeling Engine',
    description: 'A Monte Carlo simulation engine built in Python for projecting streaming revenue and evaluating music catalog investments in private equity.',
    fullDescription: 'Built a stochastic financial modeling tool that runs thousands of Monte Carlo iterations to produce probabilistic revenue projections for music catalog assets. The engine models age-based decay, year-over-year growth distributions, and market multipliers to generate confidence intervals, NPV analysis, and ROI probability metrics — giving investors data-driven insight rather than single-point estimates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'June 2025',
    link: 'https://github.com/botdoctor/montecarlo',
    tags: ['Python', 'Monte Carlo', 'Financial Modeling', 'NumPy', 'Pandas'],
    type: 'project',
    details: [
      {
        title: 'Stochastic Growth Modeling',
        content: 'For each trial, streaming volumes are projected forward year by year. Growth rates are sampled from normal distributions parameterized by song age, then adjusted by age-based decay multipliers with Gaussian noise and fixed market multipliers per calendar year.'
      },
      {
        title: 'Investment Metrics',
        content: 'Computes Net Present Value per trial using configurable discount rates, ROI distributions across all iterations, probability of breaking even, and probability of achieving a target ROI threshold — providing a full risk profile for investment decisions.'
      },
      {
        title: 'Statistical Analysis & Output',
        content: 'Generates confidence intervals at every 10% band (10% through 90%) for cumulative revenue, along with mean and median projections. Results are exported to Excel with formatted sheets and a visualization plot showing all trial paths with mean and CI bounds.'
      },
      {
        title: 'Configurable Simulation Parameters',
        content: 'All inputs are driven by a JSON configuration file: iteration count, projection horizon, age-specific growth distributions, market multipliers, song age groups with streaming volumes, and financial parameters including investment size, per-stream revenue, and discount rate.'
      }
    ]
  },
  {
    id: 'aws-portfolio-deployment',
    title: 'Production Portfolio Deployment on AWS',
    description: 'Fully automated, production-grade static site hosting pipeline on AWS with global CDN distribution, automated TLS, and a zero-touch CI/CD pipeline using OIDC keyless authentication.',
    fullDescription: 'Yes, this is absolutely overkill for a React portfolio site. A single Cloudflare Pages deploy would have taken 30 seconds. But where\'s the fun in that? Instead, I architected and deployed a fully automated, production-grade static site hosting pipeline on AWS using Infrastructure as Code. The solution serves joekleve.com with global CDN distribution via 400+ CloudFront edge locations, automated TLS termination through ACM, and a zero-touch CI/CD pipeline that deploys on every Git push with no static credentials stored anywhere. The entire infrastructure is reproducible from scratch in under 10 minutes via Terraform.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'February 2026',
    links: [
      { label: 'Application Code', url: 'https://github.com/botdoctor/joekleveportfolio' },
      { label: 'Infrastructure Code', url: 'https://github.com/botdoctor/joekleveportfolio-infra' }
    ],
    tags: ['AWS', 'Terraform', 'CloudFront', 'S3', 'GitHub Actions', 'OIDC', 'CI/CD'],
    type: 'project',
    details: [
      {
        title: 'Infrastructure as Code with Terraform',
        content: 'Full infrastructure provisioned via modular Terraform architecture with four independent modules (S3, ACM, CloudFront, Route 53) and explicit output/variable wiring between them. Terraform provisions resources in dependency order: Route 53 hosted zone first for DNS-based certificate validation, then CloudFront with the validated cert ARN and Origin Access Control, and finally alias records pointing the apex and www subdomain to the distribution. Entire stack reproducible from scratch in under 10 minutes.'
      },
      {
        title: 'Zero-Credential CI/CD Pipeline',
        content: 'Every push to main triggers an automated GitHub Actions workflow: Node.js builds the React application, GitHub Actions authenticates to AWS using OpenID Connect (OIDC) to obtain short-lived temporary credentials scoped to a specific IAM role. No static AWS access keys stored in GitHub Secrets or anywhere in the codebase. Build artifacts are synced to S3 with the --delete flag to remove stale files, and a CloudFront cache invalidation ensures edge nodes serve fresh content immediately. Full deployment completes in under 2 minutes.'
      },
      {
        title: 'Security Design',
        content: 'Private S3 bucket with all public access blocked. Content is served exclusively through CloudFront using Origin Access Control with SigV4 signing. Least-privilege IAM role scoped to only s3:PutObject, s3:DeleteObject, s3:ListBucket on the specific bucket and cloudfront:CreateInvalidation on the specific distribution. TLS 1.2+ enforced with HTTP-to-HTTPS redirect, and AWS Shield Standard provides baseline DDoS protection at no additional cost.'
      },
      {
        title: 'Key Implementation Challenges',
        content: 'Solved ACM/CloudFront regional constraint using Terraform provider aliasing to provision certificates in us-east-1 regardless of primary region. Handled DNS propagation ordering by targeting the hosted zone first, configuring nameservers at the registrar, then running the full apply for certificate validation. Configured CloudFront custom error responses to return index.html with 200 status for 403/404 errors, enabling React Router client-side navigation on S3-backed hosting.'
      }
    ]
  },
  {
    id: 'webspin-development',
    title: 'WebSpin.dev',
    description: 'Founded WebSpin.dev, crafting lightning-fast, SEO-optimized websites that combine stunning design with exceptional performance.',
    fullDescription: 'Established WebSpin.dev as a premier web development company, specializing in creating beautiful, high-performance websites that deliver outstanding user experiences while maintaining optimal loading speeds and search engine visibility.',
    image: '/webspin.png',
    date: 'January 2024',
    client: 'WebSpin Development',
    link: 'https://webspin.dev',
    tags: ['Web Design', 'SEO', 'Performance', 'React', 'Next.js'],
    type: 'business',
    details: [
      {
        title: 'Company Vision',
        content: 'WebSpin.dev was founded with a clear mission: to create websites that not only look stunning but also perform exceptionally well. We focus on delivering fast, lightweight solutions that help businesses establish a strong online presence.'
      },
      {
        title: 'Technical Excellence',
        content: 'Our websites are built using modern technologies like React and Next.js, ensuring optimal performance and SEO capabilities. We implement advanced optimization techniques including lazy loading, image optimization, and efficient caching strategies.'
      },
      {
        title: 'Design Philosophy',
        content: 'Every website we create is a unique masterpiece, carefully crafted to reflect the client\'s brand while ensuring an intuitive user experience. We focus on creating designs that are both visually striking and functionally efficient.'
      },
      {
        title: 'Client Success',
        content: 'Our portfolio includes numerous successful projects where we\'ve helped businesses achieve significant improvements in website performance, user engagement, and search engine rankings through our optimized development approach.'
      }
    ]
  },
  {
    id: 'comptia-security-plus',
    title: 'CompTIA Security+',
    description: 'Earned the CompTIA Security+ certification, validating core security skills and best practices for IT professionals.',
    fullDescription: 'Successfully completed the CompTIA Security+ certification, demonstrating competency in network security, compliance, threats and vulnerabilities, identity management, and cryptography.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    date: 'March 2024',
    client: 'CompTIA',
    link: 'https://www.comptia.org/certifications/security',
    tags: ['Security', 'Certification', 'Network Security', 'Compliance'],
    type: 'certification',
    details: [
      {
        title: 'Certification Overview',
        content: 'CompTIA Security+ is a globally recognized certification that validates baseline security skills and knowledge across multiple vendor-neutral security topics.'
      },
      {
        title: 'Key Areas',
        content: 'Covered threats, attacks, and vulnerabilities; technologies and tools; architecture and design; identity and access management; risk management; and cryptography.'
      },
      {
        title: 'Skills Demonstrated',
        content: 'Ability to assess the security posture of an enterprise environment, recommend and implement security solutions, monitor and secure hybrid environments, and operate with an awareness of applicable laws and policies.'
      },
      {
        title: 'Professional Application',
        content: 'Applied security fundamentals to cloud infrastructure design, ensuring AWS environments follow security best practices and compliance requirements.'
      }
    ]
  },
  {
    id: 'aws-ai-practitioner',
    title: 'AWS Certified AI Practitioner',
    description: 'Achieved AWS AI Practitioner certification, demonstrating knowledge of AI/ML concepts and AWS AI services.',
    fullDescription: 'Earned the AWS Certified AI Practitioner certification, validating understanding of AI/ML concepts, AWS AI services like SageMaker, Bedrock, and best practices for implementing AI solutions on AWS.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'September 2024',
    client: 'Amazon Web Services',
    link: 'https://aws.amazon.com/certification/',
    tags: ['AWS', 'AI/ML', 'Certification', 'Cloud'],
    type: 'certification',
    details: [
      {
        title: 'Certification Overview',
        content: 'The AWS Certified AI Practitioner certification validates foundational knowledge of AI/ML concepts and how to apply them using AWS services and tools.'
      },
      {
        title: 'Core Competencies',
        content: 'Demonstrated understanding of AI/ML fundamentals, AWS AI services including SageMaker and Bedrock, responsible AI practices, and AI solution architecture on AWS.'
      },
      {
        title: 'Technical Skills',
        content: 'Knowledge of machine learning pipelines, model training and deployment on AWS, generative AI concepts, and integration of AI services into cloud applications.'
      },
      {
        title: 'Business Impact',
        content: 'Ability to identify use cases for AI/ML in business operations and recommend appropriate AWS AI services to address organizational needs.'
      }
    ]
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect Associate',
    description: 'Earned the AWS Solutions Architect Associate certification, validating expertise in designing distributed systems on AWS.',
    fullDescription: 'Successfully completed the AWS Certified Solutions Architect Associate certification, demonstrating the ability to design resilient, high-performing, secure, and cost-optimized architectures on AWS.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    date: 'November 2024',
    client: 'Amazon Web Services',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    tags: ['AWS', 'Solutions Architect', 'Certification', 'Cloud Architecture'],
    type: 'certification',
    details: [
      {
        title: 'Certification Overview',
        content: 'The AWS Solutions Architect Associate certification validates the ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS.'
      },
      {
        title: 'Key Areas',
        content: 'Covered designing resilient architectures, high-performing architectures, secure applications and architectures, and cost-optimized architectures following the AWS Well-Architected Framework.'
      },
      {
        title: 'Skills Demonstrated',
        content: 'Expertise in selecting appropriate AWS services for compute, storage, database, and networking. Designing multi-tier architectures, disaster recovery strategies, and migration plans.'
      },
      {
        title: 'Professional Application',
        content: 'Apply solutions architecture knowledge to design and implement production-ready AWS environments with proper security, scalability, and cost management.'
      }
    ]
  },
  {
    id: 'az-900-certification',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    description: 'Earned the AZ-900 certification, demonstrating foundational knowledge of cloud services and Azure.',
    fullDescription: 'Successfully completed the Microsoft Azure Fundamentals certification, showcasing understanding of cloud concepts, Azure services, security, privacy, compliance, and pricing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    date: 'January 2024',
    client: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
    tags: ['Cloud Computing', 'Azure', 'Certification', 'Cloud Security'],
    type: 'certification',
    details: [
      {
        title: 'Certification Overview',
        content: 'The AZ-900 certification validates fundamental knowledge of cloud concepts and Azure services, including security, privacy, compliance, and pricing models.'
      },
      {
        title: 'Key Areas',
        content: 'Covered cloud concepts (high availability, scalability, elasticity, agility), core Azure services, security features, privacy, compliance standards, and Azure pricing and support.'
      },
      {
        title: 'Skills Demonstrated',
        content: 'Understanding of cloud computing concepts, knowledge of core Azure services and features, familiarity with security, privacy, and compliance in the cloud.'
      },
      {
        title: 'Professional Application',
        content: 'Apply cloud fundamentals knowledge to make informed decisions about Azure services and features, understanding their implications for security and cost management.'
      }
    ]
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Achieved AWS Cloud Practitioner certification, validating fundamental AWS cloud expertise.',
    fullDescription: 'Earned the AWS Certified Cloud Practitioner certification, demonstrating broad understanding of the AWS Cloud platform, services, and basic cloud concepts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'December 2023',
    client: 'Amazon Web Services',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    tags: ['AWS', 'Cloud Computing', 'Certification', 'Cloud Security'],
    type: 'certification',
    details: [
      {
        title: 'Certification Overview',
        content: 'The AWS Certified Cloud Practitioner certification validates overall understanding of the AWS Cloud, including key services, security concepts, architecture basics, and pricing models.'
      },
      {
        title: 'Core Competencies',
        content: 'Demonstrated knowledge of AWS Cloud concepts, security and compliance aspects, core services, pricing, and basic architecture principles.'
      },
      {
        title: 'Technical Skills',
        content: 'Understanding of AWS global infrastructure, basic AWS services for compute, storage, and networking, security best practices, and cost management.'
      },
      {
        title: 'Business Impact',
        content: 'Ability to identify AWS services for common use cases, understand AWS pricing models, and recognize the value proposition of cloud computing for business operations.'
      }
    ]
  }
];
