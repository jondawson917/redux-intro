const h1 = document.querySelector('h1');
const drunkButton = document.querySelector('#drunk');
const cuteButton = document.querySelector('#cute');
const kissingButton = document.querySelector('#kissing');
const coughingButton = document.querySelector('#coughing');

drunkButton.addEventListener('click', function (e){
    store.dispatch({type: "DRUNK"});
    const state = store.getState();
    console.log(state);
    h1.innerText = state.mood;
})

cuteButton.addEventListener('click', function (e){
    store.dispatch({type: "CUTE"});
    const state = store.getState();
    console.log(state);
    h1.innerText = state.mood;
})

kissingButton.addEventListener('click', function(e){
    store.dispatch({type: 'KISSING'});
    const state = store.getState();
    console.log(state);
    h1.innerText = state.mood;
})

coughingButton.addEventListener('click', function(e){
    store.dispatch({type: 'COUGHING'});
    const state = store.getState();
    console.log(state);
    h1.innerText = state.mood;

})


