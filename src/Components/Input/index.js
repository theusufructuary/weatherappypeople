import React from "react";
import { useState } from "react";

export default function Input({ onSubmit }) {
  const [city, setCity] = useState("");
  function getValue(e) {
    console.log(e.target.value);
    setCity(e.target.value);
  }

  function searchApi(e) {
    e.preventDefault();

    onSubmit(city);
  }

  return (
    <form>
      <input onChange={getValue} placeholder="Search by city"></input>
      <button onClick={searchApi}>Search</button>
    </form>
  );
}
