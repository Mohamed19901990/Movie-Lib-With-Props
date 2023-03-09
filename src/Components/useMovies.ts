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
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const movieArray = [...movies];

  const setMoviesFirestore = async (movies: any) => {
    for (let index = 0; index < movies.length; index++) {
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
      const tag = { ...doc.data() };

      return { ...tag };
    });
    setMovies([...newmo]);
  };

  /////////////////////  REMOVE  //////////////////////////
  const remove = (targetId: string) => async (e: any) => {
    setMovies([...movies.filter((movies: any) => movies.id !== targetId)]);
    await deleteDoc(doc(db, 'Movies', movies[0].id));
  };

  /////////////////////  CLEAR FILTER //////////////////////////
  const clearHandler = (event: any) => {
    event.preventDefault();
    setButtonDisabled(false);
    oooo();
  };

  /////////////////////  Filter  /////////////////////////////
  const filterHandler = (event: any) => {
    event.preventDefault();
    setButtonDisabled(true);
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
      ///========================== START Firestore Data fetch ===================================///////
      try {
        await addDoc(collection(db, 'Movies'), {
          title: e.target.title.value,
          description: e.target.description.value,
          posterURL: e.target.posterURL.value,
          rating: e.target.rating.value,
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      ///==========================  END Firestore Data fetch ===================================///////

      const querySnapshot = await getDocs(collection(db, 'Movies'));
      const newmo: any = querySnapshot.docs.map((doc) => {
        const tag = { ...doc.data() };
        const id = doc.id;

        return { ...tag, id };
      });
      setMovies([...newmo]);
      setMoviesFirestore(newmo);
      ///// Input Field Initialisation ////////
      e.target.title.value = '';
      e.target.description.value = '';
      e.target.posterURL.value = '';
      e.target.rating.value = '';
    }
  };

  return {
    remove,
    movies,
    clearHandler,
    filterHandler,
    buttonDisabled,
    submitHandler,
    movieArray,
    db,
    oooo,
  };
};

export { useMovies as default };
