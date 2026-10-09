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
    <>
      <div className="about-hero">
        <PageContainer>
          <PageIntro
            eyebrow="About the project"
            summary={
              'Phốcus is an independent visual journal exploring the systems, spaces, and stories that have shaped Hanoi.'
            }
            title={'A journal for reading Hanoi through its built environment.'}
          />
        </PageContainer>
      </div>
      <section className="about-section" aria-labelledby="about-introduction">
        <p className="eyebrow">The project</p>
        <h2 id="about-introduction">Looking closely at the city we inherit.</h2>
        <div className="about-section__body">
          <p>
            Phốcus is a website and journal about Hanoi’s urban planning and
            infrastructure, tracing how the city’s historical planning decisions have
            shaped the pressures it faces today. It examines the roots of congestion,
            flooding, pollution, limited public transport, and unequal access to green
            space, while also looking at the interventions needed to address them.
          </p>
          <p>
            The project does not frame itself as a protest page, nor does it ask whether
            Hanoi’s development has done more harm than good. The city’s growth has
            undeniably brought benefits to millions of people who are waiting for a more
            livable and prosperous future. Instead, it asks how development can be
            carried out to deliver macro-level gains for the wider population while
            protecting the micro-level communities and everyday lives directly affected
            by it.
          </p>
          <p>
            In that sense, Phốcus bridges the divide between official narratives of
            urban progress and the lived realities of citizens whose neighborhoods are
            reshaped by change. It presents a more nuanced picture of development as a
            double-edged process: necessary for long-term prosperity, yet demanding care,
            accountability, and a more human understanding of who bears its costs.
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
    </>
  )
}
