<script lang="ts">
  import Router from "svelte-spa-router";
  import HomeView from "./views/HomeView.svelte";
  import Footer from "./components/footer/footer.svelte";
  import AboutView from "./views/AboutView.svelte";
  import CoursesView from "./views/CoursesView.svelte";
  import ContactView from "./views/ContactView.svelte";
  import Navbar from "./components/navbar/navbar.svelte";
  import FeesView from "./views/FeesView.svelte";
  import GovernanceView from "./views/GovernanceView.svelte";

  const routes = {
    "/": HomeView,
    "/about": AboutView,
    "/governance": GovernanceView,
    "/courses": CoursesView,
    "/contact": ContactView,
    "/fees": FeesView,
  };
</script>

<main>
  <Navbar />
  <Router {routes} />
  <Footer />
</main>

<style>
</style>
