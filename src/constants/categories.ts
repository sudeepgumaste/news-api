const categories = [
  {
    slug: 'business',
    name: 'Business',
  },
  {
    slug: 'entertainment',
    name: 'Entertainment',
  },
  {
    slug: 'health',
    name: 'Health',
  },
  {
    slug: 'science',
    name: 'Science',
  },
  {
    slug: 'sports',
    name: 'Sports',
  },
  {
    slug: 'technology',
    name: 'Technology',
  },
  {
    slug: 'general',
    name: 'General',
  }
] as const;

export type TCategory = typeof categories[number]['slug'];

export default categories;