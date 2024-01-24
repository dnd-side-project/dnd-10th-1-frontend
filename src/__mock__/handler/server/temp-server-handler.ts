import { http, type HttpHandler, HttpResponse } from "msw"

import { tempMock } from "@/__mock__/data/temp-mock"
import { END_POINT, SERVER_URL } from "@/constants/apis"

const tempServerHandler: HttpHandler[] = [
  //   getTemp
  http.get(SERVER_URL + END_POINT.temp, () => {
    return HttpResponse.json(tempMock)
  }),
]

export default tempServerHandler
