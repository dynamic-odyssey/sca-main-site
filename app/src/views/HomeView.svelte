<script lang="ts">
  import { onMount } from 'svelte';
  import About from "../sections/about/about.svelte";
  import Categories from "../sections/categories/categories.svelte";
  import Courses from "../sections/courses/courses.svelte";
  import Fees from "../sections/fees/fees.svelte";
  import Pricing from "../sections/pricing/pricing.svelte";
  import Services from "../sections/services/services.svelte";
  import Team from "../sections/team/team.svelte";
  import Carousel from "svelte-carousel";
    import WhatWeAreNot from "../sections/what-we-are-not/whatWeAreNot.svelte";

  let carousel: any; // for calling methods of the carousel instance

  const handleSlideChangeClick = (prev: boolean) => {
    if (prev) carousel.goToPrev();
    else carousel.goToNext();
  };

  onMount(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '65dc271234e9116cc9b62260' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    document.body.appendChild(script);
  });
</script>

<div class="container-fluid p-0 mb-5">
  <Carousel
    bind:this={carousel}
    arrows={true}
    infinite={true}
    dots={false}
    duration={2000}
    autoplay={true}
    autoplayDuration={7000}
    class="intro wow fadeInUp"
    data-wow-delay="0.6s"
  >
    <div class="intro-item position-relative">
      <img class="img-fluid" src="img/Image BG 1.jpg" alt="" />
      <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style="background: rgba(24, 29, 56, .7);"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="intro-content col-sm-10 col-lg-8">
              <h5 class="text-primary text-uppercase mb-3 animated slideInDown">
                Experience the Best Online Learning
              </h5>
              <h1 class="display-3 text-white animated slideInDown">
                Unleashing the Potential of Every Student
              </h1>
              <p class="fs-5 text-white mb-4 pb-2">
                At Swakopmund Christian Academy (SCA), we are dedicated to
                providing an exceptional e-learning platform tailored to address
                the unique needs of our students. Our comprehensive curriculum
                and advanced communication tools empower learners to bridge
                their learning gaps and reach their full potential.
              </p>
              <a
                href="https://online.elearning-swakopca.edu.na/"
                class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >Read More</a
              >
              <a
                href="https://its.elearning-swakopca.edu.na/register"
                class="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >Join Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-item position-relative w-100">
      <img class="img-fluid" src="img/Image BG 2.jpg" alt="" />
      <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style="background: rgba(24, 29, 56, .7);"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="intro-content col-sm-10 col-lg-8">
              <h5 class="text-primary text-uppercase mb-3 animated slideInDown">
                Embrace the Best of Blended Education
              </h5>
              <h1 class="display-3 text-white animated slideInDown">
                Flexible Learning Options for Every Student
              </h1>
              <p class="fs-5 text-white mb-4 pb-2">
                Whether you prefer the convenience of learning from home or the
                benefits of face-to-face interaction, SCA offers a blended
                education approach that combines the best of both worlds
                suitable for any learning environment. Our learning facilities
                provide a nurturing environment, while our expert tutors deliver
                personalized guidance and instruction.
              </p>
              <a
                href="https://online.elearning-swakopca.edu.na/"
                class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >Read More</a
              >
              <a
                href="https://its.elearning-swakopca.edu.na/register"
                class="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >Join Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div slot="prev">
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
        on:click={() => handleSlideChangeClick(true)}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
    </div>
    <div slot="next">
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
        on:click={() => handleSlideChangeClick(false)}
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </Carousel>
</div>

<Services />
<About />
<WhatWeAreNot />
<Categories />
<Courses />
<Fees />
<Team showAll={false} />

<style>
  .intro-item,
  .intro-item img {
    width: 100vw !important;
    max-height: 700px;
  }

  @media (max-width: 1000px) {
    .intro-item img {
      max-height: 600px;
      height: 500px;
    }
  }

  @media (max-width: 700px) {
    .intro-content {
      padding: 3rem;
    }
    .intro-content h1 {
      font-size: x-large;
    }
  }

  @media (max-width: 450px) {
    .intro-content p {
      font-size: medium !important;
    }
  }
</style>
