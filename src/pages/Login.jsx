import React, { useState } from "react";

export const Login = () => {
    //1 - Criar o objeto para enviar com os dados usando useState
    const [login, setLogin] = useState({})

    //const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        console.log('submit')
        //navigate('/home')
        //Tentar criar navigate em casa

        if(login.email === 'adm@teste' && login.senha === '1234') {
            console.log('vai para home')
        } else{
            alert(`Usuário ou senha inválido.`)
        }
    }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleLogin}>
        <img
          className="mb-4"
          src="	https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={login.email || ''}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="senha"
            placeholder="Senha"
            value={login.senha || ''}
          />
          <label htmlFor="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembre-se de mim
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Entrar
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </main>


  );
};

//Exercício de casa:
//Criar onChange para conseguir digitar;
//Simular o login que direciona para a /home conforme o login fake;
//Criar navigate.