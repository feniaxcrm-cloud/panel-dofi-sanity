import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seccionSocio',
  type: 'document',
  title: 'Sección: El Socio',
  fields: [
    defineField({
      name: 'nombre',
      type: 'string',
      title: 'Nombre',
      initialValue: 'Daniel'
    }),
    defineField({
      name: 'parrafo1',
      type: 'text',
      title: 'Primer Párrafo'
    }),
    defineField({
      name: 'parrafo2',
      type: 'text',
      title: 'Segundo Párrafo'
    }),
    defineField({
      name: 'imagen',
      type: 'image',
      title: 'Foto de Perfil',
      options: { hotspot: true }
    })
  ]
})