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
                text: 'Indeed, the predictions and ambition he had for the site on which the Vietnamese Capital still sits on today would be realized by successors over the next millenia. Even over numerous changes of Imperial Dynasties, wars and invasions, and the recent upheavals from the 19th Century onward, Hanoi has remained a bastion of political dominance and socioeconomic prosperity, anchoring the entire nation across multiple successive regimes: from the L\u00fd, Tr\u1ea7n, and L\u00ea to the Socialist Republic of today.',
              },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              {
                text: 'However, the modern metropolis of almost 9 million inhabitants in 2026 (General Statistics Office of Vietnam) faces numerous challenges that lie in the heart of every Hanoian: from congestion, pollution, flooding, to public infrastructure and balancing historical preservation with development. We believe that to form a truly cohesive, informed view of the present, we must first make sense of the spatial decisions of the past. Hence, for the opening episode of ',
              },
              { text: 'ph\u1ed1cus', emphasis: true },
              {
                text: ', we will take you through the evolution of Th\u0103ng Long-H\u00e0 N\u1ed9i through the chapters of the Imperial Era, and how even the centuries old vestiges of the Feudal still change the way people of today live and work in Hanoi.',
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
