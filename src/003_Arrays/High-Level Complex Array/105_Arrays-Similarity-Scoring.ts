type Movie = {
  title: string;
  genres: string[];
};

let movies: Movie[] = [
  { title: "Inception", genres: ["Sci-Fi", "Action", "Thriller"] },
  { title: "Interstellar", genres: ["Sci-Fi", "Drama"] },
  { title: "Avengers", genres: ["Action", "Superhero"] },
  { title: "Titanic", genres: ["Romance", "Drama"] }
];

// Recommend movies similar to "Inception"
let target = movies.find(m => m.title === "Inception");
let recommendations = movies
  .filter(m => m.title !== target?.title)
  .map(m => {
    let common = m.genres.filter(g => target?.genres.includes(g));
    return { title: m.title, score: common.length };
  })
  .sort((a, b) => b.score - a.score);

console.log("=== Recommendations for Inception ===");
console.table(recommendations);
