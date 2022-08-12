import { useCallback, useState } from 'react';

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
