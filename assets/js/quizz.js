function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

amresorts = [
          {
            text: "Combien de marques d’hôtels le groupe AMResorts possède-t- il ?",
            responses: [
              {text: '4'},
              {text: '6', correct: true},
              {text: '7'},
            ]
          },
          {
            text: "Quelle marque d’hôtel  AMResorts vous accueille en vous souhaitant : « Welcome to the party !» ?",
            responses: [
              {text: 'Breathless', correct: true},
              {text: 'Now'},
              {text: 'Zoetry'},
            ]
          },
          {
            text: "Parmi les propositions ci-dessous, quelle marque est un produit pour les familles ?",
            responses: [
              {text: 'Secrets'},
              {text: 'Breathless'},
              {text: 'Dreams', correct: true},
            ]
          },
          {
            text: "Dans combien de destinations les hôtels du groupe AMResorts sont-ils implantés ?",
            responses: [
              {text: '4'},
              {text: '6', correct: true},
              {text: '8'},
            ]
          },
]

xlairways = [
          {
            text: "Quel est le type d’avion utilisé par XL Airways sur ses vols long-courrier, notamment à destination du Mexique ?",
            responses: [
              {text: 'Airbus A380'},
              {text: 'Boeing 767'},
              {text: 'Airbus A330', correct: true},
            ]
          },
          {
            text: "Quelle est la destination mexicaine desservie par XL Airways au départ de Paris CDG ?",
            responses: [
              {text: 'Cancun', correct: true},
              {text: 'Mexico City'},
              {text: 'Guadalajara'},
            ]
          },
          {
            text: "Quelle est la saisonnalité des vols XL Airways à destination du Mexique ?",
            responses: [
              {text: 'Ils opèrent uniquement en hiver'},
              {text: 'Ils opèrent uniquement en été'},
              {text: 'Ils opèrent toute l’année', correct: true},
            ]
          },
          {
            text: "Quelle est la nationalité de la compagnie XL Airways ?",
            responses: [
              {text: 'C’est une compagnie américaine'},
              {text: 'C’est un groupe anglais'},
              {text: 'C’est une compagnie française', correct: true},
            ]
          },
]

empreinte = [
          {
            text: "Quel est le nombre de participants maximum sur le nouveau circuit en départ garanti base garantie deux personnes Empreinte du Yucatan ?",
            responses: [
              {text: '12', correct: true},
              {text: '22'},
              {text: '32'},
            ]
          },
          {
            text: "Quelle expérience unique permet de découvrir la culture des indiens Tarahumara ?",
            responses: [
              {text: 'Un voyage en train dans le Copper canyon', correct: true},
              {text: 'Une promenade en bateau dans le canyon del Sumidero'},
              {text: 'Une balade à Vélo du côté de Coba'},
            ]
          },
          {
            text: "Quelle est la saisonnalité des vols XL Airways à destination du Mexique ?",
            responses: [
              {text: 'Ils opèrent uniquement en hiver'},
              {text: 'Ils opèrent uniquement en été'},
              {text: 'Ils opèrent toute l’année', correct: true},
            ]
          },
          {
            text: "Quelle est la nationalité de la compagnie XL Airways ?",
            responses: [
              {text: 'C’est une compagnie américaine'},
              {text: 'C’est un groupe anglais'},
              {text: 'C’est une compagnie française', correct: true},
            ]
          },
]
