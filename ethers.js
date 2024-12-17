import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js";

// Smart contract details
const contractAddress = "0x8152Cb4f57483A2B3408b103c0917780b669AC81";
const abi = [
  // Add the relevant ABI details for the buyTicket function

  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "actionType",
        type: "string",
      },
    ],
    name: "Action",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUrl",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "addRoute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "ticketCosts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "startTimes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "endTimes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "capacities",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "travelDays",
        type: "uint256[]",
      },
    ],
    name: "addTimeslot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slotId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tickets",
        type: "uint256",
      },
    ],
    name: "buyTicket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
    ],
    name: "deleteRoute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slotId",
        type: "uint256",
      },
    ],
    name: "deleteTimeSlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getRoute",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleted",
            type: "bool",
          },
        ],
        internalType: "struct Travel.RouteStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slotId",
        type: "uint256",
      },
    ],
    name: "getRouteTicketHolders",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRoutes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleted",
            type: "bool",
          },
        ],
        internalType: "struct Travel.RouteStruct[]",
        name: "Routes",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slotId",
        type: "uint256",
      },
    ],
    name: "getTimeSlot",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "routeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ticketCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "capacity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seats",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleted",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "day",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct Travel.TimeSlotStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
    ],
    name: "getTimeSlots",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "routeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ticketCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "capacity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seats",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleted",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "day",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct Travel.TimeSlotStruct[]",
        name: "RouteSlots",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
    ],
    name: "getTimeSlotsByDay",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "routeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ticketCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "capacity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seats",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleted",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "day",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct Travel.TimeSlotStruct[]",
        name: "RouteSlots",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slotId",
        type: "uint256",
      },
    ],
    name: "markTimeSlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "routeId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUrl",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "updateRoute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request access to the user's wallet
      await ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return signer;
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Failed to connect wallet.");
      return null;
    }
  } else {
    alert("MetaMask is not installed.");
    return null;
  }
}

async function bookFlights() {
  // Retrieve values from the HTML inputs
  const routeId = parseInt(document.getElementById("from").value); // Replace with actual ID input
  const slotId = parseInt(document.getElementById("to").value); // Replace with actual Slot ID input
  const tickets = parseInt(document.getElementById("date").value); // Replace with tickets count input

  if (!routeId || !slotId || !tickets) {
    alert("Please fill in all fields correctly.");
    return;
  }

  try {
    // Connect to the wallet and get the signer
    const signer = await connectWallet();
    if (!signer) return;

    // Connect to the smart contract
    const contract = new ethers.Contract(contractAddress, abi, signer);

    // Call the buyTicket function
    const ticketCost = await contract.getTimeSlot(slotId); // Assuming ticketCost can be fetched via slotId
    const totalCost = ethers.utils.parseEther(
      (ethers.utils.formatEther(ticketCost.ticketCost) * tickets).toString()
    );

    const gasEstimate = await contract.estimateGas.buyTicket(
      routeId,
      slotId,
      tickets,
      {
        value: totalCost,
      }
    );

    const gasPrice = await signer.getGasPrice();
    const gasFee = gasEstimate.mul(gasPrice);

    const totalEth = totalCost.add(gasFee);

    alert(`Total ETH required: ${ethers.utils.formatEther(totalEth)}`);

    const tx = await contract.buyTicket(routeId, slotId, tickets, {
      value: totalCost,
    });

    await tx.wait();
    alert("Tickets purchased successfully!");
  } catch (error) {
    console.error("Error during booking:", error);
    alert("Booking failed. Please try again.");
  }
}

// Attach event listener to the button
document.getElementById("wow").addEventListener("click", async (event) => {
  event.preventDefault();
  await bookFlights();
});
