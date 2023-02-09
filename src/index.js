console.log("HI!");

import { getPicture } from "./scripts/getApi";
import { createCards } from "./scripts/galleryCards";
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.getElementById("search-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  query = e.currentTarget.searchQuery.value.trim();

  if (query === "") {
    alertNoEmptySearch();
    return;
  }

  getPicture(query)
    .then(({ data }) => {
      console.log(data);

      if (data.totalHits === 0) {
        alertNoImagesByKeyword();
      } else {
        createCards(data.hits);
        simpleLightBox = new SimpleLightbox(".gallery a").refresh();
        alertImagesFoundByKeyword(data);
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      searchForm.reset();
    });
}

function alertNoEmptySearch() {
  Notiflix.Notify.failure(
    "The search string cannot be empty! Please enter some keyword!;)"
  );
}

function alertNoImagesByKeyword() {
  Notiflix.Notify.failure(
    '"Sorry, there are no images matching your search query. Please try again."'
  );
}

function alertImagesFoundByKeyword(data) {
  Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
}
