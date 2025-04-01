import { useState, useEffect } from "preact/hooks";

function getDataFromLocalStorage(key) {
   if (!key || typeof key !== "string") {
      return null;
   }

   try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
   } catch (e) {
      console.warn("Failed to parse localStorage item", e);
      return null;
   }
}

function setDataToLocalStorage(key, data) {
   if (!key || typeof key !== "string" || !data) {
      return undefined;
   }

   try {
      localStorage.setItem(key, JSON.stringify(data));
   } catch (e) {
      console.warn("Failed to write to localStorage", e);
   }
}

const useLocalStorage = (key, initialValue) => {
   const [data, setData] = useState(() => {
      const local = getDataFromLocalStorage(key);
      return local !== null ? local : initialValue;
   });

   useEffect(() => {
      setDataToLocalStorage(key, data);
   }, [key, data]);

   return [data, setData];
};

export default useLocalStorage;
