/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IMakerGemJoinInterface extends utils.Interface {
  functions: {
    "dec()": FunctionFragment;
    "exit(address,uint256)": FunctionFragment;
    "gem()": FunctionFragment;
    "join(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "dec" | "exit" | "gem" | "join"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "dec", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "gem", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "join",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "dec", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;

  events: {};
}

export interface IMakerGemJoin extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMakerGemJoinInterface;

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
    dec(overrides?: CallOverrides): Promise<[BigNumber]>;

    exit(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gem(overrides?: CallOverrides): Promise<[string]>;

    join(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  dec(overrides?: CallOverrides): Promise<BigNumber>;

  exit(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gem(overrides?: CallOverrides): Promise<string>;

  join(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    dec(overrides?: CallOverrides): Promise<BigNumber>;

    exit(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    gem(overrides?: CallOverrides): Promise<string>;

    join(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    dec(overrides?: CallOverrides): Promise<BigNumber>;

    exit(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gem(overrides?: CallOverrides): Promise<BigNumber>;

    join(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    dec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gem(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    join(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
