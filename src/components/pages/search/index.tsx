import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import useGetEverything from '../../../queries/use-get-everything'
import { TSortByOptions } from '../../../constants/sort-by'
import Pagination from '../../molecules/pagination'

const SearchPage:React.FC = () => {
  const [searchParams] = useSearchParams()

  const {data, isLoading, isError, status} = useGetEverything({
    q: searchParams.get('q') ?? '',
    page: searchParams.get('page') ?? '1',
    sortBy: searchParams.get('sortBy') as TSortByOptions ?? 'test',
  })

  const totalPages = useMemo(() => {
    if (data?.totalResults) {
      return Math.ceil(data?.totalResults / 10)
    }
    return 0
  },[data?.totalResults])

  return (
    <>
      <Pagination totalPages={totalPages} currentPage={Number(searchParams.get('page') ?? 1)} />
    </>
  )
}

export default SearchPage