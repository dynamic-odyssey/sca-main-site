<script lang="ts">
  import { link } from "svelte-spa-router";
  import { fade, slide } from "svelte/transition";

  let images = [
    "/img/2024 Calendar/Cover.png", // Replace with your actual image paths
    "/img/2024 Calendar/January.png",
    "/img/2024 Calendar/February.png",
    "/img/2024 Calendar/March.png",
    "/img/2024 Calendar/April.png",
    "/img/2024 Calendar/May.png",
    "/img/2024 Calendar/June.png",
    "/img/2024 Calendar/July.png",
    "/img/2024 Calendar/August.png",
    "/img/2024 Calendar/September.png",
    "/img/2024 Calendar/October.png",
    "/img/2024 Calendar/November.png",
    "/img/2024 Calendar/December.png",
  ];
  let currentSlide = 0;
  let transition = slide;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    changeTransition();
  }

  function previousSlide() {
    currentSlide = (currentSlide + images.length - 1) % images.length;
    changeTransition();
  }

  function changeTransition() {
    const transitions = [fade, slide]; // Add more transitions if needed
    transition = transitions[Math.floor(Math.random() * transitions.length)];
  }
</script>

<div id="calendar-section" class="container-xxl py-5">
  <div class="container">
    <div class="row g-5">
      <div
        class="col-lg-6 wow fadeInUp"
        data-wow-delay="0.1s"
        style="min-height: 400px;"
      >
        <div class="slideshow-container">
          {#each images as image, index}
            {#if index === currentSlide}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                class="slide"
                in:transition={{ duration: 500 }}
              />
            {/if}
          {/each}
          <div class="button-container">
            <button on:click={previousSlide}>Previous</button>
            <button on:click={nextSlide}>Next</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          2024 School Calendar
        </h6>
        <h1 class="mb-4">Get Ready for an Exciting Academic Journey!</h1>
        <p class="mb-4">
          Welcome to the 2024 academic year! Our School Calendar is your
          roadmap, detailing the opening and closing dates, alongside the
          observance of public holidays. Stay ahead and mark your dates for a
          productive and enriching year.
        </p>
        <a
          class="btn btn-warning py-3 px-5 mt-2 me-3"
          href="https://its.elearning-swakopca.edu.na/register">Enrol Now</a
        >
        <a class="btn btn-primary py-3 px-5 mt-2" use:link href="/contact"
          >Get In Touch</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .slideshow-container {
    position: relative;
    max-width: 100%;
    height: 400px;
    margin: auto;
    overflow: hidden;
  }
  .slide {
    width: 100%;
    height: 100%;
  }
  .button-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 2;
  }
</style>
