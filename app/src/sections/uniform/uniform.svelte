<script lang="ts">
  import { link } from "svelte-spa-router";

  let currentImageIndex = 0;
  const images = ["img/Uniform.png", "img/Uniform Address.png"]; // Replace with your actual image paths

  function changeImage(next) {
    if (next) {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    } else {
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
    }
  }
</script>

<div id="uniform-section" class="container-xxl py-5">
  <div class="container">
    <div class="row g-5">
      <div
        class="col-lg-6 wow fadeInUp"
        data-wow-delay="0.1s"
        style="min-height: 400px;"
      >
        <div class="position-relative h-100">
          <img
            class="img-fluid position-absolute w-100 h-100"
            src={images[currentImageIndex]}
            alt="Uniform Image"
            style="object-fit: contain;"
          />
          <button
            on:click={() => changeImage(false)}
            class="slideshow-button left">Previous</button
          >
          <button
            on:click={() => changeImage(true)}
            class="slideshow-button right">Next</button
          >
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          School Uniform 2024
        </h6>
        <h1 class="mb-4">Dress Smartly for Success!</h1>
        <p class="mb-4">
          We're excited to introduce our school uniform: a crisp white shirt
          paired with grey pants. Complementing these are white or grey socks
          and standard school shoes. Our uniform symbolizes our commitment to
          excellence and unity.
        </p>
        <p class="mb-4">
          Additionally, for comfort and style, we have a tracksuit available at
          Alleta's Uniforms (0813333671). Ensure your wardrobe is ready for the
          upcoming academic year with these essential items.
        </p>
        <p class="mb-4">
          For more details or questions about the uniform, feel free to contact
          our administrative team. We appreciate your cooperation in maintaining
          our school's prestigious image.
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
  .slideshow-button {
    position: absolute;
    bottom: 10px;
    padding: 5px 10px;
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;
  }

  .slideshow-button.left {
    left: 10px;
  }

  .slideshow-button.right {
    right: 10px;
  }
</style>
