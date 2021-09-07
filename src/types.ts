export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};






export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};

export type Bundle = {
  __typename?: 'Bundle';
  id: Scalars['ID'];
  ethPrice: Scalars['BigDecimal'];
};

export type Bundle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  ethPrice?: Maybe<Scalars['BigDecimal']>;
  ethPrice_not?: Maybe<Scalars['BigDecimal']>;
  ethPrice_gt?: Maybe<Scalars['BigDecimal']>;
  ethPrice_lt?: Maybe<Scalars['BigDecimal']>;
  ethPrice_gte?: Maybe<Scalars['BigDecimal']>;
  ethPrice_lte?: Maybe<Scalars['BigDecimal']>;
  ethPrice_in?: Maybe<Array<Scalars['BigDecimal']>>;
  ethPrice_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Bundle_OrderBy {
  Id = 'id',
  EthPrice = 'ethPrice'
}

export type Burn = {
  __typename?: 'Burn';
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  to?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  complete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
};

export type Burn_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  liquidity?: Maybe<Scalars['BigDecimal']>;
  liquidity_not?: Maybe<Scalars['BigDecimal']>;
  liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  liquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount0_not?: Maybe<Scalars['BigDecimal']>;
  amount0_gt?: Maybe<Scalars['BigDecimal']>;
  amount0_lt?: Maybe<Scalars['BigDecimal']>;
  amount0_gte?: Maybe<Scalars['BigDecimal']>;
  amount0_lte?: Maybe<Scalars['BigDecimal']>;
  amount0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  amount1_not?: Maybe<Scalars['BigDecimal']>;
  amount1_gt?: Maybe<Scalars['BigDecimal']>;
  amount1_lt?: Maybe<Scalars['BigDecimal']>;
  amount1_gte?: Maybe<Scalars['BigDecimal']>;
  amount1_lte?: Maybe<Scalars['BigDecimal']>;
  amount1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  to?: Maybe<Scalars['Bytes']>;
  to_not?: Maybe<Scalars['Bytes']>;
  to_in?: Maybe<Array<Scalars['Bytes']>>;
  to_not_in?: Maybe<Array<Scalars['Bytes']>>;
  to_contains?: Maybe<Scalars['Bytes']>;
  to_not_contains?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  logIndex_not?: Maybe<Scalars['BigInt']>;
  logIndex_gt?: Maybe<Scalars['BigInt']>;
  logIndex_lt?: Maybe<Scalars['BigInt']>;
  logIndex_gte?: Maybe<Scalars['BigInt']>;
  logIndex_lte?: Maybe<Scalars['BigInt']>;
  logIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  complete?: Maybe<Scalars['Boolean']>;
  complete_not?: Maybe<Scalars['Boolean']>;
  complete_in?: Maybe<Array<Scalars['Boolean']>>;
  complete_not_in?: Maybe<Array<Scalars['Boolean']>>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeTo_not?: Maybe<Scalars['Bytes']>;
  feeTo_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: Maybe<Scalars['Bytes']>;
  feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Burn_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  Complete = 'complete',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}


export type DayData = {
  __typename?: 'DayData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  factory: Factory;
  volumeETH: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolume: Scalars['BigDecimal'];
  liquidityETH: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type DayData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  volumeETH?: Maybe<Scalars['BigDecimal']>;
  volumeETH_not?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolume?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum DayData_OrderBy {
  Id = 'id',
  Date = 'date',
  Factory = 'factory',
  VolumeEth = 'volumeETH',
  VolumeUsd = 'volumeUSD',
  UntrackedVolume = 'untrackedVolume',
  LiquidityEth = 'liquidityETH',
  LiquidityUsd = 'liquidityUSD',
  TxCount = 'txCount'
}

export type Factory = {
  __typename?: 'Factory';
  id: Scalars['ID'];
  pairCount: Scalars['BigInt'];
  volumeUSD: Scalars['BigDecimal'];
  volumeETH: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  liquidityETH: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  tokenCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  pairs: Array<Pair>;
  tokens: Array<Token>;
  hourData: Array<HourData>;
  dayData: Array<DayData>;
};


export type FactoryPairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
};


export type FactoryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
};


export type FactoryHourDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourData_Filter>;
};


