import { openMicData, type Link, type Occurrence } from '$lib/data';
import { humaniseOccurrences } from '$lib/utils.js';
import { error } from '@sveltejs/kit';

export function load({ params: { host } }) {
  const hostData = openMicData.hosts.find(hostData => hostData.slug === host);

  if (!hostData) {
    throw error(404);
  }

  const events = openMicData.events.filter(event => (event?.hosts ?? [event.host]).includes(host)).map(event => {
    const location = openMicData.locations.find(location => location.slug === event.location);
    return { slug: event.location, name: location?.name, when: humaniseOccurrences((event?.occurrences ?? [event?.occurrence] ?? []) as Occurrence[]) }
  }) as { name: string; slug: string; when: string; }[];

  return { name: hostData.name, slug: hostData.slug, events, links: hostData.links as Link[] };
}
