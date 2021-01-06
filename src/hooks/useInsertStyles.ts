import React, { useEffect } from 'react';
import { insertCss } from 'insert-css';

let cssInjectedFlag = false;
const useInsertStyles = (styleStr: string = '') => {
  useEffect(() => {
    if (!cssInjectedFlag) {
      insertCss(styleStr, {
        prepend: true,
      });
      cssInjectedFlag = true;
    }
  }, []);
};

export default useInsertStyles;