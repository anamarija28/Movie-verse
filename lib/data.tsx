
  export type MovieGenre =
  | "Action"
  | "Drama"
  | "Sci-Fi"
  | "Comedy"
  | "Crime"
  | "Thriller"
  | "Horror"
  | "Romance"
  | "Adventure"
  | "Mystery"
  | "Fantasy";

export type MovieRatingLevel = "All" | "9+" | "8+" | "7+" | "6+" | "5+";
export type MovieDuration = "All" | "<90" | "<120" | "<180" | "180+";

export type WatchProvider = {
  name: string;
  url: string;
}



export const MOVIE_RATINGS: MovieRatingLevel[] = ["All", "8+", "7+", "6+"];
export const MOVIE_DURATIONS: MovieDuration[] = ["All", "<90", "<120", "<180", "180+"];

const MOVIES_PER_PAGE = 9; // Овде дефинирај колку филмови сакаш на една страница



 export interface Actor {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  shortBio: string;
  bio: string;
  birthDate: string;
  imageUrl: string;

}

export interface Movie {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  genre: MovieGenre;
  releaseYear: number;
  rating: number; // Оцена од 1 до 10
  duration: string; // Времетраење (напр. "2h 28m")
  durationMinutes: number; // За филтрирање по времетраење
  director: string;
  writer: string;
  mainStars: string[];
  castSlugs: string[]; // Повеќе актери за секој филм!
  // scenes: string[]; // Листа на познати сцени / поглавја
  posterUrl?: string; // Што значи ? 
  trailerUrl?: string; // Youtube embed линк за видеото
  watchProviders?: WatchProvider[];

}


// export const actors: Actor[] = [
//   {
//     id: "a1",
//     slug: "leonardo-dicaprio",
//     name: "Leonardo DiCaprio",
//     specialty: "Method Acting & Drama",
//     shortBio: "Academy Award-winning actor known for intense and iconic dramatic roles.",
//     bio: "Leonardo DiCaprio is an American actor and producer. Known for his work in biopics and period films, he has received numerous accolades throughout his career, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.",
//   },
//   {
//     id: "a2",
//     slug: "cillian-murphy",
//     name: "Cillian Murphy",
//     specialty: "Character Acting & Thrillers",
//     shortBio: "Irish actor celebrated for his captivating performances in film and theatre.",
//     bio: "Cillian Murphy is an Irish actor. He made his professional debut in Enda Walsh's 1996 play Disco Pigs. His major film roles include collaborations with Christopher Nolan in The Dark Knight Trilogy, Inception, and Oppenheimer.",
//   },
//   {
//     id: "a3",
//     slug: "florence-pugh",
//     name: "Florence Pugh",
//     specialty: "Drama & Action",
//     shortBio: "English actress recognized for her versatile roles in indie and blockbuster cinema.",
//     bio: "Florence Pugh made her acting debut in 2014 in the drama film The Falling. She gained international recognition in 2019 for her portrayals of a woman in Midsommar and Amy March in Little Women.",
//   },
//   {
//     id: "a4",
//     slug: "keanu-reeves",
//     name: "Keanu Reeves",
//     specialty: "Action & Sci-Fi",
//     shortBio: "Canadian actor famous for leading legendary action and sci-fi franchises.",
//     bio: "Keanu Reeves has starred in major blockbusters including The Matrix series and John Wick franchise. Known for his humility and dedication to stunt work, he remains one of Hollywood's most beloved actors.",
//   },
//   {
//     id: "a5",
//     slug: "ryan-gosling",
//     name: "Ryan Gosling",
//     specialty: "Comedy & Neo-Noir Drama",
//     shortBio: "Versatile actor known for indie films, romantic dramas, and hit comedies.",
//     bio: "Ryan Gosling began his career as a child star on the Disney Channel's The Mickey Mouse Club. He went on to achieve global fame in iconic films such as The Notebook, Drive, La La Land, and Blade Runner 2049.",
//   },
//   {
//     id: "a6",
//     slug: "anya-taylor-joy",
//     name: "Anya Taylor-Joy",
//     specialty: "Horror & Psychological Thriller",
//     shortBio: "Acclaimed actress known for her striking roles in psychological horror and mystery films.",
//     bio: "Anya Taylor-Joy rose to fame with her breakout role in the horror film The Witch. She continued to receive critical acclaim for her performances in Split, The Queen's Gambit, and Last Night in Soho.",
//   },
//   {
//     id: "a7",
//     slug: "tom-holland",
//     name: "Tom Holland",
//     specialty: "Action & Adventure",
//     shortBio: "English actor best known for his charismatic lead roles in global adventure blockbusters.",
//     bio: "Tom Holland gained international recognition for playing Spider-Man in the Marvel Cinematic Universe. He has also starred in high-octane adventure titles like Uncharted and dramatic survival films like The Impossible.",
//   },
//   {
//     id: "a8",
//     slug: "rachel-mcadams",
//     name: "Rachel McAdams",
//     specialty: "Romance & Mystery",
//     shortBio: "Iconic actress celebrated for leading emotional romances and suspenseful dramas.",
//     bio: "Rachel McAdams is a Canadian actress who achieved stardom with her roles in The Notebook and Mean Girls. She has shown remarkable range with critically acclaimed performances in Spotlight, About Time, and Sherlock Holmes.",
//   },
//   {
//     id: "a9",
//     slug: "christian-bale",
//     name: "Christian Bale",
//     specialty: "Crime & Physical Transformation",
//     shortBio: "Master of physical transformations known for dark crime, mystery, and superhero epics.",
//     bio: "Christian Bale is an English actor renowned for his intense commitment to roles. He starred as Batman in The Dark Knight Trilogy and won an Academy Award for his role in The Fighter, alongside captivating performances in American Psycho and The Prestige.",
//   },
//   {
//     id: "a10",
//     slug: "zendaya",
//     name: "Zendaya",
//     specialty: "Sci-Fi & Romantic Drama",
//     shortBio: "Emmy-winning actress known for compelling portrayals in modern sci-fi epics and youth dramas.",
//     bio: "Zendaya began her career as a Disney star before transitioning to Hollywood blockbusters. She has garnered critical acclaim for her roles in Dune, Malcolm & Marie, the Spider-Man franchise, and HBO's Euphoria.",
//   },
//   {
//     id: "a11",
//     slug: "daniel-kaluuya",
//     name: "Daniel Kaluuya",
//     specialty: "Horror & Psychological Thriller",
//     shortBio: "Oscar-winning actor famous for leading modern iconic psychological horror films.",
//     bio: "Daniel Kaluuya achieved international prominence with his starring role in Jordan Peele's Get Out. He won an Academy Award for Judas and the Black Messiah and delivered powerful performances in Us and Nope.",
//   },
//   {
//     id: "a12",
//     slug: "margot-robbie",
//     name: "Margot Robbie",
//     specialty: "Comedy & Dark Satire",
//     shortBio: "Versatile Australian actress and producer starring in hit blockbusters and indies.",
//     bio: "Margot Robbie gained widespread recognition in The Wolf of Wall Street. She earned critical acclaim for I, Tonya, Once Upon a Time in Hollywood, and reached global phenomenon status with Barbie.",
//   },
//   {
//     id: "a13",
//     slug: "pedro-pascal",
//     name: "Pedro Pascal",
//     specialty: "Sci-Fi & Post-Apocalyptic Drama",
//     shortBio: "Charismatic actor known for leading iconic sci-fi, fantasy, and action series.",
//     bio: "Pedro Pascal became a global pop culture icon through his roles in Game of Thrones, Narcos, The Mandalorian, and the critically acclaimed adaptation of The Last of Us.",
//   },
//   {
//     id: "a14",
//     slug: "timothee-chalamet",
//     name: "Timothée Chalamet",
//     specialty: "Coming-of-Age & Epic Sci-Fi",
//     shortBio: "Acclaimed young actor known for indie romances and visionary sci-fi franchises.",
//     bio: "Timothée Chalamet broke out with Call Me by Your Name and rapidly became one of Hollywood's premier leading men, starring in Dune, Wonka, and Little Women.",
//   },
//   {
//     id: "a15",
//     slug: "mia-goth",
//     name: "Mia Goth",
//     specialty: "Slashers & Gothic Horror",
//     shortBio: "Modern horror icon known for intense and unhinged psychological performances.",
//     bio: "Mia Goth has established herself as a reigning queen of modern horror with her stunning performances in Ti West's X trilogy (X, Pearl, MaXxine) and Infinity Pool.",
//   },
//   {
//     id: "a16",
//     slug: "scarlett-johansson",
//     name: "Scarlett Johansson",
//     specialty: "Action & Sci-Fi Thriller",
//     shortBio: "One of the world's highest-grossing actresses across action, sci-fi, and drama.",
//     bio: "Scarlett Johansson is renowned for playing Black Widow in the MCU, alongside Oscar-nominated performances in Marriage Story and Jojo Rabbit, and sci-fi hits like Her and Lucy.",
//   },
//   {
//     id: "a17",
//     slug: "mads-mikkelsen",
//     name: "Mads Mikkelsen",
//     specialty: "Crime & Psychological Drama",
//     shortBio: "Danish actor celebrated for chilling villain roles and deep dramatic performances.",
//     bio: "Mads Mikkelsen gained world recognition as Le Chiffre in Casino Royale and Hannibal Lecter in Hannibal. His work spans acclaimed international dramas like Another Round and The Hunt.",
//   },
//   {
//     id: "a18",
//     slug: "ana-de-armas",
//     name: "Ana de Armas",
//     specialty: "Mystery & Action Thriller",
//     shortBio: "Cuban-Spanish actress known for captivating roles in whodunit mysteries and action epics.",
//     bio: "Ana de Armas shot to fame in Blade Runner 2049 and Knives Out. She earned an Academy Award nomination for her portrayal of Marilyn Monroe in Blonde.",
//   },
//   {
//     id: "a19",
//     slug: "willem-dafoe",
//     name: "Willem Dafoe",
//     specialty: "Arthouse & Experimental Drama",
//     shortBio: "Legendary character actor known for eccentric, bold, and unforgettable performances.",
//     bio: "Willem Dafoe has appeared in over 100 films, ranging from Spider-Man to acclaimed art-house hits like The Lighthouse, The Florida Project, and Poor Things.",
//   },
//   {
//     id: "a20",
//     slug: "jake-gyllenhaal",
//     name: "Jake Gyllenhaal",
//     specialty: "Crime Thriller & Psychological Mystery",
//     shortBio: "Dynamic actor recognized for intense, dark, and complex character studies.",
//     bio: "Jake Gyllenhaal earned widespread acclaim for Donnie Darko, Brokeback Mountain, Nightcrawler, and Prisoners, mastering roles that demand emotional intensity.",
//   },
//   {
//     id: "a21",
//     slug: "emily-blunt",
//     name: "Emily Blunt",
//     specialty: "Horror & Suspense Drama",
//     shortBio: "Award-winning actress who excels in intense thrillers, musicals, and action roles.",
//     bio: "Emily Blunt starred in the smash-hit horror films A Quiet Place, alongside memorable performances in Sicario, Edge of Tomorrow, The Devil Wears Prada, and Oppenheimer.",
//   },
//   {
//     id: "a22",
//     slug: "eddie-redmayne",
//     name: "Eddie Redmayne",
//     specialty: "Biopic & Fantasy Adventure",
//     shortBio: "Academy Award-winning British actor known for transformative real-life and fantasy roles.",
//     bio: "Eddie Redmayne won the Oscar for portraying Stephen Hawking in The Theory of Everything. He is also famous for leading the Fantastic Beasts franchise as Newt Scamander.",
//   },
// ];

