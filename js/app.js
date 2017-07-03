var app = new Vue({
    el: '#watchtower',
    data: {
    	map: null,
    	active: null,
        projects: [{
        	id: 0,
        	title: "Dualization of Lokoja-Benin Road (Obajana Junction Benin) Section 1 in Kogi State",
        	milestones: 5,
        	milestones_completed: 3,
        	percent_completion: 60,
        	funds_disbursed: '1,259,836,471.46',
        	state: "Kogi",
        	image: "http://silverbirdtv.com/sites/default/files/field/image/Lagos-Badagry-Road.jpg",
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
        	image: "http://silverbirdtv.com/sites/default/files/field/image/Lagos-Badagry-Road.jpg",
        	lat: 7.2571,
        	long: 5.2058
        }]
    },
    created: function() {
        this.createMap();
        var projects = this.projects;
        for (index in projects) {
        	this.createMarker(projects[index]);
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
        }
    }
});
