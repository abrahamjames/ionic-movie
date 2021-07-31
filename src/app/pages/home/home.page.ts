/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  movies: any[];
  tmdbImage = 'https://image.tmdb.org/t/p';
  constructor() { }
  ngOnInit() {
    this.movies = data;
  }
}

const data = [
  {
  adult: false,
  backdrop_path: '/8s4h9friP6Ci3adRGahHARVd76E.jpg',
  genre_ids: [
  16,
  35,
  10751,
  878
  ],
  id: 379686,
  original_language: 'en',
  original_title: 'Space Jam: A New Legacy',
  overview: 'When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.\'s digitized champions on the court. It\'s Tunes versus Goons in the highest-stakes challenge of his life.',
  popularity: 4903.282,
  poster_path: '/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
  release_date: '2021-07-08',
  title: 'Space Jam: A New Legacy',
  video: false,
  vote_average: 7.8,
  vote_count: 1302
  },
  {
  adult: false,
  backdrop_path: '/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg',
  genre_ids: [
  28,
  12,
  53,
  878
  ],
  id: 497698,
  original_language: 'en',
  original_title: 'Black Widow',
  overview: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
  popularity: 4278.717,
  poster_path: '/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
  release_date: '2021-07-07',
  title: 'Black Widow',
  video: false,
  vote_average: 7.9,
  vote_count: 3442
  },
  {
  adult: false,
  backdrop_path: '/tehpKMsls621GT9WUQie2Ft6LmP.jpg',
  genre_ids: [
  12,
  53,
  28,
  27,
  37
  ],
  id: 602223,
  original_language: 'en',
  original_title: 'The Forever Purge',
  overview: 'All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.',
  popularity: 3782.121,
  poster_path: '/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg',
  release_date: '2021-06-30',
  title: 'The Forever Purge',
  video: false,
  vote_average: 7.8,
  vote_count: 632
  },
  {
  adult: false,
  backdrop_path: '/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg',
  genre_ids: [
  16,
  35,
  12,
  10751
  ],
  id: 459151,
  original_language: 'en',
  original_title: 'The Boss Baby: Family Business',
  overview: 'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
  popularity: 3300.516,
  poster_path: '/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg',
  release_date: '2021-07-01',
  title: 'The Boss Baby: Family Business',
  video: false,
  vote_average: 7.9,
  vote_count: 945
  },
  {
  adult: false,
  backdrop_path: '/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg',
  genre_ids: [
  28,
  878
  ],
  id: 588228,
  original_language: 'en',
  original_title: 'The Tomorrow War',
  overview: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.',
  popularity: 2593.194,
  poster_path: '/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg',
  release_date: '2021-06-30',
  title: 'The Tomorrow War',
  video: false,
  vote_average: 8.2,
  vote_count: 2938
  },
  {
  adult: false,
  backdrop_path: '/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
  genre_ids: [
  16,
  35,
  10751,
  14
  ],
  id: 508943,
  original_language: 'en',
  original_title: 'Luca',
  overview: 'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
  popularity: 2544.638,
  poster_path: '/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
  release_date: '2021-06-17',
  title: 'Luca',
  video: false,
  vote_average: 8.1,
  vote_count: 3287
  },
  {
  adult: false,
  backdrop_path: '/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg',
  genre_ids: [
  878,
  28,
  53
  ],
  id: 581726,
  original_language: 'en',
  original_title: 'Infinite',
  overview: 'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.',
  popularity: 1944.76,
  poster_path: '/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
  release_date: '2021-06-10',
  title: 'Infinite',
  video: false,
  vote_average: 7.3,
  vote_count: 545
  },
  {
  adult: false,
  backdrop_path: '/iJ2HVOZT9Kjayrhy21pbGIJs9ey.jpg',
  genre_ids: [
  28,
  12,
  14
  ],
  id: 525660,
  original_language: 'cn',
  original_title: '真·三国无双',
  overview: 'Warlords, warriors and statesmen wage a battle for supremacy in this fantasy tale based on the hit video games and the "Romance of the Three Kingdoms."',
  popularity: 1670.697,
  poster_path: '/7BCTdek5LFHglcgl7shsm7igJAH.jpg',
  release_date: '2021-04-29',
  title: 'Dynasty Warriors',
  video: false,
  vote_average: 6.5,
  vote_count: 44
  },
  {
  adult: false,
  backdrop_path: '/zm2kMjiz0u6qdn2XKbEbQkDiltN.jpg',
  genre_ids: [
  27
  ],
  id: 675024,
  original_language: 'es',
  original_title: 'El exorcismo de Carmen Farías',
  overview: 'Carmen, a brave journalist, discovers soon after her mother\'s death that she has inherited her grandma\'s house. She decides to move there without knowing it hides dark secrets.',
  popularity: 1526.693,
  poster_path: '/npgnoXFg4qvzMZFbIMLYrIZnxiv.jpg',
  release_date: '2021-07-05',
  title: 'The Exorcism of Carmen Farias',
  video: false,
  vote_average: 7,
  vote_count: 28
  },
  {
  adult: false,
  backdrop_path: '/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg',
  genre_ids: [
  28,
  12,
  80,
  53
  ],
  id: 385128,
  original_language: 'en',
  original_title: 'F9',
  overview: 'Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they\'ve ever encountered: his forsaken brother.',
  popularity: 1525.557,
  poster_path: '/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
  release_date: '2021-05-19',
  title: 'F9',
  video: false,
  vote_average: 7.5,
  vote_count: 766
  },
  {
  adult: false,
  backdrop_path: '/70AV2Xx5FQYj20labp0EGdbjI6E.jpg',
  genre_ids: [
  80,
  28,
  53
  ],
  id: 637649,
  original_language: 'en',
  original_title: 'Wrath of Man',
  overview: 'A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman\'s ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.',
  popularity: 1523.59,
  poster_path: '/M7SUK85sKjaStg4TKhlAVyGlz3.jpg',
  release_date: '2021-04-22',
  title: 'Wrath of Man',
  video: false,
  vote_average: 7.9,
  vote_count: 1601
  },
  {
  adult: false,
  backdrop_path: '/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
  genre_ids: [
  35,
  80
  ],
  id: 337404,
  original_language: 'en',
  original_title: 'Cruella',
  overview: 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
  popularity: 1398.193,
  poster_path: '/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
  release_date: '2021-05-26',
  title: 'Cruella',
  video: false,
  vote_average: 8.4,
  vote_count: 4392
  },
  {
  adult: false,
  backdrop_path: '/x9p2syPxeK2OYCpz35fsg0EFjlG.jpg',
  genre_ids: [
  16,
  35
  ],
  id: 834404,
  original_language: 'en',
  original_title: 'Teen Titans Go! See Space Jam',
  overview: 'The Teen Titans are visited by the Nerdlucks, the Space Jam villains who tried to capture Michael Jordan and the Looney Tunes. Astonished to discover his fellow Titans have never seen Space Jam, Cyborg organizes an exclusive watch party. Of course, if the Titans are watching a movie, don\'t expect silence to be golden. Raven and Starfire provide the commentary, Cyborg presents the fun facts, Beast Boy points out the butt shots, and Robin, but Robin doesn\'t trust their new alien friends. Are the Nerdlucks here to attend an innocent watch party, or do they have more sinister motives up their sleeves?',
  popularity: 1379.654,
  poster_path: '/rMoVOCw6DF3zC6hS76ZhQMWiXNX.jpg',
  release_date: '2021-06-20',
  title: 'Teen Titans Go! See Space Jam',
  video: false,
  vote_average: 7.1,
  vote_count: 71
  },
  {
  adult: false,
  backdrop_path: '/5HjzYTihkH7EvOWSE7KcsF6pBMM.jpg',
  genre_ids: [
  10751,
  35,
  12,
  16,
  14
  ],
  id: 522478,
  original_language: 'en',
  original_title: 'Peter Rabbit 2: The Runaway',
  overview: 'Bea, Thomas, and the rabbits have created a makeshift family, but despite his best efforts, Peter can’t seem to shake his mischievous reputation. Adventuring out of the garden, Peter finds himself in a world where his mischief is appreciated, but when his family risks everything to come looking for him, Peter must figure out what kind of bunny he wants to be.',
  popularity: 1357.862,
  poster_path: '/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg',
  release_date: '2021-03-25',
  title: 'Peter Rabbit 2: The Runaway',
  video: false,
  vote_average: 7.3,
  vote_count: 207
  },
  {
  adult: false,
  backdrop_path: '/zsH3iW60T1t2HBTtrSKzzxJ406J.jpg',
  genre_ids: [
  16,
  35,
  10751
  ],
  id: 846214,
  original_language: 'en',
  original_title: 'The Simpsons: The Good, the Bart, and the Loki',
  overview: 'Loki is banished from Asgard once again and must face his toughest opponents yet: the Simpsons and Springfield’s mightiest heroes. The God of Mischief teams up with Bart Simpson in the ultimate crossover event paying tribute to the Marvel Cinematic Universe of superheroes and villains.',
  popularity: 1297.896,
  poster_path: '/rtMdtzywcAGOrF6t8fbxJBqpdcq.jpg',
  release_date: '2021-07-07',
  title: 'The Simpsons: The Good, the Bart, and the Loki',
  video: false,
  vote_average: 8,
  vote_count: 299
  },
  {
  adult: false,
  backdrop_path: '/3OwaKVZf3A2NdnarqKbwzFEhKir.jpg',
  genre_ids: [
  16,
  14,
  10751,
  28,
  12,
  878
  ],
  id: 730840,
  original_language: 'en',
  original_title: 'Trollhunters: Rise of the Titans',
  overview: 'Arcadia may look like an ordinary town, but it lies at the center of magical and mystical lines that makes it a nexus for many battles among otherworldly creatures, including trolls, aliens, and wizards. Now, various heroes will team-up in an epic adventure where they must fight the Arcane Order for control over the magic that binds them all together.',
  popularity: 1293.533,
  poster_path: '/zvUNFeTz0Sssb210wSiIiHRjA4W.jpg',
  release_date: '2021-07-21',
  title: 'Trollhunters: Rise of the Titans',
  video: false,
  vote_average: 7.9,
  vote_count: 88
  },
  {
  adult: false,
  backdrop_path: '/AsqUSUqXrK8JfH8WEQnCXVbIAv6.jpg',
  genre_ids: [
  878,
  53,
  27
  ],
  id: 520763,
  original_language: 'en',
  original_title: 'A Quiet Place Part II',
  overview: 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
  popularity: 1155.656,
  poster_path: '/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
  release_date: '2021-05-21',
  title: 'A Quiet Place Part II',
  video: false,
  vote_average: 7.7,
  vote_count: 2204
  },
  {
  adult: false,
  backdrop_path: '/3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg',
  genre_ids: [
  18,
  878,
  53
  ],
  id: 615658,
  original_language: 'en',
  original_title: 'Awake',
  overview: 'After a sudden global event wipes out all electronics and takes away humankind’s ability to sleep, chaos quickly begins to consume the world. Only Jill, an ex-soldier with a troubled past, may hold the key to a cure in the form of her own daughter. The question is, can Jill safely deliver her daughter and save the world before she herself loses her mind.',
  popularity: 1153.316,
  poster_path: '/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg',
  release_date: '2021-06-09',
  title: 'Awake',
  video: false,
  vote_average: 6.1,
  vote_count: 555
  },
  {
  adult: false,
  backdrop_path: '/c0izdYdnTe4uMRifHgvTA85wPz0.jpg',
  genre_ids: [
  28,
  80,
  27
  ],
  id: 503736,
  original_language: 'en',
  original_title: 'Army of the Dead',
  overview: 'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.',
  popularity: 1025.305,
  poster_path: '/z8CExJekGrEThbpMXAmCFvvgoJR.jpg',
  release_date: '2021-05-14',
  title: 'Army of the Dead',
  video: false,
  vote_average: 6.4,
  vote_count: 2023
  },
  {
  adult: false,
  backdrop_path: '/ok7RdHhVngnwkvKj09tvtOvypG.jpg',
  genre_ids: [
  80,
  18,
  53,
  9648
  ],
  id: 649409,
  original_language: 'en',
  original_title: 'No Sudden Move',
  overview: 'A group of criminals are brought together under mysterious circumstances and have to work together to uncover what\'s really going on when their simple job goes completely sideways.',
  popularity: 991.344,
  poster_path: '/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg',
  release_date: '2021-06-24',
  title: 'No Sudden Move',
  video: false,
  vote_average: 6.6,
  vote_count: 134
  }
  ];
