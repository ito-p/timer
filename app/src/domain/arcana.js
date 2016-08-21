export const MAJOR = 'major'
export const MINOR = 'minor'
export function getCardName(arcana, number) {
  switch(arcana) {
    case MAJOR:
      return `大アルカナ${number}`
    case MINOR:
      return `小アルカナ${number}`
  }
}