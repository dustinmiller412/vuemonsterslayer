<template>
    <div class="top">
        <h1>Monster Slayer</h1>
    </div>
    <div>
        <section id="monster" class="container">
            <h2>Monster Health</h2>
            <div class="healthbar">
                <div class="healthbar__value" v-bind:style="monsterBarStyles"></div>
            </div>
        </section>
        <section id="player" class="container">
            <h2>Your Health</h2>
            <div class="healthbar">
                <div class="healthbar__value" :style="playerBarStyles"></div>
            </div>
        </section>

        <section class="container" v-if="winner">
            <h2>Game Over!</h2>
            <h3 v-if="winner === 'monster'">You lost!</h3>
            <h3 v-else-if="winner === 'player'">You won!</h3>
            <h3 v-else>It's a draw!</h3>
            <button v-on:click="resetGame">Play Again</button>
        </section>

        <section id="controls" v-if="!winner">
            <button @click="attackMonster()">ATTACK</button>
            <button :disabled="mayUseSpecialAttack" @click="specialAttackMonster()">SPECIAL ATTACK</button>
            <button :disabled="mayUseHeal" @click="healPlayer()">HEAL</button>
            <v-annoying-button :annoy="true" range="20vw" class="surrender-button">SURRENDER</v-annoying-button>
        </section>
        <section id="log" class="container">
            <h2>Battle Log</h2>
            <ul>
                <li v-for="logMessage in logMessages">
                    <span
                        :class="{ 'log--player': logMessage.actionBy === 'player', 'log--monster': logMessage.actionBy === 'monster' }">{{
                            logMessage.actionBy === 'player' ? 'You' : 'Monster' }}</span>
                    <span v-if="logMessage.actionType === 'heal'"> healed yourself for <span class="log--heal">{{
                        logMessage.actionValue }}</span></span>
                    <span v-else-if="logMessage.actionType === 'special-attack'"> launched a <span
                            class='special--attack'>special attack</span> and dealt <span class="log--damage"> {{
                                logMessage.actionValue }}</span> damage</span>
                    <span v-else> attacked and dealt <span class="log--damage">{{ logMessage.actionValue }}</span>
                        damage</span>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 1,
            winner: null,
            logMessages: [],
            lastUsedHeal: null,
            lastUsedSpecialAttack: null,
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth <= 0) {
                return { width: "0%" };
            }
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            if (this.playerHealth <= 0) {
                return { width: "0%" };
            }
            return { width: this.playerHealth + "%" };
        },
        mayUseSpecialAttack() {
            return this.specialAttackDelay();
        },
        mayUseHeal() {
            return this.healDelay();
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // a draw
                this.winner = "draw";
            } else if (value <= 0) {
                //monster wins
                this.winner = "monster";
            }

        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // a draw
                this.winner = "draw";
            } else if (value <= 0) {
                //player wins
                this.winner = "player";
            }
        }
    },
    methods: {
        getRandomValue(min, max) {
            // returns a random number between min and max
            return Math.floor(Math.random() * (max - min)) + min;
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = this.getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            if(this.monsterHealth>0) {
                this.attackPlayer();
            }
        },
        attackPlayer() {
            const attackValue = this.getRandomValue(8, 15);
            this.addLogMessage('monster', 'attack', attackValue);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            this.lastUsedSpecialAttack = this.currentRound;
            const attackValue = this.getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            this.lastUsedHeal = this.currentRound;
            const healValue = this.getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        resetGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 1;
            this.winner = null;
            this.logMessages = [];
            this.lastUsedHeal = null;
            this.lastUsedSpecialAttack = null;
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        },
        toggleAnnoy() {
            this.annoy = !this.annoy;
        },
        healDelay() {
            if (this.lastUsedHeal + 1 < this.currentRound) {
                return false;
            } else {
                return true;
            }
        },
        specialAttackDelay() {
            if (this.lastUsedSpecialAttack + 2 < this.currentRound) {
                return false;
            } else {
                return true;
            }
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

.top {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    background-color: #880017;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}

section {
    width: 90%;
    max-width: 40rem;
    margin: auto;
}

.healthbar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    margin: 1rem 0;
    background: #fda3a3;
}

.healthbar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
}

.container {
    text-align: center;
    padding: 0.5rem;
    margin: 1rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
}

#monster h2,
#player h2 {
    margin: 0.25rem;
}

#controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

button {
    font: inherit;
    border: 1px solid #88005b;
    background-color: #88005b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    margin: 1rem;
    width: 12rem;
    cursor: pointer;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
    outline: none;
}

button:hover,
button:active {
    background-color: #af0a78;
    border-color: #af0a78;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
    background-color: #ccc;
    border-color: #ccc;
    box-shadow: none;
    color: #3f3f3f;
    cursor: not-allowed;
}

#log ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#log li {
    margin: 0.5rem 0;
}

.log--player {
    color: #7700ff;
}

.log--monster {
    color: #da8d00;
}

.log--damage {
    color: red;
}

.log--heal {
    color: green;
}

.surrender-button {
    font: inherit;
    border: 1px solid #88005b;
    background-color: #88005b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    margin: 1rem;
    width: 12rem;
    cursor: pointer;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    margin-left: 1rem;
}

.special--attack {
    color: darkcyan;
}
</style>