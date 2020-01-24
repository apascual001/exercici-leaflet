
	var mymap = L.map('mapid').setView([41.3858148, 2.1692236], 15);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
    }).addTo(mymap);
    var marker;
    mymap.on('click', function (e) {
        if (marker) {
          mymap.removeLayer(marker);
        }
        marker = new L.Marker(e.latlng).addTo(mymap);
        marker.bindPopup("Posició: " + e.latlng.toString()).openPopup();
        
        mymap.flyTo(e.latlng,18);
      });
