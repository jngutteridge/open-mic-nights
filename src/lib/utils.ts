import { openMicData } from "$lib/data";
import type { Location, Event } from "$lib/data";


function getWeekDayOfTheMonth(date: Date) {
  return Math.ceil((date.getDate()) / 7) - 1;
}

function hasNoDates(event: Event) {
  return !event.occurrence && !event.occurrences && !event.manualOccurrences;
}

export function getEventsView() {
  const eventsView: { title: string, hosts: string, when: string, slug: string, where: string; }[] = [];

  for (const event of openMicData.events) {
    if (hasNoDates(event)) {
      continue;
    }
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

function sameDate(manualOccurrence: string, currentDate: Date) {
  const manualDate = new Date(manualOccurrence);
  return manualDate.getDate() === currentDate.getDate() && manualDate.getMonth() === currentDate.getMonth() && manualDate.getFullYear() === currentDate.getFullYear();
}

function getOccurrencesViewItem(location: Location, event: Event, currentDate: Date) {
  return {
    title: location?.name ?? '',
    hosts: (event?.hosts ?? [event?.host]).map(hostSlug => openMicData.hosts.find(host => host.slug === hostSlug)?.name).join(' and '),
    date: getFormattedDate(currentDate),
    slug: event?.location || '',
    where: location?.location ?? '',
  };
}

function getFormattedDate(currentDate: Date) {
  return [['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][currentDate.getDay()], currentDate.getDate(), ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][currentDate.getMonth()]].join(' ');
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
      let exception = false;
      for (const exceptionDate of event?.exceptions ?? []) {
        if (sameDate(exceptionDate, currentDate)) {
          exception = true;
        }
      }
      if (exception) {
        continue;
      }
      const location = openMicData.locations.find(location => location.slug === event?.location);
      for (const occurrence of (event?.occurrences ?? [event?.occurrence] ?? [])) {
        if (currentWeekDay === occurrence?.day && (currentWeek === occurrence.week || occurrence.week === 'last' && last || occurrence.week === 'every')) {
          if (location && event) {
            occurrencesView.push(getOccurrencesViewItem(location, event, currentDate));
          }
        }
      }
      for (const manualOccurrence of event?.manualOccurrences ?? []) {
        if (sameDate(manualOccurrence, currentDate)) {
          if (location && event) {
            occurrencesView.push(getOccurrencesViewItem(location, event, currentDate));
          }
        }
      }
    }
  }

  return occurrencesView;
}

export function getCalendarView() {
  const events = openMicData.events;
  const calendarView: {events: { title: string, hosts: string, date: string, slug: string; where: string; }[], day: number, month: number}[] = [];
  const now = new Date();
  const duration = 90;
  for (let currentDay = 0; currentDay < duration; currentDay += 1) {
    const occurrences = [];
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + currentDay);
    const currentWeekDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][currentDate.getDay()];
    const currentWeek = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][getWeekDayOfTheMonth(currentDate)];
    let last = false;
    if (currentDate.getMonth() !== (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7)).getMonth()) {
      last = true;
    }

    for (const event of events) {
      let exception = false;
      for (const exceptionDate of event?.exceptions ?? []) {
        if (sameDate(exceptionDate, currentDate)) {
          exception = true;
        }
      }
      if (exception) {
        continue;
      }
      const location = openMicData.locations.find(location => location.slug === event?.location);
      for (const occurrence of (event?.occurrences ?? [event?.occurrence] ?? [])) {
        if (currentWeekDay === occurrence?.day && (currentWeek === occurrence.week || occurrence.week === 'last' && last || occurrence.week === 'every')) {
          if (location && event) {
            occurrences.push(getOccurrencesViewItem(location, event, currentDate));
          }
        }
      }
      for (const manualOccurrence of event?.manualOccurrences ?? []) {
        if (sameDate(manualOccurrence, currentDate)) {
          if (location && event) {
            occurrences.push(getOccurrencesViewItem(location, event, currentDate));
          }
        }
      }
    }

    calendarView.push({
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      events: occurrences,
    })
  }

  return calendarView;
}

export function getCalendarDays() {
  const days: { day: number, month: number, inPast: boolean}[] =  [];
  const now = new Date();
  const duration = 90;
  const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayOffset = startDate.getDay() - 1;

  for (let currentDay = 0 - dayOffset; currentDay < duration - dayOffset + 1; currentDay += 1) {
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + currentDay);
    if (currentDay < 0) {
      days.push({
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        inPast: true,
      });
      continue;
    }
    days.push({
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      inPast: false,
    });
  }

  return days;
}
