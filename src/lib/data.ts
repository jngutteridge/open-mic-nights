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
  manualOccurrences?: string[]; // '2015-4-16'
  links?: Link[];
  exceptions?: string[]; // '2015-4-16'
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
      host: 'baker-and-crane',
      location: 'royal-oak-rothley',
      time: '5pm',
      when: 'The third Sunday of the month',
      occurrence: {
        day: 'sunday',
        week: 'third',
      },
      exceptions: [
        '2024-09-15',
      ],
      manualOccurrences: [
        '2024-09-29',
      ],
    },
    {
      host: 'liam-and-sean',
      location: 'railway',
      time: '5pm',
      when: 'Usually the last or penultimate Sunday of the month',
      manualOccurrences: [
        '2024-2-25',
        '2024-3-24',
        '2024-4-21',
        '2024-5-19',
        '2024-6-23',
        '2024-7-7',
        '2024-8-18',
        '2024-9-29',
        '2024-10-27',
        '2024-11-24',
        '2024-12-22',
      ],
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/groups/889249722600945',
        },
      ],
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
      },
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/groups/845464738850535',
        },
      ],
    },
    {
      hosts: ['fran', 'lucy'],
      location: 'dixie-arms',
      when: 'The first Thursday of the month',
      time: '8pm',
      occurrence: {
        day: 'thursday',
        week: 'first',
      },
    },
    {
      hosts: ['fran', 'lucy'],
      location: 'crown-inn',
      when: 'The second Wednesday of the month',
      time: '8pm',
      occurrence: {
        day: 'wednesday',
        week: 'second',
      },
    },
    {
      host: 'fran',
      location: 'bull-broughton',
      when: 'The second Monday of the month',
      time: '7.30pm',
      occurrence: {
        day: 'monday',
        week: 'second',
      },
      exceptions: [
        '2024-10-14',
      ],
      manualOccurrences: [
        '2024-10-18',
      ],
    },
    {
      host: 'laurence-findley',
      location: 'bulls-head-cosby',
      when: 'The last Sunday of the month',
      time: '5pm',
      occurrence: {
        day: 'sunday',
        week: 'last',
      },
    },
    {
      host: 'fran',
      location: 'white-bear',
      when: 'The fourth Monday of the month',
      time: '7.30pm',
      occurrence: {
        day: 'monday',
        week: 'fourth',
      },
      exceptions: [
        '2024-04-22',
        '2024-05-27',
      ]
    },
    {
      host: 'liam-and-sean',
      location: 'queens-arms-leire',
      when: 'Every six weeks on a Tuesday',
      time: '8pm',
      manualOccurrences: [
        '2024-06-04',
        '2024-07-09',
        '2024-08-27',
        '2024-10-08',
        '2024-11-19',
      ],
    },
    {
      host: 'baker-and-crane',
      location: 'royal-oak-cossington',
      when: 'Usually the third or last Tuesday of the month',
      time: '7.30pm',
      occurrence: {
        day: 'tuesday',
        week: 'third',
      },
      exceptions: [
        '2024-08-20',
        '2024-09-17',
        '2024-10-15',
      ],
      manualOccurrences: [
        '2024-09-24',
        '2024-10-29',
      ],
    },
    {
      host: 'fran',
      location: 'soar-bridge-inn',
      when: 'The first Monday of the month',
      time: '7.30pm',
      occurrence: {
        day: 'monday',
        week: 'first',
      },
    },
    {
      host: 'peter-davis',
      location: 'baton-rouge-queens',
      when: 'The first Thursday of the month',
      time: '8pm',
      occurrence: {
        day: 'thursday',
        week: 'first',
      },
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/profile.php?id=61558099981041',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/batonrougeatqueens/',
        },
      ],
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
    {
      slug: 'laurence-findley',
      name: 'Laurence Findley',
    },
    {
      slug: 'arron-westby',
      name: 'Arron Westby',
    },
    {
      slug: 'lee-atkinson',
      name: 'Lee Atkinson',
      links: [
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/lee_plays_music/',
        },
      ],
    },
    {
      slug: 'peter-davis',
      name: 'Peter Davis',
      links: [
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/peterdavismusic/',
        },
      ],
    },
  ],
  locations: [
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
      slug: 'royal-oak-rothley',
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
    {
      slug: 'dixie-arms',
      name: 'The Dixie Arms',
      address: '6 Main St, Market Bosworth, Nuneaton CV13 0JW',
      location: 'Market Bosworth',
    },
    {
      slug: 'crown-inn',
      name: 'Crown Inn',
      address: '23 Church St, Appleby Magna, Swadlincote DE12 7BB',
      location: 'Appleby Magna',
    },
    {
      slug: 'bull-broughton',
      name: 'The Bull',
      address: '2 Main St, Broughton Astley, Leicester LE9 6RD',
      location: 'Broughton Astley',
    },
    {
      slug: 'bulls-head-cosby',
      name: 'The Bulls Head',
      address: '2 The Nook, Cosby, Leicester LE9 1RQ',
      location: 'Cosby',
    },
    {
      slug: 'white-bear',
      name: 'The White Bear',
      address: '36 Coventry Rd, Hinckley LE10 0JT',
      location: 'Hinckley',
    },
    {
      slug: 'queens-arms-leire',
      name: 'The Queens Arms',
      address: 'Main St, Leire, Lutterworth LE17 5HF',
      location: 'Leire',
    },
    {
      slug: 'wentworth-arms-elmesthorpe',
      name: 'Wentworth Arms',
      address: 'Station Rd, Elmesthorpe, Leicester LE9 7SG',
      location: 'Elmesthorpe',
    },
    {
      slug: 'royal-oak-cossington',
      name: 'The Royal Oak',
      address: '105 Main St, Cossington, Leicester LE7 4UW',
      location: 'Cossington',
    },
    {
      slug: 'soar-bridge-inn',
      name: 'Soar Bridge Inn',
      address: '29 Bridge St, Barrow upon Soar, Loughborough LE12 8PN',
      location: 'Barrow upon Soar',
    },
    {
      slug: 'sir-robert-peel',
      name: 'Sir Robert Peel',
      address: '50 Jarrom St, Leicester LE2 7DD',
      location: 'Leicester',
    },
    {
      slug: 'baton-rouge-queens',
      name: 'Baton Rouge at Queens',
      address: 'Queen\'s Building, 41 Rutland St, Leicester LE1 1RE',
      location: 'Leicester',
    },
  ],
};
