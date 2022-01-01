require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.7.5",
  paths: {
    artifacts: "./app/artifacts",
  },
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/PfvDor7QSGKg_mkqm_93xEk4hxai5-0L",
      accounts: ["0x8A93cc16A3143d8Dd5BC9c2C2455D95f9f0414A0"]
    }
  },
};
