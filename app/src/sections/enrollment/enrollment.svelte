<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div id="calendar-section" class="container-xxl py-5">
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
            src="img/Enrollment.png"
            alt=""
            style="object-fit: contain;"
          />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          2024 Enrollment Procedure
        </h6>
        <h1 class="mb-4">Embark on Your Educational Journey at SCA!</h1>
        <p class="mb-4">
          Begin your adventure at Swakopmund Christian Academy for the 2024
          academic year. Follow our step-by-step guide to ensure a smooth
          enrollment process. Our team is ready to assist you at every step.
        </p>
        <p class="mb-4">
          <strong>Step 1:</strong> Visit SCA's online platform (Click on Enrol Now) and click the "register" button for new parents. <br />
          <strong>Step 2:</strong> Complete the parent registration form and
          submit. <br />
          <strong>Step 3:</strong> Check your email for a registration confirmation. Then confirm your email via the email link. <br />
          <strong>Step 4:</strong> Complete your registration by logging in with your created credentials. <br />
          <strong>Step 5:</strong> Submit detailed information including Profile Details, Additional Parents/Guardians, Student Applications, and Required Documents. <br />
          <strong>Step 6:</strong> The school administrator will review your submission. Approval or denial will be communicated within 48 hours. <br />
        </p>
        <p class="mb-4">
          Don’t miss out on the opportunity to join our diverse and inclusive
          community. For more details about specific grade requirements,
          documentation, and other procedures, please refer to our detailed <a
            href="#enrollmentDetails">Enrollment Policy</a
          >.
        </p>
        <p class="mb-4">
          For any questions or further assistance, our admissions team is eager
          to help. Contact us to ensure a seamless start to your journey with
          SCA.
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
