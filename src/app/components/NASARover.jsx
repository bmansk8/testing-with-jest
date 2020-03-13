import React, { Component } from "react";
import getPhotos from './services/roverPhotos'

export const NASARover = class NASARover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    }
  }

  componentDidMount() {
    this.getImages();
    //on mount get photos
  }

  async getImages() {
    //getPhotos is abstracted away so it can be mocked with jest
    const imgs = await getPhotos();
    this.setState({
      imgs: imgs
    })
  }


  //mapping through imgs and displaying them in imgs tags
  render() {
    return (
      <div>
        <h1 id='roverH1' className='text-center '>Photos from mars</h1>
        <div id='rover-photos'>
          {this.state.imgs.map((obj, index) => (
            <img alt={obj.img_src} className='imgs shadow-lg rounded' src={obj.img_src} key={index}></img>
          ))}
        </div>
      </div>
    );
  }
}