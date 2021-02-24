const pick = (key) => (el) => el[key]

const includes = (key) => (text) => (el) =>
  pick(key)(el).toLowerCase().includes(text.toLowerCase())

const matchBy = (regex) => (value) => value.match(regex)

export { pick, includes, matchBy }
