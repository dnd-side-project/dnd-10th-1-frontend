import { useQuery } from "@tanstack/react-query"

import tempOptions from "./options"

export function useGetUsers() {
  return useQuery(tempOptions.users())
}
