<script lang="ts">
    import { link } from "svelte-spa-router";
    import Fees from "../sections/fees/fees.svelte";
    import Calendar from "../sections/calendar/calendar.svelte";
    import Calendar2024 from "../sections/calendar 2024/calendar2024.svelte";
    import MemoryBanner from "../sections/banners/memoryBanner.svelte";
    import PrizeGivingBanner from "../sections/banners/prizeGivingBanner.svelte";
    import Stationery from "../sections/stationery/stationery.svelte";
    import Books from "../sections/books/books.svelte";
    import Technology from "../sections/technology/technology.svelte";
    import Enrollment from "../sections/enrollment/enrollment.svelte";
    import Uniform from "../sections/uniform/uniform.svelte";
    import Announcement from "../sections/announcement/announcement.svelte";
</script>

<div class="container-fluid bg-primary py-5 mb-5 page-header">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
                <h1 class="display-3 text-white animated slideInDown">
                    Information
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
                            Info
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>

<Announcement />
<Fees />
<Enrollment />
<Calendar2024 />
<Technology />
<Uniform />
<Stationery />
<Books />

<style>
    .container-fluid.bg-primary.py-5.mb-5.page-header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/Fees.png) no-repeat center center;
    background-size: cover;
}
.container-fluid.bg-primary.py-5.mb-5.page-header::before {
    content: "";
    background: inherit;
    filter: blur(5px);  /* Blurs the background image */
    z-index: -1;
}
</style>
