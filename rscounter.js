"use strict";


var data = {
    oreCount: '',
    nextWorld: 1,
    message: '',
    counters: 1,
    members: true,
    number: 2,
    timer: 60,
    status: 'ready',
    worlds: [],
    myClass:{
        '1': self.timer == 60,
        '3': this.timer > 10 && this.timer < 30,
        '5': this.timer > 30,
    },
};

var RSCounterComponent = Vue.extend({
    data: function(){
        return data;
    },
    methods: {
        getClass: function(){
            return 'counter';
        },
    },    
    template:
    '<ul>'+
        '<li class="counter" v-for="world in worlds">'+
            '<div :class="myClass">'+
                '<label>Member: {{world.members}}</label>'+
                '<label>Time: {{world.timer}}</label>'+
                '<label>Status: {{world.status}}</label>'+
                '<label>Number: {{world.number}}</label>'+
            '</div>'+
        '</li>'+
    '</ul>'
});

var ActionBarComponent = Vue.extend({
    data: function(){
        return data;
    },
    methods:{
        clear: function(){
            data.members = '';
            data.number  = '';
            data.timer   = '';
            data.status  = '';
        },
        addWorld: function(){
            console.log('world' + data.number);
            var world = {
                members: data.members,
                number: data.number,
                timer: data.timer,
                status: data.status,
            };
            this.worlds.push(world);
            this.clear();
        },
        
    },
  template:
  // '<div class="input-group">'+
  '<div class="row">'+
    '<div class="col-sm-2"><input v-model="number" @keyup.enter="addWorld" placeholder="world number" type="text" class="form-control"></div>'+
    '<div class="col-sm-2"><input v-model="timer" @keyup.enter="addWorld" placeholder="timer" type="text" class="form-control"></div>'+
    '<div class="col-sm-2"><input v-model="members" @keyup.enter="addWorld" placeholder="members" type="text" class="form-control"></div>'+
    '<div class="col-sm-2"><input v-model="status" @keyup.enter="addWorld" placeholder="status" type="text" class="form-control"></div>'+
    '<div class="col-sm-2"><span class="input-group-btn">'+
    '  <button @click="addWorld" class="btn btn-default" type="button">+</button>'+
    '</span></div>'+
  '</div>'//+
  // '</div>'
});

Vue.component('counter-component', RSCounterComponent);
Vue.component('action-bar-component', ActionBarComponent);

var vue = new Vue({
    el:'#app',
    data: data,
});

