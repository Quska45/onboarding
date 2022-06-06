const fs = require('fs');
const path = require('path');
const {mount} = require("@vue/test-utils");
const NuxtLogo = require("~/components/NuxtLogo");

let filePath = path.join( __dirname, '../components/contents/변광진' );
let fileNames = fs.readdirSync( filePath );

describe('Test', () => {
  test('fs test', () => {
    console.log(filePath);
    console.log(fileNames);
  })
})

