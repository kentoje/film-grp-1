const multiply = (ratio) => (measurement) => ratio * measurement
const responsiveDimension = (ratio) => (dimension) => multiply(ratio)(dimension)

export default responsiveDimension