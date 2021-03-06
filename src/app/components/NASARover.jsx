import React, { useState, useEffect } from "react";
import getPhotos from './services/roverPhotos'
import {
  Link,
  Route,
  useRouteMatch,
  Switch
} from 'react-router-dom';
import { Details } from './Details'

//export const NASARover = function NASARover() {

export const NASARover = function NASARover() {
  const [data, setData] = useState([
    //dummy arr so data is not undefined on first render
    {
      'id': 'searching...',
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
      <Switch>
        <Route exact path={path}>
          <h1 id='roverH1' className='text-center '>Photos from mars</h1>
          <div id='rover-photos'>
            {data.map((obj, index) => (
              <div className='card' key={index}>
                <img alt={obj.img_src} className='imgs shadow-lg rounded' src={obj.img_src}></img>
                <div className='card-body'>
                  <h5 className="card-title">{obj.rover.name} Rover</h5>
                  {/*so i am looping through data and making cards for the photos
                  if you see what nasa returns, they send a ton of stuff including a id
                  so I deconstruct path and url so the path is relative
                  then i send obj.id as part of the url
                */}
                  <Link to={`${url}/${obj.id}`} size='sm' className="btn btn-primary">More Details.</Link>
                </div>
              </div>
            ))}
          </div>
        </Route>
        {/*then use /:photoId as my placeHolder */}
        {/*i'm also passing in the data arr so i can use it in details*/}
        <Route path={`${path}/:photoId`}>
          <Details data={data} />
        </Route>
      </Switch>

    </div>
  );
}