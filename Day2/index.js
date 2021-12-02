const {data} = require('./data')

const day2 = {

  execute: async () => {
    const {part1:{x, y}, part2:{x2, y2}} = data.split('\n')
      .map(v => v.split(' ').reduce((p, c) => 'forward' === p ? {dx: c * 1, dy: 0} : {dx: 0, dy: c * ('up' === p ? -1 : 1)}))
      .reduce(({part1:{x, y}, part2:{x2, y2, aim}}, {dx, dy}) => 
        ({part1 : {x: x + dx, y: y + dy},
          part2 : {x2: x2 + dx, y2: y2 + dx * aim, aim: aim + dy}
        }), {part1: {x:0, y:0}, part2: {x2:0, y2:0, aim:0}});

    console.log(`part 1 mult = ${x * y}`)
    console.log(`part 2 mult = ${x2 * y2}`)
  }
}

module.exports = {day2}