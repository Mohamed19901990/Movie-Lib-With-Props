/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { useState } from 'react';
import db from '../firebase';

const useMovies = () => {
  const [movies, setMovies]: any = useState([]);
  const [moviesFiltred, setMoviesFiltred]: any = useState([]);
  const [toggleMovie, setToggleMovie]: any = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const test = 'data test';
  const [moviesShow, setMoviesShow]: any = useState([]);
  const movieArray = [...movies];

  const setMovieArray = (moovies: any) => {
    setMovies([...moovies]);

    console.log('Hallo from setMovieArray');
  };

  const setMoviesFirestore = async (movies: any) => {
    for (let index = 0; index < movies.length; index++) {
      console.log(movies[index].id, 'Movies id');
      await setDoc(doc(db, 'Movies', movies[index].id), {
        title: movies[index].title,
        description: movies[index].description,
        posterURL: movies[index].posterURL,
        rating: movies[index].rating,
        id: movies[index].id,
      });
    }
  };

  const oooo = async () => {
    const querySnapshot = await getDocs(collection(db, 'Movies'));
    const newmo: any = querySnapshot.docs.map((doc, i) => {
      console.log(doc.data(), i, doc.id);
      const tag = { ...doc.data() };

      return { ...tag };
    });
    setMovies([...newmo]);
    console.log(newmo, 'newmo from useMovies');
    // e = true;
  };

  console.log(movies, 'movies from useMovies =============');

  /////////////////////  REMOVE  //////////////////////////
  const remove = (targetId: string) => async (e: any) => {
    console.log(movies, 'Hallo from remove up');
    console.log('e.target.id', targetId);
    console.log('movies.id', movies[0].id);
    setMovies([...movies.filter((movies: any) => movies.id !== targetId)]);
    // console.log('e.target.id', e.target.id);
    setMoviesFiltred([
      ...moviesFiltred.filter(
        (moviesFiltred: any) => moviesFiltred.id !== targetId,
      ),
    ]);
    console.log('Hallo from remove down');
    await deleteDoc(doc(db, 'Movies', movies[0].id));
  };

  /////////////////////  CLEAR FILTER //////////////////////////
  const clearHandler = (event: any) => {
    event.preventDefault();
    // MovieFilterArray(originalMovies);
    setButtonDisabled(false);
    setToggleMovie(false);
    oooo();
  };

  /////////////////////  Filter  /////////////////////////////
  const filterHandler = (event: any) => {
    event.preventDefault();
    setButtonDisabled(true);
    // setToggleMovie(true);
    setMovies(
      ...[
        movies.filter(
          (v: any) =>
            v.title === event.target.title2.value ||
            v.rating === event.target.rating2.value ||
            (event.target.rating2.value === '' &&
              event.target.title2.value === ''),
        ),
      ],
    );

    event.target.rating2.value = '';
    event.target.title2.value = '';
  };

  /////////////////  SUBMIT NEW MOVIE  ///////////////////////
  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log('SubmitHandler');

    //////// IF FORM EMPTY PROMPT ALERT ////////
    if (
      e.target.title.value === '' ||
      e.target.description.value === '' ||
      e.target.posterURL.value === '' ||
      e.target.rating.value === ''
    ) {
      window.confirm('Please Fill All The Fields To Add Your Movie');
      e.target.title.value = '';
      e.target.rating.value = '';
      e.target.description.value = '';
      e.target.posterURL.value = '';
    } //// IF NOT, THEN FETCH DATA /////
    else {
      ///========================== Start FireStore Part ===================================///////
      try {
        const docRef = await addDoc(collection(db, 'Movies'), {
          title: e.target.title.value,
          description: e.target.description.value,
          posterURL: e.target.posterURL.value,
          rating: e.target.rating.value,
          // id: Math.random().toFixed(4),
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }

      const querySnapshot = await getDocs(collection(db, 'Movies'));
      const newmo: any = querySnapshot.docs.map((doc, i) => {
        console.log(doc.data(), i, doc.id);
        const tag = { ...doc.data() };
        const id = doc.id;

        return { ...tag, id };
      });
      console.log(newmo, 'newmo');
      // console.log(`${doc.id} => ${...doc.data()}`);
      // console.log(`doc=${doc} doc.index=${doc} ${db.app.name} `);
      ///========================== End FireStore Part ===================================///////
      // setMoviesShow(newmo);
      // setMoviesShow([
      //   ...moviesShow,
      //   {
      //     title: e.target.title.value,
      //     description: e.target.description.value,
      //     posterURL: e.target.posterURL.value,
      //     rating: e.target.rating.value,
      //     id: Math.random().toFixed(3),
      //   },
      // ]);
      setMovieArray([...newmo]);
      setMoviesFirestore(newmo);

      // setMovieArray({
      //   title: e.target.title.value,
      //   description: e.target.description.value,
      //   posterURL: e.target.posterURL.value,
      //   rating: e.target.rating.value,
      //   id: Math.random().toFixed(3),
      // });
      e.target.title.value = '';
      e.target.description.value = '';
      e.target.posterURL.value = '';
      e.target.rating.value = '';
    }
  };

  return {
    remove,
    movies,
    test,
    moviesFiltred,
    toggleMovie,
    clearHandler,
    filterHandler,
    buttonDisabled,
    moviesShow,
    submitHandler,
    movieArray,
    db,
    oooo,
  };
};

export { useMovies as default };
