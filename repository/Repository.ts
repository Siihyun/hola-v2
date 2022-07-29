import { AxiosInstance } from 'axios';

export default class Repository {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }
}
