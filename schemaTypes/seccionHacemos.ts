import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seccionHacemos',
  type: 'document',
  title: 'Sección: Lo que hacemos',
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
      title: 'Título Principal',
      initialValue: 'Lo que hacemos'
    }),
    defineField({
      name: 'descripcion',
      type: 'text',
      title: 'Descripción General'
    })
  ]
})
