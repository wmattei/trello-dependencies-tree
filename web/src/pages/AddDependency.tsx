import { useTrelloApi } from 'hooks/useTrelloApi'
import { useEffect } from 'react'

export function AddDependency() {
  const { isAuthenticated, isLoading, authorize, token, context } =
    useTrelloApi()

  useEffect(() => {
    if (!token) return

    fetch(`https://api.trello.com/1/boards/${context?.board}/cards`).then(
      (res) => {
        res.json().then((data) => {
          console.info(data)
        })
      }
    )
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
