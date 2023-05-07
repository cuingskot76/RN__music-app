import {
  IcanStopAudio,
  SunriseAudio,
  TalkThatAudio,
  TheFeelsAudio,
  WhatIsAudio,
} from '../../public/audios';
import {PlayIcon} from '../../public/icons';
import {
  ArtistMusicBanner,
  ArtistMusicBanner2,
  ArtistMusicBanner3,
  ArtistMusicBanner4,
  ArtistMusicBanner5,
  RecentlyMusicBanner,
  RecentlyMusicBanner2,
  RecentlyMusicBanner3,
  RecentlyMusicBanner4,
  RecentlyMusicBanner5,
  TrendingMusicBanner,
  TrendingMusicBanner2,
  TrendingMusicBanner3,
  TrendingMusicBanner4,
  TrendingMusicBanner5,
} from '../../public/images';

export const trendingMusic = [
  {
    id: 1,
    title: 'Not You',
    performedBy: 'Alan Walker, Emma Steinbakken',
    image: TrendingMusicBanner,
    playIcon: PlayIcon,
  },
  {
    id: 2,
    title: 'Lily',
    performedBy: 'Alan Walker, Farruko Sabrina Carpenter',
    image: TrendingMusicBanner2,
    playIcon: PlayIcon,
  },
  {
    id: 3,
    title: 'On My Way',
    performedBy: 'Alan Walker, Ava-Max',
    image: TrendingMusicBanner3,
    playIcon: PlayIcon,
  },
  {
    id: 4,
    title: 'Alone, Pt. II',
    performedBy: 'Alan Walker, Ava Max',
    image: TrendingMusicBanner4,
    playIcon: PlayIcon,
  },
  {
    id: 5,
    title: 'Faded',
    performedBy: 'Alan Walker',
    image: TrendingMusicBanner5,
    playIcon: PlayIcon,
  },
];

export const popularArtists = [
  {
    id: 1,
    name: 'Alan Walker',
    image: ArtistMusicBanner,
  },
  {
    id: 2,
    name: 'Twice',
    image: ArtistMusicBanner5,
  },
  {
    id: 3,
    name: 'Blackpink',
    image: ArtistMusicBanner2,
  },
  {
    id: 4,
    name: 'Billie Eilish',
    image: ArtistMusicBanner3,
  },
  {
    id: 5,
    name: 'Red Velvet',
    image: ArtistMusicBanner4,
  },
];

export const recentlyPlayed = [
  {
    id: 1,
    title: 'What is Love',
    performedBy: 'TWICE',
    image: RecentlyMusicBanner,
    url: WhatIsAudio,
  },
  {
    id: 2,
    title: 'MOONLIGHT SUNRISE',
    performedBy: 'TWICE',
    image: RecentlyMusicBanner2,
    url: SunriseAudio,
  },
  {
    id: 3,
    title: "I CAN'T STOP ME",
    performedBy: 'TWICE',
    image: RecentlyMusicBanner3,
    url: IcanStopAudio,
  },
  {
    id: 4,
    title: 'Talk that Talk',
    performedBy: 'TWICE',
    image: RecentlyMusicBanner4,
    url: TalkThatAudio,
  },
  {
    id: 5,
    title: 'The Feels',
    performedBy: 'TWICE',
    image: RecentlyMusicBanner5,
    url: TheFeelsAudio,
  },
];

export const allMusic = [
  {
    id: 1,
    title: 'Psycho',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner4,
    playIcon: PlayIcon,
  },
  {
    id: 2,
    title: 'Milkshake',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner5,
    playIcon: PlayIcon,
  },
  {
    id: 3,
    title: 'Not You',
    performedBy: 'Alan Walker, Emma Steinbakken',
    image: TrendingMusicBanner,
    playIcon: PlayIcon,
  },
  {
    id: 4,
    title: 'Alone, Pt. II',
    performedBy: 'Alan Walker, Ava Max',
    image: TrendingMusicBanner4,
    playIcon: PlayIcon,
  },
  {
    id: 5,
    title: 'What is Love',
    performedBy: 'TWICE',
    image: RecentlyMusicBanner,
  },
];

export const genresMusic = [
  {
    id: 1,
    title: 'Pop',
  },
  {
    id: 2,
    title: 'Rock',
  },
  {
    id: 3,
    title: 'Jazz',
  },
  {
    id: 4,
    title: 'Hip Hop',
  },
  {
    id: 5,
    title: 'R&B',
  },
  {
    id: 6,
    title: 'Country',
  },
  {
    id: 7,
    title: 'Electronic',
  },
];

export const vibesMusic = [
  {
    id: 1,
    title: 'Happy',
  },
  {
    id: 2,
    title: 'Sad',
  },
  {
    id: 3,
    title: 'Chill',
  },
  {
    id: 4,
    title: 'Party',
  },
  {
    id: 5,
    title: 'Romantic',
  },
  {
    id: 6,
    title: 'Workout',
  },
  {
    id: 7,
    title: 'Focus',
  },
];

export const recentlySearchMusic = [
  {
    id: 1,
    title: 'Psycho',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner4,
  },
  {
    id: 2,
    title: 'Milkshake',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner5,
  },
  {
    id: 3,
    title: 'Not You',
    performedBy: 'Alan Walker, Emma Steinbakken',
    image: TrendingMusicBanner,
  },
  {
    id: 4,
    title: 'Alone, Pt. II',
    performedBy: 'Alan Walker, Ava Max',
    image: TrendingMusicBanner4,
  },
  {
    id: 5,
    title: 'What is Love',
    performedBy: 'TWICE',
    image: RecentlyMusicBanner,
  },
];

export const favoriteMusic = [
  {
    id: 1,
    title: 'Psycho',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner4,
  },
  {
    id: 2,
    title: 'Milkshake',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner5,
  },
  {
    id: 3,
    title: 'Not You',
    performedBy: 'Alan Walker, Emma Steinbakken',
    image: TrendingMusicBanner,
  },
  {
    id: 4,
    title: 'Alone, Pt. II',
    performedBy: 'Alan Walker, Ava Max',
    image: TrendingMusicBanner4,
  },
  {
    id: 5,
    title: 'What is Love',
    performedBy: 'TWICE',
    image: RecentlyMusicBanner,
  },
  {
    id: 1,
    title: 'Psycho',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner4,
  },
  {
    id: 2,
    title: 'Milkshake',
    performedBy: 'Red Velvet',
    image: ArtistMusicBanner5,
  },
  {
    id: 3,
    title: 'Not You',
    performedBy: 'Alan Walker, Emma Steinbakken',
    image: TrendingMusicBanner,
  },
  {
    id: 4,
    title: 'Alone, Pt. II',
    performedBy: 'Alan Walker, Ava Max',
    image: TrendingMusicBanner4,
  },
];
