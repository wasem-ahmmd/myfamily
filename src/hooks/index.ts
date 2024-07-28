import { fetchAllPackage } from "@/routesApi/index";
import { useQuery } from "@tanstack/react-query";








export const useAllPackages = () => {
    const query = useQuery({
      queryKey: ["All-Packages"],
      queryFn: fetchAllPackage,
      staleTime: 10000
    });
  
    return { ...query, Plans: query?.data?.data };
  };