import type { NextPage } from 'next';
import useGetStudyList from '../domains/study/hooks/useGetStudyList';

const Main: NextPage = () => {
  const { data, isLoading } = useGetStudyList();
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return <div>main page</div>;
};

export default Main;
