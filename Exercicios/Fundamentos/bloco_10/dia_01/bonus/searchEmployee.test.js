const searchEmployee = require('./searchEmployee');

describe('testing searchEmployee function', () => {
  it('should be defined', ()=> {
    expect(searchEmployee).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('should return the information consulted about the employee', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });

  it('should return the error "ID não identificada" if the id is not found', () => {
    expect(() => { searchEmployee('1111-1', 'firstName') }).toThrow(/ID não identificada/);
  });

  it('should return the error "Informação indisponível"  if the information does not exist', () => {
    expect(() => { searchEmployee('8579-6', 'role') }).toThrow(/Informação indisponível/);
  });
});