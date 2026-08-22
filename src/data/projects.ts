export type WebsiteProject = {
  id: number
  name: string
  description: string
  category: string
  url: string
  screenColor: string
  align: 'left' | 'right' | 'center'
}

export type MarketingProject = {
  id: number
  name: string
  platform: string
  objective: string
  keyResult: string
  metric: string
  screenColor: string
}

export const websiteProjects: WebsiteProject[] = [
  {
    id: 1,
    name: 'Panther Flow AI Labs',
    description:'An AI-focused digital platform delivering intelligent solutions through modern technology, interactive experiences, and scalable digital innovation.',
    category: 'AI & Technology',
    url: 'http://pantherflow.in/',
    screenColor: '#1E3A2F',
    align: 'left',
  },
  {
    id: 2,
    name: 'NexKreate Showcase 03',
    description:
      'Brand identity showcase with immersive editorial storytelling, fluid motion design, and performance-first architecture.',
    category: 'Brand & Agency Showcase',
    url: 'https://nexkrete03.vercel.app/',
    screenColor: '#1A2B4A',
    align: 'right',
  },
]

export const marketingProjects: MarketingProject[] = [
  {
    id: 1,
    name: 'Campaign Alpha',
    platform: 'Meta Ads',
    objective: 'Lead Generation',
    keyResult: '4.8x ROAS across targeted campaigns',
    metric: 'ROAS',
    screenColor: '#0F2A3A',
  },
  {
    id: 2,
    name: 'Campaign Beta',
    platform: 'Google Ads',
    objective: 'Traffic & Conversion',
    keyResult: '+185% increase in high-intent CTR',
    metric: 'CTR',
    screenColor: '#1A0F2E',
  },
  {
    id: 3,
    name: 'Campaign Gamma',
    platform: 'Meta + Google',
    objective: 'Brand Awareness & Reach',
    keyResult: '1.2M+ total unique impressions',
    metric: 'Reach',
    screenColor: '#0D2218',
  },
]
