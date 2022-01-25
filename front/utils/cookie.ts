export const getCookieValue = (searchKey: string): string => {
  if (typeof searchKey === "undefined") {
    return "";
  }

  let searchValue = "";

  document.cookie.split(";").forEach((cookie) => {
    const [key, value] = cookie.split("=");
    if (key === searchKey) {
      return (searchValue = value);
    }
  });

  return searchValue;
};
