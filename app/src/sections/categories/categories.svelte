<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div id="categories-section" class="container-xxl py-5 category">
  <div class="container">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 class="section-title bg-white text-center text-primary px-3">
        Categories
      </h6>
      <h1 class="mb-5">Courses Categories</h1>
    </div>
    <div class="row g-3">
      <div class="col-lg-7 col-md-6">
        <div class="row g-3">
          <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
            <a
              class="position-relative d-block overflow-hidden"
              href="https://online.elearning-swakopca.edu.na"
            >
              <img class="img-fluid" src="img/Mathematics.jpg" alt="" />
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style="margin: 1px;"
              >
                <h5 class="m-0">Mathematics</h5>
                <small class="text-primary">CCSS, USA</small>
              </div>
            </a>
          </div>
          <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
            <a
              class="position-relative d-block overflow-hidden"
              href="https://online.elearning-swakopca.edu.na"
            >
              <img class="img-fluid" src="img/Science.jpg" alt="" />
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style="margin: 1px;"
              >
                <h5 class="m-0">NGSS Science</h5>
                <small class="text-primary">NGSS, USA</small>
              </div>
            </a>
          </div>
          <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
            <a
              class="position-relative d-block overflow-hidden"
              href="https://online.elearning-swakopca.edu.na"
            >
              <img class="img-fluid" src="img/Social Studies.jpg" alt="" />
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style="margin: 1px;"
              >
                <h5 class="m-0">Social Studies</h5>
                <small class="text-primary">NCSS, USA</small>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        class="col-lg-5 col-md-6 wow zoomIn"
        data-wow-delay="0.7s"
        style="min-height: 350px;"
      >
        <a
          class="position-relative d-block h-100 overflow-hidden"
          href="https://online.elearning-swakopca.edu.na"
        >
          <img
            class="img-fluid position-absolute w-100 h-100"
            src="img/English.jpg"
            alt=""
            style="object-fit: cover;"
          />
          <div
            class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
            style="margin:  1px;"
          >
            <h5 class="m-0">English Language Arts</h5>
            <small class="text-primary">CCSS, USA</small>
          </div>
        </a>
      </div>
    </div>
    <div>
      <a
          class="btn btn-warning py-3 px-5 mt-2 me-3"
          href="https://online.elearning-swakopca.edu.na">Curriculum</a
        >
    </div>
  </div>
</div>

<style>
</style>
