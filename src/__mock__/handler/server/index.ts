import { setupServer } from "msw/node"

import tempServerHandler from "./temp-server-handler"

export const serverWorker = setupServer(...tempServerHandler)
