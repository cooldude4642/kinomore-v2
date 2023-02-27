export interface Data<T> {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
export interface ExternalId {
  kpHd: string;
  imdb: string;
  tmdb: number;
}

export interface VendorNumbers {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Logo {
  url: string;
}

export interface Image {
  url: string;
  previewUrl: string;
}

export interface VendorImage {
  name: string;
  url: string;
  previewUrl: string;
}

export interface Name {
  name: string;
}

export interface Video {
  url: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface VideoTypes {
  trailers: Video[];
  teasers: Video[];
}

export interface PersonCard {
  age: number;
  enName: string;
  id: number;
  name: string;
  photo: string;
  sex: string;
}

export interface CurrencyValue {
  value: number;
  currency: string;
}

export interface Fees {
  world: CurrencyValue | undefined;
  russia: CurrencyValue | undefined;
  usa: CurrencyValue | undefined;
}

export interface Distributor {
  distributor: string;
  distributorRelease: string;
}

export interface Premiere {
  country: string;
  world: string;
  russia: string;
  digital: string;
  cinema: string;
  bluray: string;
  dvd: string;
}

export interface SpokenLanguages {
  name: string;
  nameEn: string;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface Value {
  value: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface ReviewInfo {
  count: number;
  positiveCount: number;
  percentage: string;
}

export interface SeasonInfo {
  number: number;
  episodesCount: number;
}

export interface LinkedMovie {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: Image | undefined;
}

export interface WatchabilityItem {
  name: string;
  logo: Logo | undefined;
  url: string;
}

export interface Watchability {
  items: WatchabilityItem[];
}

export interface Technology {
  hasImax: boolean;
  has3d: boolean;
}

export interface Lists {
  countries: string[];
  genres: string[];
  directors: string[];
  screenwriters: string[];
  producers: string[];
  operators: string[];
  composers: string[];
  artists: string[];
  editors: string[];
  actors: string[];
}

export interface Id {
  id: number;
}

interface MoviePoster {
  previewUrl: string;
  url: string;
}

export interface MovieRating {
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
}

export interface MovieCard {
  alternativeName: string;
  description: string;
  enName: string;
  externalId: ExternalId;
  id: number;
  logo: Logo;
  movieLength: number;
  name: string;
  names: { name: string }[];
  poster: MoviePoster;
  rating?: MovieRating;
  shortDescription: string;
  type: string;
  votes: MovieRating;
  year: number;
  watchability: Watchability[];
}

interface PersonSpouse {
  children: number;
  divorced: boolean;
  divorcedReason: string;
  id: number;
  name: string;
  relation: string;
}

export interface Profession {
  value: string;
}

export interface MoviePerson {
  id: number;
  photo: string;
  name: string;
  enName: string;
  profession: string;
  enProfession: string;
}

export interface Movie {
  id: number;
  externalId: ExternalId | undefined;
  name: string;
  alternativeName: string;
  enName: string;
  names: Name[];
  type: string;
  typeNumber: number;
  subType: string;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string;
  facts: Fact[];
  rating: VendorNumbers | undefined;
  votes: VendorNumbers | undefined;
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
  logo: Logo | undefined;
  poster: Image | undefined;
  horizontalPoster: Image | undefined;
  backdrop: Image | undefined;
  imagesInfo: Images | undefined;
  videos: VideoTypes | undefined;
  genres: Name[];
  countries: Name[];
  persons: MoviePerson[];
  color: string;
  networks: VendorImage | undefined;
  distributors: Distributor | undefined;
  spokenLanguages: SpokenLanguages[];
  reviewInfo: ReviewInfo | undefined;
  seasonsInfo: SeasonInfo[];
  productionCompanies: VendorImage[];
  budget: CurrencyValue | undefined;
  fees: Fees | undefined;
  premiere: Premiere | undefined;
  ticketsOnSale: boolean;
  technology: Technology | undefined;
  similarMovies: MovieCard[];
  sequelsAndPrequels: MovieCard[];
  watchability: Watchability | undefined;
  lists: Lists | undefined;
  kinopoiskId: number;
}

export interface Person {
  age: number;
  birthPlace: { value: string }[];
  birthday: Date;
  countAwards: number;
  death: Date;
  deathPlace: Profession[];
  enName: string;
  facts: Fact[];
  growth: number;
  id: number;
  movies: MovieCard[];
  name: string;
  photo: string;
  profession: { value: string }[];
  sex: string;
  spouses: PersonSpouse[];
  updatedAt: Date;
}

export interface CatalogParams {
  type: string;
  limit: number;
  genre?: string;
  rating?: string;
  sort?: string;
  year?: string;
}
