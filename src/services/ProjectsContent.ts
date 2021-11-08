/* eslint-disable array-callback-return */

import ApiGithub from '../support/libraries/ApiGithub';
import { IProject } from './../interfaces/IProject';

interface IMapperMetadata {
  logo: string;
  icons: string[];
}

class ProjectsContent {
  public async getListableRepositories(): Promise<IProject[]> {
    const respositories = (await ApiGithub.getRepositories()).data;

    const repositoriesListables: any = await Promise.all(
      respositories
        .filter((repo: any) => {
          if (repo.topics.includes('portfolio-content') && !repo.private)
            return repo;
        })
        .map(async (repo: any) => {
          const { name, description, default_branch, full_name, homepage } =
            repo;

          const data = (await ApiGithub.getReadmeContent('vinifsouza', name))
            .data;

          this.mapperMetaData(data);

          return {
            name: name
              .replace('-', ' ')
              .replace(/\b\w/g, (l: any) => l.toUpperCase()),
            fullName: full_name,
            url: homepage,
            description,
            defaultBranch: default_branch,
            ...this.mapperMetaData(data),
          };
        }),
    );

    return repositoriesListables;
  }

  private mapperMetaData(data: string): IMapperMetadata {
    const splitByIcons = data.split('<iconfy>');
    const splitByLogo = data.split('<logo-url>');

    const icons = splitByIcons
      .filter((el: any) => {
        if (el.includes('icon->')) return el;
      })
      .map((iconEl: any) => {
        const startIconPositionSlice =
          iconEl.indexOf('icon->') + 'icon->'.length;
        return iconEl.slice(startIconPositionSlice);
      });

    const logo = splitByLogo.filter((el: any) => {
      if (el.includes('logo_url->')) return el;
    })[0];

    const startLogoPositionSlice =
      logo.indexOf('logo_url->') + 'logo_url->'.length;

    return {
      logo: logo.slice(startLogoPositionSlice),
      icons,
    };
  }
}

export default new ProjectsContent();
