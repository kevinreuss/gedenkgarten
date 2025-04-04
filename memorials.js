const memorials = {
  "0000000001": {
    name: "Günter Reuß",
    dates: "20.01.1945 - 21.11.2023",
    portrait: "images/people/0000000001/profile-picture.png",
    bio: "",
    memories: [],
    photos: [],
    timeline: [],
    guestbook: [],
  },
};

/*
const memorials = {
  "maria-schmidt": {
    name: "Maria Schmidt",
    dates: "1945 - 2021",
    portrait: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    bio: "Maria Schmidt war eine liebevolle Mutter, Großmutter und Freundin. Sie wurde in Dresden geboren und verbrachte ihr Leben als engagierte Lehrerin, die Generationen von Schülern inspirierte. Ihre Leidenschaft für Musik, Literatur und Reisen prägte ihr Leben. Sie hinterlässt drei Kinder und fünf Enkelkinder, die sie über alles liebte.",
    memories: [
      {
        author: {
          name: "Lisa Schmidt",
          image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
        },
        date: "15. Juni 2022",
        title: "Meine liebste Erinnerung",
        content:
          "Ich erinnere mich an die Sonntagnachmittage, an denen Mama für uns alle Kuchen gebacken hat. Der Duft von frischem Apfelkuchen erfüllte das ganze Haus. Wir saßen zusammen am Tisch, erzählten Geschichten und lachten. Diese Momente werde ich für immer in meinem Herzen bewahren.",
        images: [
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5c3",
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
        ],
      },
      {
        author: {
          name: "Michael Weber",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        },
        date: "3. Mai 2022",
        title: "Eine inspirierende Lehrerin",
        content:
          "Frau Schmidt war meine Deutschlehrerin in der 7. Klasse. Sie hat in mir die Liebe zur Literatur geweckt und mich ermutigt, meinen eigenen Weg zu gehen. Ihr Einfluss auf mein Leben war enorm, und ich bin ihr für immer dankbar. Sie hatte eine besondere Gabe, das Beste in jedem Schüler zu sehen und zu fördern.",
        images: [],
      },
      {
        author: {
          name: "Anna Müller",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        },
        date: "12. April 2022",
        title: "Unsere Reise nach Italien",
        content:
          "Maria und ich waren seit der Schulzeit befreundet. Vor 10 Jahren haben wir zusammen eine Reise durch die Toskana gemacht. Es war eine wundervolle Zeit voller Lachen, gutem Essen und unvergesslichen Momenten. Maria hatte immer einen guten Sinn für Humor und konnte selbst in schwierigen Situationen noch lachen. Diese Reise wird für immer in meiner Erinnerung bleiben.",
        images: [
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
          "https://images.unsplash.com/photo-1533105079780-92b9be482077",
          "https://images.unsplash.com/photo-1534445867742-43195f401b6c",
        ],
      },
    ],
    photos: [
      {
        url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        caption: "Maria, 2018",
      },
      {
        url: "https://images.unsplash.com/photo-1515077678510-ce3bdf418862",
        caption: "Familienfeier, 2015",
      },
      {
        url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        caption: "Urlaub in Italien, 2012",
      },
      {
        url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5c3",
        caption: "Beim Backen mit den Enkelkindern, 2019",
      },
      {
        url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        caption: "Reise nach Florenz, 2010",
      },
      {
        url: "https://images.unsplash.com/photo-1534445867742-43195f401b6c",
        caption: "Weinprobe in der Toskana, 2010",
      },
      {
        url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
        caption: "Weihnachten 2020",
      },
      {
        url: "https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4",
        caption: "Im Garten, Sommer 2017",
      },
      {
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        caption: "Marias 70. Geburtstag, 2015",
      },
    ],
    timeline: [
      {
        date: "15. März 1945",
        title: "Geboren in Dresden",
        description:
          "Maria wurde als Tochter von Heinrich und Elisabeth Schmidt in Dresden geboren.",
      },
      {
        date: "1963",
        title: "Abitur",
        description: "Abschluss des Gymnasiums mit Auszeichnung.",
      },
      {
        date: "1963 - 1968",
        title: "Studium",
        description:
          "Studium der Germanistik und Geschichte an der Universität Leipzig.",
      },
      {
        date: "1968",
        title: "Heirat mit Thomas Schmidt",
        description:
          "Hochzeit mit ihrer großen Liebe Thomas in der Frauenkirche Dresden.",
      },
      {
        date: "1970",
        title: "Geburt der Tochter Lisa",
        description: "Ihre erste Tochter Lisa wurde geboren.",
      },
      {
        date: "1972",
        title: "Geburt des Sohnes Markus",
        description: "Ihr Sohn Markus kam zur Welt.",
      },
      {
        date: "1975",
        title: "Geburt der Tochter Julia",
        description: "Ihre jüngste Tochter Julia wurde geboren.",
      },
      {
        date: "1969 - 2005",
        title: "Lehrerin am Goethe-Gymnasium",
        description:
          "Maria unterrichtete Deutsch und Geschichte am Goethe-Gymnasium in Dresden und prägte das Leben vieler Schüler.",
      },
      {
        date: "2005",
        title: "Pensionierung",
        description:
          "Nach 36 Jahren im Schuldienst ging Maria in den wohlverdienten Ruhestand.",
      },
      {
        date: "2010",
        title: "Reise durch Italien",
        description:
          "Erfüllung eines Lebenstraums: Eine ausgedehnte Reise durch die Toskana mit ihrer besten Freundin Anna.",
      },
      {
        date: "2015",
        title: "70. Geburtstag",
        description: "Große Feier zum 70. Geburtstag mit Familie und Freunden.",
      },
      {
        date: "12. November 2021",
        title: "Friedlich eingeschlafen",
        description:
          "Maria verstarb friedlich im Kreise ihrer Familie nach kurzer Krankheit.",
      },
    ],
    guestbook: [
      {
        name: "Familie Schneider",
        date: "20. November 2021",
        message:
          "Unsere tiefste Anteilnahme. Maria war ein wundervoller Mensch, der uns allen fehlen wird.",
      },
      {
        name: "Ehemalige Schüler der Klasse 12b (1998)",
        date: "15. November 2021",
        message:
          "Frau Schmidt war die beste Lehrerin, die wir je hatten. Ihr Enthusiasmus und ihre Leidenschaft für Literatur haben uns alle inspiriert. Wir werden sie nie vergessen.",
      },
      {
        name: "Petra und Hans Wagner",
        date: "14. November 2021",
        message:
          "Maria war eine wunderbare Nachbarin und Freundin. Wir werden die gemeinsamen Gartenabende vermissen. Ruhe in Frieden.",
      },
    ],
  },
};
*/
