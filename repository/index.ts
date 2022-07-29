import api from './api';
import StudyRepository from './study/StudyRepository';
import UserRepository from './user/UserRepository';

export const studyRepository = new StudyRepository(api);
export const userRepository = new UserRepository(api);
