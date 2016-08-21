export const WIND = 'wind'
export const FIRE = 'fire'
export const WATER = 'water'
export const EARTH = 'earth'
export const TEMPLE = 'temple'
export function getElementName(element) {
  switch(element) {
    case WIND:
      return `風の国`
    case FIRE:
      return `火の国`
    case WATER:
      return `水の国`
    case EARTH:
      return `地の国`
    case TEMPLE:
      return `神殿`
  }
}