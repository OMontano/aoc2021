const {data} = require('./data')

const day1 = {

  execute: async () => {
    console.log(data.split('\n')
      .map(v => v * 1)
      .map((v, i, a) => ({ 
        part1: (v > a[i>0?i-1:0] ? 1 : 0), 
        part2: i < 3 ?  0 : a[i-3] + a[i-2] + a[i-1] < a[i-2] + a[i-1] + a[i] ? 1 : 0
      }))
      .reduce(({part1, part2}, {part1: part1a, part2: part2a}) => ({part1: part1 + part1a, part2: part2 + part2a})));
  }
}

module.exports = {day1}