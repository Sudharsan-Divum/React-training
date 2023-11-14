
import { observable, observe, makeObservable, action } from "mobx";


interface sectionProps {
  character: string;
  location: string;
  episode: string;
}

interface characProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: {};
  episode: [];
  url: string;
  created: string;
}

interface locationProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
  created: string;
}

interface episodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
  url: string;
  created: string;
}

class apiCallingImpl {
  sections: sectionProps[] = [];
  characters: characProps[] = [];
  location: locationProps[] = [];
  episode: episodeProps[] = [];
  constructor() {
    makeObservable(this, {
      sections: observable,
      characters: observable,
      location: observable,
      episode: observable,
    });
  }
  setSections(data: sectionProps[]) {
    this.sections = data;
  }

  setCharacters(data: characProps[]) {
    this.characters = data;

  }

  setLocation(data: locationProps[]) {
    this.location = data;
  }

  setEpisodes(data: episodeProps[]) {
    this.episode = data;
  }
}

export const ApiCalling = new apiCallingImpl();

