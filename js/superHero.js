class superHeroMovies {

	isSequel = true;
    isStreamed = true;

	constructor() {
		this.isSequel = isSequel;
        this.isStreamed = isStreamed;
		this.nameOfMovie = nameOfMovie;
        this.releaseDate = releaseDate;
		this.catergory = catergory;
		this.runtimeMinutes = runtime;
		this.cast = cast;
		this.ratingIMBD = ratingIMBD;

    }

	getIsSequel() {
		return this.isSequel;
	}

	getIsStreamed() {
		return this.isStreamed;
	}

    getName() {
        return this.nameOfMovie;
    }

    getreleaseDate() {
        return this.releaseDate;
    }

    getCategory() {
        return this.catergory;
    }

    getRuntimeMinutes() {
        return this.runtimeMinutes;
    }

    getCast() {
        return this.cast;
    }

    getratingIMBD() {
        return this.ratingIMBD;
    }

	static getClassDescription() {
		return "This is the super movies class and it allows you to get properrties of superhero movies";
	}

}

const spidermanHomecomingProps = {
    isSequel: true,
    isStreamed: true,
	nameOfMovie: 'Spiderman Homecoming',
	releaseDate: 'July 7, 2017',
	catergory: 'Finction',
	runtime: 133,
	cast: 'Tom Holland as Peter Parker / Spider-Man, Michael Keaton as Adrian Toomes / Vulture, Jon Favreau as Harold "Happy" Hogan, Gwyneth Paltrow as Pepper Potts, Zendaya as Michelle, Donald Glover as Aaron Davis, Jacob Batalon as Ned, Laura Harrier as Liz, Tony Revolori as Eugene "Flash" Thompson, Bokeem Woodbine as Herman Schultz / Shocker II, Tyne Daly as Anne Marie Hoag, Marisa Tomei as May Parker, Robert Downey Jr. as Tony Stark / Iron Man',
	ratingIMBD: '7.4 / 10'
};

const spidermanHomecomingMovie = new superHeroMovies(spidermanHomecomingProps);

console.log(
	'Is Spiderman Homecoming available on streaming services?',
	spidermanHomecomingMovie.getIsStreamed(),
	'Is Spiderman Homecoming a Sequel?',
	spidermanHomecomingMovie.getIsSequel(),
);

// Extending the superHeroMovies class

class dcSuperHeroMovies extends superHeroMovies {
	getIsStreamed() {
		return true;
	}
}

const zackSnydersJusticeLeagueMovieProps = {
	isSequel: false,
    isStreamed: true,
	nameOfMovie: 'Zack Snyders Justice League',
	releaseDate: 'March 18, 2021',
	catergory: 'Finction',
	runtimeMinutes: 242,
	cast: 'Jared Leto : The Joker, Henry Cavill : Superman / Clark Kent, Amber Heard : Mera, Gal Gadot : Wonder Woman / Diana Prince, Ben Affleck : Batman / Bruce Wayne, Amy Adams : Lois Lane, Jason Momoa : Aquaman / Arthur Curry, Connie Nielsen : Queen Hippolyta,  Robin Wright : Antiope, Diane Lane : Martha Kent, Ezra Miller : The Flash / Barry Allen, Ciarán Hinds : Steppenwolf, Joe Manganiello : Deathstroke,, J.K. Simmons : Commissioner Gordon, Willem Dafoe : N / A, Jesse Eisenberg :	Lex Luthor, Jeremy Irons : Alfred Pennyworth, Samantha Win : Euboea, Kiersey Clemons : Iris West, Harry Lennix : Swanwick / Martian Manhunter, Ray Fisher : Cyborg / Victor Stone, Joe Morton : Silas Stone, Ray Porter : Darkseid, Peter Guinness : DeSaad, Mark Arnold0 :	Containment Centre Scientist, Swaylee Loughnane : Cop, Ann Ogbomo : Philippus, Gianpiero Cognoli : Central City Prison Guard, Andrew G. Ogleby : GCU Pitchside Cameraman, Sam Weeks : Football Fan',
    //please forgive me again
    ratingIMBD: '7.4 / 10'
};

const zackSnydersJusticeLeagueMovie = new dcSuperHeroMovies(zackSnydersJusticeLeagueMovieProps);

console.log(
	'Is Zack Snyders Justice League available on streaming services?',
	zackSnydersJusticeLeagueMovie.getIsStreamed(),
	'Is Zack Snyders Justice League a Sequel?',
	zackSnydersJusticeLeagueMovie.getIsSequel(), 'and yes it will be alot better and I will dedicate and cast aside my day to watch this movie when it releases, so no coding'
);