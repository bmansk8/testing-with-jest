import React, { useState, useEffect } from "react";
import getPhotos from './services/roverPhotos'

export const NASARover = function NASARover() {
  const [data, setData] = useState([
    //dummy arr so data is not undefined on first render
    {'img_src':'searching...'}
  ]);

  useEffect(() => {
    //pinging nasa
    const fetchData = async () => {
      const i = await getPhotos();
      setData(i);
    };

    fetchData();
  }, []);

  //mapping through imgs and displaying them in imgs tags
  return (
    <div>
      <h1 id='roverH1' className='text-center '>Photos from mars</h1>
      <div id='rover-photos'>
        {data.map((obj, index) => (
          <img alt={obj.img_src} className='imgs shadow-lg rounded' src={obj.img_src} key={index}></img>
        ))}
      </div>
    </div>
  );
}