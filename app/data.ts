type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  details: string[]
  tools?: string[]
  results?: string[]
}

type AcademicProject = {
  institution: string
  title: string
  id: string
  details: string[]
  tools?: string[]
  results?: string[]
  link?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Qualification = {
  degree: string
  institution: string
  period: string
  location: string
  details?: string[]
  id: string
}

type Certification = {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
  id: string
}

type Technology = {
  category: string
  items: string[]
  id: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Danone Nutricia New Zealand Ltd (NZN)',
    title: 'Intern Data and Analytics',
    start: 'Nov 2024',
    end: 'Feb 2025',
    link: 'https://www.danone.com/',
    id: 'work1',
    tools: ['Databricks', 'Snowflake', 'Microsoft Azure', 'GitHub', 'SQL', 'Asana'],
    details: [
      'Shadowed senior data engineers on data transformation and pipeline development, gaining expertise in Databricks, Snowflake DWH DMT DSP, and ADF integration. Self-created ADF ING and ANL pipelines for data transformation.',
      'Led a research initiative to optimise process specifications (98 parameters) for milk powder production, improving consistency in physical powder properties (PPPs) at the Balclutha base powders factory. Agile methodology for managing the project progresses through Asana with collaborators.',
      'Extracted and processed large datasets from Snowflake using Databricks, ensuring efficient data preparation, cleaning, correlation analysis, and data splitting.',
      'Implemented data pipeline automation using Azure Data Factory (ADF), saving the split train-test-validation datasets into ADF-produced folders as parquet files for seamless model training and validation.',
      'Conducted exploratory data analysis (EDA) for each PPP, focusing on foam height, bulk density, and flecks. Identifying key trends and optimising input features for modelling.',
      'Designed and trained decision tree models with cross-validation and hyperparameter tuning, selecting the best performing model based on accuracy and robustness. The optimised decision tree model was saved in the Databricks models folder, ensuring reproducibility and scalability for future applications.',
      'Created a dedicated validation notebook for testing the model on an untouched validation dataset, ensuring generalisation and performance accuracy before deployment.',
      'Presented research findings and decision tree model results to leading team stakeholders, ensuring the whole project work was fully understood by them.'
    ],
    results: [
      'Automated data extraction, preparation, and storage using Databricks and ADF, enhancing workflow efficiency and eliminating manual data handling.',
      'Created comprehensive Confluence documentation detailing data preprocessing, feature selection, model training, validation results, and key findings for stakeholder reference.',
      'Standardised model validation practices, ensuring robust performance assessment prior to deployment.'
    ],
  },
  {
    company: 'NATORG International Ltd',
    title: 'Website Administrator (Online marketing & Sales)',
    start: 'Nov 2019',
    end: 'Present',
    link: 'https://natorgnz.co.nz/',
    id: 'work2',
    tools: ['ERP', 'MS Excel', 'Power BI', 'CRM'],
    details: [
      'Reporting: Analysed customer-purchased data to glean insights relevant to future marketing plans and prepare detailed weekly sales and revenue reports.',
      'Administration Support: Ensured the website data was up to date, properly functioning, and visually appealing – monitored website performance, conducted audits, and ensured optimal speed, responsiveness and user experience.',
      'Knowledge management: Managed two employees, offering guidance on marketing and sales issues. Collaborated with designers and vendors to create and implement weekly targeted promotional plans and content.',
      'Support Customers: Primary contact point for WeChat Mall customers, quickly respond to all inquiries, investigate and resolve any complaints, and ensure all customers receive top-tier service in all interactions.',
      'CRM System Administration: Updated and maintained the CRM system, managed the online customer database stock levels, and carried out a comprehensive analysis of the systems to ensure optimal functionality.',
      'Office Management: Oversight and management of daily operational activities for WeChat Mall, including updating products and promotional banners, designing and publishing advertisements, and coordinating with suppliers and the warehouse team about goods details.'
    ],
    results: [
      'Proactively helped the Manager use Power BI to process monthly sales data and generate a visual dashboard. This saves hours of work as it previously required manual processing using Excel.',
      'Increased online sales revenue by 20% yearly and expanded the customer database by 10% through effective prospecting and outstanding service.'
    ],
  },
]

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    institution: 'Ministry of Education, New Zealand',
    title: 'Data Science Dissertation (A+) - Software Application Usage in New Zealand\'s Education Sector: Analysing Seasonal Trends and Global Applicability',
    id: 'academic1',
    details: [
      'Collaborated with the Engagement and External Communications team at MOE to analyse application log data and user report data from educational institutions',
      'Identified user usage patterns and seasonal trends',
      'Merged 17 independent applications (10G) and user report datasets (large, complex datasets) and cleaned the combined data using R studio and Power BI',
      'Created interactive dashboards and multi-dimensional visualisation charts, highlighting various educational applications\' seasonal trends and usage patterns',
      'Organised weekly meetings to report on the project\'s progress, identified and raised problems, and discussed solutions with the mentor and project leader'
    ],
    tools: ['Power BI', 'R', 'R Studio', 'Graylog'],
    results: [
      'The project\'s findings enabled better resource allocation and server management, leading to improved operational efficiency of educational systems',
      'Provided a reference model for other regions considering digital education systems'
    ]
  },
  {
    institution: 'University of Auckland',
    title: 'Big Data & Data Mining Project – Europe Hotel Satisfaction Score Survey',
    id: 'academic2',
    details: [
      'Developed and implemented data mining algorithms for large-scale datasets',
      'Applied machine learning techniques to extract meaningful insights',
      'Created data visualization dashboards for complex data analysis',
      'Collaborated with research team on methodology and implementation'
    ],
    tools: ['SPSS Modeller', 'Scikit-Learn', 'Python', 'AWS', 'PySpark', 'Git'],
    results: [
      'Successfully processed and analyzed large-scale hotel satisfaction datasets',
      'Developed innovative data mining approaches for hospitality data',
      'Created comprehensive visualization tools for data interpretation'
    ]
  },
  {
    institution: 'University of Auckland',
    title: 'Predicting Amazon Kindle Product Ratings Based on Review Text',
    id: 'academic3',
    link: 'https://github.com/michael0806/review_Kindle_Store',
    details: [
      'Worked with a dataset of 982,619 reviews, extracting and filtering review texts and using a subset of 200,000 samples for training due to computational constraints',
      'Developed a deep learning model to predict Amazon Kindle product ratings based on user reviews, involving data preprocessing, feature extraction with GloVe embeddings, and LSTM model development using PyTorch',
      'Evaluated the model using precision, recall, F1-score, and accuracy metrics; achieved an accuracy below 50%, highlighting the potential for improvement with more training data and epochs',
      'Successfully implemented the model and identified potential improvements'
    ],
    tools: ['Pandas', 'GloVe', 'PyTorch', 'Matplotlib', 'Seaborn'],
    results: [
      'Identified potential improvements for future iterations',
      'Future improvements could include utilising more computational resources and advanced models such as Transformers for better performance'
    ]
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'References available on request',
    description: 'Professional references available upon request',
    link: '#',
    uid: 'references'
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/michael0806/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/michaelsun0811/',
  },

]

