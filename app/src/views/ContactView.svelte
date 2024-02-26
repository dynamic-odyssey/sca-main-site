<script lang="ts">
  import { onMount } from 'svelte';
  import { link } from "svelte-spa-router";
  import Contact from "../sections/contact/contact.svelte";

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

<div class="container-fluid bg-primary py-5 mb-5 page-header">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="display-3 text-white animated slideInDown">Contact</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item">
              <a class="text-white" use:link href="/">Home</a>
            </li>
            <li class="breadcrumb-item text-white active" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>

<Contact />

<style>
  .container-fluid.bg-primary.py-5.mb-5.page-header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/9.JPG) no-repeat center center;
    background-size: cover;
}
.container-fluid.bg-primary.py-5.mb-5.page-header::before {
    content: "";
    background: inherit;
    filter: blur(5px);  /* Blurs the background image */
    z-index: -1;
}
</style>