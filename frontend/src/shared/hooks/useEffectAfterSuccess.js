import { useEffect } from 'react';

const useEffectAfterSuccess = (callback, dependency) => {
  useEffect(() => {
    if (dependency) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);
};

export default useEffectAfterSuccess;