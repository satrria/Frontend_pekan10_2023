/* eslint-disable react-hooks/exhaustive-deps */
import StyledHero from "./Hero.styled";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    // Melakukan Fetch data dari API omdb.
    const response = await fetch(url);
    const data = await response.json();

    // Update state movie dengan data movie (hasil fetch)
    setMovie(data);
  }

  /**
   * Menjalankan useEffect.
   * Parameter kedua digunakan untuk custom lifecycle update.
   * Jika state di dalam array berubah, maka jalankan useEffect lagi (lifecycle update).
   * Jika state di dalam array kosong, maka jalankan sekali (lifecycle mount).
   */
  useEffect(fetchMovie, []);

  // Tampilkan state movie.
  console.log(movie);

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.Title}</h2>
          <h3 className="hero__genre">Genre: {movie.Genre}</h3>
          <p className="hero__description">{movie.Plot}</p>
          <Button>Watch</Button>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src={movie.Poster}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
