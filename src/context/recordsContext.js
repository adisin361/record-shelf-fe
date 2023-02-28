import React from 'react';

const RecordsContext = React.createContext({});

const RecordProvider = ({ children }) => {
  const [records, setRecords] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  return (
    <RecordsContext.Provider value={{ records, setRecords, genres, setGenres }}>
      {children}
    </RecordsContext.Provider>
  )
};

export { RecordsContext, RecordProvider };