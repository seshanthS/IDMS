function hash() {
	var account = web3.eth.getAccounts(function(error,acc) {
		if (error) {
			console.log(error);
		}else {
		return acc[0];
		}
	});
	var toHash = $("#name").val()+("#dob").val()+("#proof").val();
	var hashValue = contract.methods.hashSolidityFunction(toHash).call().then (
	function(result) {
		return result;
	});
	return hashValue;
}

function addToBlockchain(){
	imgHash=uploadAvatar();
	var hash = hash();
	var account = web3.eth.getAccounts(function(error,acc) {
		if (error) {
			console.log(error);
		}else {
		return acc[0];
		}
	});
	contract.methods.write(hash,imgHash).send({from: account})
	.on('error',console.error);
	web3.eth.getBalance("0x9B86Bd10F042731dD20Ed57874C9bE6112C73769")
 .then(function(balance){
  alert(balance);
  });
}

function uploadAvatar(){
	var imgHash;
	var reader = new FileReader();
	const avatarImg=document.getElementById('imageUploader');
	reader.readAsArrayBuffer(avatarImg.files[0]);
	reader.onloadend = function(){
		var Imgbuffer = buffer.Buffer(reader.result);
	    imgHash = await ipfs.files.add(Imgbuffer);
		
	}
	return imgHash;
	/*
	//maybe this wont work...load the img location.,add that to ipfs
	//file = [{
	//	path: pathtofile
//	}];
	file = ipfs.buffer.from(img);
	var imgHash = await ipfs.files.add(file);
	return imgHash;
		*/
}
