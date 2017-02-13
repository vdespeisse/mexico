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
            text: "Pour un séjour à Mexico, Empreinte propose un très bon hôtel au rapport qualité prix imbattable et proche du Zocalo, quel est-il ?",
            responses: [
              {text: 'Mision San Miguel'},
              {text: 'Quinta las Acacias'},
              {text: 'Hamptonn Inn', correct: true},
            ]
          },
          {
            text: "Comment s’appelle le programme d’excursions qu’Empreinte propose à ses clients sur la Riviera Maya par l’intermédiaire de son réceptif exclusif proposant la nage avec les dauphins, la visite de Chichen Itza, d’un cenote et des sites archéologiques de Coba et Tulum ?",
            responses: [
              {text: 'Emotion Maya'},
              {text: 'Passion Yucatan', correct: true},
              {text: 'Vibration mexicaine'},
            ]
          },
]

mexique = [
          {
            text: "Concernant les nuitées, quelle est la capacité d’accueil à la Riviera Maya ?",
            responses: [
              {text: '10,000 chambres '},
              {text: '35,000 chambres'},
              {text: '+40,000 chambres', correct: true},
            ]
          },
          {
            text: "Combien de vols mensuels arrivent à l’aéroport international de Cancún ?",
            responses: [
              {text: '4,500 vols mensuels', correct: true},
              {text: '3,000 vols mensuels'},
              {text: '500 vols mensuels'},
            ]
          },
          {
            text: "Quelle langue autre que l’espagnol a présence en la Riviera Maya à cause son caractère international ?",
            responses: [
              {text: 'Allemand'},
              {text: 'Chinois'},
              {text: 'Anglais', correct: true},
            ]
          },
          {
            text: "D'un point de vue géographique, le long la côte est plat à l'exception de quel site archéologique ?",
            responses: [
              {text: 'Tulúm', correct: true},
              {text: 'Akumal'},
              {text: 'Coba'},
            ]
          },
          {
            text: "Qu’est ce qu'un cénote ?",
            responses: [
              {text: 'Une grotte replie d’eau au fil du temps', correct: true},
              {text: 'Un plateau calcaire'},
              {text: "Le nom d'une plage à Cancun"},
            ]
          },
          {
            text: "Quelle place occupe le Mexique dans le rating mondial des pays plus visités ?",
            responses: [
              {text: '11ème'},
              {text: '9ème', correct: true},
              {text: '3ème'},
            ]
          },
]
