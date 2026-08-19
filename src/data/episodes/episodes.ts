import type { Episode } from '../../types/episode'

export const episodes: Episode[] = [
  {
    id: '1',
    title: 'The Dragon Takes Flight',
    description:
      'How the spatial decisions of the imperial era continue to shape contemporary Hanoi.',
    sections: [
      {
        id: 'introduction',
        number: 0,
        title: 'Introduction',
        blocks: [
          {
            type: 'quote',
            segments: [
              {
                text: 'The land is both spacious and level, the ground elevated and open; the people are spared the hardships of low-lying, gloomy surroundings, and all things flourish in abundant vitality. Surveying the entire realm of the Viet, this is a truly magnificent location, where the four directions converge, and is truly suited to serve as the High Capital for ages to come.',
              },
            ],
            citation:
              'Emperor L\u00fd Th\u00e1i T\u1ed5, Edict on the Transfer of the Capital (Chi\u1ebfu d\u1eddi \u0111\u00f4), \u0110\u1ea1i Vi\u1ec7t S\u1eed k\u00fd to\u00e0n th\u01b0',
          },
          {
            type: 'paragraph',
            segments: [
              {
                text: 'Upon moving the capital from Hoa L\u01b0 (modern-day Ninh B\u00ecnh) to Th\u0103ng Long, the precursor of modern H\u00e0 N\u1ed9i, Emperor L\u00fd Th\u00e1i T\u1ed5 described terrain whose promise would be realized by successors over the next millennium.',
              },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              {
                text: 'Through changes of imperial dynasties, wars, invasions, and the upheavals of the nineteenth century onward, H\u00e0 N\u1ed9i has remained a bastion of political dominance and socioeconomic prosperity. It has anchored the nation across successive regimes: from the L\u00fd, Tr\u1ea7n, and L\u00ea dynasties to the Socialist Republic of today.',
              },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              {
                text: 'The modern metropolis of almost nine million inhabitants in 2026 faces challenges at the heart of every Hanoian: congestion, pollution, flooding, public infrastructure, and the balance between historic preservation and development. To form a cohesive, informed view of the present, we must first make sense of the spatial decisions of the past. In this opening episode of ',
              },
              { text: 'ph\u1ed1cus', emphasis: true },
              {
                text: ', we trace the evolution of Th\u0103ng Long\u2013H\u00e0 N\u1ed9i through the imperial era, and consider how its centuries-old vestiges continue to shape the way people live and work in the city today.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    description: 'Chapter two is being prepared.',
    sections: [{ id: 'introduction', number: 0, title: 'Introduction', blocks: [] }],
  },
  {
    id: '3',
    description: 'Chapter three is being prepared.',
    sections: [{ id: 'introduction', number: 0, title: 'Introduction', blocks: [] }],
  },
  {
    id: '4',
    description: 'Chapter four is being prepared.',
    sections: [{ id: 'introduction', number: 0, title: 'Introduction', blocks: [] }],
  },
]
