import type { MediaType } from "./media-type"

export interface MediaItem {
  type: MediaType
  url: string
  duration: number | null
  thumbnail: string | null
}
