export { createCards };

const gallery = document.querySelector(".gallery");

function createCards(cards) {
  const markup = cards
    .map((card) => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = card;

      return `<a class="gallery_item" href=${largeImageURL}>
      <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${downloads}
    </p>
  </div>
</div>
</a>`;
    })
    .join();

  gallery.insertAdjacentHTML("beforeend", markup);
}
