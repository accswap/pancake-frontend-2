import { ChainId, Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_BSC, CAKE_MAINNET, USDT_BSC } from './common'

export const bscTokens = {
  wbnb: WBNB[ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.BSC,
    '0x191E94fa59739e188dcE837F7f6978d84727AD01',
    18,
    'CORE',
    'CORE',
    'https://www.coredao.org/',
  ),
  cake: CAKE_MAINNET,
  busd: BUSD_BSC,
  usdt: USDT_BSC,
  tifot: new Token(
    ChainId.BSC,
    '0xAA7E173D6fa1751F39Ce2F49b42E3fA90A1FdD19',
    18,
    'tifot',
    'tifot',
    'https://betafinance.org',
  ),

  cpt: new Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'CPT',
    'Crest Protocol',
    'https://crestprotocol.co',
  ),

  yz: new Token(
    ChainId.BSC,
    '0xe191a4d47A6be111C75139757CDDBb61BEEd88FB',
    18,
    'YZ',
    'Yieldz Protoco',
    'https://yieldzprotocol.com/',
  ),
  woof: new Token(
    ChainId.BSC,
    '0x5C44d3D2312AbA4d5F2406A98Bf374Bc76455092',
    18,
    'WOOF',
    'Moon Dogs',
    'https://www.woofsite.com/',
  ),
  syrup: new Token(
    ChainId.BSC,
    '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  eth: new Token(
    ChainId.BSC,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'ETH',
    'Binance-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
  usdc: new Token(
    ChainId.BSC,
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    18,
    'USDC',
    'Binance-Peg USD Coin',
    'https://www.centre.io/usdc',
  ),
}