export type FactoryDayDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DayData_Filter>;
};

export type Factory_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pairCount?: Maybe<Scalars['BigInt']>;
  pairCount_not?: Maybe<Scalars['BigInt']>;
  pairCount_gt?: Maybe<Scalars['BigInt']>;
  pairCount_lt?: Maybe<Scalars['BigInt']>;
  pairCount_gte?: Maybe<Scalars['BigInt']>;
  pairCount_lte?: Maybe<Scalars['BigInt']>;
  pairCount_in?: Maybe<Array<Scalars['BigInt']>>;
  pairCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH?: Maybe<Scalars['BigDecimal']>;
  volumeETH_not?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  tokenCount?: Maybe<Scalars['BigInt']>;
  tokenCount_not?: Maybe<Scalars['BigInt']>;
  tokenCount_gt?: Maybe<Scalars['BigInt']>;
  tokenCount_lt?: Maybe<Scalars['BigInt']>;
  tokenCount_gte?: Maybe<Scalars['BigInt']>;
  tokenCount_lte?: Maybe<Scalars['BigInt']>;
  tokenCount_in?: Maybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  userCount?: Maybe<Scalars['BigInt']>;
  userCount_not?: Maybe<Scalars['BigInt']>;
  userCount_gt?: Maybe<Scalars['BigInt']>;
  userCount_lt?: Maybe<Scalars['BigInt']>;
  userCount_gte?: Maybe<Scalars['BigInt']>;
  userCount_lte?: Maybe<Scalars['BigInt']>;
  userCount_in?: Maybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Factory_OrderBy {
  Id = 'id',
  PairCount = 'pairCount',
  VolumeUsd = 'volumeUSD',
  VolumeEth = 'volumeETH',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  LiquidityUsd = 'liquidityUSD',
  LiquidityEth = 'liquidityETH',
  TxCount = 'txCount',
  TokenCount = 'tokenCount',
  UserCount = 'userCount',
  Pairs = 'pairs',
  Tokens = 'tokens',
  HourData = 'hourData',
  DayData = 'dayData'
}

export type HourData = {
  __typename?: 'HourData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  factory: Factory;
  volumeETH: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolume: Scalars['BigDecimal'];
  liquidityETH: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type HourData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  volumeETH?: Maybe<Scalars['BigDecimal']>;
  volumeETH_not?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolume?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum HourData_OrderBy {
  Id = 'id',
  Date = 'date',
  Factory = 'factory',
  VolumeEth = 'volumeETH',
  VolumeUsd = 'volumeUSD',
  UntrackedVolume = 'untrackedVolume',
  LiquidityEth = 'liquidityETH',
  LiquidityUsd = 'liquidityUSD',
  TxCount = 'txCount'
}

export type LiquidityPosition = {
  __typename?: 'LiquidityPosition';
  id: Scalars['ID'];
  user: User;
  pair: Pair;
  liquidityTokenBalance: Scalars['BigDecimal'];
  snapshots: Array<Maybe<LiquidityPositionSnapshot>>;
  block: Scalars['Int'];
  timestamp: Scalars['Int'];
};


export type LiquidityPositionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
};

