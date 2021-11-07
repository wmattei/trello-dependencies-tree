import { TrelloCard } from 'types'
import { APP_KEY } from '../constants'

export function loadCards(
  boardId: string,
  token: string
): Promise<TrelloCard[]> {
  return fetch(
    `https://api.trello.com/1/boards/${boardId}/cards?key=${APP_KEY}&token=${token}`
  ).then(async (res) => await res.json())
}
