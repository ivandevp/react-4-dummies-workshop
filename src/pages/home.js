import React from 'react';
import { Link } from '@reach/router';
import { exercises } from '../utils/exercises';


const Home = () => {
  return (
    <main>
      <ul>
        {exercises.map(({ title, filename }) => (
          <li key={filename}>
            <div>
              {filename}
              {'. '}
              <Link to={`/${filename}`}>{title}</Link>{' '}
              <small>
                <Link to={`/${filename}/exercise`}>(ejercicio)</Link>{' '}
                <Link to={`/${filename}/result`}>(resultado)</Link>
              </small>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
