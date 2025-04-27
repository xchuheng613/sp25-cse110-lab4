let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (key in statistics) {
    const val = statistics[key]
    if (key[0] == 'r' || val % 2 != 0) {
        console.log(key);
    }
}