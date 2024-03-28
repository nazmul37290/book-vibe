import { toast } from "react-toastify";

const addToLocalStorage = (section, item) => {
  const previousData = getFromLocalStorage(section);
  if (previousData.includes(item)) {
    return toast.error("It's already been added");
  }

  const newData = [...previousData, item];

  localStorage.setItem(section, JSON.stringify(newData));
  toast.success(`Added Book to ${section} successfully`);
};

const getFromLocalStorage = (section) => {
  const previousData = localStorage.getItem(section);
  if (previousData) {
    const convertedPreviousData = JSON.parse(previousData);
    return convertedPreviousData;
  } else {
    return [];
  }
};

export { addToLocalStorage, getFromLocalStorage };
