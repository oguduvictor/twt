var app = new Vue({
    el: '#watchtower',
    data: {
    	map: null,
        search: '',
    	active: null,
        projects: [{
        	id: 0,
        	title: "Dualization of Lokoja-Benin Road (Obajana Junction Benin) Section 1 in Kogi State",
        	milestones: 5,
        	milestones_completed: 3,
        	percent_completion: 60,
        	funds_disbursed: '1,259,836,471.46',
        	state: "Kogi",
        	image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
        	lat: 7.9074,
        	long: 6.5783
        }, {
        	id: 1,
        	title: "Akure-Ilesa Road",
        	milestones: 10,
        	milestones_completed: 2,
        	percent_completion: 20,
        	funds_disbursed: '319,836,471.46',
        	state: "Ondo",
        	image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
        	lat: 7.2571,
        	long: 5.2058
        }, {
            id: 2,
            title: "Rehabilatation of Zaria-Gusau-Sokoto-Birnin Kebbi Road",
            milestones: 12,
            milestones_completed: 6,
            percent_completion: 50,
            funds_disbursed: '679,836,471.46',
            state: "Zamfara",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 12.16284,
            long: 6.6745
        }, {
            id: 3,
            title: "Tambuwal Road in Sokoto State",
            milestones: 8,
            milestones_completed: 2,
            percent_completion: 25,
            funds_disbursed: '919,996,461.46',
            state: "Sokoto",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 13.00587,
            long: 5.24755
        }, {
            id: 4,
            title: "Dualization of Kano-maiduguri Road(Section Iii : Azare-potiskum Road)",
            milestones: 20,
            milestones_completed: 16,
            percent_completion: 80,
            funds_disbursed: '699,836,983.46',
            state: "Kano",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 12.00217,
            long: 8.59195
        }, {
            id: 5,
            title: "Affordable Private Sector Housing Development in Luvu-madaki, Nasarawa State",
            milestones: 10,
            milestones_completed: 9,
            percent_completion: 90,
            funds_disbursed: '123,536,471.46',
            state: "Nassarawa",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 8.50601,
            long: 8.52267
        }, {
            id: 6,
            title: "Emergency Repair of the Collapsed Deck Slab of Jaji Bridge along Kaduna-Zaria Road in Kaduna State",
            milestones: 12,
            milestones_completed: 9,
            percent_completion: 75,
            funds_disbursed: '1,219,836,471.46',
            state: "Kaduna",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 10.51046,
            long: 7.4165
        }, {
            id: 7,
            title: "Kashimbila  40mw Hydro Power Plant in Taraba State",
            milestones: 10,
            milestones_completed: 2,
            percent_completion: 20,
            funds_disbursed: '2,389,836,471.46',
            state: "Taraba",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 8.89285,
            long: 11.37714
        }, {
            id: 8,
            title: "Lagos and Ogun Monitor Flow of Traffic on Lagos-Ibadan Expressway",
            milestones: 8,
            milestones_completed: 6,
            percent_completion: 75,
            funds_disbursed: '891,836,471.46',
            state: "Ogun",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 7.1453,
            long: 3.35904
        }, {
            id: 9,
            title: "Newly Commissioned Pedestrian Bridges Within FCT",
            milestones: 12,
            milestones_completed: 6,
            percent_completion: 50,
            funds_disbursed: '2,132,233,711.34',
            state: "Federal Capital Territory",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 9.07647,
            long: 7.39857
        }, {
            id: 10,
            title: "Official Commissioning of NIPP 330kv Switching Station",
            milestones: 10,
            milestones_completed: 7,
            percent_completion: 70,
            funds_disbursed: '439,636,971.46',
            state: "Akwa Ibom",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 5.03773,
            long: 7.91279
        }, {
            id: 11,
            title: "Ongoing Dualization of Sapele-Agbor-Ewu Road Section I in Delta State",
            milestones: 6,
            milestones_completed: 3,
            percent_completion: 50,
            funds_disbursed: '1,200,121,021.46',
            state: "Delta",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 6.20592,
            long: 6.69589
        }, {
            id: 12,
            title: "Rehabilitation of Enugu-Port Harcourt Expressway, Section III Enugu-Lokpanta in Enugu and Abia States",
            milestones: 4,
            milestones_completed: 3,
            percent_completion: 75,
            funds_disbursed: '836,319,471.46',
            state: "Abia",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 5.52495,
            long: 7.49224
        }, {
            id: 13,
            title: "Rehabilitation of Lokoja-Benin Road, Section II Okene-Auchi (26.70km) in Kogi and Edo States",
            milestones: 10,
            milestones_completed: 5,
            percent_completion: 50,
            funds_disbursed: '1,319,836,471.72',
            state: "Edo",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 6.33498,
            long: 5.60374
        }, {
            id: 14,
            title: "Rehabilitation of Umana-Ndiagu-Agba-Ebenebe-Amansi Akwa with Spur to Umamba Road Section II in Enugu State",
            milestones: 10,
            milestones_completed: 7,
            percent_completion: 70,
            funds_disbursed: '385,286,781.90',
            state: "Enugu",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 6.45836,
            long: 7.54638
        }, {
            id: 15,
            title: "Rehabilitation Of Ilorin-Jebba-Mokwa-Birinin-Gwari-Kaduna Road In Kwara State",
            milestones: 8,
            milestones_completed: 5,
            percent_completion: 62.5,
            funds_disbursed: '789,086,490.23',
            state: "Kwara",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 8.47987,
            long: 4.54181
        }, {
            id: 16,
            title: "The Reconstruction and Expansion of the Lagos-Ibadan Expressway by the Federal Government",
            milestones: 6,
            milestones_completed: 3,
            percent_completion: 50,
            funds_disbursed: '1,431,363,421.65',
            state: "Oyo",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 7.37753,
            long: 3.94703
        }, {
            id: 17,
            title: "The Rehabilitation of Access Road to Apapa/Tin Can Island Port-NNPC Depot(Atlas Cove) in Lagos",
            milestones: 10,
            milestones_completed: 2,
            percent_completion: 20,
            funds_disbursed: '1,532,648,908.22',
            state: "Lagos",
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/42732-200.png",
            lat: 6.60183,
            long: 3.35148
        }]
    },
    created: function() {
        this.createMap();
        var projects = this.projects;
        for (index in projects) {
        	this.createMarker(projects[index]);
        }
    },
    computed: {
        filteredProjects() {
          return this.projects.filter(project => {
            return project.title.toLowerCase().includes(this.search.toLowerCase())
          });
        }
    },
    methods: {
        createMap: function() {
        	mapboxgl.accessToken = 'pk.eyJ1IjoiZmF0aGVybWVycnkiLCJhIjoiajJpVWFvVSJ9.023R42hiapuVpEdNtgpSfg';
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [8.6753, 9.0820],
                zoom: 6
            });
        },
        createMarker: function(project) {
            var marker = {};

            marker.html = '<div class="marker-content"><a onclick="app.show(' + project.id +  ')" class="marker-title">' + project.title + '</a>';
            marker.html += '<div class="marker-progress">' + project.milestones_completed + ' of ' + project.milestones + ' milestones done <span>' + project.percent_completion + '%</div><div class="marker-bar"><div class="marker-level" style="width:' + project.percent_completion + '%"></div></div>';
            marker.html += '<p><strong style="width: 100px">State:</strong> ' + project.state + ' State</p>';
            marker.html += '<p><strong style="width: 100px">Contractor:</strong> Company Name (23422)</p>';
            marker.html += '<p><strong style="width: 100px">Funds Disbursed:</strong> N' + project.funds_disbursed + '</p></div>';
            marker.popup = new mapboxgl.Popup({
                offset: 25
            }).setHTML(marker.html);

            marker.el = document.createElement('div');
            marker.el.id = 'marker';
            marker.el.className = 'marker';
            marker.el.style.backgroundImage = "url('" + project.image + "')";
            marker.center = [project.long, project.lat];

            // create the marker
            new mapboxgl.Marker(marker.el, {
                    offset: [-25, -25]
                })
                .setLngLat(marker.center)
                .setPopup(marker.popup)
                .addTo(this.map);
        },
        show: function(id) {
        	this.active = this.projects[id];
        },
        search: function (evt) {
            $('#searchInput').keyup(function() {
            });
        }
    }
});
