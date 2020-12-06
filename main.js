class KrestiNolik{
    constructor() {
        this.pole = ['','','','','','','','','']
        this.game = true
        this.winner = ''
        this.td = document.getElementsByTagName('td')
        for (let i = 0; i < this.td.length; i++){
            this.td[i].onclick = () => {
                this.nextMove(i)
            }
        }
    }
    nextMove(i){
        if (this.game){
            if (this.td[i].textContent === "" && this.pole[i] === ""){
                this.td[i].textContent = "x"
                this.pole[i] = "x"
                if (this.checkGame('x')){
                    this.winner = 'x'
                }
                if (!this.winner && this.checkPole()){
                    let i = this.bot()
                    this.td[i].textContent = "o"
                    this.pole[i] = "o"
                    if (this.checkGame('o')){
                        this.winner = 'o'
                    }
                }
                if (this.winner) {
                    console.log("Победил: " + this.winner)
                }
            } else if (!this.checkPole()){
                console.log("GAME OVER")
            } else {
                console.log("Выберите другое поле")
            }
        } else if (this.winner){
            console.log("Победил: " + this.winner)
        }
    }
    checkPole(){
        for (let i = 0; i < this.pole.length; i++){
            if (this.pole[i] === ""){
                return true
            }
        }
        return false
    }
    checkGame(pos){
        let combo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < combo.length; i++) {
            if (this.pole[combo[i][0]] === pos &&
                this.pole[combo[i][1]] === pos &&
                this.pole[combo[i][2]] === pos) {

                this.td[combo[i][0]].classList.add('active')
                this.td[combo[i][1]].classList.add('active')
                this.td[combo[i][2]].classList.add('active')

                this.game = false
                return true
            }
        }
    }
    bot(){
        const i = Math.floor(Math.random() * 9)
        return this.pole[i] !== "" ? this.bot() : i
    }
}
new KrestiNolik()