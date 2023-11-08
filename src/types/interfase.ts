interface Images {
  previewUrl: string
  url: string
}

interface Countries {
  name: string
}

interface Genres {
  name: string
}

interface Logo {
  url: string
}

interface Names {
  name: string
  language?: string
  type?: string
}

interface Rating {
  kp: number
  imdb: number
}

interface ReleaseYears {
  start: number
  end: number
}

interface Films {
  ageRating: number
  alternativeName: string
  backdrops: Images
  countries: Countries[]
  description: string
  enName: string | null
  genres: Genres[]
  id: number
  isSeries: boolean
  logo: Logo
  movieLength: any
  name: string
  names: Names[]
  poster: Images
  rating: Rating
  ratingMpaa: string | null
  ReleaseYears: ReleaseYears
  seriesLength: number | null
  shortDescription: string
  status: string | null
  ticketsOnSale: boolean
  top10: number | null
  top250: number | null
  totalSeriesLength: number | null
  type: string
  typeNumber: number
  votes: Rating
  year: number
}

export type { Films }
