<script lang="ts">
  export let data;

  $: name = data.name;
  $: slug = data.slug;
  $: events = data.events;
  $: links = data.links;
</script>
<div class="m-4 p-4 rounded-xl bg-slate-800">
  <div class="flex gap-4">
    <div class="grow">
      <h1 class="text-2xl text-balance">{ name }</h1>
      <ul class="flex gap-4 mt-4">
      {#each links as link}
        <li><a class="underline" target="_blank" href={link.href}><img class="bg-slate-50" src={`/${link.icon}.svg`} alt="" /></a></li>
      {/each}
      </ul>
      <h2 class="mt-4 text-lg font-semibold">Events</h2>
      <ul>
      {#each events as event}
        <li><a class="underline" href={`/events/${event.slug}`}>{ event.name }</a></li>
      {/each}
      </ul>
    </div>
    <img class="w-[30vw] md:w-[40vw] object-cover object-top" src={`/${slug}.jpg`} alt="" />
  </div>
</div>
<svelte:head>
  <title>{ name } Leicester open mic host</title>
</svelte:head>
