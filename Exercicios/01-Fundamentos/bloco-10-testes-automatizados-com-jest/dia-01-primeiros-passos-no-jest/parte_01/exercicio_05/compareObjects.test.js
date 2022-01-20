const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('comparing objects', () => {
  it('should be identical objects', () => {
    expect(obj1).toEqual(obj2);
  });

  it('should be different objects', () => {
    expect(obj3).not.toEqual(obj2);
    expect(obj3).not.toEqual(obj1);
  });
});