const counter = function (state = 0, action) {
  if(action.type === 'INCREMENT'){
    return state + 1
  }else{
    return state
  }
}

const store = Redux.createStore(counter)

store.subscribe(function(){
  console.log('state: ' + store.getState())
})

console.log(store.getState())

store.dispatch({ type: 'INCREMENT' })

console.log(store.getState())

