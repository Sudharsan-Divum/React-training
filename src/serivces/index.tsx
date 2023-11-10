export const getPosts = async () => {
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.json();
};

export const getSections = async () => {
  const response: Response = await fetch("https://rickandmortyapi.com/api");

  return response.json();
};

export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  return response.json();

};

export const getLocation = async () => {
  const response: Response = await fetch(
    "https://rickandmortyapi.com/api/location"
  );

  return response.json();
};

export const getEpisodes = async () => {
  const response: Response = await fetch(
    "https://rickandmortyapi.com/api/episode"
  );

  return response.json();
};
