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
    // timer: this.calculatedInterval,
    // status: null,
    worlds: [
    {number:"1",location:"United States",status:"Free",description:"Trade"},
        {number:"2",location:"United Kingdom",status:"Members",description:"Trade"},
        {number:"3",location:"Germany",status:"Members",description:""},
        {number:"4",location:"Germany",status:"Members",description:"Trouble Brewing"},
        {number:"5",location:"United States",status:"Members",description:"Falador Party Room"},
        {number:"6",location:"United States",status:"Members",description:"Barbarian Assault"},
        {number:"7",location:"United States",status:"Members",description:""},
        {number:"8",location:"United Kingdom",status:"Free",description:"Wilderness PK - free style"},
        {number:"9",location:"United Kingdom",status:"Members",description:"Wintertodt"},
        {number:"10",location:"United Kingdom",status:"Members",description:"Kourend Group Activity"},
        {number:"11",location:"Germany",status:"Members",description:"Chambers of Xeric"},
        {number:"12",location:"Germany",status:"Members",description:"Treasure Trails"},
        {number:"13",location:"United States",status:"Members",description:""},
        {number:"14",location:"United States",status:"Members",description:"Dorgesh-Kaan Agility"},
        {number:"15",location:"United States",status:"Members",description:""},
        {number:"16",location:"United Kingdom",status:"Free",description:"Wilderness PK - free style"},
        {number:"17",location:"United Kingdom",status:"Members",description:"LMS Competitive"},
        {number:"18",location:"United Kingdom",status:"Members",description:"Bounty World"},
        {number:"19",location:"United States",status:"Members",description:""},
        {number:"20",location:"United States",status:"Members",description:""},
        {number:"21",location:"United States",status:"Members",description:""},
        {number:"22",location:"United States",status:"Members",description:"Duel Arena"},
        {number:"23",location:"United States",status:"Members",description:"Volcanic Mine"},
        {number:"24",location:"United States",status:"Members",description:""},
        {number:"25",location:"United Kingdom",status:"Members",description:"PVP World"},
        {number:"26",location:"United Kingdom",status:"Free",description:"LMS Casual"},
        {number:"27",location:"Germany",status:"Members",description:"Ourania Altar"},
        {number:"28",location:"Germany",status:"Members",description:""},
        {number:"29",location:"United States",status:"Members",description:"Clan Wars - Members"},
        {number:"30",location:"United States",status:"Members",description:"House Party, Gilded Altar"},
        {number:"31",location:"United States",status:"Members",description:""},
        {number:"32",location:"United States",status:"Members",description:""},
        {number:"33",location:"United Kingdom",status:"Members",description:"Games Room, Rogues' Den"},
        {number:"34",location:"United Kingdom",status:"Members",description:"Castle Wars 1"},
        {number:"35",location:"Germany",status:"Free",description:""},
        {number:"36",location:"Germany",status:"Members",description:"Running - nature rune"},
        {number:"37",location:"United States",status:"Members",description:"PVP World - High Risk"},
        {number:"38",location:"United States",status:"Members",description:"Chambers of Xeric"},
        {number:"39",location:"United States",status:"Members",description:""},
        {number:"40",location:"United States",status:"Members",description:""},
        {number:"41",location:"United Kingdom",status:"Members",description:"Running - law rune"},
        {number:"42",location:"United Kingdom",status:"Members",description:"Role-playing"},
        {number:"43",location:"Germany",status:"Members",description:""},
        {number:"44",location:"Germany",status:"Members",description:"Pest Control"},
        {number:"45",location:"United States",status:"Members",description:"Deadman"},
        {number:"46",location:"United States",status:"Members",description:"Agility training"},
        {number:"47",location:"United States",status:"Members",description:""},
        {number:"48",location:"United States",status:"Members",description:""},
        {number:"49",location:"United Kingdom",status:"Members",description:"2000 skill total"},
        {number:"50",location:"United Kingdom",status:"Members",description:"TzHaar Fight Pit"},
        {number:"51",location:"Germany",status:"Members",description:""},
        {number:"52",location:"Germany",status:"Members",description:"Blast Furnace"},
        {number:"53",location:"United States",status:"Members",description:"1250 skill total"},
        {number:"54",location:"United States",status:"Members",description:"Castle Wars 2"},
        {number:"55",location:"United States",status:"Members",description:""},
        {number:"56",location:"United States",status:"Members",description:""},
        {number:"57",location:"United States",status:"Members",description:""},
        {number:"58",location:"United Kingdom",status:"Members",description:"Blast Furnace"},
        {number:"59",location:"Germany",status:"Members",description:""},
        {number:"60",location:"Germany",status:"Members",description:""},
        {number:"61",location:"United States",status:"Members",description:"2000 skill total"},
        {number:"62",location:"United States",status:"Members",description:"Pyramid Plunder"},
        {number:"65",location:"United Kingdom",status:"Members",description:"High Risk World"},
        {number:"66",location:"United Kingdom",status:"Members",description:"1500 skill total"},
        {number:"67",location:"Germany",status:"Members",description:"Group Questing"},
        {number:"68",location:"Germany",status:"Members",description:""},
        {number:"69",location:"United States",status:"Members",description:"Wilderness PK - members"},
        {number:"70",location:"United States",status:"Members",description:"Fishing Trawler"},
        {number:"73",location:"United Kingdom",status:"Members",description:"1750 skill total"},
        {number:"74",location:"United States",status:"Members",description:""},
        {number:"75",location:"Germany",status:"Members",description:"Barbarian Fishing"},
        {number:"76",location:"Germany",status:"Members",description:""},
        {number:"77",location:"United States",status:"Members",description:"Mort'ton temple, Rat Pits"},
        {number:"78",location:"United States",status:"Members",description:""},
        {number:"81",location:"United Kingdom",status:"Free",description:"500 skill total"},
        {number:"82",location:"United Kingdom",status:"Free",description:""},
        {number:"83",location:"Germany",status:"Free",description:"Castle Wars - Free"},
        {number:"84",location:"Germany",status:"Free",description:""},
        {number:"85",location:"United States",status:"Free",description:"750 skill total"},
        {number:"86",location:"United States",status:"Members",description:"Blast Furnace"},
        {number:"87",location:"Australia",status:"Members",description:"Blast Furnace"},
        {number:"88",location:"Australia",status:"Members",description:""},
        {number:"89",location:"Australia",status:"Members",description:""},
        {number:"90",location:"Australia",status:"Members",description:""},
        {number:"91",location:"Australia",status:"Members",description:"1750 skill total"},
        {number:"92",location:"Australia",status:"Members",description:"PVP World"},
        {number:"93",location:"United States",status:"Free",description:"Clan Wars - Free"},
        {number:"94",location:"United States",status:"Free",description:""}
    
    ],
    membersOnly: true,
    removePVP: true,
    nightMode: true,
    interval: 12, // default interval (minutes)
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
        intervalValue: function() {
            return data.interval * 60;
        }
    },
    template:
    '<ul>'+
        '<counter-component v-for="world in filtered(worlds)" :data="world" :key="world.number" :interval=intervalValue></counter-component>'+
    '</ul>'
});

