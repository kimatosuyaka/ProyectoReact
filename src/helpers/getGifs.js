export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=KRd2DFMmJAq2pfDvOGO55aWUYQSbPQNL`;
  //${category}

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url, // ? es una condicion
    };
  });

  return gifs;
};
