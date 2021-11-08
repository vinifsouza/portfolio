import { Content, Description, Icons, Link, Ribbon, Title, Wrapper } from './styled';

import { IProject } from './../../../interfaces/IProject';
import { Icon } from '@iconify/react';
import React from 'react';

export function Card(prop: { project: IProject }) {

  const project = prop.project;

  return (
    <Wrapper theme={project.logo}>
      {project.ribbon && <Ribbon><div className="ribbon"><span>{project.ribbon}</span></div></Ribbon>}
      <Content>
        <Title>{project.name}</Title>

        <Description>{project.description}</Description>

        <Icons>
          {project.icons.map(el => { return <Icon icon={el} width={'1.3rem'}/> })}
        </Icons>

        <Link>
          <a href={`https://github.com/${project.fullName}`} target="_blank" rel="noreferrer noopener">Repositório</a>
          <span> | </span>
          <a href={project.url!} target="_blank" rel="noreferrer noopener">URL</a>
        </Link>
      </Content>
    </Wrapper>
  )
}
