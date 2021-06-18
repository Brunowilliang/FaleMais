export const areas = [
    { name: '011', icon: 'map-pin' },
    { name: '016', icon: 'map-pin' },
    { name: '017', icon: 'map-pin' },
    { name: '018', icon: 'map-pin' },
]; 


export const tarifasOrigemDestino = {
    '011': {
      '016': 1.9,
      '017': 1.7,
      '018': 0.9,
    },
    '016': {
      '011': 2.9,
    },
    '017': {
      '011': 2.7,
    },
    '018': {
      '011': 1.9
    }
  }
  
export const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
    return formattedNumber
}
    