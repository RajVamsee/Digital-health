const Blockchain=require('./blockchain');
const bitcoin=new Blockchain();
const bc1= {
    "chain": [
    {
    "index": 1,
    "timestamp": 1650293721300,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1650293856812,
    "transactions": [
    {
    "urlResource": "test",
    "amount": 15,
    "sender": "23439e30bf2211ec8aeea593773ed20a",
    "reciepent": "b2cdae60bf2211ecb151aba5b14b7dc5",
    "transactionId": "d6eba540bf2711ec8c8f3f09b8806814"
    }
    ],
    "nonce": 2423,
    "hash": "000f700da04548efd6c59e399319c943b43415eca77ee16a4931e8fad11f1a4b",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1650293910436,
    "transactions": [
    {
    "urlResource": "Mining reward",
    "amount": 10,
    "sender": "00",
    "reciepent": "8e3069d0bf2711ec8c8f3f09b8806814",
    "transactionId": "e29d6b80bf2711ec8c8f3f09b8806814"
    }
    ],
    "nonce": 5393,
    "hash": "00036a5accf1e685143d8c57b28746d237b1340b5de100a9022ac064731dca5e",
    "previousBlockHash": "000f700da04548efd6c59e399319c943b43415eca77ee16a4931e8fad11f1a4b"
    },
    {
    "index": 4,
    "timestamp": 1650294443634,
    "transactions": [
    {
    "urlResource": "Mining reward",
    "amount": 10,
    "sender": "00",
    "reciepent": "91d61940bf2711eca1b68dfd04ffd6d7",
    "transactionId": "02985ee0bf2811eca1b68dfd04ffd6d7"
    },
    {
    "urlResource": "60b1d404f19acfcf626343cea509008d8d57be227d652d7bbf6aab2a42c07a5d152d89d292107629274f685d154f715185dcdd9c764e87a70ae40d96e658d944592c00d9aae54e5bf8e71955445a8df5e782d060c4c930f4b55ac36e462121a5012d58c4a2ff11d40fb4dd4bc99de91725511136568414e6d6b804bbc56077af",
    "amount": 15,
    "sender": "8e3069d0bf2711ec8c8f3f09b8806814",
    "reciepent": "91d61940bf2711eca1b68dfd04ffd6d7",
    "transactionId": "2a336b60bf2911ec8c8f3f09b8806814"
    }
    ],
    "nonce": 5665,
    "hash": "0005e6de787921ad2a0cb4fb00006aa1e38dcd114984b16ffb5698519dede89e",
    "previousBlockHash": "00036a5accf1e685143d8c57b28746d237b1340b5de100a9022ac064731dca5e"
    }
    ],
    "pendingTransactions": [
    {
    "urlResource": "Mining reward",
    "amount": 10,
    "sender": "00",
    "reciepent": "91d61940bf2711eca1b68dfd04ffd6d7",
    "transactionId": "406380f0bf2911eca1b68dfd04ffd6d7"
    }
    ],
    "currentNodeUrl": "http://localhost:3004",
    "networkNodes": [
    "http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:3001"
    ]
    };

    console.log('Valid: ',bitcoin.chainIsValid(bc1.chain));
