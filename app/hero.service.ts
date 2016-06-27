import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	getHero(id: number) {
		return this.getHeroes()
			.then(heroes => heroes.filter(heroe => heroe.id === id)[0]);
	}
	// Only used for simulating slow server
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}
}


