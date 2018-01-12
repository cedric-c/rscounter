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
    worlds: [{
        members: true,
        timer: 0,
        status:'waiting',
        number:1,
    },{
        members: true,
        timer: 1,
        status:'soon',
        number:2,
    },{
        members: false,
        timer: 2,
        status:'ready',
        number:3,
    },{
        members: false,
        timer: 3,
        status:'ready',
        number:4,
    },{
        members: false,
        timer: 4,
        status:'ready',
        number:4,
    },{
        members: false,
        timer: 5,
        status:'ready',
        number:4,
    }],
    myClass:{
        '1': self.timer == 60,
        '3': this.timer > 10 && this.timer < 30,
        '5': this.timer > 30,
    },
};

Vue.component('worlds-component',{
    data: function(){
        return data;
    },
    template:
    '<ul>'+
        '<counter-component v-for="world in worlds" :data="world" :key="world.id"></counter-component>'+
    '</ul>'
});

Vue.component('counter-component',{
    props:['data'],
    data: function() {
        return {
            members: data.members,
            timer: data.timer,
            status: data.status,
            number: data.number,
        };
    },
    methods:{
        startTimer: function(){
            console.log(this.data.members);
        },
    },
    computed:{
        getClass: function(){
            // return 'counterReady counter';
            if(this.data.timer == 0){
                return 'counter0 counter';
            } else if(this.data.timer == 1){
                return 'counter1 counter';
            } else if(this.data.timer == 2){
                return 'counter2 counter';                
            } else if(this.data.timer == 3){
                return 'counter3 counter';                
            } else if(this.data.timer == 4){
                return 'counter4 counter';
            } else {
                return 'counter5 counter';
            }                
        },
    }, 
    template:
        '<li :class="getClass" v-on:click="startTimer">'+
            '<label>Member:</label> <p class="valueMembers">{{data.members}}</p>'+
            '<label>Time:</label> <p class="valueTimer">{{data.timer}}</p>'+
            '<label>Status:</label> <p class="valueStatus">{{data.status}}</p>'+
            '<label>Number:</label> <p class="valueNumber">{{data.number}}</p>'+
        '</li>'
});

Vue.component('action-bar-component',{
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
        incrementCounter: function(){
            this.timer++;
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
    '  <button @click="incrementCounter" class="btn btn-default" type="button">+</button>'+
    '</span></div>'+
  '</div>'//+
  // '</div>'
});

var vue = new Vue({
    el:'#app',
    data: data,
});

