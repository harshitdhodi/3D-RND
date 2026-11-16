export interface JobDescription {
  _id: string;
  slug?: string;
  title: string;
  service_category: string;
  department: string;
  level: string;
  type: string;
  location: string;
  experience: string;
  compensation: string;
  image: string;
  tagline: string;
  description: string;
  key_responsibilities: string[];
  requirements: string[];
  tech_stack: string[];
  featured: boolean;
  status: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface CareerInquiry {
  _id: string;
  job_role_id: string;
  job_title: string;
  full_name: string;
  email: string;
  phone?: string;
  portfolio_url?: string;
  github_url?: string;
  experience: string;
  notice_period: string;
  resume_link?: string;
  note?: string;
  submitted_at: string;
  status: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3014';

export async function getJobDescriptions(): Promise<JobDescription[]> {
  try {
    const response = await fetch(`${API_BASE}/api/data/job_descriptions`);
    if (!response.ok) throw new Error('Failed to fetch job descriptions');
    const result = await response.json();
    const data = result.success ? result.data : [];
    return data.filter((job: JobDescription) => job.status === true).sort((a: JobDescription, b: JobDescription) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching job descriptions:', error);
    return [];
  }
}

export async function getJobDescriptionBySlug(slug: string): Promise<JobDescription | null> {
  try {
    const response = await fetch(`${API_BASE}/api/data/job_descriptions`);
    if (!response.ok) throw new Error('Failed to fetch job description');
    const result = await response.json();
    const data: JobDescription[] = result.success ? result.data : [];
    return data.find((job) => job.slug === slug && job.status === true) || null;
  } catch (error) {
    console.error('Error fetching job description:', error);
    return null;
  }
}

export async function submitCareerInquiry(inquiry: Omit<CareerInquiry, '_id' | 'submitted_at' | 'status'>): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}/api/data/career_inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...inquiry,
        submitted_at: new Date().toISOString(),
        status: 'Pending',
      }),
    });
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error submitting career inquiry:', error);
    return false;
  }
}
