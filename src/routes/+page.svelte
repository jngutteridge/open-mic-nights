<script lang="ts">
  import "../app.css";
  import { openMicData } from "../data";

  const eventsView: { title: string, hosts: string, when: string }[] = [];

  function getWeekDayOfTheMonth(date: Date) {
    const monthStart = new Date(date);
    const day = monthStart.getDay();
    monthStart.setDate(0);
    while (day !== monthStart.getDay()) {
      monthStart.setDate(monthStart.getDate() + 1);
    }
    const offset = (monthStart.getDay() + 1) % 7 - 1;
    return Math.ceil((date.getDate() + offset) / 7) - 1;
  }

  for (const event of openMicData.events) {
    const item = {
      title: openMicData.locations.find(location => location.slug === event.location)?.name ?? '',
      hosts: (event?.hosts ?? [ event.host ]).map(hostSlug => openMicData.hosts.find(host => host.slug === hostSlug)?.name).join(' and '),
      when: (event?.occurrences ?? [ event?.occurrence ] ?? []).map(occurrence => `${occurrence.day} ${occurrence.week}`).join(' and '),
    };
    eventsView.push(item);
  }

  const occurrencesView: { title: string, hosts: string, date: string, slug: string}[] = [];
  const now = new Date();
  const duration = 90;
  for (let currentDay = 0; currentDay < duration; currentDay += 1) {
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + currentDay);
    const currentWeekDay = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][currentDate.getDay()];
    const currentWeek = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][getWeekDayOfTheMonth(currentDate)];
    let last = false;
    if (currentDate.getMonth() !== (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7)).getMonth()) {
      last = true;
    }

    for (const event of openMicData.events) {
      for (const occurrence of (event?.occurrences ?? [ event?.occurrence ] ?? [])) {
        if (currentWeekDay === occurrence.day && (currentWeek === occurrence.week || occurrence.week === 'last' && last)) {
          occurrencesView.push({
            title: openMicData.locations.find(location => location.slug === event.location)?.name ?? '',
            hosts: (event?.hosts ?? [ event.host ]).map(hostSlug => openMicData.hosts.find(host => host.slug === hostSlug)?.name).join(' and '),
            date: [['Sun','Mon','Tue','Wed','Thur','Fri','Sat'][currentDate.getDay()], currentDate.getDate(), ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][currentDate.getMonth()]].join(' '),
            slug: event.location,
          })
        }
      }
    }
  }
</script>
<header class="p-4 pb-0">
  <h1 class="font-bold">Leicester Open Mic Nights</h1>
  <p>A list of open mic nights in the Leicestershire area.</p>
  <h1 class="font-bold mt-8">Upcoming events</h1>
</header>
<ul class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
{#each occurrencesView as {title, hosts, date, slug}}
  <li class="relative h-40 overflow-hidden rounded-xl grid grid-cols-3 bg-slate-800">
    <div class="p-4 grow col-span-2 text-pretty">
      <span class="text-amber-400">{ date }</span>
      <h2 class="font-bold">{ title }</h2>
      <span>With { hosts }</span>
    </div>
    <img class="w-40 min-w-full h-40 object-cover object-top" src={`/${slug}.jpg`} alt="" />
  </li>
{/each}
</ul>
<ul>
{#each eventsView as {title, hosts, when}}
  <li><h2>{ title }</h2><span>With { hosts } on { when }</span></li>
{/each}
</ul>
