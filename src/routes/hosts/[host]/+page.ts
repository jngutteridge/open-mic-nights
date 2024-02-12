import { openMicData, type Link } from '$lib/data';
import { error } from '@sveltejs/kit';

export function load({ params: { host } }) {
  const hostData = openMicData.hosts.find(hostData => hostData.slug === host);

  if (!hostData) {
    throw error(404);
  }

  const events = openMicData.events.filter(event => (event?.hosts ?? [event.host]).includes(host)).map(event => ({ slug: event.location, name: openMicData.locations.find(location => location.slug === event.location)?.name })) as { name: string, slug: string }[];

  return { name: hostData.name, slug: hostData.slug, events, links: hostData.links as Link[] };
}
