/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";
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

export interface HAaveProtocolV2Interface extends utils.Interface {
  functions: {
    "MSG_SENDER_KEY()": FunctionFragment;
    "NATIVE_TOKEN_ADDRESS()": FunctionFragment;
    "PERCENTAGE_BASE()": FunctionFragment;
    "POSTPROCESS_SIG()": FunctionFragment;
    "PROVIDER()": FunctionFragment;
    "REFERRAL_CODE()": FunctionFragment;
    "WETH()": FunctionFragment;
    "borrow(address,uint256,uint256)": FunctionFragment;
    "borrowETH(uint256,uint256)": FunctionFragment;
    "cache(bytes32)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "depositETH(uint256)": FunctionFragment;
    "executeOperation(address[],uint256[],uint256[],address,bytes)": FunctionFragment;
    "flashLoan(address[],uint256[],uint256[],bytes)": FunctionFragment;
    "getContractName()": FunctionFragment;
    "postProcess()": FunctionFragment;
    "repay(address,uint256,uint256,address)": FunctionFragment;
    "repayETH(uint256,uint256,address)": FunctionFragment;
    "stack(uint256)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawETH(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MSG_SENDER_KEY"
      | "NATIVE_TOKEN_ADDRESS"
      | "PERCENTAGE_BASE"
      | "POSTPROCESS_SIG"
      | "PROVIDER"
      | "REFERRAL_CODE"
      | "WETH"
      | "borrow"
      | "borrowETH"
      | "cache"
      | "deposit"
      | "depositETH"
      | "executeOperation"
      | "flashLoan"
      | "getContractName"
      | "postProcess"
      | "repay"
      | "repayETH"
      | "stack"
      | "withdraw"
      | "withdrawETH"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MSG_SENDER_KEY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NATIVE_TOKEN_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERCENTAGE_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSTPROCESS_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PROVIDER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "REFERRAL_CODE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowETH",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cache",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOperation",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "postProcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "repayETH",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stack",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MSG_SENDER_KEY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NATIVE_TOKEN_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERCENTAGE_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSTPROCESS_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PROVIDER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "REFERRAL_CODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrowETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cache", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContractName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "postProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repayETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stack", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;

  events: {};
}

export interface HAaveProtocolV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HAaveProtocolV2Interface;

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
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<[string]>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<[string]>;

    PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<[number]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    borrow(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    borrowETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flashLoan(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      modes: PromiseOrValue<BigNumberish>[],
      params: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContractName(overrides?: CallOverrides): Promise<[string]>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repay(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    withdraw(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

  NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<string>;

  PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

  PROVIDER(overrides?: CallOverrides): Promise<string>;

  REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

  WETH(overrides?: CallOverrides): Promise<string>;

  borrow(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    rateMode: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  borrowETH(
    amount: PromiseOrValue<BigNumberish>,
    rateMode: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cache(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  deposit(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositETH(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeOperation(
    assets: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    premiums: PromiseOrValue<BigNumberish>[],
    initiator: PromiseOrValue<string>,
    params: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flashLoan(
    assets: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    modes: PromiseOrValue<BigNumberish>[],
    params: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContractName(overrides?: CallOverrides): Promise<string>;

  postProcess(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repay(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    rateMode: PromiseOrValue<BigNumberish>,
    onBehalfOf: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayETH(
    amount: PromiseOrValue<BigNumberish>,
    rateMode: PromiseOrValue<BigNumberish>,
    onBehalfOf: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stack(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  withdraw(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawETH(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<string>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

    PROVIDER(overrides?: CallOverrides): Promise<string>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

    WETH(overrides?: CallOverrides): Promise<string>;

    borrow(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    deposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    flashLoan(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      modes: PromiseOrValue<BigNumberish>[],
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getContractName(overrides?: CallOverrides): Promise<string>;

    postProcess(overrides?: CallOverrides): Promise<void>;

    repay(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    withdraw(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<BigNumber>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    borrow(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    borrowETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flashLoan(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      modes: PromiseOrValue<BigNumberish>[],
      params: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContractName(overrides?: CallOverrides): Promise<BigNumber>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repay(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NATIVE_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrow(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    borrowETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flashLoan(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      modes: PromiseOrValue<BigNumberish>[],
      params: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContractName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayETH(
      amount: PromiseOrValue<BigNumberish>,
      rateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
