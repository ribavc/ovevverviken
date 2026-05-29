window.OVREVIKEN_MENU = {
  sourceFiles: [
    "76q9a8t5_126973-menus-1.jpg",
    "9y9xf2qc_126973-menus-2.jpg",
    "oddy7wth_126973-menus-3.jpg",
    "photo_2026-05-27_16-34-23.jpg"
  ],
  allergens: [
    { id: "1", name: "Kveite" },
    { id: "2", name: "Mjølk" },
    { id: "3", name: "Selleri" },
    { id: "4", name: "Sennep" },
    { id: "5", name: "Egg" },
    { id: "6", name: "Blautdyr" },
    { id: "7", name: "Nøtter" }
  ],
  categories: [
    {
      id: "pizzas",
      nav: { no: "Pizza", en: "Pizzas" },
      eyebrow: { no: "Steinovn", en: "Stone oven" },
      intro: {
        no: "Fjellnamn, raud saus og kvit saus, strukturert frå originalmenyen.",
        en: "Mountain names, red sauce and white sauce, structured from the original menu."
      },
      type: "pizza",
      groups: [
        {
          title: "Raud pizza",
          columns: ["Medium", "Stor"],
          items: [
            {
              name: "FITJADALEN 266 m.o.h.",
              prices: ["239,-", "299,-"],
              description: "Tomatsaus, mozzarella, raudløk, pepperoni, bacon, skinka og biff.",
              allergens: ["1", "2", "3"]
            },
            {
              name: "GRØNN HARDING",
              prices: ["229,-", "289,-"],
              description: "Tomatsaus, mozarella, pesto, kylling, bacon og ruccola.",
              allergens: ["1", "2", "3", "7"]
            },
            {
              name: "FUGLADALEN 786 m.o.h",
              prices: ["215,-", "265,-"],
              description: "Tomatsaus, mozarella, cherrytomater og ruccola.",
              allergens: ["1", "2", "3", "4"]
            },
            {
              name: "SKROTT 1320 m.o.h.",
              prices: ["219,-", "275,-"],
              description: "Tomatsaus, fersk mozzarella, pepperoni, oliven, pinjekjerner og fersk chili.",
              allergens: ["1", "2", "3", "7"]
            },
            {
              name: "BREIDABLIKK 1160 m.o.h.",
              prices: ["229,-", "289,-"],
              description: "Tomatsaus, mozzarella, raudløk, paprika, pepperoni, biff og bacon.",
              allergens: ["1", "2", "3"]
            },
            {
              name: "SPØTASKARV 600 m.o.h.",
              prices: ["239,-", "289,-"],
              description: "Tomatsaus, Prosciutto cotto, goronzola, sopp og vårløk.",
              allergens: ["1", "2"]
            }
          ]
        },
        {
          title: "Kvit pizza",
          columns: ["Medium", "Stor"],
          items: [
            {
              name: "KLIPPE 528 m.o.h.",
              prices: ["229,-", "289,-"],
              description: "Kremet saus, Cherry tomater, mozzarella, ruccola og parmaskinke.",
              allergens: ["1", "2"]
            },
            {
              name: "BOTNANE 344 m.o.h.",
              prices: ["219,-", "279,-"],
              description: "Kremet saus, spinat, fersk hvitløk, feta ost, vårløk og mozzarella.",
              allergens: ["1", "2"]
            },
            {
              name: "SOGESTIEN 338 m.o.h",
              prices: ["229,-", "279,-"],
              description: "kremet saus, pepperoni, mais, ananas og kylling.",
              allergens: ["1", "2", "3"]
            }
          ],
          extras: [
            { name: "Glutenfri bunn", price: "49,-" },
            { name: "Vegansk ost", price: "35,-" }
          ]
        }
      ]
    },
    {
      id: "burgers",
      nav: { no: "Burger", en: "Burgers" },
      eyebrow: { no: "Burger", en: "Burgers" },
      intro: {
        no: "Serverast med val mellom pommes frites, søtpotet fries eller løkringer.",
        en: "Served with a choice of fries, sweet potato fries or onion rings."
      },
      groups: [
        {
          title: "Burger",
          items: [
            {
              name: "Øvreviken burger",
              price: "235,-",
              description: "Chipotle aioli, salat sylta raudløk, ost og bacon.",
              allergens: ["1", "2", "5"]
            },
            {
              name: "Smash Burger",
              price: "235,-",
              description: "Chipotle aioli, fritert løk og salat",
              allergens: ["1", "2", "5"]
            },
            {
              name: "Kylling burger",
              price: "235,-",
              description: "Kyllingfilet, grønnsalat, fersk mango salat og chipotle aioli.",
              allergens: ["1", "2", "5"]
            },
            {
              name: "Steikeost burger",
              price: "235,-",
              description: "Ost frå Hardanger bygdeysteri, pepperdressing, grønnsalat og sylta raudløk.",
              allergens: ["1", "2", "5"]
            }
          ],
          notes: ["Velg mellom pommes frites, søtpotet fries eller løkringer"],
          extras: [
            { name: "Dobbelt kjøtt", price: "85,-" },
            { name: "Glutenfri burgerbrød", price: "55,-" }
          ]
        }
      ]
    },
    {
      id: "plates",
      nav: { no: "Tallerken & pasta", en: "Plates & Pasta" },
      eyebrow: { no: "Tallerken", en: "Plates" },
      intro: {
        no: "Varmt frå kjøkkenet, servert med presise tilbehøyr frå originalmenyen.",
        en: "Warm kitchen plates with the exact sides listed on the original menu."
      },
      groups: [
        {
          title: "Tallerken",
          items: [
            {
              name: "Biff strimler eller kuttet kyllingfilet",
              price: "249,-",
              description: "Serverast med pommes frites, salat, pitabrød og dressing.",
              extras: [{ name: "Ekstra kjøtt", price: "79,-" }]
            },
            {
              name: "Spareribs",
              price: "369,-",
              description: "Serverast med heimelaga coleslawsalat, maiskolbe, bbq saus og pommes frites.",
              allergens: ["3", "5"]
            },
            {
              name: "Fish and chips",
              price: "259,-",
              description: "Serverast med salat, pommes frites og remulade.",
              allergens: ["1", "2", "3", "4", "5", "6"]
            },
            {
              name: "Biff eller kylling i rull eller i pita",
              price: "149,-",
              description: "serverast med salat, mais og heimelaga dressing.",
              extras: [{ name: "Ekstra kjøtt", price: "79,-" }],
              allergens: ["1", "2", "3", "5"]
            },
            {
              name: "Falafel",
              price: "145,-",
              description: "Serverast med salat, tomat, persille og tahini saus",
              allergens: ["1", "2", "3", "4", "5", "7"],
              notes: ["Ekstra falafel"]
            }
          ]
        },
        {
          title: "Pasta",
          items: [
            {
              name: "Pasta",
              price: "189,-",
              lines: ["Linguine bolognese", "Serverast med parmesan, persille og brød"],
              allergens: ["1", "2", "3", "4"]
            },
            {
              name: "Linguine pesto",
              price: "179,-",
              description: "Serverast med pinjekjerner, persille, parmesan og brød.",
              allergens: ["1", "2", "3", "4", "7"]
            }
          ]
        }
      ]
    },
    {
      id: "finger-food",
      nav: { no: "Finger mat", en: "Finger Food" },
      eyebrow: { no: "Take away", en: "Take away" },
      intro: {
        no: "Smårettar og tapas frå take away-menyen.",
        en: "Small plates and tapas from the take away menu."
      },
      groups: [
        {
          title: "Finger mat",
          items: [
            {
              name: "Pepperball",
              price: "139,-",
              description: "6stk. Paprika med ostefyll.",
              allergens: ["2", "3"]
            },
            {
              name: "Chili Cheese",
              price: "95,-",
              description: "6 stk. friterte ostebollar med Jalapenos.",
              allergens: ["1", "2", "3", "5"]
            },
            {
              name: "Oliven",
              price: "79,-",
              description: "Kvitløksmarinerte grøne oliven."
            },
            {
              name: "Hummus",
              price: "110,-",
              description: "Pure laga av kikerter.",
              allergens: ["1", "7"]
            },
            {
              name: "Pommes frites eller Søtpoteter",
              price: "95,-"
            },
            {
              name: "Calamari fritti",
              price: "135,-",
              allergens: ["1", "2", "3", "4", "5", "6"]
            },
            {
              name: "Buffalo wings",
              price: "145,-",
              description: "6 stk.",
              allergens: ["3"]
            },
            {
              name: "Løkringer",
              price: "98,-",
              description: "6 stk.",
              allergens: ["1", "2", "3", "5"]
            },
            {
              name: "Kjøttbollar",
              price: "139,-",
              description: "Med tomatsaus eller oliven. 6 stk. kjøttbollar",
              allergens: ["2"]
            }
          ]
        },
        {
          title: "Tapas & salat",
          items: [
            {
              name: "Bacondadlar",
              price: "139,-",
              description: "6stk. bakte dadlar med bacon."
            },
            {
              name: "Tapas",
              price: "319,-",
              description: "Kjøkkenet lagar til 8 forskjellige smakar. Minst 4 personer for bestilling."
            },
            {
              name: "Cæsar salat",
              price: "245,-",
              description: "Hjertesalat, kylling, bacon, brødkrutongar og parmesan."
            }
          ]
        }
      ]
    },
    {
      id: "drinks",
      nav: { no: "Drikke", en: "Drinks" },
      eyebrow: { no: "Drikke Meny", en: "Drinks Menu" },
      intro: {
        no: "Mineralvatn, vin, øl, drinkar og kaffimaskin frå original drikkemeny.",
        en: "Soft drinks, wine, beer, cocktails and coffee from the original drinks menu."
      },
      groups: [
        {
          title: "Mineralvatn",
          items: [
            { name: "Coca Cola", price: "55,-" },
            { name: "Cola Zero", price: "55,-" },
            { name: "Pepsi Max", price: "55,-" },
            { name: "Solo", price: "55,-" },
            { name: "Sprite", price: "55,-" },
            { name: "Kullsyrevatn", price: "49,-" }
          ]
        },
        {
          title: "Alkofritt",
          items: [
            { name: "Øl", price: "75,-" },
            { name: "Raud Most", price: "99,-", description: "(alternativ for raudvin)" },
            { name: "Ferskpressa", price: "75,-", description: "(Appelsin juice)" }
          ]
        },
        {
          title: "Øl",
          items: [
            { name: "Hansa", price: "96,-" },
            { name: "Frydenlund", price: "96,-" },
            { name: "Frydenlund", price: "98,-", description: "(Juicy Ipa)" },
            { name: "Gauke Pils", price: "98,-" },
            { name: "Glime Blond Ale", price: "98,-", description: "(Gluten fri)" },
            { name: "Jenedig Hardanger IPA", price: "125,-" },
            { name: "Peroni", price: "96,-" },
            { name: "1664 Blanc", price: "96,-" },
            { name: "Corona Extra", price: "96,-" }
          ]
        },
        {
          title: "Sider",
          items: [
            { name: "Sider frå Hardanger", price: "145,-", unit: "Glass" }
          ]
        },
        {
          title: "Rose",
          items: [
            { name: "Les Breteches Chateau", price: "799,-", unit: "Flaske", description: "Saftig rose frå Libanon," },
            { name: "Les Breteches Chateau", price: "140,-", unit: "Glass" }
          ]
        },
        {
          title: "Musserande",
          items: [
            { name: "Pet Nat", price: "1150,-", unit: "Flaske", description: "Naturlige forfriske bobler frå vinens hjemland, Georgia." }
          ]
        },
        {
          title: "Kvitvin",
          items: [
            { name: "Mastia Soave", price: "681,-", unit: "Flaske", description: "Tørr og frisk kvitvin frå Italia." },
            { name: "Victor Berard Chablis", price: "850,-", unit: "Flaske", description: "Klassisk tørr Chardonnay" },
            { name: "Khikhvi Terra Kisi", price: "1150,-", unit: "Flaske", description: "Oransjevin fra Georgia." }
          ]
        },
        {
          title: "Rødvin",
          items: [
            { name: "Mamma Piccini Rosso Di Toscana", price: "749,-", unit: "Flaske", description: "Aromatisk fruktsmak av søte kirsebær og litt krydder." },
            { name: "Varej Barbera", price: "869,-", unit: "Flaske", description: "Frisk og bærfruktig vin frå Italia" },
            { name: "Les Breteches Chateau", price: "989,-", unit: "Flaske", description: "Frisk og fruktig rødvin frå Libanon" }
          ]
        },
        {
          title: "Drink",
          items: [
            { name: "Mojito", price: "149,-" },
            { name: "Caprinha", price: "149,-" },
            { name: "Espresso Martini", price: "149,-" },
            { name: "Gin Tonic", price: "145,-" },
            { name: "Strawberry Mojo", price: "155,-" },
            { name: "Irish Coffee", price: "145,-" },
            { name: "Mango Passion", price: "155,-" }
          ]
        },
        {
          title: "Frå Kaffimaskinen",
          items: [
            { name: "Kaffi/melk", price: "45,-/55,-" },
            { name: "Latte", price: "55,-" },
            { name: "Espresso/dobbel", price: "45,-/55,-" },
            { name: "Cappucino", price: "55,-" },
            { name: "Varm sjokolade", price: "55,-" },
            { name: "Mocha", price: "55,-" }
          ]
        }
      ]
    }
  ]
};
