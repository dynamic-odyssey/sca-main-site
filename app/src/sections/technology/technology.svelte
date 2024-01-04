<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div id="technology-section" class="container-xxl py-5">
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
            src="img/Tech Requirements.png"
            alt=""
            style="object-fit: contain;"
          />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          2024 Technology Requirements
        </h6>
        <h1 class="mb-4">Get Equiped for Our High Tech Educational Approach!</h1>
        <p class="mb-4">
          Embrace the Future with Our Advanced Technology-Driven Education!
        </p>
        <p class="mb-4">
          As we step into the 2024 academic year, our commitment to providing a cutting-edge, technology-integrated learning environment has never been stronger. To ensure all students are fully equipped for our high-tech educational approach, we have outlined specific technology requirements.
        </p>
        <h6 class="mb-4">
          Key Technology Essentials:
        </h6>
        <p class="mb-4">
          Personal Laptops/Tablets: Students are expected to have a personal laptop or tablet with specified minimum hardware capabilities to support our digital learning platforms and software.
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
</style>
