import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import useGetEverything from '../../../queries/use-get-everything'
import { TSortByOptions } from '../../../types/api-request'

const SearchPage:React.FC = () => {
  const [searchParams] = useSearchParams()

  const {data, isLoading, isError} = useGetEverything({
    q: searchParams.get('q') ?? '',
    page: searchParams.get('page') ?? '1',
    sortBy: searchParams.get('sortBy') as TSortByOptions ?? 'test',
  })

  const totalPages = useMemo(() => {
    if (data?.totalResults) {
      return Math.ceil(data?.totalResults / 10)
    }
    return 1
  },[data?.totalResults])

  console.log({data: data?.articles, isLoading, isError, totalPages})

  return (
    <></>
  )
}

export default SearchPage