// ─────────────────────────────────────────────
//  TRAINING — JD EDWARDS
// ─────────────────────────────────────────────
export const trainingJDE = {
  id: "training-jde",
  label: "JD Edwards",
  category: "Training",
  sections: [
    {
      id: "hero", type: "hero",
      data: {
        title: "JD Edwards Training",
        subtitle: "Build Expertise. Drive Adoption. Maximise ROI.",
        description: "Our JD Edwards EnterpriseOne training is designed as part of the implementation journey—ensuring your teams are fully prepared to use the system effectively from day one.",
      },
    },
    {
      id: "overview", type: "two-column",
      data: {
        eyebrow: "JD EDWARDS TRAINING",
        title: "Training Built Around Your Implementation",
        description: "At MFATech, training is not a standalone course—it is a critical phase of your ERP implementation.\n\nWe deliver role-based, process-driven training tailored to your configured JD Edwards EnterpriseOne environment, ensuring users understand exactly how the system works within your business.\n\nWhether it’s go-live readiness or post-implementation support, our approach focuses on practical usage, not theory.\n\nWhat We Deliver:",
        image: { src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", alt: "JD Edwards Training" },
        features: [
          "End-user and super-user enablement sessions",
          "Training aligned to your live business processes",
          "Module-specific guidance (Finance, SCM, HR, Manufacturing)",
          "Hands-on walkthroughs using your configured system",
          "User manuals and process documentation",
          "Go-live support and post-implementation assistance",
        ],
      },
    },
    {
      id: "process", type: "icon-cards",
      data: {
        title: "Our Training Approach",
        subtitle: "A structured methodology for effective knowledge transfer",
        cards: [
          { title: "Process Understanding", description: "We align training with your implemented workflows and real business scenarios." },
          { title: "Role-Based Sessions", description: "Each user group is trained based on their responsibilities within the system." },
          { title: "Hands-On System Training", description: "Users learn directly in a controlled or live environment relevant to their role." },
          { title: "Go-Live Readiness", description: "We ensure users are confident and capable before system launch." },
          { title: "Post-Go-Live Support", description: "Ongoing assistance to address real-time challenges after implementation." },
          // { title: "Post-Training Support",      description: "Ongoing support and refresher sessions to reinforce skills after go-live." },
        ],
      },
    },
    {
      id: "benefits", type: "benefits",
      data: {
        title: "Business Benefits",
        description: "Why investing in JDE training delivers long-term value",
        items: [
          { title: "Faster Go-Live Adoption", description: "Users are ready to operate the system immediately" },
          { title: "Reduced Operational Disruptions", description: "Well-trained teams minimize errors during transition" },
          { title: "Improved Process Efficiency", description: "Users follow optimized workflows from the start" },
          { title: "Lower Support Dependency", description: "Fewer tickets due to better user understanding" },
          { title: "Maximized ERP ROI", description: "Full utilization of system capabilities" },
        ],
        additionalInfo: "Our training engagements are tailored to your JDE version, modules, and organisational structure.",
      },
    },
    {
      id: "cta", type: "cta",
      data: {
        title: "Ready to Train Your JDE Team?",
        description: "Let's design a training programme that fits your team's needs and timeline.",
        buttonText: "Get in Touch",
      },
    },
  ],
}


// ─────────────────────────────────────────────
//  TRAINING — JD EDWARDS CNC
// ─────────────────────────────────────────────
export const trainingJDECNC = {
  id: "training-jde-cnc",
  label: "CNC Training",
  category: "Training",
  sections: [
    {
      id: "hero",
      type: "hero",
      data: {
        title: "JDE CNC Training",
        subtitle: "Build Strong Technical Expertise for JDE Administration",
        description:
          "Our JD Edwards CNC training equips technical teams with the knowledge required to manage, configure, monitor, and support JD Edwards EnterpriseOne environments effectively.",
      },
    },

    {
      id: "overview",
      type: "two-column",
      data: {
        eyebrow: "JD EDWARDS CNC TRAINING",
        title: "Practical CNC Training for JDE Technical Teams",
        description:
          "At MFATech, our JD Edwards CNC training is designed for system administrators, technical consultants, and IT support teams responsible for maintaining EnterpriseOne environments.\n\nThe training focuses on real-world administration activities including environment management, package deployment, security configuration, server management, troubleshooting, and system monitoring.\n\nWe combine theoretical understanding with hands-on exercises to ensure participants gain practical operational confidence.\n\nWhat We Deliver:",
        image: {
          src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
          alt: "JD Edwards CNC Training",
        },
        features: [
          "EnterpriseOne architecture overview",
          "Environment and path code management",
          "Package build and deployment training",
          "User and security administration",
          "Server manager and system monitoring",
          "Troubleshooting and performance optimization",
        ],
      },
    },

    {
      id: "process",
      type: "icon-cards",
      data: {
        title: "Our Training Approach",
        subtitle:
          "Structured technical learning for effective JDE administration",
        cards: [
          {
            title: "Architecture Understanding",
            description:
              "Participants learn the core architecture and components of JD Edwards EnterpriseOne.",
          },
          {
            title: "Hands-On Administration",
            description:
              "Practical sessions on environment setup, configuration, and management.",
          },
          {
            title: "Deployment & Package Management",
            description:
              "Training on package builds, deployments, and change management processes.",
          },
          {
            title: "Security & User Management",
            description:
              "Guidance on security configuration, roles, permissions, and access control.",
          },
          {
            title: "Monitoring & Troubleshooting",
            description:
              "Teams learn system monitoring, log analysis, and issue resolution techniques.",
          },
        ],
      },
    },

    {
      id: "benefits",
      type: "benefits",
      data: {
        title: "Business Benefits",
        description:
          "Why JDE CNC training strengthens ERP operations",
        items: [
          {
            title: "Improved System Stability",
            description:
              "Well-trained administrators ensure reliable system performance",
          },
          {
            title: "Reduced Downtime",
            description:
              "Technical teams can identify and resolve issues quickly",
          },
          {
            title: "Better Security Management",
            description:
              "Proper administration minimizes security and access risks",
          },
          {
            title: "Efficient Deployment Processes",
            description:
              "Streamlined package and environment management improves productivity",
          },
          {
            title: "Enhanced Internal Support Capability",
            description:
              "Organizations become less dependent on external support resources",
          },
        ],
        additionalInfo:
          "Our JD Edwards CNC training can be tailored based on your EnterpriseOne version, infrastructure setup, and technical team requirements.",
      },
    },

    {
      id: "cta",
      type: "cta",
      data: {
        title: "Ready to Strengthen Your JDE Technical Team?",
        description:
          "Let’s design a JD Edwards CNC training program aligned with your infrastructure and operational goals.",
        buttonText: "Get in Touch",
      },
    },
  ],
}




// ─────────────────────────────────────────────
//  TRAINING — JD EDWARDS ORCHESTRATOR
// ─────────────────────────────────────────────
export const trainingJDEOrchestrator = {
  id: "training-jde-orchestrator",
  label: "Orchestrator Training",
  category: "Training",
  sections: [
    {
      id: "hero",
      type: "hero",
      data: {
        title: "JDE Orchestrator Training",
        subtitle: "Enable Automation. Simplify Integration. Accelerate Digital Transformation.",
        description:
          "Our JD Edwards Orchestrator training helps technical and functional teams learn how to design, manage, and deploy orchestrations that automate business processes and integrate EnterpriseOne with external systems.",
      },
    },

    {
      id: "overview",
      type: "two-column",
      data: {
        eyebrow: "JD EDWARDS ORCHESTRATOR TRAINING",
        title: "Practical Training for Enterprise Automation",
        description:
          "At MFATech, our JD Edwards Orchestrator training is designed to help organizations unlock the full power of EnterpriseOne automation and integration capabilities.\n\nParticipants gain hands-on experience in creating orchestrations, consuming REST services, configuring notifications, automating repetitive tasks, and integrating JDE with third-party applications.\n\nThe training focuses on real-world business use cases, ensuring teams can confidently build and maintain orchestrations within their enterprise environment.\n\nWhat We Deliver:",
        image: {
          src: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
          alt: "JD Edwards Orchestrator Training",
        },
        features: [
          "Introduction to JD Edwards Orchestrator",
          "Orchestration design and configuration",
          "REST API and connector integration",
          "Form requests and data service usage",
          "Notifications and automation workflows",
          "Hands-on orchestration development exercises",
        ],
      },
    },

    {
      id: "process",
      type: "icon-cards",
      data: {
        title: "Our Training Approach",
        subtitle:
          "Structured learning for enterprise automation success",
        cards: [
          {
            title: "Core Orchestrator Concepts",
            description:
              "Participants learn the architecture, components, and capabilities of JD Edwards Orchestrator.",
          },
          {
            title: "Hands-On Workflow Design",
            description:
              "Practical sessions focused on building orchestrations for real business scenarios.",
          },
          {
            title: "Integration & API Training",
            description:
              "Users learn how to connect JDE with external applications and services.",
          },
          {
            title: "Automation Best Practices",
            description:
              "Training includes governance, error handling, security, and performance considerations.",
          },
          {
            title: "Real-Time Use Cases",
            description:
              "Teams work with automation examples aligned to operational business processes.",
          },
        ],
      },
    },

    {
      id: "benefits",
      type: "benefits",
      data: {
        title: "Business Benefits",
        description:
          "Why Orchestrator training drives operational efficiency",
        items: [
          {
            title: "Increased Process Automation",
            description:
              "Reduce manual tasks through intelligent workflow automation",
          },
          {
            title: "Faster System Integration",
            description:
              "Enable seamless communication between JDE and external platforms",
          },
          {
            title: "Improved Operational Efficiency",
            description:
              "Automated workflows reduce delays and improve accuracy",
          },
          {
            title: "Enhanced User Productivity",
            description:
              "Teams spend less time on repetitive operational activities",
          },
          {
            title: "Accelerated Digital Transformation",
            description:
              "Organizations gain modern integration and automation capabilities",
          },
        ],
        additionalInfo:
          "Our JD Edwards Orchestrator training can be customized based on your business processes, integration requirements, and EnterpriseOne environment.",
      },
    },

    {
      id: "cta",
      type: "cta",
      data: {
        title: "Ready to Automate Your JDE Processes?",
        description:
          "Let’s build an Orchestrator training program tailored to your technical and business goals.",
        buttonText: "Get in Touch",
      },
    },
  ],
}



// ─────────────────────────────────────────────
//  TRAINING — SERVICENOW
// ─────────────────────────────────────────────
export const trainingServiceNow = {
  id: "training-servicenow",
  label: "ServiceNow",
  category: "Training",
  sections: [
    {
      id: "hero", type: "hero",
      data: {
        title: "ServiceNow Training",
        subtitle: "Unlock the Full Power of Your ServiceNow Platform.",
        description: "From ITSM fundamentals to advanced development, our ServiceNow training programmes prepare your teams to configure, manage, and scale the platform effectively.",
      },
    },
    {
      id: "overview", type: "two-column",
      data: {
        eyebrow: "SERVICENOW TRAINING",
        title: "Training Aligned to Your Implementation",
        description: "At MFATech, ServiceNow training is delivered as part of your platform rollout and optimization journey.\n\nWe provide role-based, process-driven enablement tailored to your configured ServiceNow instance—so your teams learn exactly how to use the system within your organization.\n\nFrom go-live readiness to ongoing improvements, our focus is on practical usage in your live environment.\n\nWhat We Deliver:",
        image: { src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg", alt: "ServiceNow Training" },
        features: [
          "Role-based enablement for admins, developers, analysts, and end-users",
          "Training aligned to your configured modules (ITSM, ITOM, HRSD, CSM)",
          "Hands-on walkthroughs using your ServiceNow instance",
          "Workflow, Flow Designer, and reporting guidance",
          "Platform navigation and operational best practices",
          "Go-live and post-implementation support ",
        ],
      },
    },
    {
      id: "process", type: "icon-cards",
      data: {
        title: "Our Enablement Approach",
        subtitle: "A structured framework designed to ensure adoption and long-term success.",
        cards: [
          { title: "Role Mapping", description: "Training is aligned to each user’s responsibilities within the platform." },
          { title: "Instance-Based Learning", description: "Sessions are conducted using your configured ServiceNow environment." },
          { title: "Hands-On Practice", description: "Users gain real experience through guided exercises and live scenarios." },
          { title: "Go-Live Readiness", description: "We prepare teams to confidently manage operations from day one." },
          { title: "Continuous Support", description: "Post-go-live assistance and refresher sessions after upgrades or changes." },
          // { title: "Refresher Programmes", description: "Scheduled refresher sessions after platform upgrades or releases." },
        ],
      },
    },
    {
      id: "benefits", type: "benefits",
      data: {
        title: "Business Benefits",
        description: "Our ServiceNow enablement approach ensures your teams are fully equipped to manage and optimize the platform within your business environment.",
        items: [
          { title: "Platform Self-Sufficiency", description: "Enable internal teams to manage day-to-day platform operations with confidence" },
          { title: "Faster Issue Resolution", description: "Well-trained users handle incidents, requests, and workflows more efficiently" },
          { title: "Improved Platform Utilization", description: "Maximize the value of your ServiceNow investment by leveraging more features" },
          { title: "Reduced Dependency on External Support", description: "Minimize reliance on consultants for routine configuration and maintenance" },
          { title: "Enhanced Service Delivery", description: "Deliver faster, more consistent IT and business services across the organization" },
          { title: "Continuous Improvement Readiness", description: "Equip teams to adapt to platform updates, enhancements, and evolving business needs" },

        ],
        additionalInfo: "Training is available for all major ServiceNow modules and delivery formats.",
      },
    },
    {
      id: "cta", type: "cta",
      data: {
        title: "Ready to Upskill Your ServiceNow Team?",
        description: "Talk to us about building a training programme for your team.",
        buttonText: "Get in Touch",
      },
    },
  ],
}

// ─────────────────────────────────────────────
//  TRAINING — MICROSOFT
// ─────────────────────────────────────────────
export const trainingMicrosoft = {
  id: "training-microsoft",
  label: "Microsoft Technologies",
  category: "Training",
  sections: [
    {
      id: "hero", type: "hero",
      data: {
        title: "Microsoft Technologies Training",
        subtitle: "Power Up Your Teams with Microsoft Platform Skills.",
        description: "From Power Apps to Power BI and Power Automate, our Microsoft training programmes help your teams build, automate, and analyse with confidence across the entire Power Platform.",
      },
    },
    {
      id: "overview", type: "two-column",
      data: {
        eyebrow: "MICROSOFT TECHNOLOGIES TRAINING",
        title: "Practical Microsoft Platform Learning",
        description: "The Microsoft Power Platform is one of the fastest-growing low-code ecosystems in enterprise technology. Getting the most from it requires training that goes beyond theory.\n\nOur Microsoft-certified trainers deliver hands-on programmes covering Power Apps, Power Automate, Power BI, and Azure integrations.\n\nAvailable for business analysts, developers, and IT teams at all skill levels.\n\nWhat We Deliver:",
        image: { src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg", alt: "Microsoft Training" },
        features: [
          "Role-based enablement for business users, analysts, and developers",
          "Hands-on training using your business scenarios and datasets",
          "Power Apps (canvas & model-driven) application enablement",
          "Power Automate workflow and process automation guidance",
          "Power BI dashboards, reporting, and data visualization",
          "Integration with Microsoft Azure and Microsoft 365 ecosystems",
          "Dataverse and connector configuration support",
          "Post-implementation guidance and support",

        ],
      },
    },
    {
      id: "process", type: "icon-cards",
      data: {
        title: "Our Enablement Approach",
        subtitle: "Focused on adoption, usability, and long-term success.",
        cards: [
          { title: "Business Process Alignment", description: "Enablement is mapped directly to your implemented workflows." },
          { title: "Role-Based Sessions", description: "Each team is trained based on how they interact with the system." },
          { title: "Environment-Based Learning", description: "Users work within your configured platform—not generic examples." },
          { title: "Go-Live Readiness", description: "We ensure teams are confident before rollout." },
          { title: "Post-Go-Live Support", description: "Continuous support to resolve real-time challenges and improve usage." },
          // { title: "Train-the-Trainer", description: "Equip internal champions to deliver ongoing training across the organisation." },
        ],
      },
    },
    {
      id: "benefits", type: "benefits",
      data: {
        title: "Business Benefits",
        description: "Driving Real Adoption",
        items: [
          { title: "Faster Platform Adoption", description: "Users are ready to work from day one" },
          { title: "Increased Self-Sufficiency", description: "Teams manage apps, flows, and reports independently" },
          { title: "Better Utilization of Platform Capabilities", description: "Unlock full value of your Microsoft investment" },
          { title: "Reduced Operational Bottlenecks", description: "Less dependency on IT for routine tasks" },
          { title: "Improved Business Efficiency", description: "Automation and insights streamline daily operations" },
        ],
        additionalInfo: "All training programmes can be delivered in-person, virtually, or as blended learning.",
      },
    },
    {
      id: "cta", type: "cta",
      data: {
        title: "Ready to Build Microsoft Platform Skills?",
        description: "Let's create a Microsoft training roadmap for your organisation.",
        buttonText: "Get in Touch",
      },
    },
  ],
}

// ─────────────────────────────────────────────
//  IMPLEMENTATION — JD EDWARDS
// ─────────────────────────────────────────────
export const implementationJDE = {
  id: "implementation-jde",
  label: "JD Edwards",
  category: "Implementation",
  sections: [
    {
      id: "hero", type: "hero",
      data: {
        title: "JD Edwards Implementation",
        subtitle: "End-to-End JDE Delivery. On Time. On Budget.",
        description: "From initial scoping to go-live and hypercare, MFATech delivers full-cycle JD Edwards implementations tailored to your industry, processes, and growth objectives.",
      },
    },
    {
      id: "overview", type: "two-column",
      data: {
        eyebrow: "JD EDWARDS IMPLEMENTATION",
        title: "Structured JDE Delivery You Can Trust",
        description: "A JD Edwards implementation is one of the most significant technology investments your organisation will make.\n\nMFATech's implementation practice covers the full JDE stack — Finance, Supply Chain, Manufacturing, Human Capital Management, and Project Management — across EnterpriseOne and World.\n\nWe follow a structured, milestone-driven delivery approach that keeps your project on track, in scope, and delivering measurable value.",
        image: { src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", alt: "JDE Implementation" },
        features: [
          "Full-cycle JDE EnterpriseOne & World implementation",
          "Fit-gap analysis and business process mapping",
          "Configuration, development, and data migration",
          "Systems integration (APIs, middleware, third-party)",
          "User acceptance testing and go-live support",
          "Post-implementation hypercare and optimisation",
        ],
      },
    },
    {
      id: "process", type: "icon-cards",
      data: {
        title: "Implementation Methodology",
        subtitle: "A proven, phase-based delivery approach",
        cards: [
          { title: "Discovery & Scoping", description: "Define business requirements, project scope, timelines, and success criteria." },
          { title: "Design & Blueprint", description: "Document solution architecture, process flows, and system configuration design." },
          { title: "Build & Configure", description: "Configure JDE modules, develop customisations, and build integrations." },
          { title: "Test & Validate", description: "Execute unit, integration, and UAT testing cycles to validate the solution." },
          { title: "Go-Live & Cutover", description: "Managed cutover execution with hypercare support during the critical go-live window." },
          { title: "Optimise & Support", description: "Post-go-live review, optimisation, and transition to managed services if required." },
        ],
      },
    },
    {
      id: "benefits", type: "benefits",
      data: {
        title: "Business Benefits",
        description: "Why organisations choose MFATech for JDE implementation",
        items: [
          { title: "On-Time Delivery", description: "Structured methodology and governance reduce delays and scope creep." },
          { title: "Reduced Implementation Risk", description: "Experienced team identifies and mitigates risks early in the project lifecycle." },
          { title: "Business Process Improvement", description: "Implementation is an opportunity to streamline and optimise your operations." },
          { title: "Seamless Data Migration", description: "Proven data migration approach ensures clean, validated data from day one." },
          { title: "Knowledge Transfer", description: "Your team is trained and empowered to own and manage the system post go-live." },
        ],
        additionalInfo: "MFATech has delivered JDE implementations across manufacturing, distribution, healthcare, and public sector.",
      },
    },
    {
      id: "cta", type: "cta",
      data: {
        title: "Planning a JD Edwards Implementation?",
        description: "Talk to our JDE practice team about scoping your project.",
        buttonText: "Schedule a Consultation",
      },
    },
  ],
}

// ─────────────────────────────────────────────
//  IMPLEMENTATION — SERVICENOW
// ─────────────────────────────────────────────
export const implementationServiceNow = {
  id: "implementation-servicenow",
  label: "ServiceNow",
  category: "Implementation",
  sections: [
    {
      id: "hero", type: "hero",
      data: {
        title: "ServiceNow Implementation",
        subtitle: "Transform Your IT Operations with ServiceNow.",
        description: "MFATech delivers ServiceNow implementations that go live on schedule and deliver measurable improvements to IT service management, operations, and business workflow automation.",
      },
    },
    {
      id: "overview", type: "two-column",
      data: {
        eyebrow: "SERVICENOW IMPLEMENTATION",
        title: "Expert ServiceNow Delivery",
        description: "ServiceNow is the platform of choice for enterprise IT service management and digital workflow automation.\n\nMFATech's certified ServiceNow implementation team delivers ITSM, ITOM, HRSD, CSM, and custom application implementations using Now Platform best practices.\n\nEvery engagement begins with a thorough discovery and design phase to ensure the platform is configured to match your processes — not the other way around.",
        image: { src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg", alt: "ServiceNow Implementation" },
        features: [
          "ITSM, ITOM, HRSD, CSM and custom app implementation",
          "Process design and workflow configuration",
          "Integration with existing enterprise systems",
          "ServiceNow upgrade and migration services",
          "Performance analytics and reporting setup",
          "User training and change management support",
        ],
      },
    },
    {
      id: "process", type: "icon-cards",
      data: {
        title: "Implementation Approach",
        subtitle: "Agile, milestone-driven ServiceNow delivery",
        cards: [
          { title: "Discovery", description: "Understand current ITSM processes, pain points, and platform objectives." },
          { title: "Solution Design", description: "Design platform architecture, workflows, integrations, and data model." },
          { title: "Build & Configure", description: "Configure ITSM modules, develop flows, and integrate with third-party systems." },
          { title: "Testing Cycles", description: "Execute functional, integration, and user acceptance testing." },
          { title: "Go-Live", description: "Managed go-live with hypercare support and performance monitoring." },
          { title: "Continuous Improvement", description: "Ongoing optimisation and feature expansion post-implementation." },
        ],
      },
    },
    {
      id: "benefits", type: "benefits",
      data: {
        title: "Business Benefits",
        description: "What a well-executed ServiceNow implementation delivers",
        items: [
          { title: "Improved IT Service Quality", description: "Standardised workflows and SLA management improve service delivery." },
          { title: "Operational Efficiency", description: "Automation reduces manual effort across IT and business operations." },
          { title: "Faster Incident Resolution", description: "Structured incident management reduces mean time to resolution." },
          { title: "Enterprise-Wide Visibility", description: "Dashboards and reporting give leadership real-time operational insight." },
          { title: "Scalable Platform Foundation", description: "A well-implemented ServiceNow instance grows with your organisation." },
        ],
        additionalInfo: "MFATech is a certified ServiceNow implementation partner with experience across multiple industries.",
      },
    },
    {
      id: "cta", type: "cta",
      data: {
        title: "Ready to Implement ServiceNow?",
        description: "Let's discuss your ServiceNow requirements and build a delivery plan.",
        buttonText: "Schedule a Consultation",
      },
    },
  ],
}

// ─────────────────────────────────────────────
//  IMPLEMENTATION — MICROSOFT
// ─────────────────────────────────────────────
export const implementationMicrosoft = {
  id: "implementation-microsoft",
  label: "Microsoft Technologies",
  category: "Implementation",
  sections: [
    {
      id: "hero", type: "hero",
      data: {
        title: "Microsoft Technologies Implementation",
        subtitle: "Build Smarter. Automate Faster. Decide Better.",
        description: "MFATech delivers end-to-end Microsoft Power Platform implementations — from custom Power Apps and automated workflows to enterprise Power BI solutions and Azure integrations.",
      },
    },
    {
      id: "overview", type: "two-column",
      data: {
        eyebrow: "MICROSOFT TECHNOLOGIES IMPLEMENTATION",
        title: "Power Platform Delivery at Enterprise Scale",
        description: "The Microsoft Power Platform offers transformative capabilities for organisations ready to modernise how they build apps, automate workflows, and analyse data.\n\nMFATech's Microsoft practice team delivers custom Power Apps, Power Automate solutions, Power BI implementations, and Azure-connected services.\n\nWe take a use-case-first approach: every implementation starts with the business problem and works backward to the right technical solution.",
        image: { src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", alt: "Microsoft Implementation" },
        features: [
          "Power Apps canvas and model-driven application development",
          "Power Automate workflow and RPA implementation",
          "Power BI enterprise reporting and dashboards",
          "Azure integration and cloud service implementation",
          "Dataverse configuration and data modelling",
          "Microsoft 365 and Dynamics 365 integration",
        ],
      },
    },
    {
      id: "process", type: "icon-cards",
      data: {
        title: "Delivery Methodology",
        subtitle: "Use-case-first Microsoft implementation approach",
        cards: [
          { title: "Use Case Discovery", description: "Identify business problems and define requirements for each solution." },
          { title: "Solution Architecture", description: "Design the platform architecture, data model, and integration points." },
          { title: "Agile Development", description: "Iterative development sprints with regular demos and feedback loops." },
          { title: "Integration & Testing", description: "Connect to enterprise systems and validate end-to-end functionality." },
          { title: "Deployment & Rollout", description: "Managed deployment with user training and change management support." },
          { title: "Adoption & Optimisation", description: "Monitor usage, gather feedback, and continuously improve the solution." },
        ],
      },
    },
    {
      id: "benefits", type: "benefits",
      data: {
        title: "Business Benefits",
        description: "What Microsoft implementation delivers for your organisation",
        items: [
          { title: "Rapid Application Development", description: "Low-code Power Apps reduces time-to-delivery for custom business tools." },
          { title: "Process Automation at Scale", description: "Power Automate eliminates repetitive manual tasks across departments." },
          { title: "Self-Service Analytics", description: "Power BI empowers business users to analyse data without IT support." },
          { title: "Seamless Microsoft Integration", description: "Solutions connect natively with M365, Teams, SharePoint, and Dynamics." },
          { title: "Cost-Effective Innovation", description: "Low-code development delivers enterprise-grade solutions at lower cost." },
        ],
        additionalInfo: "All Microsoft implementations are delivered by certified Power Platform and Azure professionals.",
      },
    },
    {
      id: "cta", type: "cta",
      data: {
        title: "Ready to Implement Microsoft Power Platform?",
        description: "Tell us about your use case and we'll design the right solution.",
        buttonText: "Schedule a Consultation",
      },
    },
  ],
}

// ─────────────────────────────────────────────
//  TRAINING — SAP
// ─────────────────────────────────────────────
export const trainingSAP = {
  id: "training-sap",
  label: "SAP Training",
  category: "Training",
  sections: [
    {
      id: "hero",
      type: "hero",
      data: {
        title: "SAP Training",
        subtitle: "Empower Teams. Improve Adoption. Maximise ERP Value.",
        description:
          "Our SAP training programs are designed to help organizations build confident, skilled users and administrators capable of managing and utilizing SAP systems effectively across business functions.",
      },
    },

    {
      id: "overview",
      type: "two-column",
      data: {
        eyebrow: "SAP TRAINING",
        title: "Practical SAP Training for Business and Technical Teams",
        description:
          "At MFATech, we provide structured SAP training tailored to your business processes, implementation goals, and operational requirements.\n\nOur programs focus on practical learning through real-world scenarios, hands-on exercises, and process-driven training aligned to your SAP environment.\n\nWhether you are preparing users for go-live, training administrators, or enabling technical teams, our approach ensures participants gain practical confidence and operational readiness.\n\nWhat We Deliver:",
        image: {
          src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
          alt: "SAP Training",
        },
        features: [
          "Functional and technical SAP training",
          "Role-based end-user enablement",
          "Hands-on practical workshops",
          "SAP module-specific guidance",
          "Business process and workflow training",
          "Post-training support and knowledge transfer",
        ],
      },
    },

    {
      id: "process",
      type: "icon-cards",
      data: {
        title: "Our Training Approach",
        subtitle:
          "Structured learning designed for enterprise success",
        cards: [
          {
            title: "Business Process Alignment",
            description:
              "Training is aligned with your operational workflows and SAP implementation processes.",
          },
          {
            title: "Role-Based Learning",
            description:
              "Users receive targeted training based on their responsibilities and system usage.",
          },
          {
            title: "Hands-On System Practice",
            description:
              "Participants gain practical experience using real SAP business scenarios.",
          },
          {
            title: "Technical & Functional Enablement",
            description:
              "Training supports both business users and technical administration teams.",
          },
          {
            title: "Go-Live Readiness",
            description:
              "We ensure users are prepared to operate confidently from day one.",
          },
        ],
      },
    },

    {
      id: "benefits",
      type: "benefits",
      data: {
        title: "Business Benefits",
        description:
          "Why SAP training is critical for ERP success",
        items: [
          {
            title: "Faster User Adoption",
            description:
              "Teams become productive quickly with structured training",
          },
          {
            title: "Improved Operational Efficiency",
            description:
              "Users follow optimized business processes effectively",
          },
          {
            title: "Reduced Support Dependency",
            description:
              "Well-trained users require less day-to-day support",
          },
          {
            title: "Enhanced System Utilization",
            description:
              "Organizations maximize the value of SAP capabilities",
          },
          {
            title: "Stronger Internal Expertise",
            description:
              "Build long-term in-house SAP knowledge and competency",
          },
        ],
        additionalInfo:
          "Our SAP training programs can be customized based on SAP modules, user roles, implementation phases, and organizational objectives.",
      },
    },

    {
      id: "cta",
      type: "cta",
      data: {
        title: "Ready to Build SAP Expertise Across Your Organization?",
        description:
          "Let’s create a SAP training program tailored to your business and technical requirements.",
        buttonText: "Get in Touch",
      },
    },
  ],
}


// ─────────────────────────────────────────────
//  TRAINING — AI
// ─────────────────────────────────────────────
export const trainingAI = {
  id: "training-ai",
  label: "AI Training",
  category: "Training",
  sections: [
    {
      id: "hero",
      type: "hero",
      data: {
        title: "AI Training",
        subtitle: "Build AI Skills. Drive Innovation. Transform Business Operations.",
        description:
          "Our AI training programs help organizations and professionals understand, adopt, and apply Artificial Intelligence technologies to improve productivity, decision-making, and digital transformation initiatives.",
      },
    },

    {
      id: "overview",
      type: "two-column",
      data: {
        eyebrow: "AI TRAINING",
        title: "Practical AI Training for Modern Businesses",
        description:
          "At MFATech, we deliver practical AI training designed for business users, technical teams, developers, and enterprise leaders.\n\nOur programs focus on real-world AI applications including automation, data analysis, generative AI, machine learning concepts, and AI-driven business workflows.\n\nWhether your goal is AI awareness, workforce upskilling, or technical capability building, our training provides hands-on learning tailored to your organizational needs.\n\nWhat We Deliver:",
        image: {
          src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
          alt: "AI Training",
        },
        features: [
          "Introduction to Artificial Intelligence concepts",
          "Generative AI and automation training",
          "AI tools and workflow integration",
          "Hands-on practical exercises and use cases",
          "Business-focused AI adoption strategies",
          "AI best practices, ethics, and governance",
        ],
      },
    },

    {
      id: "process",
      type: "icon-cards",
      data: {
        title: "Our Training Approach",
        subtitle:
          "Structured learning designed for practical AI adoption",
        cards: [
          {
            title: "AI Fundamentals",
            description:
              "Participants gain a strong understanding of AI concepts, terminology, and business applications.",
          },
          {
            title: "Hands-On Learning",
            description:
              "Training includes practical exercises using modern AI tools and platforms.",
          },
          {
            title: "Business Use Cases",
            description:
              "Real-world scenarios demonstrate how AI improves operations and decision-making.",
          },
          {
            title: "Automation & Integration",
            description:
              "Teams learn how AI can automate workflows and enhance productivity.",
          },
          {
            title: "Responsible AI Practices",
            description:
              "Training covers ethical AI usage, governance, and implementation best practices.",
          },
        ],
      },
    },

    {
      id: "benefits",
      type: "benefits",
      data: {
        title: "Business Benefits",
        description:
          "Why AI training is essential for future-ready organizations",
        items: [
          {
            title: "Improved Productivity",
            description:
              "AI-enabled workflows reduce manual effort and increase efficiency",
          },
          {
            title: "Faster Decision-Making",
            description:
              "Teams leverage AI insights for smarter business decisions",
          },
          {
            title: "Enhanced Innovation",
            description:
              "Organizations discover new opportunities through AI adoption",
          },
          {
            title: "Workforce Upskilling",
            description:
              "Employees gain valuable future-focused technology skills",
          },
          {
            title: "Accelerated Digital Transformation",
            description:
              "AI capabilities support long-term business modernization initiatives",
          },
        ],
        additionalInfo:
          "Our AI training programs can be customized for business users, developers, leadership teams, and enterprise digital transformation initiatives.",
      },
    },

    {
      id: "cta",
      type: "cta",
      data: {
        title: "Ready to Build AI Capabilities in Your Organization?",
        description:
          "Let’s design an AI training program tailored to your business goals and workforce needs.",
        buttonText: "Get in Touch",
      },
    },
  ],
}

// ─────────────────────────────────────────────
//  REGISTRY — keyed by category
// ─────────────────────────────────────────────
export const servicesRegistry = {
  Corporate_Training: [trainingJDE, trainingServiceNow, trainingMicrosoft, trainingJDECNC, trainingJDEOrchestrator, trainingSAP, trainingAI],
  Implementation: [implementationJDE, implementationServiceNow, implementationMicrosoft],
}

export const defaultService = trainingJDE