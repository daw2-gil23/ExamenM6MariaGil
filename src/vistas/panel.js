import { Tickets } from '../bd/tickets'
import { User } from '../bd/user'

export const panel = {
  template: `
  <h1>Administración de incidencias</h1>
  <h2 class="mt-5">Tickets pendientes</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Fecha</th>
        
        <th>Aula</th>
        <th>Grupo</th>
        <th>Ordenador</th>
        <th>Descripción</th>
        <th>Alumno</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody id="ticketspendientes">
    
    </tbody>
  </table>
  <h2 class="mt-5">Tickets resueltos</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Fecha</th>
        <th>Fecha resuelto</th>
        <th>Aula</th>
        <th>Grupo</th>
        <th>Ordenador</th>
        <th>Descripción</th>
        <th>Alumno</th>
      </tr>
    </thead>
    <tbody id="ticketsresueltos">
      
     
    </tbody>
  </table>

  `,
  script: async () => {
    const ticketspendientes = document.querySelector('#ticketspendientes')
    const ticketsresuletos = document.querySelector('#ticketsresueltos')

    const tickets = await Tickets.getAll()

    let tablapendiente = ''
    let tablaresuelto = ''
    for (const tiket of tickets) {
      if (tiket.estado == 'pendiente') {
        tablapendiente += `     <tr id="${tiket.id}">
        <td>${tiket.id}</td>
        <td>${tiket.created_at}</td>
        <td>${tiket.aula}</td>
        <td>${tiket.grupo}</td>
        <td>${tiket.ordenador}</td>
        <td>${tiket.descripcion}</td>
        <td>${tiket.alumno}</td>
        <td><button class="btn btn-success resolverTicket" data-id="${tiket.id}" title="Resolver ticket">Resolver</button></td>
        <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        </button>
        </td>
        <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
        </button></td>
        <td><button class="btn btn-danger eliminar" data-id="${tiket.id}" title="Eliminar ticket"><i class="bi bi-trash3"></i>
        </i>
        </button></td>

      </tr>`
      } else {
        tablaresuelto += `     <tr id="${tiket.id}">
        <td>${tiket.id}</td>
        <td>${tiket.created_at}</td>
        <td>${tiket.aula}</td>
        <td>${tiket.grupo}</td>
        <td>${tiket.ordenador}</td>
        <td>${tiket.descripcion}</td>
        <td>${tiket.alumno}</td>
        <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
        <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        </button>
        </td>
        <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
        </button></td>
        <td><button class="btn btn-danger eliminar" data-id="${tiket.id}" title="Eliminar ticket"><i class="bi bi-trash3"></i>
        </i>
        </button></td>

      </tr>`
      }
    }

    ticketspendientes.innerHTML = tablapendiente
    ticketsresuletos.innerHTML = tablaresuelto

    const main = document.querySelector('main')

    main.addEventListener('click', async (e) => {
      if (e.target.classList.contains('resolverTicket')) {
        const id = e.target.dataset.id
        const ticketid = await Tickets.getById(id)
        ticketid.estado = 'resuelto'
        ticketid.update()
        alert('Se ha resuelto el ticket')

        const trId = document.getElementById(id)
        trId.remove()

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${ticketid.id}</td>
        <td>${ticketid.created_at}</td>
        <td>${ticketid.aula}</td>
        <td>${ticketid.grupo}</td>
        <td>${ticketid.ordenador}</td>
        <td>${ticketid.descripcion}</td>
        <td>${ticketid.alumno}</td>
        <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
        <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        </button>
        </td>
        <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
        </button></td>
        <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
        </i>
        </button></td>
        </tr>
        `
        ticketsresuletos.appendChild(tr)
      }
      if (e.target.classList.contains('eliminar')) {
        const seguro = confirm('¿Está seguro que desea borrar el ticket?')

        if (seguro) {
          const id = e.target.dataset.id
          Tickets.delete(id)
          const trId = document.getElementById(id)
          trId.remove()
        }
      }
    })
  }

}
