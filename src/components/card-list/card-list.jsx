import React from "react";
import './card-list.styles.css';
import Card from "../card/Card";

export const CardList = props => {
  return <div className='card-list'>
    {props.monsters.map((monster, index) => (
      <Card key={monster.id} monster={monster} class="card-container"/>
    ))}
  </div>;
};

export default CardList;
