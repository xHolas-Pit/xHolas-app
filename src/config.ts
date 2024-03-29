interface StakingConfig {
    [chain: string] : {
        token: string
        name: string
        Lido: string 
        RocketPool: string,
        stETH: string, 
        rETH: string
    }
}

interface IonConfig {
    [chain: string] : {
        allETH: string, 
        ERC20Mock: string, 
        stETHVault: string, 
        rETHVault: string,
    }
}

export const ionConfig: IonConfig = {
    sepolia: {
        allETH: "", 
        ERC20Mock: "", 
        stETHVault: "",
        rETHVault: "",
    },
    goerli: {
        allETH: "0x0176e257EdE13742aEC31BEA8E8f2b00e2CC3ED7",
        ERC20Mock: "0x67AF079DcfC60e1118aE9FC0433f8e187B4A79C8", 
        stETHVault: "0x72Ce79393b6CA5237fA5628e1B85A951136eb271", 
        rETHVault: ""
    }
}

export const stakingConfig: StakingConfig = {
    mainnet : {
        token: "", 
        name: "Ethereum",
        Lido: "0x47EbaB13B806773ec2A2d16873e2dF770D130b50",
        RocketPool: "",
        stETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", 
        rETH: "", 
    }, 
    goerli : {
        token: "", 
        name: "Goerli", 
        Lido: "0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F", 
        RocketPool: "",
        stETH: "",
        rETH: ""
    },
    mumbai: {
        token: "0x0000000000000000000000000000000000001010", 
        name: "Mumbai", 
        Lido: "",
        RocketPool: "",
        stETH: "",
        rETH: ""

    }
}

interface NetworkConfig {
    type: string
    wormholeChainId: number
    rpc: string
    bridgeAddress: string // core bridge address
    tokenBridgeAddress: string
    lmaoContractAddress: string
  }  

interface Config {
    [chain: string] : {
        [strategy: string] : {
            wormholeId: string
            contractAddress: string
            shortABI: [string]
            functionSig: string
        }
    }
}

// wormhole chain Ids: https://docs.wormhole.com/wormhole/contracts
export const config: Config = {
    Swap: {
        Fuji: {
            wormholeId: "6", 
            // trader joe's router 0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901
            // trader joe's pair 0x8730c9b589f4268a7d14294d2c98512eef7a9f99
            contractAddress: "0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901",
            // this shortABI needs to be updated to swapExactTokensfForTokens
            shortABI: ["function swapExactTokensForTokens (uint256 amountIn, uint256 amountOutMin, address[] calldata path)"],
            functionSig: 'swapExactTokensForETH'
        }, 
        Goerli: {
            wormholeId: "2",
            // uniswap v2 
            contractAddress: "0x7992275B169FeCd597e96409eBBD1826a671Fce8",
            shortABI: ['function swapExactETHForTokens(uint256 value, uint256 amountOutMin, address[] calldata path)'],
            functionSig: 'swapExactETHForTokens'
        }
    }, 
    Bridge: {
        Fuji: {
            wormholeId: "6", 
            contractAddress: "",
            shortABI: [''],
            functionSig: ''
        }, 
        Goerli: {
            wormholeId: "2",
            contractAddress: "",
            shortABI: [''],
            functionSig: ''
        }
    }
}

export const networkConfig: { [key: string]: NetworkConfig } = {
    goerli: {
      type: 'evm',
      wormholeChainId: 2,
      rpc: 'https://rpc.ankr.com/eth_goerli',
      bridgeAddress: '0x706abc4e45d419950511e474c7b9ed348a4a716c',
      tokenBridgeAddress: '0xf890982f9310df57d00f659cf4fd87e65aded8d7',
      // change manually after deployment
      lmaoContractAddress: '0x561F1Ac3685Be6F77B6c6270F20d1cc703F083De',
    },
    mumbai: {
      type: 'evm',
      wormholeChainId: 5,
      rpc: 'https://rpc.ankr.com/polygon_mumbai',
      bridgeAddress: '0x0cbe91cf822c73c2315fb05100c2f714765d5c20',
      tokenBridgeAddress: '0x377d55a7928c046e18eebb61977e714d2a76472a',
      // wrappedNativeAddress: '',
      // change manually after deployment
      lmaoContractAddress: '0x561F1Ac3685Be6F77B6c6270F20d1cc703F083De',
    }
  }