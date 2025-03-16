// Loader.js
import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div className={`loader ${loading ? 'show' : 'hide'}`}>
      <PuffLoader color="red" loading={loading} size={150} />
    </div>
  );
};

export default Loader;
