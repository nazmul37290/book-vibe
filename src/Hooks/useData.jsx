import { useEffect, useState } from "react";

const useData = () => {
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

export default useData;
