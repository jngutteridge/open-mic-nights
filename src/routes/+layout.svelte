<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';

  $: slug = $page.url.pathname;

  let mainElement: HTMLElement;

  afterNavigate(() => {
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  });
</script>
<header class="p-4 pb-0 shrink-0 max-w-screen-xl mx-auto">
  <h1 class="text-lg font-semibold"><a class="block text-center hover:underline" href="/">Leicester Open Mics</a></h1>
</header>
<div class="p-4 shrink-0 max-w-screen-xl mx-auto">
  <nav class="flex gap-4 justify-center">
    <a class={'inline-block font-semibold pt-2 pb-3 px-3 text-sm md:text-base hover:bg-amber-700 rounded-md ' + (slug === '/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/">Upcoming events</a>
    <a class={'inline-block font-semibold pt-2 pb-3 px-3 text-sm md:text-base hover:bg-amber-700 rounded-md ' + (slug === '/featured-events/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/featured-events/">Featured open mics</a>
    <a class={'inline-block font-semibold pt-2 pb-3 px-3 text-sm md:text-base hover:bg-amber-700 rounded-md ' + (slug === '/calendar/' ? ' bg-amber-700 outline' : 'bg-amber-900')} href="/calendar/">Calendar view</a>
  </nav>
</div>
<main bind:this={mainElement} class="overflow-y-auto grow">
  <div class="max-w-screen-xl mx-auto">
    <slot />
  </div>
</main>
<footer class="p-4 pt-2 text-sm md:text-base shrink-0 max-w-screen-xl mx-auto">
  <nav class="flex flex-wrap gap-4">
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
