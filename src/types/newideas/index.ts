export type NewIdeasItem = {
  id: number
  name: string
  description: string
  access: number
}

export type NewIdeasForm = {
  name: string
  description: string
  images: File[] | null
}

export type NewIdeasDetail = {
  id: number
  name: string
  description: string
  access: number
  images: string[]
  createdAt: Date
}

export type NewIdeasDetailComment = {
  id: number
  createdAt: Date
  profileId: number
  content: string
}

export type NewIdeasCommentForm = {
  content: string
}
