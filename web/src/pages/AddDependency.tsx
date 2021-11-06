import { loadCards } from 'api/trello'
import { useTrelloAuth } from 'hooks/useTrelloAuth'
import { useEffect } from 'react'

export function AddDependency() {
  const { isAuthenticated, isLoading, authorize, token, context } =
    useTrelloAuth()

  useEffect(() => {
    if (!token) return

    const boards = loadCards(context?.board, token)

    console.info(boards)
  }, [token, context?.board])

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
