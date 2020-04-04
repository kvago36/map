import faker from 'faker'

import { Coordinates } from './Map'

export default class Company implements Coordinates{
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	}
	color: string = 'blue'

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}

	markerContent(): string {
		return `
			<div>
				<h1>Company name: ${this.companyName}</h1>
				<h3>CatchPhrase: ${this.catchPhrase}</h3>
			</div>
		`
	}
}