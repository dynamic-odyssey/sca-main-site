<script lang="ts">
  import { link } from "svelte-spa-router";
  import Categories from "../sections/categories/categories.svelte";
  import Courses from "../sections/courses/courses.svelte";
  import Fees from "../sections/fees/fees.svelte";
    import CoursesInfo from "../sections/courses-info/coursesInfo.svelte";
</script>

<div class="container-fluid bg-primary py-5 mb-5 page-header">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="display-3 text-white animated slideInDown">Courses</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item">
              <a class="text-white" use:link href="/">Home</a>
            </li>
            <li class="breadcrumb-item text-white active" aria-current="page">
              Courses
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>

<Categories />
<CoursesInfo />
<Courses />
<Fees />

<style>
</style>
