export type TApiResponse<T> = {
  status: 'ok'
  totalResults: number
  articles: T[]
}

export type TApiError = {
  status: 'error'
  code: string
  message: string
}

export type TNewsArticle = {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string | null
  url: string
  urlToImage: string
  publishedAt: string | null
  content: string | null
}