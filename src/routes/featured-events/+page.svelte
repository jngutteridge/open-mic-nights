<script lang="ts">
  import { getEventsView } from "$lib/utils";
  const eventsView = getEventsView();
</script>
<ul class="grid gap-4 p-4 pt-2 animate-pull">
{#each eventsView as {title, hosts, when, slug, where}}
  <li class="relative overflow-hidden rounded-xl bg-slate-800 hover:outline">
    <div class="p-4 text-pretty lg:flex gap-4">
      <h2 class="font-bold">{ title } { where }</h2>
      {#if hosts}
        <span>{ hosts }</span>
      {/if}
      <span class="text-amber-400 block">{ when }</span>
    </div>
    <a href={`/events/${slug}`} class="absolute inset-0"><span class="hidden">More information</span></a>
  </li>
{/each}
</ul>
<svelte:head>
  <title>Open Mics in Leicestershire</title>
</svelte:head>
