import { useQuery } from '@tanstack/react-query';
import { studyRepository } from '../../../repository';

const useGetStudyList = () => {
  return useQuery(['studyList'], studyRepository.getList);
};

export default useGetStudyList;
