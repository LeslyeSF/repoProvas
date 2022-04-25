
export function verifyAndsetToken(setToken, navigate) {
  if(`${localStorage.getItem("repoprovas_token")}` !== 'undefined') 
      setToken(localStorage.getItem("repoprovas_token"));
      navigate('/home');
}

export function verifyToken(token, navigate) {
  if(!token) navigate('/');
}