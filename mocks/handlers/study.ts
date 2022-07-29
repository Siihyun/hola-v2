import { rest } from 'msw';
import { STUDY_PATH } from '../../repository/path';
import studyData from './studies.data';
import studyDetail from './study.data';

const PREFIX_VER1 = '/api/v2';

export const getStudyList = rest.get(
  `${PREFIX_VER1}/${STUDY_PATH}`,
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(studyData));
  },
);

export const getStudyDetail = rest.get(
  `${PREFIX_VER1}/${STUDY_PATH}/:studyId`,
  (req, res, ctx) => {
    const { studyId } = req.params;
    return res(ctx.status(200), ctx.json(studyDetail));
  },
);

export const StudyHandler = [getStudyList, getStudyDetail];
