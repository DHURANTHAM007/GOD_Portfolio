
export interface IPublication {
  category: string;
  items: string[];
  icon: 'book' | 'comic' | 'philosophy';
}

export interface ISkill {
  name: string;
  description: string;
}

export interface IExperience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface IEducation {
  institution: string;
  specialization: string;
  certification: string;
}

export interface IAchievement {
  title: string;
  description: string;
}

export interface IHobby {
  name: string;
  description: string;
}

export interface IReference {
  author: string;
  quote: string;
}

export interface IPortfolioData {
  tagline: string;
  oneLineBio: string;
  aka: string[];
  publications: IPublication[];
  coreSkills: ISkill[];
  experience: IExperience[];
  education: IEducation[];
  achievements: IAchievement[];
  hobbies: IHobby[];
  references: IReference[];
  whyHire: string;
}
