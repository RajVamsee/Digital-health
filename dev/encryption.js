const QuickEncrypt = require('quick-encrypt')
const crypto = require('crypto');
var eccrypto = require('eccrypto');
const fs = require('fs');
 
let keys = QuickEncrypt.generate(1024) 
console.log(keys) 
let publicKey = keys.public      // " -----BEGIN RSA PUBLIC KEY-----\nMIGJAoGBAIXlXZs+0FoIGBc5pjnZZxtvIzdDFtNi3SVi6vf2J...... "
let privateKey = keys.private   // " -----BEGIN RSA PUBLIC KEY-----\nMIGJAoGBAIXlXZs+0FoIGBc5pjnZZxtvIzdDFtNi3SVi6vf2J...... "
let privECDA = crypto.randomBytes(32);
console.log('Type :', typeof(privECDA));
let pubECDA = eccrypto.getPublic(privECDA);

const writeECDAPrivate = fs.writeFileSync('private_ECDA.pem', privECDA);
const writeECDAPublic = fs.writeFileSync('public_ECDA.pem', pubECDA);
const writePubKey = fs.writeFileSync('public.pem', publicKey);
const writePrivKey = fs.writeFileSync('private.pem', privateKey);


let encryptedText = QuickEncrypt.encrypt('', publicKey )
console.log(encryptedText)
let decryptedText = QuickEncrypt.decrypt( encryptedText, privateKey)
console.log(decryptedText) 