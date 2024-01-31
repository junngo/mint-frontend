import { atom } from 'recoil';

export const companyState = atom({
  key: 'companyState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