export type LiquidityPositionSnapshot = {
  __typename?: 'LiquidityPositionSnapshot';
  id: Scalars['ID'];
  liquidityPosition: LiquidityPosition;
  timestamp: Scalars['Int'];
  block: Scalars['Int'];
  user: User;
  pair: Pair;
  token0PriceUSD: Scalars['BigDecimal'];
  token1PriceUSD: Scalars['BigDecimal'];
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  liquidityTokenTotalSupply: Scalars['BigDecimal'];
  liquidityTokenBalance: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  liquidityPosition?: Maybe<Scalars['String']>;
  liquidityPosition_not?: Maybe<Scalars['String']>;
  liquidityPosition_gt?: Maybe<Scalars['String']>;
  liquidityPosition_lt?: Maybe<Scalars['String']>;
  liquidityPosition_gte?: Maybe<Scalars['String']>;
  liquidityPosition_lte?: Maybe<Scalars['String']>;
  liquidityPosition_in?: Maybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: Maybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: Maybe<Scalars['String']>;
  liquidityPosition_not_contains?: Maybe<Scalars['String']>;
  liquidityPosition_starts_with?: Maybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: Maybe<Scalars['String']>;
  liquidityPosition_ends_with?: Maybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  token0PriceUSD?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_not?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  token0PriceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token0PriceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_not?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  token1PriceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_not?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum LiquidityPositionSnapshot_OrderBy {
  Id = 'id',
  LiquidityPosition = 'liquidityPosition',
  Timestamp = 'timestamp',
  Block = 'block',
  User = 'user',
  Pair = 'pair',
  Token0PriceUsd = 'token0PriceUSD',
  Token1PriceUsd = 'token1PriceUSD',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  LiquidityTokenTotalSupply = 'liquidityTokenTotalSupply',
  LiquidityTokenBalance = 'liquidityTokenBalance'
}

export type LiquidityPosition_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  liquidityTokenBalance?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum LiquidityPosition_OrderBy {
  Id = 'id',
  User = 'user',
  Pair = 'pair',
  LiquidityTokenBalance = 'liquidityTokenBalance',
  Snapshots = 'snapshots',
  Block = 'block',
  Timestamp = 'timestamp'
}

export type Mint = {
  __typename?: 'Mint';
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  to: Scalars['Bytes'];
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
};

export type Mint_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['Bytes']>;
  to_not?: Maybe<Scalars['Bytes']>;
  to_in?: Maybe<Array<Scalars['Bytes']>>;
  to_not_in?: Maybe<Array<Scalars['Bytes']>>;
  to_contains?: Maybe<Scalars['Bytes']>;
  to_not_contains?: Maybe<Scalars['Bytes']>;
  liquidity?: Maybe<Scalars['BigDecimal']>;
  liquidity_not?: Maybe<Scalars['BigDecimal']>;
  liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  liquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount0_not?: Maybe<Scalars['BigDecimal']>;
  amount0_gt?: Maybe<Scalars['BigDecimal']>;
  amount0_lt?: Maybe<Scalars['BigDecimal']>;
  amount0_gte?: Maybe<Scalars['BigDecimal']>;
  amount0_lte?: Maybe<Scalars['BigDecimal']>;
  amount0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  amount1_not?: Maybe<Scalars['BigDecimal']>;
  amount1_gt?: Maybe<Scalars['BigDecimal']>;
  amount1_lt?: Maybe<Scalars['BigDecimal']>;
  amount1_gte?: Maybe<Scalars['BigDecimal']>;
  amount1_lte?: Maybe<Scalars['BigDecimal']>;
  amount1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  logIndex?: Maybe<Scalars['BigInt']>;
  logIndex_not?: Maybe<Scalars['BigInt']>;
  logIndex_gt?: Maybe<Scalars['BigInt']>;
  logIndex_lt?: Maybe<Scalars['BigInt']>;
  logIndex_gte?: Maybe<Scalars['BigInt']>;
  logIndex_lte?: Maybe<Scalars['BigInt']>;
  logIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeTo_not?: Maybe<Scalars['Bytes']>;
  feeTo_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: Maybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: Maybe<Scalars['Bytes']>;
  feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Mint_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  To = 'to',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pair = {
  __typename?: 'Pair';
  id: Scalars['ID'];
  factory: Factory;
  name: Scalars['String'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveETH: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  trackedReserveETH: Scalars['BigDecimal'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  dayData: Array<PairDayData>;
  hourData: Array<PairHourData>;
  mints: Array<Mint>;
  burns: Array<Burn>;
  swaps: Array<Swap>;
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
};


export type PairLiquidityPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
};


export type PairLiquidityPositionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
};


export type PairDayDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
};


export type PairHourDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
};


export type PairMintsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
};


export type PairBurnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
};


export type PairSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};

