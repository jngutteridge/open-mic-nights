<script lang="ts">
  export let data;

  $: name = data.name;
  $: slug = data.slug;
  $: hosts = data.hosts;
  $: events = data.events;
  $: address = data.address;
  $: mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent([name, address].join(' '));
  $: start = data.start;
</script>
<div class="my-4 md:m-4 md:rounded-xl bg-slate-800 overflow-hidden max-w-screen-xl">
  <div class="flex">
    <div class="p-4 grow text-pretty">
      <h1 class="text-2xl font-semibold">{ name } open mic</h1>
      <h2>Hosted by
      {#each hosts as { name, slug }, index}
        {#if index > 0 }<span class="mx-1">and</span>{/if}
        <a class="underline" href={`/hosts/${slug}`}>{name}</a>
      {/each}
      </h2>
      <strong class="block font-semibold mt-4">{ name }</strong>
      <span>{ address }</span>
      <div class="block">
        <a class="underline" href={ mapsLink } target="_blank">View on Google Maps</a>
      </div>
      <p class="mt-4">Start time { start }</p>
      <h2 class="my-4 font-semibold">Upcoming events</h2>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-stretch gap-4">
      {#each events as event}
        <li class="rounded-md bg-amber-700 text-white py-2 px-4 font-semibold text-center overflow-ellipsis whitespace-nowrap">{ event }</li>
      {/each}
      </ul>
    </div>
    <img class="w-[30vw] md:w-[40vw] object-cover object-top max-h-96 md:max-h-full max-w-md" src={`/${slug}.jpg`} alt="" />
  </div>
</div>
<svelte:head>
  <title>{ name } Leicester open mic hosted by { hosts.map(host => host.name).join(' and ') }</title>
</svelte:head>
