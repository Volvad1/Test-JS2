const personGenerator = {
    surnamesMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
  
    firstNameMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Владимир",
            "id_12": "Вадим",
            "id_13": "Олег",
            "id_14": "Сергей",
            "id_15": "Арсений",
            "id_16": "Руслан"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Александра",
            "id_2": "Екатерина",
            "id_3": "Мария",
            "id_4": "Анна",
            "id_5": "Светлана",
            "id_6": "Ольга",
            "id_7": "Татьяна",
            "id_8": "Елена",
            "id_9": "Ирина",
            "id_10": "Наталья",
            "id_11": "Надежда",
            "id_12": "Марина",
            "id_13": "Ксения",
            "id_14": "Галина",
            "id_15": "Евгения",
            "id_16": "Инна"
        }
    }`,
     
    professionsMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Врач", 
            "id_2": "Учитель", 
            "id_3": "Инженер", 
            "id_4": "Солдат", 
            "id_5": "Медбрат", 
            "id_6": "Шахтер", 
            "id_7": "Юрист", 
            "id_8": "Строитель", 
            "id_9": "Повар", 
            "id_10": "Водитель", 
            "id_11": "Актер",
            "id_12": "Продавец", 
            "id_13": "Полицейский", 
            "id_14": "Водолаз", 
            "id_15": "Футболист", 
            "id_16": "Экономист" 
        }
    }`,

    professionsFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Врач", 
            "id_2": "Учитель", 
            "id_3": "Инженер", 
            "id_4": "Балерина", 
            "id_5": "Медсестра", 
            "id_6": "Бухгалтер", 
            "id_7": "Юрист", 
            "id_8": "Модель", 
            "id_9": "Повар", 
            "id_10": "Фигуристка", 
            "id_11": "Актриса",
            "id_12": "Продавец", 
            "id_13": "Полицеская", 
            "id_14": "Швея", 
            "id_15": "Дизайнер", 
            "id_16": "Экономист" 
        }
    }`,

    birthMonthsJson: {
        1: "января",
        2: "февраля",
        3: "марта",
        4: "апреля",
        5: "мая",
        6: "июня",
        7: "июля",
        8: "августа",
        9: "сентября",
        10: "октября",
        11: "ноября",
        12: "декабря"
    },

    randomPatronymic: function(gender) {
        const maleFirstNames = JSON.parse(this.firstNameMaleJson).list;
        const randomMaleFirstName = this.randomValue(this.firstNameMaleJson);
    
        if (gender === this.GENDER_FEMALE) {
            if (randomMaleFirstName.endsWith('а')) {
                return randomMaleFirstName.slice(0, -1) + 'овна';
            } else if (randomMaleFirstName.endsWith('й')) {
                return randomMaleFirstName.slice(0, -1) + 'евна';
            } else {
                return randomMaleFirstName + 'овна';
            }
        } else {
            if (randomMaleFirstName.endsWith('а')) {
                return randomMaleFirstName.slice(0, -1) + 'ович';
            } else if (randomMaleFirstName.endsWith('й')) {
                return randomMaleFirstName.slice(0, -1) + 'евич';
            } else {
                return randomMaleFirstName + 'ович';
            }
        }
    },
    
    
    randomProfession: function(gender) {
        const professionsJson = (gender === this.GENDER_FEMALE) ?
            this.professionsFemaleJson :
            this.professionsMaleJson;

        const professions = JSON.parse(professionsJson).list;
        return professions['id_' + this.randomIntNumber(1, Object.keys(professions).length)];
    },

    randomFirstName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        }
        return "";
    },


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomSurname: function(gender) {
        if (gender === this.GENDER_FEMALE) {
            const maleSurname = this.randomValue(this.surnamesMaleJson);
            return maleSurname + 'а';
        } else {
            return this.randomValue(this.surnamesMaleJson);
        }
    },
    
    randomValue: function (json) {
        const obj = eval('(' + json + ')');
        const maxId = obj.count;
        const propNumber = this.randomIntNumber(1, maxId);
        return obj.list['id_' + propNumber];
    },

    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

  

    generateRandomYear: function() {
        const currentYear = new Date().getFullYear();
        const maxYear = Math.max(currentYear - 70, 1950); 
        return this.randomIntNumber(maxYear, currentYear); 
    },

    generateRandomDay: function(month) {
        const maxDay = this.getMaxDayOfMonth(month);
        return this.randomIntNumber(maxDay, 1);
    },

    getMaxDayOfMonth: function(month) {
        if (month === 2) {
            const currentYear = new Date().getFullYear();
            return (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0)) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(month)) {
            return 30;
        } else {
            return 31;
        }
    },

    getPerson: function () {
        const birthMonthsJson = this.birthMonthsJson;
    
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
    
        const birthMonthArray = Object.keys(birthMonthsJson);
        this.person.birthMonthNumeric = this.randomIntNumber(1, 12); // Случайный номер месяца
        this.person.birthMonth = birthMonthsJson[this.person.birthMonthNumeric];
    
        this.person.birthDay = this.generateRandomDay(this.person.birthMonthNumeric);
        this.person.birthYear = this.generateRandomYear();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};