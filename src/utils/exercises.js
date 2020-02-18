const totalExercises = 1;
const files = Array.from({ length: totalExercises }).map((_, idx) => idx < 10 ? `0${idx}` : idx);

export const pages = files.reduce((prev, filename) => {
  const exercise = require(`../exercises/${filename}`);
  const result = require(`../results/${filename}`);

  prev[filename] = {
    exercise,
    result,
    title: exercise.default.title,
  };

  return prev;
}, {});

export const exercises = files.map(filename => ({
  title: pages[filename].title,
  filename,
}));
