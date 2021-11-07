export type TrelloCard = {
  id: string
  badges: object
  checkItemStates: any[]
  closed: boolean
  dateLastActivity: Date
  desc: string
  descData: object | null
  due: Date | null
  email: string | null
  idAttachmentCover: string | null
  idBoard: string
  idChecklists: string[]
  idLabels: string[]
  idList: string
  idMembers: string[]
  idMembersVoted: string[]
  idShort: number
  labels: TrelloLabel[]
  manualCoverAttachment: boolean
  name: string
  pos: number
  shortLink: string
  shortUrl: string
  subscribed: boolean
  url: string
}

export enum TrelloLabelColor {
  Black = 'black',
  Blue = 'blue',
  Green = 'green',
  Lime = 'lime',
  Null = 'null',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  Sky = 'sky',
  Yellow = 'yellow',
}
export interface TrelloLabel {
  id: string
  idBoard: string
  name: string
  color: TrelloLabelColor
  uses: number
}
