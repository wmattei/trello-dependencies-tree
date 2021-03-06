import { APP_KEY, APP_NAME } from '../constants'
import { useEffect, useState } from 'react'

type UseTrelloAuthReturn = {
  isLoading: boolean
  isAuthenticated: boolean
  error?: string
  token?: string
  restApi?: any
  authorize: () => void
  context: any
}

export function useTrelloAuth(): UseTrelloAuthReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [token, setToken] = useState<string | undefined>()
  const [restApi, setRestApi] = useState<any>()
  const [context, setContext] = useState<any>()

  useEffect(() => {
    const t = window.TrelloPowerUp.iframe({
      appKey: APP_KEY,
      appName: APP_NAME,
    })

    setContext(t.getContext())

    setIsLoading(true)

    const restApi = t.getRestApi()

    setRestApi(restApi)
    getToken(restApi)
  }, [])

  async function getToken(restApi: any) {
    try {
      const isAuthorized = await restApi.isAuthorized()

      setIsAuthenticated(isAuthorized)
      if (isAuthorized) {
        const token = await restApi.getToken()

        setToken(token)
      }
    } catch (error: any) {
      setError(error)
    }

    setIsLoading(false)
  }

  async function authorize() {
    await restApi.authorize()
  }

  return {
    isLoading,
    isAuthenticated,
    error,
    token,
    restApi,
    authorize,
    context,
  }
}