Vue.component('counter-component',{
    props:['data', 'interval'],
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
        // this.$on('reachedZero', console.log('parent'));
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
            '<timer-component :world="data" :intervalValue="interval"></timer-component>'+
            // '<label>Status:</label> <p class="valueStatus">{{data.status}}</p>'+
        '</li>'
});

Vue.component('timer-component',{
    props:['intervalValue'],
    data: function(){
        
        return {
            counter: this.intervalValue,
            counting: false,
            paused: null,
            clear: false,
            
        };
    },
    watch: {
        intervalValue: function(newV, oldV) {
            if(!this.counting && !this.paused)
                this.counter = newV;
        },
    },
    methods:{
        reset:function(){
            clearInterval(this.intervalValue);
            this.counter = this.intervalValue;
            this.counting=false;
            this.interval=null;
            this.paused=false;
            this.clear=false;
            return;
        },
        updateInterval: function(){
            console.log('interval updated');
        },
        decrease:function(){
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
    created: function(v){
        this.$parent.$on('toggleTimer', this.activate);
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
    '{{minute | zeropad}}:'+
    '{{second | zeropad}}'+
    '</span>'
    
});

Vue.component('action-bar-component',{
    template: '#action-bar',
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
        refreshInterval: function(){
            vm.$emit('updateInterval', this.interval);
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
        toggleTheme: function(){
            this.nightMode = !this.nightMode;
        },
        
    },
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
    loadOut: function(){
        loadExternalJSON(function(response) {
           var actual_JSON = JSON.parse(response);
           data.worlds = actual_JSON.worlds;
        });        
        
    },   
});

function loadExternalJSON(callback) {   

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
