import Axios, { AxiosInstance } from 'axios';

import { GITHUB_API_URL } from '../../config';

class ApiGithub {
  private apiGithub: AxiosInstance;
  private apiDownload: AxiosInstance;

  constructor() {
    this.apiGithub = Axios.create({
      baseURL: GITHUB_API_URL + '/vinifsouza',
    });

    this.apiDownload = Axios.create({
      baseURL: 'https://raw.githubusercontent.com',
    });
  }

  async getRepositories(): Promise<any> {
    return this.apiGithub.get('/repos');
  }

  async getReadmeContent(
    user: string,
    repo: string,
    branch = 'master',
  ): Promise<any> {
    return this.apiDownload.get(`/${user}/${repo}/${branch}/README.md`);
  }
}

export default new ApiGithub();