export type PairDayData = {
  __typename?: 'PairDayData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  pair: Pair;
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type PairDayData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  token0?: Maybe<Scalars['String']>;
  token0_not?: Maybe<Scalars['String']>;
  token0_gt?: Maybe<Scalars['String']>;
  token0_lt?: Maybe<Scalars['String']>;
  token0_gte?: Maybe<Scalars['String']>;
  token0_lte?: Maybe<Scalars['String']>;
  token0_in?: Maybe<Array<Scalars['String']>>;
  token0_not_in?: Maybe<Array<Scalars['String']>>;
  token0_contains?: Maybe<Scalars['String']>;
  token0_not_contains?: Maybe<Scalars['String']>;
  token0_starts_with?: Maybe<Scalars['String']>;
  token0_not_starts_with?: Maybe<Scalars['String']>;
  token0_ends_with?: Maybe<Scalars['String']>;
  token0_not_ends_with?: Maybe<Scalars['String']>;
  token1?: Maybe<Scalars['String']>;
  token1_not?: Maybe<Scalars['String']>;
  token1_gt?: Maybe<Scalars['String']>;
  token1_lt?: Maybe<Scalars['String']>;
  token1_gte?: Maybe<Scalars['String']>;
  token1_lte?: Maybe<Scalars['String']>;
  token1_in?: Maybe<Array<Scalars['String']>>;
  token1_not_in?: Maybe<Array<Scalars['String']>>;
  token1_contains?: Maybe<Scalars['String']>;
  token1_not_contains?: Maybe<Scalars['String']>;
  token1_starts_with?: Maybe<Scalars['String']>;
  token1_not_starts_with?: Maybe<Scalars['String']>;
  token1_ends_with?: Maybe<Scalars['String']>;
  token1_not_ends_with?: Maybe<Scalars['String']>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PairDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  Pair = 'pair',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveUsd = 'reserveUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD',
  TxCount = 'txCount'
}

export type PairHourData = {
  __typename?: 'PairHourData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  pair: Pair;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type PairHourData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PairHourData_OrderBy {
  Id = 'id',
  Date = 'date',
  Pair = 'pair',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD',
  TxCount = 'txCount'
}

