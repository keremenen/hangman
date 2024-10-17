export const useLoadDataFromJson = async (url: string) => {
  return fetch(url).then((res) => res.json());
};
