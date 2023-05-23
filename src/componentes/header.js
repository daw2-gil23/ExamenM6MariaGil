import { login } from '../vistas/loginVista.js'
import { panel } from '../vistas/panel.js'
import { registro } from '../vistas/registroVista.js'

export const header = {
  template: `
  
<!-- Navbar  -->
<nav class=" bg-light ">
  <div class="d-flex">
  <h3>Gestión de incidencias FPLLEFIA</h3> 
  <button class="m-2" id="panel">Panel</button> 
  <button class="m-2" id="login">Login</button> 
  <button class="m-2" id="registro">Registro</button> 

  </div>
</nav>


  `,
  script: async () => {
    const logearte = document.querySelector('#login')
    const panelM = document.querySelector('#panel')
    const registroM = document.querySelector('#registro')
    const main = document.querySelector('main')

    logearte.addEventListener('click', async (e) => {
      main.innerHTML = login.template
      login.script()
    })

    panelM.addEventListener('click', async (e) => {
      main.innerHTML = panel.template
      panel.script()
    })

    registroM.addEventListener('click', async (e) => {
      main.innerHTML = registro.template
      registro.script()
    })
  }
}
