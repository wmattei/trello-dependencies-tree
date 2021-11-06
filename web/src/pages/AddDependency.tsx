import { loadCards } from 'api/trello'
import { useTrelloAuth } from 'hooks/useTrelloAuth'
import { useEffect, useState } from 'react'

export function AddDependency() {
  const { isAuthenticated, isLoading, authorize, token, context } =
    useTrelloAuth()

  const [cards, setCards] = useState<any[]>([])

  useEffect(() => {
    if (!token) return

    loadCards(context?.board, token).then(setCards)
  }, [token, context?.board])
  if (isLoading) return <span>Loading...</span>

  if (!isAuthenticated)
    return (
      <button className="mod-primary" onClick={authorize}>
        Authorize
      </button>
    )

  console.info(cards)

  return (
    <blockquote className="trello-card-compact">
      <a href="https://trello.com/c/i2iLPxlm/1-123">Trello Card</a>
    </blockquote>
  )
}
