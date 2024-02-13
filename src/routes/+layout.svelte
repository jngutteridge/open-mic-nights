<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';  
  $: slug = $page.url.pathname;
</script>
<header class="p-4 pb-0">
  <h1 class="text-lg font-bold"><a href="/">Leicester Open Mic Nights</a></h1>
  <p class="text-sm">A list of open mic nights in the Leicestershire area. Showing events in the next 90 days. Select an event for more information.</p>
  <nav class="mt-8 flex gap-4">
    <a class={'inline-block font-semibold py-2 px-3 hover:bg-amber-700 rounded-md ' + (slug === '/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/">Upcoming events</a>
    <a class={'inline-block font-semibold py-2 px-3 hover:bg-amber-700 rounded-md ' + (slug === '/featured-events/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/featured-events/">Featured open mics</a>
  </nav>
</header>
<slot />
<footer class="p-4">
  <h2 class="text-lg font-semibold">Contact</h2>
  <p class="text-sm mb-4">To feature your open mic please email <a class="underline" href="mailto:jack@kingbrick.co.uk">jack@kingbrick.co.uk</a></p>
  <p class="text-sm"><a class="underline" href="https://www.bespokemedia.net/">Powered by Bespoke Media</a></p>
</footer>
