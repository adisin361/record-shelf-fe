const uniqueGenre = (musicData) => {
  const uniqueGenre = new Set();
  musicData.map((singleMusic) => {
    uniqueGenre.add(singleMusic.genre.name);
  });
  return Array.from(uniqueGenre);
}

export default uniqueGenre;
