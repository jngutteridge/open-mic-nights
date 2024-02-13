<script lang="ts">
  export let data;

  $: name = data.name;
  $: slug = data.slug;
  $: events = data.events;
  $: links = data.links;
</script>
<div class="my-4 md:m-4 md:rounded-xl bg-slate-800 overflow-hidden max-w-screen-md">
  <div class="flex">
    <div class="p-4 grow">
      <h1 class="text-2xl text-balance">{ name }</h1>
      <ul class="flex gap-4 mt-4">
      {#each links as link}
        <li><a class="underline" target="_blank" href={link.href}><img class="bg-slate-50" src={`/${link.icon}.svg`} alt="" /></a></li>
      {/each}
      </ul>
      <h2 class="mt-4 text-lg font-semibold">Events</h2>
      <ul>
      <ul class="gap-4">
      {#each events as {name, when, slug}}
        <li>
          <div class="my-4 text-pretty">
            <h2 class="font-bold">{ name } open mic</h2>
            <span class="text-amber-400 block">{ when }</span>
          </div>
          <a href={`/events/${slug}`} class="absolute inset-0"><span class="hidden">More information</span></a>
        </li>
      {/each}
      </ul>
      </ul>
    </div>
    <img class="w-[40vw] max-w-sm object-cover object-top" src={`/${slug}.jpg`} alt="" />
  </div>
</div>
<svelte:head>
  <title>{ name } Leicester open mic host</title>
</svelte:head>
