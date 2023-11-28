interface dataProps {
  title: string;
  userId: number;
  body: string;
  
}
interface postProps {
  title: string;
  userId: number;
  body: string;
 
}

export const getPosts = async () => {
  return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
};

export const getSections = async () => {
  return (await fetch("https://rickandmortyapi.com/api")).json();
};

export const getCharacters = async (currentPage: number): Promise<any> => {
  return (
    await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
  ).json();
};

export const getLocation = async () => {
  return (await fetch("https://rickandmortyapi.com/api/location")).json();
};

export const getEpisodes = async () => {
  return (await fetch("https://rickandmortyapi.com/api/episode")).json();
};

export const getSingleCharacter = async (id: string | undefined) => {
  return (
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  ).json();
};

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

export const updatePost = async (data: postProps, id: number): Promise<postProps> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const responseData = await response.json();
  
  return responseData;
};

