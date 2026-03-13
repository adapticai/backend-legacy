
  
import { Investor as InvestorType } from './generated/typegraphql-prisma/models/Investor';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the Investor model.
   */

  const selectionSet = `
    
  id
  name
  email
  type
  kycStatus
  walletAddress
  userId
  user {
    id
    name
    email
    emailVerified
    image
    createdAt
    updatedAt
    deletedAt
    role
    bio
    jobTitle
    customer {
      id
      authUserId
      name
      plan
      stripeCustomerId
      stripeSubscriptionId
      stripePriceId
      stripeCurrentPeriodEnd
      createdAt
      updatedAt
    }
    customerId
    accounts {
      id
      userId
      type
      provider
      providerAccountId
      refresh_token
      access_token
      expires_at
      token_type
      scope
      id_token
      session_state
      createdAt
      updatedAt
    }
    sessions {
      id
      sessionToken
      userId
      expires
      createdAt
      updatedAt
    }
    authenticators {
      id
      userId
      credentialID
      publicKey
      counter
      createdAt
      updatedAt
    }
    plan
    orgMemberships {
      id
      organizationId
      organization {
        id
        name
        slug
        logoUrl
        website
        createdAt
        updatedAt
        deletedAt
        funds {
id
        }
      }
      userId
      role
      permissions
      createdAt
      updatedAt
    }
    fundAssignments {
      id
      fundId
      fund {
        id
        name
        slug
        description
        status
        organizationId
        organization {
id
        }
        createdAt
        updatedAt
        deletedAt
        brokerageAccounts {
id
        }
        investments {
id
        }
      }
      userId
      role
      permissions
      createdAt
      updatedAt
    }
    openaiAPIKey
    openaiModel
    passwordHash
    avatarUrl
    onboardingComplete
    signupCategory
    linkedProviders {
      id
      userId
      provider
      providerAccountId
      email
      accessToken
      refreshToken
      expiresAt
      linkedAt
      updatedAt
    }
    accountLinkingRequests {
      id
      userId
      email
      provider
      providerAccountId
      status
      verificationToken
      userAgent
      ipAddress
      createdAt
      expiresAt
      verifiedAt
      approvedAt
      rejectedAt
    }
    reviewedWaitlistEntries {
      id
      email
      fullName
      companyName
      companyWebsite
      jobRole
      professionalInvestorConfirmed
      status
      queuePosition
      createdAt
      updatedAt
      reviewedAt
      reviewedById
      inviteToken {
        id
        token
        email
        waitlistEntryId
        waitlistEntry {
id
        }
        used
        usedAt
        expiresAt
        createdAt
      }
    }
  }
  createdAt
  updatedAt
  deletedAt
  investments {
    id
    fundId
    fund {
      id
      name
      slug
      description
      status
      organizationId
      organization {
        id
        name
        slug
        logoUrl
        website
        createdAt
        updatedAt
        deletedAt
        members {
id
        }
      }
      createdAt
      updatedAt
      deletedAt
      brokerageAccounts {
        id
        provider
        type
        apiKey
        apiSecret
        configuration
        marketOpen
        realTime
        cryptoTradingEnabled
        cryptoTradingPairs
        cryptoTradeAllocationPct
        tradeAllocationPct
        allocation {
id
        }
        autoAllocation
        minPercentageChange
        volumeThreshold
        enablePortfolioTrailingStop
        portfolioTrailPercent
        portfolioProfitThresholdPercent
        reducedPortfolioTrailPercent
        defaultTrailingStopPercentage100
        firstTrailReductionThreshold100
        secondTrailReductionThreshold100
        firstReducedTrailPercentage100
        secondReducedTrailPercentage100
        minimumPriceChangePercent100
        fundId
        createdAt
        updatedAt
        deletedAt
        alerts {
id
        }
        trades {
id
        }
        optionsPositions {
id
        }
        optionsTradeExecutions {
id
        }
      }
      assignments {
        id
        fundId
        userId
        user {
id
        }
        role
        permissions
        createdAt
        updatedAt
      }
    }
    investorId
    units
    investedAt
    status
    createdAt
    updatedAt
  }

  `;

  export const Investor = {

    /**
     * Create a new Investor record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Investor or null.
     */

    /**
     * Create a new Investor record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Investor or null.
     */
    async create(props: InvestorType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestorType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 3;
      let retryCount = 0;
      let lastError: any = null;

      // Retry loop to handle potential database connection issues
      while (retryCount < MAX_RETRIES) {
        try {
          const [modules, client] = await Promise.all([
            getApolloModules(),
            globalClient
              ? Promise.resolve(globalClient)
              : importedClient
          ]);

          const { gql, ApolloError } = modules;

          const CREATE_ONE_INVESTOR = gql`
              mutation createOneInvestor($data: InvestorCreateInput!) {
                createOneInvestor(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  type: props.type !== undefined ? props.type : undefined,
  kycStatus: props.kycStatus !== undefined ? props.kycStatus : undefined,
  walletAddress: props.walletAddress !== undefined ? props.walletAddress : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  user: props.user ? 
    typeof props.user === 'object' && Object.keys(props.user).length === 1 && Object.keys(props.user)[0] === 'id'
    ? { connect: {
        id: props.user.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.user.id !== undefined ? props.user.id : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.user.fundAssignments ? 
      Array.isArray(props.user.fundAssignments) && props.user.fundAssignments.length > 0 &&  props.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  investments: props.investments ? 
    Array.isArray(props.investments) && props.investments.length > 0 &&  props.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.investments.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.investments.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId 
           } : undefined,
        investorId: item.investorId !== undefined ? {
            equals: item.investorId 
           } : undefined,
      },
      create: {
        units: item.units !== undefined ? item.units : undefined,
        investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
        status: item.status !== undefined ? item.status : undefined,
    fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
          id: item.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.fund.id !== undefined ? item.fund.id : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name 
             } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug 
             } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId 
             } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_INVESTOR,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneInvestor) {
            return response.data.createOneInvestor;
          } else {
            return null as any;
          }
        } catch (error: any) {
          lastError = error;

          // Check if this is a database connection error that we should retry
          const isConnectionError =
            error.message?.includes('Server has closed the connection') ||
            error.message?.includes('Cannot reach database server') ||
            error.message?.includes('Connection timed out') ||
            error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
            (error.networkError && error.networkError.message?.includes('Failed to fetch'));

          if (isConnectionError && retryCount < MAX_RETRIES - 1) {
            retryCount++;
            const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
            logger.warn("Database connection error, retrying...");
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          logger.error("Database error occurred", { error: String(error) });
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple Investor records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Investor objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: InvestorType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_INVESTOR = gql`
          mutation createManyInvestor($data: [InvestorCreateManyInput!]!) {
            createManyInvestor(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      name: prop.name !== undefined ? prop.name : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  kycStatus: prop.kycStatus !== undefined ? prop.kycStatus : undefined,
  walletAddress: prop.walletAddress !== undefined ? prop.walletAddress : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_INVESTOR,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyInvestor) {
          return response.data.createManyInvestor;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single Investor record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Investor or null.
   */
  async update(props: InvestorType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestorType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_INVESTOR = gql`
          mutation updateOneInvestor($data: InvestorUpdateInput!, $where: InvestorWhereUniqueInput!) {
            updateOneInvestor(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? props.userId : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  kycStatus: props.kycStatus !== undefined ? {
            set: props.kycStatus 
           } : undefined,
  walletAddress: props.walletAddress !== undefined ? {
            set: props.walletAddress 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  user: props.user ? 
  typeof props.user === 'object' && Object.keys(props.user).length === 1 && (Object.keys(props.user)[0] === 'id' || Object.keys(props.user)[0] === 'symbol')
? {
  connect: {
    id: props.user.id
  }
} : { upsert: {
      where: {
        id: props.user.id !== undefined ? {
            equals: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            equals: props.user.email
          } : undefined,
        customerId: props.user.customerId !== undefined ? {
            equals: props.user.customerId
          } : undefined,
      },
      update: {
        id: props.user.id !== undefined ? {
            set: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            set: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            set: props.user.email
          } : undefined,
        emailVerified: props.user.emailVerified !== undefined ? {
            set: props.user.emailVerified
          } : undefined,
        image: props.user.image !== undefined ? {
            set: props.user.image
          } : undefined,
        deletedAt: props.user.deletedAt !== undefined ? {
            set: props.user.deletedAt
          } : undefined,
        role: props.user.role !== undefined ? {
            set: props.user.role
          } : undefined,
        bio: props.user.bio !== undefined ? {
            set: props.user.bio
          } : undefined,
        jobTitle: props.user.jobTitle !== undefined ? {
            set: props.user.jobTitle
          } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan
          } : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? {
            set: props.user.openaiAPIKey
          } : undefined,
        openaiModel: props.user.openaiModel !== undefined ? {
            set: props.user.openaiModel
          } : undefined,
        passwordHash: props.user.passwordHash !== undefined ? {
            set: props.user.passwordHash
          } : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? {
            set: props.user.avatarUrl
          } : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? {
            set: props.user.onboardingComplete
          } : undefined,
        signupCategory: props.user.signupCategory !== undefined ? {
            set: props.user.signupCategory
          } : undefined,
    customer: props.user.customer ? 
    typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && (Object.keys(props.user.customer)[0] === 'id' || Object.keys(props.user.customer)[0] === 'symbol')
? {
    connect: {
      id: props.user.customer.id
    }
} : { upsert: {
        where: {
          id: props.user.customer.id !== undefined ? {
              equals: props.user.customer.id
            } : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              equals: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              equals: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.user.customer.authUserId !== undefined ? {
              set: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              set: props.user.customer.name
            } : undefined,
          plan: props.user.customer.plan !== undefined ? {
              set: props.user.customer.plan
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              set: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              set: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              set: props.user.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.user.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
    Array.isArray(props.user.accounts) && props.user.accounts.length > 0 && props.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          refresh_token: item.refresh_token !== undefined ? {
              set: item.refresh_token
            } : undefined,
          access_token: item.access_token !== undefined ? {
              set: item.access_token
            } : undefined,
          expires_at: item.expires_at !== undefined ? {
              set: item.expires_at
            } : undefined,
          token_type: item.token_type !== undefined ? {
              set: item.token_type
            } : undefined,
          scope: item.scope !== undefined ? {
              set: item.scope
            } : undefined,
          id_token: item.id_token !== undefined ? {
              set: item.id_token
            } : undefined,
          session_state: item.session_state !== undefined ? {
              set: item.session_state
            } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: props.user.sessions ? 
    Array.isArray(props.user.sessions) && props.user.sessions.length > 0 && props.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          sessionToken: item.sessionToken !== undefined ? {
              set: item.sessionToken
            } : undefined,
          expires: item.expires !== undefined ? {
              set: item.expires
            } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
    Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 && props.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          credentialID: item.credentialID !== undefined ? {
              set: item.credentialID
            } : undefined,
          publicKey: item.publicKey !== undefined ? {
              set: item.publicKey
            } : undefined,
          counter: item.counter !== undefined ? {
              set: item.counter
            } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: props.user.orgMemberships ? 
    Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 && props.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      organization: item.organization ? 
      typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && (Object.keys(item.organization)[0] === 'id' || Object.keys(item.organization)[0] === 'symbol')
? {
      connect: {
        id: item.organization.id
      }
} : { upsert: {
          where: {
            id: item.organization.id !== undefined ? {
                equals: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                equals: item.organization.slug
              } : undefined,
          },
          update: {
            id: item.organization.id !== undefined ? {
                set: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                set: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                set: item.organization.slug
              } : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? {
                set: item.organization.logoUrl
              } : undefined,
            website: item.organization.website !== undefined ? {
                set: item.organization.website
              } : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? {
                set: item.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.user.fundAssignments ? 
    Array.isArray(props.user.fundAssignments) && props.user.fundAssignments.length > 0 && props.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.fundAssignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && (Object.keys(item.fund)[0] === 'id' || Object.keys(item.fund)[0] === 'symbol')
? {
      connect: {
        id: item.fund.id
      }
} : { upsert: {
          where: {
            id: item.fund.id !== undefined ? {
                equals: item.fund.id
              } : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name
              } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug
              } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId
              } : undefined,
          },
          update: {
            id: item.fund.id !== undefined ? {
                set: item.fund.id
              } : undefined,
            name: item.fund.name !== undefined ? {
                set: item.fund.name
              } : undefined,
            slug: item.fund.slug !== undefined ? {
                set: item.fund.slug
              } : undefined,
            description: item.fund.description !== undefined ? {
                set: item.fund.description
              } : undefined,
            status: item.fund.status !== undefined ? {
                set: item.fund.status
              } : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? {
                set: item.fund.deletedAt
              } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: props.user.linkedProviders ? 
    Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 && props.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId
            } : undefined,
          email: item.email !== undefined ? {
              equals: item.email
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          accessToken: item.accessToken !== undefined ? {
              set: item.accessToken
            } : undefined,
          refreshToken: item.refreshToken !== undefined ? {
              set: item.refreshToken
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
            } : undefined,
          linkedAt: item.linkedAt !== undefined ? {
              set: item.linkedAt
            } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: props.user.accountLinkingRequests ? 
    Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 && props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          email: item.email !== undefined ? {
              equals: item.email
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          verificationToken: item.verificationToken !== undefined ? {
              set: item.verificationToken
            } : undefined,
          userAgent: item.userAgent !== undefined ? {
              set: item.userAgent
            } : undefined,
          ipAddress: item.ipAddress !== undefined ? {
              set: item.ipAddress
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
            } : undefined,
          verifiedAt: item.verifiedAt !== undefined ? {
              set: item.verifiedAt
            } : undefined,
          approvedAt: item.approvedAt !== undefined ? {
              set: item.approvedAt
            } : undefined,
          rejectedAt: item.rejectedAt !== undefined ? {
              set: item.rejectedAt
            } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
    Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 && props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          reviewedById: item.reviewedById !== undefined ? {
              equals: item.reviewedById
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          fullName: item.fullName !== undefined ? {
              set: item.fullName
            } : undefined,
          companyName: item.companyName !== undefined ? {
              set: item.companyName
            } : undefined,
          companyWebsite: item.companyWebsite !== undefined ? {
              set: item.companyWebsite
            } : undefined,
          jobRole: item.jobRole !== undefined ? {
              set: item.jobRole
            } : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
              set: item.professionalInvestorConfirmed
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          queuePosition: item.queuePosition !== undefined ? {
              set: item.queuePosition
            } : undefined,
          reviewedAt: item.reviewedAt !== undefined ? {
              set: item.reviewedAt
            } : undefined,
      inviteToken: item.inviteToken ? 
      typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && (Object.keys(item.inviteToken)[0] === 'id' || Object.keys(item.inviteToken)[0] === 'symbol')
? {
      connect: {
        id: item.inviteToken.id
      }
} : { upsert: {
          where: {
            id: item.inviteToken.id !== undefined ? {
                equals: item.inviteToken.id
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email
              } : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? {
                equals: item.inviteToken.waitlistEntryId
              } : undefined,
          },
          update: {
            id: item.inviteToken.id !== undefined ? {
                set: item.inviteToken.id
              } : undefined,
            token: item.inviteToken.token !== undefined ? {
                set: item.inviteToken.token
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                set: item.inviteToken.email
              } : undefined,
            used: item.inviteToken.used !== undefined ? {
                set: item.inviteToken.used
              } : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? {
                set: item.inviteToken.usedAt
              } : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? {
                set: item.inviteToken.expiresAt
              } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.user.fundAssignments ? 
      Array.isArray(props.user.fundAssignments) && props.user.fundAssignments.length > 0 &&  props.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  investments: props.investments ? 
  Array.isArray(props.investments) && props.investments.length > 0 && props.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.investments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.investments.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId
          } : undefined,
        investorId: item.investorId !== undefined ? {
            equals: item.investorId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        units: item.units !== undefined ? {
            set: item.units
          } : undefined,
        investedAt: item.investedAt !== undefined ? {
            set: item.investedAt
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
    fund: item.fund ? 
    typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && (Object.keys(item.fund)[0] === 'id' || Object.keys(item.fund)[0] === 'symbol')
? {
    connect: {
      id: item.fund.id
    }
} : { upsert: {
        where: {
          id: item.fund.id !== undefined ? {
              equals: item.fund.id
            } : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name
            } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug
            } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId
            } : undefined,
        },
        update: {
          id: item.fund.id !== undefined ? {
              set: item.fund.id
            } : undefined,
          name: item.fund.name !== undefined ? {
              set: item.fund.name
            } : undefined,
          slug: item.fund.slug !== undefined ? {
              set: item.fund.slug
            } : undefined,
          description: item.fund.description !== undefined ? {
              set: item.fund.description
            } : undefined,
          status: item.fund.status !== undefined ? {
              set: item.fund.status
            } : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? {
              set: item.fund.deletedAt
            } : undefined,
      organization: item.fund.organization ? 
      typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && (Object.keys(item.fund.organization)[0] === 'id' || Object.keys(item.fund.organization)[0] === 'symbol')
? {
      connect: {
        id: item.fund.organization.id
      }
} : { upsert: {
          where: {
            id: item.fund.organization.id !== undefined ? {
                equals: item.fund.organization.id
              } : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name
              } : undefined,
            slug: item.fund.organization.slug !== undefined ? {
                equals: item.fund.organization.slug
              } : undefined,
          },
          update: {
            id: item.fund.organization.id !== undefined ? {
                set: item.fund.organization.id
              } : undefined,
            name: item.fund.organization.name !== undefined ? {
                set: item.fund.organization.name
              } : undefined,
            slug: item.fund.organization.slug !== undefined ? {
                set: item.fund.organization.slug
              } : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? {
                set: item.fund.organization.logoUrl
              } : undefined,
            website: item.fund.organization.website !== undefined ? {
                set: item.fund.organization.website
              } : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? {
                set: item.fund.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
      Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 && item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.fund.brokerageAccounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            apiKey: item.apiKey !== undefined ? {
                set: item.apiKey
              } : undefined,
            apiSecret: item.apiSecret !== undefined ? {
                set: item.apiSecret
              } : undefined,
            configuration: item.configuration !== undefined ? {
                set: item.configuration
              } : undefined,
            marketOpen: item.marketOpen !== undefined ? {
                set: item.marketOpen
              } : undefined,
            realTime: item.realTime !== undefined ? {
                set: item.realTime
              } : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
                set: item.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
                set: item.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
                set: item.tradeAllocationPct
              } : undefined,
            autoAllocation: item.autoAllocation !== undefined ? {
                set: item.autoAllocation
              } : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? {
                set: item.minPercentageChange
              } : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? {
                set: item.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
                set: item.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
                set: item.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
                set: item.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
                set: item.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
                set: item.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
                set: item.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
                set: item.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
                set: item.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
                set: item.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
      Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 && item.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.fund.assignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        units: item.units !== undefined ? item.units : undefined,
        investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
        status: item.status !== undefined ? item.status : undefined,
    fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
          id: item.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.fund.id !== undefined ? item.fund.id : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name 
             } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug 
             } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId 
             } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_INVESTOR,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneInvestor) {
          return response.data.updateOneInvestor;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single Investor record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Investor or null.
   */
  async upsert(props: InvestorType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestorType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_INVESTOR = gql`
          mutation upsertOneInvestor($where: InvestorWhereUniqueInput!, $create: InvestorCreateInput!, $update: InvestorUpdateInput!) {
            upsertOneInvestor(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? props.userId : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
          create: {
        name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  type: props.type !== undefined ? props.type : undefined,
  kycStatus: props.kycStatus !== undefined ? props.kycStatus : undefined,
  walletAddress: props.walletAddress !== undefined ? props.walletAddress : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  user: props.user ? 
    typeof props.user === 'object' && Object.keys(props.user).length === 1 && Object.keys(props.user)[0] === 'id'
    ? { connect: {
        id: props.user.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.user.id !== undefined ? props.user.id : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.user.fundAssignments ? 
      Array.isArray(props.user.fundAssignments) && props.user.fundAssignments.length > 0 &&  props.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  investments: props.investments ? 
    Array.isArray(props.investments) && props.investments.length > 0 &&  props.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.investments.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.investments.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId 
           } : undefined,
        investorId: item.investorId !== undefined ? {
            equals: item.investorId 
           } : undefined,
      },
      create: {
        units: item.units !== undefined ? item.units : undefined,
        investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
        status: item.status !== undefined ? item.status : undefined,
    fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
          id: item.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.fund.id !== undefined ? item.fund.id : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name 
             } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug 
             } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId 
             } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
          update: {
      name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  kycStatus: props.kycStatus !== undefined ? {
            set: props.kycStatus 
           } : undefined,
  walletAddress: props.walletAddress !== undefined ? {
            set: props.walletAddress 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  user: props.user ? 
  typeof props.user === 'object' && Object.keys(props.user).length === 1 && (Object.keys(props.user)[0] === 'id' || Object.keys(props.user)[0] === 'symbol')
? {
  connect: {
    id: props.user.id
  }
} : { upsert: {
      where: {
        id: props.user.id !== undefined ? {
            equals: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            equals: props.user.email
          } : undefined,
        customerId: props.user.customerId !== undefined ? {
            equals: props.user.customerId
          } : undefined,
      },
      update: {
        id: props.user.id !== undefined ? {
            set: props.user.id
          } : undefined,
        name: props.user.name !== undefined ? {
            set: props.user.name
          } : undefined,
        email: props.user.email !== undefined ? {
            set: props.user.email
          } : undefined,
        emailVerified: props.user.emailVerified !== undefined ? {
            set: props.user.emailVerified
          } : undefined,
        image: props.user.image !== undefined ? {
            set: props.user.image
          } : undefined,
        deletedAt: props.user.deletedAt !== undefined ? {
            set: props.user.deletedAt
          } : undefined,
        role: props.user.role !== undefined ? {
            set: props.user.role
          } : undefined,
        bio: props.user.bio !== undefined ? {
            set: props.user.bio
          } : undefined,
        jobTitle: props.user.jobTitle !== undefined ? {
            set: props.user.jobTitle
          } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan
          } : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? {
            set: props.user.openaiAPIKey
          } : undefined,
        openaiModel: props.user.openaiModel !== undefined ? {
            set: props.user.openaiModel
          } : undefined,
        passwordHash: props.user.passwordHash !== undefined ? {
            set: props.user.passwordHash
          } : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? {
            set: props.user.avatarUrl
          } : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? {
            set: props.user.onboardingComplete
          } : undefined,
        signupCategory: props.user.signupCategory !== undefined ? {
            set: props.user.signupCategory
          } : undefined,
    customer: props.user.customer ? 
    typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && (Object.keys(props.user.customer)[0] === 'id' || Object.keys(props.user.customer)[0] === 'symbol')
? {
    connect: {
      id: props.user.customer.id
    }
} : { upsert: {
        where: {
          id: props.user.customer.id !== undefined ? {
              equals: props.user.customer.id
            } : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              equals: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              equals: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.user.customer.authUserId !== undefined ? {
              set: props.user.customer.authUserId
            } : undefined,
          name: props.user.customer.name !== undefined ? {
              set: props.user.customer.name
            } : undefined,
          plan: props.user.customer.plan !== undefined ? {
              set: props.user.customer.plan
            } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              set: props.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              set: props.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              set: props.user.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.user.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
    Array.isArray(props.user.accounts) && props.user.accounts.length > 0 && props.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          refresh_token: item.refresh_token !== undefined ? {
              set: item.refresh_token
            } : undefined,
          access_token: item.access_token !== undefined ? {
              set: item.access_token
            } : undefined,
          expires_at: item.expires_at !== undefined ? {
              set: item.expires_at
            } : undefined,
          token_type: item.token_type !== undefined ? {
              set: item.token_type
            } : undefined,
          scope: item.scope !== undefined ? {
              set: item.scope
            } : undefined,
          id_token: item.id_token !== undefined ? {
              set: item.id_token
            } : undefined,
          session_state: item.session_state !== undefined ? {
              set: item.session_state
            } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: props.user.sessions ? 
    Array.isArray(props.user.sessions) && props.user.sessions.length > 0 && props.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          sessionToken: item.sessionToken !== undefined ? {
              set: item.sessionToken
            } : undefined,
          expires: item.expires !== undefined ? {
              set: item.expires
            } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
    Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 && props.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          credentialID: item.credentialID !== undefined ? {
              set: item.credentialID
            } : undefined,
          publicKey: item.publicKey !== undefined ? {
              set: item.publicKey
            } : undefined,
          counter: item.counter !== undefined ? {
              set: item.counter
            } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: props.user.orgMemberships ? 
    Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 && props.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      organization: item.organization ? 
      typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && (Object.keys(item.organization)[0] === 'id' || Object.keys(item.organization)[0] === 'symbol')
? {
      connect: {
        id: item.organization.id
      }
} : { upsert: {
          where: {
            id: item.organization.id !== undefined ? {
                equals: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                equals: item.organization.slug
              } : undefined,
          },
          update: {
            id: item.organization.id !== undefined ? {
                set: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                set: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                set: item.organization.slug
              } : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? {
                set: item.organization.logoUrl
              } : undefined,
            website: item.organization.website !== undefined ? {
                set: item.organization.website
              } : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? {
                set: item.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.user.fundAssignments ? 
    Array.isArray(props.user.fundAssignments) && props.user.fundAssignments.length > 0 && props.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.fundAssignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && (Object.keys(item.fund)[0] === 'id' || Object.keys(item.fund)[0] === 'symbol')
? {
      connect: {
        id: item.fund.id
      }
} : { upsert: {
          where: {
            id: item.fund.id !== undefined ? {
                equals: item.fund.id
              } : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name
              } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug
              } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId
              } : undefined,
          },
          update: {
            id: item.fund.id !== undefined ? {
                set: item.fund.id
              } : undefined,
            name: item.fund.name !== undefined ? {
                set: item.fund.name
              } : undefined,
            slug: item.fund.slug !== undefined ? {
                set: item.fund.slug
              } : undefined,
            description: item.fund.description !== undefined ? {
                set: item.fund.description
              } : undefined,
            status: item.fund.status !== undefined ? {
                set: item.fund.status
              } : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? {
                set: item.fund.deletedAt
              } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: props.user.linkedProviders ? 
    Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 && props.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId
            } : undefined,
          email: item.email !== undefined ? {
              equals: item.email
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          accessToken: item.accessToken !== undefined ? {
              set: item.accessToken
            } : undefined,
          refreshToken: item.refreshToken !== undefined ? {
              set: item.refreshToken
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
            } : undefined,
          linkedAt: item.linkedAt !== undefined ? {
              set: item.linkedAt
            } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: props.user.accountLinkingRequests ? 
    Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 && props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          email: item.email !== undefined ? {
              equals: item.email
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          verificationToken: item.verificationToken !== undefined ? {
              set: item.verificationToken
            } : undefined,
          userAgent: item.userAgent !== undefined ? {
              set: item.userAgent
            } : undefined,
          ipAddress: item.ipAddress !== undefined ? {
              set: item.ipAddress
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
            } : undefined,
          verifiedAt: item.verifiedAt !== undefined ? {
              set: item.verifiedAt
            } : undefined,
          approvedAt: item.approvedAt !== undefined ? {
              set: item.approvedAt
            } : undefined,
          rejectedAt: item.rejectedAt !== undefined ? {
              set: item.rejectedAt
            } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
    Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 && props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          reviewedById: item.reviewedById !== undefined ? {
              equals: item.reviewedById
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          fullName: item.fullName !== undefined ? {
              set: item.fullName
            } : undefined,
          companyName: item.companyName !== undefined ? {
              set: item.companyName
            } : undefined,
          companyWebsite: item.companyWebsite !== undefined ? {
              set: item.companyWebsite
            } : undefined,
          jobRole: item.jobRole !== undefined ? {
              set: item.jobRole
            } : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
              set: item.professionalInvestorConfirmed
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          queuePosition: item.queuePosition !== undefined ? {
              set: item.queuePosition
            } : undefined,
          reviewedAt: item.reviewedAt !== undefined ? {
              set: item.reviewedAt
            } : undefined,
      inviteToken: item.inviteToken ? 
      typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && (Object.keys(item.inviteToken)[0] === 'id' || Object.keys(item.inviteToken)[0] === 'symbol')
? {
      connect: {
        id: item.inviteToken.id
      }
} : { upsert: {
          where: {
            id: item.inviteToken.id !== undefined ? {
                equals: item.inviteToken.id
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email
              } : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? {
                equals: item.inviteToken.waitlistEntryId
              } : undefined,
          },
          update: {
            id: item.inviteToken.id !== undefined ? {
                set: item.inviteToken.id
              } : undefined,
            token: item.inviteToken.token !== undefined ? {
                set: item.inviteToken.token
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                set: item.inviteToken.email
              } : undefined,
            used: item.inviteToken.used !== undefined ? {
                set: item.inviteToken.used
              } : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? {
                set: item.inviteToken.usedAt
              } : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? {
                set: item.inviteToken.expiresAt
              } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        deletedAt: props.user.deletedAt !== undefined ? props.user.deletedAt : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        passwordHash: props.user.passwordHash !== undefined ? props.user.passwordHash : undefined,
        avatarUrl: props.user.avatarUrl !== undefined ? props.user.avatarUrl : undefined,
        onboardingComplete: props.user.onboardingComplete !== undefined ? props.user.onboardingComplete : undefined,
        signupCategory: props.user.signupCategory !== undefined ? props.user.signupCategory : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          authUserId: props.user.customer.authUserId !== undefined ? {
              equals: props.user.customer.authUserId 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              equals: props.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: props.user.orgMemberships ? 
      Array.isArray(props.user.orgMemberships) && props.user.orgMemberships.length > 0 &&  props.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.user.fundAssignments ? 
      Array.isArray(props.user.fundAssignments) && props.user.fundAssignments.length > 0 &&  props.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: props.user.linkedProviders ? 
      Array.isArray(props.user.linkedProviders) && props.user.linkedProviders.length > 0 &&  props.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: props.user.accountLinkingRequests ? 
      Array.isArray(props.user.accountLinkingRequests) && props.user.accountLinkingRequests.length > 0 &&  props.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: props.user.reviewedWaitlistEntries ? 
      Array.isArray(props.user.reviewedWaitlistEntries) && props.user.reviewedWaitlistEntries.length > 0 &&  props.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  investments: props.investments ? 
  Array.isArray(props.investments) && props.investments.length > 0 && props.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.investments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.investments.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId
          } : undefined,
        investorId: item.investorId !== undefined ? {
            equals: item.investorId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        units: item.units !== undefined ? {
            set: item.units
          } : undefined,
        investedAt: item.investedAt !== undefined ? {
            set: item.investedAt
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
    fund: item.fund ? 
    typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && (Object.keys(item.fund)[0] === 'id' || Object.keys(item.fund)[0] === 'symbol')
? {
    connect: {
      id: item.fund.id
    }
} : { upsert: {
        where: {
          id: item.fund.id !== undefined ? {
              equals: item.fund.id
            } : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name
            } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug
            } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId
            } : undefined,
        },
        update: {
          id: item.fund.id !== undefined ? {
              set: item.fund.id
            } : undefined,
          name: item.fund.name !== undefined ? {
              set: item.fund.name
            } : undefined,
          slug: item.fund.slug !== undefined ? {
              set: item.fund.slug
            } : undefined,
          description: item.fund.description !== undefined ? {
              set: item.fund.description
            } : undefined,
          status: item.fund.status !== undefined ? {
              set: item.fund.status
            } : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? {
              set: item.fund.deletedAt
            } : undefined,
      organization: item.fund.organization ? 
      typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && (Object.keys(item.fund.organization)[0] === 'id' || Object.keys(item.fund.organization)[0] === 'symbol')
? {
      connect: {
        id: item.fund.organization.id
      }
} : { upsert: {
          where: {
            id: item.fund.organization.id !== undefined ? {
                equals: item.fund.organization.id
              } : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name
              } : undefined,
            slug: item.fund.organization.slug !== undefined ? {
                equals: item.fund.organization.slug
              } : undefined,
          },
          update: {
            id: item.fund.organization.id !== undefined ? {
                set: item.fund.organization.id
              } : undefined,
            name: item.fund.organization.name !== undefined ? {
                set: item.fund.organization.name
              } : undefined,
            slug: item.fund.organization.slug !== undefined ? {
                set: item.fund.organization.slug
              } : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? {
                set: item.fund.organization.logoUrl
              } : undefined,
            website: item.fund.organization.website !== undefined ? {
                set: item.fund.organization.website
              } : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? {
                set: item.fund.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
      Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 && item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.fund.brokerageAccounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            apiKey: item.apiKey !== undefined ? {
                set: item.apiKey
              } : undefined,
            apiSecret: item.apiSecret !== undefined ? {
                set: item.apiSecret
              } : undefined,
            configuration: item.configuration !== undefined ? {
                set: item.configuration
              } : undefined,
            marketOpen: item.marketOpen !== undefined ? {
                set: item.marketOpen
              } : undefined,
            realTime: item.realTime !== undefined ? {
                set: item.realTime
              } : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
                set: item.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
                set: item.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
                set: item.tradeAllocationPct
              } : undefined,
            autoAllocation: item.autoAllocation !== undefined ? {
                set: item.autoAllocation
              } : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? {
                set: item.minPercentageChange
              } : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? {
                set: item.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
                set: item.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
                set: item.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
                set: item.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
                set: item.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
                set: item.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
                set: item.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
                set: item.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
                set: item.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
                set: item.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
      Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 && item.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.fund.assignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        units: item.units !== undefined ? item.units : undefined,
        investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
        status: item.status !== undefined ? item.status : undefined,
    fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
          id: item.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.fund.id !== undefined ? item.fund.id : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name 
             } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug 
             } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId 
             } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_INVESTOR,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneInvestor) {
          return response.data.upsertOneInvestor;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple Investor records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Investor objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: InvestorType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_INVESTOR = gql`
          mutation updateManyInvestor($data: [InvestorCreateManyInput!]!) {
            updateManyInvestor(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,
  email: prop.email !== undefined ? {
    equals: prop.email 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  kycStatus: prop.kycStatus !== undefined ? {
            set: prop.kycStatus 
           } : undefined,
  walletAddress: prop.walletAddress !== undefined ? {
            set: prop.walletAddress 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  deletedAt: prop.deletedAt !== undefined ? {
            set: prop.deletedAt 
           } : undefined,
  user: prop.user ? 
  typeof prop.user === 'object' && Object.keys(prop.user).length === 1 && (Object.keys(prop.user)[0] === 'id' || Object.keys(prop.user)[0] === 'symbol')
? {
  connect: {
    id: prop.user.id
  }
} : { upsert: {
      where: {
        id: prop.user.id !== undefined ? {
            equals: prop.user.id
          } : undefined,
        name: prop.user.name !== undefined ? {
            equals: prop.user.name
          } : undefined,
        email: prop.user.email !== undefined ? {
            equals: prop.user.email
          } : undefined,
        customerId: prop.user.customerId !== undefined ? {
            equals: prop.user.customerId
          } : undefined,
      },
      update: {
        id: prop.user.id !== undefined ? {
            set: prop.user.id
          } : undefined,
        name: prop.user.name !== undefined ? {
            set: prop.user.name
          } : undefined,
        email: prop.user.email !== undefined ? {
            set: prop.user.email
          } : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? {
            set: prop.user.emailVerified
          } : undefined,
        image: prop.user.image !== undefined ? {
            set: prop.user.image
          } : undefined,
        deletedAt: prop.user.deletedAt !== undefined ? {
            set: prop.user.deletedAt
          } : undefined,
        role: prop.user.role !== undefined ? {
            set: prop.user.role
          } : undefined,
        bio: prop.user.bio !== undefined ? {
            set: prop.user.bio
          } : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? {
            set: prop.user.jobTitle
          } : undefined,
        plan: prop.user.plan !== undefined ? {
            set: prop.user.plan
          } : undefined,
        openaiAPIKey: prop.user.openaiAPIKey !== undefined ? {
            set: prop.user.openaiAPIKey
          } : undefined,
        openaiModel: prop.user.openaiModel !== undefined ? {
            set: prop.user.openaiModel
          } : undefined,
        passwordHash: prop.user.passwordHash !== undefined ? {
            set: prop.user.passwordHash
          } : undefined,
        avatarUrl: prop.user.avatarUrl !== undefined ? {
            set: prop.user.avatarUrl
          } : undefined,
        onboardingComplete: prop.user.onboardingComplete !== undefined ? {
            set: prop.user.onboardingComplete
          } : undefined,
        signupCategory: prop.user.signupCategory !== undefined ? {
            set: prop.user.signupCategory
          } : undefined,
    customer: prop.user.customer ? 
    typeof prop.user.customer === 'object' && Object.keys(prop.user.customer).length === 1 && (Object.keys(prop.user.customer)[0] === 'id' || Object.keys(prop.user.customer)[0] === 'symbol')
? {
    connect: {
      id: prop.user.customer.id
    }
} : { upsert: {
        where: {
          id: prop.user.customer.id !== undefined ? {
              equals: prop.user.customer.id
            } : undefined,
          authUserId: prop.user.customer.authUserId !== undefined ? {
              equals: prop.user.customer.authUserId
            } : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name
            } : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? {
              equals: prop.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? {
              equals: prop.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              equals: prop.user.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: prop.user.customer.authUserId !== undefined ? {
              set: prop.user.customer.authUserId
            } : undefined,
          name: prop.user.customer.name !== undefined ? {
              set: prop.user.customer.name
            } : undefined,
          plan: prop.user.customer.plan !== undefined ? {
              set: prop.user.customer.plan
            } : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? {
              set: prop.user.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? {
              set: prop.user.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              set: prop.user.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: prop.user.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? 
    Array.isArray(prop.user.accounts) && prop.user.accounts.length > 0 && prop.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          refresh_token: item.refresh_token !== undefined ? {
              set: item.refresh_token
            } : undefined,
          access_token: item.access_token !== undefined ? {
              set: item.access_token
            } : undefined,
          expires_at: item.expires_at !== undefined ? {
              set: item.expires_at
            } : undefined,
          token_type: item.token_type !== undefined ? {
              set: item.token_type
            } : undefined,
          scope: item.scope !== undefined ? {
              set: item.scope
            } : undefined,
          id_token: item.id_token !== undefined ? {
              set: item.id_token
            } : undefined,
          session_state: item.session_state !== undefined ? {
              set: item.session_state
            } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: prop.user.sessions ? 
    Array.isArray(prop.user.sessions) && prop.user.sessions.length > 0 && prop.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          sessionToken: item.sessionToken !== undefined ? {
              set: item.sessionToken
            } : undefined,
          expires: item.expires !== undefined ? {
              set: item.expires
            } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: prop.user.authenticators ? 
    Array.isArray(prop.user.authenticators) && prop.user.authenticators.length > 0 && prop.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          credentialID: item.credentialID !== undefined ? {
              set: item.credentialID
            } : undefined,
          publicKey: item.publicKey !== undefined ? {
              set: item.publicKey
            } : undefined,
          counter: item.counter !== undefined ? {
              set: item.counter
            } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: prop.user.orgMemberships ? 
    Array.isArray(prop.user.orgMemberships) && prop.user.orgMemberships.length > 0 && prop.user.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      organization: item.organization ? 
      typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && (Object.keys(item.organization)[0] === 'id' || Object.keys(item.organization)[0] === 'symbol')
? {
      connect: {
        id: item.organization.id
      }
} : { upsert: {
          where: {
            id: item.organization.id !== undefined ? {
                equals: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                equals: item.organization.slug
              } : undefined,
          },
          update: {
            id: item.organization.id !== undefined ? {
                set: item.organization.id
              } : undefined,
            name: item.organization.name !== undefined ? {
                set: item.organization.name
              } : undefined,
            slug: item.organization.slug !== undefined ? {
                set: item.organization.slug
              } : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? {
                set: item.organization.logoUrl
              } : undefined,
            website: item.organization.website !== undefined ? {
                set: item.organization.website
              } : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? {
                set: item.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: prop.user.fundAssignments ? 
    Array.isArray(prop.user.fundAssignments) && prop.user.fundAssignments.length > 0 && prop.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.fundAssignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && (Object.keys(item.fund)[0] === 'id' || Object.keys(item.fund)[0] === 'symbol')
? {
      connect: {
        id: item.fund.id
      }
} : { upsert: {
          where: {
            id: item.fund.id !== undefined ? {
                equals: item.fund.id
              } : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name
              } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug
              } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId
              } : undefined,
          },
          update: {
            id: item.fund.id !== undefined ? {
                set: item.fund.id
              } : undefined,
            name: item.fund.name !== undefined ? {
                set: item.fund.name
              } : undefined,
            slug: item.fund.slug !== undefined ? {
                set: item.fund.slug
              } : undefined,
            description: item.fund.description !== undefined ? {
                set: item.fund.description
              } : undefined,
            status: item.fund.status !== undefined ? {
                set: item.fund.status
              } : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? {
                set: item.fund.deletedAt
              } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: prop.user.linkedProviders ? 
    Array.isArray(prop.user.linkedProviders) && prop.user.linkedProviders.length > 0 && prop.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId
            } : undefined,
          email: item.email !== undefined ? {
              equals: item.email
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          accessToken: item.accessToken !== undefined ? {
              set: item.accessToken
            } : undefined,
          refreshToken: item.refreshToken !== undefined ? {
              set: item.refreshToken
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
            } : undefined,
          linkedAt: item.linkedAt !== undefined ? {
              set: item.linkedAt
            } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: prop.user.accountLinkingRequests ? 
    Array.isArray(prop.user.accountLinkingRequests) && prop.user.accountLinkingRequests.length > 0 && prop.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
          email: item.email !== undefined ? {
              equals: item.email
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          verificationToken: item.verificationToken !== undefined ? {
              set: item.verificationToken
            } : undefined,
          userAgent: item.userAgent !== undefined ? {
              set: item.userAgent
            } : undefined,
          ipAddress: item.ipAddress !== undefined ? {
              set: item.ipAddress
            } : undefined,
          expiresAt: item.expiresAt !== undefined ? {
              set: item.expiresAt
            } : undefined,
          verifiedAt: item.verifiedAt !== undefined ? {
              set: item.verifiedAt
            } : undefined,
          approvedAt: item.approvedAt !== undefined ? {
              set: item.approvedAt
            } : undefined,
          rejectedAt: item.rejectedAt !== undefined ? {
              set: item.rejectedAt
            } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: prop.user.reviewedWaitlistEntries ? 
    Array.isArray(prop.user.reviewedWaitlistEntries) && prop.user.reviewedWaitlistEntries.length > 0 && prop.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.user.reviewedWaitlistEntries.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
          reviewedById: item.reviewedById !== undefined ? {
              equals: item.reviewedById
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          email: item.email !== undefined ? {
              set: item.email
            } : undefined,
          fullName: item.fullName !== undefined ? {
              set: item.fullName
            } : undefined,
          companyName: item.companyName !== undefined ? {
              set: item.companyName
            } : undefined,
          companyWebsite: item.companyWebsite !== undefined ? {
              set: item.companyWebsite
            } : undefined,
          jobRole: item.jobRole !== undefined ? {
              set: item.jobRole
            } : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
              set: item.professionalInvestorConfirmed
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
          queuePosition: item.queuePosition !== undefined ? {
              set: item.queuePosition
            } : undefined,
          reviewedAt: item.reviewedAt !== undefined ? {
              set: item.reviewedAt
            } : undefined,
      inviteToken: item.inviteToken ? 
      typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && (Object.keys(item.inviteToken)[0] === 'id' || Object.keys(item.inviteToken)[0] === 'symbol')
? {
      connect: {
        id: item.inviteToken.id
      }
} : { upsert: {
          where: {
            id: item.inviteToken.id !== undefined ? {
                equals: item.inviteToken.id
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email
              } : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? {
                equals: item.inviteToken.waitlistEntryId
              } : undefined,
          },
          update: {
            id: item.inviteToken.id !== undefined ? {
                set: item.inviteToken.id
              } : undefined,
            token: item.inviteToken.token !== undefined ? {
                set: item.inviteToken.token
              } : undefined,
            email: item.inviteToken.email !== undefined ? {
                set: item.inviteToken.email
              } : undefined,
            used: item.inviteToken.used !== undefined ? {
                set: item.inviteToken.used
              } : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? {
                set: item.inviteToken.usedAt
              } : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? {
                set: item.inviteToken.expiresAt
              } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: prop.user.name !== undefined ? prop.user.name : undefined,
        email: prop.user.email !== undefined ? prop.user.email : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? prop.user.emailVerified : undefined,
        image: prop.user.image !== undefined ? prop.user.image : undefined,
        deletedAt: prop.user.deletedAt !== undefined ? prop.user.deletedAt : undefined,
        role: prop.user.role !== undefined ? prop.user.role : undefined,
        bio: prop.user.bio !== undefined ? prop.user.bio : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? prop.user.jobTitle : undefined,
        plan: prop.user.plan !== undefined ? prop.user.plan : undefined,
        openaiAPIKey: prop.user.openaiAPIKey !== undefined ? prop.user.openaiAPIKey : undefined,
        openaiModel: prop.user.openaiModel !== undefined ? prop.user.openaiModel : undefined,
        passwordHash: prop.user.passwordHash !== undefined ? prop.user.passwordHash : undefined,
        avatarUrl: prop.user.avatarUrl !== undefined ? prop.user.avatarUrl : undefined,
        onboardingComplete: prop.user.onboardingComplete !== undefined ? prop.user.onboardingComplete : undefined,
        signupCategory: prop.user.signupCategory !== undefined ? prop.user.signupCategory : undefined,
    customer: prop.user.customer ? 
      typeof prop.user.customer === 'object' && Object.keys(prop.user.customer).length === 1 && Object.keys(prop.user.customer)[0] === 'id'
    ? { connect: {
          id: prop.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.user.customer.id !== undefined ? prop.user.customer.id : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          authUserId: prop.user.customer.authUserId !== undefined ? {
              equals: prop.user.customer.authUserId 
             } : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name 
             } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              equals: prop.user.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? 
      Array.isArray(prop.user.accounts) && prop.user.accounts.length > 0 &&  prop.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: prop.user.sessions ? 
      Array.isArray(prop.user.sessions) && prop.user.sessions.length > 0 &&  prop.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: prop.user.authenticators ? 
      Array.isArray(prop.user.authenticators) && prop.user.authenticators.length > 0 &&  prop.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    orgMemberships: prop.user.orgMemberships ? 
      Array.isArray(prop.user.orgMemberships) && prop.user.orgMemberships.length > 0 &&  prop.user.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.orgMemberships.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          organizationId: item.organizationId !== undefined ? {
              equals: item.organizationId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      organization: item.organization ? 
        typeof item.organization === 'object' && Object.keys(item.organization).length === 1 && Object.keys(item.organization)[0] === 'id'
    ? { connect: {
            id: item.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.organization.id !== undefined ? item.organization.id : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            name: item.organization.name !== undefined ? {
                equals: item.organization.name 
               } : undefined,
          },
          create: {
            name: item.organization.name !== undefined ? item.organization.name : undefined,
            slug: item.organization.slug !== undefined ? item.organization.slug : undefined,
            logoUrl: item.organization.logoUrl !== undefined ? item.organization.logoUrl : undefined,
            website: item.organization.website !== undefined ? item.organization.website : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: prop.user.fundAssignments ? 
      Array.isArray(prop.user.fundAssignments) && prop.user.fundAssignments.length > 0 &&  prop.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.fundAssignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      fund: item.fund ? 
        typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
            id: item.fund.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.id !== undefined ? item.fund.id : undefined,
            name: item.fund.name !== undefined ? {
                equals: item.fund.name 
               } : undefined,
            slug: item.fund.slug !== undefined ? {
                equals: item.fund.slug 
               } : undefined,
            organizationId: item.fund.organizationId !== undefined ? {
                equals: item.fund.organizationId 
               } : undefined,
          },
          create: {
            name: item.fund.name !== undefined ? item.fund.name : undefined,
            slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
            description: item.fund.description !== undefined ? item.fund.description : undefined,
            status: item.fund.status !== undefined ? item.fund.status : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    linkedProviders: prop.user.linkedProviders ? 
      Array.isArray(prop.user.linkedProviders) && prop.user.linkedProviders.length > 0 &&  prop.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.linkedProviders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          email: item.email !== undefined ? item.email : undefined,
          accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
          refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
        },
      }))
    } : undefined,
    accountLinkingRequests: prop.user.accountLinkingRequests ? 
      Array.isArray(prop.user.accountLinkingRequests) && prop.user.accountLinkingRequests.length > 0 &&  prop.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.accountLinkingRequests.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
          email: item.email !== undefined ? {
              equals: item.email 
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              equals: item.providerAccountId 
             } : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          status: item.status !== undefined ? item.status : undefined,
          verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
          userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
          ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
          expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
          verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
          approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
          rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
        },
      }))
    } : undefined,
    reviewedWaitlistEntries: prop.user.reviewedWaitlistEntries ? 
      Array.isArray(prop.user.reviewedWaitlistEntries) && prop.user.reviewedWaitlistEntries.length > 0 &&  prop.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.reviewedWaitlistEntries.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.reviewedWaitlistEntries.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          email: item.email !== undefined ? item.email : undefined,
        },
        create: {
          email: item.email !== undefined ? item.email : undefined,
          fullName: item.fullName !== undefined ? item.fullName : undefined,
          companyName: item.companyName !== undefined ? item.companyName : undefined,
          companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
          jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
          professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
          status: item.status !== undefined ? item.status : undefined,
          queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
          reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
      inviteToken: item.inviteToken ? 
        typeof item.inviteToken === 'object' && Object.keys(item.inviteToken).length === 1 && Object.keys(item.inviteToken)[0] === 'id'
    ? { connect: {
            id: item.inviteToken.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.inviteToken.id !== undefined ? item.inviteToken.id : undefined,
            waitlistEntryId: item.inviteToken.waitlistEntryId !== undefined ? item.inviteToken.waitlistEntryId : undefined,
            email: item.inviteToken.email !== undefined ? {
                equals: item.inviteToken.email 
               } : undefined,
          },
          create: {
            token: item.inviteToken.token !== undefined ? item.inviteToken.token : undefined,
            email: item.inviteToken.email !== undefined ? item.inviteToken.email : undefined,
            used: item.inviteToken.used !== undefined ? item.inviteToken.used : undefined,
            usedAt: item.inviteToken.usedAt !== undefined ? item.inviteToken.usedAt : undefined,
            expiresAt: item.inviteToken.expiresAt !== undefined ? item.inviteToken.expiresAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  investments: prop.investments ? 
  Array.isArray(prop.investments) && prop.investments.length > 0 && prop.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.investments.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.investments.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        fundId: item.fundId !== undefined ? {
            equals: item.fundId
          } : undefined,
        investorId: item.investorId !== undefined ? {
            equals: item.investorId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        units: item.units !== undefined ? {
            set: item.units
          } : undefined,
        investedAt: item.investedAt !== undefined ? {
            set: item.investedAt
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
    fund: item.fund ? 
    typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && (Object.keys(item.fund)[0] === 'id' || Object.keys(item.fund)[0] === 'symbol')
? {
    connect: {
      id: item.fund.id
    }
} : { upsert: {
        where: {
          id: item.fund.id !== undefined ? {
              equals: item.fund.id
            } : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name
            } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug
            } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId
            } : undefined,
        },
        update: {
          id: item.fund.id !== undefined ? {
              set: item.fund.id
            } : undefined,
          name: item.fund.name !== undefined ? {
              set: item.fund.name
            } : undefined,
          slug: item.fund.slug !== undefined ? {
              set: item.fund.slug
            } : undefined,
          description: item.fund.description !== undefined ? {
              set: item.fund.description
            } : undefined,
          status: item.fund.status !== undefined ? {
              set: item.fund.status
            } : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? {
              set: item.fund.deletedAt
            } : undefined,
      organization: item.fund.organization ? 
      typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && (Object.keys(item.fund.organization)[0] === 'id' || Object.keys(item.fund.organization)[0] === 'symbol')
? {
      connect: {
        id: item.fund.organization.id
      }
} : { upsert: {
          where: {
            id: item.fund.organization.id !== undefined ? {
                equals: item.fund.organization.id
              } : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name
              } : undefined,
            slug: item.fund.organization.slug !== undefined ? {
                equals: item.fund.organization.slug
              } : undefined,
          },
          update: {
            id: item.fund.organization.id !== undefined ? {
                set: item.fund.organization.id
              } : undefined,
            name: item.fund.organization.name !== undefined ? {
                set: item.fund.organization.name
              } : undefined,
            slug: item.fund.organization.slug !== undefined ? {
                set: item.fund.organization.slug
              } : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? {
                set: item.fund.organization.logoUrl
              } : undefined,
            website: item.fund.organization.website !== undefined ? {
                set: item.fund.organization.website
              } : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? {
                set: item.fund.organization.deletedAt
              } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
      Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 && item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.fund.brokerageAccounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            apiKey: item.apiKey !== undefined ? {
                set: item.apiKey
              } : undefined,
            apiSecret: item.apiSecret !== undefined ? {
                set: item.apiSecret
              } : undefined,
            configuration: item.configuration !== undefined ? {
                set: item.configuration
              } : undefined,
            marketOpen: item.marketOpen !== undefined ? {
                set: item.marketOpen
              } : undefined,
            realTime: item.realTime !== undefined ? {
                set: item.realTime
              } : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
                set: item.cryptoTradingEnabled
              } : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs
              } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
                set: item.cryptoTradeAllocationPct
              } : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
                set: item.tradeAllocationPct
              } : undefined,
            autoAllocation: item.autoAllocation !== undefined ? {
                set: item.autoAllocation
              } : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? {
                set: item.minPercentageChange
              } : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? {
                set: item.volumeThreshold
              } : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
                set: item.enablePortfolioTrailingStop
              } : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
                set: item.portfolioTrailPercent
              } : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
                set: item.portfolioProfitThresholdPercent
              } : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
                set: item.reducedPortfolioTrailPercent
              } : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
                set: item.defaultTrailingStopPercentage100
              } : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
                set: item.firstTrailReductionThreshold100
              } : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
                set: item.secondTrailReductionThreshold100
              } : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
                set: item.firstReducedTrailPercentage100
              } : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
                set: item.secondReducedTrailPercentage100
              } : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
                set: item.minimumPriceChangePercent100
              } : undefined,
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
      Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 && item.fund.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.fund.assignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        units: item.units !== undefined ? item.units : undefined,
        investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
        status: item.status !== undefined ? item.status : undefined,
    fund: item.fund ? 
      typeof item.fund === 'object' && Object.keys(item.fund).length === 1 && Object.keys(item.fund)[0] === 'id'
    ? { connect: {
          id: item.fund.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.fund.id !== undefined ? item.fund.id : undefined,
          name: item.fund.name !== undefined ? {
              equals: item.fund.name 
             } : undefined,
          slug: item.fund.slug !== undefined ? {
              equals: item.fund.slug 
             } : undefined,
          organizationId: item.fund.organizationId !== undefined ? {
              equals: item.fund.organizationId 
             } : undefined,
        },
        create: {
          name: item.fund.name !== undefined ? item.fund.name : undefined,
          slug: item.fund.slug !== undefined ? item.fund.slug : undefined,
          description: item.fund.description !== undefined ? item.fund.description : undefined,
          status: item.fund.status !== undefined ? item.fund.status : undefined,
          deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
      organization: item.fund.organization ? 
        typeof item.fund.organization === 'object' && Object.keys(item.fund.organization).length === 1 && Object.keys(item.fund.organization)[0] === 'id'
    ? { connect: {
            id: item.fund.organization.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.fund.organization.id !== undefined ? item.fund.organization.id : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            name: item.fund.organization.name !== undefined ? {
                equals: item.fund.organization.name 
               } : undefined,
          },
          create: {
            name: item.fund.organization.name !== undefined ? item.fund.organization.name : undefined,
            slug: item.fund.organization.slug !== undefined ? item.fund.organization.slug : undefined,
            logoUrl: item.fund.organization.logoUrl !== undefined ? item.fund.organization.logoUrl : undefined,
            website: item.fund.organization.website !== undefined ? item.fund.organization.website : undefined,
            deletedAt: item.fund.organization.deletedAt !== undefined ? item.fund.organization.deletedAt : undefined,
          },
        }
      } : undefined,
      brokerageAccounts: item.fund.brokerageAccounts ? 
        Array.isArray(item.fund.brokerageAccounts) && item.fund.brokerageAccounts.length > 0 &&  item.fund.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.brokerageAccounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.brokerageAccounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            type: item.type !== undefined ? item.type : undefined,
            apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
            apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
            configuration: item.configuration !== undefined ? item.configuration : undefined,
            marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
            realTime: item.realTime !== undefined ? item.realTime : undefined,
            cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
            cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
                set: item.cryptoTradingPairs 
               } : undefined,
            cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
            tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
            autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
            minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
            volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
            enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
            portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
            portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
            reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
            defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
            firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
            secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
            firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
            secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
            minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
          },
        }))
      } : undefined,
      assignments: item.fund.assignments ? 
        Array.isArray(item.fund.assignments) && item.fund.assignments.length > 0 &&  item.fund.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.fund.assignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.fund.assignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_INVESTOR,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyInvestor) {
          return response.data.updateManyInvestor;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single Investor record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Investor or null.
   */
  async delete(props: InvestorType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestorType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_INVESTOR = gql`
          mutation deleteOneInvestor($where: InvestorWhereUniqueInput!) {
            deleteOneInvestor(where: $where) {
              id
            }
          }`;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          }
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_INVESTOR,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneInvestor) {
          return response.data.deleteOneInvestor;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single Investor record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Investor or null.
   */
  async get(props: InvestorType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InvestorType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_INVESTOR = gql`
          query getInvestor($where: InvestorWhereUniqueInput!) {
            getInvestor(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? props.userId : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_INVESTOR,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getInvestor ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Investor found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all Investors records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Investor records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InvestorType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_INVESTOR = gql`
          query getAllInvestor {
            investors {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_INVESTOR,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.investors ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Investor found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple Investor records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Investor records or null.
   */
  async findMany(props: InvestorType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InvestorType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_INVESTOR = gql`
          query findManyInvestor($where: InvestorWhereInput!) {
            investors(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_INVESTOR,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.investors) {
          return response.data.investors;
        } else {
          return [] as InvestorType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Investor found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
