import React, { useEffect, useState } from "react";
import { db } from "./../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default function AuthTest() {
  const [newName, setNewname] = useState("");
  const [newAge, setNewage] = useState(0);

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  // Function for CRUD system -------------------------------------------------------

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  // return ------------------------------------------------------------------------

  return (
    <div className="absolute top-1/4 left-1/2 -mt-[50px] -ml-[50px]">
      <div className="border border-solid border-red-800 mb-10">
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewname(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setNewage(event.target.value);
          }}
        />

        <button className="bg-red-300" onClick={createUser}>
          Create User
        </button>
      </div>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              className="bg-blue-400"
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increate Age
            </button>
            <button
              className="bg-green-400"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}
