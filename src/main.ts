import './style.css'
console.log('test')

// дз1 Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
// let age = parseInt(prompt('Введите ваш возраст:', '0') as string)

// if (age >= 0 && age <= 2) {
//   console.log("Вы ребенок");
// } else if (age >= 12 && age <= 18) {
//   console.log("Вы подросток");
// } else if (age > 18 && age <= 60) {
//   console.log("Вы взрослый");
// } else if (age > 60) {
//   console.log("Вы пенсионер");
// } else {
//   console.log("Некорректный возраст");
// }



// дз2 Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).
// let number = prompt("Введите число от 0 до 9:");
// switch (number) {
    // case '0':
    //     console.log(")");
    //     break;
    // case '1':
    //     console.log("!");
    //     break;
    // case '2':
    //     console.log("@");
    //     break;

    // case '3':
    //     console.log('#')
    //     break

    // case '4':
    //     console.log('$')
    //     break

    // case '5':
    //     console.log('%')
    //     break
    // case '6':
    //     console.log('^')
    //     break

    // case '7':
    //     console.log('&')
    //     break

    // case '8':
    //     console.log('*')
    //     break
    //     case '9':
    //         console.log('(')
    //         break





//     default:
//         console.log("Некорректное число");
// }




// дз4  Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

// let year = parseInt(prompt('Введите год', '0') as string)
//  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//    console.log('Год високосный');
//  } else {
//   console.log('Год не високосный');
// }


// Дз3 
// Запросить у пользователя трехзначное число и проверить,
// есть ли в нем одинаковые цифры.

// let number = 222
// if (number > 99 || number < 1000) {
//     switch (number) {
//         case 111:
//             console.log("Тут есть одинаковые числа!");
//             break;
//         case 222:
//             console.log("Тут есть одинаковые числа!");
//             break;
//         case 333:
//             console.log("Тут есть одинаковые числа!");
//             break;
    
//         case 444:
//             console.log('Тут есть одинаковые числа!')
//             break
    
//         case 555:
//             console.log('Тут есть одинаковые числа!')
//             break
    
//         case 666:
//             console.log('Тут есть одинаковые числа!')
//             break
//         case 777:
//             console.log('Тут есть одинаковые числа!')
//             break
    
//         case 888:
//             console.log('Тут есть одинаковые числа!')
//             break
    
//         case 999:
//             console.log('Тут есть одинаковые числа!')
//             break
//     }
// } else {
//     console.log('Всё верно!')
// }


//   дз2.6  Написать конвертор валют. Пользователь вводит количе-
//   ство USD, выбирает, в какую валюту хочет перевести: EUR,
//   UAN или AZN, и получает в ответ соответствующую сумму.

// let money = {
//     USD: { EUR: 0.85, UAN: 27.2, AZN: 1.7 }
//   }
//  let amout = ('Введите колличество USD')
//  let fromCurrency = 'USD'
//  let toCurrency = ('Выберите валюту')


// dzM1W5.1 Написать функцию возведения числа в степень.
function raiseToPower(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

// dzM1W5.2 Написать функцию поиска наибольшего общего делителя.
function greatestCommonDivisor(a: number, b: number): number {
    if (b === 0) {
        return a;
    } else {
        return greatestCommonDivisor(b, a % b);
    }
}

// dzM1W5.3 Написать функцию для поиска максимальной цифры в числе.
function maxDigit(num: number): number {
    let max = 0;
    while (num > 0) {
        const digit = num % 10;
        if (digit > max) {
            max = digit;
        }
        num = Math.floor(num / 10);
    }
    return max;
}

// dzM1W5.4 Написать функцию, которая определяет простое ли пере-
// данное число.
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// dzM1W5.5 Написать функцию для вывода всех множителей передан-
// ного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3
function primeFactors(num: number): number[] {
    const factors: number[] = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
}

// dzM1W5.6 Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    let a = 1;
    let b = 1;
    let temp;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}


console.log(raiseToPower(2, 3))
console.log(greatestCommonDivisor(24, 36))
console.log(maxDigit(23658))
console.log(isPrime(17))
console.log(primeFactors(18))
console.log(fibonacci(6))











