import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seccionPilares',
  type: 'document',
  title: 'Sección: Pilares y Herramientas',
  fields: [
    // --- PILAR 1: MARKETING DIGITAL 360 ---
    defineField({
      name: 'pilar1Titulo',
      type: 'string',
      title: 'Pilar 1: Título',
      initialValue: 'Marketing Digital 360'
    }),
    defineField({
      name: 'pilar1Descripcion',
      type: 'text',
      title: 'Pilar 1: Descripción'
    }),
    defineField({
      name: 'pilar1Tags',
      type: 'string',
      title: 'Pilar 1: Tags/Tecnologías (Separados por puntos o comas)'
    }),

    // --- PILAR 2: CRM ---
    defineField({
      name: 'pilar2Titulo',
      type: 'string',
      title: 'Pilar 2: Título',
      initialValue: 'CRM'
    }),
    defineField({
name: 'pilar2Descripcion',
      type: 'text',
      title: 'Pilar 2: Descripción'
    }),
    defineField({
      name: 'pilar2Tags',
      type: 'string',
      title: 'Pilar 2: Tags/Tecnologías'
    }),

    // --- PILAR 3: INTELIGENCIA ARTIFICIAL ---
    defineField({
      name: 'pilar3Titulo',
      type: 'string',
      title: 'Pilar 3: Título',
      initialValue: 'Inteligencia Artificial'
    }),
    defineField({
      name: 'pilar3Descripcion',
      type: 'text',
      title: 'Pilar 3: Descripción'
    }),
    defineField({
      name: 'pilar3Tags',
      type: 'string',
      title: 'Pilar 3: Tags/Tecnologías'
    })
  ]
})
