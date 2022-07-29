import { useQuery } from '@tanstack/react-query';
import { studyRepository } from '../../../repository';

const useStudyDetail = (id: string) => {
  return useQuery(['studyList'], () => studyRepository.getDetail(id));
};

export default useStudyDetail;
