import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';

export interface Coordinates {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
	color: string;
}

export default class CustomMap {
	private map: Map;

	constructor(divId: string) {
		this.map = new Map({
			target: divId,
			layers: [
				new TileLayer({
					source: new OSM()
				})
			],
			view: new View({
				center: [0, 0],
				zoom: 0
			})
		})
	}

	addMarker(coordinates: Coordinates): void {
		console.log(coordinates.markerContent())

		const layer = new VectorLayer({
			source: new VectorSource({
				features: [
					new Feature({
						geometry: new Point(fromLonLat([coordinates.location.lat, coordinates.location.lng]))
					})
				]
			})
		});

		this.map.addLayer(layer);
	}
}