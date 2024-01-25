import React from 'react';
//import { useMediaQuery } from 'react-responsive';

import Interview from './Interview';
import './styles.css';

function InterviewExercise() {
  /*const isDesktop = useMediaQuery({
    query: '(min-width: 500px)',
  });*/

  return (
    <main>
      <Interview />
      <aside>
        <img
          /*src="/gwen-artist.png"*/
          src="/SdH3vOe.jpg"
          alt="Portrait of the fox"
        />
        <h2>About the Fox</h2>
        <p>
          Gwen Altaria is a contemporary artist known for
          her unique blend of traditional oil painting
          techniques and pop culture references. Born and
          raised in London, England, Vivi had an early
          love for both the fine arts and the fantastical
          worlds of video games.
        </p>
      </aside>
    </main>
  );
}

export default InterviewExercise;
