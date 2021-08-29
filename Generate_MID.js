const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id <= 20; id++) {

    let MerchantID = faker.random.alphaNumeric();
    let Merchant_Legal_Name = faker.name.jobTitle();
    let Merchant_Trading_Name = faker.name.jobType();
    let email = faker.internet.email();

    users.push({
        "Array #": id,
        "Merchant ID": MerchantID,
        "Merchant_Legal_name": Merchant_Legal_Name,
        "Merchant_Trading_name": Merchant_Trading_Name,
        "email": email
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));