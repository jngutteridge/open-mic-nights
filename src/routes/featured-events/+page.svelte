<script lang="ts">
  import { getEventsView } from "$lib/utils";
  const eventsView = getEventsView();
</script>
<ul class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 animate-pull">
{#each eventsView as {title, hosts, when, slug, where}}
  <li class="relative h-48 overflow-hidden rounded-xl grid grid-cols-3 bg-slate-800 hover:outline">
    <div class="p-4 grow col-span-2 text-pretty">
      <h2 class="font-bold">{ title } { where }</h2>
      <span>With { hosts }</span>
      <span class="text-amber-400 block">{ when }</span>
    </div>
    <img class="w-48 min-w-full h-48 object-cover object-top" src={`/${slug}.jpg`} alt="" />
    <a href={`/events/${slug}`} class="absolute inset-0"><span class="hidden">More information</span></a>
  </li>
{/each}
</ul>
