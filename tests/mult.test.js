const mult = require('../src/mult')

it('should return correct mult', ()=>{
    const result = mult(5,86)
    expect(result).toBe(7)
})