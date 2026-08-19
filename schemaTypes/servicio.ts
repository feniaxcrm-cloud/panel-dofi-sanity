export default {
  name: 'servicio',
  type: 'document',
  title: 'Servicios de Publicidad',
  fields: [
    {
      name: 'titulo',
      type: 'string',
      title: 'Título del Servicio'
    },
    {
      name: 'descripcion',
      type: 'text',
      title: 'Descripción'
    },
    {
      name: 'imagen',
      type: 'image',
      title: 'Imagen Destacada',
      options: { hotspot: true }
    }
  ]
}