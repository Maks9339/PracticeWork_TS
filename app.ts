//Перечисление (enum) для ролей пользователей
const UserRole = {
    Admin: 'Admin',
    Teacher: 'Teacher',
    Student: 'Student'
};

type UserRole = typeof UserRole[keyof typeof UserRole];

//Интерфейс User
interface User {
    id: number,
    name: string,
    role: UserRole
}

//Функция вывода информации о пользователе от роли
function displayInfo(user: User): void {
    switch (user.role) {
        case UserRole.Admin:
            console.log(`Пользователь ${user.name} имеет роль Администратора.`);
            break;
        case UserRole.Teacher:
            console.log(`Пользователь ${user.name} имеет роль Учителя.`);
            break;
        case UserRole.Student:
            console.log(`Пользователь ${user.name} имеет роль Студента.`);
            break;
    }
}

//Массив пользователей
const users: User[] = [
    { id: 1, name: 'Ерасыл', role: UserRole.Admin },
    { id: 2, name: 'Ернур', role: UserRole.Teacher },
    { id: 3, name: 'Даян', role: UserRole.Student }
];

//Функция с необязательными параметрами
function greet(name: string, greeting?: string): void {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`Привет, ${name}!`);
    }
}

console.log(" -Информация о пользователях");
users.forEach(user => displayInfo(user));
users.forEach(user => greet(user.name, "Добрый день"));