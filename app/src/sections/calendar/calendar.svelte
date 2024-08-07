<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div class="container-xxl py-5">
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
            src="img/SCA2024Calendar.png"
            alt=""
            style="object-fit: contain;"
          />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          SCA School Calendar
        </h6>
        <h1 class="mb-4">Stay updated with all our important dates on the calendar!</h1>
        <p class="mb-4">
          Plan ahead with our 2024 School Calendar. It outlines the school's opening and closing dates, as well as the schedule for public holidays. Stay in the know and be prepared for the year ahead.
        </p>
        <p class="mb-4">
          For more details or questions, contact our administrative team. Thank you for choosing us for your education.
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
