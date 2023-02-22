// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return directors;
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    const stevenDramaMovies = dramaMovies.filter(movie => movie.director === 'Steven Spielberg');
    return stevenDramaMovies.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    const totalScore = dramaMovies.reduce((acc, movie) => {
      return acc + (movie.score || 0);
    }, 0);
    const averageScore = totalScore / dramaMovies.length;
    return Math.round(averageScore * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    const totalScore = dramaMovies.reduce((acc, movie) => {
      return acc + (movie.score || 0);
    }, 0);
    const averageScore = totalScore / dramaMovies.length;
    return Math.round(averageScore * 100) / 100;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = [...movies].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
    return sortedMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    const movieTitles = sortedMovies.map(movie => movie.title);
    return movieTitles.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const newMovies = movies.map((movie) => {
    const duration = movie.duration;
    let minutes = 0;
    for (let time of duration.split(' ')) {
      if (time.includes('h')) {
        minutes += parseInt(time) * 60;
      } else if (time.includes('min')) {
        minutes += parseInt(time);
      }
    }
    return {
      ...movie,
      duration: minutes,
    };
  });
  return newMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  
  const yearScoreMap = {};
  
  movies.forEach(movie => {
    const year = movie.year;
    const score = movie.score;
    
    if (year in yearScoreMap) {
      yearScoreMap[year].totalScore += score;
      yearScoreMap[year].movieCount++;
    } else {
      yearScoreMap[year] = {totalScore: score, movieCount: 1};
    }
  });
  
  let bestYear = null;
  let bestRate = 0;
  
  for (let year in yearScoreMap) {
    const rate = yearScoreMap[year].totalScore / yearScoreMap[year].movieCount;
    
    if (rate > bestRate) {
      bestYear = year;
      bestRate = rate;
    } else if (rate === bestRate) {
      if (year < bestYear) {
        bestYear = year;
      }
    }
  }
  
  return `The best year was ${bestYear} with an average score of ${bestRate.toFixed(1)}`;
}