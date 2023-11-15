export const getPosts = async () => {
  return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
};

export const getSections = async () => {
  return (await fetch("https://rickandmortyapi.com/api")).json();
};

export const getCharacters = async () => {
  return (await fetch("https://rickandmortyapi.com/api/character")).json();
};

export const getLocation = async () => {
  return (await fetch("https://rickandmortyapi.com/api/location")).json();
};

export const getEpisodes = async () => {
  return (await fetch("https://rickandmortyapi.com/api/episode")).json();
};

interface dataProps {
  title: string;
  userId: number;
  body: string;
}
export const addPost = async (data: dataProps) => {
  return (
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
  ).json();
};
