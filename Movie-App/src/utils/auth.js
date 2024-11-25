export const registerUser = (username, password) => {
  localStorage.setItem("user", JSON.stringify({ username, password }));
  return true;
};

export const loginUser = (username, password) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.username === username && user.password === password;
};