export type Pair_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  token0?: Maybe<Scalars['String']>;
  token0_not?: Maybe<Scalars['String']>;
  token0_gt?: Maybe<Scalars['String']>;
  token0_lt?: Maybe<Scalars['String']>;
  token0_gte?: Maybe<Scalars['String']>;
  token0_lte?: Maybe<Scalars['String']>;
  token0_in?: Maybe<Array<Scalars['String']>>;
  token0_not_in?: Maybe<Array<Scalars['String']>>;
  token0_contains?: Maybe<Scalars['String']>;
  token0_not_contains?: Maybe<Scalars['String']>;
  token0_starts_with?: Maybe<Scalars['String']>;
  token0_not_starts_with?: Maybe<Scalars['String']>;
  token0_ends_with?: Maybe<Scalars['String']>;
  token0_not_ends_with?: Maybe<Scalars['String']>;
  token1?: Maybe<Scalars['String']>;
  token1_not?: Maybe<Scalars['String']>;
  token1_gt?: Maybe<Scalars['String']>;
  token1_lt?: Maybe<Scalars['String']>;
  token1_gte?: Maybe<Scalars['String']>;
  token1_lte?: Maybe<Scalars['String']>;
  token1_in?: Maybe<Array<Scalars['String']>>;
  token1_not_in?: Maybe<Array<Scalars['String']>>;
  token1_contains?: Maybe<Scalars['String']>;
  token1_not_contains?: Maybe<Scalars['String']>;
  token1_starts_with?: Maybe<Scalars['String']>;
  token1_not_starts_with?: Maybe<Scalars['String']>;
  token1_ends_with?: Maybe<Scalars['String']>;
  token1_not_ends_with?: Maybe<Scalars['String']>;
  reserve0?: Maybe<Scalars['BigDecimal']>;
  reserve0_not?: Maybe<Scalars['BigDecimal']>;
  reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  reserve0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1?: Maybe<Scalars['BigDecimal']>;
  reserve1_not?: Maybe<Scalars['BigDecimal']>;
  reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  reserve1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: Maybe<Scalars['BigDecimal']>;
  totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  totalSupply_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveETH?: Maybe<Scalars['BigDecimal']>;
  reserveETH_not?: Maybe<Scalars['BigDecimal']>;
  reserveETH_gt?: Maybe<Scalars['BigDecimal']>;
  reserveETH_lt?: Maybe<Scalars['BigDecimal']>;
  reserveETH_gte?: Maybe<Scalars['BigDecimal']>;
  reserveETH_lte?: Maybe<Scalars['BigDecimal']>;
  reserveETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  reserveUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_not?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_gt?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_lt?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_gte?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_lte?: Maybe<Scalars['BigDecimal']>;
  trackedReserveETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token0Price?: Maybe<Scalars['BigDecimal']>;
  token0Price_not?: Maybe<Scalars['BigDecimal']>;
  token0Price_gt?: Maybe<Scalars['BigDecimal']>;
  token0Price_lt?: Maybe<Scalars['BigDecimal']>;
  token0Price_gte?: Maybe<Scalars['BigDecimal']>;
  token0Price_lte?: Maybe<Scalars['BigDecimal']>;
  token0Price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1Price?: Maybe<Scalars['BigDecimal']>;
  token1Price_not?: Maybe<Scalars['BigDecimal']>;
  token1Price_gt?: Maybe<Scalars['BigDecimal']>;
  token1Price_lt?: Maybe<Scalars['BigDecimal']>;
  token1Price_gte?: Maybe<Scalars['BigDecimal']>;
  token1Price_lte?: Maybe<Scalars['BigDecimal']>;
  token1Price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken0_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  volumeToken1_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: Maybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  block?: Maybe<Scalars['BigInt']>;
  block_not?: Maybe<Scalars['BigInt']>;
  block_gt?: Maybe<Scalars['BigInt']>;
  block_lt?: Maybe<Scalars['BigInt']>;
  block_gte?: Maybe<Scalars['BigInt']>;
  block_lte?: Maybe<Scalars['BigInt']>;
  block_in?: Maybe<Array<Scalars['BigInt']>>;
  block_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Pair_OrderBy {
  Id = 'id',
  Factory = 'factory',
  Name = 'name',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveEth = 'reserveETH',
  ReserveUsd = 'reserveUSD',
  TrackedReserveEth = 'trackedReserveETH',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TxCount = 'txCount',
  LiquidityProviderCount = 'liquidityProviderCount',
  LiquidityPositions = 'liquidityPositions',
  LiquidityPositionSnapshots = 'liquidityPositionSnapshots',
  DayData = 'dayData',
  HourData = 'hourData',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps',
  Timestamp = 'timestamp',
  Block = 'block'
}

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  hourData?: Maybe<HourData>;
  hourDatas: Array<HourData>;
  dayData?: Maybe<DayData>;
  dayDatas: Array<DayData>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  tokenSearch: Array<Token>;
  pairSearch: Array<Pair>;
  userSearch: Array<User>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBundleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBundlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFactoryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFactoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Factory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Factory_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourData_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DayData_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenHourData_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPairArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPairHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPairHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPairDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPairDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLiquidityPositionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLiquidityPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLiquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLiquidityPositionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMintArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMintsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBurnArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBurnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenSearchArgs = {
  text: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  block?: Maybe<Block_Height>;
};


export type QueryPairSearchArgs = {
  text: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  block?: Maybe<Block_Height>;
};


