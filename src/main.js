// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer
import { header } from './componentes/header.js'

// Importamos la Función para detectar eventos al cargar las vistas

document.querySelector('#header').innerHTML = header.template
header.script()

// Cargamos la página home
window.location = '/Prueba/#/home'
