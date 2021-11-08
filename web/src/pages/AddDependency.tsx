import { loadCards } from 'api/trello'
import { useTrelloAuth } from 'hooks/useTrelloAuth'
import { useEffect, useMemo, useState } from 'react'
import { TrelloCard } from 'types'

export function AddDependency() {
  const { isAuthenticated, isLoading, authorize, token, context } =
    useTrelloAuth()

  const [cards, setCards] = useState<TrelloCard[]>([])

  useEffect(() => {
    if (!token) return
    loadCards(context?.board, token).then(setCards)
  }, [token, context?.board])

  const filteredCards = useMemo(() => {
    return cards.filter((card) => card.id !== context?.card)
  }, [cards, context])

  if (isLoading) return <span>Loading...</span>

  if (!isAuthenticated)
    return (
      <button className="mod-primary" onClick={authorize}>
        Authorize
      </button>
    )

  return (
    <div>
      {filteredCards.map((card) => (
        <div>{card.name}</div>
      ))}
    </div>
  )
}
