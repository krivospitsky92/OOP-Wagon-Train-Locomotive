class CargoTrain {
    constructor(volume, wagonType, goods) {
        this.volume = volume;
        this.wagonType = wagonType;
        this.goods = goods;
    }

    unload(goods) {
        return null;
    }

    load() {
        console.log(`идет загрузка ${this.goods}`);
    }
}

const cargotrain = new CargoTrain(800, "tank", "fuel");

class Locomotive {
    constructor(
        cabinePlaceQty,
        QtyOfPerson,
        engineType,
        powerOfengine,
        isStartEngine
    ) {
        this.cabinePlaceQty = cabinePlaceQty;
        this.QtyOfPerson = QtyOfPerson;
        this.engineType = engineType;
        this.powerOfengine = powerOfengine;
        this.isStartEngine = isStartEngine;
    }

    startEngine() {
        if (this.QtyOfPerson > 0) {
            console.log("Двигатель запущен");
            return true;
        } else {
            console.log("Двигатель выключен");
            return false;
        }
    }

    setPassenger() {
        if (this.QtyOfPerson >= this.cabinePlaceQty) {
            console.log("Нет свободных мест");
        } else {
            console.log("Место найдено");
        }
    }
}

const locomotive = new Locomotive(4, 3, "diesel", 1600, true);

class Train {
    constructor(wagons, usedLocomotive, speed) {
        this.wagon = wagons;
        this.usedLocomotive = usedLocomotive;
        this.speed = speed;
    }

    speedUp() {
        if (locomotive.QtyOfPerson > 0) {
            this.speed += 1;
        }
    }
    speedDown() {
        if (locomotive.QtyOfPerson > 0) {
            if (this.speed > 0) {
                this.speed -= 1;
            }
        }
    }

    stopTrain() {
        if (this.speed >= 9 && this.speed <= 11) {
            console.log('Остановка поезда');
        } else {
            console.log('Остановка на данной скорости невозможна');
        }
    }

    addWagon() {
        this.wagon += 1;
    }
}

const train = new Train(12, locomotive, 0);