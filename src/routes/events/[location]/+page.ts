import { error } from '@sveltejs/kit';
import { openMicData, type Occurrence } from '$lib/data';
import { getOccurrencesView, humaniseOccurrences } from '$lib/utils';

export function load({ params: { location } }) {

  const locationData = openMicData.locations.find(locationData => locationData.slug === location);

  if (!locationData) {
    throw error(404);
  }

  const event = openMicData.events.find(event => event.location === location);

  if (!event) {
    throw error(404);
  }

  const hosts = (event?.hosts ?? [event.host]).map(hostSlug => openMicData.hosts.find(host => host.slug === hostSlug)) as { name: string, slug: string }[];

  const events = getOccurrencesView(openMicData.events.find(event => event.location === location)).map(occurrence => occurrence.date);

  const when = humaniseOccurrences((event?.occurrences ?? [event?.occurrence] ?? []) as Occurrence[]);

  return {
    name: locationData.name,
    address: locationData.address,
    slug: locationData.slug,
    hosts,
    events,
    start: event.time,
    when,
  };
}
