import { setupWorker } from "msw/browser"

import tempClientHandler from "./temp-client-handler"

export const clientWorker = setupWorker(...tempClientHandler)
