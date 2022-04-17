const QuickEncrypt = require('quick-encrypt')
//const crypto = require('crypto');
//var eccrypto = require('eccrypto');
const fs = require('fs');
let keys = QuickEncrypt.generate(1024) 
 
let publicKey = keys.public      // " -----BEGIN RSA PUBLIC KEY-----\nMIGJAoGBAIXlXZs+0FoIGBc5pjnZZxtvIzdDFtNi3SVi6vf2J...... "
let privateKey = keys.private   // " -----BEGIN RSA PUBLIC KEY-----\nMIGJAoGBAIXlXZs+0FoIGBc5pjnZZxtvIzdDFtNi3SVi6vf2J...... "

function Encryption(){
    
    const writePubKey = fs.writeFileSync('public.pem', publicKey);
    const writePrivKey = fs.writeFileSync('private.pem', privateKey);
};





Encryption.prototype.getEncrypted =function(ipfshash){
    let encryptedText = QuickEncrypt.encrypt(ipfshash, publicKey )
    return encryptedText;
};

Encryption.prototype.getDecrypted= function(scrambled){
    let decryptedText = QuickEncrypt.decrypt( scrambled, privateKey)
    return decryptedText;
};

module.exports = Encryption;
