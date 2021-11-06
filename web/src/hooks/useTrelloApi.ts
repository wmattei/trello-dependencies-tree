import { useEffect, useState } from 'react'

type UseTrelloApiReturn = {
  isLoading: boolean
  isAuthenticated: boolean
  error?: string
  token?: string
  restApi?: any
  authorize: () => void
}

export function useTrelloApi(): UseTrelloApiReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [token, setToken] = useState<string | undefined>()
  const [restApi, setRestApi] = useState<any>()

  useEffect(() => {
    const t = window.TrelloPowerUp.iframe({
      appKey: '23e77db94cdf4ac74ac40e63cb8be4ce',
      appName: 'Dependencies Tree',
    })

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
  }
}
