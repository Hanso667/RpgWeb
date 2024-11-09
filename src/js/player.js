class player {

    setHealth(amount) {
        if (amount <= this.mHealth) {
            this.health = amount;
        } else {
            this.health = this.mHealth
        }
    }

    setVit(amount) {
        this.vit = amount;
    }

    setmHealth() {
        this.mHealth = this.vit * 50;
    }

    damage(amount) {
        if (this.health - amount <= this.mHealth) {
            this.health -= amount;
        } else {
            this.health = this.mHealth;
        }
        if(this.health - amount <0){
            this.health = 0;
        }
    }

    setMana(amount) {
        if (amount <= this.mMana) {
            this.mana = amount;
        } else {
            this.mana = this.mMana
        }
    }

    setSpi(amount) {
        this.spi = amount;
    }

    setmMana() {
        this.mMana = this.spi * 25;
    }

    useMana(amount) {
        if (this.mana - amount <= this.mMana) {
            this.mana -= amount;
        } else {
            this.mana = this.mMana;
        }
        if(this.mana - amount <0){
            this.mana = 0;
        }
    }


}
const user = new player();
user.setVit(10);
user.setmHealth();
user.setHealth(user.mHealth);
document.getElementById("health").value = user.health / user.mHealth * 100;
user.setSpi(10);
user.setmMana();
user.setMana(user.mMana);
document.getElementById("mana").value = user.mana / user.mMana * 100;

function btnDamage() {
    user.damage(document.getElementById("inHealth").value);
    document.getElementById("health").value = user.health / user.mHealth * 100;
}
function btnUse() {
    user.useMana(document.getElementById("inMana").value);
    document.getElementById("mana").value = user.mana / user.mMana * 100;
}
