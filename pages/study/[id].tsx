import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { studyRepository } from '../../repository';

interface StudyDetailResponse {
  ok: boolean;
  study: unknown; // TODO: study type 정의 및 반영 필요
}

const StudyDetail: NextPage<StudyDetailResponse> = ({ study }) => {
  console.log(study);
  return <div>{study.title}</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx?.params?.id;
  if (!id) {
    return {
      props: {},
    };
  }
  const study = await studyRepository.getDetail(id);

  return {
    props: {
      study,
    },
    revalidate: 10,
  };
};

export default StudyDetail;
