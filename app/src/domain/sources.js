export const ALEISTER = 'aleister'
export const MERLIN = 'merlin'
export const LEON = 'leon'

export function getName(source) {
  switch(source) {
    case LEON:
      return `ー 魔術師のトートタロット`
    case MERLIN:
      return `ー ザ † トートタロット`
    case ALEISTER:
      return `ー トートの書`
  }
}