<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  $: slug = $page.url.pathname;
</script>
<header class="p-4 pb-0">
  <h1 class="text-lg font-bold"><a class="hover:underline" href="/">Leicester Open Mics</a></h1>
  <p class="text-sm">A list of open mic events in and around the Leicestershire area. Showing events in the next 90 days. Select an event for more information.</p>
  <nav class="mt-8 flex gap-4">
    <a class={'inline-block font-semibold py-2 px-3 hover:bg-amber-700 rounded-md ' + (slug === '/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/">Upcoming events</a>
    <a class={'inline-block font-semibold py-2 px-3 hover:bg-amber-700 rounded-md ' + (slug === '/featured-events/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/featured-events/">Featured open mics</a>
  </nav>
</header>
<slot />
<footer class="p-4 pt-0">
  <nav class="flex flex-wrap gap-4">
    <a class="font-semibold py-2 px-3 rounded-md bg-amber-900 hover:bg-amber-700 browser" href="/install/">Install app</a>
    <a class="inline-block font-semibold py-2 px-3 rounded-md bg-slate-800 hover:bg-slate-700" href="/feature/">Feature your open mic</a>
    <a class="inline-block font-semibold py-2 px-3 rounded-md bg-slate-800 hover:bg-slate-700" target="_blank"  href="mailto:jack@kingbrick.co.uk">Contact us</a>
    <a class="inline-block font-semibold py-2 px-3 rounded-md bg-slate-800 hover:bg-slate-700" href="/about/">About this app</a>
    <a class="inline-block font-semibold py-2 px-3 rounded-md bg-cyan-900 hover:bg-cyan-800" target="_blank" href="https://www.bespokemedia.net/">Powered by Bespoke Media</a>
  </nav>
</footer>
<style>
  .browser {
    display: none;
  }

  @media (display-mode: browser) {
    .browser {
      display: inline-block;
    }
  }
</style>
