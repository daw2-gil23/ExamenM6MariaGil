// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
export class Tickets {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, created_at = null, aula = null, grupo = null, ordenador = null, descripcion = null, alumno = null, estado = null) {
    this.id = id
    this.created_at = created_at
    this.aula = aula
    this.grupo = grupo
    this.ordenador = ordenador
    this.descripcion = descripcion
    this.alumno = alumno
    this.estado = estado
  }

  // leer todos
  static async getAll () {
    const { data: tickets, error } = await supabase
      .from('tickets')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return tickets.map(({ id, created_at, aula, grupo, ordenador, descripcion, alumno, estado }) => {
      return new Tickets(id, created_at, aula, grupo, ordenador, descripcion, alumno, estado)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: tickets, error } = await supabase
      .from('tickets')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Tickets(tickets.id, tickets.created_at, tickets.aula, tickets.grupo, tickets.ordenador, tickets.descripcion, tickets.alumno, tickets.estado)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (ticketsData) {
    const { error } = await supabase
      .from('tickets')
      .insert(ticketsData)
      .select()
      // console.log('nuevo perfil ',error);
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // actualizar
  async update () {
    const { error } = await supabase
      .from('tickets')
      .update({
        aula: this.aula,
        grupo: this.grupo,
        ordenador: this.ordenador,
        descripcion: this.descripcion,
        alumno: this.alumno,
        estado: this.estado
      })
      .eq('id', this.id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // borrar
  static async delete (id) {
    const { error } = await supabase
      .from('tickets')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }

    return true
  }
}
