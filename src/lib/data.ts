export interface Occurrence {
  day: string;
  week: string;
}

export interface Event {
  hosts?: string[];
  host?: string;
  title?: string;
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
  description: string;
}

export interface Location {
  name: string;
  slug: string;
  address: string;
  mapsAddress?: string;
  location: string;
}

export const openMicData: { events: Event[], hosts: Host[], locations: Location[] } = {
  events: [
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
      when: 'Usually around the third Sunday of the month',
      manualOccurrences: [
        '2025-04-27',
      ],
    },
    {
      host: 'liam-and-sean',
      location: 'railway',
      time: '5pm',
      when: 'Usually the last or penultimate Sunday of the month',
      manualOccurrences: [
        '2025-04-27',
      ],
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/groups/889249722600945',
          description: 'Facebook group',
        },
      ],
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
          description: 'Facebook group',
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
    },
    {
      host: 'liam-and-sean',
      location: 'queens-arms-leire',
      when: 'Every six weeks on a Tuesday',
      time: '8pm',
    },
    {
      host: 'baker-and-crane',
      location: 'royal-oak-cossington',
      when: 'Usually the third or last Tuesday of the month',
      time: '7.30pm',
      manualOccurrences: [
        '2025-02-25',
        '2025-03-25',
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
      host: 'jack-and-tasha',
      location: 'baton-rouge-queens',
      when: 'The third Thursday of the month',
      time: '8pm',
      occurrences: [
        {
          day: 'thursday',
          week: 'third',
        },
      ],
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/profile.php?id=61558099981041',
          description: 'Facebook page',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/batonrougeatqueens/',
          description: 'Instagram page',
        },
      ],
    },
    {
      host: 'chris-sergent',
      location: 'red-lion-sapcote',
      when: 'The third Wednesday of the month',
      time: '7.30pm',
      occurrence: {
        day: 'wednesday',
        week: 'third',
      },
    },
    {
      host: 'jack-and-tasha',
      location: 'grand-union',
      when: 'The second and fourth Thursday of the month',
      time: '7.30pm',
      occurrences: [
        {
          day: 'thursday',
          week: 'second',
        },
        {
          day: 'thursday',
          week: 'fourth',
        },
      ],
    },
    {
      host: 'simon-day',
      location: 'red-cow',
      title: 'Acoustic Night at The Red Cow Market Harborough',
      when: 'The first Thursday of the month',
      time: '8pm',
      occurrence: {
        day: 'thursday',
        week: 'first',
      },
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/groups/178638732636123',
          description: 'Market Harborough Open Mic Collective',
        },
      ],
    },
    {
      host: 'baker-and-crane',
      location: 'birstall-social-club',
      time: '5pm',
      when: 'Usually the second Sunday of the month',
      manualOccurrences: [
        '2025-01-12',
        '2025-03-09',
        '2025-06-29',
      ],
    },
    {
      location: 'loaded-dog',
      time: '7.30pm',
      when: 'Every Monday',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/LoadedDog',
          description: 'Facebook page',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/LoadedDogLeics/',
          description: 'Instagram page'
        },
      ]
    },
    {
      location: 'axe-and-square',
      host: 'fran',
      time: '7.30pm',
      when: 'The third Monday of the month',
      occurrence: {
        day: 'monday',
        week: 'third',
      },
    },
    {
      location: 'black-dog',
      time: '3pm',
      when: 'Usually the first Sunday of the month',
      occurrence: {
        day: 'sunday',
        week: 'first',
      },
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/events/1172377943752104',
          description: 'Facebook event',
        }
      ]
    },
    {
      location: 'james-bistro',
      time: '6pm',
      when: 'The last Friday of the month',
      occurrence: {
        day: 'friday',
        week: 'last',
      },
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/groups/1305211636615435',
          description: 'Facebook group',
        }
      ]
    },
    {
      hosts: ['lucy', 'arron-westby'],
      location: 'rose-and-crown',
      when: 'The second Friday of the month',
      time: '8pm',
      occurrence: {
        day: 'friday',
        week: 'second',
      },
    },
    {
      host: 'altered-ego',
      location: 'sir-robert-peel',
      when: 'The last Friday of the month',
      time: '7pm',
      occurrence: {
        day: 'friday',
        week: 'last',
      },
      manualOccurrences: [
        '2025-03-21',
        '2025-05-23',
      ],
      exceptions: [
        '2025-03-28',
        '2025-05-30',
      ],
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/events/635225235654174',
          description: 'Facebook event',
        }
      ],
    },
    {
      host: 'jimmy-johnson',
      location: 'chequers-country-inn',
      when: 'The last Wednesday of the month',
      time: '7pm',
      occurrence: {
        day: 'wednesday',
        week: 'last',
      },
    },
    {
      hosts: ['fran', 'lucy'],
      location: 'elephant-and-castle',
      when: 'The last Wednesday of the month',
      time: '7.30pm',
      occurrence: {
        day: 'wednesday',
        week: 'last',
      },
      links: [
        {
          description: 'Facebook page',
          href: 'https://www.facebook.com/profile.php?id=61575105931541',
          icon: 'facebook',
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
          description: 'Instagram page',
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
          description: 'Facebook page',
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
          description: 'Facebook page',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/francescahattonmurdenmusic/',
          description: 'Instagram page',
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
          description: 'Facebook page',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/baker.crane/',
          description: 'Instagram page',
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
          description: 'Facebook page',
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
          description: 'Facebook page',
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
          description: 'Instagram page',
        },
      ],
    },
    {
      slug: 'altered-ego',
      name: 'Altered Ego',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/profile.php?id=61571991301153',
          description: 'Facebook page',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/wearealteredego/',
          description: 'Instagram page',
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
          description: 'Instagram page',
        },
      ],
    },
    {
      slug: 'chris-sergent',
      name: 'Chris Sergent',
    },
    {
      slug: 'jack-and-tasha',
      name: 'Jack & Tasha',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/jack.tasha.duo/',
          description: 'Facebook page',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/jack_and_tash/',
          description: 'Instagram page',
        },
      ],
    },
    {
      slug: 'simon-day',
      name: 'Simon Day',
    },
    {
      slug: 'jimmy-johnson',
      name: 'Jimmy Johnson',
      links: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/profile.php?id=100061274857182',
          description: 'Facebook profile',
        },
        {
          icon: 'instagram',
          href: 'https://www.instagram.com/jimmyjohnsonmusic/',
          description: 'Instagram page',
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
    {
      slug: 'three-tuns',
      name: 'The Three Tuns',
      address: '16 West End, Barlestone, Nuneaton CV13 0EJ',
      location: 'Barlestone',
    },
    {
      slug: 'grand-union',
      name: 'The Grand Union',
      address: '24 King St, Leicester LE1 6RL',
      location: 'Leicester',
    },
    {
      slug: 'red-cow',
      name: 'Red Cow',
      address: '59-60 High St, Market Harborough LE16 7AF',
      mapsAddress: 'The Red Cow Pub, 59-60 High St, Market Harborough LE16 7AF',
      location: 'Market Harborough',
    },
    {
      slug: 'birstall-social-club',
      name: 'Social Club',
      address: '16-18 Wanlip Ln, Birstall, Leicester LE4 4JS',
      location: 'Birstall',
    },
    {
      slug: 'loaded-dog',
      name: 'The Loaded Dog',
      address: '144 London Rd, Leicester LE2 1ED',
      location: 'Leicester',
    },
    {
      slug: 'axe-and-square',
      name: 'The Axe & Square',
      address: '22 Wigston St, Countesthorpe, Leicester LE8 5RQ',
      location: 'Countesthorpe',
    },
    {
      slug: 'black-dog',
      name: 'The Black Dog',
      address: '23 London Rd, Oadby, Leicester LE2 5DL',
      location: 'Oadby',
    },
    {
      slug: 'james-bistro',
      name: 'James\' Bistro',
      address: '5 East Bond Street, Leicester, United Kingdom LE1 4SX',
      location: 'Leicester',
    },
    {
      slug: 'rose-and-crown',
      name: 'The Rose & Crown',
      address: '6 Main St, Zouch, Loughborough LE12 5EQ',
      location: 'Zouch',
    },
    {
      slug: 'chequers-country-inn',
      name: 'Chequers Country Inn',
      address: 'Ullesthorpe, Lutterworth LE17 5BT',
      location: 'Ullesthorpe',
    },
    {
      slug: 'elephant-and-castle',
      name: 'Elephant and Castle',
      address: '26 Main St, Thurlaston, Leicester LE9 7TP',
      location: 'Thurlaston',
    },
    {
      slug: 'red-lion-sapcote',
      name: 'Red Lion',
      address: '8 Church St, Sapcote, Leicester LE9 4FG',
      location: 'Sapcote',
    },
  ],
};
