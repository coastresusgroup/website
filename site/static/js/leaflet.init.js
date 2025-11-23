/* global L: true */

$(document).ready(function () {
  initMap()
})

function initMap () {
  if ($('#map').length) {
    const lat = parseFloat($('#map-lat').val())
    const lng = parseFloat($('#map-lng').val())
    const markerIcon = $('#map-marker').val()

    // Initialize the map
    const map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: false,
      doubleClickZoom: true,
      boxZoom: false,
      keyboard: false,
      dragging: false,
      touchZoom: false
    }).setView([lat, lng], 10)

    // Use CartoDB Voyager tiles - colorful style similar to Apple Maps, free, no API key
    // Style options:
    // - 'voyager' = Colorful, Apple Maps-like (current)
    // - 'light_all' = Clean, Google Maps-like
    // - 'dark_all' = Dark mode style
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
      minZoom: 1
    }).addTo(map)

    // Use Leaflet's default marker - clean red pin icon (Google Maps style)
    // This looks much better than custom images
    const marker = L.marker([lat, lng]).addTo(map)

    // Add click handler to open directions in Google Maps
    marker.on('click', function () {
      const url = 'https://www.google.com/maps/dir/?api=1&destination=' + lat + ',' + lng
      window.open(url, '_blank')
    })
  }
}

