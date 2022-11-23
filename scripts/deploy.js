const { ethers } = require("hardhat");

async function main() {
  try {
    const blackTokenContract = await ethers.getContractFactory("BlackToken");
    const blackToken = await blackTokenContract.deploy(10000, 100000000, 50);
    await blackToken.deployed();
    console.log("deployed address: ", blackToken.address);
  } catch (error) {
    throw error;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
