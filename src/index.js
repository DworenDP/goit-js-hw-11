console.log("HI!");

import Notiflix from "notiflix";
import { getPicture } from "./scripts/getApi";

const form = document.getElementById("search-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  query = e.currentTarget.searchQuery.value.trim();

  getPicture(query).then(({ data }) => {
    console.log(data);
  });
}


