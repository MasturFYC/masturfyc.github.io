export const format = (node: HTMLInputElement, formatFunction: (value: string) => string) => {
  function updateValue(e: Event) {
    node.value = formatFunction(node.value)
  }
  
  node.addEventListener('input', updateValue)
  node.addEventListener('paste', updateValue)

  // Format on intial hydration
  node.value = formatFunction(node.value)
  
  return {
    destroy() {
        node.removeEventListener('input', updateValue)
        node.removeEventListener('paste', updateValue)
    }
  }
  
}

export	const cardNumber = (value: string) => {
const regex = /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,5})$/g
const onlyNumbers = value.replace(/[^\d]/g, '')
const len = onlyNumbers.length % 3
let s = onlyNumbers.substring(0,len)
return onlyNumbers.substring(len).replace(regex, (regex, $1, $2, $3, $4, $5, $6) =>
  [s, $1, $2, $3, $4, $5, $6].filter(group => !!group).join('.')
)
}

export 	const getNumber = (value: string): number => {
  //const regex = /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,3})$/g
  const onlyNumbers = value.replace(/[^\d]/g, '')
  return +onlyNumbers
}