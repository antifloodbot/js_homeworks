1. 'number' + 3 + 3
// 'number' + 3 → 'number3' (конкатенація рядка і числа)
// 'number3' + 3 → 'number33' (конкатенація рядка і числа)
// Результат string: 'number33'

2. null + 3
// null перетворюється в 0 при арифметичних операціях
// 0 + 3 = 3
// Результат number: 3

3. 5 && "qwerty"
// Оператор && повертає перший хибний операнд або останній істинний
// 5 (true) && "qwerty" (true) → повертається "qwerty"
// Результат string: 'qwerty'

4. +'40' + +'2' + "hillel"
// +'40' → 40 (унарний плюс перетворює рядок в число)
// +'2' → 2 (унарний плюс перетворює рядок в число)
// 40 + 2 = 42 (арифметична операція)
// 42 + "hillel" → '42hillel' (конкатенація)
// Результат string: '42hillel'

5. '10' - 5 === 6
// '10' - 5 → 10 - 5 (операція віднімання автоматично перетворює рядок в число)
// 10 - 5 = 5
// 5 === 6 → false
// Результат boolean: false

6. true + false
// true → 1, false → 0
// 1 + 0 = 1
// Результат number: 1

7. '4px' - 3
// '4px' не можна перетворити в число → NaN
// NaN - 3 = NaN
// Результат number: NaN

8. '4' - 3
// '4' → 4 (рядок перетворюється в число)
// 4 - 3 = 1
// Результат number: 1

9. '6' + 3 ** 0
// 3 ** 0 → 1 (оскільки будь-яке число в нульовому степені дорівнює 1)
// '6' + 1 → '61' (конкатенація)
// Результат string: '61'

10. 12 / '6'
// '6' → 6 (рядок перетворюється в число)
// 12 / 6 = 2
// Результат number: 2

11. '10' + (5 === 6)
// 5 === 6 → false
// '10' + false → '10false' (конкатенація)
// Результат string: '10false'

12. null == ''
// null рівне тільки undefined при нестрогому порівнянні
// null == '' → false
// Результат boolean: false

13. 3 ** (9 / 3)
// 9 / 3 = 3
// 3 ** 3 = 27
// Результат number: 27

14. !!'false' == !!'true'
// !!'false' → true (будь-який непорожній рядок – істинне значення)
// !!'true' → true
// true == true → true
// Результат boolean: true

15. 0 || '0' && 1
// 0 || ('0' && 1)
// '0' (непорожній рядок – істинне значення) && 1 → 1 (повертає останній істинний операнд)
// 0 || 1 → 1 (|| повертає перший істинний операнд)
// Результат number: 1

16. (+null == false) < 1
// +null → 0 (унарний плюс перетворює null в 0)
// 0 == false → true (оскільки false приводиться до 0)
// true < 1 → true (true дорівнює 1, а 1 не менше 1)
// Результат boolean: false

17. false && true || true
// false && true → false
// false || true → true
// Результат boolean: true

18. false && (false || true);
// (false || true) → true
// false && true → false
// Результат boolean: false

19. (+null == false) < 1 ** 5
// +null → 0
// 0 == false → true
// 1 ** 5 → 1 (одиниця в будь-якому степені – 1)
// true < 1 → false
// Результат boolean: false