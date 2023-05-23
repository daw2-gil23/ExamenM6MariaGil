import { User } from '../bd/user.js'
import { Loginvista } from './loginVista'

export const registro = {
  template: `
  <div class="pt-5 mt-5">
  <h1 class="w-100 text-center">Registro</h1>
  <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
    <label for="email" class="mt-2 form-label">User: </label>
    <input type="text" class="form-control" placeholder="usuario@mail.com" id="email">

    <label for="pass" class="mt-2 form-label">Contraseña: </label>
    <input type="text" class="form-control" id="contrasenya">

    <input type="text" class="mt-4 w-100 btn btn-primary enviar" value="Entrar" id="enviar">
  </form>
</div>
    `,
  script: () => {
    const main = document.querySelector('main')

    main.addEventListener('click', async (e) => {
      if (e.target.classList.contains('enviar')) {
        e.preventDefault()

        try {
          const usuario = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#contrasenya').value
          }
          const nuevoUser = await User.create(usuario)

          main.innerHTML = Loginvista.template
          Loginvista.script()
          alert('Se ha creado el usuario correctamente')
        } catch (error) {
          console.log(error)
          alert('Ha habido un error en la base de datos ' + error)
        }
      }
    })
  }
}
