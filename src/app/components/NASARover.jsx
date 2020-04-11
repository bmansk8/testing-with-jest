import React, { useState, useEffect } from "react";
import getPhotos from './services/roverPhotos'
import {
  Link,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';

//export const NASARover = function NASARover() {

export const NASARover = function NASARover() {
  const [data, setData] = useState([
    //dummy arr so data is not undefined on first render
    {
      'img_src': 'searching...',
      'rover': {
        'name': 'searching...'
      }
    }
  ]);

  let { path, url } = useRouteMatch();

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
          <div className='card' key={index}>
            <img alt={obj.img_src} className='imgs shadow-lg rounded' src={obj.img_src}></img>
            <div className='card-body'>
              <h5 className="card-title">{obj.rover.name} Rover</h5>
              <Link to={`${url}/${obj.id}`} size='sm' className="btn btn-primary">More Details.</Link>
            </div>
          </div>
        ))}
      </div>

      <Route path={`${path}/:photoId`}>
          <Detailed />
      </Route>

    </div>
  );
}

function Detailed(){

  let { topicId } = useParams();

  return(
    <div>
      <h2>{topicId}</h2>
      <p>hi! i am rendering</p>
    </div>
  )
}