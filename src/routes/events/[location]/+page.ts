import { error } from '@sveltejs/kit';
import { openMicData } from '$lib/data';
import { getOccurrencesView } from '$lib/utils';

export function load({ params: { location } }) {

  const locationData = openMicData.locations.find(locationData => locationData.slug === location);

  if (!locationData) {
    throw error(404);
  }

  const event = openMicData.events.find(event => event.location === location);

  if (!event) {
    throw error(404);
  }

  const hosts = openMicData.hosts.filter(host => (event?.hosts ?? [event.host]).includes(host.slug));

  const events = getOccurrencesView(openMicData.events.find(event => event.location === location)).map(occurrence => occurrence.date);

  return {
    name: locationData.name,
    address: locationData.address,
    slug: locationData.slug,
    hosts,
    events,
    start: event.time,
    when: event.when,
    where: locationData.location,
    links: event?.links ?? [],
  };
}
