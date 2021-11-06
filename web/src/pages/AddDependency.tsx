import { useTrelloApi } from 'hooks/useTrelloApi'

export function AddDependency() {
  const { isAuthenticated, isLoading, authorize, restApi } = useTrelloApi()

  console.info(restApi?.get)
  // useEffect(() => {
  //   if (!token) return
  // }, [token])

  if (isLoading) return <span>Loading...</span>

  if (!isAuthenticated)
    return (
      <button className="mod-primary" onClick={authorize}>
        Authorize
      </button>
    )

  return (
    <blockquote className="trello-card-compact">
      <a href="https://trello.com/c/i2iLPxlm/1-123">Trello Card</a>
    </blockquote>
  )
}
