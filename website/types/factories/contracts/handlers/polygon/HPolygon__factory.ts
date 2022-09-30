/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  HPolygon,
  HPolygonInterface,
} from "../../../../contracts/handlers/polygon/HPolygon";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PolygonBridged",
    type: "event",
  },
  {
    inputs: [],
    name: "MATIC_ADDRESS",
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
    name: "PLASMA_MANAGER",
    outputs: [
      {
        internalType: "contract IDepositManager",
        name: "",
        type: "address",
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
    name: "POS_MANAGER",
    outputs: [
      {
        internalType: "contract IRootChainManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POS_PREDICATE_ERC20",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositERC20",
    outputs: [],
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
    ],
    name: "depositEther",
    outputs: [],
    stateMutability: "payable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061123b806100206000396000f3fe6080604052600436106100dd5760003560e01c8063c27229161161007f578063df2ebdbb11610059578063df2ebdbb14610252578063e50eb4c81461027a578063f5f5ba72146102a2578063fa2901a5146102d957600080fd5b8063c272291614610202578063c71ffe5d1461020a578063dc9031c41461023257600080fd5b806326839f17116100bb57806326839f171461019157806387c13943146101a657806397feb926146101c257806399eb59b9146101d557600080fd5b80630278b670146100e25780630bd85ca7146101275780630f532d181461014f575b600080fd5b3480156100ee57600080fd5b5061010a73a0c68c638235ee32657e8f720a23cec1bfc77c7781565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013357600080fd5b5061010a737d1afa7b718fb893db30a3abc0cfc608aacfebb081565b34801561015b57600080fd5b506101837fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b60405190815260200161011e565b6101a461019f366004610fa1565b610325565b005b3480156101b257600080fd5b50610183670de0b6b3a764000081565b6101a46101d0366004610fba565b6104d7565b3480156101e157600080fd5b506101836101f0366004610fa1565b60016020526000908152604090205481565b6101a461084f565b34801561021657600080fd5b5061010a7340ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf81565b34801561023e57600080fd5b5061018361024d366004610fa1565b61089c565b34801561025e57600080fd5b5061010a73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561028657600080fd5b5061010a73401f6c983ea34274ec46f84d70b31c151321188b81565b3480156102ae57600080fd5b506040805180820182526008815267242837b63cb3b7b760c11b6020820152905161011e919061104e565b3480156102e557600080fd5b506102f4636139148b60e11b81565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161011e565b60006103787fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b90506103856000836108bd565b6040516327d5451360e11b81526001600160a01b038316600482015290925073a0c68c638235ee32657e8f720a23cec1bfc77c7790634faa8a269084906024016000604051808303818588803b1580156103de57600080fd5b505af1935050505080156103f0575060015b61047f576103fc611061565b806308c379a0141561045057506104116110b8565b8061041c5750610452565b61044a6040518060400160405280600c81526020016b3232b837b9b4ba22ba3432b960a11b8152508261097e565b5061047f565b505b61047f6040518060400160405280600c81526020016b3232b837b9b4ba22ba3432b960a11b8152506109d7565b60405182815273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee906001600160a01b038316907f3dad4cff57d5936bbc3bf46df565c9f1545c580c0efef238c7363402b42ba8649060200160405180910390a35050565b600061052a7fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a60005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b905061053683836108bd565b91506001600160a01b038316737d1afa7b718fb893db30a3abc0cfc608aacfebb014156106a35761057c8373401f6c983ea34274ec46f84d70b31c151321188b84610a19565b604051638b9e4f9360e01b81526001600160a01b038085166004830152821660248201526044810183905273401f6c983ea34274ec46f84d70b31c151321188b90638b9e4f9390606401600060405180830381600087803b1580156105e057600080fd5b505af19250505080156105f1575060015b610680576105fd611061565b806308c379a0141561065157506106126110b8565b8061061d5750610653565b61064b6040518060400160405280600c81526020016b06465706f73697445524332360a41b8152508261097e565b50610680565b505b6106806040518060400160405280600c81526020016b06465706f73697445524332360a41b8152506109d7565b61069e8373401f6c983ea34274ec46f84d70b31c151321188b610aa6565b6107fd565b6000826040516020016106b891815260200190565b60405160208183030381529060405290506106e8847340ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf85610a19565b60405163e3dec8fb60e01b815273a0c68c638235ee32657e8f720a23cec1bfc77c779063e3dec8fb9061072390859088908690600401611142565b600060405180830381600087803b15801561073d57600080fd5b505af192505050801561074e575060015b6107dd5761075a611061565b806308c379a014156107ae575061076f6110b8565b8061077a57506107b0565b6107a86040518060400160405280600c81526020016b06465706f73697445524332360a41b8152508261097e565b506107dd565b505b6107dd6040518060400160405280600c81526020016b06465706f73697445524332360a41b8152506109d7565b6107fb847340ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf610aa6565b505b826001600160a01b0316816001600160a01b03167f3dad4cff57d5936bbc3bf46df565c9f1545c580c0efef238c7363402b42ba8648460405161084291815260200190565b60405180910390a3505050565b60405162461bcd60e51b815260206004820152601460248201527f496e76616c696420706f73742070726f6365737300000000000000000000000060448201526064015b60405180910390fd5b600081815481106108ac57600080fd5b600091825260209091200154905081565b600060001982146108cf575080610978565b6001600160a01b038316158061090157506001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee145b1561090d575047610978565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa158015610951573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109759190611177565b90505b92915050565b604080518082019091526008815267242837b63cb3b7b760c11b602082015282826040516020016109b193929190611190565b60408051601f198184030181529082905262461bcd60e51b82526108939160040161104e565b610a16816040518060400160405280600b81526020017f556e73706563696669656400000000000000000000000000000000000000000081525061097e565b50565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b390604401600060405180830381600087803b158015610a6357600080fd5b505af1925050508015610a74575060015b610aa157610a8d6001600160a01b038416836000610be6565b610aa16001600160a01b0384168383610be6565b505050565b604051636eb1769f60e11b81523060048201526001600160a01b0382811660248301526000919084169063dd62ed3e90604401602060405180830381865afa158015610af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1a9190611177565b1115610be25760405163095ea7b360e01b81526001600160a01b0382811660048301526000602483015283169063095ea7b390604401600060405180830381600087803b158015610b6a57600080fd5b505af1925050508015610b7b575060015b610be25760405163095ea7b360e01b81526001600160a01b0382811660048301526001602483015283169063095ea7b390604401600060405180830381600087803b158015610bc957600080fd5b505af1158015610bdd573d6000803e3d6000fd5b505050505b5050565b801580610c605750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610c3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5e9190611177565b155b610cd25760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610893565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610aa192869291600091610d77918516908490610e07565b805190915015610aa15780806020019051810190610d9591906111f0565b610aa15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610893565b6060610e168484600085610e20565b90505b9392505050565b606082471015610e985760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610893565b6001600160a01b0385163b610eef5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610893565b600080866001600160a01b03168587604051610f0b9190611212565b60006040518083038185875af1925050503d8060008114610f48576040519150601f19603f3d011682016040523d82523d6000602084013e610f4d565b606091505b5091509150610f5d828286610f68565b979650505050505050565b60608315610f77575081610e19565b825115610f875782518084602001fd5b8160405162461bcd60e51b8152600401610893919061104e565b600060208284031215610fb357600080fd5b5035919050565b60008060408385031215610fcd57600080fd5b82356001600160a01b0381168114610fe457600080fd5b946020939093013593505050565b60005b8381101561100d578181015183820152602001610ff5565b8381111561101c576000848401525b50505050565b6000815180845261103a816020860160208601610ff2565b601f01601f19169290920160200192915050565b6020815260006109756020830184611022565b600060033d111561107a5760046000803e5060005160e01c5b90565b601f8201601f1916810167ffffffffffffffff811182821017156110b157634e487b7160e01b600052604160045260246000fd5b6040525050565b600060443d10156110c65790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156110f657505050505090565b828501915081518181111561110e5750505050505090565b843d87010160208285010111156111285750505050505090565b6111376020828601018761107d565b509095945050505050565b60006001600160a01b0380861683528085166020840152506060604083015261116e6060830184611022565b95945050505050565b60006020828403121561118957600080fd5b5051919050565b600084516111a2818460208901610ff2565b605f60f81b90830190815284516111c0816001840160208901610ff2565b6101d160f51b6001929091019182015283516111e3816003840160208801610ff2565b0160030195945050505050565b60006020828403121561120257600080fd5b81518015158114610e1957600080fd5b60008251611224818460208701610ff2565b919091019291505056fea164736f6c634300080a000a";

type HPolygonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HPolygonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HPolygon__factory extends ContractFactory {
  constructor(...args: HPolygonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HPolygon> {
    return super.deploy(overrides || {}) as Promise<HPolygon>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HPolygon {
    return super.attach(address) as HPolygon;
  }
  override connect(signer: Signer): HPolygon__factory {
    return super.connect(signer) as HPolygon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HPolygonInterface {
    return new utils.Interface(_abi) as HPolygonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HPolygon {
    return new Contract(address, _abi, signerOrProvider) as HPolygon;
  }
}
