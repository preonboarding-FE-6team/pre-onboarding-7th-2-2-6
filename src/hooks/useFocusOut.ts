import { useEffect } from 'react';

function useFocusOut(state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>, ...classNames: string[]) {
  useEffect(() => {
    const handleFocusOut = ({ target }: MouseEvent) => {
      if (!(target instanceof HTMLElement) || classNames.some((className) => target.closest(`.${className}`))) {
        return;
      }

      setState(false);
      document.removeEventListener('click', handleFocusOut);
    };

    if (state) {
      document.addEventListener('click', handleFocusOut);
      return () => document.removeEventListener('click', handleFocusOut);
    }
  }, [state]);
}

export default useFocusOut;
