/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IDSProxy,
  IDSProxyInterface,
} from "../../../../../contracts/handlers/maker/IDSProxy.sol/IDSProxy";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes32",
        name: "response",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "authority_",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDSProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IDSProxyInterface {
    return new utils.Interface(_abi) as IDSProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDSProxy {
    return new Contract(address, _abi, signerOrProvider) as IDSProxy;
  }
}
