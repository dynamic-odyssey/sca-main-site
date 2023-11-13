<script lang="ts">
  import { link } from "svelte-spa-router";
  // Any JavaScript or TypeScript code necessary for this component
</script>

<div class="container-xxl py-5">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="position-relative h-100">
          <!-- Replace with appropriate image -->
          <img
            class="img-fluid position-absolute w-100 h-100"
            src="img/Dove.jpg"
            alt="In Memory of Ms. Simpson"
            style="object-fit: contain;"
          />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          In Loving Memory
        </h6>
        <h1 class="mb-4">Ms. Simpson, Our Beloved Grade 1 Teacher</h1>
        <p class="mb-4">
          Ms. Simpson left an indelible mark on our hearts and the school
          community. In tribute to Ms. Simpson's legacy, we invite you to join
          us in supporting her family during this time. Your contributions
          affirm the collective spirit and care that she embodied as our Grade 1
          teacher. Let us honor her memory with generosity and kindness.
        </p>
        <p class="mb-4">
          We thank you for your support and compassion. Please contact our
          administrative team for any additional information or inquiries.
        </p>
        <p class="mb-4">E-Wallets: +264 81 827 7935 / 081 259 9878</p>
        <p class="banner-amount">Contributions Collected: <span>N$200</span></p>
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
  /* Additional styling if needed */
</style>
