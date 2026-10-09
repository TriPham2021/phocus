import { PageContainer } from '../../components/layout/PageContainer'
import { PageIntro } from '../../components/layout/PageIntro'

const teamMembers = [
  {
    name: 'Mai Anh Nguyen',
    role: 'Editorial Director',
    bio: 'Shapes the journal’s research direction and long-form editorial approach.',
  },
  {
    name: 'Quang Minh Tran',
    role: 'Urban Researcher',
    bio: 'Develops story leads that connect the city’s historical layers to everyday life.',
  },
  {
    name: 'Linh Pham',
    role: 'Visual Editor',
    bio: 'Curates photography, maps, and archival material for each chapter.',
  },
]

export function AboutPage() {
  return (
    <PageContainer>
      <PageIntro
        eyebrow="About the project"
        summary={
          'Phốcus is an independent visual journal exploring the systems, spaces, and stories that have shaped Hanoi.'
        }
        title={'A journal for reading Hanoi through its built environment.'}
      />
      <section className="about-section" aria-labelledby="about-introduction">
        <p className="eyebrow">The project</p>
        <h2 id="about-introduction">Looking closely at the city we inherit.</h2>
        <div className="about-section__body">
          <p>
            Phốcus brings together urban history, visual research, and accessible
            storytelling to consider how Hanoi has grown over time. Each chapter follows
            the decisions, structures, and daily routines that continue to shape the
            city today.
          </p>
          <p>
            This is placeholder project copy for the developing journal. Future editions
            will pair researched essays with maps, photography, archival material, and
            conversations that make the built environment easier to see and discuss.
          </p>
        </div>
      </section>

      <section
        className="about-section about-section--team"
        aria-labelledby="meet-the-team"
      >
        <p className="eyebrow">Meet the team</p>
        <h2 id="meet-the-team">The people behind Phốcus.</h2>
        <div className="about-team-grid">
          {teamMembers.map((member) => (
            <article className="about-team-member" key={member.name}>
              <h3>{member.name}</h3>
              <p className="about-team-member__role">{member.role}</p>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
