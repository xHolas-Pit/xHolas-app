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
            shortABI: string
            functionSig: string
        }
    }
}

// wormhole chain Ids: https://docs.wormhole.com/wormhole/contracts
export const config: Config = {
    swap: {
        fuji: {
            wormholeId: "6", 
            contractAddress: "fujiContract",
            shortABI: 'function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] calldata path)',
            functionSig: 'swapExactTokensForETH'
        }, 
        goerli: {
            wormholeId: "2",
            contractAddress: "",
            shortABI: '',
            functionSig: ''
        }
    }, 
    bridge: {
        fuji: {
            wormholeId: "6", 
            contractAddress: "",
            shortABI: '',
            functionSig: ''
        }, 
        goerli: {
            wormholeId: "2",
            contractAddress: "",
            shortABI: '',
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