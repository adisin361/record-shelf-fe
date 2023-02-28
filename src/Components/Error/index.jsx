import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import './style.css';

function Error() {
  const { errorCode } = useParams();
  return (
    <>
      <Header />
      <div className="error">
        <p>Something went wrong!</p>
        {errorCode && (
          <p>
            Error Code:
            {' '}
            {errorCode}
          </p>
        )}
      </div>
    </>
  );
}

export default Error;
