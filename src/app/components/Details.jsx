import React from 'react'
import {useParams, Link} from 'react-router-dom'


export const Details = function Detailed(passed) {

  //we get photoId from useParams using deconstructing
  //passed to us with the route
  let { photoId } = useParams();

  //then we filter the passed data to match our photoId
  //console.log(passed)
  const arr = sortData();
  function sortData() {
    for (let i = 0; i < passed.data.length; i++) {
      // eslint-disable-next-line
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
        // eslint-disable-next-line
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