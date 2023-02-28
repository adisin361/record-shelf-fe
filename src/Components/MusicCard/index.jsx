import React from 'react';
import './style.css';
import heartRedSrc from '../../design/assets/heart-red.svg';
import heartGreySrc from '../../design/assets/heart-gray.svg';
import makeRequest from '../../utils/makeRequest';
import { RECORD_LIKES } from '../../Constants/apiEndPoints';
import PropTypes from 'prop-types';

const MusicCard = ({ recordData, index }) => {

  const [likeCount, setLikeCount] = React.useState(recordData.likes.count);
  const [isLiked, setIsLiked] = React.useState(recordData.likes.like);
  const [error, setError] = React.useState();

  const handleLike = async () => {
    const likeData = await makeRequest(RECORD_LIKES(recordData.id), {
      data: { like: !isLiked }
    });
    setLikeCount(likeData.data.count);
    setIsLiked(likeData.data.like);
  };

  return (
    <>
      <div className={index % 2 === 0 ? "card-even" : "card-odd"}>
        <div className='card-img'>
          <img src={recordData.imageUrl} alt="record_picture" />
        </div>
        <div className='card-footer'>
          <div className='meta-data'>
            <p className='song-name'>{recordData.name}</p>
            <p className='song-artist'>{recordData.artist.name}</p>
          </div>
          <div className='likes' onClick={handleLike}>
            <img src={isLiked ? heartRedSrc : heartGreySrc} alt="" />
            <p className='likes-count'>{likeCount}</p>
          </div>
        </div>
      </div>
    </>
  )
};

MusicCard.propTypes = {
  recordData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }),
    genre: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  }),

  index: PropTypes.number.isRequired,
}

// {
//   "id": "cd3cc1e3-e1e0-4ccd-bc67-747648985838",
//   "name": "Lost",
//   "imageUrl": "https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631",
//   "artist": {
//       "id": "496b0a85-2bfa-45bc-8d0f-57fe0ce55708",
//       "name": "Maroon 5"
//   },
//   "genre": {
//       "id": "128aa7f8-c943-48ce-b352-7edd26fa4c6e",
//       "name": "Pop"
//   }
// },
export default MusicCard;

