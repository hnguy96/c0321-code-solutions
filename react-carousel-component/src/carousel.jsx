import React, { Component } from 'react';
import Images from '../src/images';
import Controls from '../src/controls';
import Indicators from './indicators';

export default class Carousel extends Component {
  render() {
    return (
      <>
        <Images />
        <Controls />
        <Indicators />
      </>
    );
  }
}
