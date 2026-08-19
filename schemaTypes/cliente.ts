import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cliente', // <-- ESTE ES EL _type QUE BUSCA CLAUDE
  type: 'document',
  title: 'Nuestros Clientes',
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
      title: 'Nombre de la Marca/Cliente'
    }),
    defineField({
      name: 'descripcion',
      type: 'text',
      title: 'Descripción del Trabajo realizado'
    }),
    defineField({
      name: 'categoria',
      type: 'string',
      title: 'Categoría o Rubro (Ej: Gastronomía, CRM)'
    }),
    defineField({
      name: 'imagen',
      type: 'image',
      title: 'Logotipo o Imagen de Fondo',
      options: { hotspot: true }
    })
  ]
})