// function requestNumber() {
//     let userInput;
//     for (let i = 0; i < 10; i++) {
//         userInput = prompt("Введіть число більше 100:");
//
//         if (userInput !== null && +userInput > 100) {
//             console.log("Останнє введене значення:", userInput);
//             return;
//         }
//
//         console.log("Введене число менше або дорівнює 100. Спробуйте ще раз.");
//     }
//
//     console.log("Цикл завершився. Останнє введене значення:", userInput);
// }
function enterNumber() {
    let number;

    for (let i = 0; i < 10; i++) {
        number = prompt("Введіть число більше 100:");

        // Перевірка, чи введене значення є числом та більше 100
        if (Number(number) > 100) {
            console.log("Останнє введене число:", number);
            return;
        }

        // Якщо користувач ввів текст або натиснув "Відміна", виходимо з циклу
        if (number === null || number.trim() === "") {
            console.log("Введення скасовано.");
            return;
        }
    }

    // Якщо цикл завершився через 10 ітерацій без введення більше 100
    console.log("Останнє введене значення:", number);
}

enterNumber();