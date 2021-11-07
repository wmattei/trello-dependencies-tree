import { loadCards } from 'api/trello'
import { useTrelloAuth } from 'hooks/useTrelloAuth'
import { useEffect, useState } from 'react'
import { TrelloCard } from 'types'

export function AddDependency() {
  const { isAuthenticated, isLoading, authorize, token, context } =
    useTrelloAuth()

  const [cards, setCards] = useState<TrelloCard[]>([])

  useEffect(() => {
    if (!token) return
    console.info(context)
    loadCards(context?.board, token).then(setCards)
  }, [token, context?.board])
  if (isLoading) return <span>Loading...</span>

  if (!isAuthenticated)
    return (
      <button className="mod-primary" onClick={authorize}>
        Authorize
      </button>
    )

  return (
    <div>
      {cards.map((card) => (
        <div>{card.name}</div>
      ))}
    </div>
  )
}
