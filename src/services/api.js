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
  
  const promise = axios.delete(`${BASE_URL}/logout`,config);
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
export function insertTest(token, body) {
  const config = createConfig(token);
  
  const promise = axios.post(`${BASE_URL}/tests/insert`,body, config);
  return promise;
}

export function getCategories(token){
  const config = createConfig(token);
  
  const promise = axios.get(`${BASE_URL}/categories`, config);
  return promise;
}

export function getTeachersDisciplines(token){
  const config = createConfig(token);
  
  const promise = axios.get(`${BASE_URL}/disciplines/teachers`, config);
  return promise;
}
export function updateViews(token, testId) {
  const config = createConfig(token);
  
  const promise = axios.put(`${BASE_URL}/tests/views/${testId}`,"",config);
  return promise;
}