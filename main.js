function Human() {
    Head.call(this);
    Body.call(this);
    Feets.call(this);

    this.height = null;
    this.setHeight = function (val) {
        this.height = val + 'cm';
        return this;
    };

    this.weight = null;
    this.setWeight = function (val) {
        this.weight = val + 'cm';
        return this;
    };
}


function Head() {
    Eyes.call(this);

    this.colorHair = null;
    this.setColorHair = function (val) {
        this.colorHair = val;
        return this;
    };

    this.typeNose = null;
    this.setTypeNose = function (val) {
        this.typeNose = val;
        return this;
    };

    this.typeLip = null;
    this.setTypeLip = function (val) {
        this.typeLip = val;
        return this;
    };
}

function Eyes() {
    this.colorEyes = null;
    this.setColorEye = function (val) {
        this.colorEyes = val;
        return this;
    };

    this.typeEyes = null;
    this.setTypeEye = function (val) {
        //В val передаю, например, 'classic'
        this.typeEyes = val;

        let typeEyes;
        // Тут преобразую первую букву val в верхний регистр
        // т.к. имена прототипов с большой буквы
        typeEyes = val[0].toUpperCase() + val.slice(1);
        // Тут магия )) Подключается прототип,
        // название которого передал в функцию
        // получается нечто такое Classic.call(this);
        eval(typeEyes).call(this);

        return this;
    };
}

function Classic() {
    this.typeEyes = 'classic shape of the eyes';
}
function Asian() {
    this.typeEyes = 'asian shape of the eyes';
}
function European() {
    this.typeEyes = 'european shape of the eyes';
}


function Body() {
    this.bodyType = null;
    this.setBodyType = function (val) {
        this.bodyType = val;
        return this;
    };

    this.hands = null;
    this.setHandsQnt = function (val) {
        this.hands = val;
        return this;
    };

    this.fingersHandsQnt = null;
    this.setFingersHandsQnt = function (val) {
        this.fingersHandsQnt = val;
        return this;
    };

    this.gender = null;
    this.setGender = function (val) {
        this.gender = val;

        let typeGender;
        typeGender = val[0].toUpperCase() + val.slice(1);
        eval(typeGender).call(this);
        return this;
    };
}

function Male() {
    this.penis = null;
    this.setPenisSize = function (val) {
        this.penis = val + 'cm';
        return this;
    };
}
function Female() {
    this.boobs = null;
    this.setBoobsSize = function (val) {
        this.boobs = val;
        return this;
    };
}


function Feets() {
    this.feetsQnt = null;
    this.setFeetsQnt = function (val) {
        this.feetsQnt = val;
        return this;
    };

    this.fingersFeetsQnt = null;
    this.setFingersFeetsQnt = function (val) {
        this.fingersFeetsQnt = val;
        return this;
    };
}


const human = new Human();
human
    .setHeight(200)
    .setWeight(90)
    .setColorHair('redhead')
    .setColorEye('green')
    .setTypeEye('classic')
    .setTypeNose('wide')
    .setTypeLip('narrow')
    .setBodyType('fat')
    .setHandsQnt(2)
    .setFingersHandsQnt(10)
    .setGender('Male')
    .setPenisSize(20)
    .setFeetsQnt(2)
    .setFingersFeetsQnt(10)
;

//console.log(human);
for (let item in human) {
    if (typeof human[item] !== 'function') {
        console.log(item, ' - ', human[item]);
    }

}
