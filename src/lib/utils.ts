import { openMicData } from "$lib/data";
import type { Event } from "$lib/data";


function getWeekDayOfTheMonth(date: Date) {
  return Math.ceil((date.getDate()) / 7) - 1;
}

export function getEventsView() {
  const eventsView: { title: string, hosts: string, when: string, slug: string, where: string; }[] = [];

  for (const event of openMicData.events) {
    const location = openMicData.locations.find(location => location.slug === event.location);
    const item = {
      title: location?.name ?? '',
      hosts: (event?.hosts ?? [event.host]).map(hostSlug => openMicData.hosts.find(host => host.slug === hostSlug)?.name).join(' and '),
      when: event.when,
      slug: event.location,
      where: location?.location ?? '',
    };
    eventsView.push(item);
  }

  return eventsView;
}

export function getOccurrencesView(eventInput: Event | null = null) {
  let events = [eventInput];
  if (!eventInput) {
    events = openMicData.events;
  }
  const occurrencesView: { title: string, hosts: string, date: string, slug: string; where: string; }[] = [];
  const now = new Date();
  const duration = 90;
  for (let currentDay = 0; currentDay < duration; currentDay += 1) {
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + currentDay);
    const currentWeekDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][currentDate.getDay()];
    const currentWeek = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][getWeekDayOfTheMonth(currentDate)];
    let last = false;
    if (currentDate.getMonth() !== (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7)).getMonth()) {
      last = true;
    }

    for (const event of events) {
      for (const occurrence of (event?.occurrences ?? [event?.occurrence] ?? [])) {
        if (currentWeekDay === occurrence?.day && (currentWeek === occurrence.week || occurrence.week === 'last' && last) || currentWeekDay === occurrence?.day && occurrence?.week === 'every') {
          const location = openMicData.locations.find(location => location.slug === event?.location);
          occurrencesView.push({
            title: location?.name ?? '',
            hosts: (event?.hosts ?? [event?.host]).map(hostSlug => openMicData.hosts.find(host => host.slug === hostSlug)?.name).join(' and '),
            date: [['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][currentDate.getDay()], currentDate.getDate(), ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][currentDate.getMonth()]].join(' '),
            slug: event?.location || '',
            where: location?.location ?? '',
          })
        }
      }
    }
  }

  return occurrencesView;
}
