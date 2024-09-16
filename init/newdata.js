const sampleListings = [ 
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      coordinates: [34.0259, -118.7798]  // Malibu, California
    },
    {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      coordinates: [40.7128, -74.0060]  // New York City, New York
    },
    {
      title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      coordinates: [39.1911, -106.8175]  // Aspen, Colorado
    },
    {
      title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      coordinates: [43.7696, 11.2558]  // Florence, Italy
    },
    {
      title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
      coordinates: [45.5051, -122.6750]  // Portland, Oregon
    },
    {
      title: "Beachfront Paradise",
      description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      coordinates: [21.1619, -86.8515]  // Cancun, Mexico
    },
    {
      title: "Rustic Cabin by the Lake",
      description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      coordinates: [39.0968, -120.0324]  // Lake Tahoe, California
    },
    {
      title: "Luxury Penthouse with City Views",
      description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      coordinates: [34.0522, -118.2437]  // Los Angeles, California
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      coordinates: [46.0965, 7.2263]  // Verbier, Switzerland
    },
    {
      title: "Safari Lodge in the Serengeti",
      description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
      coordinates: [-2.3333, 34.8333]  // Serengeti National Park, Tanzania
    },
    // Continue for other listings...


    // ... previous listings
    {
      title: "Tropical Island Bungalow",
      description: "Relax in this private bungalow on a tropical island. Enjoy crystal clear waters and white sandy beaches.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505765059530-70a44612b3c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Bora Bora",
      country: "French Polynesia",
      coordinates: [-16.5004, -151.7415]  // Bora Bora, French Polynesia
    },
    {
      title: "Countryside Farmhouse",
      description: "Get away from it all in this charming countryside farmhouse. Fresh air and wide open spaces await.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1565155078353-94301c9b17a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Tuscany",
      country: "Italy",
      coordinates: [43.7711, 11.2486]  // Tuscany, Italy
    },
    {
      title: "Desert Oasis",
      description: "Stay in a unique desert oasis. This adobe-style home provides a one-of-a-kind experience under the stars.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501117716987-c8a2d1d88fef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3Zlcm5pZ2h0JTIwdGVuYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Palm Springs",
      country: "United States",
      coordinates: [33.8303, -116.5453]  // Palm Springs, California
    },
    {
      title: "Snowy Cabin in the Woods",
      description: "Snuggle up by the fire in this remote cabin surrounded by snow-covered trees. Perfect for a winter retreat.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1543536448-45cd6e5b0842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Whistler",
      country: "Canada",
      coordinates: [50.1163, -122.9574]  // Whistler, Canada
    },
    {
      title: "Penthouse with Ocean Views",
      description: "Watch the sunset over the ocean from your private terrace in this luxurious penthouse.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1511296265589-d2573c10f062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2800,
      location: "Sydney",
      country: "Australia",
      coordinates: [-33.8688, 151.2093]  // Sydney, Australia
    },
    {
      title: "Charming Chalet in the Alps",
      description: "A charming chalet nestled in the French Alps, offering ski-in/ski-out access and stunning mountain views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1577888389947-3f3bd068a655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3200,
      location: "Chamonix",
      country: "France",
      coordinates: [45.9237, 6.8694]  // Chamonix, France
    },
    {
      title: "Victorian Home in the City",
      description: "A beautiful Victorian home located in the heart of San Francisco. Experience historic charm with modern comforts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNoYWxldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2900,
      location: "San Francisco",
      country: "United States",
      coordinates: [37.7749, -122.4194]  // San Francisco, California
    },
    {
      title: "Lakeside Cabin with Dock",
      description: "Relax in this charming lakeside cabin with its own private dock. Perfect for fishing, boating, and swimming.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1594918633997-f5e31f02983c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FiaW4lMjBieSUyMHRoZSUyMGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1700,
      location: "Lake District",
      country: "United Kingdom",
      coordinates: [54.4609, -3.0886]  // Lake District, UK
    },
    {
      title: "Elegant Apartment in Paris",
      description: "Live like a Parisian in this elegant apartment located just minutes away from the Eiffel Tower.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2600,
      location: "Paris",
      country: "France",
      coordinates: [48.8566, 2.3522]  // Paris, France
    },
    {
      title: "Jungle Treehouse Adventure",
      description: "Stay in the heart of the jungle in this thrilling treehouse, surrounded by wildlife and exotic plants.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1400,
      location: "Costa Rica",
      country: "Costa Rica",
      coordinates: [9.7489, -83.7534]  // Costa Rica
    },
    {
      title: "Luxury Yacht Stay",
      description: "Spend your vacation on a luxurious yacht with 360-degree ocean views and a full crew to attend to your needs.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1516728778615-2d590ea18592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eWFjaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Monaco",
      country: "Monaco",
      coordinates: [43.7384, 7.4246]  // Monaco
    },
    // Continue adding listings as needed...
        // ... previous listings
        {
          title: "Mountain Lodge Retreat",
          description: "Enjoy a serene retreat in this luxurious mountain lodge surrounded by pristine wilderness.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1536541464440-cc7a69e5f7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW4lMjBsb2RnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          },
          price: 3500,
          location: "Aspen",
          country: "United States",
          coordinates: [39.1911, -106.8175]  // Aspen, Colorado, USA
        },
        {
          title: "Beachfront Villa with Infinity Pool",
          description: "Luxury beachfront villa with stunning ocean views and a private infinity pool. Perfect for a family vacation.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2hmcmlvbnQlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          },
          price: 4500,
          location: "Malibu",
          country: "United States",
          coordinates: [34.0259, -118.7798]  // Malibu, California, USA
        },
        {
          title: "Rustic Treehouse in the Forest",
          description: "Escape to this cozy treehouse nestled in a peaceful forest. Perfect for a romantic getaway.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585238342024-78c36ce8a2e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
          price: 900,
          location: "Vancouver",
          country: "Canada",
          coordinates: [49.2827, -123.1207]  // Vancouver, Canada
        },
        {
          title: "Luxury Penthouse in the City",
          description: "Modern luxury penthouse with panoramic city views, located in the heart of downtown Tokyo.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
          price: 5000,
          location: "Tokyo",
          country: "Japan",
          coordinates: [35.6762, 139.6503]  // Tokyo, Japan
        },
        {
          title: "Countryside Cottage with Garden",
          description: "Charming countryside cottage surrounded by a beautiful garden. Ideal for a peaceful and relaxing holiday.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1589710396161-d282dba1c8f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          },
          price: 1000,
          location: "Cotswolds",
          country: "United Kingdom",
          coordinates: [51.8333, -1.8333]  // Cotswolds, UK
        },
        {
          title: "Eco-friendly Jungle Bungalow",
          description: "Stay in this eco-friendly bungalow, fully immersed in the lush rainforest of Bali.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVuZ2Fsb3dlbGwlMjBqdW5nbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          },
          price: 1800,
          location: "Ubud",
          country: "Indonesia",
          coordinates: [-8.5069, 115.2625]  // Ubud, Bali, Indonesia
        },
        {
          title: "Castle Stay in the Highlands",
          description: "Live like royalty in this grand castle located in the Scottish Highlands, surrounded by rolling hills.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1576085898327-dac6b2a10a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
          price: 3200,
          location: "Scottish Highlands",
          country: "United Kingdom",
          coordinates: [57.1200, -4.7100]  // Scottish Highlands, UK
        },
        {
          title: "Modern Loft in Downtown",
          description: "Stay in this sleek and modern loft located in the heart of downtown New York, close to iconic landmarks.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1532641426019-7216e4b2b828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          },
          price: 4500,
          location: "New York City",
          country: "United States",
          coordinates: [40.7128, -74.0060]  // New York City, USA
        },
        {
          title: "Desert Glamping Under the Stars",
          description: "Experience luxury glamping in the desert with clear night skies and unforgettable stargazing.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1531306728370-bc7f4f218637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzZXJ0JTIwdGVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          },
          price: 1500,
          location: "Joshua Tree",
          country: "United States",
          coordinates: [34.1347, -116.3131]  // Joshua Tree, California, USA
        },
        {
          title: "Seaside Bungalow with Private Beach",
          description: "Enjoy your own private beach in this charming seaside bungalow. Perfect for a tranquil beach escape.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505164294036-a4a39b762f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Vhc2lkZSUyMGJ1bmdhbG93fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
          price: 2200,
          location: "Phuket",
          country: "Thailand",
          coordinates: [7.8804, 98.3923]  // Phuket, Thailand
        }
        // Continue adding listings as needed...
      ];
      
    