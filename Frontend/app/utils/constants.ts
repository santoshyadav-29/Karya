export type Place = {
  id: number;
  title: string;
  city: string;
  latitude: number;
  longitude: number;
};

export type Passenger = {
  passengerName: string;
  pickupLocation: Place | null;
  destinationLocation: Place | null;
  distance: string;
  price: number;
};

export type Promo = {
  color: string;
  code: string;
};

export type SosOption = {
  title: string;
  icon: string;
  subtitle: string;
};

export const sosOptions: SosOption[] = [
  {
    title: "Call Emergency Contact",
    icon: "phone",
    subtitle: "Call your emergency contact",
  },
  {
    title: "Show Medical Details",
    icon: "folder-heart",
    subtitle: "Show your medical details",
  },
  {
    title: "Call the Police",
    icon: "shield",
    subtitle: "Call the nearest police station",
  },
  {
    title: "Call an Ambulance",
    icon: "ambulance",
    subtitle: "Call the nearest ambulance",
  },
];

export const offers: Promo[] = [
  {
    color: "#c93a3a",
    code: "YUSH15",
  },
  {
    color: "#c7bf12",
    code: "REVAMP15",
  },
  { color: "#7bba89", code: "JOON15" },
  {
    color: "#9747ff",
    code: "LEAH15",
  },
  {
    color: "#ff3b9d",
    code: "PURNA15",
  },
];

export const places: Place[] = [
  {
    id: 1,
    title: "St. Xavier's College",
    city: "Maitighar, Kathmandu",
    latitude: 27.6933113,
    longitude: 85.3211291,
  },
  {
    id: 2,
    title: "Boudhanath Stupa",
    city: "Boudha, Kathmandu",
    latitude: 27.721816,
    longitude: 85.361514,
  },
  {
    id: 3,
    title: "Swayambhunath Temple",
    city: "Swayambhu, Kathmandu",
    latitude: 27.714035,
    longitude: 85.290685,
  },
  {
    id: 4,
    title: "Durbar Square",
    city: "Hanuman Dhoka, Kathmandu",
    latitude: 27.7045,
    longitude: 85.3076,
  },
  {
    id: 5,
    title: "Pashupatinath Temple",
    city: "Pashupati, Kathmandu",
    latitude: 27.7109,
    longitude: 85.3483,
  },
  {
    id: 6,
    title: "Thamel Market",
    city: "Thamel, Kathmandu",
    latitude: 27.7162,
    longitude: 85.3132,
  },
  {
    id: 7,
    title: "Garden of Dreams",
    city: "Keshar Mahal, Kathmandu",
    latitude: 27.7127,
    longitude: 85.3205,
  },
  {
    id: 8,
    title: "Nagarkot Viewpoint",
    city: "Nagarkot, Kathmandu",
    latitude: 27.7154,
    longitude: 85.5241,
  },
  {
    id: 9,
    title: "Patan Durbar Square",
    city: "Patan, Kathmandu",
    latitude: 27.6644,
    longitude: 85.3188,
  },
  {
    id: 10,
    title: "Kopan Monastery",
    city: "Kopan, Kathmandu",
    latitude: 27.7654,
    longitude: 85.3666,
  },
  {
    id: 11,
    title: "Leapfrog Technology Inc.",
    city: "Charkhal Rd, Kathmandu",
    latitude: 27.7074128,
    longitude: 85.3273696,
  },
];

export const passengers: Passenger[] = [
  {
    passengerName: "Joon Shakya",
    pickupLocation: places.find((place) => place.id === 11) || null,
    destinationLocation: places.find((place) => place.id === 1) || null,
    distance: "11.4 km",
    price: 200,
  },
  {
    passengerName: "Leah Deshar",
    pickupLocation: places.find((place) => place.id === 2) || null,
    destinationLocation: places.find((place) => place.id === 3) || null,
    distance: "12.3 km",
    price: 240,
  },
  {
    passengerName: "Yush Pokharel",
    pickupLocation: places.find((place) => place.id === 4) || null,
    destinationLocation: places.find((place) => place.id === 5) || null,
    distance: "13.4 km",
    price: 250,
  },
  {
    passengerName: "Purna Shrestha",
    pickupLocation: places.find((place) => place.id === 6) || null,
    destinationLocation: places.find((place) => place.id === 7) || null,
    distance: "4.4 km",
    price: 100,
  },
];

export const leapfrogToSxcRoute = [
  [85.327246, 27.707435],
  [85.327215, 27.707302],
  [85.327208, 27.707278],
  [85.327168, 27.707064],
  [85.327162, 27.70704],
  [85.327025, 27.706492],
  [85.326924, 27.706166],
  [85.326849, 27.705877],
  [85.326845, 27.705858],
  [85.326776, 27.705362],
  [85.326521, 27.705349],
  [85.326287, 27.705371],
  [85.326156, 27.705388],
  [85.325535, 27.705472],
  [85.325132, 27.705511],
  [85.32461, 27.705566],
  [85.324199, 27.705632],
  [85.324148, 27.705628],
  [85.324061, 27.705618],
  [85.323962, 27.705621],
  [85.32287, 27.705647],
  [85.322824, 27.705021],
  [85.322758, 27.704648],
  [85.322746, 27.704572],
  [85.322662, 27.703998],
  [85.322609, 27.703692],
  [85.322516, 27.703087],
  [85.322485, 27.70282],
  [85.322427, 27.702414],
  [85.322393, 27.70217],
  [85.322382, 27.702091],
  [85.32237, 27.702006],
  [85.322352, 27.701879],
  [85.322301, 27.701606],
  [85.322182, 27.700999],
  [85.322174, 27.700839],
  [85.322132, 27.700648],
  [85.322074, 27.700379],
  [85.321923, 27.699683],
  [85.32179, 27.699086],
  [85.321719, 27.698769],
  [85.32169, 27.69863],
  [85.321662, 27.69849],
  [85.321643, 27.698409],
  [85.321543, 27.69809],
  [85.321412, 27.69751],
  [85.3212, 27.696566],
  [85.321048, 27.695921],
  [85.320957, 27.695485],
  [85.320876, 27.695132],
  [85.320863, 27.695065],
  [85.320846, 27.69499],
  [85.320737, 27.694546],
  [85.320722, 27.6945],
  [85.320687, 27.694418],
  [85.320645, 27.694353],
  [85.320597, 27.694304],
  [85.320545, 27.694269],
  [85.320491, 27.694246],
  [85.320437, 27.694233],
  [85.320385, 27.694228],
  [85.320336, 27.694229],
  [85.320293, 27.694234],
  [85.320256, 27.694241],
  [85.320229, 27.694249],
  [85.320213, 27.694256],
  [85.31998, 27.694362],
  [85.31996, 27.69437],
  [85.319948, 27.694375],
  [85.319935, 27.694379],
  [85.319917, 27.694385],
  [85.319892, 27.694392],
  [85.319863, 27.694397],
  [85.319828, 27.6944],
  [85.319789, 27.694399],
  [85.319746, 27.694392],
  [85.319766, 27.69438],
  [85.319793, 27.694338],
  [85.319815, 27.694303],
  [85.319867, 27.694256],
  [85.319931, 27.694181],
  [85.320178, 27.69392],
  [85.320312, 27.693798],
  [85.320457, 27.693664],
  [85.320464, 27.693635],
  [85.320473, 27.693608],
  [85.320425, 27.69346],
  [85.320448, 27.693423],
  [85.320463, 27.693398],
  [85.320593, 27.693335],
  [85.320714, 27.693283],
  [85.320871, 27.693262],
  [85.320921, 27.693241],
];