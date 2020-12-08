const json = [
  {
    id: '0001',
    type: 'donut',
    name: 'Cake',
    ppu: 0.78,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
        { id: '1003', type: 'Blueberry' },
        { id: '1004', type: "Devil's Food" },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5007', type: 'Powdered Sugar' },
      { id: '5006', type: 'Chocolate with Sprinkles' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '0002',
    type: 'donut',
    name: 'Raised',
    ppu: 0.55,
    batters: {
      batter: [{ id: '1001', type: 'Regular' }],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '0003',
    type: 'donut',
    name: 'Old Fashioned',
    ppu: 0.26,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
]

const allTopping = []
const ids = []
const allBatter = []
const Ppu = []

for (const i of json) {
  allTopping.push(i['topping'])
  allBatter.push(i['batters']['batter'])
  Ppu.push(i['ppu'])
}

let allToppingTypes = [].concat(...allTopping).filter((t) => {
  if (ids.includes(t['id'])) {
    return false
  } else {
    ids.push(t['id'])
    return true
  }
})

allToppingTypes = allToppingTypes.map((obj) => {
  return obj['type']
})

let allBatterTypes = [].concat(...allBatter).filter((b) => {
  if (ids.includes(b['id'])) {
    return false
  } else {
    ids.push(b['id'])
    return true
  }
})

allBatterTypes = allBatterTypes.map((obj) => {
  return obj['type']
})

const PpuTotal = Ppu.reduce((total, num) => {
  return total + num
}, 0)

const PpuAvg = PpuTotal / Ppu.length

// All Topping Types
console.log('All Topping Types: ')
console.log(allToppingTypes)

// All Batter Types
console.log('All Batter Types: ')
console.log(allBatterTypes)

// Ppu average
console.log('Ppu average: ', PpuAvg)

// Ppu sum
console.log('Ppu sum: ', PpuTotal)

// All ids
console.log('All IDs: ', ids)
