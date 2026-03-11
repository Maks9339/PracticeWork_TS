//Перечисление (enum) для ролей пользователей
var UserRole = {
    Admin: 'Admin',
    Teacher: 'Teacher',
    Student: 'Student'
};
//Функция вывода информации о пользователе от роли
function displayInfo(user) {
    switch (user.role) {
        case UserRole.Admin:
            console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.name, " \u0438\u043C\u0435\u0435\u0442 \u0440\u043E\u043B\u044C \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."));
            break;
        case UserRole.Teacher:
            console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.name, " \u0438\u043C\u0435\u0435\u0442 \u0440\u043E\u043B\u044C \u0423\u0447\u0438\u0442\u0435\u043B\u044F."));
            break;
        case UserRole.Student:
            console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.name, " \u0438\u043C\u0435\u0435\u0442 \u0440\u043E\u043B\u044C \u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0430."));
            break;
    }
}
//Массив пользователей
var users = [
    { id: 1, name: 'Ерасыл', role: UserRole.Admin },
    { id: 2, name: 'Ернур', role: UserRole.Teacher },
    { id: 3, name: 'Даян', role: UserRole.Student }
];
//Функция с необязательными параметрами
function greet(name, greeting) {
    if (greeting) {
        console.log("".concat(greeting, ", ").concat(name, "!"));
    }
    else {
        console.log("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!"));
    }
}
console.log(" -Информация о пользователях");
users.forEach(function (user) { return displayInfo(user); });
users.forEach(function (user) { return greet(user.name, "Добрый день"); });
