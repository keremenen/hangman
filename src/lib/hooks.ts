export const useLoadDataFromJson = (url: string) => {
  return fetch(url).then((res) => res.json());
};
