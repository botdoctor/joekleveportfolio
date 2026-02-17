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
