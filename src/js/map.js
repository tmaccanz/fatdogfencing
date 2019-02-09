
export default function mapModule (){

	const mapsapi = require("google-maps-api")("AIzaSyBMrBP0irD3XSwAUHbK5t8Mckz6KD7FWlg");

	mapsapi().then( function(maps) {
		const map = new google.maps.Map(document.getElementById("map"), {
			zoom: 10,
			center: {
				lat: -37.692499,
				lng: 176.175315
			}
		});

		setMarkers(map);
	});

	const fences = [

		["Fatdog Fencing", -37.679322, 176.167573, 30],
		["Fatdog Fencing", -37.707032, 176.158646, 29],
		["Fatdog Fencing", -37.715724, 176.177186, 28],
		["Fatdog Fencing", -37.743963, 176.166886, 27],
		["Fatdog Fencing", -37.744506, 176.176156, 26],
		["Fatdog Fencing", -37.680137, 176.122941, 25],
		["Fatdog Fencing", -37.682039, 176.111268, 24],
		["Fatdog Fencing", -37.736090, 176.112641, 23],
		["Fatdog Fencing", -37.737176, 176.105088, 22],
		["Fatdog Fencing", -37.730931, 176.101998, 21],
		["Fatdog Fencing", -37.754550, 176.108178, 20],
		["Fatdog Fencing", -37.833906, 176.057366, 19],
		["Fatdog Fencing", -37.831736, 176.128777, 18],
		["Fatdog Fencing", -37.792136, 176.187142, 17],
		["Fatdog Fencing", -37.632979, 176.046036, 16],
		["Fatdog Fencing", -37.640592, 176.030243, 15],
		["Fatdog Fencing", -37.643582, 176.023034, 14],
		["Fatdog Fencing", -37.645757, 176.036767, 13],
		["Fatdog Fencing", -37.653912, 176.027840, 12],
		["Fatdog Fencing", -37.680001, 176.230401, 11],
		["Fatdog Fencing", -37.673480, 176.227654, 10],
		["Fatdog Fencing", -37.680001, 176.235894, 9],
		["Fatdog Fencing", -37.697389, 176.261986, 8],
		["Fatdog Fencing", -37.707168, 176.303185, 7],
		["Fatdog Fencing", -37.718032, 176.334771, 6],
		["Fatdog Fencing", -38.109693, 176.225594, 5],
		["Fatdog Fencing", -38.138322, 176.226967, 4],
		["Fatdog Fencing", -38.141022, 176.244820, 3],
		["Fatdog Fencing", -38.131301, 176.293572, 2],
		["Fatdog Fencing", -37.773414, 176.499566, 1]
	];

	function setMarkers(map) {

		const image = {

			url: "/images/dog-marker.png",
			size: new google.maps.Size(60, 43),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 0),
		};

		const shape = {
				coords: [1, 1, 1, 20, 18, 20, 18, 1],
				type: "poly"
		};

		for (let i = 0; i < fences.length; i++) {
			const fence = fences[i];
			const marker = new google.maps.Marker({

				position: {
					lat: fence[1],
					lng: fence[2]
				},
					map: map,
					icon: image,
					shape: shape,
					title: fence[0],
					zIndex: fence[3]
			});
		}
	}
};