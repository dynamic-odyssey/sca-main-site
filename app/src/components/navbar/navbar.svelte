<script lang="ts">
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<nav
  class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
>
  <a
    href="index.html"
    class="navbar-brand d-flex align-items-center px-4 px-lg-5 m-2"
  >
    <h2 class="m-0 text-primary">
      <img
        src="img/SCALogo.jpg"
        alt="Swakopmund Christian Academy"
        class="me-3"
      />
      Swakopmund Christian Academy
    </h2>
  </a>
  <button
    type="button"
    class="navbar-toggler me-4"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <div class="navbar-nav ms-auto p-4 p-lg-0">
      <a href="/" use:link use:active class="nav-item nav-link">Home</a>
      <a href="/about" use:link use:active class="nav-item nav-link">About</a>
      <a href="/courses" use:link use:active class="nav-item nav-link"
        >Courses</a
      >
      <a href="/contact" use:link use:active class="nav-item nav-link active"
        >Contact</a
      >
    </div>
    <a
      href="https://its.elearning-swakopca.edu.na/register"
      class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
      >Enrol Now<i class="fa fa-arrow-right ms-3" /></a
    >
  </div>
</nav>

<style>
</style>
