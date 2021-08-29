const faker = require('faker');
const fs = require('fs')

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

//let merchantId = faker.random.alphaNumeric();
//let merchantLegalName = faker.name.jobTitle(); 
//let merchantTrading_Name = faker.name.jobType();

let phone = faker.phone.phoneNumber();

//console.log(`Employee:  ${firstName} ${lastName} `);
//console.log(`\nMerchant HeadQuater ID: ${merchantId}`);
//console.log(`Merchant Legal Name: ${merchantLegalName}`);
//console.log(`Merchant Trading Name: ${merchantTrading_Name}`);

console.log(`Phone: ${phone}\n`);


function generateUsers() {

  let MID_array = []

  for (let id=1; id <= 20; id++) {

    let merchantId = faker.random.alphaNumeric();
    let merchantLegalName = faker.name.jobTitle(); 
    let merchantTrading_Name = faker.name.jobType();
    let email = faker.internet.email();

    MID_array.push({
        "Array No.": id,
        "first_name": firstName,
        "last_name": lastName,
        "Merchant Id": merchantId,
        "Merchant Legal Name": merchantLegalName,
        "Merchant Trading Name": merchantTrading_Name,
        "email": email
    });
  }

  return { "data": MID_array }
}

let dataObj = generateUsers();

fs.writeFileSync('Merchant_Ids.json', JSON.stringify(dataObj, null, '\t'));