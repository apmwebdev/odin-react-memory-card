import React, { FC } from 'react';

interface CardProps {
  num: number;
  randomizeCardOrder: Function;
  checkSelection: Function;
}

const Card:FC<CardProps> = (props) => {
  const clickHandler = () => {
    if (props.checkSelection(props.num)) {
      props.randomizeCardOrder();
    }
  }

  const namesArray = [
    'Glintoon',
    'Fuzzybop',
    'Bloop',
    'Blimpy',
    'Goober',
    'Scoodly',
    'Wibbly',
    'Fuzzywump',
    'Bippo',
    'Ditzy',
    'Flibbert',
    'Snoodle',
    'Skweaky',
    'Magmapounce',
    'Bouncyfluff',
  ];

  return (
    <div className={`Card Card${props.num}`} onClick={clickHandler}>
      {namesArray[props.num - 1]}
      <div className={`pic pic${props.num}`}></div>
    </div>
  );
};

export default Card;