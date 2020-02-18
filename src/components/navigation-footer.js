import React from 'react';
import {Link} from '@reach/router';
import {pages} from '../utils/exercises';

const NavigationFooter = ({ exerciseId, type }) => {
  const current = pages[exerciseId];
  let suffix = '';
  let Comp = current.result;;

  if (type === 'exercise') {
    suffix = '/exercise';
    Comp = current.exercise;
  } else if (type === 'final') {
    suffix = '/final';
  }

  return (
    <div>
      <div>
        {Comp.previous ? (
          <Link to={`/${Comp.previous}${suffix}`}>
            {pages[Comp.previous].title}{' '}
            <span role="img" aria-label="previous">
              👈
            </span>
          </Link>
        ) : null}
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {Comp.next ? (
          <Link to={`/${Comp.next}${suffix}`}>
            <span role="img" aria-label="next">
              👉
            </span>{' '}
            {pages[Comp.next].title}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationFooter;
