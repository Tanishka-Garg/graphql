import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetUsers {
    users {
      name
      id
      age
      nationality
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query GetMovies {
    movies {
      name
      genre
      id
    }
  }
`;
const QUERY_GET_MOVIE = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      id
      name
      genre
    }
  }
`;
const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      name
      email
      age
      nationality
    }
  }
`;

const DataDisplay = () => {
  //user states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");

  const [movieSearched, setMovieSearched] = useState("");
  const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);

  const [fetchMovie, { data: fetchMovieData, error: fetchMovieError }] =
    useLazyQuery(QUERY_GET_MOVIE);

  const [createUser] = useMutation(CREATE_USER);

  if (loading) {
    <h2>loading</h2>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="nationality"
          onChange={(event) => {
            setNationality(event.target.value);
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                input: {
                  name,
                  email,
                  age: Number(age),
                  nationality: nationality.toUpperCase(),
                },
              },
            });
            refetch();
          }}
        >
          Crete User
        </button>
      </div>
      <div>
        <h1>list of users</h1>
        {data &&
          data.users.map((user) => {
            return (
              <div>
                <p>Name: {user.name}</p>
                <p>age: {user.age}</p>
                <p>id: {user.id}</p>
                <p>nationality:{user.nationality}</p>
              </div>
            );
          })}
      </div>
      <div>
        <h1>list of movies</h1>
        {movieData &&
          movieData.movies.map((movies) => {
            return (
              <div>
                <p>Name: {movies.name}</p>
                <p>genre: {movies.age}</p>
                <p>id: {movies.id}</p>
              </div>
            );
          })}
      </div>
      <div>
        <input
          type="text"
          placeholder="search a movie"
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            fetchMovie({ variables: { name: movieSearched } });
          }}
        >
          search
        </button>

        <div>
          {fetchMovieData && (
            <div>
              <h4>MOVIE:{fetchMovieData.movie.name}</h4>
              <p>genre: {fetchMovieData.movie.age}</p>
              <p>id: {fetchMovieData.movie.id}</p>
            </div>
          )}
          {fetchMovieError && <h3>movie does not exist</h3>}
        </div>
      </div>
    </>
  );
};

export default DataDisplay;
