import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TApiError, TApiResponse, TNewsArticle } from "../types/api-response";
import { TSortByOptions } from "../types/api-request";

type Params = {
  q: string;
  page?: string;
  sortBy?: TSortByOptions;
}

type SuccessResponse = TApiResponse<TNewsArticle>;

const getEverything = async ({
  q,
  page = '1',
  sortBy = 'relevance',
}: Params): Promise<
  SuccessResponse
> => {
  const url = new URL(`${import.meta.env.VITE_BASE_URL}/everything`); 

  if(Number.isNaN(Number.parseInt(page))) {
    throw new Error("Invalid page number");
  }

  url.searchParams.set("apiKey", import.meta.env.VITE_API_KEY);
  url.searchParams.set("pageSize", "10");
  url.searchParams.set("page", page);

  if(!q) {
    throw new Error("No query provided");
  }

  if(sortBy) {
    url.searchParams.set("sortBy", sortBy);
  }

  url.searchParams.set("q", q);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
};

const useGetEverything = ({page = '1', q, sortBy}: Params): UseQueryResult<SuccessResponse, Error> => {
  return useQuery({
    queryKey: ["everything", page, q, sortBy],
    queryFn: () => getEverything({page, q, sortBy}),
    enabled: !!q,
  })
}

export default useGetEverything;