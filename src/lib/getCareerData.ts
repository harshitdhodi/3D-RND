export interface JobDescription {
  _id: string;
  id?: string;
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

export interface CareerHeroCounter {
  heading: string;
  sub_heading: string;
}

export interface CareerHeroData {
  _id?: string;
  id?: string;
  tagline: string;
  title: string;
  description: string;
  counter: CareerHeroCounter[];
  created_at?: string;
  updated_at?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3058';

export async function getCareerHeroData(): Promise<CareerHeroData | null> {
  try {
    const response = await fetch(`${API_BASE}/api/data/career-hero-sec`, {
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Failed to fetch career hero data');
    const result = await response.json();
    const data = result.success ? result.data : [];
    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching career hero data:', error);
    return null;
  }
}

function normalizeArray(val: any): string[] {
  if (!val) return [];
  if (Array.isArray(val)) {
    return val
      .map((item: any) => {
        if (typeof item === 'string') return item;
        if (typeof item === 'object' && item !== null) {
          return item.value || item.title || item.name || item.text || item.item || '';
        }
        return String(item || '');
      })
      .map((s: string) => s.trim())
      .filter(Boolean);
  }
  if (typeof val === 'string') {
    return val.includes('\n')
      ? val
        .split('\n')
        .map((s) => s.trim().replace(/^[-*•›\d\.]+\s*/, ''))
        .filter(Boolean)
      : val
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
  }
  return [];
}

function normalizeJob(job: any): JobDescription {
  const id = job._id || job.id || '';
  return {
    ...job,
    _id: id,
    id: id,
    title: job.title || '',
    service_category: job.service_category || 'General',
    department: job.department || '',
    level: job.level || 'Mid-Senior',
    type: job.type || 'Full-Time',
    location: job.location || 'Remote',
    experience: job.experience || '',
    compensation: job.compensation || 'Competitive',
    image: job.image || '/banner/career.png',
    tagline: job.tagline || '',
    description: job.description || '',
    key_responsibilities: normalizeArray(job.key_responsibilities),
    requirements: normalizeArray(job.requirements),
    tech_stack: normalizeArray(job.tech_stack),
    featured: Boolean(job.featured),
    status: job.status !== false,
    order: typeof job.order === 'number' ? job.order : 0,
    created_at: job.created_at || '',
    updated_at: job.updated_at || '',
  };
}

export async function getJobDescriptions(): Promise<JobDescription[]> {
  try {
    const response = await fetch(`${API_BASE}/api/data/job_descriptions`, {
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Failed to fetch job descriptions');
    const result = await response.json();
    const data = result.success ? result.data : [];
    return data
      .map(normalizeJob)
      .filter((job: JobDescription) => job.status !== false)
      .sort((a: JobDescription, b: JobDescription) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching job descriptions:', error);
    return [];
  }
}

export async function getJobDescriptionBySlug(slug: string): Promise<JobDescription | null> {
  try {
    const response = await fetch(`${API_BASE}/api/data/job_descriptions`, {
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Failed to fetch job description');
    const result = await response.json();
    const data: JobDescription[] = (result.success ? result.data : []).map(normalizeJob);
    return data.find((job) => (job.slug === slug || job._id === slug || job.id === slug) && job.status !== false) || null;
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
