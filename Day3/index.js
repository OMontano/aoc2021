const {data} = require('./data')

const day3 = {

  execute: async () => {

    const list = data.split('\n')
    const len = list.length

    const res1 = list
      .map(v => [...v].map( v1 => v1 * 1 ))
      .reduce((p, c) => p ? p.map((e, i) => e + c[i]) : c )
      .map(v => v > len / 2 ? 1 : 0);

    const gr = parseInt(res1.join(''), 2);
    const er = parseInt(res1.map(v => v ? 0: 1).join(''), 2);

    console.log(`gr = ${gr}`)
    console.log(`er = ${er}`)
    console.log(`res = ${gr * er}`)
    
    const ox = parseInt([...list[0]].reduce((p, c, i) => {
      const compval = p.reduce((p1, v1) => (v1[i] * 1) + p1, 0) >= (p.length / 2) ? 1 : 0;
      return p.length > 1 ? p.filter( v => (v[i] * 1) === compval ) : p
    }, list), 2)

    const co2 = parseInt([...list[0]].reduce((p, c, i) => {
      const compval = p.reduce((p1, v1) => (v1[i] * 1) + p1, 0) < (p.length / 2) ? 1 : 0;
      return p.length > 1 ? p.filter( v => (v[i] * 1) === compval ) : p
    }, list), 2)

    console.log(`ox = ${ox}`)
    console.log(`co2 = ${co2}`)
    console.log(`res2 = ${ox * co2}`)
  }
}

module.exports = {day3}