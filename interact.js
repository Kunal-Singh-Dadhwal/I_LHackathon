const { Web3 } = require("web3");
const path = require("path");
const fs = require("fs");

const web3 = new Web3("http://127.0.0.1:8545/");

// Read the contract address from the file system
const deployedAddressPath = path.join(__dirname, "MyContractAddress.txt");
const deployedAddress = fs.readFileSync(deployedAddressPath, "utf8");

// Create a new contract object using the ABI and address
const abi = require("./MyContractAbi.json");
const myContract = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;

async function interact() {
  const accounts = await web3.eth.getAccounts();
  const defaultAccount = accounts[0];

  try {
    // First try to get routes before adding new one
    try {
      console.log("Checking existing routes...");
      const existingRoutes = await myContract.methods.getRoutes().call({
        from: defaultAccount,
      });
      console.log("Existing routes:", existingRoutes);
    } catch (error) {
      console.log("No existing routes or error reading routes:", error.message);
    }

    console.log("Adding new route...");
    const one = "did";
    const two = "did";
    const three = "did";
    const four = "did";

    // Subscribe to contract events
    myContract.events.allEvents(
      {
        fromBlock: "latest",
      },
      function(error, event) {
        if (error) {
          console.log("Event error:", error);
        } else {
          console.log("Event:", event);
        }
      }
    );

    // Add route with more gas
    const result = await myContract.methods
      .addRoute(one, two, three, four)
      .send({
        from: defaultAccount,
        gas: 3000000, // Increased gas limit
        gasPrice: "10000000000",
      });
    console.log("Transaction Hash: ", result.transactionHash);

    console.log("Retrieving updated routes...");
    const routes = await myContract.methods.getRoutes().call({
      from: defaultAccount,
    });
    console.log("Updated routes:", routes);
  } catch (error) {
  }
}

interact();
