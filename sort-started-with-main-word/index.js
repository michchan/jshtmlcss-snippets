/**
 * This is a pretty nifty one. If you ever need to sort something on a webpage but you want to filter by the main word things start with, like having “The Rock” with the Rs but “The Terminator” with the Ts you can strip out articles:
 * https://SortWithoutArticles--connor11528.repl.co
 * https://medium.com/employbl/30-things-i-learned-from-javascript-30-fa37d554bfca
 */

const bands = ['The Rock', 'The Terminator', 'No Country For Old Men', 'An Inconvenient Truth', 'Anaconda'];
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);