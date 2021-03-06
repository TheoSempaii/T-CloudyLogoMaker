const path = require('path');
const { createCanvas, loadImage } = require('canvas')

/**
 * 
 * @description This function is in charge of unifying the parts of the generated images of a letter
 * @param {[String]} arr
 */
async function createLetter(arr) {
  const canvas = createCanvas(2048, 2048)
  const ctx = canvas.getContext("2d");
  const bg0 = await loadImage(path.resolve(`./out/bg0.png`))
  const bg1 = await loadImage(path.resolve(`./out/bg1.png`))
  const bg2 = await loadImage(path.resolve(`./out/bg2.png`))
  ctx.drawImage(bg0, 0, 0)
  ctx.drawImage(bg1, 0, 0)
  ctx.drawImage(bg2, 0, 0)

  const part1 = await loadImage(path.resolve(`./out/0/fill0.png`))
  const part2 = await loadImage(path.resolve(`./out/0/fill1.png`))
  const part3 = await loadImage(path.resolve(`./out/0/fill2.png`))
  ctx.drawImage(part1, 0, 0)
  ctx.drawImage(part2, 0, 0)
  ctx.drawImage(part3, 0, 0)


  const buffer = canvas.toBuffer()
  return buffer
}

module.exports = createLetter