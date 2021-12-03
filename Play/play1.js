const {singleNums} = require('./data')
const {retina} = require('./retina')

const play1 = {

  execute: () => {

    retina.reset();
    console.log(`Reset retina to w:${retina.sensors[0].length} h:${retina.sensors.length}`)

    retina.glance(singleNums[1].img);

    retina.out();

  }
}

module.exports = {play1}