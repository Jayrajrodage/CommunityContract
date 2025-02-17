require('dotenv').config()

require("@nomiclabs/hardhat-ethers")
require('hardhat-docgen')
require('hardhat-deploy')
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-web3")
require("@nomiclabs/hardhat-etherscan")
require("solidity-coverage")
require("hardhat-gas-reporter")
//require("hardhat-docgen")
require("@hardhat-docgen/core")
//require("@hardhat-docgen/markdown")
require("./docgen-custom-markdown")
require('hardhat-contract-sizer')

const kovanURL = `https://eth-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_KOVAN}`
const goerliURL = `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_GOERLI}`
const rinkebyURL = `https://rinkeby.infura.io/v3/${process.env.INFURA_ID_PROJECT}` //`https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_RINKEBY}`
const bscURL = 'https://bsc-dataseed.binance.org' //`https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_RINKEBY}`
const bsctestURL = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const mainnetURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAINNET}`
const maticURL = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_MATIC}`
const mumbaiURL = 'https://matic-mumbai.chainstacklabs.com';

module.exports = {
  networks: {
    local: {
      url: "http://localhost:8545", //rinkebyURL,
      chainId: 1337,
      gasPrice: "auto",
      //accounts: {mnemonic: process.env.MNEMONIC,initialIndex:1},
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    hardhat: {
      allowUnlimitedContractSize: false,
      forking: {
        url: mainnetURL
      }
    },
    kovan: {
      url: kovanURL,
      chainId: 42,
      gas: 12000000,
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    goerli: {
      url: goerliURL,
      chainId: 5,
      gasPrice: 1000,
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    rinkeby: {
      url: rinkebyURL,
      chainId: 4,
      gasPrice: "auto",
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    bsc: {
      url: bscURL,
      chainId: 56,
      gasPrice: "auto",
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    bsctest: {
      url: bsctestURL,
      chainId: 97,
      gasPrice: "auto",
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    matic: {
      url: maticURL,
      chainId: 137,
      //gasPrice: "auto",
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    mumbai: {
      url: mumbaiURL,
      chainId: 80001,
      gasPrice: "auto",
      accounts: [process.env.private_key],
      saveDeployments: true
    },
    mainnet: {
      url: mainnetURL,
      chainId: 1,
      gasPrice: 20000000000,
      accounts: [process.env.private_key],
      saveDeployments: true
    }
  },
  docgen: {
    theme: '../../docgen-custom-markdown',
    path: './docs',
    clear: true,
    runOnCompile: false,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD"
  },
  etherscan: {
    apiKey: process.env.MATIC_API_KEY
    //apiKey: process.env.ETHERSCAN_API_KEY
    //apiKey: process.env.bscscan_api_key
  },
  solidity: {
    compilers: [
        {
          version: "0.8.11",
          settings: {
            optimizer: {
              enabled: true,
              runs: 80,
            },
            metadata: {
              // do not include the metadata hash, since this is machine dependent
              // and we want all generated code to be deterministic
              // https://docs.soliditylang.org/en/v0.7.6/metadata.html
              bytecodeHash: "none",
            },
          },
        },
        {
          version: "0.6.7",
          settings: {},
          settings: {
            optimizer: {
              enabled: false,
              runs: 200,
            },
            metadata: {
              // do not include the metadata hash, since this is machine dependent
              // and we want all generated code to be deterministic
              // https://docs.soliditylang.org/en/v0.7.6/metadata.html
              bytecodeHash: "none",
            },
          },
        },
      ],
  
    
  },
  
  namedAccounts: {
    deployer: 0,
    },

  paths: {
    sources: "contracts",
  },
  gasReporter: {
    currency: 'USD',
    enabled: (process.env.REPORT_GAS === "true") ? true : false
  },
  mocha: {
    timeout: 200000
  }
}
