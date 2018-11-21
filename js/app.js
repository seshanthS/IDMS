
function initialize() {

web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/ee2f632b07c44744b8a9e0b769491341"));

$("#settingsPage").on("click", function() {
 $("#pageContent").load("settings.html")
});

$("#homePage").on("click", function() {
 $("#pageContent").load("addDetails.html");
 });
 $("#submitBtn").on("click", function(){
	 addToBlockchain();
 });
}

