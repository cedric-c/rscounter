"use strict";


var data={};

var RSCounterComponent = Vue.extend({
    data: function(){
        return data;
    },
    template: '<div class="world">' +
    'Number: '+
    'Time: '+
    'Obtained: '+
    'Reps: '+
    '</div>'
});

var CounterCollectionComponent = Vue.extend({
    data: function(){
        
    },
    template: '<div class="counterCollection">' +
    '' +
    '' +
    '' +
    '' +
    '' +
    '</div>'
});

Vue.component('counter-component', RSCounterComponent);
Vue.component('counter-collection-component', CounterCollectionComponent);

new Vue({
    el:'#app',
    data: {
        message: 'Hello!',
        counters: 0,
        nextWorld: 1,
    }
});

