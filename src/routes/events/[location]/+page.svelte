<script lang="ts">
  export let data;

  $: name = data.name;
  $: slug = data.slug;
  $: hosts = data.hosts;
  $: events = data.events;
</script>
<div class="m-4 p-4 rounded-xl bg-slate-800">
  <div class="flex gap-4">
    <div class="grow">
      <h1 class="text-2xl">{ name } open mic</h1>
      <h2>Hosted by
        {#each hosts as { name, slug }}
          <a class="underline" href={`/hosts/${slug}`}>{name}</a>
        {/each}
      </h2>
      <h2 class="my-4">Upcoming events</h2>
      <ul class="flex flex-wrap gap-4">
      {#each events as event}
        <li class="rounded-md bg-amber-700 text-white py-2 px-4 font-bold">{ event }</li>
      {/each}
      </ul>
    </div>
    <img class="w-[30vw] md:w-[40vw] object-cover object-top" src={`/${slug}.jpg`} alt="" />
  </div>
</div>
