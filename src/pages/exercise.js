import React from 'react';
import {Link} from '@reach/router';
import ComponentContainer from '../components/component-container';
import NavigationFooter from '../components/navigation-footer';
import { pages } from '../utils/exercises';
import styles from './exercise.module.css';

const Exercise = ({ exerciseId }) => {
  const {
    exercise: {default: Exercise},
    result: {default: Result},
  } = pages[exerciseId];

  console.log(styles);
  return (
    <div className={styles.container}>
      <h1>{Exercise.title}</h1>
      <div className={styles.preview}>
        <ComponentContainer
          label={<Link to={`/${exerciseId}/exercise`}>Ejercicio</Link>}
        >
          <Exercise />
        </ComponentContainer>
        <ComponentContainer
          label={<Link to={`/${exerciseId}/result`}>Resultado</Link>}
        >
          <Result />
        </ComponentContainer>
      </div>
      <NavigationFooter exerciseId={exerciseId} type="page" />
    </div>
  );
};

export default Exercise;
