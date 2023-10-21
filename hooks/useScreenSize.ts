import { useState, useEffect } from 'react';

import { BreakPointType, getSizeInNumber } from '../utils/device';

const useScreenSize = (size: BreakPointType) => {
  const breakpoint = getSizeInNumber(size);

  const [isScreenSize, setIsScreenSize] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (breakpoint) {
        setIsScreenSize(window.innerWidth >= breakpoint);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isScreenSize;
};

export default useScreenSize;