export type QueryUserSearchArgs = {
  text: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  user?: Maybe<User>;
  users: Array<User>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  hourData?: Maybe<HourData>;
  hourDatas: Array<HourData>;
  dayData?: Maybe<DayData>;
  dayDatas: Array<DayData>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBundleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBundlesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFactoryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFactoriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Factory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Factory_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HourData_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DayData_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenHourData_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPairArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPairHourDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPairHourDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPairDayDataArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPairDayDatasArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidityPositionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidityPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidityPositionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMintArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMintsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBurnArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBurnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Swap = {
  __typename?: 'Swap';
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  sender: Scalars['Bytes'];
  amount0In: Scalars['BigDecimal'];
  amount1In: Scalars['BigDecimal'];
  amount0Out: Scalars['BigDecimal'];
  amount1Out: Scalars['BigDecimal'];
  to: Scalars['Bytes'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['BigDecimal'];
};

export type Swap_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  transaction?: Maybe<Scalars['String']>;
  transaction_not?: Maybe<Scalars['String']>;
  transaction_gt?: Maybe<Scalars['String']>;
  transaction_lt?: Maybe<Scalars['String']>;
  transaction_gte?: Maybe<Scalars['String']>;
  transaction_lte?: Maybe<Scalars['String']>;
  transaction_in?: Maybe<Array<Scalars['String']>>;
  transaction_not_in?: Maybe<Array<Scalars['String']>>;
  transaction_contains?: Maybe<Scalars['String']>;
  transaction_not_contains?: Maybe<Scalars['String']>;
  transaction_starts_with?: Maybe<Scalars['String']>;
  transaction_not_starts_with?: Maybe<Scalars['String']>;
  transaction_ends_with?: Maybe<Scalars['String']>;
  transaction_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pair?: Maybe<Scalars['String']>;
  pair_not?: Maybe<Scalars['String']>;
  pair_gt?: Maybe<Scalars['String']>;
  pair_lt?: Maybe<Scalars['String']>;
  pair_gte?: Maybe<Scalars['String']>;
  pair_lte?: Maybe<Scalars['String']>;
  pair_in?: Maybe<Array<Scalars['String']>>;
  pair_not_in?: Maybe<Array<Scalars['String']>>;
  pair_contains?: Maybe<Scalars['String']>;
  pair_not_contains?: Maybe<Scalars['String']>;
  pair_starts_with?: Maybe<Scalars['String']>;
  pair_not_starts_with?: Maybe<Scalars['String']>;
  pair_ends_with?: Maybe<Scalars['String']>;
  pair_not_ends_with?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  amount0In?: Maybe<Scalars['BigDecimal']>;
  amount0In_not?: Maybe<Scalars['BigDecimal']>;
  amount0In_gt?: Maybe<Scalars['BigDecimal']>;
  amount0In_lt?: Maybe<Scalars['BigDecimal']>;
  amount0In_gte?: Maybe<Scalars['BigDecimal']>;
  amount0In_lte?: Maybe<Scalars['BigDecimal']>;
  amount0In_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0In_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1In?: Maybe<Scalars['BigDecimal']>;
  amount1In_not?: Maybe<Scalars['BigDecimal']>;
  amount1In_gt?: Maybe<Scalars['BigDecimal']>;
  amount1In_lt?: Maybe<Scalars['BigDecimal']>;
  amount1In_gte?: Maybe<Scalars['BigDecimal']>;
  amount1In_lte?: Maybe<Scalars['BigDecimal']>;
  amount1In_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1In_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0Out?: Maybe<Scalars['BigDecimal']>;
  amount0Out_not?: Maybe<Scalars['BigDecimal']>;
  amount0Out_gt?: Maybe<Scalars['BigDecimal']>;
  amount0Out_lt?: Maybe<Scalars['BigDecimal']>;
  amount0Out_gte?: Maybe<Scalars['BigDecimal']>;
  amount0Out_lte?: Maybe<Scalars['BigDecimal']>;
  amount0Out_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount0Out_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1Out?: Maybe<Scalars['BigDecimal']>;
  amount1Out_not?: Maybe<Scalars['BigDecimal']>;
  amount1Out_gt?: Maybe<Scalars['BigDecimal']>;
  amount1Out_lt?: Maybe<Scalars['BigDecimal']>;
  amount1Out_gte?: Maybe<Scalars['BigDecimal']>;
  amount1Out_lte?: Maybe<Scalars['BigDecimal']>;
  amount1Out_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount1Out_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  to?: Maybe<Scalars['Bytes']>;
  to_not?: Maybe<Scalars['Bytes']>;
  to_in?: Maybe<Array<Scalars['Bytes']>>;
  to_not_in?: Maybe<Array<Scalars['Bytes']>>;
  to_contains?: Maybe<Scalars['Bytes']>;
  to_not_contains?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  logIndex_not?: Maybe<Scalars['BigInt']>;
  logIndex_gt?: Maybe<Scalars['BigInt']>;
  logIndex_lt?: Maybe<Scalars['BigInt']>;
  logIndex_gte?: Maybe<Scalars['BigInt']>;
  logIndex_lte?: Maybe<Scalars['BigInt']>;
  logIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  amountUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Swap_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Sender = 'sender',
  Amount0In = 'amount0In',
  Amount1In = 'amount1In',
  Amount0Out = 'amount0Out',
  Amount1Out = 'amount1Out',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD'
}

export type Token = {
  __typename?: 'Token';
  id: Scalars['ID'];
  factory: Factory;
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  volume: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['BigDecimal'];
  derivedETH: Scalars['BigDecimal'];
  hourData: Array<TokenHourData>;
  dayData: Array<TokenDayData>;
  basePairs: Array<Pair>;
  quotePairs: Array<Pair>;
  basePairsDayData: Array<PairDayData>;
  quotePairsDayData: Array<PairDayData>;
};


export type TokenHourDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenHourData_Filter>;
};


