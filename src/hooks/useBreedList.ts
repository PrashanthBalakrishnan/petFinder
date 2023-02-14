import { useQuery, QueryStatus } from "@tanstack/react-query";
import { Animal } from "../components/APIResponsesTypes";
import fetchBreed from "./fetchBreed";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreed);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
