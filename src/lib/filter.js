const pick = (key) => (el) => el[key]

const includes = (key) => (text) => (el) =>
  pick(key)(el).toLowerCase().includes(text.toLowerCase())

const substractByKey = (key) => (a, b) => pick(key)(b) - pick(key)(a)

export { pick, includes, substractByKey }
