import * as arcanas from 'app/src/domain/arcana'
import * as suits from 'app/src/domain/suit'

export function getCardJson(arcana, suit, number) {
  if (arcana == arcanas.MAJOR) {
    return getMajorCard(number)
  }
  return getMinorCard(suit, number)
}

function getMajorCard(number) {
  switch(number) {
    case 0: return require('app/data/card/unknown.json')
    case 1: return require('app/data/card/unknown.json')
    case 2: return require('app/data/card/unknown.json')
    case 3: return require('app/data/card/unknown.json')
    case 4: return require('app/data/card/unknown.json')
    case 5: return require('app/data/card/unknown.json')
    case 6: return require('app/data/card/unknown.json')
    case 7: return require('app/data/card/unknown.json')
    case 8: return require('app/data/card/unknown.json')
    case 9: return require('app/data/card/unknown.json')
    case 10: return require('app/data/card/unknown.json')
    case 11: return require('app/data/card/unknown.json')
    case 12: return require('app/data/card/unknown.json')
    case 13: return require('app/data/card/unknown.json')
    case 14: return require('app/data/card/unknown.json')
    case 15: return require('app/data/card/unknown.json')
    case 16: return require('app/data/card/unknown.json')
    case 17: return require('app/data/card/unknown.json')
    case 18: return require('app/data/card/unknown.json')
    case 19: return require('app/data/card/unknown.json')
    case 20: return require('app/data/card/unknown.json')
    case 21: return require('app/data/card/unknown.json')
    default: return require('app/data/card/unknown.json')
  }
}

function getMinorCard(suit, number) {
  switch(suit) {
    case suits.WAND: return getWandCard(number)
    case suits.CUP: return getCupCard(number)
    case suits.SWORD: return getSwordCard(number)
    case suits.DISK: return getDiskCard(number)
    default: return require('app/data/card/unknown.json')
  }
}

function getWandCard(number) {
  switch(number) {
    case 1: return require('app/data/card/unknown.json')
    case 2: return require('app/data/card/unknown.json')
    case 3: return require('app/data/card/unknown.json')
    case 4: return require('app/data/card/unknown.json')
    case 5: return require('app/data/card/unknown.json')
    case 6: return require('app/data/card/unknown.json')
    case 7: return require('app/data/card/unknown.json')
    case 8: return require('app/data/card/unknown.json')
    case 9: return require('app/data/card/unknown.json')
    case 10: return require('app/data/card/unknown.json')
    case 11: return require('app/data/card/unknown.json')
    case 12: return require('app/data/card/unknown.json')
    case 13: return require('app/data/card/unknown.json')
    case 14: return require('app/data/card/unknown.json')
    default: return require('app/data/card/unknown.json')
  }
}
function getCupCard(number) {
  switch(number) {
    case 1: return require('app/data/card/unknown.json')
    case 2: return require('app/data/card/unknown.json')
    case 3: return require('app/data/card/unknown.json')
    case 4: return require('app/data/card/unknown.json')
    case 5: return require('app/data/card/unknown.json')
    case 6: return require('app/data/card/unknown.json')
    case 7: return require('app/data/card/unknown.json')
    case 8: return require('app/data/card/unknown.json')
    case 9: return require('app/data/card/unknown.json')
    case 10: return require('app/data/card/unknown.json')
    case 11: return require('app/data/card/unknown.json')
    case 12: return require('app/data/card/unknown.json')
    case 13: return require('app/data/card/unknown.json')
    case 14: return require('app/data/card/unknown.json')
    default: return require('app/data/card/unknown.json')
  }
}
function getSwordCard(number) {
  switch(number) {
    case 1: return require('app/data/card/unknown.json')
    case 2: return require('app/data/card/unknown.json')
    case 3: return require('app/data/card/unknown.json')
    case 4: return require('app/data/card/unknown.json')
    case 5: return require('app/data/card/unknown.json')
    case 6: return require('app/data/card/unknown.json')
    case 7: return require('app/data/card/unknown.json')
    case 8: return require('app/data/card/unknown.json')
    case 9: return require('app/data/card/unknown.json')
    case 10: return require('app/data/card/unknown.json')
    case 11: return require('app/data/card/unknown.json')
    case 12: return require('app/data/card/unknown.json')
    case 13: return require('app/data/card/unknown.json')
    case 14: return require('app/data/card/unknown.json')
    default: return require('app/data/card/unknown.json')
  }
}
function getDiskCard(number) {
  switch(number) {
    case 1: return require('app/data/card/unknown.json')
    case 2: return require('app/data/card/unknown.json')
    case 3: return require('app/data/card/unknown.json')
    case 4: return require('app/data/card/unknown.json')
    case 5: return require('app/data/card/unknown.json')
    case 6: return require('app/data/card/unknown.json')
    case 7: return require('app/data/card/unknown.json')
    case 8: return require('app/data/card/unknown.json')
    case 9: return require('app/data/card/unknown.json')
    case 10: return require('app/data/card/unknown.json')
    case 11: return require('app/data/card/unknown.json')
    case 12: return require('app/data/card/unknown.json')
    case 13: return require('app/data/card/unknown.json')
    case 14: return require('app/data/card/unknown.json')
    default: return require('app/data/card/unknown.json')
  }
}