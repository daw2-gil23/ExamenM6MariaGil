import { User } from '../bd/user.js'
import { Loginvista } from '../vistas/loginVista.js'
import { panel } from '../vistas/panel.js'
import { registro } from '../vistas/registroVista.js'

export const header = {
  template: `
  
<!-- Navbar  -->
<nav class="navbar navbar-expand-sm bg-light fixed-top">
  <div class="container-fluid">
    <h3>Gestión de incidencias FPLLEFIA</h3> 
    
    <div id="botones">  
      <button class="m-2 login">Login</button> 
      <button class="m-2 registro">Registro</button> 
    </div> 
    <div id="emailLogeado"></div>
  </div>
</nav>



  `,
  script: async () => {
    const botones = document.querySelector('#botones')
    try {
      // Capturamos los datos del usuario logueado
      const usuarioLogueado = await User.getUser()
      if (usuarioLogueado) {
        botones.innerHTML = `      
        <button class="m-2 panel">Panel</button> 
        <button class="m-2 deslogeate">Deslogeate</button>`
        const emailLog = document.querySelector('#emailLogeado')
        emailLog.innerHTML = usuarioLogueado.email
      }
    } catch (error) {
      // alert('No he podido cargar el usuario logueado')
    }

    const header = document.querySelector('header')
    const main = document.querySelector('main')

    header.addEventListener('click', async (e) => {
      if (e.target.classList.contains('panel')) {
        main.innerHTML = panel.template
        panel.script()
      }
      if (e.target.classList.contains('login')) {
        main.innerHTML = Loginvista.template
        Loginvista.script()
      }
      if (e.target.classList.contains('registro')) {
        main.innerHTML = registro.template
        registro.script()
      }
      if (e.target.classList.contains('deslogeate')) {
        User.logout()
        botones.innerHTML = `      
        <button class="m-2 login">Login</button> 
        <button class="m-2 registro">Registro</button> `
        const emailLog = document.querySelector('#emailLogeado')
        emailLog.innerHTML = ''
      }
    })
  }
}
