"use strict";


var data = {
    worldNumber: '',
    oreCount: '',
    nextWorld: '',
    message: '',
    counters: 1,
    members: true,
    number: 2,
    timer: 60,
    status: 'ready',
    worlds: [{
        members: true,
        number: 1,
        timer: 60,
        status: 'ready',
    }],
};

var RSCounterComponent = Vue.extend({
    data: function(){
        return data;
    },
    template:
    '<ul>'+
        '<li v-for="world in worlds">'+
            '<label>Member: {{world.members}}</label>'+
            '<label>Time: {{world.timer}}</label>'+
            '<label>Status: {{world.status}}</label>'+
        '</li>'+
    '</ul>'
});

var CounterCollectionComponent = Vue.extend({
    data: function(){
        return data;
    },
    template: '<div class="counterCollection">' +
    '' +
    '' +
    '' +
    '' +
    '' +
    '</div>'
});

var ActionBarComponent = Vue.extend({
    data: function(){
        return data;
    },
    methods:{
        addWorld: function(){
            console.log('world' + data.worldNumber);
            data.worldNumber = '';
        },
        
    },
  template:
  '<div class="input-group">'+
    '<input v-model="worldNumber" @keyup.enter="addWorld" placeholder="New World" type="text" class="form-control">'+
    '<span class="input-group-btn">'+
    '  <button @click="addWorld" class="btn btn-default" type="button">+</button>'+
    '</span>'+
  '</div>'
});

Vue.component('counter-component', RSCounterComponent);
Vue.component('counter-collection-component', CounterCollectionComponent);
Vue.component('action-bar-component', ActionBarComponent);

new Vue({
    el:'#app',
    data: data
});

