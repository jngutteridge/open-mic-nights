<script lang="ts">
  export let data;

  $: name = data.name;
  $: slug = data.slug;
  $: hosts = data.hosts;
  $: events = data.events;
  $: address = data.address;
  $: mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent([name, address].join(', '));
  $: start = data.start;
  $: when = data.when;
  $: where = data.where;
  $: links = data.links;
</script>
<div class="my-4 md:m-4 md:rounded-xl bg-slate-800 overflow-hidden max-w-screen-xl">
  <div class="flex">
    <div class="p-4 grow text-pretty">
      <h1 class="text-2xl font-semibold">{ name } { where } open mic</h1>
      <h2>Hosted by
      {#each hosts as { name, slug }, index}
        {#if index > 0 }<span class="mx-1">and</span>{/if}
        <a class="underline" href={`/hosts/${slug}`}>{name}</a>
      {/each}
      </h2>
      <strong class="block font-semibold mt-4">{ name }</strong>
      <div class="block">
        <a class="underline" href={ mapsLink } target="_blank">{ address }</a>
      </div>
      <p class="mt-4">{ when }</p>
      <p>Start time { start }</p>
      <ul class="gap-4 mt-4">
      {#each links as link}
        <li><a class="underline" target="_blank" href={link.href}><img class="bg-slate-50" src={`/${link.icon}.svg`} alt="" /></a></li>
      {/each}
      </ul>
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
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 pb-4 pt-0 md:pt-0 max-w-screen-xl">
  {#each hosts as host }
  <div class="md:rounded-xl bg-slate-800 overflow-hidden">
    <div class="flex">
      <div class="p-4 grow">
        <h1 class="text-xl text-balance"><a class="underline" href={`/hosts/${host.slug}`}>{ host.name }</a></h1>
        <ul class="flex gap-4 mt-4">
        {#each host.links ?? [] as link}
          <li><a class="underline" target="_blank" href={link.href}><img class="bg-slate-50" src={`/${link.icon}.svg`} alt="" /></a></li>
        {/each}
        </ul>
      </div>
      <img class="max-w-32 object-cover object-top" src={`/${host.slug}.jpg`} alt="" />
    </div>
  </div>
  {/each}
</div>
<svelte:head>
  <title>{ name } Leicester open mic hosted by { hosts.map(host => host.name).join(' and ') }</title>
</svelte:head>
