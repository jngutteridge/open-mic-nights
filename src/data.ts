
export const openMicData = {
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
