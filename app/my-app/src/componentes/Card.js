import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Card (props) {
  console.log(props)
  
  return (
    <div>
      <div>
        {props.player.img} - {props.player.number}- {props.player.name} - {props.player.stars} -{props.player.position.name}
      </div>
    </div>
  );

  
}

export default Card