describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort( [1]) ).toEqual( [1] );
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort( [5,2,1,4,3]) ).toEqual( [1,2,3,4,5] );
  })
});
