<script lang="ts">
    import { getCalendarView, getCalendarDays } from "$lib/utils";
    const viewData = getCalendarView();
    const viewDays = getCalendarDays();
  </script>
  <div class="max-w-[100vw] overflow-auto h-[calc(100vh-240px)] min-h-[400px] relative  my-4">
  <ul class="grid grid-cols-7 animate-pull bg-slate-700 gap-[1px] border-b-[1px] border-b-slate-700 min-w-[720px]">
  {#each ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] as day}
    <li class="px-4 py-2 text-amber-400 text-sm sticky top-0 bg-slate-700 z-10">{ day }</li>
  {/each}
  {#each viewDays as {day, month, inPast}}
    {@const { events } = viewData.find(data => data.day === day && data.month === month) ?? { day: 0, month: 0, events: [] }}
    <li class={'relative overflow-hidden' + (inPast ? ' bg-slate-800' : ' bg-slate-900')}>
      <div class="p-2 flex gap-4">
        <h2 class="text-amber-400 text-xs md:text-sm">{ day } { ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1] }</h2>
      </div>
      <div class="p-2 flex-col gap-2">
        {#each events as { title, where, slug }}
        <a href={`/events/${slug}`} class="text-sm list-item list-disc list-inside hover:underline">{ title } { where }</a>
        {/each}
      </div>
    </li>
  {/each}
  </ul>
  </div>
  <svelte:head>
    <title>Leicester Open Mics calendar</title>
  </svelte:head>
  