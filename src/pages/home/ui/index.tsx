import { ComedyFilms } from './comedy-films';
import { Drama } from './drama';
import { Fantastic } from './fantastic';
import { ForFamily } from './for-family';
import { Genres } from './genres';
import { Hero } from './hero';
import { Info } from './info';
import { NewFilms } from './new-films';

export const HomePage = () => (
  <>
    <Hero />
    <Genres />
    <ComedyFilms />
    <NewFilms />
    <ForFamily />
    <Drama />
    <Fantastic />
    <Info />
  </>
);
