import { ListModel } from '../shared/models/list.model';
import { genreColor } from './style.constant';

export const movieRecommendations: ListModel[] = [
  {
    name: 'Action',
    items: [
      {
        name: 'Akira',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
          ],
          tags: ['1998', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/akira.png',
      },
      {
        name: 'Promare',
        description: '',
        metadata: {
          genres: [{ color: genreColor.action, key: 'action' }],
          tags: ['2019', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/promare.png',
      },
      {
        name: 'Redline',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2009', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/redline.png',
      },
    ],
  },
  {
    name: 'Adventure',
    items: [
      {
        name: 'Nausicaa of the Valley of the Wind',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['1984', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/nausicaa-of-the-valley-of-the-wind.png',
      },
      {
        name: 'Princess Mononoke',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['1997', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/princess-mononoke.png',
      },
      {
        name: 'The Boy and the Beast',
        description: '',
        metadata: {
          genres: [{ color: genreColor.adventure, key: 'adventure' }],
          tags: ['2015', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/the-boy-and-the-beast.png',
      },
    ],
  },
  {
    name: 'Comedy',
    items: [
      {
        name: 'FLCL',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2000', '6 Episode Series', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/flcl.png',
      },
      {
        name: 'Tokyo Godfathers',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.drama, key: 'drama' },
          ],
          tags: ['2003', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/tokyo-godfathers.png',
      },
      {
        name: 'Your Name',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.drama, key: 'drama' },
          ],
          tags: ['2016', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/your-name.png',
      },
    ],
  },
  {
    name: 'Drama',
    items: [
      {
        name: 'A Silent Voice',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2016', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/a-silent-voice.png',
      },
      {
        name: 'In This Corner of the World',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2016', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/in-this-corner-of-the-world.png',
      },
      {
        name: 'I Want to Eat your Pancreas',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2018', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/i-want-to-eat-your-pancreas.png',
      },
    ],
  },
  {
    name: 'Fantasy',
    items: [
      {
        name: "Howl's Moving Castle",
        description: '',
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2004', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/howls-moving-castle.png',
      },
      {
        name: 'Maquia: When the Promised Flower Blooms',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2004', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/maquia-when-the-promised-flower-blooms.png',
      },
      {
        name: 'Spirited Away',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2001', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/spirited-away.png',
      },
    ],
  },
  {
    name: 'Mystery',
    items: [
      {
        name: 'Lonely Castle in the Mirror',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.fantasy, key: 'fantasy' },
            { color: genreColor.mystery, key: 'mystery' },
          ],
          tags: ['2022', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/lonely-castle-in-the-mirror.png',
      },
      {
        name: 'Paprika',
        description: '',
        metadata: {
          genres: [{ color: genreColor.mystery, key: 'mystery' }],
          tags: ['2006', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/paprika.png',
      },
      {
        name: 'The Tatami Time Machine Blues',
        description: '',
        metadata: {
          genres: [{ color: genreColor.mystery, key: 'mystery' }],
          tags: ['2022', '6 Episode Series'],
        },
        imagePath: 'shared/assets/movies/the-tatami-time-machine-blues.png',
      },
    ],
  },
  {
    name: 'Romance',
    items: [
      {
        name: 'The Anthem of the Heart',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['2015', 'Movie'],
        },
        imagePath: 'shared/assets/movies/the-anthem-of-the-heart.png',
      },
      {
        name: "The One Who Loved You / To Every You I've Loved Before",
        description: '',
        metadata: {
          genres: [
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2022', '2 Movies'],
        },
        imagePath: 'shared/assets/movies/the-one-who-loved-you-to-every-you-ive-loved-before.png',
      },
      {
        name: 'Whisper of the Heart',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['1995', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/whisper-of-the-heart.png',
      },
    ],
  },
  {
    name: 'Sci-fi',
    items: [
      {
        name: 'Ghost in the Shell',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.mystery, key: 'mystery' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['1995', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/ghost-in-the-shell.png',
      },
      {
        name: 'Patema Inverted',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2013', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/patema-inverted.png',
      },
      {
        name: 'Time of Eve',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.scifi, key: 'sci-fi' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2010', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/time-of-eve.png',
      },
    ],
  },
  {
    name: 'Slice of Life',
    items: [
      {
        name: 'My Neighbors the Yamadas',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['1999', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/my-neighbors-the-yamadas.png',
      },
      {
        name: 'The Night is Short, Walk on Girl',
        description: '',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2017', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/the-night-is-short-walk-on-girl.png',
      },
      {
        name: 'Wolf Children',
        description: '',
        metadata: {
          genres: [{ color: genreColor.slice, key: 'slice of life' }],
          tags: ['2012', 'Movie', 'Dubbed'],
        },
        imagePath: 'shared/assets/movies/wolf-children.png',
      },
    ],
  },
];

export const animeRecommendations: ListModel[] = [
  {
    name: 'Action',
    items: [
      {
        name: 'Demon Slayer',
        description: 'Boy tries to save sister who was transformed into a demon.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
          ],
          tags: ['2019', '55+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/demon-slayer.png',
      },
      {
        name: 'Fullmetal Alchemist: Brotherhood',
        description: 'Brothers use alchemy to attempt to go beyond world limitations.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2009', '64 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/fullmetal-alchemist-brotherhood.png',
      },
      {
        name: 'Gurren Lagann',
        description:
          'Humans have been chased unground.  After finding an ancient artificate, they return reclaim the surface.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
          ],
          tags: ['2007', '27 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/gurren-lagann.png',
      },
      {
        name: 'Mob Psycho 100',
        description: 'Middle schooler with psychic powers wants to fit in with normal people.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.comedy, key: 'comedy' },
          ],
          tags: ['2016', '37 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/mob-psycho-100.png',
      },
      {
        name: 'Yuu Yuu Hakusho',
        description: 'After getting a second chance at life, Yusuke becomes a spirit detective.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
          ],
          tags: ['1992', '112 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/yuu-yuu-hakusho.png',
      },
    ],
  },
  {
    name: 'Adventure',
    items: [
      {
        name: 'Cowboy Bebop',
        description: 'Year 2071 space bounty hunters for money.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['1998', '26 Episodes', 'Finished', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/cowboy-bebop.png',
      },
      {
        name: 'Golden Kamuy',
        description:
          'After the Russo-Japanese war, people start looking for a legendary Ainu treasure across Hokkaido.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.comedy, key: 'comedy' },
          ],
          tags: ['2018', '49+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/golden-kamuy.png',
      },
      {
        name: 'Hunter x Hunter',
        description: "Licensed 'Hunters' devote their lives to accomplishing the worlds' most hazardous tasks.",
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
          ],
          tags: ['2011', '148 Episodes', 'Cancelled', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/hunter-x-hunter.png',
      },
      {
        name: 'Samurai Champloo',
        description:
          'Edo Japan infused with hip-hop.  Two samurai help a girl look for a legendary samurai who smells of sunflowers.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
          ],
          tags: ['2004', '26 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/samurai-champloo.png',
      },
      {
        name: 'Vinland Saga',
        description:
          "Thorfinn, son of one the greatest Viking warrior, wants to follow in his father's footsteps, despite his wishes.",
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.drama, key: 'drama' },
          ],
          tags: ['2019', '48+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/vinland-saga.png',
      },
    ],
  },
  {
    name: 'Comedy',
    items: [
      {
        name: 'Great Teacher Onizuka',
        description: 'Ex-biker gang leader has dream to become the greatest high school teacher across all of Japan.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['1999', '43 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/great-teacher-onizuka.png',
      },
      {
        name: 'Horimiya',
        description: 'Unlikely combination of two high schoolers become good friends after an unexpected encounter.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2021', '26 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/horimiya.png',
      },
      {
        name: 'Nichijou',
        description: 'Daily lives of high school girls, but everything is extreme.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2011', '26 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/nichijou.png',
      },
      {
        name: 'One Punch Man',
        description:
          "In a world full of super heroes and monsters, one normal man's dream is to become a hero beloved by all.",
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.comedy, key: 'comedy' },
          ],
          tags: ['2015', '24+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/one-punch-man.png',
      },
      {
        name: 'Space Dandy',
        description: 'A crew of three friends search throughout space for undiscovered species for money.',
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2014', '26 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/space-dandy.png',
      },
    ],
  },
  {
    name: 'Drama',
    items: [
      {
        name: 'Angel Beats',
        description: 'What happens to the soul after death?  Yuzuru Otonashi unexpectedly finds out.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['2010', '13 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/angel-beats.png',
      },
      {
        name: 'Fruits Basket',
        description:
          'Tooru Honda, a recent orphan, loves the story of the 12 zodiac animals.  She suddenly realizes the story has a level of truth to it.',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['2019', '60 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/fruits-basket.png',
      },
      {
        name: 'Showa Genroku Rakugo Shinjuu',
        description:
          'Rakugo is a form of one-man traditional story telling in Japan.  These rakugo entertainers dedicate their entire lives to the art.',
        metadata: {
          genres: [{ color: genreColor.drama, key: 'drama' }],
          tags: ['2016', '25 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/showa-genroku-rakugo-shinjuu.png',
      },
      {
        name: 'Welcome to the NHK',
        description:
          '22 year old, college dropout, is a hikikomori.  He has been living in almost complete isolation for the past four years.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2006', '24 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/welcome-to-the-nhk.png',
      },
      {
        name: 'Your Lie in April',
        description:
          "A child prodigy pianist has quit playing.  But that doesn't sit right with an unexpected encounter.",
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2014', '22 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/your-lie-in-april.png',
      },
    ],
  },
  {
    name: 'Fantasy',
    items: [
      {
        name: 'Attack on Titan',
        description:
          'Humanity has been forced to enclose themselves within giant walls out of fear of being massacred by titanous creatures.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2013', '89 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/attack-on-titan.png',
      },
      {
        name: "Frieren: Beyond Journey's End",
        description:
          'Frieren joins a party of adventures to defeat the demon king.  But being an elf who lives for thousands of years, this was but a minor blip in her long life.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2023', '28+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/frieren-beyond-journeys-end.png',
      },
      {
        name: 'Made in Abyss',
        description:
          "Orth is a town built around a mysterious deep abyss.  This abyss is filled with valuable teasures but contains its' own curses.",
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2017', '26+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/made-in-abyss.png',
      },
      {
        name: 'Re:Zero',
        description:
          "A normal high schooler is suddenly transported to another world.  It isn't log until he gets mixed up in things.",
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2016', '50+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/re-zero.png',
      },
      {
        name: 'To Your Eternity',
        description:
          "A mystical being is dropped onto Earth.  It's capable of changing forms from beings who reflections it captures.",
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.fantasy, key: 'fantasy' },
          ],
          tags: ['2021', '40+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/to-your-eternity.png',
      },
    ],
  },
  {
    name: 'Mystery',
    items: [
      {
        name: 'Baccano!',
        description: 'In 1930s Chicago, on the Flying Pussyfoot (train), something strange is going on.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.mystery, key: 'mystery' },
          ],
          tags: ['2007', '16 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/baccano.png',
      },
      {
        name: 'Ergo Proxy',
        description:
          'Due to a global ecological catastrophe, humans are living within a secluded dome.  But the government is hiding something',
        metadata: {
          genres: [
            { color: genreColor.mystery, key: 'mystery' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2006', '23 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/ergo-proxy.png',
      },
      {
        name: 'From the New World',
        description:
          'In the far future, humans have psychic powers.  This drastically changes how their society operates.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.mystery, key: 'mystery' },
          ],
          tags: ['2012', '25 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/from-the-new-world.png',
      },
      {
        name: 'Odd Taxi',
        description: 'Taxi driver has a string of peculiar passengers.  Things turn strange from there.',
        metadata: {
          genres: [
            { color: genreColor.mystery, key: 'mystery' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2021', '13 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/odd-taxi.png',
      },
      {
        name: 'Summer Time Rendering',
        description:
          'Shinpei Ajiro moved away from his small Japanese island hometown.  But he must abrubtly return and something is up.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.mystery, key: 'mystery' },
          ],
          tags: ['2022', '25 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/summer-time-rendering.png',
      },
    ],
  },
  {
    name: 'Romance',
    items: [
      {
        name: 'Bloom Into You',
        description:
          'Yuu Koito is waiting to fall in love, but feels hollow inside.  Until an unexpected person comes into her life.',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['2018', '13 Episodes', 'Cancelled', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/bloom-into-you.png',
      },
      {
        name: 'Kaguya-sama: Love is War',
        description:
          'High school president and vice president have crushes on eachother.  But due to their backgrounds and pride, neither will confess to the other.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2019', '41+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/kaguya-sama-love-is-war.png',
      },
      {
        name: 'My Love Story!!',
        description: 'Tall muscular high schooler wants a girlfriend.  But his looks scares all of them away.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2015', '24 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/my-love-story!!.png',
      },
      {
        name: 'The Dangers in My Heart',
        description: 'Shy edgy boy gets to know bubbly model girl classmate.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2023', '26+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/the-dangers-in-my-heart.png',
      },
      {
        name: 'Toradora',
        description: 'A delinquent looking kind boy meets a small doll-like angry girl.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2008', '25 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/toradora.png',
      },
    ],
  },
  {
    name: 'Sci-fi',
    items: [
      {
        name: 'Cyberpunk: Edgerunners',
        description: 'Teenager joins a group of criminals to escape his miserable life in the slums.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2022', '10 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/cyberpunk-edgerunners.png',
      },
      {
        name: 'Dr. Stone',
        description:
          'All humans on Earth have been petrified into stone.  Several millennia passes and some humans break out of the stone.  But now everything must be rebuilt from zero.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2019', '58 Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/dr-stone.png',
      },
      {
        name: 'Planetes',
        description:
          "In 2075, space travel is an everyday reality.  But it's also filled with space debri which causes a huge threat to everyone in space.  Someone's gotta clean it.",
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2003', '26 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/planetes.png',
      },
      {
        name: 'Pluto',
        description: 'An android detective investigates the serial murders of other androids.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.mystery, key: 'mystery' },
            { color: genreColor.scifi, key: 'sci-fi' },
          ],
          tags: ['2023', '8 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/pluto.png',
      },
      {
        name: 'Steins;Gate',
        description: 'Scientists work on creating a device capable of time travel.',
        metadata: {
          genres: [
            { color: genreColor.adventure, key: 'adventure' },
            { color: genreColor.scifi, key: 'sci-fi' },
            { color: genreColor.thriller, key: 'thriller' },
          ],
          tags: ['2011', '48 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/steins-gate.png',
      },
    ],
  },
  {
    name: 'Slice of Life',
    items: [
      {
        name: 'Aggretsuko',
        description: 'Working a miserable ofice job.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['2018', '51 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/aggretsuko.png',
      },
      {
        name: 'High Score Girl',
        description:
          "It's 1991 Japan and arcades are the latest craze.  Haruou Yaguchi, a frequent arcade go-er, encounters an unexpected classmate.",
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
            { color: genreColor.sports, key: 'sport' },
          ],
          tags: ['2018', '24 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/high-score-girl.png',
      },
      {
        name: 'Kids on the Slope',
        description: 'Making jazz music in 1960s Japan.',
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.slice, key: 'slice of life' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['2012', '12 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/kids-on-the-slope.png',
      },
      {
        name: 'Shirobako',
        description: 'Five girls who were in their high school animation club together separately pursue the industry.',
        metadata: {
          genres: [
            { color: genreColor.comedy, key: 'comedy' },
            { color: genreColor.slice, key: 'slice of life' },
          ],
          tags: ['2014', '24 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/shirobako.png',
      },
      {
        name: 'The Great Passage',
        description: 'A group of people passionate about language seek to make the greatest dictionary of all time.',
        metadata: {
          genres: [
            { color: genreColor.slice, key: 'slice of life' },
            { color: genreColor.romance, key: 'romance' },
          ],
          tags: ['2016', '11 Episodes', 'Complete'],
        },
        imagePath: 'shared/assets/series/the-great-passage.png',
      },
    ],
  },
  {
    name: 'Sports',
    items: [
      {
        name: 'Chihayafuru',
        description: "Highschoolers play Japanese card game called 'karuta' competitevly.",
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.sports, key: 'sports' },
          ],
          tags: ['2011', '74+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/chihayafuru.png',
      },
      {
        name: 'Cross Game',
        description:
          "Boy plays baseball for childhood best friend, aiming for the 'Koshien', Japanese national high-school tournament.",
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.romance, key: 'romance' },
            { color: genreColor.sports, key: 'sports' },
          ],
          tags: ['2009', '50 Episodes', 'Complete'],
        },
        imagePath: 'shared/assets/series/cross-game.png',
      },
      {
        name: 'Haikyuu!!',
        description: 'Hinata, despite being short, dreams of being one of the best volleyball players.',
        metadata: {
          genres: [{ color: genreColor.sports, key: 'sports' }],
          tags: ['2014', '86+ Episodes', 'Ongoing', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/haikyuu!!.png',
      },
      {
        name: 'Ping Pong the Animation',
        description: "Five characters' journeys through ping pong and why they play.",
        metadata: {
          genres: [
            { color: genreColor.slice, key: 'slice of life' },
            { color: genreColor.sports, key: 'sports' },
          ],
          tags: ['2014', '11 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/ping-pong-the-animation.png',
      },
      {
        name: 'Run with the Wind',
        description:
          "College students get together to try and compete in the 'Ekiden', a Japanese long-distance running relay race.",
        metadata: {
          genres: [
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.sports, key: 'sports' },
          ],
          tags: ['2018', '23 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/run-with-the-wind.png',
      },
    ],
  },
  {
    name: 'Thriller',
    items: [
      {
        name: 'Code Geass',
        description:
          'In a world where Britannia has conquered Japan, a student with a special power tries to fight back.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.thriller, key: 'thriller' },
          ],
          tags: ['2006', '50 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/code-geass.png',
      },
      {
        name: 'Death Note',
        description: 'High school student finds a notebook that kills anyone whose name is written within it.',
        metadata: {
          genres: [
            { color: genreColor.fantasy, key: 'fantasy' },
            { color: genreColor.mystery, key: 'mystery' },
            { color: genreColor.thriller, key: 'thriller' },
          ],
          tags: ['2006', '37 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/death-note.png',
      },
      {
        name: 'Erased',
        description: 'Man living unfufilling life gets a chance to save the lives of the people around him.',
        metadata: {
          genres: [
            { color: genreColor.mystery, key: 'mystery' },
            { color: genreColor.slice, key: 'slice of life' },
            { color: genreColor.thriller, key: 'thriller' },
          ],
          tags: ['2016', '12 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/erased.png',
      },
      {
        name: 'Monster',
        description:
          'Japanese doctor living in Germany has to confront the consequences of saving anyone, good or bad.',
        metadata: {
          genres: [
            { color: genreColor.mystery, key: 'mystery' },
            { color: genreColor.thriller, key: 'thriller' },
          ],
          tags: ['2004', '74 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/monster.png',
      },
      {
        name: 'Promised Neverland',
        description: 'Children being raised in an orphanage seek to escape.',
        metadata: {
          genres: [
            { color: genreColor.action, key: 'action' },
            { color: genreColor.drama, key: 'drama' },
            { color: genreColor.thriller, key: 'thriller' },
          ],
          tags: ['2019', '23 Episodes', 'Complete', 'Dubbed'],
        },
        imagePath: 'shared/assets/series/promised-neverland.png',
      },
    ],
  },
];
