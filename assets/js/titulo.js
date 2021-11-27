function Rotor(options) {
    if (!(this instanceof Rotor)) {
        return new Rotor(options)
    }

    this.frases = options.frases
    this.elem = document.getElementById(options.id)
    this.interval = options.interval
    this.indice = Math.floor(Math.random() * this.frases.length)
}

Rotor.prototype.play = function () {
    if (this.indice === this.frases.length) {
        this.indice = 0
    }
    this.elem.innerHTML = this.frases[this.indice]
    console.log(this.indice)
    ++this.indice
    setTimeout(this.play.bind(this), this.interval)
}