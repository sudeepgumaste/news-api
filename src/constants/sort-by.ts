const sortByOptions = [{
  label: 'Relevance',
  value: 'relevance',
}, {
  label: 'Popularity',
  value: 'popularity', 
},
{
  label: 'Published At',
  value: 'publishedAt',
}] as const

export type TSortByOptions = typeof sortByOptions[number]['value']

export default sortByOptions