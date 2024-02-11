export interface Occurrence {
  day: string;
  week: string;
}

export interface Event {
  hosts?: string[];
  host?: string;
  location: string;
  occurrence?: Occurrence;
  occurrences?: Occurrence[];
}

export interface Host {
  name: string;
  slug: string;
}

export interface Location {
  name: string;
  slug: string;
  address: string;
}

export const openMicData: { events: Event[], hosts: Host[], locations: Location[] } = {
  events: [
    {
      hosts: ['fran', 'lucy'],
      location: 'clarence',
      occurrence:
      {
        day: 'wednesday',
        week: 'first'
      },
    },
    {
      host: 'humble-he',
      location: 'babelas',
      occurrences: [
        {
          day: 'wednesday',
          week: 'first',
        },
        {
          day: 'wednesday',
          week: 'third',
        },
      ],
    },
    {
      host: 'fran',
      location: 'white-bear',
      occurrences: [
        {
          day: 'monday',
          week: 'second',
        },
        {
          day: 'monday',
          week: 'fourth',
        },
      ],
    },
  ],
  hosts: [
    {
      slug: 'humble-he',
      name: 'Humble He',
    },
    {
      slug: 'lucy',
      name: 'Lucy Bembridge',
    },
    {
      slug: 'fran',
      name: 'Francesca Hatton-Murden',
    },
  ],
  locations: [
    {
      slug: 'white-bear',
      name: 'Steamin’ Billy White Bear',
      address: 'Coventry Rd, Hinckley LE10 0JT',
    },
    {
      slug: 'babelas',
      name: 'Babelas Continental Bar',
      address: '77 Queens Rd, Clarendon Park, Leicester LE2 1TT',
    },
    {
      slug: 'clarence',
      name: 'The Clarence Cafe Bar',
      address: '5 Market Pl, Hinckley LE10 1NT',
    },
  ]
};
