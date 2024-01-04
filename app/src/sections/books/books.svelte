<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div id="books-lists-section" class="container-xxl py-5">
  <div class="container">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 class="section-title bg-white text-center text-primary px-3">Your Needs</h6>
      <h1 class="mb-5">Required Books Lists</h1>
      <p class="text-center text-muted mb-4">Disclaimer: This book list is subject to change. If you wish to view the list in full view, right click on the image and save or copy the image.</p>
    </div>
    <div class="row g-4 justify-content-center">
      <!-- Tile 1 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="course-item bg-light h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="img/PreK Books.png" alt="Stationery 1" />
          </div>
          <div class="text-center p-4 flex-grow-1 d-flex flex-column justify-content-end">
            <h5 class="mb-4">PreK & K Books</h5>
          </div>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div class="course-item bg-light h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="img/GR 1,2 Books.png" alt="Stationery 2" />
          </div>
          <div class="text-center p-4 flex-grow-1 d-flex flex-column justify-content-end">
            <h5 class="mb-4">Gr 1 & 2 Books</h5>
          </div>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div class="course-item bg-light h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="img/GR 3 Books.png" alt="Stationery 3" />
          </div>
          <div class="text-center p-4 flex-grow-1 d-flex flex-column justify-content-end">
            <h5 class="mb-4">Gr 3 Books</h5>
          </div>
        </div>
      </div>
      <!-- Tile 4 -->
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
        <div class="course-item bg-light h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="img/GR 4-12 Books.png" alt="Stationery 4" />
          </div>
          <div class="text-center p-4 flex-grow-1 d-flex flex-column justify-content-end">
            <h5 class="mb-4">Gr 4 - 12 Books</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .course-item {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .course-item img {
    max-height: 200px; /* Restricting height to maintain aspect ratio */
    width: auto; /* Adjust width automatically */
    object-fit: contain; /* Ensures the image is fully visible */
  }

  .course-item h5 {
    margin-top: auto;
  }
</style>
