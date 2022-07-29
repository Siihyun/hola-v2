import type { NextPage } from 'next';
import useGetStudyList from '../domains/study/hooks/useGetStudyList';

const Home: NextPage = () => {
  const { data, isLoading } = useGetStudyList();
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return <div>hi</div>;
};

export default Home;
