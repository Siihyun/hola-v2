import { STUDY_PATH } from '../path';
import Repository from '../Repository';

export default class StudyRepository extends Repository {
  getList = async () => {
    return this.api.get(STUDY_PATH);
  };

  getDetail = async (id: string) => {
    return this.api.get(`${STUDY_PATH}/${id}`);
  };
}
