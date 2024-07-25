import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TApiResponse, TNewsArticle } from "../types/api-response";
import { TCategory } from "../constants/categories";

type Params = {
  category: TCategory;
  page?: string;
}

type SuccessResponse = TApiResponse<TNewsArticle>;

const getTopHeadlines = async ({
  category,
  page = '1',
}: Params): Promise<
  SuccessResponse
> => {
  const url = new URL(`${import.meta.env.VITE_BASE_URL}/top-headlines`); 

  if(Number.isNaN(Number.parseInt(page))) {
    throw new Error("Invalid page number");
  }

  url.searchParams.set("apiKey", import.meta.env.VITE_API_KEY);
  url.searchParams.set("pageSize", "9");
  url.searchParams.set("page", page);

  if(!category) {
    throw new Error("No category provided");
  }

  url.searchParams.set("category", category);

  const response = await fetch(url.toString());
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return data;
};

const useGetTopHeadlines = ({page = '1', category}: Params): UseQueryResult<SuccessResponse, Error> => {
  return useQuery({
    queryKey: ["top-headlines", page, category],
    queryFn: () => getTopHeadlines({page, category}),
    enabled: !!category,
    staleTime: import.meta.env.VITE_APP_MODE === "development" ? Infinity : 1000 * 60 * 60,
  })
}

export default useGetTopHeadlines;