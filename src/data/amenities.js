// Amenities data — The Meridian Residences [SHOWCASE CONCEPT]

export const amenitiesCategories = [
  { id: "wellness", label: "Wellness" },
  { id: "entertainment", label: "Entertainment" },
  { id: "social", label: "Social" },
  { id: "outdoor", label: "Outdoor" },
  { id: "service", label: "Service" },
  { id: "practical", label: "Practical" },
];

export const amenities = [
  {
    id: "sky-pool",
    name: "Sky Infinity Pool",
    nameId: "Kolam Renang Infinity Sky",
    category: "wellness",
    description:
      "A 25-metre heated infinity pool suspended above the city. The water meets the horizon at the edge, creating an experience of weightless tranquility. Cabanas and daybeds line the pool deck, attended by discreet poolside service.",
    descriptionId:
      "Kolam renang infinity berpemanas sepanjang 25 meter yang menggantung di atas kota. Air bertemu cakrawala di tepian, menciptakan pengalaman ketenangan tanpa bobot. Cabana dan daybed berjejer di dek kolam, dilayani oleh layanan tepi kolam yang diskret.",
    features: ["25m heated infinity edge", "Poolside cabanas", "Attended towel and beverage service", "Sunset-facing orientation"],
    icon: "pool",
  },
  {
    id: "cinema",
    name: "Private Cinema",
    nameId: "Bioskop Pribadi",
    category: "entertainment",
    description:
      "An intimate twelve-seat screening room designed for cinematic excellence. Acoustically treated walls, calibrated projection, and theatre-grade seating create an immersive experience worthy of the finest films.",
    descriptionId:
      "Ruang pemutaran dua belas kursi yang intim dirancang untuk keunggulan sinematik. Dinding yang dirawat secara akustik, proyeksi yang dikalibrasi, dan tempat duduk kelas teater menciptakan pengalaman imersif yang layak untuk film-film terbaik.",
    features: ["12-seat theatre configuration", "4K laser projection", "Dolby Atmos surround sound", "On-demand programming"],
    icon: "cinema",
  },
  {
    id: "wellness-pavilion",
    name: "The Wellness Pavilion",
    nameId: "Paviliun Kebugaran",
    category: "wellness",
    description:
      "A sanctuary for restoration. The Wellness Pavilion houses a private spa suite, Finnish sauna, steam room, and cold plunge pool. Treatment rooms offer bespoke therapies, while the relaxation lounge extends the ritual beyond the treatment itself.",
    descriptionId:
      "Tempat perlindungan untuk pemulihan. Paviliun Kebugaran menampung suite spa pribadi, sauna Finlandia, ruang uap, dan kolam celup dingin. Ruang perawatan menawarkan terapi yang disesuaikan, sementara lounge relaksasi memperpanjang ritual melampaui perawatan itu sendiri.",
    features: ["Private spa treatment suites", "Finnish sauna and steam room", "Cold plunge pool", "Relaxation lounge with herbal infusions"],
    icon: "spa",
  },
  {
    id: "residents-lounge",
    name: "Resident's Lounge & Library",
    nameId: "Lounge & Perpustakaan Penghuni",
    category: "social",
    description:
      "A double-height space conceived as the social heart of The Meridian. Curated shelves line the walls, while club chairs and writing desks offer quiet corners for reading, work, or conversation. A self-service bar provides coffee and evening aperitifs.",
    descriptionId:
      "Ruang setinggi dua lantai yang dirancang sebagai jantung sosial The Meridian. Rak yang dikurasi melapisi dinding, sementara kursi klub dan meja tulis menawarkan sudut tenang untuk membaca, bekerja, atau bercakap-cakap. Bar swalayan menyediakan kopi dan minuman pembuka sore.",
    features: ["Double-height library space", "Curated book collection", "Writing desks and reading nooks", "Self-service coffee and aperitif bar"],
    icon: "lounge",
  },
  {
    id: "private-dining",
    name: "Private Dining Room",
    nameId: "Ruang Makan Pribadi",
    category: "entertainment",
    description:
      "A fourteen-seat dining room with a show kitchen, designed for hosting private dinners and intimate celebrations. Residents may engage the services of a private chef or prepare their own meals in a professional-grade setting.",
    descriptionId:
      "Ruang makan empat belas kursi dengan dapur pertunjukan, dirancang untuk menyelenggarakan makan malam pribadi dan perayaan intim. Penghuni dapat menggunakan jasa koki pribadi atau menyiapkan hidangan sendiri dalam pengaturan kelas profesional.",
    features: ["14-seat dining configuration", "Show kitchen with professional appliances", "Private chef available on request", "Climate-controlled wine storage"],
    icon: "dining",
  },
  {
    id: "fitness",
    name: "Fitness Centre",
    nameId: "Pusat Kebugaran",
    category: "wellness",
    description:
      "A comprehensive fitness facility equipped for strength, cardio, and functional training. Floor-to-ceiling mirrors and natural light create an energizing atmosphere. Personal training and small-group classes are available on request.",
    descriptionId:
      "Fasilitas kebugaran lengkap yang dilengkapi untuk latihan kekuatan, kardio, dan fungsional. Cermin dari lantai ke langit-langit dan cahaya alami menciptakan suasana yang memberi energi. Pelatihan pribadi dan kelas kelompok kecil tersedia berdasarkan permintaan.",
    features: ["Strength and cardio zones", "Functional training area", "Personal training available", "Yoga and movement studio"],
    icon: "fitness",
  },
  {
    id: "children-atelier",
    name: "Children's Play Atelier",
    nameId: "Atelier Bermain Anak",
    category: "social",
    description:
      "A thoughtfully designed space where younger residents can explore, create, and play. Divided into activity zones for different age groups, the atelier features curated toys, art materials, and a reading corner — all within sight of a comfortable parents' lounge.",
    descriptionId:
      "Ruang yang dirancang dengan penuh pertimbangan di mana penghuni muda dapat menjelajah, berkreasi, dan bermain. Terbagi menjadi zona aktivitas untuk berbagai kelompok usia, atelier ini menampilkan mainan yang dikurasi, bahan seni, dan sudut baca — semuanya dalam jangkauan pandang lounge orang tua yang nyaman.",
    features: ["Age-zoned activity areas", "Curated toy and book collection", "Art and craft station", "Adjacent parents' lounge"],
    icon: "children",
  },
  {
    id: "sky-garden",
    name: "Landscaped Sky Garden",
    nameId: "Taman Langit yang Ditata",
    category: "outdoor",
    description:
      "A terraced garden floating above the streetscape — a rare expanse of green in the vertical city. Indigenous planting, reflection pools, and shaded seating areas create a contemplative outdoor sanctuary. Designed by an award-winning landscape architect.",
    descriptionId:
      "Taman bertingkat yang mengapung di atas lanskap jalan — hamparan hijau yang langka di kota vertikal. Tanaman asli, kolam refleksi, dan area duduk yang teduh menciptakan tempat perlindungan luar ruangan yang kontemplatif. Dirancang oleh arsitek lanskap pemenang penghargaan.",
    features: ["Terraced garden design", "Indigenous plant species", "Reflection pools", "Shaded seating and walking paths"],
    icon: "garden",
  },
  {
    id: "concierge",
    name: "Concierge & Butler Service",
    nameId: "Layanan Concierge & Butler",
    category: "service",
    description:
      "A dedicated concierge desk, attended around the clock, handles the particulars of daily life — from restaurant reservations and theatre tickets to travel arrangements and personal shopping. Butler service extends to in-residence dining, wardrobe care, and household management, allowing residents to focus on what matters.",
    descriptionId:
      "Meja concierge khusus, dilayani sepanjang waktu, menangani detail kehidupan sehari-hari — dari reservasi restoran dan tiket teater hingga pengaturan perjalanan dan belanja pribadi. Layanan butler meluas ke makan di dalam hunian, perawatan lemari pakaian, dan manajemen rumah tangga, memungkinkan penghuni untuk fokus pada hal yang penting.",
    features: ["24-hour concierge desk", "Butler service on request", "Travel and entertainment booking", "Personal shopping and errand service"],
    icon: "concierge",
  },
  {
    id: "parking",
    name: "Secure Private Parking",
    nameId: "Parkir Pribadi yang Aman",
    category: "practical",
    description:
      "A secure, well-lit basement parking facility with designated spaces for each residence. EV charging stations are installed as standard. A dedicated car wash bay and valet service complete the offering.",
    descriptionId:
      "Fasilitas parkir bawah tanah yang aman dan terang dengan ruang yang ditentukan untuk setiap hunian. Stasiun pengisian kendaraan listrik dipasang sebagai standar. Tempat cuci mobil khusus dan layanan valet melengkapi penawaran ini.",
    features: ["Designated parking per residence", "EV charging stations", "Car wash bay", "Valet parking service"],
    icon: "parking",
  },
];
