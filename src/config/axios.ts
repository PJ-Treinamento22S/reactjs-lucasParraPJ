import axios from "axios";

const getApi = () => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDcyOTM0NTIsImV4cCI6MTY0NzM3OTg1Miwic3ViIjoiOWUyMzIzZjEtMGQ0MS00ZWI1LWI4NDAtMTAzMGZiZGQ2ZTdmIn0.aZFYPFMrXcf7M4oTAJZh25lpyQHMpkPefv9d7T4lwzI";
  const api = axios.create({
    baseURL: "https://piupiuwer.polijrinternal.com",
  });

  (api.defaults.headers as any).Authorization = token;

  return api;
};

export default getApi;
