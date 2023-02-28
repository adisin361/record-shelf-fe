import makeRequest from "../makeRequest";
import { GET_LIKES } from "../../Constants/apiEndPoints";

const likeMapperToMusic = async (musicData, navigate) => {
  try {
    const newMusicData = [];
    for (let i = 0; i < musicData.length; ++i) {
      const likes = await makeRequest(GET_LIKES(musicData[i].id), navigate);
      newMusicData.push({ ...musicData[i], likes: likes.data });
    };
    return newMusicData;
  }
  catch (error) {
    navigate(`/error/${error?.code}`);
  }
}

export default likeMapperToMusic;