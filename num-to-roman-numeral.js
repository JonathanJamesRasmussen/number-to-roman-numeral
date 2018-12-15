function convertToRoman(num) {
    let numeralKeys = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
    };
    let romanNumeral = '';
    for (let key in numeralKeys) {
        while (num % numeralKeys[key] < num) {
            romanNumeral += key;
            num -= numeralKeys[key];
        }
    }
 
    return romanNumeral;
}

//Use Example: convertToRoman(2456);