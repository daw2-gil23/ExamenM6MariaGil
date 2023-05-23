import { User } from '../bd/user'

export const Loginvista = {
  template: `
  <div class="pt-5 mt-5">
  <h1 class="w-100 text-center">Login</h1>
  <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
    <label for="email" class="mt-2 form-label">User: </label>
    <input type="text" class="form-control" placeholder="usuario@mail.com" id="emailL">

    <label for="pass" class="mt-2 form-label">Contraseña: </label>
    <input type="text" class="form-control" id="contrasenyaL">

    <input type="text" class="mt-4 w-100 btn btn-primary enviarLogin" value="Entrar" >
  </form>
</div>

  `,
  script: () => {
    const main = document.querySelector('main')

    main.addEventListener('click', async (e) => {
      if (e.target.classList.contains('enviarLogin')) {
        e.preventDefault()

        try {
          const usuario = {
            email: document.querySelector('#emailL').value,
            password: document.querySelector('#contrasenyaL').value
          }
          const usuarioLogeado = await User.login(usuario)

          const emailLog = document.querySelector('#emailLogeado')
          emailLog.innerHTML = usuarioLogeado.email

          const botones = document.querySelector('#botones')

          botones.innerHTML = `      
              <button class="m-2 panel">Panel</button> 
              <button class="m-2 deslogeate">Deslogeate</button> `

          alert('Se ha iniciado correctamente')
        } catch (error) {
          console.log(error)
          alert('Ha habido un error al logearse')
        }
      }
    })
  }

}
