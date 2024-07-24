const sortByOptions = ['relevance' , 'popularity' , 'publishedAt'] as const

export type TSortByOptions = typeof sortByOptions[number]

export default sortByOptions