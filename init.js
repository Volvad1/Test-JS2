window.onload = function() {
    const surnameOutput = document.getElementById("surnameOutput");
    const firstNameOutput = document.getElementById("firstNameOutput");
    const patronymicOutput = document.getElementById("patronymicOutput");
    const genderOutput = document.getElementById("genderOutput");
    const birthDateOutput = document.getElementById("birthDateOutput");
    const professionOutput = document.getElementById("professionOutput");

    const generateButton = document.getElementById("generateButton");
    const clearButton = document.getElementById("clearButton");

    function updatePersonInfo() {
        const person = personGenerator.getPerson();
        const birthMonth = personGenerator.birthMonthsJson[person.birthMonthNumeric];
        surnameOutput.textContent = person.surname;
        firstNameOutput.textContent = person.firstName;
        patronymicOutput.textContent = person.patronymic;
        genderOutput.textContent = person.gender;
        birthDateOutput.textContent = `${person.birthDay} ${birthMonth}, ${person.birthYear}`;
        professionOutput.textContent = person.profession;
    }
    
    generateButton.addEventListener("click", function () {
        updatePersonInfo();
    });

    clearButton.addEventListener("click", function () {
        surnameOutput.textContent = "Фамилия";
        firstNameOutput.textContent = "Имя";
        patronymicOutput.textContent = "Отчество";
        genderOutput.textContent = "пол";
        birthDateOutput.textContent = "дата рождения";
        professionOutput.textContent = "профессия";
    });

    updatePersonInfo();
};