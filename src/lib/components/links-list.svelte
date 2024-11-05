<script lang="ts">
	import type { Link } from "$lib/data";

    export let links: Link[];
</script>
{#if links}
<ul class="gap-4 mt-4 flex">
    {#each links as {href, icon, description}}
      <li>
        <a class="flex gap-2 align-middle" target="_blank" href={href}>
          <img class="bg-slate-50 h-8" src={`/${icon}.svg`} alt="" />
          <span class="underline">{description}</span>
        </a>
      </li>
    {/each}
</ul>
{/if}