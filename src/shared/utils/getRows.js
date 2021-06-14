export const getRows = num => {
  return [...Array(num).keys()].map(a => ({
    id: a,
    name: `${getName()} ${getName()}`,
    count: Math.floor(Math.random() * 100)
  }))
}