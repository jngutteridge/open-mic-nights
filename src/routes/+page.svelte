<script lang="ts">
  import { getEventsView, getOccurrencesView } from "$lib/utils";

  setTimeout(() => live = true, 0);

  $: live = false;
  const eventsView = getEventsView();
  const occurrencesView = getOccurrencesView();
</script>
<div class="px-4">
  <h1 class="font-semibold mt-8">Upcoming events</h1>
</div>
<ul class="md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 animate-pull grid" class:opacity-0={!live}>
{#each occurrencesView as {title, hosts, date, slug}}
  <li class="relative h-40 overflow-hidden rounded-xl grid grid-cols-3 bg-slate-800 hover:outline">
    <div class="p-4 grow col-span-2 text-pretty">
      <span class="text-amber-400">{ date }</span>
      <h2 class="font-bold">{ title }</h2>
      <span>With { hosts }</span>
    </div>
    <img class="w-40 min-w-full h-40 object-cover object-top" src={`/${slug}.jpg`} alt="" />
    <a href={`/events/${slug}`} class="absolute inset-0"><span class="hidden">More information</span></a>
  </li>
{/each}
</ul>
<div class="px-4">
  <h1 class="font-semibold mt-8">Featured open mics</h1>
</div>
<ul class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
{#each eventsView as {title, hosts, when, slug}}
  <li class="relative h-40 overflow-hidden rounded-xl grid grid-cols-3 bg-slate-800 hover:outline">
    <div class="p-4 grow col-span-2 text-pretty">
      <h2 class="font-bold">{ title }</h2>
      <span>With { hosts }</span>
      <span class="text-amber-400 block">{ when }</span>
    </div>
    <img class="w-40 min-w-full h-40 object-cover object-top" src={`/${slug}.jpg`} alt="" />
    <a href={`/events/${slug}`} class="absolute inset-0"><span class="hidden">More information</span></a>
  </li>
{/each}
</ul>
<svelte:head>
  <title>Leicester Open Mic Nights</title>
</svelte:head>
