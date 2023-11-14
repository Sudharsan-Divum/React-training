import React, { useState } from "react";
import { observable, observe, makeObservable, action } from "mobx";
import { observer } from "mobx-react";
import {
  getCharacters,
  getEpisodes,
  getLocation,
  getSections,
} from "../serivces";

const [arr, setArr] = useState({});
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
}

export const ApiCalling = new apiCallingImpl();
