
export const LOCATIONS = [
    { id: "sligo", name: "Sligo", description: "Sligo town" },
    { id: "bundoran", name: "Bundoran", description: "Bundoran, County Donegal" },
    { id: "donegal", name: "Donegal", description: "Donegal town" },
    { id: "letterkenny", name: "Letterkenny", description: "Letterkenny, County Donegal" },
    { id: "derry", name: "Derry", description: "Derry / Londonderry" },
] as const;

export type LocationName = (typeof LOCATIONS)[number]["name"];

export const BUS_SERVICES = [
    {
        id: "982",
        number: "982",
        name: "TFI Local Link 982",
        description: "Sligo ↔ Bundoran",
        totalSeats: 50,
        occupiedSeats: 40,
        occupancyIsDemo: true,
    },
    {
        id: "480",
        number: "480",
        name: "Bus Éireann 480",
        description: "Sligo ↔ Donegal ↔ Letterkenny ↔ Derry",
        totalSeats: 50,
        occupiedSeats: 32,
        occupancyIsDemo: true,
    },
] as const;

export type BusNumber = (typeof BUS_SERVICES)[number]["number"];

export const BUS_DEPARTURES = [
    {
        id: "982-sb-0845",
        routeNumber: "982",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "08:45",
        arrivalTime: "09:53",
        duration: "1h 08m",
    },
    {
        id: "982-sb-1230",
        routeNumber: "982",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "12:30",
        arrivalTime: "13:38",
        duration: "1h 08m",
    },
    {
        id: "982-sb-1700",
        routeNumber: "982",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "17:00",
        arrivalTime: "18:08",
        duration: "1h 08m",
    },
    {
        id: "982-sb-1840",
        routeNumber: "982",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "18:40",
        arrivalTime: "19:48",
        duration: "1h 08m",
    },
    {
        id: "982-sb-2040",
        routeNumber: "982",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "20:40",
        arrivalTime: "21:48",
        duration: "1h 08m",
    },
    {
        id: "982-bs-0815",
        routeNumber: "982",
        origin: "Bundoran",
        destination: "Sligo",
        departureTime: "08:15",
        arrivalTime: "09:27",
        duration: "1h 12m",
    },
    {
        id: "982-bs-1110",
        routeNumber: "982",
        origin: "Bundoran",
        destination: "Sligo",
        departureTime: "11:10",
        arrivalTime: "12:27",
        duration: "1h 17m",
    },
    {
        id: "982-bs-1415",
        routeNumber: "982",
        origin: "Bundoran",
        destination: "Sligo",
        departureTime: "14:15",
        arrivalTime: "15:27",
        duration: "1h 12m",
    },
    {
        id: "982-bs-1835",
        routeNumber: "982",
        origin: "Bundoran",
        destination: "Sligo",
        departureTime: "18:35",
        arrivalTime: "19:47",
        duration: "1h 12m",
    },
    {
        id: "982-bs-2215",
        routeNumber: "982",
        origin: "Bundoran",
        destination: "Sligo",
        departureTime: "22:15",
        arrivalTime: "23:27",
        duration: "1h 12m",
    },
    // 480 ROUTE
    {
        id: "480-sb-0855",
        routeNumber: "480",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "08:55",
        arrivalTime: "09:33",
        duration: "38m",
    },
    {
        id: "480-sb-1415",
        routeNumber: "480",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "14:15",
        arrivalTime: "14:55",
        duration: "40m",
    },
    {
        id: "480-sb-1615",
        routeNumber: "480",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "16:15",
        arrivalTime: "17:00",
        duration: "45m",
    },
    {
        id: "480-sb-1810",
        routeNumber: "480",
        origin: "Sligo",
        destination: "Bundoran",
        departureTime: "18:10",
        arrivalTime: "18:54",
        duration: "44m",
    },




] as const;
