import wretch from "wretch"

const baseUrl = import.meta.env.VITE_API_URL as string
const fetchApi =
  wretch(baseUrl, { mode: "cors" })
    .errorType("json")
    //.resolve(r => r.json())

export default fetchApi;