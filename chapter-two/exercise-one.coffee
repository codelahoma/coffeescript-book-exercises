clearArray = (arr) ->
  arr.splice( 0, arr.length)
  #return arr # return the cleared array
  return # return nothing

testArray = [1, 2, 3, 4]

r = clearArray testArray
console.log r
