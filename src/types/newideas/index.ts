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
