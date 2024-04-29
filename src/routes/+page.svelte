<script lang="ts">
  import { getOccurrencesView } from "$lib/utils";
  import { onMount } from 'svelte';

  onMount(() => {
    setTimeout(() => live = true, 0);
  });

  $: live = false;
  const occurrencesView = getOccurrencesView();
</script>
<img class="hidden" src="/white-bear.jpg" alt="" />
<div class="p-4 pb-0">
  <p class="text-sm md:text-base">A list of open mic events in and around the Leicestershire area. Showing events in the next 90 days. Select an event for more information.</p>
</div>
<ul class="md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 animate-pull grid" class:opacity-0={!live}>
{#each occurrencesView as {title, hosts, date, slug, where}}
  <li class="relative h-40 overflow-hidden rounded-xl grid grid-cols-3 bg-slate-800 hover:outline">
    <div class="p-4 grow col-span-2 text-pretty">
      <span class="text-amber-400">{ date }</span>
      <h2 class="font-bold">{ title } { where }</h2>
      <span>With { hosts }</span>
    </div>
    <img class="w-40 min-w-full h-40 object-cover object-top" src={`/${slug}.jpg`} alt="" />
    <a href={`/events/${slug}`} class="absolute inset-0"><span class="hidden">More information</span></a>
  </li>
{/each}
</ul>
<svelte:head>
  <title>Leicester Open Mics</title>
</svelte:head>
