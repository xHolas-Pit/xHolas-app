import React, { useCallback, useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io' 
import { BsTrash } from 'react-icons/bs' 
import { useContractWrite, useContract, useSigner } from 'wagmi'

import Container from '../../components/Container'
import StakingUI from '../../components/StakingUI'; 

import NewList from '../../components/NewList' 
import xHolas from '../../assets/xHolas.svg'
import { ethers } from "ethers"

import { XHolas, XHolas__factory } from '../../../types'
import XHolasABI from '../../contracts/xHolas.json' 

// assert {type: 'json'}

// import detectEthereumProvider from '@metamask/detect-provider';
// function Block()

interface BlockInput {
  id: string
  strategy: string
  chain: string
  targetChain?: string
  inputToken: string
  inputAmount: number
  outputToken: string  
}

export type Blocks = BlockInput[]


export default function HomePageMain() {
  const { data: signer, isError, isLoading } = useSigner()

  const [xHolasContractAddress, setXHolasContractAddress] = useState('')

  const [nonce, setNonce] = useState<number>(1); 

  const [defaultBlock, setDefaultBlock] = useState<BlockInput>({ 
    id: 'item-0', 
    strategy: 'Swap',
    chain: 'Ethereum', 
    inputToken: 'HTK', 
    inputAmount: 0, 
    outputToken: 'CET'
  })

  const [blocks, setBlocks] = useState<Blocks>([
    defaultBlock
  ])

  const removeBlock = (id: string) => {
    console.log('remove block'); 
    setBlocks((blocks) =>
      blocks.filter(function(block, itemIdx) {
        return block.id != id; 
      }))
  }

  const addBlock = () => {
    console.log("pushing new block");
    setBlocks([...blocks, {
      ...defaultBlock,
      id: `item=${nonce}`,
    }]); 
    setNonce((prevNonce) => prevNonce + 1); 
  }

  // const { data, writeAsync: contract } = useContractWrite({
  //   mode: 'recklesslyUnprepared',
  //   addressOrName: '',
  //   contractInterface: XHolasABI.abi,
  //   signerOrProvider: signer,
  //   functionName: 'executeTransactionsEntryPoint'
  //   args: [],
  // })

  const contract = useContract({
    addressOrName: '0xaAEdbA647049E2Bf6E0b65B1f004609d90aeb22e', 
    contractInterface: XHolasABI, 
    signerOrProvider: signer
  })

  const encodeParams = (shortABI: any, functionSig: any, params: any) => {
    // const shortABI = [
    //   'function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] calldata path)'
    // ]
    console.log('shortABI: ', shortABI); 
    console.log('functionSig: ', functionSig); 
    console.log('params: ', params); 

    const iface = new ethers.utils.Interface(shortABI)
    console.log('iface: ', iface); 
    const data = iface.encodeFunctionData(
      'swapExactTokensForTokens',
      [
        ethers.utils.parseEther('0.0001'),
        '0',
        [
          '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6', // WETH input token, output token 
          '0xf4b2cbc3ba04c478f0dc824f4806ac39982dce73', // USDT
        ],
      ],
    )
    console.log('data: ', data); 

    return data; 
  }

  const executeBlocks = useCallback(async () => {
    if (!signer || !contract) return
    // get all strategy + chain -> handler(contract) address
    const tos: any = []; 
    const chainIds: any[] = []; 
    const configs: any[] = [];
    const datas: any[] = []; 
    console.log('blocks: ', blocks);
    // blocks.forEach((block) => {
    //   console.log(block.strategy); 
    //   console.log(config[block.strategy]); 
    //   console.log(config[block.strategy][block.chain]); 
    //   if (block.chain == "Ethereum") {
    //     block.chain = "Fuji"; 
    //   }
    //   console.log(block.chain);
    //   console.log(config[block.strategy][block.chain].contractAddress);
    //   const addr = config[block.strategy][block.chain].contractAddress;
    //   const wormholeId = config[block.strategy][block.chain].wormholeId;
      
    //   const shortABI = config[block.strategy][block.chain].shortABI; 
    //   const functionSig = config[block.strategy][block.chain].functionSig; 

    //   console.log(addr, wormholeId, shortABI, functionSig);

    //   let params = []; 
    //   if (block.strategy == "Swap") {
    //     params.push(block.inputToken); 
    //     params.push(block.inputAmount); 
    //   }
    //   console.log('params: ', params); 
    //   let data = encodeParams(shortABI, functionSig, params);
      
    //   datas.push(data);  
    //   tos.push(addr); 
    //   configs.push("0x0000000000000000000000000000000000000000000000000000000000000000");
    //   chainIds.push(wormholeId); 
    // })

    // call executeTransactionsEntryPoint
    // console.log('contract: ', contract); 
    //executeTransactionsEntryPoint(address[],bytes32[],uint16[],bytes[])
    // tos, 

    // console.log('before calling execute: '); 
    // console.log('contract: ', contract); 
    // console.log('tos: ', tos); 
    // console.log('configs: ', configs); 
    // console.log('chainIds: ', chainIds); 
    // console.log('datas: ', datas); 
    // call from goerli

    // tos = []
    // configs = [
    //   "0x0000000000000000000000000000000000000000000000000000000000000000",
    //   "0x0000000000000000000000000000000000000000000000000000000000000000",
    //   "0x0000000000000000000000000000000000000000000000000000000000000000"
    // ]

    const submitTos = ["0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901"];
    const  submitConfigs = [
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    ]
    const submitChainIds = [
      '6'
    ]
    const submitDatas = [
      "0x86818f2600000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000002000000000000000000000000b4fbf271143f4fbf7b91a5ded31805e42b2208d6000000000000000000000000f4b2cbc3ba04c478f0dc824f4806ac39982dce73"
    ]
    const tx = await contract.executeTransactionsEntryPoint(
      submitTos, // address of each contract 
      submitConfigs, // configs
      submitChainIds, // chainids 
      submitDatas// data 
    )
    console.log('tx: ', tx); 
  }, [signer, contract])

  return (
    <Container>
      <section>
        <div className="">
          <div className="py-6 px-10">
            <h2 className="text-[#7b3fe4] text-xl font-semibold">Staking Pools</h2>
          </div>
          <div className="px-10 flex flex-col space-y-2 py-4 ">
            <StakingUI chain={"mainnet"} apr={5.4} staked={1000000}></StakingUI>
            <StakingUI chain={"goerli"} apr={3.6} staked={900000}></StakingUI>
          
          </div>
          {/* <div className="flex flex-col space-y-2 py-4"> */}
            {/* <List blocks={blocks} removeBlock={removeBlock}></List> */}
            {/* <NewList blocks={blocks} setBlocks={setBlocks} removeBlock={removeBlock}></NewList> */}
            {/* {blocks.length ? blocks.map((block, idx) => (
                // <BlockRow key={`${block.name}_${idx}`} block={block} index={idx}/>
                <Block key={idx} defaultName={block.defaultName} defaultChain={block.defaultChain} index={idx} removeBlock={removeBlock}></Block>
              )
            ) : <></>} */}
          {/* </div> */}
        </div>
        {/* <div className="py-10  flex flex-col space-y-2 items-center justify-center"> */}
          {/* <div className="hover:scale-110 duration-200 origin-center">
            <button onClick={addBlock} className="mb-10 origin-center scale-110 duration-200 ">
              <IoIosAddCircleOutline className="scale-150 origin-center duration-200 "/>
            </button>
          </div> */}
          

          {/* <button onClick={executeBlocks}>
            <div className="inline-block align-middle hover:scale-125 duration-200 ">
                <img src={xHolas} alt="xHolasLogo" className="h-full w-full max-h-12" />
              </div>
          </button> */}
        {/* </div> */}
      </section>
    </Container>
  )
}
