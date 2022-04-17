const Blockchain=require('./blockchain');
const bitcoin=new Blockchain();
const bc1= {
    "chain": [
    {
    "index": 1,
    "timestamp": 1556036161876,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1556036234647,
    "transactions": [],
    "nonce": 13791,
    "hash": "000510d13e973f97a7ab8517776d7c60281d0f0b2dc5786fbf4f73446201410c",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1556036367673,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "422037a065e311e9a4050dbd88eefc43"
    },
    {
    "amount": 10,
    "sender": "AB",
    "reciepent": "CD",
    "transactionId": "7d9ccb4065e311e9a4050dbd88eefc43"
    },
    {
    "amount": 20,
    "sender": "AB",
    "reciepent": "CD",
    "transactionId": "824f7de065e311e9a4050dbd88eefc43"
    }
    ],
    "nonce": 6622,
    "hash": "000935072b2b82d9f948746cb46f143ddcaae52400e1b51d26f1165d0d38e5c8",
    "previousBlockHash": "000510d13e973f97a7ab8517776d7c60281d0f0b2dc5786fbf4f73446201410c"
    },
    {
    "index": 4,
    "timestamp": 1556036425016,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "9109540065e311e9a4050dbd88eefc43"
    },
    {
    "amount": 30,
    "sender": "AB",
    "reciepent": "CD",
    "transactionId": "a25ce7d065e311e9a4050dbd88eefc43"
    },
    {
    "amount": 40,
    "sender": "AB",
    "reciepent": "CD",
    "transactionId": "a519bde065e311e9a4050dbd88eefc43"
    },
    {
    "amount": 50,
    "sender": "AB",
    "reciepent": "CD",
    "transactionId": "a87767d065e311e9a4050dbd88eefc43"
    },
    {
    "amount": 60,
    "sender": "AB",
    "reciepent": "CD",
    "transactionId": "adc60c5065e311e9a4050dbd88eefc43"
    }
    ],
    "nonce": 4243,
    "hash": "00054185152b4b5474920cd01234d7f604cc6c44a53df93b22ca7b49becdfc40",
    "previousBlockHash": "000935072b2b82d9f948746cb46f143ddcaae52400e1b51d26f1165d0d38e5c8"
    },
    {
    "index": 5,
    "timestamp": 1556036441721,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "b337540065e311e9a4050dbd88eefc43"
    }
    ],
    "nonce": 1778,
    "hash": "000486ae9065c39f729e1e1931b67cb0b2ce330874b324a4e0c092ab4cabc20e",
    "previousBlockHash": "00054185152b4b5474920cd01234d7f604cc6c44a53df93b22ca7b49becdfc40"
    },
    {
    "index": 6,
    "timestamp": 1556036447432,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "bd2bd9e065e311e9a4050dbd88eefc43"
    }
    ],
    "nonce": 4106,
    "hash": "000d36d6d4254ce7da7edb72d8ca6be20462010a5a81f0387126df3c88b826b5",
    "previousBlockHash": "000486ae9065c39f729e1e1931b67cb0b2ce330874b324a4e0c092ab4cabc20e"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "c093e41065e311e9a4050dbd88eefc43"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

    console.log('Valid: ',bitcoin.chainIsValid(bc1.chain));
// bitcoin.createNewBlock(3, 'EIUF4343BKN43J4334K', 'SDFJ34OIJ34NLN34I');
// bitcoin.createNewTransaction(16103278,'Vaibhav','B10');
// bitcoin.createNewBlock(3564, 'EIUF4343BeuieKN43J4334K', 'SDFJ3dso4OIJ34NLN34I');
// bitcoin.createNewTransaction(16103338,'Prakhar','B10');
// var non=bitcoin.proofOfWork(bitcoin.chain[1].hash,bitcoin.pendingTransactions);
// console.log(bitcoin.hashBlock(bitcoin.chain[1].hash,bitcoin.pendingTransactions,non));
// console.log(bitcoin);
