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
        <h1 class="mb-4">Ms. Simpson, Our Beloved Teacher</h1>
        <p class="mb-4">
          We deeply mourn the loss of Ms. Simpson, a cherished member of our
          school community. Her dedication to teaching and the profound impact
          she had on our lives will always be remembered. Ms. Simpson's kindness
          and inspiring spirit touched us all, leaving a lasting legacy that
          continues to guide us. Our school extends heartfelt sympathies to her
          family, honoring the remarkable contributions she made to our lives.
          She will be greatly missed but never forgotten.
        </p>
        <p class="mb-4">
          We thank you for your support and compassion. Please contact our
          administrative team for any additional information or inquiries.
        </p>
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
