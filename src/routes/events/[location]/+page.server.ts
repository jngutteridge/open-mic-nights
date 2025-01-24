import { error } from '@sveltejs/kit';
import { openMicData } from '$lib/data';

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

  return {
    name: locationData.name,
    address: locationData.address,
    mapsAddress: locationData.mapsAddress,
    slug: locationData.slug,
    hosts,
    location,
    start: event.time,
    when: event.when,
    links: event?.links ?? [],
    title: event.title ?? `${locationData.name} ${locationData.location} open mic`,
  };
}
