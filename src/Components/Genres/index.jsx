import React from 'react';
import './style.css';
import iconGridSrc from '../../design/assets/icon-grid.svg';
import popGenreSrc from '../../design/assets/genre-pop.png';
import countryGenreSrc from '../../design/assets/genre-country.png';
import bollywoodGenreSrc from '../../design/assets/genre-bollywood.png';
import rockGenreSrc from '../../design/assets/genre-rock.png';
import MusicCard from '../MusicCard';
import makeRequest from '../../utils/makeRequest';
import { GET_RECORDS } from '../../Constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
const Genres = () => {
  const navigate = useNavigate();
  const [records, setRecords] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_RECORDS)
      .then((response) => {
        setRecords(response.data);
      })
      .catch((e) => {
        setError(e.message);
      })
  }, []);

  const popArray = [];
  const countryArray = [];
  const rockArray = [];
  const bollywoodArray = [];
  const defaultArray = [];
  records.map((eachRecord) => {
    switch (eachRecord.genre.name) {
      case 'Pop':
        popArray.push(eachRecord);
        break;
      case 'Rock':
        rockArray.push(eachRecord);
        break;
      case 'Bollywood':
        bollywoodArray.push(eachRecord);
        break;
      case 'Country':
        countryArray.push(eachRecord);
        break;
      default:
        defaultArray.push(eachRecord);
    }
  })

  return (
    <>
      <div className='genres-main-container'>
        <div className='genre-header'>
          <p>genres</p>
          <img src={iconGridSrc} alt="grid-icon" onClick={() => {
            navigate('/records');
          }} />
        </div>

        <div className='genre-container'>
          <div className='genre-img'>
            <img src={popGenreSrc} alt="" />
            <button>pop</button>
          </div>
          <div className='music-cardss'>
            {popArray.map((eachRecordData, index) => (
              <MusicCard key={eachRecordData.id} recordData={eachRecordData} index={index} />
            ))}
          </div>
        </div>

        <div className='genre-container'>
          <div className='genre-img'>
            <img src={countryGenreSrc} alt="" />
            <button>country</button>
          </div>
          <div className='music-cardss'>
            {countryArray.map((eachRecordData, index) => (
              <MusicCard key={eachRecordData.id} recordData={eachRecordData} index={index} />
            ))}
          </div>
        </div>

        <div className='genre-container'>
          <div className='genre-img'>
            <img src={bollywoodGenreSrc} alt="" />
            <button>bollywood</button>
          </div>
          <div className='music-cardss'>
            {bollywoodArray.map((eachRecordData, index) => (
              <MusicCard key={eachRecordData.id} recordData={eachRecordData} index={index} />
            ))}
          </div>
        </div>

        <div className='genre-container'>
          <div className='genre-img'>
            <img src={rockGenreSrc} alt="" />
            <button>rock</button>
          </div>
          <div className='music-cardss'>
            {rockArray.map((eachRecordData, index) => (
              <MusicCard key={eachRecordData.id} recordData={eachRecordData} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default Genres;