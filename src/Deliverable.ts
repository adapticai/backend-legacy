
  
import { Deliverable as DeliverableType } from './generated/typegraphql-prisma/models/Deliverable';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Deliverable model.
   */

  const selectionSet = `
    
  id
  type
  symbol
  assetId
  amount
  allocationPercentage
  settlementType
  settlementMethod
  delayedSettlement
  contract {
    id
    alpacaId
    symbol
    name
    status
    tradable
    expirationDate
    rootSymbol
    underlyingSymbol
    underlyingAssetId
    type
    style
    strikePrice
    multiplier
    size
    openInterest
    openInterestDate
    closePrice
    closePriceDate
    deliverables {
id
    }
    ppind
    asset {
      id
      symbol
      name
      type
      logoUrl
      description
      cik
      exchange
      currency
      country
      sector
      industry
      address
      officialSite
      fiscalYearEnd
      latestQuarter
      marketCapitalization
      ebitda
      peRatio
      pegRatio
      bookValue
      dividendPerShare
      dividendYield
      eps
      revenuePerShareTTM
      profitMargin
      operatingMarginTTM
      returnOnAssetsTTM
      returnOnEquityTTM
      revenueTTM
      grossProfitTTM
      dilutedEPSTTM
      quarterlyEarningsGrowthYOY
      quarterlyRevenueGrowthYOY
      analystTargetPrice
      analystRatingStrongBuy
      analystRatingBuy
      analystRatingHold
      analystRatingSell
      analystRatingStrongSell
      trailingPE
      forwardPE
      priceToSalesRatioTTM
      priceToBookRatio
      evToRevenue
      evToEbitda
      beta
      week52High
      week52Low
      day50MovingAverage
      day200MovingAverage
      sharesOutstanding
      dividendDate
      exDividendDate
      askPrice
      bidPrice
      createdAt
      updatedAt
    }
    assetId
    order {
      id
      clientOrderId
      alpacaAccountId
      assetId
      qty
      notional
      side
      type
      orderClass
      timeInForce
      limitPrice
      stopPrice
      stopLoss {
        id
        stopPrice
        limitPrice
        createdAt
        updatedAt
        orderId
      }
      takeProfit {
        id
        limitPrice
        stopPrice
        createdAt
        updatedAt
        orderId
      }
      trailPrice
      trailPercent
      extendedHours
      status
      createdAt
      updatedAt
      submittedAt
      filledAt
      filledQty
      filledAvgPrice
      cancelRequestedAt
      canceledAt
      actionId
      action {
        id
        sequence
        tradeId
        type
        note
        status
        fee
        dependsOn
        dependedOnBy
      }
      asset {
        id
        symbol
        name
        type
        logoUrl
        description
        cik
        exchange
        currency
        country
        sector
        industry
        address
        officialSite
        fiscalYearEnd
        latestQuarter
        marketCapitalization
        ebitda
        peRatio
        pegRatio
        bookValue
        dividendPerShare
        dividendYield
        eps
        revenuePerShareTTM
        profitMargin
        operatingMarginTTM
        returnOnAssetsTTM
        returnOnEquityTTM
        revenueTTM
        grossProfitTTM
        dilutedEPSTTM
        quarterlyEarningsGrowthYOY
        quarterlyRevenueGrowthYOY
        analystTargetPrice
        analystRatingStrongBuy
        analystRatingBuy
        analystRatingHold
        analystRatingSell
        analystRatingStrongSell
        trailingPE
        forwardPE
        priceToSalesRatioTTM
        priceToBookRatio
        evToRevenue
        evToEbitda
        beta
        week52High
        week52Low
        day50MovingAverage
        day200MovingAverage
        sharesOutstanding
        dividendDate
        exDividendDate
        askPrice
        bidPrice
        createdAt
        updatedAt
      }
      fee
      strikePrice
      expirationDate
      optionType
      stopLossId
      takeProfitId
      contractId
    }
    orderId
    createdAt
    updatedAt
  }
  contractId
  createdAt
  updatedAt

  `;

  export const Deliverable = {

    /**
     * Create a new Deliverable record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Deliverable or null.
     */

    async create(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_DELIVERABLE = gql`
        mutation createOneDeliverable($data: DeliverableCreateInput!) {
          createOneDeliverable(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            type: props.type !== undefined ? props.type : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  assetId: props.assetId !== undefined ? props.assetId : undefined,
  amount: props.amount !== undefined ? props.amount : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? props.allocationPercentage : undefined,
  settlementType: props.settlementType !== undefined ? props.settlementType : undefined,
  settlementMethod: props.settlementMethod !== undefined ? props.settlementMethod : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? props.delayedSettlement : undefined,
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name 
           } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId 
           } : undefined,
      },
      create: {
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? props.contract.name : undefined,
        status: props.contract.status !== undefined ? props.contract.status : undefined,
        tradable: props.contract.tradable !== undefined ? props.contract.tradable : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? props.contract.rootSymbol : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? props.contract.underlyingSymbol : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? props.contract.underlyingAssetId : undefined,
        type: props.contract.type !== undefined ? props.contract.type : undefined,
        style: props.contract.style !== undefined ? props.contract.style : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? props.contract.strikePrice : undefined,
        multiplier: props.contract.multiplier !== undefined ? props.contract.multiplier : undefined,
        size: props.contract.size !== undefined ? props.contract.size : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? props.contract.openInterestDate : undefined,
        closePrice: props.contract.closePrice !== undefined ? props.contract.closePrice : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? props.contract.closePriceDate : undefined,
        ppind: props.contract.ppind !== undefined ? props.contract.ppind : undefined,
        orderId: props.contract.orderId !== undefined ? props.contract.orderId : undefined,
        asset: props.contract.asset !== undefined ? {
            set: props.contract.asset
          } : undefined,
        order: props.contract.order !== undefined ? {
            set: props.contract.order
          } : undefined,
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneDeliverable) {
        return response.data.createOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Create multiple Deliverable records.
   * @param props - Array of Deliverable objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: DeliverableType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_DELIVERABLE = gql`
      mutation createManyDeliverable($data: [DeliverableCreateManyInput!]!) {
        createManyDeliverable(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  type: prop.type !== undefined ? prop.type : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  amount: prop.amount !== undefined ? prop.amount : undefined,
  allocationPercentage: prop.allocationPercentage !== undefined ? prop.allocationPercentage : undefined,
  settlementType: prop.settlementType !== undefined ? prop.settlementType : undefined,
  settlementMethod: prop.settlementMethod !== undefined ? prop.settlementMethod : undefined,
  delayedSettlement: prop.delayedSettlement !== undefined ? prop.delayedSettlement : undefined,
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyDeliverable) {
        return response.data.createManyDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyDeliverable:', error);
      throw error;
    }
  },

  /**
   * Update a single Deliverable record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Deliverable or null.
   */
  async update(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_DELIVERABLE = gql`
      mutation updateOneDeliverable($data: DeliverableUpdateInput!, $where: DeliverableWhereUniqueInput!) {
        updateOneDeliverable(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  assetId: props.assetId !== undefined ? {
            set: props.assetId 
           } : undefined,
  amount: props.amount !== undefined ? {
            set: props.amount 
           } : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? {
            set: props.allocationPercentage 
           } : undefined,
  settlementType: props.settlementType !== undefined ? {
            set: props.settlementType 
           } : undefined,
  settlementMethod: props.settlementMethod !== undefined ? {
            set: props.settlementMethod 
           } : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? {
            set: props.delayedSettlement 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  contract: props.contract !== undefined ? {
            set: props.contract 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneDeliverable) {
        return response.data.updateOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Deliverable record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Deliverable or null.
   */
  async upsert(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_DELIVERABLE = gql`
      mutation upsertOneDeliverable($where: DeliverableWhereUniqueInput!, $create: DeliverableCreateInput!, $update: DeliverableUpdateInput!) {
        upsertOneDeliverable(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
      create: {
    type: props.type !== undefined ? props.type : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  assetId: props.assetId !== undefined ? props.assetId : undefined,
  amount: props.amount !== undefined ? props.amount : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? props.allocationPercentage : undefined,
  settlementType: props.settlementType !== undefined ? props.settlementType : undefined,
  settlementMethod: props.settlementMethod !== undefined ? props.settlementMethod : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? props.delayedSettlement : undefined,
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name 
           } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId 
           } : undefined,
      },
      create: {
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? props.contract.name : undefined,
        status: props.contract.status !== undefined ? props.contract.status : undefined,
        tradable: props.contract.tradable !== undefined ? props.contract.tradable : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? props.contract.rootSymbol : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? props.contract.underlyingSymbol : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? props.contract.underlyingAssetId : undefined,
        type: props.contract.type !== undefined ? props.contract.type : undefined,
        style: props.contract.style !== undefined ? props.contract.style : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? props.contract.strikePrice : undefined,
        multiplier: props.contract.multiplier !== undefined ? props.contract.multiplier : undefined,
        size: props.contract.size !== undefined ? props.contract.size : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? props.contract.openInterestDate : undefined,
        closePrice: props.contract.closePrice !== undefined ? props.contract.closePrice : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? props.contract.closePriceDate : undefined,
        ppind: props.contract.ppind !== undefined ? props.contract.ppind : undefined,
        orderId: props.contract.orderId !== undefined ? props.contract.orderId : undefined,
        asset: props.contract.asset !== undefined ? {
            set: props.contract.asset
          } : undefined,
        order: props.contract.order !== undefined ? {
            set: props.contract.order
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  assetId: props.assetId !== undefined ? {
            set: props.assetId 
           } : undefined,
  amount: props.amount !== undefined ? {
            set: props.amount 
           } : undefined,
  allocationPercentage: props.allocationPercentage !== undefined ? {
            set: props.allocationPercentage 
           } : undefined,
  settlementType: props.settlementType !== undefined ? {
            set: props.settlementType 
           } : undefined,
  settlementMethod: props.settlementMethod !== undefined ? {
            set: props.settlementMethod 
           } : undefined,
  delayedSettlement: props.delayedSettlement !== undefined ? {
            set: props.delayedSettlement 
           } : undefined,
  contract: props.contract !== undefined ? {
            set: props.contract 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneDeliverable) {
        return response.data.upsertOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Update multiple Deliverable records.
   * @param props - Array of Deliverable objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: DeliverableType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_DELIVERABLE = gql`
      mutation updateManyDeliverable($data: [DeliverableCreateManyInput!]!) {
        updateManyDeliverable(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  symbol: prop.symbol !== undefined ? {
    equals: prop.symbol 
  } : undefined,
  contractId: prop.contractId !== undefined ? {
    equals: prop.contractId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  symbol: prop.symbol !== undefined ? {
            set: prop.symbol 
           } : undefined,
  assetId: prop.assetId !== undefined ? {
            set: prop.assetId 
           } : undefined,
  amount: prop.amount !== undefined ? {
            set: prop.amount 
           } : undefined,
  allocationPercentage: prop.allocationPercentage !== undefined ? {
            set: prop.allocationPercentage 
           } : undefined,
  settlementType: prop.settlementType !== undefined ? {
            set: prop.settlementType 
           } : undefined,
  settlementMethod: prop.settlementMethod !== undefined ? {
            set: prop.settlementMethod 
           } : undefined,
  delayedSettlement: prop.delayedSettlement !== undefined ? {
            set: prop.delayedSettlement 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  contract: prop.contract !== undefined ? {
            set: prop.contract 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyDeliverable) {
        return response.data.updateManyDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyDeliverable:', error);
      throw error;
    }
  },

  /**
   * Delete a single Deliverable record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Deliverable or null.
   */
  async delete(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_DELIVERABLE = gql`
      mutation deleteOneDeliverable($where: DeliverableWhereUniqueInput!) {
        deleteOneDeliverable(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneDeliverable) {
        return response.data.deleteOneDeliverable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneDeliverable:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Deliverable record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Deliverable or null.
   */
  async get(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType | null> {

    const client = globalClient || importedClient;

    const GET_DELIVERABLE = gql`
      query getDeliverable($where: DeliverableWhereUniqueInput!) {
        getDeliverable(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getDeliverable ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Deliverable found') {
        return null;
      } else {
        console.error('Error in getDeliverable:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Deliverables records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Deliverable records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<DeliverableType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_DELIVERABLE = gql`
      query getAllDeliverable {
        deliverables {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_DELIVERABLE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.deliverables ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Deliverable found') {
        return null;
      } else {
        console.error('Error in getDeliverable:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Deliverable records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Deliverable records or null.
   */
  async findMany(props: DeliverableType, globalClient?: ApolloClient<any>): Promise<DeliverableType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_DELIVERABLE = gql`
      query findManyDeliverable($where: DeliverableWhereInput!) {
        deliverables(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  contractId: props.contractId !== undefined ? {
    equals: props.contractId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_DELIVERABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Deliverables) {
        return response.data.deliverables;
      } else {
       return [] as DeliverableType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Deliverable found') {
        return null;
      } else {
        console.error('Error in getDeliverable:', error);
        throw error;
      }
    }
  }
};
