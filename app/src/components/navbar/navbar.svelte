<script lang="ts">
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
</script>

<nav
  class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
>
  <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5 m-2">
    <h2 class="m-0 text-primary">
      <img
        src="img/SCALogo.jpg"
        alt="Swakopmund Christian Academy"
        class="me-3 nav-brand-image"
      />
      <span class="nav-title-full">Swakopmund Christian Academy</span>
      <span class="nav-title-short">Swakop CA</span>
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
      <!-- Home Dropdown Menu -->
      <div class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          use:link
          use:active>Home</a
        >
        <ul class="dropdown-menu">
          <li>
            <a href="/#services-section" class="dropdown-item">Services</a>
          </li>
          <li><a href="/#about-section" class="dropdown-item">About Us</a></li>
          <li>
            <a href="/#what-we-are-not-section" class="dropdown-item"
              >Perception</a
            >
          </li>
          <li>
            <a href="/#categories-section" class="dropdown-item">Categories</a>
          </li>
          <li><a href="/#courses-section" class="dropdown-item">Courses</a></li>
          <li><a href="/#fees-section" class="dropdown-item">Fees</a></li>
          <li><a href="/#team-section" class="dropdown-item">Gallery</a></li>
          <!-- ... other dropdown items for the Home page sections ... -->
        </ul>
      </div>
      <!-- About Dropdown Menu -->
      <div class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/about"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          use:link
          use:active>About</a
        >
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("vision-section")}
              >Vision & Mission Statement</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("why-us-section")}>Why Us</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("philosophy-section")}
              >Philisophy</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("what-we-are-not-section")}
              >Perception</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("team-section")}
              >Expanded Gallery</a
            >
          </li>
        </ul>
      </div>

      <!-- Governance Menu Item (No Dropdown) -->
      <div class="nav-item">
        <a href="/governance" use:link use:active class="nav-link">Governance</a
        >
      </div>

      <!-- Courses Dropdown Menu -->
      <div class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/courses"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          use:link
          use:active>Courses</a
        >
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("categories-section")}
              >Categories</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("curriculum-section")}
              >Curriculum</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("courses-section")}>Courses</a
            >
          </li>
        </ul>
      </div>
      <!-- Info Dropdown Menu -->
      <div class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/fees"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          use:link
          use:active>Info</a
        >
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("fees-section")}>Our Fees</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("calendar-section")}
              >Academic Calendar</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("stationery-lists-section")}
              >Stationery Lists</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="javascript:void(0);"
              on:click={() => scrollToSection("books-lists-section")}
              >Books Lists</a
            >
          </li>
        </ul>
      </div>
      <!-- Contact Menu Item (No Dropdown) -->
      <div class="nav-item">
        <a href="/contact" use:link use:active class="nav-link">Contact</a>
      </div>
    </div>
    <a
      href="https://its.elearning-swakopca.edu.na/register"
      class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
      >Enrol Now<i class="fa fa-arrow-right ms-3" /></a
    >
  </div>
</nav>

<style>
  .nav-title-short {
    display: none;
  }

  @media (max-width: 1300px) {
    .nav-brand-image {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    .nav-title-full {
      display: none;
    }
    .nav-title-short {
      display: inline;
    }
  }
</style>
