const fs = require('fs')
const dogadjaj = process.argv[2]

const tablica = {
  paljenje: {
    ugasen: 'pali',
    upaljen: 'javi',
    uspavan: 'pali'
  },
  gasenje: {
    ugasen: 'javi',
    upaljen: 'gasi',
    uspavan: 'gasi'
  },
  spavanje: {
    ugasen: 'javi',
    upaljen: 'spavaj',
    uspavan: 'javi'
  }
}

const automat = {
  stanje: 'ugasen',

  predji (stanje) {
    console.log(`Automat ce uskoro biti ${stanje}`)
    setTimeout(() => this.javi(), 1000)
    this.stanje = stanje
  },

  pali () {
    this.predji('upaljen')
  },

  gasi() {
    this.predji('ugasen')
  },

  spavaj () {
    this.predji('uspavan')
  },

  javi () {
    console.log(`Automat je ${this.stanje}`)
  }
}

fs.readFile('stanje.txt', 'utf8', (err, data) => {
  automat.stanje = data || automat.stanje
  automat[tablica[dogadjaj][automat.stanje]]()
  fs.writeFile("stanje.txt", automat.stanje)
})
