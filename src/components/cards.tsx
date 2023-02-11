import React, { FC, useState } from 'react';
import * as _ from 'lodash';
import Card from './card';

interface CardsProps {
  checkSelection: Function;
}

const Cards:FC<CardsProps> = (props) => {
  const [cardOrder, setCardOrder] = useState(() => {
    const returnArr = [];
    for (let i = 1; i <= 15; i++) {
      returnArr.push(i);
    }
    return _.shuffle(returnArr);
  });

  const randomizeCardOrder = () => {
    setCardOrder(prevState => {
      return _.shuffle(prevState);
    });
  }

  return (
    <div id='Cards'>
      {cardOrder.map(num => {
        return (
          <Card
            key={num}
            num={num}
            randomizeCardOrder={randomizeCardOrder}
            checkSelection={props.checkSelection}
          />
        );
      })}
    </div>
  );
};

export default Cards;