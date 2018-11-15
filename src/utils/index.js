/**
 * style Object to string
 * 因为mpvue不支持在模板做合并操作，也不接受object
 */
function toStyleSting(style) {
  return Object.keys(style)
    .map(key => `${humpToLine(key)}: ${style[key]}`)
    .join(';')
}

function humpToLine(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export default {
  toStyleSting,
  humpToLine
}
