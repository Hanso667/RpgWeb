
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
        if (input >= 0 && input < 10) {
            input = input;
        } else if (input < 0) {
            input = 1;
        } else if (input > 10) {
            input = 10;
        }
        this.vit = input
        this.mHealth = this.vit * 50;
        this.setHealth(this.mHealth);
        if (isFinite(this.health / this.mHealth)) {
            document.getElementById("health").value = this.health / this.mHealth * 100;
        } else {
            this.health = 50;
            this.mHealth = 50;
            document.getElementById("health").value = this.health / this.mHealth * 100;
        }
        document.getElementById("lblHealth").textContent = this.health + "/" + this.mHealth
    }

    damage(amount) {
        if (this.health - amount <= this.mHealth && this.health - amount > 0) {
            this.health -= amount;
        } else if (this.health - amount > this.mHealth) {
            this.health = this.mHealth;
        } else {
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
        if (input >= 0 && input < 10) {
            input = input;
        } else if (input <= 0) {
            input = 1;
        } else if (input > 10) {
            input = 10;
        }
        this.spi = input;
        this.mMana = this.spi * 25;
        this.setMana(this.mMana);
        if (isFinite(this.mana / this.mMana)) {
            document.getElementById("mana").value = this.mana / this.mMana * 100;
        } else {
            this.mana = 25;
            this.mMana = 25;
            document.getElementById("mana").value = this.mana / this.mMana * 100;
        }
        document.getElementById("lblMana").textContent = this.mana + "/" + this.mMana
    }

    useMana(amount) {
        if (this.mana - amount <= this.mMana && this.mana - amount > 0) {
            this.mana -= amount;
        } else if (this.mana - amount > this.mMana) {
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
    document.getElementById("lblHealth").textContent = user.health + "/" + user.mHealth
}

function btnUse() {
    user.useMana(document.getElementById("inMana").value);
    document.getElementById("mana").value = user.mana / user.mMana * 100;
    document.getElementById("lblMana").textContent = user.mana + "/" + user.mMana
}

function stats() {
    document.getElementById("stats").style.display = "flex";
    document.getElementById("settings").style.display = "none";

}

function settings() {
    document.getElementById("stats").style.display = "none";
    document.getElementById("settings").style.display = "flex";

}

function setNome() {
        document.getElementById("titulo").textContent = document.getElementById("nome").value
        document.getElementById("nome").value = "";
}
function reveal(){
    if(document.getElementById("nome").style.display === "none"){

        document.getElementById("nome").style.display = "flex"
        
    }else if (document.getElementById("nome").style.display == "flex"){
        
        document.getElementById("nome").style.display = "none"
    }
}
function newTab(){
    window.open("https://hanso667.github.io/RpgWeb/Traits/index.html", '_blank').focus();
}