export const EMAIL = 'smwkiwi@gmail.com'

export const TECHNOLOGIES: Technology[] = [
  {
    category: 'Programming Languages',
    items: [
      'Python (data extraction, preprocessing, big data processing, decision tree modelling, hyperparameter tuning, automation in Databricks)',
      'R & R Studio (acquiring and manipulating large and complex datasets, applying data mining techniques, analysing data using modern regression methods)',
      'SQL (querying and manipulating large datasets, data extraction from Snowflake)'
    ],
    id: 'tech1',
  },
  {
    category: 'Data Engineering',
    items: [
      'Databricks (data preparation, exploratory data analysis, machine learning model development, automation)',
      'Microsoft Azure (Azure Data Factory – orchestrating data pipelines for data preparation and model validation)',
      'Snowflake (data storage, querying, and transformation)'
    ],
    id: 'tech2',
  },
  {
    category: 'ML & Statistical Analysis',
    items: [
      'Machine Learning Modelling (cross & model validation, hyperparameter tuning)',
      'Exploratory Data Analysis (correlation analysis, data visualisation, statistical insights)'
    ],
    id: 'tech3',
  },
  {
    category: 'Data Visualisation',
    items: [
      'Power BI (data transformation, cleaning & modelling, generating & analysing reports)'
    ],
    id: 'tech4',
  },
  {
    category: 'Documentation & Collaboration',
    items: [
      'Confluence (technical documentation, research process documentation)',
      'GitHub, Git (version control, collaboration)',
      'Asana (project management, task tracking)'
    ],
    id: 'tech5',
  },
  {
    category: 'MS Office Suite',
    items: [
      'Excel (Statistics & Data Analysis)',
      'Word',
      'PowerPoint',
      'Outlook',
      'Teams'
    ],
    id: 'tech6',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Databricks Fundamentals',
    issuer: 'Databricks',
    date: '2025',
    id: 'cert1',
  },
  {
    name: 'Azure Data Fundamentals',
    issuer: 'Microsoft',
    date: '2022',
    id: 'cert2',
  },
  {
    name: 'Advanced Google Analytics',
    issuer: 'Google Analytics',
    date: '2022',
    id: 'cert3',
  },
  {
    name: 'Power BI',
    issuer: 'Microsoft',
    date: '2020',
    id: 'cert4',
  },
]

export const QUALIFICATIONS: Qualification[] = [
  {
    degree: 'Master of Data Science',
    institution: 'The University of Auckland',
    period: '2022 - 2024',
    location: 'Auckland, New Zealand',
    details: [
      'Data Science Dissertation (A+)',
      'Data Mining & Big Data (A+)',
      'Topics in Official Statistics (A)'
    ],
    id: 'qual1',
  },
  {
    degree: 'Bachelor of Science (Computer Science & Statistics)',
    institution: 'The University of Auckland',
    period: '2016 - 2018',
    location: 'Auckland, New Zealand',
    id: 'qual2',
  },
]
