import React from 'react';
import classNames from 'classnames';
import imageRed from '../images/red.png';
import imageGreen from '../images/green.png';

const Square = ({ green, red }) => (
  <div className={classNames('square', { green }, { red })}>
    {green && <img alt='green' src={imageGreen} />}
    {red && <img alt='red' src={imageRed} />}
  </div>
);

export default Square;
