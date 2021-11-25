import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div>
      <div>
        {props.player.img} - {props.player.number}- {props.player.name} -{' '}
        {props.player.stars} -{props.player.position.name}
      </div>
    </div>
  );
}

Card.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Card;
