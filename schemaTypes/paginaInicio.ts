// schemaTypes/paginaInicio.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaInicio',
  title: 'Página de Inicio',
  type: 'object',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título de la Página',
      type: 'string',
    }),
    defineField({
      name: 'secciones',
      title: 'Orden de las Secciones',
      description: 'Arrastra y suelta las secciones para cambiar su orden de aparición en la web.',
      type: 'array',
      of: [
        { type: 'seccionSocio' },
        { type: 'seccionHacemos' }, // Asegúrate de usar el 'name' exacto definido dentro de ese archivo
        { type: 'seccionPilares' },
        { type: 'seccionCierre'  },
      ],
    }),
  ],
})