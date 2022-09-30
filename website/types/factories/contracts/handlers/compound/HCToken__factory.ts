/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  HCToken,
  HCTokenInterface,
} from "../../../../contracts/handlers/compound/HCToken";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "redeemUnderlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "repayBorrowBehalf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061191b806100206000396000f3fe6080604052600436106100c75760003560e01c806399eb59b911610074578063df2ebdbb1161004e578063df2ebdbb146101d2578063f5f5ba7214610212578063fa2901a51461024857600080fd5b806399eb59b91461017b578063c2722916146101a8578063dc9031c4146101b257600080fd5b806359086a5e116100a557806359086a5e1461013957806387c139431461014c578063962941781461016857600080fd5b80630f532d18146100cc5780631e9a69501461011357806340c10f1914610126575b600080fd5b3480156100d857600080fd5b506101007fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b6040519081526020015b60405180910390f35b61010061012136600461154a565b610294565b61010061013436600461154a565b61051f565b610100610147366004611576565b610782565b34801561015857600080fd5b50610100670de0b6b3a764000081565b61010061017636600461154a565b6109e6565b34801561018757600080fd5b506101006101963660046115b7565b60016020526000908152604090205481565b6101b0610c52565b005b3480156101be57600080fd5b506101006101cd3660046115b7565b610c9f565b3480156101de57600080fd5b506101fa73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6040516001600160a01b03909116815260200161010a565b34801561021e57600080fd5b5060408051808201825260078152662421aa37b5b2b760c91b6020820152905161010a9190611600565b34801561025457600080fd5b50610263636139148b60e11b81565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161010a565b6000806102a084610cc0565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156102ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030e9190611633565b90508461031b8186610d24565b60405163db006a7560e01b8152600481018290529095506001600160a01b0382169063db006a75906024016020604051808303816000875af1925050508015610381575060408051601f3d908101601f1916820190925261037e91810190611633565b60015b6104095761038d61164c565b806308c379a014156103db57506103a26116b9565b806103ad57506103dd565b6103d56040518060400160405280600681526020016572656465656d60d01b81525082610ddc565b5061045e565b505b6104046040518060400160405280600681526020016572656465656d60d01b815250610e34565b61045e565b61045c816000146040518060400160405280600681526020016572656465656d60d01b81525061043884610e76565b6040516020016104489190611743565b604051602081830303815290604052610fa0565b505b6040516370a0823160e01b81523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156104a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c99190611633565b600080546001810182559080526001600160a01b0386167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015590505b610512838261179e565b9450505050505b92915050565b6040516370a0823160e01b8152306004820152600090839082906001600160a01b038316906370a0823190602401602060405180830381865afa15801561056a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058e9190611633565b9050600061059b86610cc0565b90506105a78186610d24565b94506105b4818787610fb4565b60405163140e25ad60e31b8152600481018690526001600160a01b0384169063a0712d68906024016020604051808303816000875af1925050508015610617575060408051601f3d908101601f1916820190925261061491810190611633565b60015b61069b5761062361164c565b806308c379a0141561066f57506106386116b9565b806106435750610671565b610669604051806040016040528060048152602001631b5a5b9d60e21b81525082610ddc565b506106ca565b505b610696604051806040016040528060048152602001631b5a5b9d60e21b815250610e34565b6106ca565b6106c881600014604051806040016040528060048152602001631b5a5b9d60e21b81525061043884610e76565b505b6106d4818761103c565b6040516370a0823160e01b81523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561071b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073f9190611633565b600080546001810182559080526001600160a01b0389167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563909101559050610508565b6000838161078f82610cc0565b6040516305eff7ef60e21b81526001600160a01b0387811660048301529192506000918416906317bfdfbc906024016020604051808303816000875af11580156107dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108019190611633565b90508085101561080e5750835b610819828883610fb4565b6040516304c11f0360e31b81526001600160a01b03878116600483015260248201839052841690632608f818906044016020604051808303816000875af1925050508015610884575060408051601f3d908101601f1916820190925261088191810190611633565b60015b6109225761089061164c565b806308c379a014156108e957506108a56116b9565b806108b057506108eb565b6108e3604051806040016040528060118152602001703932b830bca137b93937bba132b430b63360791b81525082610ddc565b5061095e565b505b61091d604051806040016040528060118152602001703932b830bca137b93937bba132b430b63360791b815250610e34565b61095e565b61095c81600014604051806040016040528060118152602001703932b830bca137b93937bba132b430b63360791b81525061043884610e76565b505b610968828861103c565b6040516305eff7ef60e21b81526001600160a01b038781166004830152600091908516906317bfdfbc906024016020604051808303816000875af11580156109b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d89190611633565b9450505050505b9392505050565b6040516370a0823160e01b8152306004820152600090839082906001600160a01b038316906370a0823190602401602060405180830381865afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a559190611633565b60405163852a12e360e01b8152600481018690529091506001600160a01b0383169063852a12e3906024016020604051808303816000875af1925050508015610abb575060408051601f3d908101601f19168201909252610ab891810190611633565b60015b610b5757610ac761164c565b806308c379a01415610b1f5750610adc6116b9565b80610ae75750610b21565b610b196040518060400160405280601081526020016f72656465656d556e6465726c79696e6760801b81525082610ddc565b50610b92565b505b610b526040518060400160405280601081526020016f72656465656d556e6465726c79696e6760801b815250610e34565b610b92565b610b90816000146040518060400160405280601081526020016f72656465656d556e6465726c79696e6760801b81525061043884610e76565b505b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610bd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfd9190611633565b90506000610c0a87610cc0565b600080546001810182559080526001600160a01b0382167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563909101559050610512828461179e565b60405162461bcd60e51b815260206004820152601460248201527f496e76616c696420706f73742070726f6365737300000000000000000000000060448201526064015b60405180910390fd5b60008181548110610caf57600080fd5b600091825260209091200154905081565b6000816001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d00573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051991906117b5565b60006000198214610d36575080610519565b6001600160a01b0383161580610d6857506001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee145b15610d74575047610519565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa158015610db8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190611633565b6040805180820190915260078152662421aa37b5b2b760c91b60208201528282604051602001610e0e939291906117d2565b60408051601f198184030181529082905262461bcd60e51b8252610c9691600401611600565b610e73816040518060400160405280600b81526020017f556e737065636966696564000000000000000000000000000000000000000000815250610ddc565b50565b606081610e9a5750506040805180820190915260018152600360fc1b602082015290565b6000825b8015610ec45781610eae81611832565b9250610ebd9050600a82611863565b9050610e9e565b5060008167ffffffffffffffff811115610ee057610ee0611668565b6040519080825280601f01601f191660200182016040528015610f0a576020820181803683370190505b509050815b8015610f9857610f20600a86611877565b610f2b90603061188b565b60f81b82610f3a60018461179e565b81518110610f4a57610f4a6118a3565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610f84600a86611863565b945080610f90816118b9565b915050610f0f565b509392505050565b82610faf57610faf8282610ddc565b505050565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b390604401600060405180830381600087803b158015610ffe57600080fd5b505af192505050801561100f575060015b610faf576110286001600160a01b03841683600061117c565b610faf6001600160a01b038416838361117c565b604051636eb1769f60e11b81523060048201526001600160a01b0382811660248301526000919084169063dd62ed3e90604401602060405180830381865afa15801561108c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b09190611633565b11156111785760405163095ea7b360e01b81526001600160a01b0382811660048301526000602483015283169063095ea7b390604401600060405180830381600087803b15801561110057600080fd5b505af1925050508015611111575060015b6111785760405163095ea7b360e01b81526001600160a01b0382811660048301526001602483015283169063095ea7b390604401600060405180830381600087803b15801561115f57600080fd5b505af1158015611173573d6000803e3d6000fd5b505050505b5050565b8015806111f65750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156111d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f49190611633565b155b6112685760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610c96565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610faf9286929160009161130d91851690849061139d565b805190915015610faf578080602001905181019061132b91906118d0565b610faf5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c96565b60606113ac84846000856113b4565b949350505050565b60608247101561142c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c96565b6001600160a01b0385163b6114835760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c96565b600080866001600160a01b0316858760405161149f91906118f2565b60006040518083038185875af1925050503d80600081146114dc576040519150601f19603f3d011682016040523d82523d6000602084013e6114e1565b606091505b50915091506114f18282866114fc565b979650505050505050565b6060831561150b5750816109df565b82511561151b5782518084602001fd5b8160405162461bcd60e51b8152600401610c969190611600565b6001600160a01b0381168114610e7357600080fd5b6000806040838503121561155d57600080fd5b823561156881611535565b946020939093013593505050565b60008060006060848603121561158b57600080fd5b833561159681611535565b925060208401356115a681611535565b929592945050506040919091013590565b6000602082840312156115c957600080fd5b5035919050565b60005b838110156115eb5781810151838201526020016115d3565b838111156115fa576000848401525b50505050565b602081526000825180602084015261161f8160408501602087016115d0565b601f01601f19169190910160400192915050565b60006020828403121561164557600080fd5b5051919050565b600060033d11156116655760046000803e5060005160e01c5b90565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156116b257634e487b7160e01b600052604160045260246000fd5b6040525050565b600060443d10156116c75790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156116f757505050505090565b828501915081518181111561170f5750505050505090565b843d87010160208285010111156117295750505050505090565b6117386020828601018761167e565b509095945050505050565b7f6572726f7220000000000000000000000000000000000000000000000000000081526000825161177b8160068501602087016115d0565b9190910160060192915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156117b0576117b0611788565b500390565b6000602082840312156117c757600080fd5b81516109df81611535565b600084516117e48184602089016115d0565b605f60f81b90830190815284516118028160018401602089016115d0565b6101d160f51b6001929091019182015283516118258160038401602088016115d0565b0160030195945050505050565b600060001982141561184657611846611788565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826118725761187261184d565b500490565b6000826118865761188661184d565b500690565b6000821982111561189e5761189e611788565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816118c8576118c8611788565b506000190190565b6000602082840312156118e257600080fd5b815180151581146109df57600080fd5b600082516119048184602087016115d0565b919091019291505056fea164736f6c634300080a000a";

type HCTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HCTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HCToken__factory extends ContractFactory {
  constructor(...args: HCTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HCToken> {
    return super.deploy(overrides || {}) as Promise<HCToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HCToken {
    return super.attach(address) as HCToken;
  }
  override connect(signer: Signer): HCToken__factory {
    return super.connect(signer) as HCToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HCTokenInterface {
    return new utils.Interface(_abi) as HCTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HCToken {
    return new Contract(address, _abi, signerOrProvider) as HCToken;
  }
}