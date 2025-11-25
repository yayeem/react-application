import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="welcome">HELLO!</h1>
          <p class="content">
            You have arrived at my Web Application built with the React
            framework. This website was created for my Programming Rich-Media
            Application course. It includes lists of popular movies and a “Now
            Playing” section, with all movie data retrieved from The Movie
            Database (TMDB). This page also includes a concession section
            featuring chocolate bars, which I created during class hours. It
            serves as a simple example we developed together with our
            instructor, Tanya.<br></br>
            <br></br>
            For{" "}
            <a href="https://www.themoviedb.org/about" target="_blank">
              TMDB
            </a>
            , this offers a free and reliable API that lets developers gather
            movie information without writing all the content manually. By
            creating an account on <a href="https://www.themoviedb.org/" target="_blank">themoviedb.org</a>, you can get an API key that
            allows you to load and display movie data in your own web projects.
            <br></br>
            <br></br>
            Click{" "}
            <a href="https://www.themoviedb.org/signup" target="_blank">
              here
            </a>{" "}
            to create an account.
            <br></br>
            <br></br>
            <a
              href="https://developer.themoviedb.org/docs/getting-started"
              target="_blank"
            >
              Developer Documentation
            </a>{" "}
            - If you visit this link, you will see a link to sign up for an API
            key.<br></br>
            <a
              href="https://developer.themoviedb.org/reference/getting-started"
              target="_blank"
            >
              API Documentation
            </a>{" "}
            - This link will let us look at the data that we can access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
