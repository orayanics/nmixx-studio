const SAMPLE_DECK = [
  {
    id: 1,
    title: 'Lily',
    img: 'https://d1al7qj7ydfbpt.cloudfront.net/artist/nmixx/24ee50ff5561493cb3ceac8c274a3c3f-%E1%84%85%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5220250928082824161.jpg',
  },
  {
    id: 2,
    title: 'Haewon',
    img: 'https://d1al7qj7ydfbpt.cloudfront.net/artist/nmixx/a668699321644c6cbe0c3e72d6719b0b-%E1%84%92%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AB320250928082724843.jpg',
  },
  {
    id: 3,
    title: 'Bae',
    img: 'https://d1al7qj7ydfbpt.cloudfront.net/artist/nmixx/3e36205702ec4174a0caa736859b72de-%E1%84%87%E1%85%A2%E1%84%8B%E1%85%B5320250928082842911.jpg',
  },
  {
    id: 4,
    title: 'Sullyoon',
    img: 'https://d1al7qj7ydfbpt.cloudfront.net/artist/nmixx/f32f9ce745f4413089d554ba8419e0aa-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%B2%E1%86%AB220250928082740775.jpg',
  },
  {
    id: 5,
    title: 'Jiwoo',
    img: 'https://d1al7qj7ydfbpt.cloudfront.net/artist/nmixx/618d8e63fbdf433084f6c5c83fb3c8ee-%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%AE420250928082932253.jpg',
  },
  {
    id: 6,
    title: 'Kyujin',
    img: 'https://d1al7qj7ydfbpt.cloudfront.net/artist/nmixx/4fcc093953be4e9b88b80efdb139ec59-%E1%84%80%E1%85%B2%E1%84%8C%E1%85%B5%E1%86%AB420250928083026151.jpg',
  },
]

export const LANDING_BACKGROUND =
  'https://d1al7qj7ydfbpt.cloudfront.net/artist/nmixx/3cce5a96a8a34e2aa4c1ed4098daad5c-PC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A6.jpg'

export const NMIXX_MEMBERS = [
  'LILY',
  'HAEWON',
  'SULLYOON',
  'BAE',
  'JIWOO',
  'KYUJIN',
]

import BLUE_VALENTINE_COVER from '@/assets/images/BLUE_VALENTINE.webp'
import SPINNIN_ON_IT_COVER from '@/assets/images/SPINNIN_ON_IT.webp'
import PHOENIX_COVER from '@/assets/images/PHOENIX.webp'
import REALITY_HURTS_COVER from '@/assets/images/REALITY_HURTS.webp'
import RICO_COVER from '@/assets/images/RICO.webp'
import GAME_FACE_COVER from '@/assets/images/GAME_FACE.webp'
import PODIUM_COVER from '@/assets/images/PODIUM.webp'
import CRUSH_ON_YOU_COVER from '@/assets/images/CRUSH_ON_YOU.webp'
import ADORE_U_COVER from '@/assets/images/ADORE_U.webp'
import SHAPE_OF_LOVE_COVER from '@/assets/images/SHAPE_OF_LOVE.webp'
import OO_COVER from '@/assets/images/OO.webp'

export const BLUE_VALENTINE_TRACKS = [
  {
    title: 'Blue Valentine',
    img: BLUE_VALENTINE_COVER,
  },
  {
    title: 'Spinnin On It',
    img: SPINNIN_ON_IT_COVER,
  },
  {
    title: 'Phoenix',
    img: PHOENIX_COVER,
  },
  {
    title: 'Reality Hurts',
    img: REALITY_HURTS_COVER,
  },
  {
    title: 'RICO',
    img: RICO_COVER,
  },
  {
    title: 'Game Face',
    img: GAME_FACE_COVER,
  },
  {
    title: 'PODIUM',
    img: PODIUM_COVER,
  },
  {
    title: 'Crush On You',
    img: CRUSH_ON_YOU_COVER,
  },
  {
    title: 'ADORE U',
    img: ADORE_U_COVER,
  },
  {
    title: 'Shape of Love',
    img: SHAPE_OF_LOVE_COVER,
  },
  {
    title: 'O.O Pt.1 (Baila) & O.O Pt.2 (Superhero)',
    img: OO_COVER,
  },
]

