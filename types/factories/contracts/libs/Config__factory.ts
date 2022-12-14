/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../common";
import type { Config, ConfigInterface } from "../../../contracts/libs/Config";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060a28061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806387c13943146037578063fa2901a5146058575b600080fd5b6045670de0b6b3a764000081565b6040519081526020015b60405180910390f35b6065636139148b60e11b81565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001604f56fea164736f6c634300080a000a";

type ConfigConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfigConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Config__factory extends ContractFactory {
  constructor(...args: ConfigConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Config> {
    return super.deploy(overrides || {}) as Promise<Config>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Config {
    return super.attach(address) as Config;
  }
  override connect(signer: Signer): Config__factory {
    return super.connect(signer) as Config__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfigInterface {
    return new utils.Interface(_abi) as ConfigInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Config {
    return new Contract(address, _abi, signerOrProvider) as Config;
  }
}
