<script lang="ts">
  import { link } from "svelte-spa-router";

  export let vmf = false;
</script>

{#if !vmf}
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item text-center pt-3 h-100 d-flex flex-column">
            <div class="p-4 flex-grow-1">
              <i class="fa fa-3x fa-graduation-cap text-primary mb-4" />
              <h5 class="mb-3">Educational Expertise</h5>
              <p>
                With 35 Years of private schooling expertise in education, we
                have a committed, friendly and effective teaching staff who at
                all times act to the benefit of each and every learner. We
                provide a safe school environment where learners feel protected
                and cared for.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item text-center pt-3 h-100 d-flex flex-column">
            <div class="p-4 flex-grow-1">
              <i class="fa fa-3x fa-globe text-primary mb-4" />
              <h5 class="mb-3">Online Classes</h5>
              <p>
                Swakopmund Christian Academy embraces online learning, offering
                flexible and accessible classes. Through platforms like
                E-Learning and ITS, students can access high-quality education
                from anywhere, fostering engagement and collaboration.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item text-center pt-3 h-100 d-flex flex-column">
            <div class="p-4 flex-grow-1">
              <i class="fa fa-3x fa-home text-primary mb-4" />
              <h5 class="mb-3">Projects</h5>
              <p>
                Projects are integral to our curriculum, promoting hands-on
                learning, critical thinking, and creativity. Our skilled
                teachers guide students in exploring their interests and
                developing their unique talents.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div class="service-item text-center pt-3 h-100 d-flex flex-column">
            <div class="p-4 flex-grow-1">
              <i class="fa fa-3x fa-book-open text-primary mb-4" />
              <h5 class="mb-3">Book Library</h5>
              <p>
                While our physical book resources are limited, we are actively
                developing an extensive online book library. Our goal is to
                provide students with a wide range of digital resources to
                enhance their learning experience and foster a love for reading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4 justify-content-center">
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-bible text-primary mb-4" />
              <h5 class="mb-3">Vision</h5>
              <p>
                Train up a child in the way he should go and when he is old he
                will not depart from it. (Proverbs 22: 6) We empower our
                students with everything necessary and inspire one another to
                take thoughtful action.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-church text-primary mb-4" />
              <h5 class="mb-3">Mission</h5>
              <p>
                Our mission is to provide excellence in education through a
                caring and diverse environment that encourages the holistic
                development of each student as part of our mandate. We prepare
                students with the means to succeed in a challenging world.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-cross text-primary mb-4" />
              <h5 class="mb-3">Faith</h5>
              <p>
                We believe: The Bible is the divinely inspired, infallible,
                inerrant and authoritative Word of God. We accept it as our
                supreme final authority in matters of faith, conduct and life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
</style>