export type TokenDayDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
};


export type TokenBasePairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
};


export type TokenQuotePairsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
};


export type TokenBasePairsDayDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
};


export type TokenQuotePairsDayDataArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
};

export type TokenDayData = {
  __typename?: 'TokenDayData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  volume: Scalars['BigDecimal'];
  volumeETH: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['BigDecimal'];
  liquidityETH: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
};

export type TokenDayData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['BigDecimal']>;
  volume_not?: Maybe<Scalars['BigDecimal']>;
  volume_gt?: Maybe<Scalars['BigDecimal']>;
  volume_lt?: Maybe<Scalars['BigDecimal']>;
  volume_gte?: Maybe<Scalars['BigDecimal']>;
  volume_lte?: Maybe<Scalars['BigDecimal']>;
  volume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH?: Maybe<Scalars['BigDecimal']>;
  volumeETH_not?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidity?: Maybe<Scalars['BigDecimal']>;
  liquidity_not?: Maybe<Scalars['BigDecimal']>;
  liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  liquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: Maybe<Scalars['BigDecimal']>;
  priceUSD_not?: Maybe<Scalars['BigDecimal']>;
  priceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  priceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  priceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  priceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  priceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum TokenDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  Token = 'token',
  Volume = 'volume',
  VolumeEth = 'volumeETH',
  VolumeUsd = 'volumeUSD',
  TxCount = 'txCount',
  Liquidity = 'liquidity',
  LiquidityEth = 'liquidityETH',
  LiquidityUsd = 'liquidityUSD',
  PriceUsd = 'priceUSD'
}

export type TokenHourData = {
  __typename?: 'TokenHourData';
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  volume: Scalars['BigDecimal'];
  volumeETH: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['BigDecimal'];
  liquidityETH: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
};

export type TokenHourData_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  date?: Maybe<Scalars['Int']>;
  date_not?: Maybe<Scalars['Int']>;
  date_gt?: Maybe<Scalars['Int']>;
  date_lt?: Maybe<Scalars['Int']>;
  date_gte?: Maybe<Scalars['Int']>;
  date_lte?: Maybe<Scalars['Int']>;
  date_in?: Maybe<Array<Scalars['Int']>>;
  date_not_in?: Maybe<Array<Scalars['Int']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['BigDecimal']>;
  volume_not?: Maybe<Scalars['BigDecimal']>;
  volume_gt?: Maybe<Scalars['BigDecimal']>;
  volume_lt?: Maybe<Scalars['BigDecimal']>;
  volume_gte?: Maybe<Scalars['BigDecimal']>;
  volume_lte?: Maybe<Scalars['BigDecimal']>;
  volume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH?: Maybe<Scalars['BigDecimal']>;
  volumeETH_not?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  volumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  volumeETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidity?: Maybe<Scalars['BigDecimal']>;
  liquidity_not?: Maybe<Scalars['BigDecimal']>;
  liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  liquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: Maybe<Scalars['BigDecimal']>;
  priceUSD_not?: Maybe<Scalars['BigDecimal']>;
  priceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  priceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  priceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  priceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  priceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum TokenHourData_OrderBy {
  Id = 'id',
  Date = 'date',
  Token = 'token',
  Volume = 'volume',
  VolumeEth = 'volumeETH',
  VolumeUsd = 'volumeUSD',
  TxCount = 'txCount',
  Liquidity = 'liquidity',
  LiquidityEth = 'liquidityETH',
  LiquidityUsd = 'liquidityUSD',
  PriceUsd = 'priceUSD'
}

