import { useState } from "preact/hooks";

export const useCopied = (timeout = 3000) => {
   const [copied, setCopied] = useState(false);

   const triggerCopied = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
   };

   return { copied, triggerCopied };
};
