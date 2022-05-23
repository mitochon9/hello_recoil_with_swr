import { atom } from 'recoil';

export const isEditNumState = atom<number | undefined>({
  key: 'isEditNum',
  default: undefined,
});
