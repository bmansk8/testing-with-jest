import React, { useState, useEffect } from "react";
import getPhotos from './services/roverPhotos'
import {
  Link,
  Route,
  useRouteMatch,
  useParams,
  Switch
} from 'react-router-dom';

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
        {/*i'm also passing in the data arr so ican use it in details*/}
        <Route path={`${path}/:photoId`}>
          <Detailed data={data} />
        </Route>
      </Switch>

    </div>
  );
}

function Detailed(passed) {

  //we get photoId from useParams using deconstructing
  const { photoId } = useParams();

  //then we filter the passed data to match our photoId
  //console.log(passed)
  const arr = sortData();
  function sortData() {
    for (let i = 0; i < passed.data.length; i++) {
      if (passed.data[i].id == photoId) {
        return passed.data[i]
      }
    }
    //by default return first index. cause of async call first render will be searching...
    return passed.data[0];
  }

  //then we get the full name of the rover from arr.rover.cameras
  const name = findFullName();
  function findFullName() {
    if (arr.rover.cameras) {
      for (let i = 0; i < arr.rover.cameras.length; i++) {
        //loop through cameras till cameras[i] matches rover_id
        if (i == arr.camera.rover_id) {
          return arr.rover.cameras[i].full_name;
        }
      }
    }else{
      //return searching.. for first render till async promise is fulfilled
      return 'searching...'
    }
  }

  return (
    <div className='card' id='detailsCard'>
      <h2 className='card-title'>Photo Id: {photoId}</h2>
      <div className='card-body'>
        <p className='card-text'>rover name: {arr.rover.name || 'searching...'}</p>
        <img alt='searching...' id='detailsImg' src={arr.img_src}></img>
      </div>
      <div className='col-sm'>
        <ul>
          <li>status: {arr.rover.status || 'searching...'}</li>
          <li>launch date: {arr.rover.launch_date || 'searching...'}</li>
          <li>landing date: {arr.rover.landing_date || 'searching...'}</li>
          <li>fullname of camera: {name}</li>
          <li>id of camera: {arr.rover.id || 'searching...'}</li>
          <li>earth date: {arr.earth_date || 'searching...'}</li>
          <li>img src: <a href={arr.img_src}>{arr.img_src || 'searching...'}</a></li>
        </ul>
        <Link to='/quotes' size='sm' className="btn btn-primary" >Back</Link>
      </div>
    </div>
  )
}