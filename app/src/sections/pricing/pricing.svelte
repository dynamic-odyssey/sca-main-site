<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div class="container-xxl py-5">
  <div class="container">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 class="section-title bg-white text-center text-primary px-3">
        Pricing
      </h6>
      <h1 class="mb-5">School Fees</h1>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="course-item price-item bg-light">
          <div class="position-relative overflow-hidden d-flex flex-column">
            <img
              class="img-fluid mx-auto"
              width="100%"
              src="img/school-fees/pre-primary.png"
              alt=""
            />
            <div
              class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
            >
              <a
                href="https://its.elearning-swakopca.edu.na/register"
                class="flex-shrink-0 btn btn-sm btn-primary px-3"
                style="border-radius: 30px 30px 30px 30px;">Join Now</a
              >
            </div>
          </div>
          <div class="text-center p-4 pb-0">
            <h5 class="mb-4">Son Shine Kids Preschool</h5>
            <h3 class="mb-0">N$1000.00 <small>p/m</small></h3>
            <p>(Half Day)</p>
            <h3 class="mb-0">N$1540.00 <small>p/m</small></h3>
            <p>(Full Day)</p>
            <h3 class="mb-0">N$71.00 <small>p/d</small></h3>
            <p>(Only if arranged)</p>
            <div class="mb-3">
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small>(8)</small>
            </div>
          </div>
          <div class="d-flex flex-column">
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-baby text-primary" />
              <p class="p-0 m-0 w-75">3-4 year olds</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-clock text-primary" />
              <p class="p-0 m-0 w-75">(Half Day) 08H00 - 12H00</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-clock text-primary" />
              <p class="p-0 m-0 w-75">(Full Day) 08H00 - 16H30</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-clock text-primary" />
              <p class="p-0 m-0 w-75">MONDAY-THURSDAY</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-landmark text-primary" />
              <p class="p-0 m-0 w-75">+ Once-off Enrolment Fee</p>
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div class="course-item price-item bg-light">
          <div class="position-relative overflow-hidden d-flex flex-column">
            <img
              class="img-fluid mx-auto"
              width="100%"
              src="img/school-fees/primary.jpeg"
              alt=""
            />
            <div
              class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
            >
              <a
                href="https://its.elearning-swakopca.edu.na/register"
                class="flex-shrink-0 btn btn-sm btn-primary px-3"
                style="border-radius: 30px 30px 30px 30px;">Join Now</a
              >
            </div>
          </div>
          <div class="text-center p-4 pb-0">
            <h5 class="mb-4">Pre-Primary / Grade 0</h5>
            <h3 class="mb-0">N$2000.00 <small>p/m</small></h3>
            <p>(Half Day)</p>
            <div class="mb-3">
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small>(32)</small>
            </div>
          </div>
          <div class="d-flex flex-column">
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-baby text-primary" />
              <p class="p-0 m-0 w-75">5-6 year olds</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-sun text-primary" />
              <p class="p-0 m-0 w-75">08H00am - 12H00pm (Summer)</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-snowflake text-primary" />
              <p class="p-0 m-0 w-75">08H00am - 12H00pm (Winter)</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-clock text-primary" />
              <p class="p-0 m-0 w-75">MONDAY-THURSDAY</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-landmark text-primary" />
              <p class="p-0 m-0 w-75">+ Once-off Enrolment Fee</p>
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div class="course-item price-item bg-light">
          <div
            class="position-relative overflow-hidden d-flex flex-column align-items-center"
          >
            <img
              class="img-fluid"
              width="100%"
              src="img/school-fees/primary.jpeg"
              alt=""
            />
            <div
              class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
            >
              <a
                href="https://its.elearning-swakopca.edu.na/register"
                class="flex-shrink-0 btn btn-sm btn-primary px-3"
                style="border-radius: 30px 30px 30px 30px;">Join Now</a
              >
            </div>
          </div>
          <div class="text-center p-4 pb-0">
            <h5 class="mb-4">Junior Primary / Grade 1-3</h5>
            <h3 class="mb-0">N$2000.00 <small>p/m</small></h3>
            <p>(Half Day)</p>
            <div class="mb-3">
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small>(21)</small>
            </div>
          </div>
          <div class="d-flex flex-column">
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-baby text-primary" />
              <p class="p-0 m-0 w-75">6-7 year olds</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-sun text-primary" />
              <p class="p-0 m-0 w-75">
                07H40am - 13H00pm(12H00pm Fridays only) Summer
              </p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-snowflake text-primary" />
              <p class="p-0 m-0 w-75">
                07H40am - 13H00pm(12H00pm Fridays only) Winter
              </p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-clock text-primary" />
              <p class="p-0 m-0 w-75">MONDAY-FRIDAY</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-landmark text-primary" />
              <p class="p-0 m-0 w-75">+ Once-off Enrolment Fee</p>
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
        <div class="course-item price-item bg-light">
          <div
            class="position-relative overflow-hidden d-flex flex-column align-items-center"
          >
            <img
              class="img-fluid"
              width="100%"
              src="img/school-fees/primary.jpeg"
              alt=""
            />
            <div
              class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
            >
              <a
                href="https://its.elearning-swakopca.edu.na/register"
                class="flex-shrink-0 btn btn-sm btn-primary px-3"
                style="border-radius: 30px 30px 30px 30px;">Join Now</a
              >
            </div>
          </div>
          <div class="text-center p-4 pb-0">
            <h5 class="mb-4">Senior Primary / Grade 4-7</h5>
            <h3 class="mb-0">N$2000.00 <small>p/m</small></h3>
            <p>(Half Day)</p>
            <div class="mb-3">
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small class="fa fa-star text-primary" />
              <small>(7)</small>
            </div>
          </div>
          <div class="d-flex flex-column">
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-baby text-primary" />
              <p class="p-0 m-0 w-75">9-13 year olds</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-sun text-primary" />
              <p class="p-0 m-0 w-75">
                07H40am - 13H00pm(12H00pm Fridays only) Summer
              </p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-snowflake text-primary" />
              <p class="p-0 m-0 w-75">
                07H40am - 13H00pm(12H00pm Fridays only) Winter
              </p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-clock text-primary" />
              <p class="p-0 m-0 w-75">MONDAY-FRIDAY</p>
            </small>
            <small
              class="flex-fill w-100 d-flex justify-content-center align-items-center text-left border-bottom py-2"
            >
              <i class="ps-4 pe-3 fa fa-landmark text-primary" />
              <p class="p-0 m-0 w-75">+ Once-off Enrolment Fee</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
