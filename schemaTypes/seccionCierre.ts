import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seccionCierre',
  type: 'object',
  title: 'Sección: Slogan y Formulario',
  fields: [
    defineField({
      name: 'slogan',
      type: 'string',
      title: 'Slogan Calado (Outline)',
      initialValue: 'Creatividad con dirección •'
    }),
    defineField({
      name: 'formularioTitulo',
      type: 'string',
      title: 'Título del Formulario',
      initialValue: 'Tu próxima campaña empieza aquí'
    }),
    defineField({
      name: 'formularioSubtitulo',
      type: 'string',
      title: 'Subtítulo del Formulario'
    })
  ]
})