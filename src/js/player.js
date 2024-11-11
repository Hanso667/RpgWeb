class player {

    setHealth(amount) {
        if (amount <= this.mHealth) {
            this.health = amount;
        } else {
            this.health = this.mHealth
        }
    }

    setVit() {
        var input = document.getElementById("inVit").value;
        if(input>=0 && input<10){
            this.vit = input;
        } else if (input<=0){
            this.vit = 1;
        } else if (input>10){
            this.vit = 10;
        }
        this.mHealth = this.vit * 50;
        user.setHealth(user.mHealth);
        document.getElementById("health").value = user.health / user.mHealth * 100;
        document.getElementById("lblHealth").textContent = user.health+"/"+user.mHealth
    }

    damage(amount) {
        if (this.health - amount <= this.mHealth && this.health - amount > 0) {
            this.health -= amount;
            console.log("<=")
        } else if (this.health - amount >this.mHealth) {
            this.health = this.mHealth;
            console.log(">")
        } else {
            console.log("else")
            this.health = 0
        }

    }

    setMana(amount) {
        if (amount <= this.mMana) {
            this.mana = amount;
        } else {
            this.mana = this.mMana
        }
    }

    setSpi() {
        var input = document.getElementById("inSpi").value;
        if(input>=0 && input<10){
            this.spi = input;
        } else if (input<=0){
            this.spi = 1;
        } else if (input>10){
            this.spi = 10;
        }
        this.mMana = this.spi * 25;
        user.setMana(user.mMana);
        document.getElementById("mana").value = user.mana / user.mMana * 100;
        document.getElementById("lblMana").textContent = user.mana+"/"+user.mMana
    }

    useMana(amount) {
        if (this.mana - amount <= this.mMana  && this.mana - amount > 0) {
            this.mana -= amount;
        } else if (this.mana - amount >this.mMana) {
            this.mana = this.mMana;
        } else {
            this.mana = 0
        }
    }


}
const user = new player();
user.setVit();
user.setSpi();
function btnDamage() {
    user.damage(document.getElementById("inHealth").value);
    document.getElementById("health").value = user.health / user.mHealth * 100;
    document.getElementById("lblHealth").textContent = user.health+"/"+user.mHealth
}
function btnUse() {
    user.useMana(document.getElementById("inMana").value);
    document.getElementById("mana").value = user.mana / user.mMana * 100;
    document.getElementById("lblMana").textContent = user.mana+"/"+user.mMana
}

function stats(){
    document.getElementById("stats").style.display = "flex";
    document.getElementById("settings").style.display = "none";

}
function settings(){
    document.getElementById("stats").style.display = "none";
    document.getElementById("settings").style.display = "flex";

}
