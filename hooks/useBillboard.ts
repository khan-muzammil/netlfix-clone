import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
export default useBillboard;
