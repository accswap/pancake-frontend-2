import _define_property from "@swc/helpers/src/_define_property.mjs";
import JSBI from "jsbi";
import { Token } from "./entities/token";
export var ChainId;
(function(ChainId) {
    ChainId[ChainId["ETHEREUM"] = 1] = "ETHEREUM";
    ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
    ChainId[ChainId["GOERLI"] = 5] = "GOERLI";
    ChainId[ChainId["BSC"] = 1116] = "BSC";
    ChainId[ChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
})(ChainId || (ChainId = {}));
export var TradeType;
(function(TradeType) {
    TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
    TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));
export var Rounding;
(function(Rounding) {
    Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
    Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
    Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));
export var FACTORY_ADDRESS = "0x326Ee96748E7DcC04BE1Ef8f4E4F6bdd54048932";
// // TODO: ETH This is test version, do not depends on it
var FACTORY_ADDRESS_ETH = "0xD93801d7D3a368D94A3A32E97A20f7aC1948a5dB";
var _obj;
export var FACTORY_ADDRESS_MAP = (_obj = {}, _define_property(_obj, ChainId.ETHEREUM, FACTORY_ADDRESS_ETH), _define_property(_obj, ChainId.RINKEBY, FACTORY_ADDRESS_ETH), _define_property(_obj, ChainId.GOERLI, FACTORY_ADDRESS_ETH), _define_property(_obj, ChainId.BSC, FACTORY_ADDRESS), _define_property(_obj, ChainId.BSC_TESTNET, "0x6725f303b657a9451d8ba641348b6761a6cc7a17"), _obj);
export var INIT_CODE_HASH = "0xcfeb1f8754759f0abe461dd409d6d501fdd73b91a848c483faa6db0faf53c3bd";
var INIT_CODE_HASH_ETH = "0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d";
var _obj1;
export var INIT_CODE_HASH_MAP = (_obj1 = {}, _define_property(_obj1, ChainId.ETHEREUM, INIT_CODE_HASH_ETH), _define_property(_obj1, ChainId.RINKEBY, INIT_CODE_HASH_ETH), _define_property(_obj1, ChainId.GOERLI, INIT_CODE_HASH_ETH), _define_property(_obj1, ChainId.BSC, INIT_CODE_HASH), _define_property(_obj1, ChainId.BSC_TESTNET, "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66"), _obj1);
export var MINIMUM_LIQUIDITY = JSBI.BigInt(1000);
// exports for internal consumption
export var ZERO = JSBI.BigInt(0);
export var ONE = JSBI.BigInt(1);
export var TWO = JSBI.BigInt(2);
export var THREE = JSBI.BigInt(3);
export var FIVE = JSBI.BigInt(5);
export var TEN = JSBI.BigInt(10);
export var _100 = JSBI.BigInt(100);
export var _9975 = JSBI.BigInt(9975);
export var _10000 = JSBI.BigInt(10000);
export var MaxUint256 = JSBI.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
export var SolidityType;
(function(SolidityType) {
    SolidityType["uint8"] = "uint8";
    SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));
var _obj2;
export var SOLIDITY_TYPE_MAXIMA = (_obj2 = {}, _define_property(_obj2, SolidityType.uint8, JSBI.BigInt("0xff")), _define_property(_obj2, SolidityType.uint256, JSBI.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")), _obj2);
var _obj3;
export var WETH9 = (_obj3 = {}, _define_property(_obj3, ChainId.ETHEREUM, new Token(ChainId.ETHEREUM, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether", "https://weth.io")), _define_property(_obj3, ChainId.RINKEBY, new Token(ChainId.RINKEBY, "0xc778417E063141139Fce010982780140Aa0cD5Ab", 18, "WETH", "Wrapped Ether", "https://weth.io")), _define_property(_obj3, ChainId.GOERLI, new Token(ChainId.GOERLI, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether", "https://weth.io")), _obj3);
var _obj4;
export var WBNB = (_obj4 = {}, _define_property(_obj4, ChainId.ETHEREUM, new Token(ChainId.ETHEREUM, "0x418D75f65a02b3D53B2418FB8E1fe493759c7605", 18, "WBNB", "Wrapped BNB", "https://www.binance.org")), _define_property(_obj4, ChainId.BSC, new Token(ChainId.BSC, "0x191E94fa59739e188dcE837F7f6978d84727AD01", 18, "WCORE", "Wrapped CORE", "https://www.coredao.org")), _define_property(_obj4, ChainId.BSC_TESTNET, new Token(ChainId.BSC_TESTNET, "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", 18, "WBNB", "Wrapped BNB", "https://www.binance.org")), _obj4);
var _obj5;
export var WNATIVE = (_obj5 = {}, _define_property(_obj5, ChainId.ETHEREUM, WETH9[ChainId.ETHEREUM]), _define_property(_obj5, ChainId.RINKEBY, WETH9[ChainId.RINKEBY]), _define_property(_obj5, ChainId.GOERLI, WETH9[ChainId.GOERLI]), _define_property(_obj5, ChainId.BSC, WBNB[ChainId.BSC]), _define_property(_obj5, ChainId.BSC_TESTNET, WBNB[ChainId.BSC_TESTNET]), _obj5);
var _obj6;
export var NATIVE = (_obj6 = {}, _define_property(_obj6, ChainId.ETHEREUM, {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
}), _define_property(_obj6, ChainId.RINKEBY, {
    name: "Rinkeby Ether",
    symbol: "RIN",
    decimals: 18
}), _define_property(_obj6, ChainId.GOERLI, {
    name: "Goerli Ether",
    symbol: "GOR",
    decimals: 18
}), _define_property(_obj6, ChainId.BSC, {
    name: "Core Chain Native Token",
    symbol: "CORE",
    decimals: 18
}), _define_property(_obj6, ChainId.BSC_TESTNET, {
    name: "Binance Chain Native Token",
    symbol: "tBNB",
    decimals: 18
}), _obj6);
