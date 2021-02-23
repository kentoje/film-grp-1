const pick = (key) => (el) => el[key]

const includes = (key) => (text) => (el) =>
  pick(key)(el).toLowerCase().includes(text.toLowerCase())

export { pick, includes }
