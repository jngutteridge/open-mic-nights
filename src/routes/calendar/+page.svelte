<script lang="ts">
    import { getCalendarView, getCalendarDays } from "$lib/utils";
    const viewData = getCalendarView();
    const viewDays = getCalendarDays();
  </script>
  <div class="max-w-full h-full relative mb-4 text-xs md:text-sm lg:text-base">
  <ul class="grid grid-cols-7 h-full grid-rows-[auto] auto-rows-fr animate-pull bg-slate-700 gap-[1px] border-b-[1px] border-b-slate-700 min-w-[440px]">
  {#each ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] as day}
    <li class="px-4 py-2 text-amber-400 sticky top-0 bg-slate-700 z-10">{ day }</li>
  {/each}
  {#each viewDays as {day, month, inPast}}
    {@const { events } = viewData.find(data => data.day === day && data.month === month) ?? { day: 0, month: 0, events: [] }}
    <li class={'relative overflow-hidden' + (inPast ? ' bg-slate-800' : ' bg-slate-900')}>
      <div class="p-2 flex gap-4">
        <h2 class="text-amber-400">{ day } { ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1] }</h2>
      </div>
      <div class="flex p-2 pr-0 lg:pr-2 flex-col gap-2">
        {#each events as { title, where, slug }}
        <a href={`/events/${slug}`} class="p-[1px] rounded-sm hover:underline block bg-slate-700">{ title } { where }</a>
        {/each}
      </div>
    </li>
  {/each}
  </ul>
  </div>
  <svelte:head>
    <title>Leicester Open Mics calendar</title>
  </svelte:head>
  