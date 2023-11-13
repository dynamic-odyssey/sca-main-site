<script lang="ts">
    import { link } from "svelte-spa-router";
  // JavaScript or TypeScript code for this component
</script>

<div class="container-xxl py-5">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="position-relative h-100">
          <!-- Replace with appropriate image -->
          <img class="img-fluid position-absolute w-100 h-100" src="img/PGC.jpg" alt="Prize Giving Contributions" style="object-fit: contain;" />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">Prize Giving Contributions</h6>
        <h1 class="mb-4">Celebrating Student Achievements</h1>
        <p class="mb-4">
          Join us in celebrating our students' achievements by contributing to the Prize Giving event. Your generosity helps us honor their hard work and dedication, inspiring them to continue striving for excellence.
        </p>
        <p class="banner-amount">Contributions Collected: <span>N$400</span></p>
        <!-- Add call-to-action if needed -->
      </div>
    </div>
  </div>
</div>

<style>
  .banner-amount {
    font-weight: bold;
    color: #28a745;
  }
  /* Additional styling as per your website's theme */
</style>
