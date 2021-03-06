import 'dotenv/config'

export type NetworkConfig = Record<string, string>
const config: NetworkConfig = {
  NETWORK: process.env.NETWORK || 'hardhat',
  ALCHEMY_MAINNET_KEY: process.env.ALCHEMY_MAINNET_KEY || '',
  ALCHEMY_GOERLI_KEY: process.env.ALCHEMY_GOERLI_KEY || '',
  ALCHEMY_RINKEBY_KEY: process.env.ALCHEMY_RINKEBY_KEY || '',
  ALCHEMY_ROPSTEN_KEY: process.env.ALCHEMY_ROPSTEN_KEY || '',
  ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY || '',
  GOERLI_PRIVATE_KEY: process.env.GOERLI_PRIVATE_KEY || '',
  RINKEBY_PRIVATE_KEY: process.env.RINKEBY_PRIVATE_KEY || '',
  ROPSTEN_PRIVATE_KEY: process.env.ROPSTEN_PRIVATE_KEY || '',
  CHAINLINK_MAINNET_PRICE_FEED:
    process.env.CHAINLINK_MAINNET_PRICE_FEED || '0x0000000000000000000000000000000000000000',
  CHAINLINK_KOVAN_PRICE_FEED: process.env.CHAINLINK_KOVAN_PRICE_FEED || '0x0000000000000000000000000000000000000000',
  CHAINLINK_GOERLI_PRICE_FEED: process.env.CHAINLINK_GOERLI_PRICE_FEED || '0x0000000000000000000000000000000000000000',
  CHAINLINK_RINKEBY_PRICE_FEED:
    process.env.CHAINLINK_RINKEBY_PRICE_FEED || '0x0000000000000000000000000000000000000000',
  CHAINLINK_ROPSTEN_PRICE_FEED:
    process.env.CHAINLINK_ROPSTEN_PRICE_FEED || '0x0000000000000000000000000000000000000000',
  RAREPIZZAS_BOX_MAINNET_PROXY_ADDRESS: process.env.RAREPIZZAS_BOX_MAINNET_PROXY_ADDRESS || '',
  RAREPIZZAS_BOX_GOERLI_PROXY_ADDRESS: process.env.RAREPIZZAS_BOX_GOERLI_PROXY_ADDRESS || '',
  RAREPIZZAS_BOX_RINKEBY_PROXY_ADDRESS: process.env.RAREPIZZAS_BOX_RINKEBY_PROXY_ADDRESS || '',
  RAREPIZZAS_BOX_MAINNET_PROXY_ADMIN_ADDRESS: process.env.RAREPIZZAS_BOX_MAINNET_PROXY_ADMIN_ADDRESS || '',
  RAREPIZZAS_BOX_RINKEBY_PROXY_ADMIN_ADDRESS: process.env.RAREPIZZAS_BOX_RINKEBY_PROXY_ADMIN_ADDRESS || '',
}

export default config
