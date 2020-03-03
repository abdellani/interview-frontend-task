import React from 'react';
import classNames from 'classnames';
const Square = ({ green,red }) => (
  <div className={classNames('slot', { green },{ red })}></div>
);

export default Square;
