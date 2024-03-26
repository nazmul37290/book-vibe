import { useEffect, useState } from "react";

export const useJsonData = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/books.json");
      const data = await res.json();
      setJsonData(data);
    };
    loadData();
  }, []);
  return { jsonData };
};
