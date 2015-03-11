
describe("Person Test Cases", function() {
  it("first and last name should be initialized when constructor params are missing", function() {
	var p1 = new Person();
	
    expect(p1.firstName).toBe('');
	expect(p1.lastName).toBe('');	
  });
  
  it("first and last name should be initialized when constructor params are null", function() {
	var p1 = new Person(null, null);
	
    expect(p1.firstName).toBe('');
	expect(p1.lastName).toBe('');
  });
  
  it("fullName should have a space between fisrt and last name", function() {
	var p1 = new Person('first', 'last');
	
    expect(p1.getFullName()).toEqual('first last');
  });
});

//expect(a.bar).not.toBeUndefined();