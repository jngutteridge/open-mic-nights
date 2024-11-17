<script lang="ts">
	import { LinksList } from "$lib/components";

  export let data;

  $: name = data.name;
  $: slug = data.slug;
  $: hosts = data.hosts;
  $: events = data.events;
  $: address = data.address;
  $: mapsAddress = data.mapsAddress ?? encodeURIComponent([name, address].join(', '));
  $: mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + mapsAddress;
  $: start = data.start;
  $: when = data.when;
  $: links = data.links;
  $: title = data.title;
</script>
<div class="my-4 md:m-4 md:rounded-xl bg-slate-800 overflow-hidden max-w-screen-xl flex">
  <div class="grow">
    <h1 class="p-4 md:pb-0 text-2xl text-pretty font-semibold">{title}</h1>
    <img class="w-full max-h-80 md:hidden object-cover object-top" src={`/${slug}.jpg`} alt="" />
    <div class="p-4 md:pt-0 text-pretty">
      {#if hosts.length === 1}
        <h2>Hosted by <a class="underline" href={`/hosts/${hosts[0].slug}`}>{hosts[0].name}</a></h2>
      {/if}
      {#if hosts.length === 2}
        <h2>Hosted by <a class="underline" href={`/hosts/${hosts[0].slug}`}>{hosts[0].name}</a> and <a class="underline" href={`/hosts/${hosts[1].slug}`}>{hosts[1].name}</a></h2>
      {/if}
      <strong class="block font-semibold mt-4">{ name }</strong>
      <div class="block">
        <a class="underline" href={ mapsLink } target="_blank">{ address }</a>
      </div>
      <p class="mt-4">{ when }</p>
      <p>Start time { start }</p>
      <LinksList {links} />
      <h2 class="my-4 font-semibold">Upcoming events</h2>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-stretch gap-4">
      {#each events as event}
        <li class="rounded-md outline outline-white text-white py-1 px-2 font-semibold text-center overflow-ellipsis whitespace-nowrap">{ event }</li>
      {/each}
      </ul>
    </div>
  </div>
  <img class="hidden md:block object-cover object-center max-h-full max-w-[50%]" src={`/${slug}.jpg`} alt="" />
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
  <title>{ title } hosted by { hosts.map(host => host.name).join(' and ') }</title>
</svelte:head>
