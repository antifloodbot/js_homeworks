function getTrustedEmails(arr) {
    const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
    return arr.filter(obj => emailRegex.test(obj.email));
}

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];

const trustedEmails = getTrustedEmails(arr);
console.log(JSON.stringify(trustedEmails, null, 2));