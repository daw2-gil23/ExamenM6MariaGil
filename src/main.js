// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer
import { header } from './componentes/header.js'
import { home } from './vistas/home'

// Importamos la Función para detectar eventos al cargar las vistas

document.querySelector('#header').innerHTML = header.template
header.script()

document.querySelector('main').innerHTML = home.template
