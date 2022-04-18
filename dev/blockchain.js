const sha256=require('sha256');
const currentNodeUrl=process.argv[3];
const { v1: uuid } = require('uuid');
function Blockchain(){
	this.chain=[];
	this.pendingTransactions=[];
	this.currentNodeUrl=currentNodeUrl;
	this.networkNodes=[];
    this.createNewBlock(100,'0','0');
}

Blockchain.prototype.createNewBlock=function(nonce,previousBlockHash,Hash){
	const newBlock= {
		index: this.chain.length+1,
		timestamp: Date.now(),
		transactions: this.pendingTransactions,
		nonce: nonce,
		hash: Hash,
		previousBlockHash: previousBlockHash
	}
this.pendingTransactions=[];
this.chain.push(newBlock);
return newBlock;
};

Blockchain.prototype.getLastBlock=function(){
	return this.chain[this.chain.length-1];
};
Blockchain.prototype.createNewTransaction=function(urlResource,amount,sender,reciepent){
	const newTransaction={
		urlResource: urlResource,
		amount: amount,
		sender: sender,
		reciepent: reciepent,
		transactionId: uuid().split("-").join("")
		};
	return newTransaction;
};
Blockchain.prototype.addTransactionToPending=function(transactionObj) {
	this.pendingTransactions.push(transactionObj);
	return this.getLastBlock()['index']+1;
};

Blockchain.prototype.hashBlock=function(previousBlockHash,currentBlockData,nonce){
    const dataAsString=""+previousBlockHash+nonce+JSON.stringify(currentBlockData);
    const hash=sha256(dataAsString);
    //console.log(hash);
    return hash;
}

Blockchain.prototype.proofOfWork=function(previousBlockHash,currentBlockData){
    let nonce=0;
    let hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
    while(hash.substring(0,3)!='000'){
        nonce++;
        hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
        console.log(hash);
}
return nonce;
}

Blockchain.prototype.chainIsValid=function(blockchain){
	let validChain=true;
	for(var i=1;i<blockchain.length;i++){
		const currentBlock=blockchain[i];
		const prevBlock=blockchain[i-1];
		const blockhash=this.hashBlock(prevBlock['hash'],{transactions: currentBlock['transactions'],index: currentBlock['index']}, currentBlock['nonce'])

		if(blockhash.substring(0,3) !== '000'){ 
			
			validChain=false;}

		if(currentBlock['previousBlockHash']!==prevBlock['hash']){ 
			
			validChain=false;}
	};

	const genesisBlock=blockchain[0];
	const correctNonce=genesisBlock['nonce']===100;
	const correctpreviousBlockHash=genesisBlock['previousBlockHash']==='0';
	const correctHash=genesisBlock['hash']==='0';
	const correctTransactions=genesisBlock['transactions'].length===0;
	if(!correctHash || !correctNonce || !correctTransactions || !correctpreviousBlockHash) {validChain=false;};
	
	return validChain;
};

Blockchain.prototype.getBlock = function(blockHash) {
	let correctBlock = null;
	this.chain.forEach(block => {
		if (block.hash === blockHash) correctBlock = block;
	});
	return correctBlock;
};


Blockchain.prototype.getTransaction = function(transactionId) {
	let correctTransaction = null;
	let correctBlock = null;

	this.chain.forEach(block => {
		block.transactions.forEach(transaction => {
			if (transaction.transactionId === transactionId) {
				correctTransaction = transaction;
				correctBlock = block;
			};
		});
	});

	return {
		transaction: correctTransaction,
		block: correctBlock
	};
};


Blockchain.prototype.getAddressData = function(address) {
	const addressTransactions = [];
	this.chain.forEach(block => {
		block.transactions.forEach(transaction => {
			if(transaction.sender === address || transaction.recipient === address) {
				addressTransactions.push(transaction);
			};
		});
	});

	let balance = 0;
	addressTransactions.forEach(transaction => {
		if (transaction.recipient === address) balance += transaction.amount;
		else if (transaction.sender === address) balance -= transaction.amount;
	});

	return {
		addressTransactions: addressTransactions,
		addressBalance: balance
	};
};


module.exports=Blockchain;
