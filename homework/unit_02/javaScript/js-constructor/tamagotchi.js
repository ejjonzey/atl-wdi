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
        console.log(this.name + "has this much food " + this.foodInTummy);
    }
}



//create new Tamagotchis
var newTamagotchi1 = new Tamagotchi();
var newTamagotchi2 = new Tamagotchi();

//test out your Tamagotchies below via console.logs
console.log(newTamagotchi1);
console.log(newTamagotchi2);