export type Token_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  factory?: Maybe<Scalars['String']>;
  factory_not?: Maybe<Scalars['String']>;
  factory_gt?: Maybe<Scalars['String']>;
  factory_lt?: Maybe<Scalars['String']>;
  factory_gte?: Maybe<Scalars['String']>;
  factory_lte?: Maybe<Scalars['String']>;
  factory_in?: Maybe<Array<Scalars['String']>>;
  factory_not_in?: Maybe<Array<Scalars['String']>>;
  factory_contains?: Maybe<Scalars['String']>;
  factory_not_contains?: Maybe<Scalars['String']>;
  factory_starts_with?: Maybe<Scalars['String']>;
  factory_not_starts_with?: Maybe<Scalars['String']>;
  factory_ends_with?: Maybe<Scalars['String']>;
  factory_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
  volume?: Maybe<Scalars['BigDecimal']>;
  volume_not?: Maybe<Scalars['BigDecimal']>;
  volume_gt?: Maybe<Scalars['BigDecimal']>;
  volume_lt?: Maybe<Scalars['BigDecimal']>;
  volume_gte?: Maybe<Scalars['BigDecimal']>;
  volume_lte?: Maybe<Scalars['BigDecimal']>;
  volume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  volumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  txCount?: Maybe<Scalars['BigInt']>;
  txCount_not?: Maybe<Scalars['BigInt']>;
  txCount_gt?: Maybe<Scalars['BigInt']>;
  txCount_lt?: Maybe<Scalars['BigInt']>;
  txCount_gte?: Maybe<Scalars['BigInt']>;
  txCount_lte?: Maybe<Scalars['BigInt']>;
  txCount_in?: Maybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidity?: Maybe<Scalars['BigDecimal']>;
  liquidity_not?: Maybe<Scalars['BigDecimal']>;
  liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  liquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  derivedETH?: Maybe<Scalars['BigDecimal']>;
  derivedETH_not?: Maybe<Scalars['BigDecimal']>;
  derivedETH_gt?: Maybe<Scalars['BigDecimal']>;
  derivedETH_lt?: Maybe<Scalars['BigDecimal']>;
  derivedETH_gte?: Maybe<Scalars['BigDecimal']>;
  derivedETH_lte?: Maybe<Scalars['BigDecimal']>;
  derivedETH_in?: Maybe<Array<Scalars['BigDecimal']>>;
  derivedETH_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Token_OrderBy {
  Id = 'id',
  Factory = 'factory',
  Symbol = 'symbol',
  Name = 'name',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  Volume = 'volume',
  VolumeUsd = 'volumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TxCount = 'txCount',
  Liquidity = 'liquidity',
  DerivedEth = 'derivedETH',
  HourData = 'hourData',
  DayData = 'dayData',
  BasePairs = 'basePairs',
  QuotePairs = 'quotePairs',
  BasePairsDayData = 'basePairsDayData',
  QuotePairsDayData = 'quotePairsDayData'
}

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  mints: Array<Maybe<Mint>>;
  burns: Array<Maybe<Burn>>;
  swaps: Array<Maybe<Swap>>;
};


export type TransactionMintsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
};


export type TransactionBurnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
};


export type TransactionSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};

export type Transaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  blockNumber_not?: Maybe<Scalars['BigInt']>;
  blockNumber_gt?: Maybe<Scalars['BigInt']>;
  blockNumber_lt?: Maybe<Scalars['BigInt']>;
  blockNumber_gte?: Maybe<Scalars['BigInt']>;
  blockNumber_lte?: Maybe<Scalars['BigInt']>;
  blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  mints?: Maybe<Array<Scalars['String']>>;
  mints_not?: Maybe<Array<Scalars['String']>>;
  mints_contains?: Maybe<Array<Scalars['String']>>;
  mints_not_contains?: Maybe<Array<Scalars['String']>>;
  burns?: Maybe<Array<Scalars['String']>>;
  burns_not?: Maybe<Array<Scalars['String']>>;
  burns_contains?: Maybe<Array<Scalars['String']>>;
  burns_not_contains?: Maybe<Array<Scalars['String']>>;
  swaps?: Maybe<Array<Scalars['String']>>;
  swaps_not?: Maybe<Array<Scalars['String']>>;
  swaps_contains?: Maybe<Array<Scalars['String']>>;
  swaps_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum Transaction_OrderBy {
  Id = 'id',
  BlockNumber = 'blockNumber',
  Timestamp = 'timestamp',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  liquidityPositions: Array<LiquidityPosition>;
};


export type UserLiquidityPositionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
};

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Id = 'id',
  LiquidityPositions = 'liquidityPositions'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
