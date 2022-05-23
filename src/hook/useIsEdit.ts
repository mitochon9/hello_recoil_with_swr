import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isEditNumState } from '@/state/isEditNumState';

interface UseSetIsEditReturnType {
  setIsEdit: (id: number | undefined) => void;
  cancelEdit: () => void;
}

interface UseIsEditReturnType extends UseSetIsEditReturnType {
  isEditNum: number | undefined;
}

export const useIsEdit = (): UseIsEditReturnType => {
  const isEditNum = useRecoilValue(isEditNumState);
  const { setIsEdit, cancelEdit } = useSetIsEdit();

  return { isEditNum, setIsEdit, cancelEdit };
};

export const useSetIsEdit = (): UseSetIsEditReturnType => {
  const setIsEditNum = useSetRecoilState(isEditNumState);

  const setIsEdit = useCallback(
    (id: number | undefined) => {
      setIsEditNum(id);
    },
    [setIsEditNum],
  );

  const cancelEdit = useCallback(() => {
    setIsEdit(undefined);
  }, [setIsEdit]);

  return { setIsEdit, cancelEdit };
};
