// "use strict";
var data = {
    // members: null,
    // number: null,
    timer: 720,
    // status: null,
    worlds: [],

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
    // data: function() {
        // return {
            // timer: 22,
        // };
    // },
    methods:{
        startTimer: function(){
            // console.log(data.timer);
            // data.timer--;
            this.$emit('toggleTimer', this);
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
            // '<label>Member:</label> <p class="valueMembers">{{data.members}}</p>'+
            // '<label>Time:</label> <p class="valueTimer">{{data.timer}}</p>'+
            '<p class="worldNumber unsel">w{{data.number}}</p>'+
            '<timer-component :data="data"></timer-component>'+
            // '<label>Status:</label> <p class="valueStatus">{{data.status}}</p>'+
        '</li>'
});

Vue.component('timer-component',{
    props:['data'],
    // props:['counter', 'hours', 'mins', 'secs'],
    // , 'counter', 'hours', 'mins', 'secs'
    data: function(){
        return {
            counter: 60,
            counting: false,
            interval: null,
            paused: null,
            clear: false,
            
        };
    },
    // mounted() {
        // setInterval(this.decrease, 1000);
    // },
    methods:{
        reset:function(){
            clearInterval(this.interval);
            this.counter = 720;
            this.counting=false;
            this.interval=null;
            this.paused=false;
            this.clear=false;
            return;
        },
        decrease:function(){
            console.log('decreasing!');
            var self = this;
            if(this.counter <= 0){
                console.log('reached 00:00:00');
                this.$emit('reachedZero', this);
                this.counting=false;
                this.paused=true;
                clearInterval(this.interval);
                // this.reset();
                return;
            }
            if(this.paused){
                console.log('pausing');
                return;
            }
            console.log('setting itnerval');
            if(self.interval != null){
                clearInterval(self.interval);
            }
            self.interval = setInterval(self.decrease, 1000);
            this.counter--;
            return;
        },
        activate:function(){
            console.log('activating');
            var startCounting = !this.counting && !this.paused;
            var pauseCounting = this.counting && !this.paused;
            var resetCounting = !this.counting && this.paused;
            if(startCounting){
                console.log('counting');
                this.counting = true;
                this.decrease();
            } else if (pauseCounting){
                console.log('pausing');
                this.counting = false;
                this.paused = true;
                clearInterval(this.interval);
                return;
            } else if (resetCounting) {
                console.log('resetting');
                this.reset();
            } else {
                console.log('error');
            }
            return;
            // if(self.paused == null){
                // self.decrease;
            // }
        },
    },
    created: function(){
        this.$parent.$on('toggleTimer', this.activate);
        // this.$parent.$on('toggleTimer', this.decrease);
    },
    computed:{
        hour:{
            get: function(){
                return Math.floor(this.counter / 3600)
            },
            set: function(v){
                this.hours = v;
            }
        },
        minute:{
            get: function(){
                return Math.floor(this.counter / 60);
            },
            set: function (v){
                this.mins = v;
            }
        },
        second:{
            get: function(){
                return this.counter % 60;
            },
            set: function(v){
                this.secs = v;
            }
        },
    },
    template: '<span class="timer unsel">'+
    // template: '<span v-on:toggleTimer="decrease" class="timer unsel">'+
    '{{hour | zeropad}}:'+
    '{{minute | zeropad}}:'+
    '{{second | zeropad}}'+
    '</span>'
    
});

Vue.component('action-bar-component',{
    data: function(){
        return data;
    },
    methods:{
        clear: function(){
            data.members = '';
            data.number  = '';
            // data.timer   = '';
            data.status  = '';
        },
        addWorld: function(){
            console.log('world' + data.number);
            var world = {
                members: data.members,
                number: data.number,
                status: data.status,
            };
            this.worlds.push(world);
            this.clear();
        },
        incrementCounter: function(){
            // this.timer++;
        },
        
    },
  template:
  // '<div class="input-group">'+
  '<div class="row">'+
    // '<div class="col-sm-2"><input v-model="number" @keyup.enter="addWorld" placeholder="world number" type="text" class="form-control"></div>'+
    
    // '<div class="col-sm-2"><input v-model="timer" @keyup.enter="addWorld" placeholder="timer" type="text" class="form-control"></div>'+
    
    // '<div class="col-sm-2"><input v-model="members" @keyup.enter="addWorld" placeholder="members" type="text" class="form-control"></div>'+
    // '<div class="col-sm-2"><input v-model="status" @keyup.enter="addWorld" placeholder="status" type="text" class="form-control"></div>'+
    '<div class="col-sm-2"><span class="input-group-btn">'+
    '  <button @click="addWorld" class="btn btn-default" type="button">+</button>'+
    '  <button @click="incrementCounter" class="btn btn-default" type="button">+</button>'+
    '</span></div>'+
  '</div>'//+
  // '</div>'
});

Vue.filter('zeropad', (value) => {
    if(value >= 10){
        return value;
    } else {
        return '0' + value;
    }
});


var vm = new Vue({
    el:'#app',
    data: data,
    created: function(){
        loadJSON(function(response) {
           var actual_JSON = JSON.parse(response);
           data.worlds = actual_JSON.worlds;
        });        
        
    },   
});

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}
