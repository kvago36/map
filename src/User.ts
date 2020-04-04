import faker from 'faker'

import { Coordinates } from './Map'

class User implements Coordinates {
	name: string;
	location: {
		lat: number;
		lng: number;
	}
	color: string = 'red'

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}

	markerContent(): string {
		return `User name: ${this.name}`
	}
}

export default User