export interface Occurrence {
  day: string;
  week: string;
}

export interface Event {
  hosts?: string[];
  host?: string;
  location: string;
  time: string;
  occurrence?: Occurrence;
  occurrences?: Occurrence[];
}

export interface Host {
  name: string;
  slug: string;
  links?: Link[];
}

export interface Link {
  icon: string;
  href: string;
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
      time: '7.30pm',
      occurrence:
      {
        day: 'wednesday',
        week: 'first'
      },
    },
    {
      host: 'humble-he',
      location: 'babelas',
      time: '7.30pm',
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
      time: '7.30pm',
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
    {
      host: 'baker-and-crane',
      location: 'royal-oak',
      time: '7pm',
      occurrence: {
        day: 'thursday',
        week: 'third',
      },
    },
    {
      host: 'liam-and-sean',
      location: 'railway',
      time: '5pm',
      occurrence: {
        day: 'sunday',
        week: 'last',
      },
    },
    {
      host: 'fran',
      location: 'volpo',
      time: '7.30pm',
      occurrence: {
        day: 'wednesday',
        week: 'last',
      },
    },
  ],
  hosts: [
    {
      slug: 'humble-he',
      name: 'Humble He',
      links: [
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/humblehe/',
        },
      ],
    },
    {
      slug: 'lucy',
      name: 'Lucy Bremridge',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/LucyBremridgeMusic',
        },
      ],
    },
    {
      slug: 'fran',
      name: 'Francesca Hatton-Murden',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/profile.php?id=61556521434582',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/francescahattonmurdenmusic/',
        },
      ],
    },
    {
      slug: 'baker-and-crane',
      name: 'Baker & Crane',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/BakerandCrane',
        },
      ],
    },
    {
      slug: 'liam-and-sean',
      name: 'Liam & Sean',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/liamandseanacousticduo/',
        },
      ],
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
    {
      slug: 'royal-oak',
      name: 'The Royal Oak',
      address: '14 Cross Grn, Rothley, Leicester LE7 7PF',
    },
    {
      slug: 'railway',
      name: 'The Railway',
      address: '128 Station Rd, Countesthorpe, Leicester LE8 5TD',
    },
    {
      slug: 'volpo',
      name: 'Volpo Lounge',
      address: 'Fosse Park S, West, Leicester LE19 1HX',
    },
  ]
};
