console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy--;
        console.log("Waaaaa");
        console.log(this.name + " has this much food " + this.foodInTummy);
    }
    puke() {
        this.foodInTummy--;
        console.log("Waaaaa");
        console.log(this.name + " has this much health " + this.health);
    }
    yawn() {
        this.restedness--;
        console.log('Ahhh, so tired');
        console.log(this.name + ' has current restedness of ' + this.restedness);
    }
    start() {
        console.log("Starting " + this.name);
        var self = this;
        this.hungerTimer = setInterval(function() {
            self.cry();
        }, 6000);
        this.yawnTimer = setInterval(function() {
            self.yawn();
        }, 10000);
        this.sickTimer = setInterval(function() {
            self.puke();
        }, 25000);
    };
    stop() {
        console.log("Stopping " + this.name);
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
    };
}

var Dean = new Tamagotchi('Dean', 'Demon')
var Jody = new Tamagotchi('Jody', 'Douchebag')
Dean.start();
Jody.start();




//create new Tamagotchis
var newBeast1 = new Tamagotchi();
var newBeast2 = new Tamagotchi();


//test out your Tamagotchies below via console.logs
console.log(newBeast1);
console.log(newBeast2);