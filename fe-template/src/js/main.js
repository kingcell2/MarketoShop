$(function () {
    let cart = [];
    let wishlist = [];
    let view = [];
    const products = [
        {
            id: 1,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Wireless-Speaker-Portable-bluetooth-185x170.jpg",
            name: "Portable Speaker",
            price: 15.00,
            discount: 20,
            description: "nice",
            categories: ["Bluetooth", "Portable", "Speaker"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Wireless-Speaker-Portable-bluetooth-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LEICKE-Bluetooth-Portable-Speaker-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Bluedio-TS-5-mini-speaker-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/HTB1olbtmlDH8KJj-100x100.jpg",
            ],
            quick_filter: ["Featured Product", "Recently Added", "Recent Product"],
            collections: ["F-On Sell", "R-Trend", "R-On Sell", "R-1"],
            quantity: 50,
        },
        {
            id: 2,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Bluetooth-Smart-Projector-185x170.jpg",
            name: "LED Projector",
            price: 20.00,
            discount: 0,
            description: "nice",
            categories: ["Camera", "Mobile", "Projector"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Bluetooth-Smart-Projector-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Lumens-LED-Projector-GP80-UP-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/NOYAZU-New-BL80-Smart-Android-6-0-WIFI-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Crenova-Mini-Portable-LED-Projector-100x100.jpg",

            ],
            quick_filter: ["Featured Product", "Best Deal", "Recently Added", "Recent Product"],
            collections: ["F-On Sell", "B-Hot Sell", "R-Trend", "R-1"],
            quantity: 50,
        },
        {
            id: 3,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/26-185x170.png",
            name: "LED Televition",
            price: 670.00,
            discount: 10,
            description: "nice",
            categories: ["LED Televition", "SamSung TV"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/26-185x170.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/25-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/28-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LED-32-LG-32LJ500U-1-100x100.jpg",

            ],
            quick_filter: ["Featured Product", "Recently Added", "Recent Product"],
            collections: ["F-On Sell", "R-Trend", "R-1"],
            quantity: 50,
        },
        {
            id: 4,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality-185x170.jpg",
            name: "3D Glass",
            price: 640.00,
            discount: 20,
            description: "nice",
            categories: ["3d Glass"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Glasses-3D-Movies-Games-for-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Google-Cardboard-Game-Movie-100x100.jpg",

            ],
            quick_filter: ["Featured Product", "Recently Added", "Recent Product"],
            collections: ["F-On Sell", "R-2"],
            quantity: 50,
        },
        {
            id: 5,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-2-185x170.jpg",
            name: "Gamming Headphone",
            price: 69.00,
            discount: 30,
            description: "nice",
            categories: ["Headphone"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Glasses-3D-Movies-Games-for-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Google-Cardboard-Game-Movie-100x100.jpg",

            ],
            quick_filter: ["Featured Product", "Recently Added", "Recent Product"],
            collections: ["F-On Sell", "R-On Sell", "R-2"],
            quantity: 50,
        },
        {
            id: 6,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/laptop2-scaled-e1594811938278.jpg",
            name: "Touchscreen Laptop",
            price: 640.00,
            discount: 10,
            description: "nice",
            categories: ["Laptop"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-Virtual-Reality.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/3D-VR-Glass-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Glasses-3D-Movies-Games-for-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Google-Cardboard-Game-Movie-100x100.jpg",

            ],
            quick_filter: ["Featured Product", "Recently Added", "Recent Product"],
            collections: ["F-On Sell", "R-On Sell", "R-2"],
            quantity: 50,
        },
        {
            id: 7,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/40-185x170.png",
            name: "Mini 3D Glass",
            price: 220.00,
            discount: 10,
            description: "nice",
            categories: ["3d Glass", "Gamepad", "Google Glass"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/40-185x170.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/41-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/39-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/38-100x100.png",
            ],
            quick_filter: ["Featured Product", "New Arrivals", "Today Gadgets", "Best Deal", "Recently Added"],
            collections: ["F-Hot Sell", "N-On Sell", "N-Hot Sell", "T-On Sell", "T-Best", "R-On Sell", "F-1"],
            quantity: 36,
        },
        {
            id: 8,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/45-185x170.png",
            name: "Bluetooth Gamepad",
            price: 199.00,
            discount: 0,
            description: "nice",
            categories: ["Drone", "Gamepad", "Laptop", "Mobile"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/40-185x170.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/41-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/39-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/38-100x100.png",
            ],
            quick_filter: ["Featured Product", "New Arrivals", "Today Gadgets", "Recently Added"],
            collections: ["F-Hot Sell", "N-On Sell", "N-Hot Sell", "T-On Sell", "T-Best", "R-On Sell"],
            quantity: 47,
        },
        {
            id: 9,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/21-185x170.png",
            name: "Apple Iphone 6s",
            price: 299.00,
            discount: 0,
            description: "nice",
            categories: ["Mobile"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/21-185x170.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/22-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/23-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/24-100x100.png",
            ],
            quick_filter: ["Featured Product", "New Arrivals", "Today Gadgets", "Best Deal", "Recently Added"],
            collections: ["F-Hot Sell", "N-On Sell", "N-Hot Sell", "T-On Sell", "T-Best", "B-On Sell", "R-On Sell", "F-1"],
            quantity: 16,
        },
        {
            id: 10,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/49-185x170.png",
            name: "Kotion Headset",
            price: 29.00,
            discount: 0,
            description: "nice",
            categories: ["Headphone", "Laptop", "Mobile"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/49-185x170.png", ,
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/51-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/50-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headsets-100x100.jpg",
            ],
            quick_filter: ["Featured Product", "New Arrivals", "Today Gadgets", "Best Deal", "Recently Added"],
            collections: ["F-Hot Sell", "N-On Sell", "N-Hot Sell", "T-On Sell", "T-Best", "B-Hot Sell", "R-On Sell", "F-1"],
            quantity: 50,
        },
        {
            id: 11,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/06-185x170.png",
            name: "Waterproof Camera",
            price: 560.00,
            discount: 10,
            description: "nice",
            categories: ["Drone", "Camera", "Gamepad", "Mobile", "Speaker"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/40-185x170.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/41-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/39-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/38-100x100.png",
            ],
            quick_filter: ["Featured Product", "Today Gadgets", "Best Deal", "Recently Added"],
            collections: ["F-Hot Sell", "F-Best Sell", "T-On Sell", "T-Best", "B-Best", "R-Hot Sell", "F-2"],
            quantity: 60,
        },
        {
            id: 12,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/07-185x170.png",
            name: "Moving Cameras",
            price: 230.00,
            discount: 10,
            description: "nice",
            categories: ["Camera", "Speaker"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/07-185x170.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/06-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/05-100x100.png",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Original-Fujifilm-Instax-Mini-8-Camera-Film-Camera-100x100.jpg"
            ],
            quick_filter: ["Featured Product", "Best Deal", "Recently Added"],
            collections: ["F-Hot Sell", "B-Best", "R-Hot Sell", "F-2"],
            quantity: 50,
        },
        {
            id: 13,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1-185x170.jpg",
            name: "Xpeed Laptop",
            price: 640.00,
            discount: 20,
            description: "nice",
            categories: ["Featured Product", "Laptop"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/11-6-Inch-IPS-Touchscreen-Tablet-PC-VOYO-VBOOK-A1-Intel-APOLLO-LAKE-N3450-8GB-DDR3L-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/13-3-VBOOK-V3-Tablet-PC-with-Fingerprint-Recognition-IPS-Touchscreen-Core-i7-6500U-laptop-2-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/16G-RAM-1TB-SSD-VOYO-15-6-2G-Dedicated-Card-Laptop-i7-6500U-with-Backlit-keyboard-1-100x100.jpg",
            ],
            quick_filter: ["Featured Product", , "New Arrivals", "Today Gadgets", "Recently Added"],
            collections: ["F-Trend", "F-Best Sell", "N-Best Sell", "T-Hot Sell", "T-Trend", "R-Hot Sell", "F-2"],
            quantity: 11,
        },
        {
            id: 14,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/laptop-185x170.jpg",
            name: "Xpeed Laptop V2",
            price: 690.00,
            discount: 0,
            description: "nice",
            categories: ["Featured Product", "Laptop"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/13-3-VBOOK-V3-Tablet-PC-with-Fingerprint-Recognition-IPS-Touchscreen-Core-i7-6500U-laptop-2-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/11-6-Inch-IPS-Touchscreen-Tablet-PC-VOYO-VBOOK-A1-Intel-APOLLO-LAKE-N3450-8GB-DDR3L-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/16G-RAM-1TB-SSD-VOYO-15-6-2G-Dedicated-Card-Laptop-i7-6500U-with-Backlit-keyboard-1-100x100.jpg",],
            quick_filter: ["Featured Product", "Best Deal", "Recently Added"],
            collections: ["F-Trend", "R-Trend"],
            quantity: 25,
        },
        {
            id: 15,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/24-185x170.png",
            name: "Apple iPhone 7s",
            price: 690.00,
            discount: 10,
            description: "nice",
            categories: ["Mobile"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/13-3-VBOOK-V3-Tablet-PC-with-Fingerprint-Recognition-IPS-Touchscreen-Core-i7-6500U-laptop-2-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/11-6-Inch-IPS-Touchscreen-Tablet-PC-VOYO-VBOOK-A1-Intel-APOLLO-LAKE-N3450-8GB-DDR3L-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/16G-RAM-1TB-SSD-VOYO-15-6-2G-Dedicated-Card-Laptop-i7-6500U-with-Backlit-keyboard-1-100x100.jpg",],
            quick_filter: ["Featured Product", "New Arrivals", "Today Gadgets", "Recently Added"],
            collections: ["F-Trend", "F-Best Sell", "N-Best Sell", "T-Hot Sell", "T-Trend", "R-Trend"],
            quantity: 50,
        },
        {
            id: 16,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/LED-32-LG-32LJ500U-1-185x170.jpg",
            name: "Smart TV",
            price: "30.00 - $280",
            discount: 0,
            description: "nice",
            categories: ["Featured Product", "Laptop"],
            gallery: [
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1-185x170.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/13-3-VBOOK-V3-Tablet-PC-with-Fingerprint-Recognition-IPS-Touchscreen-Core-i7-6500U-laptop-2-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/11-6-Inch-IPS-Touchscreen-Tablet-PC-VOYO-VBOOK-A1-Intel-APOLLO-LAKE-N3450-8GB-DDR3L-100x100.jpg",
                "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/16G-RAM-1TB-SSD-VOYO-15-6-2G-Dedicated-Card-Laptop-i7-6500U-with-Backlit-keyboard-1-100x100.jpg",],
            quick_filter: ["Featured Product", "Best Deal", "Recently Added"],
            collections: ["F-Trend", "R-Trend"],
            quantity: 50,
        },
        {
            id: 17,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Zhndu-Mobile-1-185x170.png",
            name: "Zhndu Mobile",
            price: 230.00,
            discount: 30,
            description: "nice",
            categories: ["Featured Product", "Laptop"],
            gallery: [
            ],
            quick_filter: ["Featured Product", "Recently Added", "Trending Products"],
            collections: ["F-Trend", "R-Trend", "T-3"],
            quantity: 40,
        },
        {
            id: 18,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/13-185x170.png",
            name: "7th Generation",
            price: 560.00,
            discount: 10,
            description: "nice",
            categories: ["Featured Product", "Laptop"],
            gallery: [
            ],
            quick_filter: ["Featured Product", "Trending Products"],
            collections: ["F-Trend", "T-3"],
            quantity: 32,
        },
        {
            id: 19,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/36-185x170.png",
            name: "Xpeed Projector",
            price: 520.00,
            discount: 10,
            description: "nice",
            categories: ["Mobile", "Projector"],
            gallery: [
            ],
            quick_filter: ["Featured Product", "New Arrivals", "Today Gadgets", "Best Deal", "Trending Products"],
            collections: ["F-Best Sell", "N-Best Sell", "T-Hot Sell", "T-Trend", "B-Trend", "T-3"],
            quantity: 11,
        },
        {
            id: 20,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/05-185x170.png",
            name: "Fuers Outdoor",
            price: 520.00,
            discount: 20,
            description: "nice",
            categories: ["Featured Product", "Laptop"],
            gallery: [
            ],
            quick_filter: ["Featured Product", "Today Gadgets", "Best Deal", "Trending Products"],
            collections: ["F-Best Sell", "T-Hot Sell", "T-Trend", "B-Best", "T-1"],
            quantity: 51,
        },
        {
            id: 21,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Zhndu-Mobile-1-185x170.png",
            name: "Xpeed Mobile",
            price: 230.00,
            discount: 30,
            description: "nice",
            categories: ["Featured Product", "Laptop"],
            gallery: [
            ],
            quick_filter: ["Featured Product", "New Arrivals", "Today Gadgets", "Best Deal", "Trending Products"],
            collections: ["F-Best Sell", "N-Best Sell", "T-Hot Sell", "T-Trend", "B-Trend", "T-1"],
            quantity: 30,
        },
        {
            id: 22,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-253x200.jpg",
            name: "Stereo Headset",
            price: 16.00,
            discount: 0,
            description: "nice",
            categories: ["Headphone"],
            gallery: [
            ],
            quick_filter: ["New Arrivals", "Best Deal", "Trending Products"],
            collections: ["N-Trend", "B-Trend", "T-1"],
            quantity: 15,
        },
        {
            id: 23,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/camera-drone-253x200.png",
            name: "Camera Drone",
            price: 720.00,
            discount: 30,
            description: "nice",
            categories: ["Drone", "Headphone", "Mobile", "Speaker"],
            gallery: [
            ],
            quick_filter: ["New Arrivals", "Best Deal", "Trending Products"],
            collections: ["N-Trend", "B-Hot Sell", "T-2"],
            quantity: 36,
        },
        {
            id: 24,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/HTB1olbtmlDH8KJj-253x200.jpg",
            name: "Bluetooth Speaker",
            price: 70.00,
            discount: 30,
            description: "nice",
            categories: ["Camera", "Headphone", "Speaker"],
            gallery: [
            ],
            quick_filter: ["New Arrivals", "Best Deal", "Trending Products"],
            collections: ["N-Trend", "B-On Sell", "T-2"],
            quantity: 50,
        },
        {
            id: 25,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Gamepad-for-Sony-Playstation-3-253x200.jpg",
            name: "Wireless Speaker",
            price: "110.00  - $120",
            discount: 0,
            description: "nice",
            categories: ["Gamepad"],
            gallery: [
            ],
            quick_filter: ["New Arrivals", "Best Deal", "Trending Products"],
            collections: ["N-Trend", "B-On Sell", "T-2"],
            quantity: 50,
        },
        {
            id: 26,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/New-2nd-generation-Smart-Air.png",
            name: "Wireless Speaker",
            price: 60,
            discount: 0,
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            categories: ["Camera", "Speaker"],
            gallery: [
            ],
            quick_filter: ["Related"],
            collections: [],
            quantity: 10,
        },
        {
            id: 27,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/04/REMAX-Portable-Wireless-Bluetooth-Speaker.jpg",
            name: "Wireless Speaker",
            price: 65,
            discount: 0,
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            categories: ["Speaker", "Wireless"],
            gallery: [
            ],
            quick_filter: ["Related"],
            collections: [],
            quantity: 20,
        },
        {
            id: 28,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2013/06/Original-Fujifilm-Instax-Mini-8-Camera-Film-Camera.jpg",
            name: "Fuji Film Camera",
            price: 240,
            discount: 10,
            description: "nice",
            categories: ["Camera"],
            gallery: [
            ],
            quick_filter: ["Related"],
            collections: [],
            quantity: 20,
        },
        {
            id: 29,
            img: "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2018/05/18.png",
            name: "Professional Drone",
            price: 680,
            discount: 10,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            categories: ["Gamepad", "Speaker", "Camera", "Drone"],
            gallery: [
            ],
            quick_filter: ["Related"],
            collections: [],
            quantity: 50,
        },
    ];

    $('.sell a').click(function (e) {
        e.preventDefault();
        $(this).parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.sell a').click(function (e) {
        e.preventDefault();
        let a = $(this).attr("href");
        $(a).addClass("active").siblings().removeClass("active")
    });
    //render list Featured Product
    $(function () {
        const quickviewFD_On = products.filter(val =>
            val.collections.includes("F-On Sell")
            && val.quick_filter.includes("Featured Product")
        )
        const quickviewFD_Hot = products.filter(val =>
            val.collections.includes("F-Hot Sell")
            && val.quick_filter.includes("Featured Product")
        )
        const quickviewFD_Trend = products.filter(val =>
            val.collections.includes("F-Trend")
            && val.quick_filter.includes("Featured Product")
        )
        const quickviewFD_Best = products.filter(val =>
            val.collections.includes("F-Best Sell")
            && val.quick_filter.includes("Featured Product")
        )
        renderFD_On(quickviewFD_On)
        renderFD_Hot(quickviewFD_Hot)
        renderFD_Trend(quickviewFD_Trend)
        renderFD_Best(quickviewFD_Best)
        function renderFD_On(list) {
            list.map(val => {
                if (val.discount) {
                    $(`
                <div  data-id=${val.id} class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                    <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                    <br>
                    <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                </div>`).appendTo(".banner-right .content #onsell")
                }
                else {
                    $(`
                <div data-id=${val.id} class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                        <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                        <br>
                    <div class="price">
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                </div>`).appendTo("#onsell")
                }

            })
        }
        function renderFD_Hot(list) {
            list.map(val => {
                if (val.discount) {
                    $(`
                <div  data-id=${val.id} class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                        <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                        <br>
                    <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                </div>`).appendTo("#hot")
                }
                else {
                    $(`
                <div data-id=${val.id} class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                        <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                        <br>
                    <div class="price">
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                </div>`).appendTo("#hot")
                }
            })
        }
        function renderFD_Trend(list) {
            list.map(val => {
                if (val.discount) {
                    $(`
                <div data-id=${val.id}  class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                        <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                        <br>
                    <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                </div>`).appendTo("#trend")
                }
                else {
                    $(`
                <div data-id=${val.id} class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                        <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                        <br>
                    <div class="price">
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                </div>`).appendTo("#trend")
                }
            })
        }
        function renderFD_Best(list) {
            list.map(val => {
                if (val.discount) {
                    $(`
                <div data-id=${val.id} class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                        <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                        <br>
                    <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                </div>`).appendTo("#best-sell")
                }
                else {
                    $(`
                <div data-id=${val.id} class="item">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="heart">
                        <i class="far fa-heart"></i>
                    </div>
                    <img src=${val.img}
                        alt="item image">
                        <br>
                        <a id="view-item" class="product-name" href="/viewproduct.html"> ${val.name}</a>
                        <br>
                    <div class="price">
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                </div>`).appendTo("#best-sell")
                }
            })
        }
    })
    //render list New Arrivals
    $(function () {
        const quickviewNA_On = products.filter(val =>
            val.collections.includes("N-On Sell")
            && val.quick_filter.includes("New Arrivals")
        )
        const quickviewNA_Hot = products.filter(val =>
            val.collections.includes("N-Hot Sell")
            && val.quick_filter.includes("New Arrivals")
        )
        const quickviewNA_Trend = products.filter(val =>
            val.collections.includes("N-Trend")
            && val.quick_filter.includes("New Arrivals")
        )
        const quickviewNA_Best = products.filter(val =>
            val.collections.includes("N-Best Sell")
            && val.quick_filter.includes("New Arrivals")
        )
        renderNA_On(quickviewNA_On)
        renderNA_Hot(quickviewNA_Hot)
        renderNA_Trend(quickviewNA_Trend)
        renderNA_Best(quickviewNA_Best)

        function renderNA_On(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>
                     </div>
                </div>
            </div>`).appendTo("#onsell-na")
                }
                else {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>
                                        </div>
                </div>
            </div>`).appendTo("#onsell-na")
                }
            })
        }
        function renderNA_Hot(list) {
            // list_products = list;
            list.map(val => {
                if (val.discount) {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>                    </div>
                </div>
            </div>`).appendTo("#hot-na")
                }
                else {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>                </div>
            </div>`).appendTo("#hot-na")
                }
            })
        }
        function renderNA_Trend(list) {
            //   list_products = list;
            list.map(val => {
                if (val.discount) {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>
                    </div>
                </div>
            </div>`).appendTo("#trend-na")
                }
                else {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>                    </div>
                </div>
            </div>`).appendTo("#trend-na")
                }
            })
        }
        function renderNA_Best(list) {
            //list_products = list;
            list.map(val => {
                if (val.discount) {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        <span class="price-default">$${val.price}.00</span>
                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>                    </div>
                </div>
            </div>`).appendTo("#best-na")
                }
                else {
                    $(`<div class="col-sm-3 ">
                <div data-id=${val.id} class="item">
                    <div class="icons flex j-between a-center">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="heart">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="info">
                        <img src=${val.img}
                            alt="">
                        <a class="categories" href="">${val.categories}</a>
                        <br>
                        <a id="view-item" class="name" href="/viewproduct.html"> ${val.name}</a>
                        <div class="price">
                        
                        <span class="price-discount">$${val.price}.00</span>
                    </div>
                    </div>
                    <div class="cart">
                    <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button>                    </div>
                </div>
            </div>`).appendTo("#best-na")
                }
            })
        }


    })
    //render list Today Gadgets 
    $(function () {
        const quickviewTG_On = products.filter(val =>
            val.collections.includes("T-On Sell")
            && val.quick_filter.includes("Today Gadgets")
        )
        const quickviewTG_Hot = products.filter(val =>
            val.collections.includes("T-Hot Sell")
            && val.quick_filter.includes("Today Gadgets")
        )
        const quickviewTG_Trend = products.filter(val =>
            val.collections.includes("T-Trend")
            && val.quick_filter.includes("Today Gadgets")
        )
        const quickviewTG_Best = products.filter(val =>
            val.collections.includes("T-Best")
            && val.quick_filter.includes("Today Gadgets")
        )
        renderTG_On(quickviewTG_On);
        renderTG_Hot(quickviewTG_Hot);
        renderTG_Trend(quickviewTG_Trend);
        renderTG_Best(quickviewTG_Best);
        function renderTG_On(list) {
            list.map(val => {
                if (val.quantity <= 50) {
                    if (!val.discount) {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>
                                <div class="price">
                                    
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a class="view-on-screen"><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#onsell-tg .left")
                    }
                    else {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a class="view-on-screen" ><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#onsell-tg .left")
                    }
                }
                else if (val.quantity > 50) {
                    if (val.discount) {
                        $(` 
                    <div class="col-sm-12">
                        <div data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#onsell-tg .right")
                    }
                    else {
                        $(` 
                    <div class="col-sm-12">
                        <div  data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                   
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#onsell-tg .right")
                    }
                }
            })
        }
        function renderTG_Hot(list) {
            list.map(val => {
                if (val.quantity <= 50) {
                    if (!val.discount) {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>
                                <div class="price">
                                    
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a class="view-on-screen" ><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#hot-tg .left")
                    }
                    else {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a  class="view-on-screen"><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#hot-tg .left")
                    }
                }
                else if (val.quantity > 50) {
                    if (val.discount) {
                        $(` 
                    <div class="col-sm-12">
                        <div data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#hot-tg .right")
                    }
                    else {
                        $(` 
                    <div class="col-sm-12">
                        <div  data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                   
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#hot-tg .right")
                    }
                }
            })
        }
        function renderTG_Trend(list) {
            list.map(val => {
                if (val.quantity <= 50) {
                    if (!val.discount) {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>
                                <div class="price">
                                    
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a  class="view-on-screen"><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#trend-tg .left")
                    }
                    else {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a class="view-on-screen" ><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#trend-tg .left")
                    }
                }
                else if (val.quantity > 50) {
                    if (val.discount) {
                        $(` 
                    <div class="col-sm-12">
                        <div data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#trend-tg .right")
                    }
                    else {
                        $(` 
                    <div class="col-sm-12">
                        <div  data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                   
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#trend-tg .right")
                    }
                }
            })
        }
        function renderTG_Best(list) {
            list.map(val => {
                if (val.quantity <= 50) {
                    if (!val.discount) {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>
                                <div class="price">
                                    
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a  class="view-on-screen"><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#best-tg .left")
                    }
                    else {
                        $(`
                    <div class="col-sm-6">
                        <div  data-id=${val.id} class="item-6">
                            <div class="info">
                                <img src=${val.img}
                                    alt="">
                                    <br>
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-2" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="icons">
                                    <a class="add-cart" ><i class="fab fa-opencart"></i></a>
                                    <a class="view-on-screen" ><i class="far fa-eye"></i></a>
                                    <a class="wishlist"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>                    
                </div>`).appendTo("#best-tg .left")
                    }
                }
                else if (val.quantity > 50) {
                    if (val.discount) {
                        $(` 
                    <div class="col-sm-12">
                        <div data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                    <span class="price-default">$${val.price}.00</span>
                                    <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#best-tg .right")
                    }
                    else {
                        $(` 
                    <div class="col-sm-12">
                        <div  data-id=${val.id} class="item-12">
                            <div class="bolt">
                                <i class="fas fa-bolt"></i></span>
                            </div>
                            <div class="info">
                                <a class="categories" href="">${val.categories}</a>
                                <br>
                                <a id="view-item-3" class="name"  href="/viewproduct.html"> ${val.name}</a>                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <p>Availability: <span>${val.quantity} in stock</span></p>
                                <img src=${val.img}
                                    alt="">

                                <div class="price">
                                   
                                    <span class="price-discount">$${val.price}.00</span>
                                </div>
                                <div class="offer">
                                    <h5>${val.discount}%
                                    </h5>
                                    <h6>Offer</h6>
                                </div>

                            </div>
                        </div>
                </div>`).appendTo("#best-tg .right")
                    }
                }
            })
        }
    })
    //render list Best Deal
    $(function () {
        const productsBD_On = $("#onsell-bd").owlCarousel();
        const productsBD_Hot = $("#hot-bd").owlCarousel();
        const productsBD_Trend = $("#trend-bd").owlCarousel();
        const productsBD_Best = $("#best-bd").owlCarousel();

        const quickviewBD_On = products.filter(val =>
            val.collections.includes("B-On Sell")
            && val.quick_filter.includes("Best Deal")
        )
        const quickviewBD_Hot = products.filter(val =>
            val.collections.includes("B-Hot Sell")
            && val.quick_filter.includes("Best Deal")
        )
        const quickviewBD_Trend = products.filter(val =>
            val.collections.includes("B-Trend")
            && val.quick_filter.includes("Best Deal")
        )
        const quickviewBD_Best = products.filter(val =>
            val.collections.includes("B-Best")
            && val.quick_filter.includes("Best Deal")
        )
        renderBD_On("#onsell-bd", productsBD_On, quickviewBD_On)
        renderBD_Hot("#hot-bd", productsBD_Hot, quickviewBD_Hot)
        renderBD_Trend("#trend-bd", productsBD_Trend, quickviewBD_Trend)
        renderBD_Best("#best-bd", productsBD_Best, quickviewBD_Best)
        function renderBD_On(selector, owl, list) {
            const len = $(selector).find(".item").length;
            // remove all items
            for (let i = 0; i < len; i++) {
                owl.trigger("remove.owl.carousel", [i]).trigger("remove.owl.carousel");
            }
            list.map(val => {
                if (val.discount) {
                    $(`<div data-id=${val.id} class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>

                   <div class="price">
                       <span class="price-default">$${val.price}.00</span>
                       <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#onsell-bd")
                }
                else {
                    $(`<div data-id=${val.id} class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>
                   <div class="price">
                       <span class="price-discount">$${val.price}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#onsell-bd")
                }
            })
            owl.trigger("refresh.owl.carousel");
        }
        function renderBD_Hot(selector, owl, list) {
            const len = $(selector).find(".item").length;
            // remove all items
            for (let i = 0; i < len; i++) {
                owl.trigger("remove.owl.carousel", [i]).trigger("remove.owl.carousel");
            }
            list.map(val => {

                if (val.discount) {
                    $(`<div  data-id=${val.id}  class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>
                   <div class="price">
                       <span class="price-default">$${val.price}.00</span>
                       <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#hot-bd")
                }
                else {
                    $(`<div data-id=${val.id} class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>
                   <div class="price">
                       <span class="price-discount">$${val.price}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#hot-bd")
                }
            })
            owl.trigger("refresh.owl.carousel");
        }
        function renderBD_Trend(selector, owl, list) {
            const len = $(selector).find(".item").length;
            // remove all items
            for (let i = 0; i < len; i++) {
                owl.trigger("remove.owl.carousel", [i]).trigger("remove.owl.carousel");
            }
            list.map(val => {

                if (val.discount) {
                    $(`<div data-id=${val.id} class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>
                   <div class="price">
                       <span class="price-default">$${val.price}.00</span>
                       <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#trend-bd")
                }
                else {
                    $(`<div data-id=${val.id}  class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>
                   <div class="price">
                       <span class="price-discount">$${val.price}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#trend-bd")
                }
            })
            owl.trigger("refresh.owl.carousel");
        }
        function renderBD_Best(selector, owl, list) {
            const len = $(selector).find(".item").length;
            // remove all items
            for (let i = 0; i < len; i++) {
                owl.trigger("remove.owl.carousel", [i]).trigger("remove.owl.carousel");
            }
            list.map(val => {

                if (val.discount) {
                    $(`<div data-id=${val.id} class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>
                   <div class="price">
                       <span class="price-default">$${val.price}.00</span>
                       <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#best-bd")
                }
                else {
                    $(`<div data-id=${val.id} class="item mb-20 flex j-between a-center">
               <img src=${val.img}
                   alt="">
               <div class="info">
                   <div class="icons">
                       <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="far fa-star"></i>
                       </div>
                       <div class="heart">
                           <i class="far fa-heart"></i>
                       </div>
                   </div>
                   <a id="view-item"  href="/viewproduct.html"> ${val.name}</a>
                   <div class="price">
                       <span class="price-discount">$${val.price}.00</span>
                   </div>
               </div>
           </div>`).appendTo("#best-bd")
                }
            })
            owl.trigger("refresh.owl.carousel");
        }

    })
    //render list Recently Added
    $(function () {
        const productsRA_On = $("#onsell-ra").owlCarousel();
        const productsRA_Trend = $("#trend-ra").owlCarousel();
        const productsRA_Hot = $("#hot-ra").owlCarousel();
        const quickviewRA_On = products.filter(val =>
            val.collections.includes("R-On Sell")
            && val.quick_filter.includes("Recently Added")
        )
        const quickviewRA_Hot = products.filter(val =>
            val.collections.includes("R-Hot Sell")
            && val.quick_filter.includes("Recently Added")
        )
        const quickviewRA_Trend = products.filter(val =>
            val.collections.includes("R-Trend")
            && val.quick_filter.includes("Recently Added")
        )
        renderRA("#onsell-ra", productsRA_On, quickviewRA_On)
        renderRA("#trend-ra", productsRA_Trend, quickviewRA_Trend)
        renderRA("#hot-ra", productsRA_Hot, quickviewRA_Hot)
        function renderRA(selector, owl, list) {
            const len = $(selector).find(".info").length;
            // remove all items
            for (let i = 0; i < len; i++) {
                owl.trigger("remove.owl.carousel", [i]).trigger("remove.owl.carousel");
            }
            // add new owl
            for (let i = 0; i < list.length; i++) {
                if (list[i].discount) {
                    owl.owlCarousel(
                        "add",
                        ` <div class="info">
                    <img src=${list[i].img}
                        alt="">
                    <a href="">${list[i].name}</a>
                    <div class="price">
                    <span class="price-default">$${list[i].price}.00</span>
                        <span class="price-discount">$${Math.floor(list[i].price - (list[i].price * list[i].discount) / 100)}.00</span>
                    </div>
             </div>`
                    );
                }
                else {
                    owl.owlCarousel(
                        "add",
                        ` <div class="info">
                    <img src=${list[i].img}
                        alt="">
                    <a href="">${list[i].name}</a>
                    <div class="price">
                    <span class="price-discount">$${list[i].price}.00</span>
                    </div>
             </div>`
                    );
                }


            }
            owl.trigger("refresh.owl.carousel");
        }
    })
    //render list group products
    $(function () {
        const quickviewTD1 = products.filter(val =>
            val.collections.includes("T-1")
            && val.quick_filter.includes("Trending Products")
        )
        const quickviewTD2 = products.filter(val =>
            val.collections.includes("T-2")
            && val.quick_filter.includes("Trending Products")
        )
        const quickviewTD3 = products.filter(val =>
            val.collections.includes("T-3")
            && val.quick_filter.includes("Trending Products")
        )
        renderTD1(quickviewTD1)
        renderTD2(quickviewTD2)
        renderTD3(quickviewTD3)
        function renderTD1(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="default">$${val.price}.00</span>
                        <span class="discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>`).appendTo("#t-1")
                }
                else {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="discount">$${val.price}.00</span>
                       
                    </div>
                </div>`).appendTo("#t-1")
                }
            })
        }
        function renderTD2(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="default">$${val.price}.00</span>
                        <span class="discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>`).appendTo("#t-2")
                }
                else {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="discount">$${val.price}.00</span>
                        
                    </div>
                </div>`).appendTo("#t-2")
                }
            })
        }
        function renderTD3(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="default">$${val.price}.00</span>
                        <span class="discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>`).appendTo("#t-3")
                }
                else {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="discount">$${val.price}.00</span>
                        
                    </div>
                </div>`).appendTo("#t-3")
                }
            })
        }

        const quickviewFP1 = products.filter(val =>
            val.collections.includes("F-1")
            && val.quick_filter.includes("Featured Product")
        )
        const quickviewFP2 = products.filter(val =>
            val.collections.includes("F-2")
            && val.quick_filter.includes("Featured Product")
        )
        renderFP1(quickviewFP1)
        renderFP2(quickviewFP2)
        function renderFP1(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="default">$${val.price}.00</span>
                        <span class="discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>`).appendTo("#f-1")
                }
                else {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="discount">$${val.price}.00</span>
                       
                    </div>
                </div>`).appendTo("#f-1")
                }
            })
        }
        function renderFP2(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="default">$${val.price}.00</span>
                        <span class="discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>`).appendTo("#f-2")
                }
                else {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="discount">$${val.price}.00</span>
                       
                    </div>
                </div>`).appendTo("#f-2")
                }
            })
        }
        const quickviewRP1 = products.filter(val =>
            val.collections.includes("R-1")
            && val.quick_filter.includes("Recent Product")
        )
        const quickviewRP2 = products.filter(val =>
            val.collections.includes("R-2")
            && val.quick_filter.includes("Recent Product")
        )
        renderRP1(quickviewRP1)
        renderRP2(quickviewRP2)
        function renderRP1(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="default">$${val.price}.00</span>
                        <span class="discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>`).appendTo("#r-1")
                }
                else {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="discount">$${val.price}.00</span>
                       
                    </div>
                </div>`).appendTo("#r-1")
                }
            })
        }
        function renderRP2(list) {
            list.map(val => {
                if (val.discount) {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="default">$${val.price}.00</span>
                        <span class="discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>`).appendTo("#r-2")
                }
                else {
                    $(`<div  data-id=${val.id} class="product flex">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                    <a id="view-item-4" href="/viewproduct.html"> ${val.name}</a>
                        <span class="discount">$${val.price}.00</span>
                       
                    </div>
                </div>`).appendTo("#r-2")
                }
            })
        }
    })
    $(function () {
        const quickviewRelated = products.filter(val =>
            val.quick_filter.includes("Related")
        )
        renderRelated(quickviewRelated)
        function renderRelated(list) {
            list.map(val => {
                if (val.discount) {
                    $(`
                    <div class="col-sm-3 ">
                    <div data-id=${val.id} class="item">
                        <div class="icons flex j-between a-center">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <div class="heart">
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <div class="info">
                            <img src=${val.img}
                                alt="">
                            <br>
                            <a class="categories" href="">${val.categories}</a>
                            <br>
                            <a id="view-item" class="name" href="/viewproduct.html">
                                ${val.name}</a>
                            <div class="price flex">
                                <span class="price-default">$${val.price}.00</span>
                                <span class="price-discount">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                            </div>
                        </div>
                        <div class="cart">
                            <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button> </div>
                    </div>
                </div>`).appendTo(".related-products .row")
                }
                else {
                    $(`
                    <div class="col-sm-3 ">
                    <div data-id=${val.id} class="item">
                        <div class="icons flex j-between a-center">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <div class="heart">
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <div class="info">
                            <img src=${val.img}
                                alt="">
                            <br>
                            <a class="categories" href="">${val.categories}</a>
                            <br>
                            <a id="view-item" class="name" href="/viewproduct.html">
                                ${val.name}</a>
                            <div class="price flex">
                                <span class="price-discount">$${val.price}.00</span>
                            </div>
                        </div>
                        <div class="cart">
                            <button class="add"><i class="fas fa-cart-plus"></i> Add to cart</button> </div>
                    </div>
                </div>`).appendTo(".related-products .row")
                }

            })
        }
    })
    //Scroll top
    $(window).scroll(function () {
        $(".totop").click(function (e) {
            e.preventDefault();
            $("html").scrollTop(0);
        });
        let currentPos = $("html").scrollTop();
        if (currentPos > 60) {
            $(".menu").css({
                'position': 'fixed',
                'width': '100%',
                'top': '0',
                'z-index': '99',
            });
        }
        else {
            $(".menu").css('position', 'unset');
        }
    });

    //Search product
    $(".search-item").keyup(function (e) {
        e.preventDefault();
        const searchInput = $(".search-item").val();
        if (!searchInput.length) {
            $(".products").css('display', 'none')
        }
        else {
            $(".products").css('display', 'flex')
        }
        const filterProducts = products.filter(val => {
            return val.name.toLowerCase().includes(searchInput.toLowerCase());
        }).map(val => {
            return {
                ...val,
                name: val.name.split(searchInput).join(`<span style="color:red">${searchInput}</span>`)
            }
        })
        renderProducts(filterProducts);
    });
    function renderProducts(products) {
        //xoa het item con
        $(".products .col").empty();
        //load cac san pham
        if (products.length) {
            products.map(val => {
                if (val.discount) {
                    $(`
                    <div data-id=${val.id} class="item flex a-center">
                        <img src=${val.img} alt="">
                            <div class="info">
                            <a id="view-item" href="/viewproduct.html"> ${val.name}</a>
                                <br>
                                    <div class="price">
                                        <span class="price-default">$${val.price}.00</span>
                                        <span class="price-discount">$${Math.floor(val.price - (val.price * val.discount) / 100)}.00</span>
                                    </div>
                                    </div>
                            </div>
                `).appendTo(".products .col");
                }
                else {
                    $(`
                    <div data-id=${val.id} class="item flex a-center">
                                    <img src=${val.img} alt="">
                                    <div class="info">
                                    <a id="view-item" href="/viewproduct.html"> ${val.name}</a>
                                    <br>
                                        <div class="price">
                                            <span class="price-discount">$${val.price}.00</span>
                                        </div>
                                    </div>
                            </div>
                `).appendTo(".products .col");
                }
            });
        } else {
            $(`<p>Sorry, but nothing matched your search criteria. Please try again with some different keywords.</p>`).appendTo(".products .col")
        }

    }
    $(".select-style").click(function (e) {
        e.preventDefault();
        // e.stopPropagations();
        $("ul.select-options").slideToggle();
        for (const option of document.querySelectorAll("li.select-option")) {
            $(option).click(function (e) {
                e.preventDefault();
                $(this).parent().find('li.selected').removeClass('selected');
                $(this).addClass('selected');
                this.closest('.select-2').querySelector('.select-style span').textContent = this.textContent;
                $("ul.select-options").slideUp();
            });
        }


    });
    $(".select-category").click(function (e) {
        e.preventDefault();
        $("ul.select-option-1").slideToggle();
        if ($('.blackbg').css('visibility') === 'hidden') {
            $('.select-category').css('z-index', 100);
            $('.blackbg').css('visibility', 'visible');
            $('.select-1 i').css({
                'transform': 'rotate(180deg)',
                'transition': 'all 0.3s',
            });
            $(".select-1 span").css('background', '#83b735');
        } else {
            $('.blackbg').css('visibility', 'hidden');
            $('.select-category').css('z-index', 2);
            $('.select-1 i').css({
                'transform': 'rotate(360deg)',
                'transition': 'all 0.3s',
            });
            $(".select-1 span").css('background', '#065fbd');
        };
    });
    $("#cart-item").click(function (e) {
        e.preventDefault();
        $(".cart-item").css({
            'position': 'fixed',
            'right': '0',
            'transition': 'all 1s',
            'z-index': 101,
        });
        $(".menu").css({
            'z-index': '2',
        });
        $('.blackbg').css('visibility') === 'hidden'

        $('.blackbg').css('visibility', 'visible');
        $("#exit").click(function (e) {
            e.preventDefault();
            $(".cart-item").css({
                'position': 'fixed',
                'right': '-30%'
            });
            $('.blackbg').css('visibility', 'hidden');
            $('.cart-item').css('z-index', 100);

        });
    });


    function renderProductOnCart(cart) {
        cart.map(val => {
            $(`
                <div data-id=${val.id} class="product flex a-center j-between">
                <div  class="item-product flex a-center j-between">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                        <a class="name" href="">${val.name}</a>
                        <div class="price flex a-center">
                            <span class="quantity">${val.quantity_add}x </span>
                            <span class="price"> $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                        </div>
                    </div>
                </div>
                <button id="delete">X</button>     
                </div>
            `).appendTo(".product-cart");
        })
    }
    function renderViewproduct(cart) {
        cart.map(val => {
            $(` <button id="pop">X</button>
                <div class="col">
                    <div class="col-left">
                        <div class="col-img-head ">
                            <img id="zoom" src="${val.img}"
                                alt="">
                            </div>
                    </div>
                    <div class="col-right">
                        <div data-id=${val.id} class="item">
                            <h3>${val.name}</h3>
                            <p>Categories: <span class="categories">${val.categories}</span> </p>
                            <br>
                            <div class="star flex">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <p class="review">(4 customer reviews)</p>
                            </div>
                            <span class="description">${val.description}</span>
                            <div class="price">
                                <span class="price-default">$${val.price}.00</span> <br>
                                <span class="price-discount">$${Math.round(val.price - (val.price * val.discount / 100))}.00</span>
                            </div>
                            <div class="flex a-center">
                            <form class="flex a-center" action="#">
                                <div class="btn flex  a-center">
                                    <div class="dec-button">-</div>
                                    <input type="text" id="quantity" value="1">
                                    <div class="inc-button">+</div>
                                </div>
                            </form>
                            <div class="cart">
                                <button class="add-on-view">Add to cart</button>                        
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`).appendTo(".viewproducts")
        })
    }
    //add to cart
    $("body").on("click", ".add", function () {
        const currentId = $(this).parents(".item").data("id");
        const currentItem = products.find((val) => val.id === currentId);
        const idx = cart.findIndex(val => val.id === currentId);
        if (idx === -1) {
            currentItem.quantity_add = 1;
            currentItem.total = Math.round((currentItem.price - currentItem.price * currentItem.discount / 100) * currentItem.quantity_add);
            cart.push(currentItem)
        }
        else {
            cart[idx].quantity_add += 1;
            cart[idx].total = (Math.round(cart[idx].quantity_add * (cart[idx].price - cart[idx].price * cart[idx].discount / 100)))

        }
        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart}`);
        const total_cart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        if (cart.length > 0) {
            $(".no-product").css('display', 'none')
        }
        $(".total").text(`$${total_cart}.00`)
        $(".product-cart").empty();
        renderProductOnCart(cart)
        localStorage.setItem("cart", JSON.stringify(cart))
    })
    $("body").on("click", ".add-cart", function () {
        const currentId = $(this).parents(".item-6").data("id");
        const currentItem = products.find((val) => val.id === currentId);
        const idx = cart.findIndex(val => val.id === currentId);
        if (idx === -1) {
            currentItem.quantity_add = 1;
            currentItem.total = Math.round(currentItem.price - currentItem.price * currentItem.discount / 100) * currentItem.quantity_add;
            cart.push(currentItem)
        } else {
            cart[idx].quantity_add += 1;
            cart[idx].total = (Math.round(cart[idx].quantity_add * (cart[idx].price - cart[idx].price * cart[idx].discount / 100)))
        }
        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart}`);
        const total_cart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        if (cart.length > 0) {
            $(".no-product").css('display', 'none')
        }
        $(".total").text(`$${total_cart}.00`)
        $(".product-cart").empty();
        renderProductOnCart(cart)
        localStorage.setItem("cart", JSON.stringify(cart))
    })
    $("body").on("click", ".add-on-view", function () {
        const currentId = $(this).parents(".item").data("id");
        const currentItem = products.find((val) => val.id === currentId);
        const idx = cart.findIndex(val => val.id === currentId);
        const idx_view = view.findIndex(val => val.id === currentId);
        let quantity_input = $("#quantity").val()
        if (idx === -1) {
            currentItem.quantity_add = 0;
            currentItem.quantity_add += parseInt(quantity_input);
            currentItem.total = Math.round((currentItem.price - currentItem.price * currentItem.discount / 100) * currentItem.quantity_add);
            cart.push(currentItem)
        }
        else {
            cart[idx].quantity_add += parseInt(quantity_input);
            cart[idx].total = (Math.round(cart[idx].quantity_add * (cart[idx].price - cart[idx].price * cart[idx].discount / 100)))
        }

        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart}`);
        const total_cart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        if (cart.length > 0) {
            $(".no-product").css('display', 'none')
        }
        $(".total").text(`$${total_cart}.00`)
        $(".product-cart").empty();
        renderProductOnCart(cart)
        view.pop(idx_view)
        $(".viewproducts").css({
            'top': '-100%',
            'transition': 'all 1s',
        })
        $(".menu").css({
            'z-index': '2',
        });
        $(".cart-item").css({
            'position': 'fixed',
            'right': '0',
            'transition': 'all 1s',
            'z-index': 1000,
        });
        $("#exit").click(function (e) {
            e.preventDefault();
            $(".cart-item").css({
                'position': 'fixed',
                'right': '-30%'
            });
            $('.blackbg').css('visibility', 'hidden');
            $('.cart-item').css('z-index', 2);
            $(".menu").css({
                'z-index': '100',
            });
        });
        localStorage.setItem("cart", JSON.stringify(cart))
    })
    //add to wishlist
    $("body").on("click", ".wishlist", function () {
        const currentId = $(this).parents(".item-6").data("id");
        const currentItem = products.find((val) => val.id === currentId);
        const idx = wishlist.findIndex(val => val.id === currentId);
        if (idx === -1) {
            currentItem.quantity_add = 1;
            wishlist.push(currentItem)
        } else {
            wishlist[idx].quantity_add = 1;
        }
        const quantity_wishlist = wishlist.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".white").text(`${quantity_wishlist}`);
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    })
    $("body").on("click", ".wishlist-view", function () {
        const currentId = $(this).parents(".item").data("id");
        const currentItem = products.find((val) => val.id === currentId);
        const idx = wishlist.findIndex(val => val.id === currentId);
        if (idx === -1) {
            currentItem.quantity_add = 1;
            wishlist.push(currentItem)
        } else {
            wishlist[idx].quantity_add = 1;
        }
        const quantity_wishlist = wishlist.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".white").text(`${quantity_wishlist}`);
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    })
    //delete view cart
    $("body").on("click", "#delete", function () {
        const cartId = $(this).parents(".product").data("id");
        const idx = cart.findIndex(val => val.id === cartId);
        cart.splice(idx, 1)
        const total_cart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        cart.subtotal = total_cart;
        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart} `);
        $(".product-cart").empty();
        if (cart.length) {
            $(".view-cart").css('opacity', '1')
            $(".total").text(`$${total_cart} .00`)
            renderProductOnCart(cart)
        }
        else {
            $(".no-product").css('display', 'block')
            $(".total").text(`$${total_cart}.00`)
        }

    });

    //click to icon view product
    $("body").on("click", ".view-on-screen", function () {
        const currentId = $(this).parents(".item-6").data("id");
        const currentItem = products.find((val) => val.id === currentId);
        //  const idx_view = view.findIndex(val => val.id === currentId);
        //  console.log(idx_view);
        view.push(currentItem)
        $(".viewproducts").css({
            'top': '0',
            'transition': 'all 1s',
            'z-index': 1000,
        })
        $('.blackbg').css({
            'visibility': 'visible',
            'opacity': '0.7',
        });
        $('.viewproducts').empty();
        renderViewproduct(view)
    })
    $("body").on("click", "#pop", function () {
        $(".viewproducts").css({
            'top': '-100%',
            'transition': 'all 1s',
        })
        $('.blackbg').css({
            'visibility': 'hidden',
            'transition': 'all 1s',
            'z-index': 101,
        });
        const currentId = $(this).parents(".item-6").data("id");
        const idx_view = view.findIndex(val => val.id === currentId);
        view.pop(idx_view)

    })
    //click on view product
    $("body").on("click", "#view-item", function () {
        const data_id = $(this).parents(".item").data("id");
        const item = products.find(val => val.id === data_id)
        item.quantity_add = 1;
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart))

    })
    $("body").on("click", "#view-item-2", function () {
        const data_id = $(this).parents(".item-6").data("id");
        const item = products.find(val => val.id === data_id)
        item.quantity_add = 1;
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart))

    })
    $("body").on("click", "#view-item-3", function () {
        const data_id = $(this).parents(".item-12").data("id");
        const item = products.find(val => val.id === data_id)
        item.quantity_add = 1;
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart))

    })
    $("body").on("click", "#view-item-4", function () {
        const data_id = $(this).parents(".product").data("id");
        const item = products.find(val => val.id === data_id)
        item.quantity_add = 1;
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart))

    })


    $(function () {
        $("form").on("click", ".dec-button", function () {
            let $quantity = $(this).siblings('#quantity')
            value = +$quantity.val();
            if (value > 1) {
                $quantity.val(value - 1);
            }
            $(".update").css('display', 'flex')
        })
        $('form').on('click', '.inc-button', function () {
            var $quantity = $(this).siblings('#quantity'),
                value = +$quantity.val();
            if (value < 1000) {
                $quantity.val(value + 1);
            }
            $(".update").css('display', 'flex')
        });
    })

})