export const actors: Actor[] = [
  {
    id: "a1",
    slug: "leonardo-dicaprio",
    name: "Leonardo DiCaprio",
    specialty: "Method Acting & Drama",
    shortBio: "Academy Award-winning actor known for intense and iconic dramatic roles.",
    bio: "Leonardo DiCaprio is an American actor and producer. Known for his work in biopics and period films, he has received numerous accolades throughout his career, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.",
    birthDate: "Born November 11, 1974",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a2",
    slug: "cillian-murphy",
    name: "Cillian Murphy",
    specialty: "Character Acting & Thrillers",
    shortBio: "Irish actor celebrated for his captivating performances in film and theatre.",
    bio: "Cillian Murphy is an Irish actor. He made his professional debut in Enda Walsh's 1996 play Disco Pigs. His major film roles include collaborations with Christopher Nolan in The Dark Knight Trilogy, Inception, and Oppenheimer.",
    birthDate: "Born May 25, 1976",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTM2MTA4OTA0MV5BMl5BanBnXkFtZTcwODYyODU2Mw@@._V1_.jpg",
  },
  {
    id: "a3",
    slug: "florence-pugh",
    name: "Florence Pugh",
    specialty: "Drama & Action",
    shortBio: "English actress recognized for her versatile roles in indie and blockbuster cinema.",
    bio: "Florence Pugh made her acting debut in 2014 in the drama film The Falling. She gained international recognition in 2019 for her portrayals of a woman in Midsommar and Amy March in Little Women.",
    birthDate: "Born January 3, 1996",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjk1MTdhYzctOTI1OS00ZjlmLTgwZGEtMTgyNzFjMGU1YmNlXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "a4",
    slug: "keanu-reeves",
    name: "Keanu Reeves",
    specialty: "Action & Sci-Fi",
    shortBio: "Canadian actor famous for leading legendary action and sci-fi franchises.",
    bio: "Keanu Reeves has starred in major blockbusters including The Matrix series and John Wick franchise. Known for his humility and dedication to stunt work, he remains one of Hollywood's most beloved actors.",
    birthDate: "Born September 2, 1964",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "a5",
    slug: "ryan-gosling",
    name: "Ryan Gosling",
    specialty: "Comedy & Neo-Noir Drama",
    shortBio: "Versatile actor known for indie films, romantic dramas, and hit comedies.",
    bio: "Ryan Gosling began his career as a child star on the Disney Channel's The Mickey Mouse Club. He went on to achieve global fame in iconic films such as The Notebook, Drive, La La Land, and Blade Runner 2049.",
    birthDate: "Born November 12, 1980",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a6",
    slug: "anya-taylor-joy",
    name: "Anya Taylor-Joy",
    specialty: "Horror & Psychological Thriller",
    shortBio: "Acclaimed actress known for her striking roles in psychological horror and mystery films.",
    bio: "Anya Taylor-Joy rose to fame with her breakout role in the horror film The Witch. She continued to receive critical acclaim for her performances in Split, The Queen's Gambit, and Last Night in Soho.",
    birthDate: "Born April 16, 1996",
    imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Anya_Taylor-Joy_at_the_2025_Toronto_International_Film_Festival._06_%28cropped%29.jpg/960px-Anya_Taylor-Joy_at_the_2025_Toronto_International_Film_Festival._06_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    id: "a7",
    slug: "tom-holland",
    name: "Tom Holland",
    specialty: "Action & Adventure",
    shortBio: "English actor best known for his charismatic lead roles in global adventure blockbusters.",
    bio: "Tom Holland gained international recognition for playing Spider-Man in the Marvel Cinematic Universe. He has also starred in high-octane adventure titles like Uncharted and dramatic survival films like The Impossible.",
    birthDate: "Born June 1, 1996",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjUwNTIzNDk2NV5BMl5BanBnXkFtZTgwNDc5NzI1OTE@._V1_.jpg",
  },
  {
    id: "a8",
    slug: "rachel-mcadams",
    name: "Rachel McAdams",
    specialty: "Romance & Mystery",
    shortBio: "Iconic actress celebrated for leading emotional romances and suspenseful dramas.",
    bio: "Rachel McAdams is a Canadian actress who achieved stardom with her roles in The Notebook and Mean Girls. She has shown remarkable range with critically acclaimed performances in Spotlight, About Time, and Sherlock Holmes.",
    birthDate: "Born November 17, 1978",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTY5ODcxMDU4NV5BMl5BanBnXkFtZTcwMjAzNjQyNQ@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a9",
    slug: "christian-bale",
    name: "Christian Bale",
    specialty: "Crime & Physical Transformation",
    shortBio: "Master of physical transformations known for dark crime, mystery, and superhero epics.",
    bio: "Christian Bale is an English actor renowned for his intense commitment to roles. He starred as Batman in The Dark Knight Trilogy and won an Academy Award for his role in The Fighter, alongside captivating performances in American Psycho and The Prestige.",
    birthDate: "Born January 30, 1974",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a10",
    slug: "zendaya",
    name: "Zendaya",
    specialty: "Sci-Fi & Romantic Drama",
    shortBio: "Emmy-winning actress known for compelling portrayals in modern sci-fi epics and youth dramas.",
    bio: "Zendaya began her career as a Disney star before transitioning to Hollywood blockbusters. She has garnered critical acclaim for her roles in Dune, Malcolm & Marie, the Spider-Man franchise, and HBO's Euphoria.",
    birthDate: "Born September 1, 1996",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzliYzBmY2QtNGUyYi00OTI2LTg2ODQtNGNhYzBiYzUxYWM2XkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
  },
  {
    id: "a11",
    slug: "daniel-kaluuya",
    name: "Daniel Kaluuya",
    specialty: "Horror & Psychological Thriller",
    shortBio: "Oscar-winning actor famous for leading modern iconic psychological horror films.",
    bio: "Daniel Kaluuya achieved international prominence with his starring role in Jordan Peele's Get Out. He won an Academy Award for Judas and the Black Messiah and delivered powerful performances in Us and Nope.",
    birthDate: "Born February 24, 1989",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTk1MzgzOTg5OV5BMl5BanBnXkFtZTcwNDQ4NjMxOA@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a12",
    slug: "margot-robbie",
    name: "Margot Robbie",
    specialty: "Comedy & Dark Satire",
    shortBio: "Versatile Australian actress and producer starring in hit blockbusters and indies.",
    bio: "Margot Robbie gained widespread recognition in The Wolf of Wall Street. She earned critical acclaim for I, Tonya, Once Upon a Time in Hollywood, and reached global phenomenon status with Barbie.",
    birthDate: "Born July 2, 1990",
    imageUrl: "https://media.vogue.de/photos/5d4177b0fc8a0d0008e9b507/2:3/w_2560%2Cc_limit/GettyImages-1158765720.jpg",
  },
  {
    id: "a13",
    slug: "pedro-pascal",
    name: "Pedro Pascal",
    specialty: "Sci-Fi & Post-Apocalyptic Drama",
    shortBio: "Charismatic actor known for leading iconic sci-fi, fantasy, and action series.",
    bio: "Pedro Pascal became a global pop culture icon through his roles in Game of Thrones, Narcos, The Mandalorian, and the critically acclaimed adaptation of The Last of Us.",
    birthDate: "Born April 2, 1975",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/906fc308-6cc0-44d5-9247-1ae0dee18fc2.jpeg?crop=1xw:0.667xh;0xw,0.07xh&resize=640:*",
  },
  {
    id: "a14",
    slug: "timothee-chalamet",
    name: "Timothée Chalamet",
    specialty: "Coming-of-Age & Epic Sci-Fi",
    shortBio: "Acclaimed young actor known for indie romances and visionary sci-fi franchises.",
    bio: "Timothée Chalamet broke out with Call Me by Your Name and rapidly became one of Hollywood's premier leading men, starring in Dune, Wonka, and Little Women.",
    birthDate: "Born December 27, 1995",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a15",
    slug: "mia-goth",
    name: "Mia Goth",
    specialty: "Slashers & Gothic Horror",
    shortBio: "Modern horror icon known for intense and unhinged psychological performances.",
    bio: "Mia Goth has established herself as a reigning queen of modern horror with her stunning performances in Ti West's X trilogy (X, Pearl, MaXxine) and Infinity Pool.",
    birthDate: "Born October 25, 1993",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMzFjYmI5MzMtYTE2NS00YTIzLWJmNmQtYTcxNTk3NDAzZjExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a16",
    slug: "scarlett-johansson",
    name: "Scarlett Johansson",
    specialty: "Action & Sci-Fi Thriller",
    shortBio: "One of the world's highest-grossing actresses across action, sci-fi, and drama.",
    bio: "Scarlett Johansson is renowned for playing Black Widow in the MCU, alongside Oscar-nominated performances in Marriage Story and Jojo Rabbit, and sci-fi hits like Her and Lucy.",
    birthDate: "Born November 22, 1984",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU22ompAv9Tt09GfCL8-evcOU0s3IbideUBCCjn3IK_nrdZmPHQnwko3Q&s=10",
  },
  {
    id: "a17",
    slug: "mads-mikkelsen",
    name: "Mads Mikkelsen",
    specialty: "Crime & Psychological Drama",
    shortBio: "Danish actor celebrated for chilling villain roles and deep dramatic performances.",
    bio: "Mads Mikkelsen gained world recognition as Le Chiffre in Casino Royale and Hannibal Lecter in Hannibal. His work spans acclaimed international dramas like Another Round and The Hunt.",
    birthDate: "Born November 22, 1965",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTcyMTU5MzgxMF5BMl5BanBnXkFtZTYwMDI0NjI1._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a18",
    slug: "ana-de-armas",
    name: "Ana de Armas",
    specialty: "Mystery & Action Thriller",
    shortBio: "Cuban-Spanish actress known for captivating roles in whodunit mysteries and action epics.",
    bio: "Ana de Armas shot to fame in Blade Runner 2049 and Knives Out. She earned an Academy Award nomination for her portrayal of Marilyn Monroe in Blonde.",
    birthDate: "Born April 30, 1988",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZDAxOWQ0NmMtNTIzNS00YTdkLWI4MzAtZDM3ZDdmYTNlMjZmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "a19",
    slug: "willem-dafoe",
    name: "Willem Dafoe",
    specialty: "Arthouse & Experimental Drama",
    shortBio: "Legendary character actor known for eccentric, bold, and unforgettable performances.",
    bio: "Willem Dafoe has appeared in over 100 films, ranging from Spider-Man to acclaimed art-house hits like The Lighthouse, The Florida Project, and Poor Things.",
    birthDate: "Born July 22, 1955",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTBjNWMzMDEtZGZiZi00ZTEyLWEzMDUtZGFiYTE0ODQwZWU5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "a20",
    slug: "jake-gyllenhaal",
    name: "Jake Gyllenhaal",
    specialty: "Crime Thriller & Psychological Mystery",
    shortBio: "Dynamic actor recognized for intense, dark, and complex character studies.",
    bio: "Jake Gyllenhaal earned widespread acclaim for Donnie Darko, Brokeback Mountain, Nightcrawler, and Prisoners, mastering roles that demand emotional intensity.",
    birthDate: "Born December 19, 1980",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "a21",
    slug: "emily-blunt",
    name: "Emily Blunt",
    specialty: "Horror & Suspense Drama",
    shortBio: "Award-winning actress who excels in intense thrillers, musicals, and action roles.",
    bio: "Emily Blunt starred in the smash-hit horror films A Quiet Place, alongside memorable performances in Sicario, Edge of Tomorrow, The Devil Wears Prada, and Oppenheimer.",
    birthDate: "Born February 23, 1983",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg",
  },
  {
    id: "a22",
    slug: "eddie-redmayne",
    name: "Eddie Redmayne",
    specialty: "Biopic & Fantasy Adventure",
    shortBio: "Academy Award-winning British actor known for transformative real-life and fantasy roles.",
    bio: "Eddie Redmayne won the Oscar for portraying Stephen Hawking in The Theory of Everything. He is also famous for leading the Fantastic Beasts franchise as Newt Scamander.",
    birthDate: "Born January 6, 1982",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTU0MjEyNzQyM15BMl5BanBnXkFtZTcwMTc4ODUxOQ@@._V1_FMjpg_UX1000_.jpg",
  },
];



