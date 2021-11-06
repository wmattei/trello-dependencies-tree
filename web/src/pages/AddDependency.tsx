import { useEffect } from 'react'

export function AddDependency() {
  useEffect(() => {
    const t = window.TrelloPowerUp.iframe({
      appKey: '23e77db94cdf4ac74ac40e63cb8be4ce',
      appName: 'Dependencies Tree',
    })

    const restApi = t.getRestApi()

    restApi.isAuthorized().then((isAuthorized: boolean) => {
      console.info(isAuthorized)
      restApi.getToken().then((token: any) => {
        console.info(token)
      })
    })
  }, [])

  return (
    <blockquote className="trello-card-compact">
      <a href="https://trello.com/c/i2iLPxlm/1-123">Trello Card</a>
    </blockquote>
  )
}
