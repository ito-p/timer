import _ from 'lodash'
export const SWORD = 'sword'
export const WAND = 'wand'
export const CUP = 'cup'
export const DISK = 'disk'
export function getSuitName(suit) {
  switch(suit) {
    case SWORD:
      return `ソード`
    case WAND:
      return `ウォンド`
    case CUP:
      return `カップ`
    case DISK:
      return `ディスク`
  }
}
export function getSuits() {
  return [WAND, CUP, SWORD, DISK]
}
export function getSuitIndex(suit) {
  return _.indexOf(getSuits(), suit)
}