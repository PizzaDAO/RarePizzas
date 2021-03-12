import { ethers, upgrades } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // We get the contract to deploy
  const Box = await ethers.getContractFactory('RarePizzasBox')

  // calls RarePizzasBox.initialize(address, uint8)
  // gnosis safe: 0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2
  // a completetly insecure metamask: 0x102d3B5ca9C8675C20B2F7E2171B3ecDcbe3Fc82
  const box = await upgrades.deployProxy(Box, ["0x102d3B5ca9C8675C20B2F7E2171B3ecDcbe3Fc82", 1])
  await box.deployed()

  console.log('RarePizzasBox deployed to:', box.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })