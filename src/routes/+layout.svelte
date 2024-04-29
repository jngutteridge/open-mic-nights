<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  $: slug = $page.url.pathname;
</script>
<header class="p-4 pb-0">
  <h1 class="text-lg font-semibold"><a class="block text-center md:text-left hover:underline" href="/">Leicester Open Mics</a></h1>
</header>
<div class="p-4 pb-0">
  <nav class="flex gap-4 justify-center md:justify-start">
    <a class={'inline-block font-semibold py-2 px-3 text-sm hover:bg-amber-700 rounded-md ' + (slug === '/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/">Upcoming events</a>
    <a class={'inline-block font-semibold py-2 px-3 text-sm hover:bg-amber-700 rounded-md ' + (slug === '/featured-events/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/featured-events/">Featured open mics</a>
  </nav>
</div>
<slot />
<footer class="p-4 pt-0 grow flex flex-col justify-end">
  <nav class="flex flex-wrap gap-4 flex-col md:flex-row">
    <a class="block underline browser" href="/install/">Install app</a>
    <a class="block underline" href="/about/">About this app</a>
    <a class="block underline text-cyan-600" target="_blank" href="https://www.bespokemedia.net/">Powered by Bespoke Media</a>
  </nav>
</footer>
<style>
  .browser {
    display: none;
  }

  @media (display-mode: browser) {
    .browser {
      display: block;
    }
  }
</style>
