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
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year;
    }
  });
  return sortedMovies;
}







// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const sortedTitles = movies.map(movie => movie.title)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return sortedTitles.slice(0, 20);
}








// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes







// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
}