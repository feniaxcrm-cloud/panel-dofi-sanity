// schemaTypes/paginaInicio.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaInicio',
  title: 'Página de Inicio',
  type: 'document',
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
        { type: 'reference', to: [{ type: 'seccionSocio' }] },
        { type: 'reference', to: [{ type: 'seccionHacemos' }] }, // Asegúrate de usar el 'name' exacto definido dentro de ese archivo
        { type: 'reference', to: [{ type: 'seccionPilares' }] },
        { type: 'reference', to: [{ type: 'seccionCierre' }] },
      ],
    }),
  ],
})