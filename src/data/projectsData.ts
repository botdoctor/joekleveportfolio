export interface ProjectDetail {
  title: string;
  content: string;
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
  tags: string[];
  type: 'project' | 'certification' | 'business';
  details?: ProjectDetail[];
}

export const projectsData: Project[] = [
  {
    id: 'evilginx3-snapchat',
    title: 'Evilginx3 Phishlet Development',
    description: 'Developed a custom Snapchat phishlet for Evilginx3, demonstrating advanced reverse engineering and security research capabilities.',
    fullDescription: 'Created a sophisticated Snapchat phishlet for the Evilginx3 framework, showcasing expertise in proxy development, JavaScript manipulation, and advanced web security concepts.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    date: 'February 2024',
    tags: ['Evilginx3', 'Security Research', 'Reverse Engineering', 'Proxy Development'],
    type: 'project',
    details: [
      {
        title: 'Development Process',
        content: 'Conducted thorough analysis of Snapchat\'s authentication flow and security mechanisms. Developed custom JavaScript triggers and handlers to intercept and process authentication data accurately.'
      },
      {
        title: 'Technical Implementation',
        content: 'Created specialized proxy rules and custom JavaScript injection points to handle Snapchat\'s complex authentication process. Implemented precise timing mechanisms for session capture and token management.'
      },
      {
        title: 'Challenges Overcome',
        content: 'Successfully bypassed various security measures including certificate pinning and JavaScript integrity checks. Developed solutions for handling dynamic content and maintaining session consistency.'
      },
      {
        title: 'Research Impact',
        content: 'The project contributed to understanding modern web application security mechanisms and authentication flows. Findings were used to improve security awareness and defensive measures.'
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