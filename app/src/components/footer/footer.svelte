<script lang="ts">
  import { link } from "svelte-spa-router";
  import pb from "../../api/pb";
  import {
    TABLE_NAMES,
    type ISubscribeToMail,
  } from "../../interfaces/interfaces";

  let loading: boolean = false;
  let subscriberDetails: ISubscribeToMail = {
    email: "",
  };

  const subscribeToMailList = async () => {
    if (subscriberDetails.email === "") {
      alert("Please fill in all fields");
      return;
    }

    try {
      loading = true;
      const quote = await pb
        .collection(TABLE_NAMES.MAIL_SUBSCRIBERS)
        .create(subscriberDetails);
      console.log(quote);
      loading = false;

      alert("Successfully subscribed!");
      subscriberDetails = {
        email: "",
      };
    } catch (e) {
      console.log(e);
      loading = false;
      alert("Failed to subscriber! Try again later.");
    }
  };
</script>

<div
  class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
  data-wow-delay="0.1s"
>
  <div class="container py-5">
    <div class="row g-5">
      <div class="col-lg-3 col-md-6">
        <h4 class="text-white mb-3">Quick Link</h4>
        <a class="btn btn-link" use:link href="/">Home</a>
        <a class="btn btn-link" use:link href="/about">About Us</a>
        <a class="btn btn-link" use:link href="/courses">Courses</a>
        <a class="btn btn-link" use:link href="/contact">Contact Us</a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-white mb-3">Contact</h4>
        <p class="mb-2">
          <i class="fa fa-map-marker-alt me-3" />No. 137 Anton Lubowski Street,
          Kramersdorp - Swakopmund, Namibia
        </p>
        <p class="mb-2"><i class="fa fa-phone-alt me-3" />+264 64 404605</p>
        <p class="mb-2">
          <i class="fa fa-envelope me-3" />school.office@swakopca.com
        </p>
        <div class="d-flex pt-2">
          <a class="btn btn-outline-light btn-social" href="https://instagram.com/swakopca?igshid=MmIzYWVlNDQ5Yg=="
            ><i class="fab fa-instagram" /></a
          >
          <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/EDUCATION.LIBERATE.NAMIBIA?mibextid=LQQJ4d"
            ><i class="fab fa-facebook-f" /></a
          >
          <a class="btn btn-outline-light btn-social" href="https://youtube.com/@swakopmundchristianacademy2953"
            ><i class="fab fa-youtube" /></a
          >
          <a class="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/swakopmund-christian-academy/"
            ><i class="fab fa-linkedin-in" /></a
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-white mb-3">Gallery</h4>
        <div class="row g-2 pt-2">
          <div class="col-4">
            <img class="img-fluid bg-light p-1" src="img/English.jpg" alt="" />
          </div>
          <div class="col-4">
            <img
              class="img-fluid bg-light p-1"
              src="img/Mathematics.jpg"
              alt=""
            />
          </div>
          <div class="col-4">
            <img
              class="img-fluid bg-light p-1"
              src="img/Social Studies.jpg"
              alt=""
            />
          </div>
          <div class="col-4">
            <img class="img-fluid bg-light p-1" src="img/Science.jpg" alt="" />
          </div>
          <div class="col-4">
            <img
              class="img-fluid bg-light p-1"
              src="img/Image BG 1.jpg"
              alt=""
            />
          </div>
          <div class="col-4">
            <img
              class="img-fluid bg-light p-1"
              src="img/Image BG 2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-white mb-3">Newsletter</h4>
        <p>
          Stay informed and connected with Swakopmund Christian Academy's
          newsletter. Discover our innovative approach to education, featuring
          skilled developers, online classes, engaging projects, and a
          comprehensive book library, all designed to provide a well-rounded
          education for our students.
        </p>
        <div class="position-relative mx-auto" style="max-width: 400px;">
          <input
            class="form-control border-0 w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
            bind:value={subscriberDetails.email}
          />
          <button
            type="button"
            on:click={() => subscribeToMailList()}
            class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >{#if loading}
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            {:else}
              Subscribe
            {/if}</button
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="copyright">
      <div class="row">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; <a class="border-bottom" href="#"
            >Swakopmund Christian Academy</a
          >, All Right Reserved.
          <br />
          Made By
          <a class="border-bottom" href="https://dynamic-odyssey-trading.com"
            >Dynamic Odyssey trading cc</a
          >
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="footer-menu">
            <a href="/" use:link>Home</a>
            <a href="/about" use:link>About</a>
            <a href="/courses" use:link>Courses</a>
            <a href="/contact" use:link>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