export const movies: Movie[] = [
  {
    id: "m1",
    slug: "inception",
    title: "Inception",
    shortDescription: "A thief who steals corporate secrets through dream-sharing technology.",
    description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage.",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
    duration: "2h 28m",
    durationMinutes: 148,
    director: "Christopher Nolan",
    writer: "Christopher Nolan",
    mainStars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    castSlugs: ["leonardo-dicaprio", "joseph-gordon-levitt", "elliot-page", "tom-hardy", "ken-watanabe", "dileep-rao", "cillian-murphy", "tom-berenger"],
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0?si=TIrnAZC5Pj-xKgnA",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/70131314"},
      {name: "HBO Max", url: "https://www.hbomax.com/mk/en/movie/14552c93-d318-4563-a00b-343df7e35d0b"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/inception/umc.cmc.6loas01ow0w4lkatxxloz7a6e"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0FFJSDLK6HUWC5T8XJUQODMFJ3"}
    ]
  },
  {
    id: "m2",
    slug: "oppenheimer",
    title: "Oppenheimer",
    shortDescription: "The story of American scientist J. Robert Oppenheimer and the atomic bomb.",
    description: "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a crucial role in the Manhattan Project and the development of the atomic bomb during World War II.",
    genre: "Drama",
    releaseYear: 2023,
    rating: 8.9,
    duration: "3h 00m",
    durationMinutes: 180,
    director: "Christopher Nolan",
    writer: "Christopher Nolan",
    mainStars: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    castSlugs: ["cillian-murphy", "florence-pugh"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/81602830"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/oppenheimer/umc.cmc.5gylew9icuhfiifdv3oxwxen8"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0TQ0HYSFFKAO9W3UUIOMSTPUJ7"}
    ]
  },
  {
    id: "m3",
    slug: "blade-runner-2049",
    title: "Blade Runner 2049",
    shortDescription: "A young Blade Runner discovers a long-buried secret that leads him to Rick Deckard.",
    description: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    genre: "Sci-Fi",
    releaseYear: 2017,
    rating: 8.0,
    duration: "2h 44m",
    durationMinutes: 164,
    director: "Denis Villeneuve",
    writer: "Hampton Fancher, Michael Green",
    mainStars: ["Harrison Ford", "Ryan Gosling", "Ana de Armas"],
    castSlugs: ["ryan-gosling"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
    trailerUrl: "https://www.youtube.com/embed/gCcx85zbxz4",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/80185760"},
      {name: "HBO Max", url: "https://www.hbomax.com/mk/en/movie/3e2754f6-8ee9-48ef-806d-bdf3f64b6243"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/blade-runner-2049/umc.cmc.6i5xn1k0lcpoj80xsfmqmthy1"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0QV7JGMMWTD5E67SJ4XPWGNKN5"}  
    ]
  },
  {
    id: "m4",
    slug: "john-wick",
    title: "John Wick",
    shortDescription: "An ex-hitman comes out of retirement to track down the gangsters that took everything.",
    description: "Legendary assassin John Wick retires from his violent career after marrying the love of his life. Her sudden death leaves John deeply grieving. When mobsters steal his car and kill his puppy, John unleashes an unstoppable vengeance.",
    genre: "Action",
    releaseYear: 2014,
    rating: 7.4,
    duration: "1h 41m",
    durationMinutes: 101,
    director: "Chad Stahelski",
    writer: "Derek Kolstad",
    mainStars: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
    castSlugs: ["keanu-reeves"],
    posterUrl: " https://static.wikia.nocookie.net/john-wick8561/images/d/d5/JW1_final_poster_release.jpg/revision/latest?cb=20231215021818",
    trailerUrl: "https://www.youtube.com/embed/C0BMx-qxsP4",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/80013762"},
      {name: "HBO Max", url: "https://www.hbomax.com/tr/en/movie/1ff1cc37-0986-4574-895e-5ad8033e3857"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/john-wick/umc.cmc.7bztxfm8c2y0g5888tox6ed3u"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0LTVC3IVCLW19Y51M3N6J31UX5"}  
    ]

  },
  {
    id: "m5",
    slug: "shutter-island",
    title: "Shutter Island",
    shortDescription: "A U.S. Marshal investigates the disappearance of a murderer from a hospital for the criminally insane.",
    description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane on Shutter Island, only to discover disturbing truths about the facility.",
    genre: "Thriller",
    releaseYear: 2010,
    rating: 8.2,
    duration: "2h 18m",
    durationMinutes: 138,
    director: "Martin Scorsese",
    writer: "Laeta Kalogridis",
    mainStars: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"],
    castSlugs: ["leonardo-dicaprio"],
    posterUrl: "https://play-lh.googleusercontent.com/jalongU-EtEyIVLHphasHtuoJML1ROTMFUXizvzGQ_zq2B0JBZYkcVLC7FUq61f9Yll9ClMzHfuXNUNx3w",
    trailerUrl: "https://www.youtube.com/embed/v8yrZSkKxTA?si=gZ32wg0T-Lwp-WrQ",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/70095139"},
      {name: "HBO Max", url: "https://www.hbomax.com/sg/en/movie/5f537ed4-c380-42cd-96e1-1a88b260842e"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/shutter-island/umc.cmc.1n432wlu275a0640043zypfsj"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0KUEJBI5KKASFJFEGJI1LRLV1K"}  
    ]
  },
  {
    id: "m6",
    slug: "dune-part-two",
    title: "Dune: Part Two",
    shortDescription: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.",
    genre: "Sci-Fi",
    releaseYear: 2024,
    rating: 8.6,
    duration: "2h 46m",
    durationMinutes: 166,
    director: "Denis Villeneuve",
    writer: "Denis Villeneuve, Jon Spaihts",
    mainStars: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    castSlugs: ["florence-pugh"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/81602836"},
      {name: "HBO Max", url: "https://www.hbomax.com/movie/f0a4f239-0b57-47e2-a39a-54fb96925e61"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/dune-part-two/umc.cmc.363aycnv6vy9qgekvew6fveb9"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0NW4P371MNSJ4Q6JS5KVBIDW8Q"}  
    ]
  },
  {
    id: "m7",
    slug: "get-out",
    title: "Get Out",
    shortDescription: "A young Black man visits his white girlfriend's family estate and uncovers a dark secret.",
    description: "Chris, a young African-American man, visits his white girlfriend's parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    genre: "Horror",
    releaseYear: 2017,
    rating: 7.7,
    duration: "1h 44m",
    durationMinutes: 104,
    director: "Jordan Peele",
    writer: "Jordan Peele",
    mainStars: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    castSlugs: ["daniel-kaluuya"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/DzfpyUB60YY",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/80149258"},
      {name: "HBO Max", url: "https://www.hbomax.com/id/en/movies/get-out/b1772951-17b7-4037-826c-4afc1a30b275"},
      {name: "Apple TV", url: "https://tv.apple.com/gb/movie/get-out/umc.cmc.2nh80sbq32nedy9rm09gtv8rb"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0I9VQV8TPDEL2MLX080A1JKN6X"}  
    ]
  },
  {
    id: "m8",
    slug: "the-notebook",
    title: "The Notebook",
    shortDescription: "An epic love story following a young couple through decades of passion and tragedy.",
    description: "In 1940s South Carolina, mill worker Noah Calhoun and rich girl Allie are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair, yet their bond remains unbroken.",
    genre: "Romance",
    releaseYear: 2004,
    rating: 7.8,
    duration: "2h 03m",
    durationMinutes: 123,
    director: "Nick Cassavetes",
    writer: "Jeremy Leven, Jan Sardi",
    mainStars: ["Gena Rowlands", "James Garner", "Rachel McAdams", "Ryan Gosling"],
    castSlugs: ["ryan-gosling", "rachel-mcadams"],
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPBAVjMoQL-dWCAZyPDiowQvEQmeAvkfHEyYMOfhowFbdsGXCuyMZhxy8&s=10",
    trailerUrl: "https://www.youtube.com/embed/BjJcYdEOI0k?si=NuOfDGIUzgc3itbh",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/60036227"},
      {name: "HBO Max", url: "https://www.hbomax.com/kn/en/movie/2635ac87-887a-4cc7-8dac-5ecf3270ac21"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/the-notebook/umc.cmc.2c4fe2l41ytc6uz845wyzxyb8"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0Q3BGO06JJV3U877CLAZWZDPLV"}  
    ]
  },
  {
    id: "m9",
    slug: "knives-out",
    title: "Knives Out",
    shortDescription: "A detective investigates the death of a patriarch of an eccentric, combative family.",
    description: "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies.",
    genre: "Mystery",
    releaseYear: 2019,
    rating: 7.9,
    duration: "2h 10m",
    durationMinutes: 130,
    director: "Rian Johnson",
    writer: "Rian Johnson",
    mainStars: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    castSlugs: ["ana-de-armas"],
    posterUrl: "https://play-lh.googleusercontent.com/AM5inzMp6vRqFbWfirofabTttd-30cGtvWh6o5b9Qx-LFE4ZOPBvxPubm2GEk8Xvj1dWz7wX9_prwsZAx9M",
    trailerUrl: "https://www.youtube.com/embed/gj5ibYSz8C0?si=ZpAyKgtjhdoX2CMi",
    watchProviders: [
      {name: "Netflix", url: "netflix.com/im/title/81037684"},
      {name: "HBO Max", url: "https://www.hbomax.com/se/en/movie/f91f813c-b593-410c-95eb-ecbf222f979e"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/knives-out/umc.cmc.21f7rjslttoalzd6o9c6cg5ml"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0P877V5ECWZCSNU6REXQ62QY1V"}  
    ]
  },
  {
    id: "m10",
    slug: "the-dark-knight",
    title: "The Dark Knight",
    shortDescription: "Batman accepts his greatest psychological and physical test against the Joker.",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: "Crime",
    releaseYear: 2008,
    rating: 9.0,
    duration: "2h 32m",
    durationMinutes: 152,
    director: "Christopher Nolan",
    writer: "Jonathan Nolan, Christopher Nolan",
    mainStars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    castSlugs: ["christian-bale", "cillian-murphy"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY?si=j0pBm6XLoTz_b6y4",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/70079583"},
      {name: "HBO Max", url: "https://www.hbomax.com/mk/en/movie/52217243-a137-45d6-9c6a-0dfab4633034"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/the-dark-knight/umc.cmc.1uf4c3neuc9yxhnjv7t4rd5wa"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0JKQMPWCE3RTK5TFZCSIC3H7XO"}  
    ]
  },
  {
    id: "m11",
    slug: "uncharted",
    title: "Uncharted",
    shortDescription: "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully.",
    description: "Street-smart fortune hunter Nathan Drake is recruited by seasoned treasure hunter Victor 'Sully' Sullivan to recover a fortune amassed by Ferdinand Magellan and lost 500 years ago by the House of Moncada.",
    genre: "Adventure",
    releaseYear: 2022,
    rating: 6.3,
    duration: "1h 56m",
    durationMinutes: 116,
    director: "Ruben Fleischer",
    writer: "Rafe Judkins, Art Marcum, Matt Holloway",
    mainStars: ["Tom Holland", "Mark Wahlberg", "Antonio Banderas"],
    castSlugs: ["tom-holland"],
    posterUrl: "https://thumb.wikimedia.org/wikipedia/en/thumb/d/d4/Uncharted_Official_Poster.jpg/250px-Uncharted_Official_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    trailerUrl: "https://www.youtube.com/embed/eHp3MbsCbMg?si=_801FGGpe_s17rCz",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/81199140"},
      {name: "HBO Max", url: "https://www.hbomax.com/be/en/movie/0188e3c1-8cc3-4d2b-b24d-1e7368de36f7"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/uncharted/umc.cmc.2d64rftybltx15kuj14hiss8q"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0IIEP2ET4GBYMGZX7CWBPBS9WM"}  
    ]
  },
  {
    id: "m12",
    slug: "dune-part-one",
    title: "Dune: Part One",
    shortDescription: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    genre: "Sci-Fi",
    releaseYear: 2021,
    rating: 8.0,
    duration: "2h 35m",
    durationMinutes: 155,
    director: "Denis Villeneuve",
    writer: "Jon Spaihts, Denis Villeneuve, Eric Roth",
    mainStars: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    castSlugs: ["timothee-chalamet", "zendaya"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailerUrl: "https://www.youtube.com/embed/n9xhJrPXop4?si=8JvM5_TGeHgZ3NXK",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/81199139"},
      {name: "HBO Max", url: "https://www.hbomax.com/movie/e7dc7b3a-a494-4ef1-8107-f4308aa6bbf7"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/dune/umc.cmc.2l7qj9p33t3jww1roxi8cgiw5"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0P3ONZ4IHQ75ZC4ZMIZ9D4NE7Q"}  
    ]
  },
  {
    id: "m13",
    slug: "barbie",
    title: "Barbie",
    shortDescription: "Barbie and Ken go on a journey of self-discovery after leaving Barbie Land.",
    description: "Stereotypical Barbie experiences an existential crisis that leads her to leave Barbie Land for the real world in search of answers, with Ken tagging along for the adventure.",
    genre: "Comedy",
    releaseYear: 2023,
    rating: 6.8,
    duration: "1h 54m",
    durationMinutes: 114,
    director: "Greta Gerwig",
    writer: "Greta Gerwig, Noah Baumbach",
    mainStars: ["Margot Robbie", "Ryan Gosling", "Issa Rae"],
    castSlugs: ["margot-robbie", "ryan-gosling"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/pBk4NYhWNMM?si=SufkbVP0l5H2V11B",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/80157969"},
      {name: "HBO Max", url: "https://www.hbomax.com/mk/en/movie/80bc4915-c826-499f-9961-b422b17559b6"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/barbie/umc.cmc.3u6lep5fj0lq4f4lvvrntr9rh"}
    ]
  },
  {
    id: "m14",
    slug: "nightcrawler",
    title: "Nightcrawler",
    shortDescription: "A driven man stumbles into the underground world of L.A. freelance crime journalism.",
    description: "When Louis Bloom, a driven man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.",
    genre: "Thriller",
    releaseYear: 2014,
    rating: 7.8,
    duration: "1h 57m",
    durationMinutes: 117,
    director: "Dan Gilroy",
    writer: "Dan Gilroy",
    mainStars: ["Jake Gyllenhaal", "Rene Russo", "Riz Ahmed"],
    castSlugs: ["jake-gyllenhaal"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/u1uP_8VJkDQ?si=HVieS0m9NHDZqvMm",
    watchProviders: [
      {name: "HBO Max", url: "https://www.hbomax.com/fr/en/movie/130a3280-93bf-4907-a6c9-de7daa8a8de7"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0QEA9A3TGB9RN6FPYZEKIGGOAZ"}  
    ]
  },
  {
    id: "m15",
    slug: "a-quiet-place",
    title: "A Quiet Place",
    shortDescription: "A family must navigate a post-apocalyptic world infested with blind, noise-hunting monsters.",
    description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing that hunt anything that makes a sound.",
    genre: "Horror",
    releaseYear: 2018,
    rating: 7.5,
    duration: "1h 30m",
    durationMinutes: 90,
    director: "John Krasinski",
    writer: "Bryan Woods, Scott Beck, John Krasinski",
    mainStars: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    castSlugs: ["emily-blunt"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/WR7cc5t7tv8?si=F2mnDHDN9o-yIn-Q",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/80213226"},
      {name: "HBO Max", url: "https://www.hbomax.com/ad/en/movie/a7ab07d3-6b85-4ede-92a4-6165c34ea01e"}
    ]
  },
  {
    id: "m16",
    slug: "midsommar",
    title: "Midsommar",
    shortDescription: "A couple travels to Sweden for a midsummer festival that quickly turns sinister.",
    description: "A grieving woman travels with her boyfriend and his friends to a rural Swedish festival, only to find themselves in the clutches of a sinister pagan cult.",
    genre: "Horror",
    releaseYear: 2019,
    rating: 7.1,
    duration: "2h 27m",
    durationMinutes: 147,
    director: "Ari Aster",
    writer: "Ari Aster",
    mainStars: ["Florence Pugh", "Jack Reynor", "Vilhelm Blomgren"],
    castSlugs: ["florence-pugh"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/47/Midsommar_%282019_film_poster%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/1Vnghdsjmd0?si=2aeoj2YsUwDzrRjF",
    watchProviders: [
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/midsommar/umc.cmc.3btmmnmdi8cci3gb2qupxli8o"}
    ]

  },
  {
    id: "m17",
    slug: "sherlock-holmes",
    title: "Sherlock Holmes",
    shortDescription: "Holmes and Watson engage in a battle of wits and brawn against a dark villain.",
    description: "Eccentric detective Sherlock Holmes and his trusted partner Dr. John Watson fight a new nemesis to unravel a deadly plot that could destroy England.",
    genre: "Mystery",
    releaseYear: 2009,
    rating: 7.6,
    duration: "2h 08m",
    durationMinutes: 128,
    director: "Guy Ritchie",
    writer: "Michael Robert Johnson, Anthony Peckham, Simon Kinberg",
    mainStars: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"],
    castSlugs: ["rachel-mcadams"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/J7nJksXDBWc?si=U58pK4DGhTFN50ct",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/70110558"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0FWLLL21CIF8ZXEYBDO5AHZUTO"}  
    ]

  },
  {
    id: "m18",
    slug: "the-lighthouse",
    title: "The Lighthouse",
    shortDescription: "Two lighthouse keepers try to maintain their sanity on a remote New England island.",
    description: "In the 1890s, two lighthouse keepers slowly descend into paranoia and madness while stranded on a remote, mysterious New England island during a relentless storm.",
    genre: "Horror",
    releaseYear: 2019,
    rating: 7.4,
    duration: "1h 49m",
    durationMinutes: 109,
    director: "Robert Eggers",
    writer: "Robert Eggers, Max Eggers",
    mainStars: ["Willem Dafoe", "Robert Pattinson", "Valeriia Karaman"],
    castSlugs: ["willem-dafoe", "timothee-chalamet"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/2c/The_Lighthouse.jpeg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/Hyag7lR8CPA?si=1bLzKixZDNrGX-g2",
    // watchProviders: [
    //   {name: "Netflix", url: "https://www.netflix.com/mk/title/81199139"},
    //   {name: "HBO Max", url: "https://www.hbomax.com/movie/e7dc7b3a-a494-4ef1-8107-f4308aa6bbf7"},
    //   {name: "Apple TV", url: "https://tv.apple.com/us/movie/dune/umc.cmc.2l7qj9p33t3jww1roxi8cgiw5"},
    //   {name: "Prime Video", url: "https://www.primevideo.com/detail/0P3ONZ4IHQ75ZC4ZMIZ9D4NE7Q"}  
    // ]

  },
  {
    id: "m19",
    slug: "fantastic-beasts-and-where-to-find-them",
    title: "Fantastic Beasts and Where to Find Them",
    shortDescription: "Magizoologist Newt Scamander arrives in 1920s New York with a suitcase full of magical creatures.",
    description: "In 1926, magizoologist Newt Scamander arrives in New York for a brief stopover. However, when a No-Maj named Jacob Kowalski inadvertently opens Newt's magic suitcase, several creatures escape and threaten the secret wizarding world.",
    genre: "Fantasy",
    releaseYear: 2016,
    rating: 7.2,
    duration: "2h 12m",
    durationMinutes: 132,
    director: "David Yates",
    writer: "J.K. Rowling",
    mainStars: ["Eddie Redmayne", "Katherine Waterston", "Alison Sudol"],
    castSlugs: ["eddie-redmayne"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/ViuDsy7yb8M?si=WJm6B1M7eZvebwEi",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/80111501"},
      {name: "HBO Max", url: "hbomax.com/movie/d627b35d-31a0-4e62-af14-6ec2fd8fdaef"}
    ]

  },
  {
    id: "m20",
    slug: "poor-things",
    title: "Poor Things",
    shortDescription: "The incredible tale of Bella Baxter, a young woman brought back to life by an eccentric scientist.",
    description: "Brought back to life by an unorthodox scientist, young Bella Baxter runs off with a debauched lawyer on a whirlwind adventure across continents, growing steadfast in her purpose to stand for equality and liberation.",
    genre: "Comedy",
    releaseYear: 2023,
    rating: 7.9,
    duration: "2h 21m",
    durationMinutes: 141,
    director: "Yorgos Lanthimos",
    writer: "Tony McNamara",
    mainStars: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"],
    castSlugs: ["willem-dafoe", "mark-ruffalo"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWU2MjRjZTYtMjVkMS00MTBjLWFiMTAtYmZlYTk1YjkyMWFkXkEyXkFqcGc@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/_klfx5sGzFk?si=uzpoYyTEhhWs09Xo",
    watchProviders: [
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/poor-things/umc.cmc.3mshuc064vnbpvdq7rl6d3lpf"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0OUCYU3AALHQG7YJ4PTC6S2LNM"}  
    ]

  },
  {
    id: "m21",
    slug: "the-prestige",
    title: "The Prestige",
    shortDescription: "Two rival stage magicians in Victorian London engage in a obsession-driven feud.",
    description: "After a tragic accident, two stage magicians in 1890s London engage in a desperate battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    genre: "Mystery",
    releaseYear: 2006,
    rating: 8.5,
    duration: "2h 10m",
    durationMinutes: 130,
    director: "Christopher Nolan",
    writer: "Jonathan Nolan, Christopher Nolan",
    mainStars: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
    castSlugs: ["christian-bale"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2Y0YmM5MWYtZTYzNi00ZjU5LTlmOGYtZDQ4ODQyMjAzNjQ2XkEyXkFqcGc@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/RLtaA9fFNXU?si=Bec2-cpBZExK-8Df",
    // watchProviders: [
    //   {name: "Netflix", url: "https://www.netflix.com/mk/title/81199139"},
    //   {name: "HBO Max", url: "https://www.hbomax.com/movie/e7dc7b3a-a494-4ef1-8107-f4308aa6bbf7"},
    //   {name: "Apple TV", url: "https://tv.apple.com/us/movie/dune/umc.cmc.2l7qj9p33t3jww1roxi8cgiw5"},
    //   {name: "Prime Video", url: "https://www.primevideo.com/detail/0P3ONZ4IHQ75ZC4ZMIZ9D4NE7Q"}  
    // ]
  },
  {
    id: "m22",
    slug: "interstellar",
    title: "Interstellar",
    shortDescription: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 8.7,
    duration: "2h 49m",
    durationMinutes: 169,
    director: "Christopher Nolan",
    writer: "Jonathan Nolan, Christopher Nolan",
    mainStars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    castSlugs: ["timothee-chalamet", "matt-damon"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E?si=Jb4MShyqTjgOivmu",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/70305903"},
      {name: "HBO Max", url: "https://www.hbomax.com/mk/mk/movie/aa5b9295-8f9c-44f5-809b-3f2b84badfbf"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/interstellar/umc.cmc.1vrwat5k1ucm5k42q97ioqyq3"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0JSKG1O0EEAOXX5WQA0RN7Y9C1"}  
    ]
  },
  {
    id: "m23",
    slug: "alien",
    title: "Alien",
    shortDescription: "The crew of a commercial spacecraft encounters a deadly lifeform on an uncharted planet.",
    description: "After a space merchant vessel receives an unknown transmission as a distress signal, one of the crew is attacked by a mysterious lifeform and they soon realize that its life cycle has merely begun.",
    genre: "Horror",
    releaseYear: 1979,
    rating: 8.5,
    duration: "1h 57m",
    durationMinutes: 117,
    director: "Ridley Scott",
    writer: "Dan O'Bannon",
    mainStars: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
    castSlugs: ["sigourney-weaver"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/jQ5lPt9edzQ?si=l5_3yM23J9ArXnpR",
    // watchProviders: [
    //   {name: "Netflix", url: "https://www.netflix.com/mk/title/81199139"},
    //   {name: "HBO Max", url: "https://www.hbomax.com/movie/e7dc7b3a-a494-4ef1-8107-f4308aa6bbf7"},
    //   {name: "Apple TV", url: "https://tv.apple.com/us/movie/dune/umc.cmc.2l7qj9p33t3jww1roxi8cgiw5"},
    //   {name: "Prime Video", url: "https://www.primevideo.com/detail/0P3ONZ4IHQ75ZC4ZMIZ9D4NE7Q"}  
    // ]
  },
  {
    id: "m24",
    slug: "se7en",
    title: "Se7en",
    shortDescription: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives in a dark, rain-soaked city.",
    genre: "Crime",
    releaseYear: 1995,
    rating: 8.6,
    duration: "2h 07m",
    durationMinutes: 127,
    director: "David Fincher",
    writer: "Andrew Kevin Walker",
    mainStars: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
    castSlugs: ["brad-pitt", "morgan-freeman"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/KPOuJGkpblk?si=fSVzpNlOQ6q32HWu",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/950149"},
      {name: "HBO Max", url: "https://www.hbomax.com/ag/en/movie/b2af0887-65de-4911-ba0d-b23d94dd37b7"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/seven/umc.cmc.22qs2aqmay2k78k4ne4y9br2c"},
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0KEKSUA04N2G90A8JKW6FO725I"}  
    ]
  },
  {
    id: "m25",
    slug: "jurassic-park",
    title: "Jurassic Park",
    shortDescription: "A pragmatic paleontologist visiting an island theme park is tasked with protecting kids after a power failure.",
    description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting two kids after a power failure causes the park's cloned dinosaurs to run loose.",
    genre: "Adventure",
    releaseYear: 1993,
    rating: 8.2,
    duration: "2h 07m",
    durationMinutes: 127,
    director: "Steven Spielberg",
    writer: "Michael Crichton, David Koepp",
    mainStars: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    castSlugs: ["sam-neill", "laura-dern"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/_jKEqDKpJLw?si=66QYneM7yrHg6fJX",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/60002360"},
      {name: "HBO Max", url: "https://www.hbomax.com/bs/en/movie/f24a4ece-2f3d-4919-a934-700d1ef8f7a2"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/jurassic-park/umc.cmc.3bp8rj8ab9otj4ug279xhib2f"}
    ]
  },
  {
    id: "m26",
    slug: "prisoners",
    title: "Prisoners",
    shortDescription: "When two young girls go missing, a desperate father takes matters into his own hands.",
    description: "When Keller Dover's six-year-old daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    genre: "Mystery",
    releaseYear: 2013,
    rating: 8.1,
    duration: "2h 33m",
    durationMinutes: 153,
    director: "Denis Villeneuve",
    writer: "Aaron Guzikowski",
    mainStars: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"],
    castSlugs: ["jake-gyllenhaal", "hugh-jackman"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/63/Prisoners2013Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/bpXfcTF6iVk?si=Q_aOMcbxXb14zQE6",
    watchProviders: [
      {name: "HBO Max", url: "https://www.hbomax.com/be/en/movie/79c8eae0-7078-45b7-9987-ea1971a487f6"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/prisoners/umc.cmc.7fxny3aaxgkm020pguu5gmxaw"}
    ]
  },
  {
    id: "m27",
    slug: "hereditary",
    title: "Hereditary",
    shortDescription: "A grieving family is haunted by tragic and disturbing occurrences after their grandmother dies.",
    description: "When the matriarch of the Graham family passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
    genre: "Horror",
    releaseYear: 2018,
    rating: 7.3,
    duration: "2h 07m",
    durationMinutes: 127,
    director: "Ari Aster",
    writer: "Ari Aster",
    mainStars: ["Toni Collette", "Milly Shapiro", "Alex Wolff"],
    castSlugs: ["toni-collette"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/V6wWKNij_1M?si=686VKXX_1ni93nUT",
    watchProviders: [
      {name: "Prime Video", url: "https://www.primevideo.com/detail/0QC60V3WUAY85I3QN9U2UDAPIA"}  
    ]
  },
  {
    id: "m28",
    slug: "la-la-land",
    title: "La La Land",
    shortDescription: "A pianist and an actress fall in love while pursuing their dreams in Los Angeles.",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    genre: "Romance",
    releaseYear: 2016,
    rating: 8.0,
    duration: "2h 08m",
    durationMinutes: 128,
    director: "Damien Chazelle",
    writer: "Damien Chazelle",
    mainStars: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    castSlugs: ["ryan-gosling", "emma-stone"],
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    trailerUrl: "https://www.youtube.com/embed/0pdqf4P9MB8?si=uN8J3uGWAxkoAlZg",
    watchProviders: [
      {name: "Netflix", url: "https://www.netflix.com/mk/title/80095365"},
      {name: "HBO Max", url: "https://www.hbomax.com/be/en/movie/448f80fb-1b0e-485a-8d20-89fce4f88301"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/la-la-land/umc.cmc.2ls5rdvvy1t038my1urkcjt94"}
    ]
  },
  {
    id: "m29",
    slug: "the-silence-of-the-lambs",
    title: "The Silence of the Lambs",
    shortDescription: "A young FBI cadet seeks the help of an incarcerated cannibalistic killer to catch another murderer.",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibalistic killer to help catch another serial killer, a madman who skins his victims.",
    genre: "Crime",
    releaseYear: 1991,
    rating: 8.6,
    duration: "1h 58m",
    durationMinutes: 118,
    director: "Jonathan Demme",
    writer: "Ted Tally",
    mainStars: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    castSlugs: ["jodie-foster", "anthony-hopkins"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/6iB21hsprAQ?si=hl_kyO7aQ5JwGdOF",
    watchProviders: [
      {name: "HBO Max", url: "https://www.hbomax.com/tr/en/movie/b79674a9-8abe-4da6-b471-b55013501beb"},
      {name: "Apple TV", url: "https://tv.apple.com/us/movie/the-silence-of-the-lambs/umc.cmc.vo1hrvp25kr64fq8irp5jx75"}
    ]
  },
];

export function getAllMovies(): Movie[] {
  return movies;
}
export function getMovieBySlug(slug: string): Movie | undefined {
  return movies.find((m) => m.slug === slug);
}


export function getAllActors(): Actor[] {
  return actors;
}
export function getActorBySlug(slug: string): Actor | undefined {
  return actors.find((a) => a.slug === slug);
}


// Функција за наоѓање на сите филмови во кои глуми еден актер
export function getMoviesByActor(actorSlug: string): Movie[] {
  return movies.filter((m) => m.castSlugs.includes(actorSlug));
}

// Функција за наоѓање на сите актери што глумат во еден филм
export function getActorsForMovie(movie: Movie): Actor[] {
  return actors.filter((a) => movie.castSlugs.includes(a.slug));
}

export function getMovieGenres(): string[] {
  return Array.from(new Set(movies.map((m) => m.genre))).sort();
}

export function getMovieYears(): number[] {
  return Array.from(new Set(movies.map((m) => m.releaseYear))).sort((a, b) => b - a);
}

export function getMovieRatings(): MovieRatingLevel[] {
  return MOVIE_RATINGS;
}

export function getMovieDurations(): MovieDuration[] {
  return MOVIE_DURATIONS;
}

export function getTotalPages(): number {
  return Math.ceil(movies.length / MOVIES_PER_PAGE);
}


// Оваа функција треба да враќа НИЗА ОД ФИЛМОВИ, затоа Movies[] - а не стрингови
export function searchMovies(query: string): Movie[] {
  const normalizedQuery = query.toLowerCase();

  // Проверува дали normalizedQuery е празен текст "" - ако е, врати ги сите филмови
  if(!normalizedQuery) {
    return movies; // врати ги сите филмови ако нема query
  }

  return movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(normalizedQuery);

    // star - privremen parametar
    const matchesActor = movie.mainStars.some((star) => 
      star.toLowerCase().includes(normalizedQuery)
    );

    return matchesTitle || matchesActor;

  });
}

  