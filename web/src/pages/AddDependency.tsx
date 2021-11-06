import { useTrelloApi } from 'hooks/useTrelloApi'

export function AddDependency() {
  const { isAuthenticated, isLoading, authorize, error, token } = useTrelloApi()

  console.info(error)
  if (isLoading) return <span>Loading...</span>

  if (!isAuthenticated)
    return (
      <button className="mod-primary" onClick={authorize}>
        Authorize
      </button>
    )
  console.info(token)

  return (
    <blockquote className="trello-card-compact">
      <a href="https://trello.com/c/i2iLPxlm/1-123">Trello Card</a>
    </blockquote>
  )
}
