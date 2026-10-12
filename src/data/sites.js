const palettes = [
  ['#6366f1', '#8b5cf6'],
  ['#ec4899', '#f43f5e'],
  ['#22d3ee', '#0ea5e9'],
  ['#f59e0b', '#f97316'],
  ['#10b981', '#14b8a6'],
  ['#a855f7', '#8b5cf6'],
  ['#84cc16', '#22c55e'],
  ['#ef4444', '#f97316'],
]

const pick = (str) => {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return palettes[h % palettes.length]
}

const site = (name, domain, tag = '') => {
  const [color, color2] = pick(name)
  return {
    name,
    url: /^https?:\/\//.test(domain) ? domain : `https://${domain}`,
    tag,
    initial: name.replace(/[^A-Za-z0-9]/g, '').charAt(0).toUpperCase() || '★',
    color,
    color2,
  }
}

export const categories = [
  {
    id: 'all',
    name: 'All-in-One',
    icon: '✨',
    description: 'One stop for movies, TV shows and anime — everything in a single place.',
    sites: [
      site('NetMirror', 'netmirror.center', 'Everything'),
      site('GaiaFlix', 'gaiaflix.live', 'Everything'),
      site('FramexTV', 'framextv.xyz', 'Everything'),
    ],
  },
  {
    id: 'anime',
    name: 'Anime',
    icon: '🎌',
    description: 'Dedicated anime streaming platforms and indexers.',
    sites: [
      site('Blakite Anime', 'blakiteanime.buzz'),
      site('Anime Nexus', 'anime.nexus'),
      site('9Anime TV', '9animetv.to'),
      site('Anitaku', 'anitaku.io'),
      site('Gogoanime3', 'gogoanime3.co'),
      site('AnimePahe', 'animepahe.ru'),
      site('KickAssAnime', 'kickassanime.mx'),
      site('Aniwatch TV', 'aniwatchtv.to'),
      site('YugenAnime', 'yugenanime.sx'),
      site('AnimeGG', 'animegg.org'),
      site('AllManga', 'allmanga.to'),
      site('AniWorld', 'aniworld.to'),
      site('Nyaa', 'nyaa.land', 'Torrents'),
      site('123Animes', '123animes.ru'),
    ],
  },
  {
    id: 'movies',
    name: 'Movies & TV Shows',
    icon: '🎬',
    description: 'Stream and download movies, series, and everything in between.',
    sites: [
      site('HokejaTV', 'hokejatv.com'),
      site('Braflix', 'braflix.top'),
      site('M4UFree', 'm4ufree.tv'),
      site('HDToday', 'hdtoday.tv'),
      site('GoMovies', 'gomovies.sx'),
      site('LookMovie2', 'lookmovie2.to'),
      site('PressPlay', 'pressplay.top'),
      site('FMovies', 'fmovies.co'),
      site('UpMovies', 'upmovies.net'),
      site('SFlix', 'sflix.to'),
      site('MyFlixerz', 'myflixerz.to'),
      site('TheFlixerTV', 'theflixertv.to'),
      site('Goojara', 'goojara.to'),
      site('FlixHQ', 'flixhq.to'),
      site('HuraWatch', 'hurawatch.cc'),
      site('Soap2Day HD', 'soap2dayhd.co'),
      site('Braflix RU', 'braflix.ru'),
      site('M4UHD', 'm4uhd.tv'),
      site('Flixtor', 'flixtor.to'),
      site('123MoviesFree', '123moviesfree.net'),
      site('HDToday CC', 'hdtoday.cc'),
      site('VidPlay', 'vidplay.org'),
      site('Putlocker', 'putlocker.pe'),
      site('GoMoviesTV', 'gomoviestv.to'),
      site('YesMovies', 'yesmovies.ag'),
      site('MoviesJoy', 'moviesjoy.is'),
      site('WatchSeries', 'watchseries.bar'),
      site('Watch32', 'watch32.sx'),
    ],
  },
  {
    id: 'sports',
    name: 'Live Sports',
    icon: '🏆',
    description: 'Live sports streams — football, basketball, hockey, and more.',
    sites: [
      site('LiveTV', 'livetv.sx'),
      site('Sport365', 'sport365.stream'),
      site('StreamEast', 'streameast.to'),
      site('Streamed', 'streamed.su'),
      site('BuffStream', 'buffstream.io'),
      site('OnHockey', 'onhockey.tv', 'Ice Hockey'),
      site('CrackStreams', 'crackstreams.io'),
      site('SportPlus', 'sportplus.live'),
      site('LiveTV RU', 'livetv.ru'),
    ],
  },
  {
    id: 'torrent',
    name: 'Torrent',
    icon: '🧲',
    description: 'Torrent indexers and trackers for movies, shows and more.',
    sites: [
      site('1337x', '1337x.to'),
      site('The Pirate Bay', 'thepiratebay.org'),
      site('RuTracker', 'rutracker.org'),
      site('RARBG', 'rargb.to'),
      site('LimeTorrents', 'limetorrents.lol'),
      site('EZTV', 'eztvx.to', 'TV Shows'),
      site('TorrentGalaxy', 'torrentgalaxy.to'),
      site('Torrentz2', 'torrentz2.nz'),
    ],
  },
]