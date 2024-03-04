<script lang="ts">
  import { link } from "svelte-spa-router";

  export let vmf = false;
</script>

{#if !vmf}
  <div id="services-section" class="container-xxl py-5"></div>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item text-center pt-3 h-100 d-flex flex-column">
            <div class="p-4 flex-grow-1">
              <i class="fa fa-3x fa-graduation-cap text-primary mb-4" />
              <h5 class="mb-3">Educational Expertise</h5>
              <p>
                Swakopmund Christian Academy was established in 1987, ever
                since, it has matured into a High-Quality driven private school.
                Our school has a committed, friendly, qualified, and effective
                teaching staff who at all times act to the benefit of each and
                every learner. We provide a safe school environment where
                learners feel protected and cared for.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item text-center pt-3 h-100 d-flex flex-column">
            <div class="p-4 flex-grow-1">
              <i class="fa fa-3x fa-globe text-primary mb-4" />
              <h5 class="mb-3">Hybrid Learning</h5>
              <p>
                Swakopmund Christian Academy embraces hybrid learning, allowing
                it to give flexible, qualitative, and accessible classes.
                Through platforms like eLearning and ITS (Administrative
                Management) students can access high-quality education from
                anywhere, fostering engagement and collaboration. Masterfully,
                combining digital (online) learning with traditional
                face-to-face teaching.
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
                learning, learner centeredness, critical thinking, and
                creativity. Our skilled teachers guide students in exploring
                their interests and developing their unique talents.
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
                enhance their learning experience and foster a love for
                research, and reading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
 <div id="vision-section" class="container-xxl py-5">
    <div class="container">
        <div class="row g-4 justify-content-center">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-rocket text-primary mb-4"></i>
                        <h5 class="mb-3">Mission</h5>
                        <p>
                            Swakopmund Christian Academy's mission is to cultivate empathetic leaders and perpetual learners who are prepared to achieve academic excellence and contribute positively to society. We offer high-quality education in a nurturing and varied setting that promotes the overall growth of every student.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-eye text-primary mb-4"></i>
                        <h5 class="mb-3">Vision</h5>
                        <p>
                            Swakopmund Christian Academy creates a cooperative setting where students and instructors are encouraged to study, develop, and lead with intention. Educate a child according to his individual needs and values, and as he grows older, he will continue to follow that path. (Proverbs 22:6).
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                        <h5 class="mb-3">Core Values</h5>
                        <p>
                            Swakopmund Christian Academy promotes a lively community where faith influences our quest for education. We promote African greatness, adopt a worldwide viewpoint, and empower students to lead with integrity and innovation.
                        </p>
                    </div>
                </div>
            </div>
            <!-- Core Principles Section -->
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-anchor text-primary mb-4"></i> <!-- Change icon as needed -->
                        <h5 class="mb-3">Core Principles</h5>
                        <p>
                            Swakopmund Christian Academy develops leaders who are steadfast in their faith and exhibit honesty, decency, respect, excellence, compassion, innovation, and open-mindedness. These are the core principles of our institution.
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
