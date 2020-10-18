interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}
export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: "teste",
        user: {
          name: 'teste',
          email: 'teste@teste.com'
        }
      })
    }, 2000)
  });
}