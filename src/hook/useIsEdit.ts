import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isEditNumState } from '@/state/isEditNumState';

interface UseSetIsEditReturnType {
  setIsEdit: (id: number | undefined) => void;
  closeEdit: () => void;
}

interface UseIsEditReturnType extends UseSetIsEditReturnType {
  isEditNum: number | undefined;
}

export const useIsEdit = (): UseIsEditReturnType => {
  const isEditNum = useRecoilValue(isEditNumState);
  const setIsEdit = useSetIsEdit();

  return { isEditNum, ...setIsEdit };
};

export const useSetIsEdit = (): UseSetIsEditReturnType => {
  const setIsEditNum = useSetRecoilState(isEditNumState);

  const setIsEdit = useCallback(
    (id: number | undefined) => {
      setIsEditNum(id);
    },
    [setIsEditNum],
  );

  const closeEdit = useCallback(() => {
    setIsEditNum(undefined);
  }, [setIsEditNum]);

  return { setIsEdit, closeEdit };
};
