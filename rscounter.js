// "use strict";

const COUNTER_STATES = {
    COUNTING: 'counting',
    READY: 'ready',
    FINISHED: 'finished',
}

const WORLD = {
    PVP: 'PVP World',
    MEMBERS: 'Members',
    FREE: 'Free',
}


var data = {
    // members: null,
    // number: null,
    timer: 720,
    // status: null,
    worlds: [],
    membersOnly: true,
    removePVP: true,

};

Vue.component('worlds-component',{
    data: function(){
        return data;
    },
    methods:{   
        filtered: function(world){
            return world.filter(function (world){
                var isMember = world.status == WORLD.MEMBERS;
                var isNotPvp = world.description != WORLD.PVP;
                
                var memberOnly = data.membersOnly;
                var noPvP    = data.removePVP;
                var noPvPNoMember = memberOnly && noPvP;
                
                // console.log(world);
                // console.log('pvp: '+isNotPvp);
                // console.log('member: '+isMember);
                // console.log(' ');
                // if()
                // return world;
                
                if(noPvPNoMember){
                    if((world.description != WORLD.PVP && world.status != WORLD.FREE)){
                        console.log(world);
                        console.log(world.description == WORLD.PVP);
                        console.log(world.status == WORLD.FREE);
                        return world;
                    }
                    return;// if this is not here, wrong results
                } else if (memberOnly) {
                    return world.status != WORLD.FREE;
                } else if (noPvP) {
                    return world.description != WORLD.PVP;
                } else {
                    return world;
                }
                                
                // if(world.description != WORLD.PVP || world.status != WORLD.FREE){
                // if(noPvPNoMember){
                if(!(world.description == WORLD.PVP || world.status == WORLD.FREE)){
                    return world;
                    // return world;
                    console.log('Removing free and pvp world');
                    // console.log(world.description);
                    console.log(world.description);
                    console.log(world.description != WORLD.FREE);
                    if (world.description == WORLD.PVP || world.status == WORLD.FREE){
                        // return;
                    } else {
                        return world;
                        
                    }
                    // return ;
                } else if (memberOnly){
                    console.log('Removing only free worlds');
                    if (world.status == WORLD.MEMBERS)
                        return world;                    
                    
                } else if (world.status != WORLD.PVP){
                    return world;
                    console.log('Removing PvP worlds');
                    return world;
                } else {
                    return world;
                }
            })
        },
    },
    computed: {
        
    },
    template:
    '<ul>'+
        '<counter-component v-for="world in filtered(worlds)" :data="world" :key="world.id"></counter-component>'+
    '</ul>'
});

Vue.component('counter-component',{
    props:['data'],
    data: function() {
        return {
            ready: false,
            finished: false,
            counting:false,
            paused:false,
        };
    },
    methods:{
        startTimer: function(){
            // console.log(data.timer);
            // data.timer--;
            this.finished = false;
            this.ready = false;
            this.counting = true;
            this.$emit('toggleTimer', this);
        },
        setState:function(s){
             
        },
    },
    created: function(){
        this.$on('reachedZero', console.log('parent'));
    },
    computed:{
        getClass: function(){
            // return 'counterReady counter';
            if(this.ready){
                return 'counterGreen counter';
            } else if(this.counting){
                return 'counterOrange counter';
            } else if(this.finished){
                return 'counterRed counter';                
            } else if(this.paused){
                return 'counterPaused counter';                
            } else {
                return 'counterWhite counter'; // 5:red 3:orange 0:green
            }                
        },
    }, 
    template:
        '<li :class="getClass" v-on:click="startTimer">'+
            // '<label>Member:</label> <p class="valueMembers">{{data.members}}</p>'+
            // '<label>Time:</label> <p class="valueTimer">{{data.timer}}</p>'+
            '<p class="worldNumber unsel">{{data.number}}</p>'+
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
            counter: 720,
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
                this.$parent.finished = true;
                this.$parent.counting = false;
                this.counting=false;
                this.paused=true;
                clearInterval(this.interval);
                // this.reset();
                return;
            }
            if(this.paused){
                console.log('pausingddd');
                this.$parent.counting = false;
                this.$parent.paused = true;
                console.log('parent counting false');
                return;
            }
            console.log('setting interval');
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
                this.$parent.counting = false;
                this.$parent.paused = true;                
                clearInterval(this.interval);
                return;
            } else if (resetCounting) {
                console.log('resetting');
                this.$parent.paused = false;                
                this.$parent.counting = false; // reset the parent ui
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
    // '{{hour | zeropad}}:'+
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
        togglePVP: function(){
            this.removePVP = !this.removePVP;
            console.log('pvpOnly toggled:' + this.removePVP);
        },
        toggleMembers: function(){
            this.membersOnly = !this.membersOnly;
            console.log('membersOnly toggled');
        },
        
    },
  template:
  // '<div class="input-group">'+
  '<div class="row">'+
    // '<div class="col-sm-2"><input v-model="number" @keyup.enter="addWorld" placeholder="world number" type="text" class="form-control"></div>'+
    
    // '<div class="col-sm-2"><input v-model="timer" @keyup.enter="addWorld" placeholder="timer" type="text" class="form-control"></div>'+
    
    // '<div class="col-sm-2"><input v-model="members" @keyup.enter="addWorld" placeholder="members" type="text" class="form-control"></div>'+
    // '<div class="col-sm-2"><input v-model="status" @keyup.enter="addWorld" placeholder="status" type="text" class="form-control"></div>'+
    '<div class="col-sm-12">'+
        '<div class="btn-group" data-toggle="buttons">'+
            '<label class="btn btn-primary" :class="{active:membersOnly}">'+
                '<input type="checkbox" autocomplete="off" @click="toggleMembers">'+
                'Members Only'+
            '</label>'+
            '<label class="btn btn-primary" :class="{active:removePVP}">'+
                '<input type="checkbox" autocomplete="off" @click="togglePVP">'+
                'Remove PvP Worlds'+
            '</label>'+
            // '<label class="btn btn-primary">'+
                // '<input type="checkbox" autocomplete="off">'+
                // ''+
            // '</label>'+
        '</div>'+
        // '<span class="input-group-btn">'+
    // '  <button @click="addWorld" class="btn btn-default" type="button">+</button>'+
    // '  <button @click="incrementCounter" class="btn btn-default" type="button">+</button>'+
        // '</span>'+
    '</div>'+
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
