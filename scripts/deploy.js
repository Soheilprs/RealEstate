const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const RealEstateContract = await hre.ethers.deployContract("RealEstate");

  await RealEstateContract.waitForDeployment();
  console.log("RealEstate deployed to:", RealEstateContract.target);

  await sleep(30 * 1000);

  await hre.run("verify:verify", {
    address: RealEstateContract.target,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
