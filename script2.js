function countNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        const subArray = arr[i];
        const n = subArray[0];
        const m = subArray[1];

        let count = 0;

        for (let num = n; num <= m; num++) {
            if (hasUniqueDigits(num)) {
                count++;
            }
        }

        console.log(count);
    }
}

function hasUniqueDigits(num) {
    const digitSet = new Set();

    for (const digit of num.toString()) {
        if (digitSet.has(digit)) {
            return false; // Dígito repetido encontrado
        }
        digitSet.add(digit);
    }

    return true; // Todos os dígitos são únicos
}

// Exemplo de uso
const arr = [
    [2, 5],
    [26, 26]
];

countNumbers(arr);