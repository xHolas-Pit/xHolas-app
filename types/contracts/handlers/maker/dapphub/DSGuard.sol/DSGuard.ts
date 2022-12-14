/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface DSGuardInterface extends utils.Interface {
  functions: {
    "ANY()": FunctionFragment;
    "authority()": FunctionFragment;
    "canCall(address,address,bytes4)": FunctionFragment;
    "forbid(address,address,bytes32)": FunctionFragment;
    "forbid(bytes32,bytes32,bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "permit(address,address,bytes32)": FunctionFragment;
    "permit(bytes32,bytes32,bytes32)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ANY"
      | "authority"
      | "canCall"
      | "forbid(address,address,bytes32)"
      | "forbid(bytes32,bytes32,bytes32)"
      | "owner"
      | "permit(address,address,bytes32)"
      | "permit(bytes32,bytes32,bytes32)"
      | "setAuthority"
      | "setOwner"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ANY", values?: undefined): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "forbid(address,address,bytes32)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "forbid(bytes32,bytes32,bytes32)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permit(address,address,bytes32)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permit(bytes32,bytes32,bytes32)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "ANY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forbid(address,address,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forbid(bytes32,bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permit(address,address,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permit(bytes32,bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {
    "LogForbid(bytes32,bytes32,bytes32)": EventFragment;
    "LogPermit(bytes32,bytes32,bytes32)": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogForbid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogPermit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
}

export interface LogForbidEventObject {
  src: string;
  dst: string;
  sig: string;
}
export type LogForbidEvent = TypedEvent<
  [string, string, string],
  LogForbidEventObject
>;

export type LogForbidEventFilter = TypedEventFilter<LogForbidEvent>;

export interface LogPermitEventObject {
  src: string;
  dst: string;
  sig: string;
}
export type LogPermitEvent = TypedEvent<
  [string, string, string],
  LogPermitEventObject
>;

export type LogPermitEventFilter = TypedEventFilter<LogPermitEvent>;

export interface LogSetAuthorityEventObject {
  authority: string;
}
export type LogSetAuthorityEvent = TypedEvent<
  [string],
  LogSetAuthorityEventObject
>;

export type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;

export interface LogSetOwnerEventObject {
  owner: string;
}
export type LogSetOwnerEvent = TypedEvent<[string], LogSetOwnerEventObject>;

export type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;

export interface DSGuard extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DSGuardInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ANY(overrides?: CallOverrides): Promise<[string]>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    canCall(
      src_: PromiseOrValue<string>,
      dst_: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "forbid(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "forbid(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "permit(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "permit(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ANY(overrides?: CallOverrides): Promise<string>;

  authority(overrides?: CallOverrides): Promise<string>;

  canCall(
    src_: PromiseOrValue<string>,
    dst_: PromiseOrValue<string>,
    sig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "forbid(address,address,bytes32)"(
    src: PromiseOrValue<string>,
    dst: PromiseOrValue<string>,
    sig: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "forbid(bytes32,bytes32,bytes32)"(
    src: PromiseOrValue<BytesLike>,
    dst: PromiseOrValue<BytesLike>,
    sig: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "permit(address,address,bytes32)"(
    src: PromiseOrValue<string>,
    dst: PromiseOrValue<string>,
    sig: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "permit(bytes32,bytes32,bytes32)"(
    src: PromiseOrValue<BytesLike>,
    dst: PromiseOrValue<BytesLike>,
    sig: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAuthority(
    authority_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ANY(overrides?: CallOverrides): Promise<string>;

    authority(overrides?: CallOverrides): Promise<string>;

    canCall(
      src_: PromiseOrValue<string>,
      dst_: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "forbid(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "forbid(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "permit(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "permit(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogForbid(bytes32,bytes32,bytes32)"(
      src?: PromiseOrValue<BytesLike> | null,
      dst?: PromiseOrValue<BytesLike> | null,
      sig?: PromiseOrValue<BytesLike> | null
    ): LogForbidEventFilter;
    LogForbid(
      src?: PromiseOrValue<BytesLike> | null,
      dst?: PromiseOrValue<BytesLike> | null,
      sig?: PromiseOrValue<BytesLike> | null
    ): LogForbidEventFilter;

    "LogPermit(bytes32,bytes32,bytes32)"(
      src?: PromiseOrValue<BytesLike> | null,
      dst?: PromiseOrValue<BytesLike> | null,
      sig?: PromiseOrValue<BytesLike> | null
    ): LogPermitEventFilter;
    LogPermit(
      src?: PromiseOrValue<BytesLike> | null,
      dst?: PromiseOrValue<BytesLike> | null,
      sig?: PromiseOrValue<BytesLike> | null
    ): LogPermitEventFilter;

    "LogSetAuthority(address)"(
      authority?: PromiseOrValue<string> | null
    ): LogSetAuthorityEventFilter;
    LogSetAuthority(
      authority?: PromiseOrValue<string> | null
    ): LogSetAuthorityEventFilter;

    "LogSetOwner(address)"(
      owner?: PromiseOrValue<string> | null
    ): LogSetOwnerEventFilter;
    LogSetOwner(owner?: PromiseOrValue<string> | null): LogSetOwnerEventFilter;
  };

  estimateGas: {
    ANY(overrides?: CallOverrides): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    canCall(
      src_: PromiseOrValue<string>,
      dst_: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "forbid(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "forbid(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "permit(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "permit(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ANY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canCall(
      src_: PromiseOrValue<string>,
      dst_: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "forbid(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "forbid(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "permit(address,address,bytes32)"(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "permit(bytes32,bytes32,bytes32)"(
      src: PromiseOrValue<BytesLike>,
      dst: PromiseOrValue<BytesLike>,
      sig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
