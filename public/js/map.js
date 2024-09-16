mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  zoom: 10, // starting zoom
  center: listing.geometry.coordinates // starting position
});

map.on('load', () => {
  // Load an image from an external URL.
  map.loadImage(
    'https://static-00.iconduck.com/assets.00/airbnb-icon-512x512-d9grja5t.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      map.addImage('cat', image);

      // Add a data source containing one point feature.
      map.addSource('point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': listing.geometry.coordinates
              }
            }
          ]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'point', // reference the data source
        'layout': {
          'icon-image': 'cat', // reference the image
          'icon-size': 0.07
        }
      });

      // Create a popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
      );

      // Add click event listener for the image layer
      map.on('click', 'points', (e) => {
        // Get the coordinates of the clicked point
        const coordinates = e.features[0].geometry.coordinates.slice();

        // Set the popup coordinates and content
        popup
          .setLngLat(coordinates)
          .setHTML(`<h6>${listing.title}</h6><p>Exact location will be provided after booking</p>`)
          .addTo(map);
      });

      // Change the cursor to pointer when hovering over the image
      map.on('mouseenter', 'points', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to the default when no longer hovering
      map.on('mouseleave', 'points', () => {
        map.getCanvas().style.cursor = '';
      });
    }
  );
});
