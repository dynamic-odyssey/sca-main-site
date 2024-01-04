<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div id="fees-section" class="container-xxl py-5">
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
            src="img/school-fees/fees.png"
            alt=""
            style="object-fit: contain;"
          />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
        <h6 class="section-title bg-white text-start text-primary pe-3">
          Our Fees
        </h6>
        <h1 class="mb-4">Quality Affordable Education For All</h1>
        <p class="mb-4">
          We are excited to inform all parents, guardians, and students that our
          school has introduced new fees for the upcoming academic year. We
          strive to maintain the highest standards of education and provide
          exceptional learning experiences for our students. To ensure
          transparency and easy access to information, we have made the fees
          schedule readily available in the image on the left. These revised
          fees have been carefully structured to further enhance the educational
          facilities and resources available to our students. They will enable
          us to offer a wide range of enriching activities, updated curricula,
          and improved learning materials to foster an even more rewarding
          academic journey.
        </p>
        <p class="mb-4">
          We understand the significance of financial planning for our school
          community, and we are committed to providing you with the necessary
          information in a clear and accessible manner.
        </p>
        <p class="mb-4">
          As always, we are open to addressing any questions or concerns you may
          have regarding the fee structure. Please do not hesitate to reach out
          to our administrative team, who will be more than happy to assist you.
          We sincerely thank you for your ongoing support and trust in our
          school's commitment to academic excellence.
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
