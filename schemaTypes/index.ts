import servicio from './servicio'
import cliente from './cliente'
import seccionHacemos from './seccionHacemos'
import seccionSocio from './seccionSocio'
import seccionCierre from './seccionCierre'
import seccionPilares from './seccionPilares' // <-- Nueva importación
import paginaInicio from './paginaInicio'

export const schemaTypes = [
  paginaInicio,
  servicio, 
  cliente, 
  seccionHacemos, 
  seccionSocio, 
  seccionCierre,
  seccionPilares
]