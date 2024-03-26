const addToLocalStorage = (section, item) => {
  const previousData = getFromLocalStorage(section);
  if (previousData.includes(item)) {
    return alert("already added");
  }

  const newData = [...previousData, item];

  localStorage.setItem(section, JSON.stringify(newData));
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
