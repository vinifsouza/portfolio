import React, { useEffect, useState } from 'react';

import { Card } from './Card';
import { Container } from './styled'
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Footer } from './../../shared/Footer/index';
import { IProject } from './../../interfaces/IProject';
import { Main } from '../../styles/DefaultStyles';
import ProjectsContent from '../../services/ProjectsContent';

export default function Project() {
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    ProjectsContent.getListableRepositories()
    .then(data =>
      setProjects(data)
    );
   }, [])

  return (
    <Main id="projects" theme='blue'>
      <Container>
          {projects && projects.map((project: IProject) => {
              return <Card
                project={project}
                key={project.name}
              />
            })
          }

      </Container>
      <Footer target="contact" direction={DIRECTION_OPTIONS.BOT} />
    </Main>
  )
}
