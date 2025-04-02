import { useState, useLayoutEffect } from "preact/hooks";

const useLayoutEffectOnce = () => {
   const [isFirstRender, setIsFirstRender] = useState(true);

   useLayoutEffect(() => {
      if (isFirstRender) {
         setIsFirstRender(false);
      }
   }, [isFirstRender]);

   return { isFirstRender };
};

export default useLayoutEffectOnce;
