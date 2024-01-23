import { queryOptions } from "@tanstack/react-query"

import tempAPI from "./api"

const tempOptions = {
  default: ["temp"] as const,

  users: () =>
    queryOptions({
      queryKey: [...tempOptions.default, "users"],
      queryFn: tempAPI.getUsers,
    }),
}
export default tempOptions
