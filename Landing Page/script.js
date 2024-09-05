

// // Example: Smooth Scroll for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

//  // Google Maps Geocoding API Key (Replace with your actual key)
//  const geocodingApiKey = "YOUR_GOOGLE_MAPS_API_KEY";

//  // Get reference to the button
//  const geolocationBtn = document.getElementById("geolocation-btn");

//  // Add click event listener to the button
//  geolocationBtn.addEventListener("click", getLocation);

//  // Function to get the user's location
//  function getLocation() {
//    const status = document.getElementById("status");
//    const address = document.getElementById("address");

//    // Clear previous information
//    status.textContent = "";
//    address.textContent = "";

//    // Check if Geolocation is supported
//    if (!navigator.geolocation) {
//      status.textContent = "Geolocation is not supported by your browser.";
//    } else {
//      status.textContent = "Locating…";

//      // Request geolocation
//      navigator.geolocation.getCurrentPosition(success, denied);
//    }
//  }

//  // Success callback for geolocation
//  function success(position) {
//    const latitude = position.coords.latitude;
//    const longitude = position.coords.longitude;
//    const status = document.getElementById("status");

//    // Display locating success
//    status.textContent = "Location found! Fetching address...";

//    // Call the reverse geocoding API to get the address
//    reverseGeocode(latitude, longitude);

//    // Open Google Maps with the exact coordinates
//    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
//    window.open(googleMapsUrl, "_blank");
//  }

//  // Error callback when user denies access
//  function denied(error) {
//    const status = document.getElementById("status");

//    // If the user denies access, display a simple message
//    if (error.code === error.PERMISSION_DENIED) {
//      status.textContent = "User denied access to location.";
//    }
//  }

//  // Function to perform reverse geocoding using Google Maps Geocoding API
//  function reverseGeocode(lat, lon) {
//    const addressElement = document.getElementById("address");

//    // Google Maps Geocoding API URL
//    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${geocodingApiKey}`;

//    fetch(url)
//      .then((response) => response.json())
//      .then((data) => {
//        console.log(data); // Log the API response to debug

//        if (data.status === "OK") {
//          const address = data.results[0].formatted_address;
//          addressElement.textContent = `Address: ${address}`;
//        } else {
//          addressElement.textContent = "Unable to retrieve address.";
//        }
//      })
//      .catch((error) => {
//        console.error("Error fetching address:", error);
//        addressElement.textContent = "Could not fetch address.";
//      });
//  }

// Google Maps Geocoding API Key (Replace with your actual key)
const geocodingApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key

// Get reference to the button
const geolocationBtn = document.getElementById("geolocation-btn");

// Add click event listener to the button
geolocationBtn.addEventListener("click", getLocation);

// Function to get the user's location
function getLocation() {
    const status = document.getElementById("status");
    const address = document.getElementById("address");

    // Clear previous information
    status.textContent = "";
    address.textContent = "";

    // Check if Geolocation is supported
    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser.";
    } else {
        status.textContent = "Locating…";

        // Request geolocation
        navigator.geolocation.getCurrentPosition(success, denied);
    }
}

// Success callback for geolocation
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const status = document.getElementById("status");

    // Display locating success
    status.textContent = "Location found! Fetching address...";

    // Call the reverse geocoding API to get the address
    reverseGeocode(latitude, longitude);

    // Open Google Maps with the exact coordinates
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    window.open(googleMapsUrl, "_blank");
}

// Error callback when user denies access
function denied(error) {
    const status = document.getElementById("status");

    // If the user denies access, display a simple message
    if (error.code === error.PERMISSION_DENIED) {
        status.textContent = "User denied access to location.";
    }
}

// Function to perform reverse geocoding using Google Maps Geocoding API
function reverseGeocode(lat, lon) {
    const addressElement = document.getElementById("address");

    // Google Maps Geocoding API URL
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${geocodingApiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Log the API response to debug

            if (data.status === "OK") {
                const address = data.results[0].formatted_address;
                addressElement.textContent = `Address: ${address}`;
            } else {
                addressElement.textContent = "Unable to retrieve address.";
            }
        })
        .catch((error) => {
            console.error("Error fetching address:", error);
            addressElement.textContent = "Could not fetch address.";
        });
}
