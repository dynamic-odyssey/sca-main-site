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
            src="img/Idea.jpg"
            alt=""
            style="object-fit: cover;"
          />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          About Us
        </h6>
        <h1 class="mb-4">Welcome to Tuto ya Tulo ya Africa</h1>
        <p class="mb-4">
          We constantly foster the intellectual and emotional growth of all our
          learners by adapting our program and curriculum as such. We have a
          real and actively strong home vs school communication system. A fun
          and supportive school environment and year planner. Parents are not
          just encouraged but expected to be involved in their child's school
          life and always "kept in the loop'. <strong
            ><b> We disgust in strong terms </b></strong
          >all forms of discrimination, apartheid or groupings. We encourage
          openness, citizenry, unity and reconciliation
        </p>
        <p class="mb-4">
          Our mission is to provide excellence in education through a caring and
          diverse environment that encourages the holistic development of each
          student as part of our mandate. We prepare students with the means to
          succeed in a challenging world
        </p>
        <div class="row gy-2 gx-4 mb-4">
          <div class="col-sm-6">
            <p class="mb-0">
              <i class="fa fa-arrow-right text-primary me-2" />Innovation
            </p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0">
              <i class="fa fa-arrow-right text-primary me-2" />Education
            </p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0">
              <i class="fa fa-arrow-right text-primary me-2" />International
              Standards
            </p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0">
              <i class="fa fa-arrow-right text-primary me-2" />Skilled
              Instructors
            </p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0">
              <i class="fa fa-arrow-right text-primary me-2" />Online Classes
            </p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0">
              <i class="fa fa-arrow-right text-primary me-2" />Blended Learning
            </p>
          </div>
        </div>
        <a class="btn btn-primary py-3 px-5 mt-2" use:link href="/contact"
          >Get In Touch</a
        >
      </div>
    </div>
  </div>
</div>

<style>
</style>
