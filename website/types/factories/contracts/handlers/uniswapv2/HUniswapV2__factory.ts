/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  HUniswapV2,
  HUniswapV2Interface,
} from "../../../../contracts/handlers/uniswapv2/HUniswapV2";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_uniswapV2Router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MSG_SENDER_KEY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NATIVE_TOKEN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BASE",
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
    inputs: [],
    name: "POSTPROCESS_SIG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNISWAPV2_ROUTER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
    ],
    name: "addLiquidityETH",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "cache",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "postProcess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
    ],
    name: "removeLiquidityETH",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stack",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "swapETHForExactTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "swapExactETHForTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "swapExactTokensForETH",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "swapTokensForExactETH",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002e0438038062002e04833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612cba6200014a600039600081816101f601528181610485015281816104b60152818161062c015281816106600152818161069d015281816106c8015281816108230152818161084d015281816109fb01528181610a2c01528181610ba201528181610c1301528181610c5001528181610da401528181610fb201528181610fe3015281816111ec015281816113aa01528181611485015281816115ef0152818161174b015281816118de0152818161198101528181611ad801528181611c1b0152611c4c0152612cba6000f3fe6080604052600436106101445760003560e01c806399eb59b9116100c0578063df2ebdbb11610074578063ef66f72511610059578063ef66f72514610352578063f5f5ba7214610365578063fa2901a51461039e57600080fd5b8063df2ebdbb14610317578063e2dc85dc1461033f57600080fd5b8063c2722916116100a5578063c2722916146102da578063d0241dac146102e4578063dc9031c4146102f757600080fd5b806399eb59b914610285578063a1cfacde146102b257600080fd5b806349618dad1161011757806386818f26116100fc57806386818f261461024357806387151a791461025657806387c139431461026957600080fd5b806349618dad146101e457806358871c811461023057600080fd5b80630f532d181461014957806318a22c40146101905780633351733f146101a3578063397d4b4a146101d1575b600080fd5b34801561015557600080fd5b5061017d7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b6040519081526020015b60405180910390f35b61017d61019e3660046126be565b6103ea565b6101b66101b1366004612756565b61065a565b60408051938452602084019290925290820152606001610187565b61017d6101df3660046126be565b61092b565b3480156101f057600080fd5b506102187f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610187565b6101b661023e3660046127af565b610c0d565b61017d6102513660046126be565b610ee2565b61017d6102643660046126be565b611148565b34801561027557600080fd5b5061017d670de0b6b3a764000081565b34801561029157600080fd5b5061017d6102a03660046127f7565b60016020526000908152604090205481565b6102c56102c0366004612810565b6113a3565b60408051928352602083019190915201610187565b6102e261165a565b005b61017d6102f23660046126be565b6116a7565b34801561030357600080fd5b5061017d6103123660046127f7565b6118b6565b34801561032357600080fd5b5061021873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6102c561034d36600461284b565b6118d7565b61017d6103603660046126be565b611b80565b34801561037157600080fd5b50604080518082018252600a815269242ab734b9bbb0b82b1960b11b6020820152905161018791906128ae565b3480156103aa57600080fd5b506103b9636139148b60e11b81565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610187565b600061045760028484905010156040518060400160405280601581526020017f73776170546f6b656e73466f72457861637445544800000000000000000000008152506040518060400160405280600c81526020016b0d2dcecc2d8d2c840e0c2e8d60a31b815250611db1565b60008383600081811061046c5761046c6128e1565b905060200201602081019061048191906128f7565b90507f00000000000000000000000000000000000000000000000000000000000000006104ae8287611dc5565b95506104db827f000000000000000000000000000000000000000000000000000000000000000088611e86565b604051632512eca560e11b81526001600160a01b03821690634a25d94a90610511908a908a908a908a903090429060040161295d565b6000604051808303816000875af192505050801561055157506040513d6000823e601f3d908101601f1916820160405261054e91908101906129de565b60015b6106075761055d612a85565b806308c379a014156105c25750610572612aa1565b8061057d57506105c4565b6105bc6040518060400160405280601581526020017f73776170546f6b656e73466f724578616374455448000000000000000000000081525082611f0e565b50610626565b505b6106026040518060400160405280601581526020017f73776170546f6b656e73466f7245786163744554480000000000000000000000815250611f69565b610626565b8060008151811061061a5761061a6128e1565b60200260200101519350505b610650827f0000000000000000000000000000000000000000000000000000000000000000611fab565b5050949350505050565b600080807f00000000000000000000000000000000000000000000000000000000000000006106898a89611dc5565b97506106958988611dc5565b96506106c28a7f00000000000000000000000000000000000000000000000000000000000000008a611e86565b6106ed897f000000000000000000000000000000000000000000000000000000000000000089611e86565b60405162e8e33760e81b81526001600160a01b038b811660048301528a81166024830152604482018a9052606482018990526084820188905260a482018790523060c48301524260e483015282169063e8e3370090610104016060604051808303816000875af1925050508015610781575060408051601f3d908101601f1916820190925261077e91810190612b2b565b60015b6108155761078d612a85565b806308c379a014156107e157506107a2612aa1565b806107ad57506107e3565b6107db6040518060400160405280600c81526020016b6164644c697175696469747960a01b81525082611f0e565b5061081d565b505b6108106040518060400160405280600c81526020016b6164644c697175696469747960a01b815250611f69565b61081d565b919550935091505b6108478a7f0000000000000000000000000000000000000000000000000000000000000000611fab565b610871897f0000000000000000000000000000000000000000000000000000000000000000611fab565b60006108df826001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d89190612b59565b8c8c6120eb565b600080546001810182559080526001600160a01b0382167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563909101559050505096509650969350505050565b600061099860028484905010156040518060400160405280601881526020017f73776170546f6b656e73466f724578616374546f6b656e7300000000000000008152506040518060400160405280600c81526020016b0d2dcecc2d8d2c840e0c2e8d60a31b815250611db1565b6000838360008181106109ad576109ad6128e1565b90506020020160208101906109c291906128f7565b9050600084846109d3600182612b76565b8181106109e2576109e26128e1565b90506020020160208101906109f791906128f7565b90507f0000000000000000000000000000000000000000000000000000000000000000610a248388611dc5565b9650610a51837f000000000000000000000000000000000000000000000000000000000000000089611e86565b604051634401edf760e11b81526001600160a01b03821690638803dbee90610a87908b908b908b908b903090429060040161295d565b6000604051808303816000875af1925050508015610ac757506040513d6000823e601f3d908101601f19168201604052610ac491908101906129de565b60015b610b7d57610ad3612a85565b806308c379a01415610b385750610ae8612aa1565b80610af35750610b3a565b610b326040518060400160405280601881526020017f73776170546f6b656e73466f724578616374546f6b656e73000000000000000081525082611f0e565b50610b9c565b505b610b786040518060400160405280601881526020017f73776170546f6b656e73466f724578616374546f6b656e730000000000000000815250611f69565b610b9c565b80600081518110610b9057610b906128e1565b60200260200101519450505b610bc6837f0000000000000000000000000000000000000000000000000000000000000000611fab565b600080546001810182559080526001600160a01b0383167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910155505050949350505050565b600080807f0000000000000000000000000000000000000000000000000000000000000000610c3c828a611dc5565b9850610c488888611dc5565b9650610c75887f000000000000000000000000000000000000000000000000000000000000000089611e86565b60405163f305d71960e01b81526001600160a01b0389811660048301526024820189905260448201889052606482018790523060848301524260a483015282169063f305d719908b9060c40160606040518083038185885af193505050508015610cfc575060408051601f3d908101601f19168201909252610cf991810190612b2b565b60015b610d9657610d08612a85565b806308c379a01415610d5f5750610d1d612aa1565b80610d285750610d61565b610d596040518060400160405280600f81526020016e0c2c8c898d2e2ead2c8d2e8f28aa89608b1b81525082611f0e565b50610d9e565b505b610d916040518060400160405280600f81526020016e0c2c8c898d2e2ead2c8d2e8f28aa89608b1b815250611f69565b610d9e565b919550935091505b610dc8887f0000000000000000000000000000000000000000000000000000000000000000611fab565b6000610e97826001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2f9190612b59565b8a846001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e929190612b59565b6120eb565b600080546001810182559080526001600160a01b0382167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015590505050955095509592505050565b6000610f4f60028484905010156040518060400160405280601881526020017f737761704578616374546f6b656e73466f72546f6b656e7300000000000000008152506040518060400160405280600c81526020016b0d2dcecc2d8d2c840e0c2e8d60a31b815250611db1565b600083836000818110610f6457610f646128e1565b9050602002016020810190610f7991906128f7565b905060008484610f8a600182612b76565b818110610f9957610f996128e1565b9050602002016020810190610fae91906128f7565b90507f0000000000000000000000000000000000000000000000000000000000000000610fdb8389611dc5565b9750611008837f00000000000000000000000000000000000000000000000000000000000000008a611e86565b6040516338ed173960e01b81526001600160a01b038216906338ed17399061103e908b908b908b908b903090429060040161295d565b6000604051808303816000875af192505050801561107e57506040513d6000823e601f3d908101601f1916820160405261107b91908101906129de565b60015b6111295761108a612a85565b806308c379a014156110e9575061109f612aa1565b806110aa57506110eb565b610b326040518060400160405280601881526020017f737761704578616374546f6b656e73466f72546f6b656e73000000000000000081525082611f0e565b505b610b786040518060400160405280601881526020017f737761704578616374546f6b656e73466f72546f6b656e730000000000000000815250611f69565b80600182516111389190612b76565b81518110610b9057610b906128e1565b60006111b560028484905010156040518060400160405280601581526020017f73776170455448466f724578616374546f6b656e7300000000000000000000008152506040518060400160405280600c81526020016b0d2dcecc2d8d2c840e0c2e8d60a31b815250611db1565b600083836111c4600182612b76565b8181106111d3576111d36128e1565b90506020020160208101906111e891906128f7565b90507f0000000000000000000000000000000000000000000000000000000000000000611216600088611dc5565b9650806001600160a01b031663fb3bdb418888888830426040518763ffffffff1660e01b815260040161124d959493929190612b9b565b60006040518083038185885af19350505050801561128d57506040513d6000823e601f3d908101601f1916820160405261128a91908101906129de565b60015b61134357611299612a85565b806308c379a014156112fe57506112ae612aa1565b806112b95750611300565b6112f86040518060400160405280601581526020017f73776170455448466f724578616374546f6b656e73000000000000000000000081525082611f0e565b50611362565b505b61133e6040518060400160405280601581526020017f73776170455448466f724578616374546f6b656e730000000000000000000000815250611f69565b611362565b80600081518110611356576113566128e1565b60200260200101519350505b600080546001810182559080526001600160a01b0383167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910155610650565b60008060007f000000000000000000000000000000000000000000000000000000000000000090506000611471826001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561140e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114329190612b59565b89846001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e6e573d6000803e3d6000fd5b905061147d8188611dc5565b96506114aa817f000000000000000000000000000000000000000000000000000000000000000089611e86565b604051629d473b60e21b81526001600160a01b0389811660048301526024820189905260448201889052606482018790523060848301524260a48301528316906302751cec9060c40160408051808303816000875af192505050801561152d575060408051601f3d908101601f1916820190925261152a91810190612bd2565b60015b6115e357611539612a85565b806308c379a0141561159e575061154e612aa1565b8061155957506115a0565b6115986040518060400160405280601281526020017f72656d6f76654c6971756964697479455448000000000000000000000000000081525082611f0e565b506115e9565b505b6115de6040518060400160405280601281526020017f72656d6f76654c69717569646974794554480000000000000000000000000000815250611f69565b6115e9565b90945092505b611613817f0000000000000000000000000000000000000000000000000000000000000000611fab565b600080546001810182559080526001600160a01b0389167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910155505094509492505050565b60405162461bcd60e51b815260206004820152601460248201527f496e76616c696420706f73742070726f6365737300000000000000000000000060448201526064015b60405180910390fd5b600061171460028484905010156040518060400160405280601581526020017f737761704578616374455448466f72546f6b656e7300000000000000000000008152506040518060400160405280600c81526020016b0d2dcecc2d8d2c840e0c2e8d60a31b815250611db1565b60008383611723600182612b76565b818110611732576117326128e1565b905060200201602081019061174791906128f7565b90507f0000000000000000000000000000000000000000000000000000000000000000611775600088611dc5565b9650806001600160a01b0316637ff36ab58888888830426040518763ffffffff1660e01b81526004016117ac959493929190612b9b565b60006040518083038185885af1935050505080156117ec57506040513d6000823e601f3d908101601f191682016040526117e991908101906129de565b60015b611897576117f8612a85565b806308c379a01415611857575061180d612aa1565b806118185750611859565b6112f86040518060400160405280601581526020017f737761704578616374455448466f72546f6b656e73000000000000000000000081525082611f0e565b505b61133e6040518060400160405280601581526020017f737761704578616374455448466f72546f6b656e730000000000000000000000815250611f69565b80600182516118a69190612b76565b81518110611356576113566128e1565b600081815481106118c657600080fd5b600091825260209091200154905081565b60008060007f00000000000000000000000000000000000000000000000000000000000000009050600061196d826001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611942573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119669190612b59565b8a8a6120eb565b90506119798188611dc5565b96506119a6817f000000000000000000000000000000000000000000000000000000000000000089611e86565b604051635d5155ef60e11b81526001600160a01b038a8116600483015289811660248301526044820189905260648201889052608482018790523060a48301524260c483015283169063baa2abde9060e40160408051808303816000875af1925050508015611a32575060408051601f3d908101601f19168201909252611a2f91810190612bd2565b60015b611acc57611a3e612a85565b806308c379a01415611a955750611a53612aa1565b80611a5e5750611a97565b611a8f6040518060400160405280600f81526020016e72656d6f76654c697175696469747960881b81525082611f0e565b50611ad2565b505b611ac76040518060400160405280600f81526020016e72656d6f76654c697175696469747960881b815250611f69565b611ad2565b90945092505b611afc817f0000000000000000000000000000000000000000000000000000000000000000611fab565b600080546001810182559080526001600160a01b038a167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910155600080546001810182559080526001600160a01b0389167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015550509550959350505050565b6000611bed60028484905010156040518060400160405280601581526020017f737761704578616374546f6b656e73466f7245544800000000000000000000008152506040518060400160405280600c81526020016b0d2dcecc2d8d2c840e0c2e8d60a31b815250611db1565b600083836000818110611c0257611c026128e1565b9050602002016020810190611c1791906128f7565b90507f0000000000000000000000000000000000000000000000000000000000000000611c448288611dc5565b9650611c71827f000000000000000000000000000000000000000000000000000000000000000089611e86565b6040516318cbafe560e01b81526001600160a01b038216906318cbafe590611ca7908a908a908a908a903090429060040161295d565b6000604051808303816000875af1925050508015611ce757506040513d6000823e601f3d908101601f19168201604052611ce491908101906129de565b60015b611d9257611cf3612a85565b806308c379a01415611d525750611d08612aa1565b80611d135750611d54565b6105bc6040518060400160405280601581526020017f737761704578616374546f6b656e73466f72455448000000000000000000000081525082611f0e565b505b6106026040518060400160405280601581526020017f737761704578616374546f6b656e73466f724554480000000000000000000000815250611f69565b8060018251611da19190612b76565b8151811061061a5761061a6128e1565b82611dc057611dc08282611f0e565b505050565b60006000198214611dd7575080611e80565b6001600160a01b0383161580611e0957506001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee145b15611e15575047611e80565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa158015611e59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e7d9190612bf6565b90505b92915050565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b390604401600060405180830381600087803b158015611ed057600080fd5b505af1925050508015611ee1575060015b611dc057611efa6001600160a01b0384168360006121dc565b611dc06001600160a01b03841683836121dc565b60408051808201909152600a815269242ab734b9bbb0b82b1960b11b60208201528282604051602001611f4393929190612c0f565b60408051601f198184030181529082905262461bcd60e51b825261169e916004016128ae565b611fa8816040518060400160405280600b81526020017f556e737065636966696564000000000000000000000000000000000000000000815250611f0e565b50565b604051636eb1769f60e11b81523060048201526001600160a01b0382811660248301526000919084169063dd62ed3e90604401602060405180830381865afa158015611ffb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201f9190612bf6565b11156120e75760405163095ea7b360e01b81526001600160a01b0382811660048301526000602483015283169063095ea7b390604401600060405180830381600087803b15801561206f57600080fd5b505af1925050508015612080575060015b6120e75760405163095ea7b360e01b81526001600160a01b0382811660048301526001602483015283169063095ea7b390604401600060405180830381600087803b1580156120ce57600080fd5b505af11580156120e2573d6000803e3d6000fd5b505050505b5050565b60008060006120fa858561232f565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b16603482015291935091508690604801604051602081830303815290604052805190602001206040516020016121ba9291907fff00000000000000000000000000000000000000000000000000000000000000815260609290921b6bffffffffffffffffffffffff1916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b60408051601f1981840301815291905280516020909101209695505050505050565b8015806122565750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015612230573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122549190612bf6565b155b6122c85760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161169e565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b179052611dc090849061243f565b600080826001600160a01b0316846001600160a01b031614156123ba5760405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f4144445260448201527f4553534553000000000000000000000000000000000000000000000000000000606482015260840161169e565b826001600160a01b0316846001600160a01b0316106123da5782846123dd565b83835b90925090506001600160a01b0382166124385760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015260640161169e565b9250929050565b6000612494826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166125249092919063ffffffff16565b805190915015611dc057808060200190518101906124b29190612c6f565b611dc05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161169e565b6060612533848460008561253d565b90505b9392505050565b6060824710156125b55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161169e565b6001600160a01b0385163b61260c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161169e565b600080866001600160a01b031685876040516126289190612c91565b60006040518083038185875af1925050503d8060008114612665576040519150601f19603f3d011682016040523d82523d6000602084013e61266a565b606091505b509150915061267a828286612685565b979650505050505050565b60608315612694575081612536565b8251156126a45782518084602001fd5b8160405162461bcd60e51b815260040161169e91906128ae565b600080600080606085870312156126d457600080fd5b8435935060208501359250604085013567ffffffffffffffff808211156126fa57600080fd5b818701915087601f83011261270e57600080fd5b81358181111561271d57600080fd5b8860208260051b850101111561273257600080fd5b95989497505060200194505050565b6001600160a01b0381168114611fa857600080fd5b60008060008060008060c0878903121561276f57600080fd5b863561277a81612741565b9550602087013561278a81612741565b95989597505050506040840135936060810135936080820135935060a0909101359150565b600080600080600060a086880312156127c757600080fd5b8535945060208601356127d981612741565b94979496505050506040830135926060810135926080909101359150565b60006020828403121561280957600080fd5b5035919050565b6000806000806080858703121561282657600080fd5b843561283181612741565b966020860135965060408601359560600135945092505050565b600080600080600060a0868803121561286357600080fd5b853561286e81612741565b945060208601356127d981612741565b60005b83811015612899578181015183820152602001612881565b838111156128a8576000848401525b50505050565b60208152600082518060208401526128cd81604085016020870161287e565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561290957600080fd5b813561253681612741565b8183526000602080850194508260005b8581101561295257813561293781612741565b6001600160a01b031687529582019590820190600101612924565b509495945050505050565b86815285602082015260a06040820152600061297d60a083018688612914565b6001600160a01b039490941660608301525060800152949350505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156129d7576129d761299b565b6040525050565b600060208083850312156129f157600080fd5b825167ffffffffffffffff80821115612a0957600080fd5b818501915085601f830112612a1d57600080fd5b815181811115612a2f57612a2f61299b565b8060051b9150604051612a44858401826129b1565b81815291830184019184810188841115612a5d57600080fd5b938501935b83851015612a795784518152938501938501612a62565b50979650505050505050565b600060033d1115612a9e5760046000803e5060005160e01c5b90565b600060443d1015612aaf5790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715612adf57505050505090565b8285019150815181811115612af75750505050505090565b843d8701016020828501011115612b115750505050505090565b612b20602082860101876129b1565b509095945050505050565b600080600060608486031215612b4057600080fd5b8351925060208401519150604084015190509250925092565b600060208284031215612b6b57600080fd5b815161253681612741565b600082821015612b9657634e487b7160e01b600052601160045260246000fd5b500390565b858152608060208201526000612bb5608083018688612914565b6001600160a01b0394909416604083015250606001529392505050565b60008060408385031215612be557600080fd5b505080516020909101519092909150565b600060208284031215612c0857600080fd5b5051919050565b60008451612c2181846020890161287e565b605f60f81b9083019081528451612c3f81600184016020890161287e565b6101d160f51b600192909101918201528351612c6281600384016020880161287e565b0160030195945050505050565b600060208284031215612c8157600080fd5b8151801515811461253657600080fd5b60008251612ca381846020870161287e565b919091019291505056fea164736f6c634300080a000a";

type HUniswapV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HUniswapV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HUniswapV2__factory extends ContractFactory {
  constructor(...args: HUniswapV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _uniswapV2Router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HUniswapV2> {
    return super.deploy(
      _uniswapV2Router,
      overrides || {}
    ) as Promise<HUniswapV2>;
  }
  override getDeployTransaction(
    _uniswapV2Router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_uniswapV2Router, overrides || {});
  }
  override attach(address: string): HUniswapV2 {
    return super.attach(address) as HUniswapV2;
  }
  override connect(signer: Signer): HUniswapV2__factory {
    return super.connect(signer) as HUniswapV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HUniswapV2Interface {
    return new utils.Interface(_abi) as HUniswapV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HUniswapV2 {
    return new Contract(address, _abi, signerOrProvider) as HUniswapV2;
  }
}