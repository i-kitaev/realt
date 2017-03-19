export default function toConstant(string) {
  return string.replace(/[a-z]([A-Z])/g, i => `${i[0]}_${i[1].toLowerCase()}`).toUpperCase();
}
