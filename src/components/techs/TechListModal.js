import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';
// to make requests we can use axios (very good) and fetch api, fetch is integrated with js
// fetch/seek = buscar

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //   eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch('/techs');
    const data = await res.json();
    // format as json

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map((tech) => (
              <TechItem className='collection-item' tech={tech} key={tech.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
