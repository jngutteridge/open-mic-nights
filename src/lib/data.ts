export interface Occurrence {
  day: string;
  week: string;
}

export interface Event {
  hosts?: string[];
  host?: string;
  location: string;
  time: string;
  when: string;
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
  location: string;
}

export const openMicData: { events: Event[], hosts: Host[], locations: Location[] } = {
  events: [
    {
      hosts: ['fran', 'lucy'],
      location: 'clarence',
      time: '7.30pm',
      when: 'The first Wednesday of the month',
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
      when: 'The first and third Wednesday of the month',
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
      when: 'The second and fourth Monday of the month',
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
      when: 'The third Thursday of the month',
      occurrence: {
        day: 'thursday',
        week: 'third',
      },
    },
    {
      host: 'liam-and-sean',
      location: 'railway',
      time: '5pm',
      when: 'The last Sunday of the month',
      occurrence: {
        day: 'sunday',
        week: 'last',
      },
    },
    {
      host: 'fran',
      location: 'volpo',
      time: '7.30pm',
      when: 'The last Wednesday of the month',
      occurrence: {
        day: 'wednesday',
        week: 'last',
      },
    },
    {
      host: 'open-mike',
      location: 'soundhouse',
      when: 'Every Tuesday',
      time: '7pm',
      occurrence: {
        day: 'tuesday',
        week: 'every',
      }
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
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/baker.crane/',
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
    {
      slug: 'open-mike',
      name: 'Mike Howard-Ahern',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/profile.php?id=100063776326890',
        },
      ],
    },
  ],
  locations: [
    {
      slug: 'white-bear',
      name: 'Steamin’ Billy White Bear',
      address: 'Coventry Rd, Hinckley LE10 0JT',
      location: 'Hinckley',
    },
    {
      slug: 'babelas',
      name: 'Babelas Continental Bar',
      address: '77 Queens Rd, Clarendon Park, Leicester LE2 1TT',
      location: 'Clarendon Park',
    },
    {
      slug: 'clarence',
      name: 'The Clarence Cafe Bar',
      address: '5 Market Pl, Hinckley LE10 1NT',
      location: 'Hinckley',
    },
    {
      slug: 'royal-oak',
      name: 'The Royal Oak',
      address: '14 Cross Grn, Rothley, Leicester LE7 7PF',
      location: 'Rothley',
    },
    {
      slug: 'railway',
      name: 'The Railway',
      address: '128 Station Rd, Countesthorpe, Leicester LE8 5TD',
      location: 'Countesthorpe',
    },
    {
      slug: 'volpo',
      name: 'Volpo Lounge',
      address: 'Fosse Park S, West, Leicester LE19 1HX',
      location: 'Fosse Park',
    },
    {
      slug: 'soundhouse',
      name: 'SoundHouse',
      address: '28 Southampton St, Leicester LE1 1SJ',
      location: 'Leicester',
    },
  ]
};
