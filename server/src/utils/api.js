
 let productos= [
    {
      "id": 1,
      "nombre": "Guinness Draught",
      "nacionalidad": "Irlanda",
      "peso": "440ml",
      "alcohol": "4.2%",
      "imagen": "https://images.ejemplo.com/guinness.jpg",
      "descripcion": "La stout más famosa del mundo. Destaca por su color negro rubí y su espuma cremosa con notas de café y malta tostada."
    },
    {
      "id": 2,
      "nombre": "Stella Artois",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/stella.jpg",
      "descripcion": "Una lager premium belga de sabor equilibrado, con un final limpio y un amargor refrescante."
    },
    {
      "id": 3,
      "nombre": "Corona Extra",
      "nacionalidad": "México",
      "peso": "355ml",
      "alcohol": "4.5%",
      "imagen": "https://images.ejemplo.com/corona.jpg",
      "descripcion": "Cerveza tipo Pilsner ligera y refrescante, conocida mundialmente por servirse con una rodaja de lima."
    },
    {
      "id": 4,
      "nombre": "Heineken",
      "nacionalidad": "Países Bajos",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/heineken.jpg",
      "descripcion": "Lager de color amarillo brillante con un sabor suave pero distintivo, fermentada en tanques horizontales."
    },
    {
      "id": 5,
      "nombre": "Sapporo Premium",
      "nacionalidad": "Japón",
      "peso": "500ml",
      "alcohol": "4.9%",
      "imagen": "https://images.ejemplo.com/sapporo.jpg",
      "descripcion": "Cerveza japonesa icónica con un sabor crujiente y refinado, ideal para acompañar comida asiática."
    },
    {
      "id": 6,
      "nombre": "Paulaner Hefe-Weißbier",
      "nacionalidad": "Alemania",
      "peso": "500ml",
      "alcohol": "5.5%",
      "imagen": "https://images.ejemplo.com/paulaner.jpg",
      "descripcion": "Cerveza de trigo turbia clásica de Múnich, con aromas naturales a plátano y clavo."
    },
    {
      "id": 7,
      "nombre": "Peroni Nastro Azzurro",
      "nacionalidad": "Italia",
      "peso": "330ml",
      "alcohol": "5.1%",
      "imagen": "https://images.ejemplo.com/peroni.jpg",
      "descripcion": "Una lager italiana elegante y refrescante con notas cítricas y un toque de maíz premium."
    },
    {
      "id": 8,
      "nombre": "Pilsner Urquell",
      "nacionalidad": "República Checa",
      "peso": "500ml",
      "alcohol": "4.4%",
      "imagen": "https://images.ejemplo.com/pilsnerurquell.jpg",
      "descripcion": "La primera cerveza pilsner del mundo. Posee un amargor intenso de lúpulo Saaz y un cuerpo maltoso."
    },
    {
      "id": 9,
      "nombre": "Chimay Bleu",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "9.0%",
      "imagen": "https://images.ejemplo.com/chimay.jpg",
      "descripcion": "Cerveza trapense potente y oscura con aromas a flores frescas y un toque de caramelo tostado."
    },
    {
      "id": 10,
      "nombre": "Quilmes Clasica",
      "nacionalidad": "Argentina",
      "peso": "340ml",
      "alcohol": "4.8%",
      "imagen": "https://images.ejemplo.com/quilmes.jpg",
      "descripcion": "Cerveza lager argentina equilibrada, con buen cuerpo y un sabor refrescante de malta local."
    },
    {
      "id": 11,
      "nombre": "Duvel",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "8.5%",
      "imagen": "https://images.ejemplo.com/duvel.jpg",
      "descripcion": "Ale rubia fuerte belga, famosa por su carbonatación intensa y su amargor sutilmente cítrico."
    },
    {
      "id": 12,
      "nombre": "Budweiser",
      "nacionalidad": "Estados Unidos",
      "peso": "355ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/budweiser.jpg",
      "descripcion": "Conocida como 'The King of Beers', es una lager filtrada con madera de haya para un sabor suave."
    },
    {
      "id": 13,
      "nombre": "Singha",
      "nacionalidad": "Tailandia",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/singha.jpg",
      "descripcion": "Lager tailandesa con mucho cuerpo y notas especiadas, perfecta para climas cálidos."
    },
    {
      "id": 14,
      "nombre": "Mahou Cinco Estrellas",
      "nacionalidad": "España",
      "peso": "330ml",
      "alcohol": "5.5%",
      "imagen": "https://images.ejemplo.com/mahou.jpg",
      "descripcion": "Lager de color dorado brillante, muy equilibrada y con un amargor bien marcado."
    },
    {
      "id": 15,
      "nombre": "Newcastle Brown Ale",
      "nacionalidad": "Inglaterra",
      "peso": "550ml",
      "alcohol": "4.7%",
      "imagen": "https://images.ejemplo.com/newcastle.jpg",
      "descripcion": "Una ale clásica del norte de Inglaterra, suave, con sabor a nuez y un color ámbar profundo."
    },
    {
      "id": 16,
      "nombre": "Tiger Beer",
      "nacionalidad": "Singapur",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/tiger.jpg",
      "descripcion": "Una lager asiática galardonada, creada mediante un proceso de fermentación tropical único."
    },
    {
      "id": 17,
      "nombre": "Weihenstephaner Vitus",
      "nacionalidad": "Alemania",
      "peso": "500ml",
      "alcohol": "7.7%",
      "imagen": "https://images.ejemplo.com/vitus.jpg",
      "descripcion": "Weizenbock picante de la cervecería más antigua del mundo, con matices frutales y levadura cremosa."
    },
    {
      "id": 18,
      "nombre": "Tsingtao",
      "nacionalidad": "China",
      "peso": "640ml",
      "alcohol": "4.7%",
      "imagen": "https://images.ejemplo.com/tsingtao.jpg",
      "descripcion": "Cerveza pilsner china elaborada con agua mineral de manantial y arroz, muy ligera al paladar."
    },
    {
      "id": 19,
      "nombre": "Leffe Brune",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "6.5%",
      "imagen": "https://images.ejemplo.com/leffe.jpg",
      "descripcion": "Cerveza de abadía oscura con un toque dulce a caramelo y notas tostadas muy suaves."
    },
    {
      "id": 20,
      "nombre": "Super Bock",
      "nacionalidad": "Portugal",
      "peso": "330ml",
      "alcohol": "5.2%",
      "imagen": "https://images.ejemplo.com/superbock.jpg",
      "descripcion": "La cerveza líder de Portugal, una lager dorada con aroma intenso y cuerpo persistente."
    },
    {
      "id": 21,
      "nombre": "Blue Moon",
      "nacionalidad": "Estados Unidos",
      "peso": "355ml",
      "alcohol": "5.4%",
      "imagen": "https://images.ejemplo.com/bluemoon.jpg",
      "descripcion": "Cerveza de trigo estilo belga, elaborada con cáscara de naranja y semillas de cilantro."
    },
    {
      "id": 22,
      "nombre": "Estrella Damm",
      "nacionalidad": "España",
      "peso": "330ml",
      "alcohol": "5.4%",
      "imagen": "https://images.ejemplo.com/estrelladamm.jpg",
      "descripcion": "La lager mediterránea por excelencia, elaborada con ingredientes 100% naturales en Barcelona."
    },
    {
      "id": 23,
      "nombre": "Kronenbourg 1664",
      "nacionalidad": "Francia",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/1664.jpg",
      "descripcion": "Lager francesa premium que utiliza lúpulo Strisselspalt, otorgándole un aroma floral exclusivo."
    },
    {
      "id": 24,
      "nombre": "Carlsberg",
      "nacionalidad": "Dinamarca",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/carlsberg.jpg",
      "descripcion": "Una pilsner clásica danesa con un balance perfecto entre el dulce de la malta y el amargo del lúpulo."
    },
    {
      "id": 25,
      "nombre": "Erdinger Weißbier",
      "nacionalidad": "Alemania",
      "peso": "500ml",
      "alcohol": "5.3%",
      "imagen": "https://images.ejemplo.com/erdinger.jpg",
      "descripcion": "Cerveza de trigo bávara fermentada en botella, con un sabor suave y muy refrescante."
    },
    {
      "id": 26,
      "nombre": "Victoria",
      "nacionalidad": "México",
      "peso": "355ml",
      "alcohol": "4.0%",
      "imagen": "https://images.ejemplo.com/victoria.jpg",
      "descripcion": "Cerveza tipo Vienna con color ámbar claro y notas tostadas, una de las más antiguas de México."
    },
    {
      "id": 27,
      "nombre": "Birra Moretti",
      "nacionalidad": "Italia",
      "peso": "330ml",
      "alcohol": "4.6%",
      "imagen": "https://images.ejemplo.com/moretti.jpg",
      "descripcion": "Lager italiana tradicional producida casi de la misma manera desde 1859."
    },
    {
      "id": 28,
      "nombre": "Samuel Adams Boston Lager",
      "nacionalidad": "Estados Unidos",
      "peso": "355ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/samadams.jpg",
      "descripcion": "Lager compleja con notas de caramelo y un final floral gracias al lúpulo Noble."
    },
    {
      "id": 29,
      "nombre": "Red Stripe",
      "nacionalidad": "Jamaica",
      "peso": "330ml",
      "alcohol": "4.7%",
      "imagen": "https://images.ejemplo.com/redstripe.jpg",
      "descripcion": "Cerveza lager jamaicana de cuerpo ligero presentada en su icónica botella achaparrada."
    },
    {
      "id": 30,
      "nombre": "Asahi Super Dry",
      "nacionalidad": "Japón",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/asahi.jpg",
      "descripcion": "Famosa por su final seco 'Karakuchi', es una cerveza limpia que no deja regusto amargo."
    },
    {
      "id": 31,
      "nombre": "Grolsch Premium Lager",
      "nacionalidad": "Países Bajos",
      "peso": "450ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/grolsch.jpg",
      "descripcion": "Destaca por su envase 'swing-top' y su combinación de dos tipos de lúpulo para mayor profundidad."
    },
    {
      "id": 32,
      "nombre": "Modelo Especial",
      "nacionalidad": "México",
      "peso": "355ml",
      "alcohol": "4.4%",
      "imagen": "https://images.ejemplo.com/modelo.jpg",
      "descripcion": "Pilsner rica y completa con un sabor a miel y un carácter equilibrado."
    },
    {
      "id": 33,
      "nombre": "Cooper's Sparkling Ale",
      "nacionalidad": "Australia",
      "peso": "375ml",
      "alcohol": "5.8%",
      "imagen": "https://images.ejemplo.com/coopers.jpg",
      "descripcion": "Cerveza australiana acondicionada en botella con sedimentos de levadura naturales."
    },
    {
      "id": 34,
      "nombre": "Warsteiner Premium",
      "nacionalidad": "Alemania",
      "peso": "330ml",
      "alcohol": "4.8%",
      "imagen": "https://images.ejemplo.com/warsteiner.jpg",
      "descripcion": "Pilsner clásica alemana con una carbonatación fina y un final ligeramente herbáceo."
    },
    {
      "id": 35,
      "nombre": "Cusqueña Dorada",
      "nacionalidad": "Perú",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/cusquena.jpg",
      "descripcion": "Elaborada con 100% malta de cebada y lúpulo Saaz, reflejando la pureza de los Andes."
    },
    {
      "id": 36,
      "nombre": "Boddingtons Pub Ale",
      "nacionalidad": "Inglaterra",
      "peso": "440ml",
      "alcohol": "4.7%",
      "imagen": "https://images.ejemplo.com/boddingtons.jpg",
      "descripcion": "Bitter inglesa muy cremosa con notas de miel y un amargor extremadamente suave."
    },
    {
      "id": 37,
      "nombre": "Amstel Light",
      "nacionalidad": "Países Bajos",
      "peso": "330ml",
      "alcohol": "3.5%",
      "imagen": "https://images.ejemplo.com/amstel.jpg",
      "descripcion": "Lager ligera con bajas calorías pero manteniendo un sabor pleno a malta."
    },
    {
      "id": 38,
      "nombre": "Beck's",
      "nacionalidad": "Alemania",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/becks.jpg",
      "descripcion": "Pilsner alemana conocida por su pureza y su amargor refrescante característico de Bremen."
    },
    {
      "id": 39,
      "nombre": "Sol",
      "nacionalidad": "México",
      "peso": "330ml",
      "alcohol": "4.5%",
      "imagen": "https://images.ejemplo.com/sol.jpg",
      "descripcion": "Cerveza clara y transparente, muy ligera, diseñada para beberse fría en días soleados."
    },
    {
      "id": 40,
      "nombre": "Hoegaarden",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "4.9%",
      "imagen": "https://images.ejemplo.com/hoegaarden.jpg",
      "descripcion": "La cerveza de trigo blanca original. Sin filtrar, con toques de cilantro y cáscara de naranja."
    },
    {
      "id": 41,
      "nombre": "Saison Dupont",
      "nacionalidad": "Bélgica",
      "peso": "375ml",
      "alcohol": "6.5%",
      "imagen": "https://images.ejemplo.com/saison.jpg",
      "descripcion": "Cerveza de granja clásica, muy seca, carbonatada y con un perfil de levadura especiado."
    },
    {
      "id": 42,
      "nombre": "Brahma Chopp",
      "nacionalidad": "Brasil",
      "peso": "350ml",
      "alcohol": "4.8%",
      "imagen": "https://images.ejemplo.com/brahma.jpg",
      "descripcion": "Lager brasileña estándar, diseñada para ser servida a temperaturas extremadamente bajas."
    },
    {
      "id": 43,
      "nombre": "Kilkenny Irish Cream",
      "nacionalidad": "Irlanda",
      "peso": "440ml",
      "alcohol": "4.3%",
      "imagen": "https://images.ejemplo.com/kilkenny.jpg",
      "descripcion": "Irish Ale de color rojo ámbar con una textura nitrógenada muy similar a la Guinness."
    },
    {
      "id": 44,
      "nombre": "Mythos",
      "nacionalidad": "Grecia",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/mythos.jpg",
      "descripcion": "Lager griega con espuma rica, color dorado brillante y aroma frutal agradable."
    },
    {
      "id": 45,
      "nombre": "Foster's Lager",
      "nacionalidad": "Australia",
      "peso": "500ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/fosters.jpg",
      "descripcion": "Cerveza ligera y fácil de beber que se ha convertido en el símbolo de Australia en el mundo."
    },
    {
      "id": 46,
      "nombre": "La Chouffe",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "8.0%",
      "imagen": "https://images.ejemplo.com/lachouffe.jpg",
      "descripcion": "Cerveza rubia belga sin filtrar, refermentada en botella y con notas de cilantro."
    },
    {
      "id": 47,
      "nombre": "Orval",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "6.2%",
      "imagen": "https://images.ejemplo.com/orval.jpg",
      "descripcion": "Trapense única que utiliza levaduras silvestres (Brettanomyces), dándole un toque ácido y complejo."
    },
    {
      "id": 48,
      "nombre": "San Miguel Pale Pilsen",
      "nacionalidad": "Filipinas",
      "peso": "330ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/sanmiguel.jpg",
      "descripcion": "La lager líder en el sudeste asiático, suave, dorada y con aroma de malta pura."
    },
    {
      "id": 49,
      "nombre": "Presidente",
      "nacionalidad": "República Dominicana",
      "peso": "355ml",
      "alcohol": "5.0%",
      "imagen": "https://images.ejemplo.com/presidente.jpg",
      "descripcion": "Lager caribeña por excelencia, muy valorada por su sabor limpio y frescura."
    },
    {
      "id": 50,
      "nombre": "Delirium Tremens",
      "nacionalidad": "Bélgica",
      "peso": "330ml",
      "alcohol": "8.5%",
      "imagen": "https://images.ejemplo.com/delirium.jpg",
      "descripcion": "Cerveza rubia fuerte con un sabor picante a pimienta y un final cálido por su alto nivel de alcohol."
    }
  ]