export { SAMPLE_DECK as LANDING_DECK }

export type MEMBERS =
  | 'lily'
  | 'haewon'
  | 'sullyoon'
  | 'bae'
  | 'jiwoo'
  | 'kyujin'

export interface IndividualImage {
  title: MEMBERS
  img: string
}

export const BLUE_VALENTINE_IDS = [
  {
    title: 'Haewon',
    img: 'https://pbs.twimg.com/media/G6cDIt1aoAAyocI?format=jpg&name=small',
  },
  {
    title: 'Lily',
    img: 'https://pbs.twimg.com/media/G6cCjRebMAEEOe8?format=jpg&name=small',
  },
  {
    title: 'Sullyoon',
    img: 'https://pbs.twimg.com/media/G6cDn-OawAApQmK?format=jpg&name=small',
  },
  {
    title: 'Bae',
    img: 'https://pbs.twimg.com/media/G6hU1AFaUAEojSF?format=jpg&name=small',
  },
  {
    title: 'Jiwoo',
    img: 'https://pbs.twimg.com/media/G6hXWKeaoAAoqKC?format=jpg&name=small',
  },
  {
    title: 'Kyujin',
    img: 'https://pbs.twimg.com/media/G6hYvOKbsAAWdW7?format=jpg&name=small',
  },
]

export const BL_CHAOS_DUO_IMGS = {
  HAE_SULL: 'https://i.imgur.com/3IyfK4d.jpeg',
  LILY_BAE: 'https://i.imgur.com/ledfQMx.jpeg',
  JI_KYU: 'https://i.imgur.com/0aG00Cu.jpeg',
}

export const BL_CHAOS_INDIV_IMGS: IndividualImage[] = [
  {
    title: 'lily',
    img: 'https://i.imgur.com/5GE9TeY.jpeg',
  },
  {
    title: 'haewon',
    img: 'https://i.imgur.com/uWdUgQa.jpeg',
  },
  {
    title: 'sullyoon',
    img: 'https://i.imgur.com/86DfgvS.jpeg',
  },
  {
    title: 'bae',
    img: 'https://i.imgur.com/wGLS0qp.jpeg',
  },
  {
    title: 'jiwoo',
    img: 'https://i.imgur.com/zEO88P0.jpeg',
  },
  {
    title: 'kyujin',
    img: 'https://i.imgur.com/eFo61DF.jpeg',
  },
]

export const SOT_INDIV_IDS: IndividualImage[] = [
  {
    title: 'lily',
    img: 'https://static.wikia.nocookie.net/nmixx/images/6/6c/Lily_SPINNIN%27_ON_IT_%282%29.jpg',
  },
  {
    title: 'haewon',
    img: 'https://static.wikia.nocookie.net/nmixx/images/7/77/Haewon_SPINNIN%27_ON_IT_%284%29.jpg',
  },
  {
    title: 'sullyoon',
    img: 'https://static.wikia.nocookie.net/nmixx/images/a/af/Sullyoon_SPINNIN%27_ON_IT_%283%29.jpg',
  },
  {
    title: 'bae',
    img: 'https://static.wikia.nocookie.net/nmixx/images/7/7e/Bae_SPINNIN%27_ON_IT_%282%29.jpg',
  },
  {
    title: 'jiwoo',
    img: 'https://static.wikia.nocookie.net/nmixx/images/1/1e/Jiwoo_SPINNIN%27_ON_IT_%283%29.jpg',
  },
  {
    title: 'kyujin',
    img: 'https://static.wikia.nocookie.net/nmixx/images/8/83/Kyujin_SPINNIN%27_ON_IT_%285%29.jpg',
  },
]
