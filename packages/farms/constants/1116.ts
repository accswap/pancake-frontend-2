import { SerializedFarmConfig } from '@pancakeswap/farms'
import { bscTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET, CPT_SHDW_LP_MAINNET } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'SHDW',
    lpAddress: '0xddBa66C1eBA873e26Ac0215Ca44892a07d83aDF5',
    token: bscTokens.syrup,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SHDW-CORE LP',
    lpAddress: CAKE_BNB_LP_MAINNET,
    token: bscTokens.cake,
    quoteToken: bscTokens.wbnb,
  },

  {
    pid: 3,
    lpSymbol: 'SHDW-USDT LP',
    lpAddress: '0xfF9F4505e0181CB72D93aeAEC1bff31a8cbB840B',
    token: bscTokens.cake,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'CORE-USDT LP',
    lpAddress: '0xCDCE0e64e6C8271b8c8581fE5e97055C5175ea3E',
    token: bscTokens.wbnb,
    quoteToken: bscTokens.busd,
  },

  {
    pid: 2,
    lpSymbol: 'CPT-SHDW LP',
    lpAddress: CPT_SHDW_LP_MAINNET,
    token: bscTokens.cpt,
    quoteToken: bscTokens.cake,
  },
  {
    pid: 5,
    lpSymbol: 'WOOF-CORE LP',
    lpAddress: '0x4316285b2360091010f29cb93b24365121341af4',
    token: bscTokens.woof,
    quoteToken: bscTokens.wbnb,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'USDT-USDC LP',
  //   lpAddress: '0xa5238BffD7BF62D9DeF4A9319b79d76A1d5D3256',
  //   token: bscTokens.usdc,
  //   quoteToken: bscTokens.busd,
  // },

  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
