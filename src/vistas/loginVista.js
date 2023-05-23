import { User } from '../bd/user'

export const login = {
  template: `
  <div class="pt-5">
  <h1 class="w-100 text-center">Login</h1>
  <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
    <label for="email" class="mt-2 form-label">User: </label>
    <input type="text" class="form-control" placeholder="usuario@mail.com">

    <label for="pass" class="mt-2 form-label">Contraseña: </label>
    <input type="text" class="form-control">

    <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
  </form>
</div>

  `,
  script: () => {
    // script para validación de formulario
    // const form = document.querySelector('#login')
    // form.addEventListener('submit', async (event) => {
    //   event.preventDefault()
    //   event.stopPropagation()
    //   // Verificamos validación del formulario
    //   form.classList.add('was-validated')
    //   if (!form.checkValidity()) {
    //     console.log('formulario no valido')
    //   } else {
    //     // Si los datos validan
    //     try {
    //       // Capturamos datos del formulario
    //       const userData = {
    //         email: document.querySelector('#emailL').value,
    //         password: document.querySelector('#passwordL').value
    //       }
    //       // Intentamos loguearnos utilizando el método login de nuestra clase User
    //       const usuarioLogeado = await User.login(userData)
    //       // Si nos logueamos con exito pintamos el email en header y menú de usuario
    //       const divUsuarioLogeado = document.querySelectorAll('#emailUsuarioLogueado')
    //       divUsuarioLogeado[0].innerHTML = usuarioLogeado.email

    //       // y ocultamos item 'login' para mostrar item 'logout'
    //       // document.querySelector('.liLogout').classList.remove('d-none')
    //       // document.querySelector('.liLogin').classList.add('d-none')

    //       // Cagamos la página home
    //       window.location.href = '/Prueba/#/home'
    //       window.location.reload()
    //     } catch (error) {
    //       alert('No se ha podido iniciar sesión ' + error)
    //     }
    //   }
    // })
  }

}
