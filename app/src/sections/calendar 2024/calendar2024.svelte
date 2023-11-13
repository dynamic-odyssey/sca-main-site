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
            src="img/Calendar2024.png"
            alt=""
            style="object-fit: contain;"
          />
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
        <p class="mb-4">
          Right-click on the Calendar and select 'Save Image' to download, or
          simply zoom in on the page to view the Calendar image directly.
        </p>
        <p class="mb-4">
          For additional information or any inquiries, our administrative team
          is here to assist. We appreciate your choice in entrusting us with
          your education and look forward to a stimulating and successful year
          ahead!
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
