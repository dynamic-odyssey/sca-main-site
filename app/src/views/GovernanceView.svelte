<script lang="ts">
    import { link } from "svelte-spa-router";
    import GovernanceInfo from "../sections/governance-info/governanceInfo.svelte";
</script>

<div class="container-fluid bg-primary py-5 mb-5 page-header">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
                <h1 class="display-3 text-white animated slideInDown">
                    Governance
                </h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item">
                            <a class="text-white" use:link href="/">Home</a>
                        </li>
                        <li
                            class="breadcrumb-item text-white active"
                            aria-current="page"
                        >
                            Governance
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>

<GovernanceInfo />

<style>
    .container-fluid.bg-primary.py-5.mb-5.page-header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/Govern.png) no-repeat center center;
    background-size: cover;
}
.container-fluid.bg-primary.py-5.mb-5.page-header::before {
    content: "";
    background: inherit;
    filter: blur(5px);  /* Blurs the background image */
    z-index: -1;
}
</style>
