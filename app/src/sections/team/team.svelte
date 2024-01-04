<script lang="ts">
  export let showAll: boolean = false;
</script>

<div id="team-section" class="container-xxl py-5">
  <div class="container">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 class="section-title bg-white text-center text-primary px-3">
        Our School
      </h6>
      <h1 class="mb-5">Gallery</h1>
    </div>
    <div class="row wow fadeInUp">
      <div class="column wow fadeInUp" data-wow-delay="0.9s">
        <img src="img/school-env/pic1.webp" style="width:100%" />
        {#if showAll}
          <img src="img/school-env/pic2.webp" style="width:100%" />
          <img src="img/school-env/pic3.webp" style="width:100%" />
        {/if}
      </div>
      <div class="column wow fadeInUp" data-wow-delay="0.5s">
        <img src="img/school-env/pic4.webp" style="width:100%" />
        {#if showAll}
          <img src="img/school-env/pic5.webp" style="width:100%" />
          <img src="img/school-env/pic13.webp" style="width:100%" />
        {/if}
      </div>
      <div class="column wow fadeInUp" data-wow-delay="1.3s">
        {#if showAll}
          <img src="img/school-env/pic6.webp" style="width:100%" />
        {/if}
        <img src="img/school-env/pic7.webp" style="width:100%" />
        {#if showAll}
          <img src="img/school-env/pic8.webp" style="width:100%" />
          <img src="img/school-env/pic12.webp" style="width:100%" />
        {/if}
      </div>
      <div class="column wow fadeInUp" data-wow-delay="1.8s">
        <img src="img/school-env/pic9.webp" style="width:100%" />
        {#if showAll}
          <img src="img/school-env/pic10.webp" style="width:100%" />
          <img src="img/school-env/pic11.webp" style="width:100%" />
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* Create four equal columns that sits next to each other */
  .column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 100%;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }
</style>
