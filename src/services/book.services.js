import { db } from "../firebase-config";

import {
  collection,  //Books
  getDocs,     //Give us all the document from the FireStore
  getDoc,      //If we want indivisual document from FireStore
  addDoc,      //Help us to add new document to our collection
  updateDoc,   //Help us to update new document to our collection
  deleteDoc,   //Help us to delete new document to our collection
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "Books");
class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "Books", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "Books", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "Books", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataService();
