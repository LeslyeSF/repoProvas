import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
export function signUp(body) {
  const promise = axios.post(`${BASE_URL}/register`, body);
  return promise;
}
export function signIn(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}
export function logOut(token) {
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/logout`, config);
  return promise;
}
export function getTestsByTeachers(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/tests/teachers`, config);
  return promise;
}
export function getTestsByDisciplines(token) {
  const config = createConfig(token);
  
  const promise = axios.get(`${BASE_URL}/tests/disciplines`, config);
  return promise;
}