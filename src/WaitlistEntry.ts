
  
import { WaitlistEntry as WaitlistEntryType } from './generated/typegraphql-prisma/models/WaitlistEntry';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the WaitlistEntry model.
   */

  const selectionSet = `
    
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
  reviewedBy {
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
        businessType
        jurisdiction
        regulatoryStatus
        description
        tradingDefaults
        llmDefaults
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
        tradingOverrides
        llmOverrides
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
    investorProfile {
      id
      name
      email
      type
      kycStatus
      walletAddress
      userId
      createdAt
      updatedAt
      deletedAt
      investments {
        id
        fundId
        fund {
id
        }
        investorId
        units
        investedAt
        status
        createdAt
        updatedAt
      }
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
    dashboardLayouts {
      id
      userId
      role
      layout
      createdAt
      updatedAt
    }
  }
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

  `;

  export const WaitlistEntry = {

    /**
     * Create a new WaitlistEntry record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created WaitlistEntry or null.
     */

    /**
     * Create a new WaitlistEntry record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created WaitlistEntry or null.
     */
    async create(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 2;
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

          const CREATE_ONE_WAITLISTENTRY = gql`
              mutation createOneWaitlistEntry($data: WaitlistEntryCreateInput!) {
                createOneWaitlistEntry(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                email: props.email !== undefined ? props.email : undefined,
  fullName: props.fullName !== undefined ? props.fullName : undefined,
  companyName: props.companyName !== undefined ? props.companyName : undefined,
  companyWebsite: props.companyWebsite !== undefined ? props.companyWebsite : undefined,
  jobRole: props.jobRole !== undefined ? props.jobRole : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? props.professionalInvestorConfirmed : undefined,
  status: props.status !== undefined ? props.status : undefined,
  queuePosition: props.queuePosition !== undefined ? props.queuePosition : undefined,
  reviewedAt: props.reviewedAt !== undefined ? props.reviewedAt : undefined,
  reviewedBy: props.reviewedBy ? 
    typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && Object.keys(props.reviewedBy)[0] === 'id'
    ? { connect: {
        id: props.reviewedBy.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.reviewedBy.id !== undefined ? props.reviewedBy.id : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name 
           } : undefined,
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        deletedAt: props.reviewedBy.deletedAt !== undefined ? props.reviewedBy.deletedAt : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
        passwordHash: props.reviewedBy.passwordHash !== undefined ? props.reviewedBy.passwordHash : undefined,
        avatarUrl: props.reviewedBy.avatarUrl !== undefined ? props.reviewedBy.avatarUrl : undefined,
        onboardingComplete: props.reviewedBy.onboardingComplete !== undefined ? props.reviewedBy.onboardingComplete : undefined,
        signupCategory: props.reviewedBy.signupCategory !== undefined ? props.reviewedBy.signupCategory : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: props.reviewedBy.orgMemberships ? 
      Array.isArray(props.reviewedBy.orgMemberships) && props.reviewedBy.orgMemberships.length > 0 &&  props.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.reviewedBy.fundAssignments ? 
      Array.isArray(props.reviewedBy.fundAssignments) && props.reviewedBy.fundAssignments.length > 0 &&  props.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.reviewedBy.investorProfile ? 
      typeof props.reviewedBy.investorProfile === 'object' && Object.keys(props.reviewedBy.investorProfile).length === 1 && Object.keys(props.reviewedBy.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.investorProfile.id !== undefined ? props.reviewedBy.investorProfile.id : undefined,
          userId: props.reviewedBy.investorProfile.userId !== undefined ? props.reviewedBy.investorProfile.userId : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              equals: props.reviewedBy.investorProfile.name 
             } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              equals: props.reviewedBy.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.reviewedBy.investorProfile.name !== undefined ? props.reviewedBy.investorProfile.name : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? props.reviewedBy.investorProfile.email : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? props.reviewedBy.investorProfile.type : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? props.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? props.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? props.reviewedBy.investorProfile.deletedAt : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
        Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 &&  props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: props.reviewedBy.dashboardLayouts ? 
      Array.isArray(props.reviewedBy.dashboardLayouts) && props.reviewedBy.dashboardLayouts.length > 0 &&  props.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.dashboardLayouts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
    typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && Object.keys(props.inviteToken)[0] === 'id'
    ? { connect: {
        id: props.inviteToken.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.inviteToken.id !== undefined ? props.inviteToken.id : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? props.inviteToken.waitlistEntryId : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email 
           } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_WAITLISTENTRY,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneWaitlistEntry) {
            return response.data.createOneWaitlistEntry;
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
            const baseDelay = Math.pow(2, retryCount) * 500;
            const jitter = Math.floor(Math.random() * 500);
            const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
            logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Create multiple WaitlistEntry records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of WaitlistEntry objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: WaitlistEntryType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const CREATE_MANY_WAITLISTENTRY = gql`
          mutation createManyWaitlistEntry($data: [WaitlistEntryCreateManyInput!]!) {
            createManyWaitlistEntry(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      email: prop.email !== undefined ? prop.email : undefined,
  fullName: prop.fullName !== undefined ? prop.fullName : undefined,
  companyName: prop.companyName !== undefined ? prop.companyName : undefined,
  companyWebsite: prop.companyWebsite !== undefined ? prop.companyWebsite : undefined,
  jobRole: prop.jobRole !== undefined ? prop.jobRole : undefined,
  professionalInvestorConfirmed: prop.professionalInvestorConfirmed !== undefined ? prop.professionalInvestorConfirmed : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  queuePosition: prop.queuePosition !== undefined ? prop.queuePosition : undefined,
  reviewedAt: prop.reviewedAt !== undefined ? prop.reviewedAt : undefined,
  reviewedById: prop.reviewedById !== undefined ? prop.reviewedById : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyWaitlistEntry) {
          return response.data.createManyWaitlistEntry;
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Update a single WaitlistEntry record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated WaitlistEntry or null.
   */
  async update(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const UPDATE_ONE_WAITLISTENTRY = gql`
          mutation updateOneWaitlistEntry($data: WaitlistEntryUpdateInput!, $where: WaitlistEntryWhereUniqueInput!) {
            updateOneWaitlistEntry(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  fullName: props.fullName !== undefined ? {
            set: props.fullName 
           } : undefined,
  companyName: props.companyName !== undefined ? {
            set: props.companyName 
           } : undefined,
  companyWebsite: props.companyWebsite !== undefined ? {
            set: props.companyWebsite 
           } : undefined,
  jobRole: props.jobRole !== undefined ? {
            set: props.jobRole 
           } : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? {
            set: props.professionalInvestorConfirmed 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  queuePosition: props.queuePosition !== undefined ? {
            set: props.queuePosition 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  reviewedAt: props.reviewedAt !== undefined ? {
            set: props.reviewedAt 
           } : undefined,
  reviewedBy: props.reviewedBy ? 
  typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && (Object.keys(props.reviewedBy)[0] === 'id' || Object.keys(props.reviewedBy)[0] === 'symbol')
? {
  connect: {
    id: props.reviewedBy.id
  }
} : { upsert: {
      where: {
        id: props.reviewedBy.id !== undefined ? {
            equals: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            equals: props.reviewedBy.email
          } : undefined,
        customerId: props.reviewedBy.customerId !== undefined ? {
            equals: props.reviewedBy.customerId
          } : undefined,
      },
      update: {
        id: props.reviewedBy.id !== undefined ? {
            set: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            set: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            set: props.reviewedBy.email
          } : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? {
            set: props.reviewedBy.emailVerified
          } : undefined,
        image: props.reviewedBy.image !== undefined ? {
            set: props.reviewedBy.image
          } : undefined,
        deletedAt: props.reviewedBy.deletedAt !== undefined ? {
            set: props.reviewedBy.deletedAt
          } : undefined,
        role: props.reviewedBy.role !== undefined ? {
            set: props.reviewedBy.role
          } : undefined,
        bio: props.reviewedBy.bio !== undefined ? {
            set: props.reviewedBy.bio
          } : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? {
            set: props.reviewedBy.jobTitle
          } : undefined,
        plan: props.reviewedBy.plan !== undefined ? {
            set: props.reviewedBy.plan
          } : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? {
            set: props.reviewedBy.openaiAPIKey
          } : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? {
            set: props.reviewedBy.openaiModel
          } : undefined,
        passwordHash: props.reviewedBy.passwordHash !== undefined ? {
            set: props.reviewedBy.passwordHash
          } : undefined,
        avatarUrl: props.reviewedBy.avatarUrl !== undefined ? {
            set: props.reviewedBy.avatarUrl
          } : undefined,
        onboardingComplete: props.reviewedBy.onboardingComplete !== undefined ? {
            set: props.reviewedBy.onboardingComplete
          } : undefined,
        signupCategory: props.reviewedBy.signupCategory !== undefined ? {
            set: props.reviewedBy.signupCategory
          } : undefined,
    customer: props.reviewedBy.customer ? 
    typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && (Object.keys(props.reviewedBy.customer)[0] === 'id' || Object.keys(props.reviewedBy.customer)[0] === 'symbol')
? {
    connect: {
      id: props.reviewedBy.customer.id
    }
} : { upsert: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? {
              equals: props.reviewedBy.customer.id
            } : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              equals: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              equals: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              set: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              set: props.reviewedBy.customer.name
            } : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? {
              set: props.reviewedBy.customer.plan
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              set: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              set: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              set: props.reviewedBy.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.reviewedBy.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
    Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 && props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
    Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 && props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
    Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 && props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: props.reviewedBy.orgMemberships ? 
    Array.isArray(props.reviewedBy.orgMemberships) && props.reviewedBy.orgMemberships.length > 0 && props.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? {
                set: item.organization.businessType
              } : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? {
                set: item.organization.jurisdiction
              } : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? {
                set: item.organization.regulatoryStatus
              } : undefined,
            description: item.organization.description !== undefined ? {
                set: item.organization.description
              } : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? {
                set: item.organization.tradingDefaults
              } : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? {
                set: item.organization.llmDefaults
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.reviewedBy.fundAssignments ? 
    Array.isArray(props.reviewedBy.fundAssignments) && props.reviewedBy.fundAssignments.length > 0 && props.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.fundAssignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? {
                set: item.fund.tradingOverrides
              } : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? {
                set: item.fund.llmOverrides
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.reviewedBy.investorProfile ? 
    typeof props.reviewedBy.investorProfile === 'object' && Object.keys(props.reviewedBy.investorProfile).length === 1 && (Object.keys(props.reviewedBy.investorProfile)[0] === 'id' || Object.keys(props.reviewedBy.investorProfile)[0] === 'symbol')
? {
    connect: {
      id: props.reviewedBy.investorProfile.id
    }
} : { upsert: {
        where: {
          id: props.reviewedBy.investorProfile.id !== undefined ? {
              equals: props.reviewedBy.investorProfile.id
            } : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              equals: props.reviewedBy.investorProfile.name
            } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              equals: props.reviewedBy.investorProfile.email
            } : undefined,
          userId: props.reviewedBy.investorProfile.userId !== undefined ? {
              equals: props.reviewedBy.investorProfile.userId
            } : undefined,
        },
        update: {
          id: props.reviewedBy.investorProfile.id !== undefined ? {
              set: props.reviewedBy.investorProfile.id
            } : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              set: props.reviewedBy.investorProfile.name
            } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              set: props.reviewedBy.investorProfile.email
            } : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? {
              set: props.reviewedBy.investorProfile.type
            } : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? {
              set: props.reviewedBy.investorProfile.kycStatus
            } : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? {
              set: props.reviewedBy.investorProfile.walletAddress
            } : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? {
              set: props.reviewedBy.investorProfile.deletedAt
            } : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
      Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 && props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.reviewedBy.investorProfile.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: props.reviewedBy.investorProfile.name !== undefined ? props.reviewedBy.investorProfile.name : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? props.reviewedBy.investorProfile.email : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? props.reviewedBy.investorProfile.type : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? props.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? props.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? props.reviewedBy.investorProfile.deletedAt : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
        Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 &&  props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: props.reviewedBy.linkedProviders ? 
    Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 && props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
    Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 && props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: props.reviewedBy.dashboardLayouts ? 
    Array.isArray(props.reviewedBy.dashboardLayouts) && props.reviewedBy.dashboardLayouts.length > 0 && props.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.dashboardLayouts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.dashboardLayouts.map((item: any) => ({
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
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          layout: item.layout !== undefined ? {
              set: item.layout
            } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        deletedAt: props.reviewedBy.deletedAt !== undefined ? props.reviewedBy.deletedAt : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
        passwordHash: props.reviewedBy.passwordHash !== undefined ? props.reviewedBy.passwordHash : undefined,
        avatarUrl: props.reviewedBy.avatarUrl !== undefined ? props.reviewedBy.avatarUrl : undefined,
        onboardingComplete: props.reviewedBy.onboardingComplete !== undefined ? props.reviewedBy.onboardingComplete : undefined,
        signupCategory: props.reviewedBy.signupCategory !== undefined ? props.reviewedBy.signupCategory : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: props.reviewedBy.orgMemberships ? 
      Array.isArray(props.reviewedBy.orgMemberships) && props.reviewedBy.orgMemberships.length > 0 &&  props.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.reviewedBy.fundAssignments ? 
      Array.isArray(props.reviewedBy.fundAssignments) && props.reviewedBy.fundAssignments.length > 0 &&  props.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.reviewedBy.investorProfile ? 
      typeof props.reviewedBy.investorProfile === 'object' && Object.keys(props.reviewedBy.investorProfile).length === 1 && Object.keys(props.reviewedBy.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.investorProfile.id !== undefined ? props.reviewedBy.investorProfile.id : undefined,
          userId: props.reviewedBy.investorProfile.userId !== undefined ? props.reviewedBy.investorProfile.userId : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              equals: props.reviewedBy.investorProfile.name 
             } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              equals: props.reviewedBy.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.reviewedBy.investorProfile.name !== undefined ? props.reviewedBy.investorProfile.name : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? props.reviewedBy.investorProfile.email : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? props.reviewedBy.investorProfile.type : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? props.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? props.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? props.reviewedBy.investorProfile.deletedAt : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
        Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 &&  props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: props.reviewedBy.dashboardLayouts ? 
      Array.isArray(props.reviewedBy.dashboardLayouts) && props.reviewedBy.dashboardLayouts.length > 0 &&  props.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.dashboardLayouts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
  typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && (Object.keys(props.inviteToken)[0] === 'id' || Object.keys(props.inviteToken)[0] === 'symbol')
? {
  connect: {
    id: props.inviteToken.id
  }
} : { upsert: {
      where: {
        id: props.inviteToken.id !== undefined ? {
            equals: props.inviteToken.id
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email
          } : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? {
            equals: props.inviteToken.waitlistEntryId
          } : undefined,
      },
      update: {
        id: props.inviteToken.id !== undefined ? {
            set: props.inviteToken.id
          } : undefined,
        token: props.inviteToken.token !== undefined ? {
            set: props.inviteToken.token
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            set: props.inviteToken.email
          } : undefined,
        used: props.inviteToken.used !== undefined ? {
            set: props.inviteToken.used
          } : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? {
            set: props.inviteToken.usedAt
          } : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? {
            set: props.inviteToken.expiresAt
          } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneWaitlistEntry) {
          return response.data.updateOneWaitlistEntry;
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Upsert a single WaitlistEntry record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated WaitlistEntry or null.
   */
  async upsert(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const UPSERT_ONE_WAITLISTENTRY = gql`
          mutation upsertOneWaitlistEntry($where: WaitlistEntryWhereUniqueInput!, $create: WaitlistEntryCreateInput!, $update: WaitlistEntryUpdateInput!) {
            upsertOneWaitlistEntry(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
      },
          create: {
        email: props.email !== undefined ? props.email : undefined,
  fullName: props.fullName !== undefined ? props.fullName : undefined,
  companyName: props.companyName !== undefined ? props.companyName : undefined,
  companyWebsite: props.companyWebsite !== undefined ? props.companyWebsite : undefined,
  jobRole: props.jobRole !== undefined ? props.jobRole : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? props.professionalInvestorConfirmed : undefined,
  status: props.status !== undefined ? props.status : undefined,
  queuePosition: props.queuePosition !== undefined ? props.queuePosition : undefined,
  reviewedAt: props.reviewedAt !== undefined ? props.reviewedAt : undefined,
  reviewedBy: props.reviewedBy ? 
    typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && Object.keys(props.reviewedBy)[0] === 'id'
    ? { connect: {
        id: props.reviewedBy.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.reviewedBy.id !== undefined ? props.reviewedBy.id : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name 
           } : undefined,
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        deletedAt: props.reviewedBy.deletedAt !== undefined ? props.reviewedBy.deletedAt : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
        passwordHash: props.reviewedBy.passwordHash !== undefined ? props.reviewedBy.passwordHash : undefined,
        avatarUrl: props.reviewedBy.avatarUrl !== undefined ? props.reviewedBy.avatarUrl : undefined,
        onboardingComplete: props.reviewedBy.onboardingComplete !== undefined ? props.reviewedBy.onboardingComplete : undefined,
        signupCategory: props.reviewedBy.signupCategory !== undefined ? props.reviewedBy.signupCategory : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: props.reviewedBy.orgMemberships ? 
      Array.isArray(props.reviewedBy.orgMemberships) && props.reviewedBy.orgMemberships.length > 0 &&  props.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.reviewedBy.fundAssignments ? 
      Array.isArray(props.reviewedBy.fundAssignments) && props.reviewedBy.fundAssignments.length > 0 &&  props.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.reviewedBy.investorProfile ? 
      typeof props.reviewedBy.investorProfile === 'object' && Object.keys(props.reviewedBy.investorProfile).length === 1 && Object.keys(props.reviewedBy.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.investorProfile.id !== undefined ? props.reviewedBy.investorProfile.id : undefined,
          userId: props.reviewedBy.investorProfile.userId !== undefined ? props.reviewedBy.investorProfile.userId : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              equals: props.reviewedBy.investorProfile.name 
             } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              equals: props.reviewedBy.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.reviewedBy.investorProfile.name !== undefined ? props.reviewedBy.investorProfile.name : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? props.reviewedBy.investorProfile.email : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? props.reviewedBy.investorProfile.type : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? props.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? props.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? props.reviewedBy.investorProfile.deletedAt : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
        Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 &&  props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: props.reviewedBy.dashboardLayouts ? 
      Array.isArray(props.reviewedBy.dashboardLayouts) && props.reviewedBy.dashboardLayouts.length > 0 &&  props.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.dashboardLayouts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
    typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && Object.keys(props.inviteToken)[0] === 'id'
    ? { connect: {
        id: props.inviteToken.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.inviteToken.id !== undefined ? props.inviteToken.id : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? props.inviteToken.waitlistEntryId : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email 
           } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,
      },
          update: {
      email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  fullName: props.fullName !== undefined ? {
            set: props.fullName 
           } : undefined,
  companyName: props.companyName !== undefined ? {
            set: props.companyName 
           } : undefined,
  companyWebsite: props.companyWebsite !== undefined ? {
            set: props.companyWebsite 
           } : undefined,
  jobRole: props.jobRole !== undefined ? {
            set: props.jobRole 
           } : undefined,
  professionalInvestorConfirmed: props.professionalInvestorConfirmed !== undefined ? {
            set: props.professionalInvestorConfirmed 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  queuePosition: props.queuePosition !== undefined ? {
            set: props.queuePosition 
           } : undefined,
  reviewedAt: props.reviewedAt !== undefined ? {
            set: props.reviewedAt 
           } : undefined,
  reviewedBy: props.reviewedBy ? 
  typeof props.reviewedBy === 'object' && Object.keys(props.reviewedBy).length === 1 && (Object.keys(props.reviewedBy)[0] === 'id' || Object.keys(props.reviewedBy)[0] === 'symbol')
? {
  connect: {
    id: props.reviewedBy.id
  }
} : { upsert: {
      where: {
        id: props.reviewedBy.id !== undefined ? {
            equals: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            equals: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            equals: props.reviewedBy.email
          } : undefined,
        customerId: props.reviewedBy.customerId !== undefined ? {
            equals: props.reviewedBy.customerId
          } : undefined,
      },
      update: {
        id: props.reviewedBy.id !== undefined ? {
            set: props.reviewedBy.id
          } : undefined,
        name: props.reviewedBy.name !== undefined ? {
            set: props.reviewedBy.name
          } : undefined,
        email: props.reviewedBy.email !== undefined ? {
            set: props.reviewedBy.email
          } : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? {
            set: props.reviewedBy.emailVerified
          } : undefined,
        image: props.reviewedBy.image !== undefined ? {
            set: props.reviewedBy.image
          } : undefined,
        deletedAt: props.reviewedBy.deletedAt !== undefined ? {
            set: props.reviewedBy.deletedAt
          } : undefined,
        role: props.reviewedBy.role !== undefined ? {
            set: props.reviewedBy.role
          } : undefined,
        bio: props.reviewedBy.bio !== undefined ? {
            set: props.reviewedBy.bio
          } : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? {
            set: props.reviewedBy.jobTitle
          } : undefined,
        plan: props.reviewedBy.plan !== undefined ? {
            set: props.reviewedBy.plan
          } : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? {
            set: props.reviewedBy.openaiAPIKey
          } : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? {
            set: props.reviewedBy.openaiModel
          } : undefined,
        passwordHash: props.reviewedBy.passwordHash !== undefined ? {
            set: props.reviewedBy.passwordHash
          } : undefined,
        avatarUrl: props.reviewedBy.avatarUrl !== undefined ? {
            set: props.reviewedBy.avatarUrl
          } : undefined,
        onboardingComplete: props.reviewedBy.onboardingComplete !== undefined ? {
            set: props.reviewedBy.onboardingComplete
          } : undefined,
        signupCategory: props.reviewedBy.signupCategory !== undefined ? {
            set: props.reviewedBy.signupCategory
          } : undefined,
    customer: props.reviewedBy.customer ? 
    typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && (Object.keys(props.reviewedBy.customer)[0] === 'id' || Object.keys(props.reviewedBy.customer)[0] === 'symbol')
? {
    connect: {
      id: props.reviewedBy.customer.id
    }
} : { upsert: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? {
              equals: props.reviewedBy.customer.id
            } : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              equals: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              equals: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              set: props.reviewedBy.customer.authUserId
            } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              set: props.reviewedBy.customer.name
            } : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? {
              set: props.reviewedBy.customer.plan
            } : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? {
              set: props.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              set: props.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              set: props.reviewedBy.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.reviewedBy.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
    Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 && props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
    Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 && props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
    Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 && props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: props.reviewedBy.orgMemberships ? 
    Array.isArray(props.reviewedBy.orgMemberships) && props.reviewedBy.orgMemberships.length > 0 && props.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? {
                set: item.organization.businessType
              } : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? {
                set: item.organization.jurisdiction
              } : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? {
                set: item.organization.regulatoryStatus
              } : undefined,
            description: item.organization.description !== undefined ? {
                set: item.organization.description
              } : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? {
                set: item.organization.tradingDefaults
              } : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? {
                set: item.organization.llmDefaults
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.reviewedBy.fundAssignments ? 
    Array.isArray(props.reviewedBy.fundAssignments) && props.reviewedBy.fundAssignments.length > 0 && props.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.fundAssignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? {
                set: item.fund.tradingOverrides
              } : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? {
                set: item.fund.llmOverrides
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.reviewedBy.investorProfile ? 
    typeof props.reviewedBy.investorProfile === 'object' && Object.keys(props.reviewedBy.investorProfile).length === 1 && (Object.keys(props.reviewedBy.investorProfile)[0] === 'id' || Object.keys(props.reviewedBy.investorProfile)[0] === 'symbol')
? {
    connect: {
      id: props.reviewedBy.investorProfile.id
    }
} : { upsert: {
        where: {
          id: props.reviewedBy.investorProfile.id !== undefined ? {
              equals: props.reviewedBy.investorProfile.id
            } : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              equals: props.reviewedBy.investorProfile.name
            } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              equals: props.reviewedBy.investorProfile.email
            } : undefined,
          userId: props.reviewedBy.investorProfile.userId !== undefined ? {
              equals: props.reviewedBy.investorProfile.userId
            } : undefined,
        },
        update: {
          id: props.reviewedBy.investorProfile.id !== undefined ? {
              set: props.reviewedBy.investorProfile.id
            } : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              set: props.reviewedBy.investorProfile.name
            } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              set: props.reviewedBy.investorProfile.email
            } : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? {
              set: props.reviewedBy.investorProfile.type
            } : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? {
              set: props.reviewedBy.investorProfile.kycStatus
            } : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? {
              set: props.reviewedBy.investorProfile.walletAddress
            } : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? {
              set: props.reviewedBy.investorProfile.deletedAt
            } : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
      Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 && props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: props.reviewedBy.investorProfile.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: props.reviewedBy.investorProfile.name !== undefined ? props.reviewedBy.investorProfile.name : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? props.reviewedBy.investorProfile.email : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? props.reviewedBy.investorProfile.type : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? props.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? props.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? props.reviewedBy.investorProfile.deletedAt : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
        Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 &&  props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: props.reviewedBy.linkedProviders ? 
    Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 && props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
    Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 && props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: props.reviewedBy.dashboardLayouts ? 
    Array.isArray(props.reviewedBy.dashboardLayouts) && props.reviewedBy.dashboardLayouts.length > 0 && props.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: props.reviewedBy.dashboardLayouts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: props.reviewedBy.dashboardLayouts.map((item: any) => ({
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
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          layout: item.layout !== undefined ? {
              set: item.layout
            } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.reviewedBy.name !== undefined ? props.reviewedBy.name : undefined,
        email: props.reviewedBy.email !== undefined ? props.reviewedBy.email : undefined,
        emailVerified: props.reviewedBy.emailVerified !== undefined ? props.reviewedBy.emailVerified : undefined,
        image: props.reviewedBy.image !== undefined ? props.reviewedBy.image : undefined,
        deletedAt: props.reviewedBy.deletedAt !== undefined ? props.reviewedBy.deletedAt : undefined,
        role: props.reviewedBy.role !== undefined ? props.reviewedBy.role : undefined,
        bio: props.reviewedBy.bio !== undefined ? props.reviewedBy.bio : undefined,
        jobTitle: props.reviewedBy.jobTitle !== undefined ? props.reviewedBy.jobTitle : undefined,
        plan: props.reviewedBy.plan !== undefined ? props.reviewedBy.plan : undefined,
        openaiAPIKey: props.reviewedBy.openaiAPIKey !== undefined ? props.reviewedBy.openaiAPIKey : undefined,
        openaiModel: props.reviewedBy.openaiModel !== undefined ? props.reviewedBy.openaiModel : undefined,
        passwordHash: props.reviewedBy.passwordHash !== undefined ? props.reviewedBy.passwordHash : undefined,
        avatarUrl: props.reviewedBy.avatarUrl !== undefined ? props.reviewedBy.avatarUrl : undefined,
        onboardingComplete: props.reviewedBy.onboardingComplete !== undefined ? props.reviewedBy.onboardingComplete : undefined,
        signupCategory: props.reviewedBy.signupCategory !== undefined ? props.reviewedBy.signupCategory : undefined,
    customer: props.reviewedBy.customer ? 
      typeof props.reviewedBy.customer === 'object' && Object.keys(props.reviewedBy.customer).length === 1 && Object.keys(props.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.customer.id !== undefined ? props.reviewedBy.customer.id : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? {
              equals: props.reviewedBy.customer.authUserId 
             } : undefined,
          name: props.reviewedBy.customer.name !== undefined ? {
              equals: props.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: props.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: props.reviewedBy.customer.authUserId !== undefined ? props.reviewedBy.customer.authUserId : undefined,
          name: props.reviewedBy.customer.name !== undefined ? props.reviewedBy.customer.name : undefined,
          plan: props.reviewedBy.customer.plan !== undefined ? props.reviewedBy.customer.plan : undefined,
          stripeCustomerId: props.reviewedBy.customer.stripeCustomerId !== undefined ? props.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.reviewedBy.customer.stripeSubscriptionId !== undefined ? props.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.reviewedBy.customer.stripePriceId !== undefined ? props.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? props.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.reviewedBy.accounts ? 
      Array.isArray(props.reviewedBy.accounts) && props.reviewedBy.accounts.length > 0 &&  props.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accounts.map((item: any) => ({
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
    sessions: props.reviewedBy.sessions ? 
      Array.isArray(props.reviewedBy.sessions) && props.reviewedBy.sessions.length > 0 &&  props.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: props.reviewedBy.authenticators ? 
      Array.isArray(props.reviewedBy.authenticators) && props.reviewedBy.authenticators.length > 0 &&  props.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: props.reviewedBy.orgMemberships ? 
      Array.isArray(props.reviewedBy.orgMemberships) && props.reviewedBy.orgMemberships.length > 0 &&  props.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: props.reviewedBy.fundAssignments ? 
      Array.isArray(props.reviewedBy.fundAssignments) && props.reviewedBy.fundAssignments.length > 0 &&  props.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: props.reviewedBy.investorProfile ? 
      typeof props.reviewedBy.investorProfile === 'object' && Object.keys(props.reviewedBy.investorProfile).length === 1 && Object.keys(props.reviewedBy.investorProfile)[0] === 'id'
    ? { connect: {
          id: props.reviewedBy.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.reviewedBy.investorProfile.id !== undefined ? props.reviewedBy.investorProfile.id : undefined,
          userId: props.reviewedBy.investorProfile.userId !== undefined ? props.reviewedBy.investorProfile.userId : undefined,
          name: props.reviewedBy.investorProfile.name !== undefined ? {
              equals: props.reviewedBy.investorProfile.name 
             } : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? {
              equals: props.reviewedBy.investorProfile.email 
             } : undefined,
        },
        create: {
          name: props.reviewedBy.investorProfile.name !== undefined ? props.reviewedBy.investorProfile.name : undefined,
          email: props.reviewedBy.investorProfile.email !== undefined ? props.reviewedBy.investorProfile.email : undefined,
          type: props.reviewedBy.investorProfile.type !== undefined ? props.reviewedBy.investorProfile.type : undefined,
          kycStatus: props.reviewedBy.investorProfile.kycStatus !== undefined ? props.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: props.reviewedBy.investorProfile.walletAddress !== undefined ? props.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: props.reviewedBy.investorProfile.deletedAt !== undefined ? props.reviewedBy.investorProfile.deletedAt : undefined,
      investments: props.reviewedBy.investorProfile.investments ? 
        Array.isArray(props.reviewedBy.investorProfile.investments) && props.reviewedBy.investorProfile.investments.length > 0 &&  props.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: props.reviewedBy.linkedProviders ? 
      Array.isArray(props.reviewedBy.linkedProviders) && props.reviewedBy.linkedProviders.length > 0 &&  props.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: props.reviewedBy.accountLinkingRequests ? 
      Array.isArray(props.reviewedBy.accountLinkingRequests) && props.reviewedBy.accountLinkingRequests.length > 0 &&  props.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: props.reviewedBy.dashboardLayouts ? 
      Array.isArray(props.reviewedBy.dashboardLayouts) && props.reviewedBy.dashboardLayouts.length > 0 &&  props.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.reviewedBy.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.reviewedBy.dashboardLayouts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  inviteToken: props.inviteToken ? 
  typeof props.inviteToken === 'object' && Object.keys(props.inviteToken).length === 1 && (Object.keys(props.inviteToken)[0] === 'id' || Object.keys(props.inviteToken)[0] === 'symbol')
? {
  connect: {
    id: props.inviteToken.id
  }
} : { upsert: {
      where: {
        id: props.inviteToken.id !== undefined ? {
            equals: props.inviteToken.id
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            equals: props.inviteToken.email
          } : undefined,
        waitlistEntryId: props.inviteToken.waitlistEntryId !== undefined ? {
            equals: props.inviteToken.waitlistEntryId
          } : undefined,
      },
      update: {
        id: props.inviteToken.id !== undefined ? {
            set: props.inviteToken.id
          } : undefined,
        token: props.inviteToken.token !== undefined ? {
            set: props.inviteToken.token
          } : undefined,
        email: props.inviteToken.email !== undefined ? {
            set: props.inviteToken.email
          } : undefined,
        used: props.inviteToken.used !== undefined ? {
            set: props.inviteToken.used
          } : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? {
            set: props.inviteToken.usedAt
          } : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? {
            set: props.inviteToken.expiresAt
          } : undefined,
      },
      create: {
        token: props.inviteToken.token !== undefined ? props.inviteToken.token : undefined,
        email: props.inviteToken.email !== undefined ? props.inviteToken.email : undefined,
        used: props.inviteToken.used !== undefined ? props.inviteToken.used : undefined,
        usedAt: props.inviteToken.usedAt !== undefined ? props.inviteToken.usedAt : undefined,
        expiresAt: props.inviteToken.expiresAt !== undefined ? props.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneWaitlistEntry) {
          return response.data.upsertOneWaitlistEntry;
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Update multiple WaitlistEntry records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of WaitlistEntry objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: WaitlistEntryType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const UPDATE_MANY_WAITLISTENTRY = gql`
          mutation updateManyWaitlistEntry($data: [WaitlistEntryCreateManyInput!]!) {
            updateManyWaitlistEntry(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  email: prop.email !== undefined ? prop.email : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  fullName: prop.fullName !== undefined ? {
            set: prop.fullName 
           } : undefined,
  companyName: prop.companyName !== undefined ? {
            set: prop.companyName 
           } : undefined,
  companyWebsite: prop.companyWebsite !== undefined ? {
            set: prop.companyWebsite 
           } : undefined,
  jobRole: prop.jobRole !== undefined ? {
            set: prop.jobRole 
           } : undefined,
  professionalInvestorConfirmed: prop.professionalInvestorConfirmed !== undefined ? {
            set: prop.professionalInvestorConfirmed 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  queuePosition: prop.queuePosition !== undefined ? {
            set: prop.queuePosition 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  reviewedAt: prop.reviewedAt !== undefined ? {
            set: prop.reviewedAt 
           } : undefined,
  reviewedBy: prop.reviewedBy ? 
  typeof prop.reviewedBy === 'object' && Object.keys(prop.reviewedBy).length === 1 && (Object.keys(prop.reviewedBy)[0] === 'id' || Object.keys(prop.reviewedBy)[0] === 'symbol')
? {
  connect: {
    id: prop.reviewedBy.id
  }
} : { upsert: {
      where: {
        id: prop.reviewedBy.id !== undefined ? {
            equals: prop.reviewedBy.id
          } : undefined,
        name: prop.reviewedBy.name !== undefined ? {
            equals: prop.reviewedBy.name
          } : undefined,
        email: prop.reviewedBy.email !== undefined ? {
            equals: prop.reviewedBy.email
          } : undefined,
        customerId: prop.reviewedBy.customerId !== undefined ? {
            equals: prop.reviewedBy.customerId
          } : undefined,
      },
      update: {
        id: prop.reviewedBy.id !== undefined ? {
            set: prop.reviewedBy.id
          } : undefined,
        name: prop.reviewedBy.name !== undefined ? {
            set: prop.reviewedBy.name
          } : undefined,
        email: prop.reviewedBy.email !== undefined ? {
            set: prop.reviewedBy.email
          } : undefined,
        emailVerified: prop.reviewedBy.emailVerified !== undefined ? {
            set: prop.reviewedBy.emailVerified
          } : undefined,
        image: prop.reviewedBy.image !== undefined ? {
            set: prop.reviewedBy.image
          } : undefined,
        deletedAt: prop.reviewedBy.deletedAt !== undefined ? {
            set: prop.reviewedBy.deletedAt
          } : undefined,
        role: prop.reviewedBy.role !== undefined ? {
            set: prop.reviewedBy.role
          } : undefined,
        bio: prop.reviewedBy.bio !== undefined ? {
            set: prop.reviewedBy.bio
          } : undefined,
        jobTitle: prop.reviewedBy.jobTitle !== undefined ? {
            set: prop.reviewedBy.jobTitle
          } : undefined,
        plan: prop.reviewedBy.plan !== undefined ? {
            set: prop.reviewedBy.plan
          } : undefined,
        openaiAPIKey: prop.reviewedBy.openaiAPIKey !== undefined ? {
            set: prop.reviewedBy.openaiAPIKey
          } : undefined,
        openaiModel: prop.reviewedBy.openaiModel !== undefined ? {
            set: prop.reviewedBy.openaiModel
          } : undefined,
        passwordHash: prop.reviewedBy.passwordHash !== undefined ? {
            set: prop.reviewedBy.passwordHash
          } : undefined,
        avatarUrl: prop.reviewedBy.avatarUrl !== undefined ? {
            set: prop.reviewedBy.avatarUrl
          } : undefined,
        onboardingComplete: prop.reviewedBy.onboardingComplete !== undefined ? {
            set: prop.reviewedBy.onboardingComplete
          } : undefined,
        signupCategory: prop.reviewedBy.signupCategory !== undefined ? {
            set: prop.reviewedBy.signupCategory
          } : undefined,
    customer: prop.reviewedBy.customer ? 
    typeof prop.reviewedBy.customer === 'object' && Object.keys(prop.reviewedBy.customer).length === 1 && (Object.keys(prop.reviewedBy.customer)[0] === 'id' || Object.keys(prop.reviewedBy.customer)[0] === 'symbol')
? {
    connect: {
      id: prop.reviewedBy.customer.id
    }
} : { upsert: {
        where: {
          id: prop.reviewedBy.customer.id !== undefined ? {
              equals: prop.reviewedBy.customer.id
            } : undefined,
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? {
              equals: prop.reviewedBy.customer.authUserId
            } : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? {
              equals: prop.reviewedBy.customer.name
            } : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? {
              equals: prop.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              equals: prop.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: prop.reviewedBy.customer.stripePriceId
            } : undefined,
        },
        update: {
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? {
              set: prop.reviewedBy.customer.authUserId
            } : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? {
              set: prop.reviewedBy.customer.name
            } : undefined,
          plan: prop.reviewedBy.customer.plan !== undefined ? {
              set: prop.reviewedBy.customer.plan
            } : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? {
              set: prop.reviewedBy.customer.stripeCustomerId
            } : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? {
              set: prop.reviewedBy.customer.stripeSubscriptionId
            } : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? {
              set: prop.reviewedBy.customer.stripePriceId
            } : undefined,
          stripeCurrentPeriodEnd: prop.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: prop.reviewedBy.customer.stripeCurrentPeriodEnd
            } : undefined,
        },
        create: {
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? prop.reviewedBy.customer.authUserId : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? prop.reviewedBy.customer.name : undefined,
          plan: prop.reviewedBy.customer.plan !== undefined ? prop.reviewedBy.customer.plan : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? prop.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? prop.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? prop.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.reviewedBy.accounts ? 
    Array.isArray(prop.reviewedBy.accounts) && prop.reviewedBy.accounts.length > 0 && prop.reviewedBy.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.accounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.accounts.map((item: any) => ({
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
    sessions: prop.reviewedBy.sessions ? 
    Array.isArray(prop.reviewedBy.sessions) && prop.reviewedBy.sessions.length > 0 && prop.reviewedBy.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.sessions.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: prop.reviewedBy.authenticators ? 
    Array.isArray(prop.reviewedBy.authenticators) && prop.reviewedBy.authenticators.length > 0 && prop.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.authenticators.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: prop.reviewedBy.orgMemberships ? 
    Array.isArray(prop.reviewedBy.orgMemberships) && prop.reviewedBy.orgMemberships.length > 0 && prop.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.orgMemberships.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? {
                set: item.organization.businessType
              } : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? {
                set: item.organization.jurisdiction
              } : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? {
                set: item.organization.regulatoryStatus
              } : undefined,
            description: item.organization.description !== undefined ? {
                set: item.organization.description
              } : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? {
                set: item.organization.tradingDefaults
              } : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? {
                set: item.organization.llmDefaults
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: prop.reviewedBy.fundAssignments ? 
    Array.isArray(prop.reviewedBy.fundAssignments) && prop.reviewedBy.fundAssignments.length > 0 && prop.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.fundAssignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? {
                set: item.fund.tradingOverrides
              } : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? {
                set: item.fund.llmOverrides
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: prop.reviewedBy.investorProfile ? 
    typeof prop.reviewedBy.investorProfile === 'object' && Object.keys(prop.reviewedBy.investorProfile).length === 1 && (Object.keys(prop.reviewedBy.investorProfile)[0] === 'id' || Object.keys(prop.reviewedBy.investorProfile)[0] === 'symbol')
? {
    connect: {
      id: prop.reviewedBy.investorProfile.id
    }
} : { upsert: {
        where: {
          id: prop.reviewedBy.investorProfile.id !== undefined ? {
              equals: prop.reviewedBy.investorProfile.id
            } : undefined,
          name: prop.reviewedBy.investorProfile.name !== undefined ? {
              equals: prop.reviewedBy.investorProfile.name
            } : undefined,
          email: prop.reviewedBy.investorProfile.email !== undefined ? {
              equals: prop.reviewedBy.investorProfile.email
            } : undefined,
          userId: prop.reviewedBy.investorProfile.userId !== undefined ? {
              equals: prop.reviewedBy.investorProfile.userId
            } : undefined,
        },
        update: {
          id: prop.reviewedBy.investorProfile.id !== undefined ? {
              set: prop.reviewedBy.investorProfile.id
            } : undefined,
          name: prop.reviewedBy.investorProfile.name !== undefined ? {
              set: prop.reviewedBy.investorProfile.name
            } : undefined,
          email: prop.reviewedBy.investorProfile.email !== undefined ? {
              set: prop.reviewedBy.investorProfile.email
            } : undefined,
          type: prop.reviewedBy.investorProfile.type !== undefined ? {
              set: prop.reviewedBy.investorProfile.type
            } : undefined,
          kycStatus: prop.reviewedBy.investorProfile.kycStatus !== undefined ? {
              set: prop.reviewedBy.investorProfile.kycStatus
            } : undefined,
          walletAddress: prop.reviewedBy.investorProfile.walletAddress !== undefined ? {
              set: prop.reviewedBy.investorProfile.walletAddress
            } : undefined,
          deletedAt: prop.reviewedBy.investorProfile.deletedAt !== undefined ? {
              set: prop.reviewedBy.investorProfile.deletedAt
            } : undefined,
      investments: prop.reviewedBy.investorProfile.investments ? 
      Array.isArray(prop.reviewedBy.investorProfile.investments) && prop.reviewedBy.investorProfile.investments.length > 0 && prop.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: prop.reviewedBy.investorProfile.investments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: prop.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
          create: {
            units: item.units !== undefined ? item.units : undefined,
            investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: prop.reviewedBy.investorProfile.name !== undefined ? prop.reviewedBy.investorProfile.name : undefined,
          email: prop.reviewedBy.investorProfile.email !== undefined ? prop.reviewedBy.investorProfile.email : undefined,
          type: prop.reviewedBy.investorProfile.type !== undefined ? prop.reviewedBy.investorProfile.type : undefined,
          kycStatus: prop.reviewedBy.investorProfile.kycStatus !== undefined ? prop.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: prop.reviewedBy.investorProfile.walletAddress !== undefined ? prop.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: prop.reviewedBy.investorProfile.deletedAt !== undefined ? prop.reviewedBy.investorProfile.deletedAt : undefined,
      investments: prop.reviewedBy.investorProfile.investments ? 
        Array.isArray(prop.reviewedBy.investorProfile.investments) && prop.reviewedBy.investorProfile.investments.length > 0 &&  prop.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: prop.reviewedBy.linkedProviders ? 
    Array.isArray(prop.reviewedBy.linkedProviders) && prop.reviewedBy.linkedProviders.length > 0 && prop.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.linkedProviders.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: prop.reviewedBy.accountLinkingRequests ? 
    Array.isArray(prop.reviewedBy.accountLinkingRequests) && prop.reviewedBy.accountLinkingRequests.length > 0 && prop.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: prop.reviewedBy.dashboardLayouts ? 
    Array.isArray(prop.reviewedBy.dashboardLayouts) && prop.reviewedBy.dashboardLayouts.length > 0 && prop.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: prop.reviewedBy.dashboardLayouts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: prop.reviewedBy.dashboardLayouts.map((item: any) => ({
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
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          layout: item.layout !== undefined ? {
              set: item.layout
            } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: prop.reviewedBy.name !== undefined ? prop.reviewedBy.name : undefined,
        email: prop.reviewedBy.email !== undefined ? prop.reviewedBy.email : undefined,
        emailVerified: prop.reviewedBy.emailVerified !== undefined ? prop.reviewedBy.emailVerified : undefined,
        image: prop.reviewedBy.image !== undefined ? prop.reviewedBy.image : undefined,
        deletedAt: prop.reviewedBy.deletedAt !== undefined ? prop.reviewedBy.deletedAt : undefined,
        role: prop.reviewedBy.role !== undefined ? prop.reviewedBy.role : undefined,
        bio: prop.reviewedBy.bio !== undefined ? prop.reviewedBy.bio : undefined,
        jobTitle: prop.reviewedBy.jobTitle !== undefined ? prop.reviewedBy.jobTitle : undefined,
        plan: prop.reviewedBy.plan !== undefined ? prop.reviewedBy.plan : undefined,
        openaiAPIKey: prop.reviewedBy.openaiAPIKey !== undefined ? prop.reviewedBy.openaiAPIKey : undefined,
        openaiModel: prop.reviewedBy.openaiModel !== undefined ? prop.reviewedBy.openaiModel : undefined,
        passwordHash: prop.reviewedBy.passwordHash !== undefined ? prop.reviewedBy.passwordHash : undefined,
        avatarUrl: prop.reviewedBy.avatarUrl !== undefined ? prop.reviewedBy.avatarUrl : undefined,
        onboardingComplete: prop.reviewedBy.onboardingComplete !== undefined ? prop.reviewedBy.onboardingComplete : undefined,
        signupCategory: prop.reviewedBy.signupCategory !== undefined ? prop.reviewedBy.signupCategory : undefined,
    customer: prop.reviewedBy.customer ? 
      typeof prop.reviewedBy.customer === 'object' && Object.keys(prop.reviewedBy.customer).length === 1 && Object.keys(prop.reviewedBy.customer)[0] === 'id'
    ? { connect: {
          id: prop.reviewedBy.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.reviewedBy.customer.id !== undefined ? prop.reviewedBy.customer.id : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? prop.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.reviewedBy.customer.stripeSubscriptionId : undefined,
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? {
              equals: prop.reviewedBy.customer.authUserId 
             } : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? {
              equals: prop.reviewedBy.customer.name 
             } : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? {
              equals: prop.reviewedBy.customer.stripePriceId 
             } : undefined,
        },
        create: {
          authUserId: prop.reviewedBy.customer.authUserId !== undefined ? prop.reviewedBy.customer.authUserId : undefined,
          name: prop.reviewedBy.customer.name !== undefined ? prop.reviewedBy.customer.name : undefined,
          plan: prop.reviewedBy.customer.plan !== undefined ? prop.reviewedBy.customer.plan : undefined,
          stripeCustomerId: prop.reviewedBy.customer.stripeCustomerId !== undefined ? prop.reviewedBy.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.reviewedBy.customer.stripeSubscriptionId !== undefined ? prop.reviewedBy.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.reviewedBy.customer.stripePriceId !== undefined ? prop.reviewedBy.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.reviewedBy.customer.stripeCurrentPeriodEnd !== undefined ? prop.reviewedBy.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.reviewedBy.accounts ? 
      Array.isArray(prop.reviewedBy.accounts) && prop.reviewedBy.accounts.length > 0 &&  prop.reviewedBy.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.accounts.map((item: any) => ({
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
    sessions: prop.reviewedBy.sessions ? 
      Array.isArray(prop.reviewedBy.sessions) && prop.reviewedBy.sessions.length > 0 &&  prop.reviewedBy.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.sessions.map((item: any) => ({
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
    authenticators: prop.reviewedBy.authenticators ? 
      Array.isArray(prop.reviewedBy.authenticators) && prop.reviewedBy.authenticators.length > 0 &&  prop.reviewedBy.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.authenticators.map((item: any) => ({
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
    orgMemberships: prop.reviewedBy.orgMemberships ? 
      Array.isArray(prop.reviewedBy.orgMemberships) && prop.reviewedBy.orgMemberships.length > 0 &&  prop.reviewedBy.orgMemberships.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.orgMemberships.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.orgMemberships.map((item: any) => ({
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
            businessType: item.organization.businessType !== undefined ? item.organization.businessType : undefined,
            jurisdiction: item.organization.jurisdiction !== undefined ? item.organization.jurisdiction : undefined,
            regulatoryStatus: item.organization.regulatoryStatus !== undefined ? item.organization.regulatoryStatus : undefined,
            description: item.organization.description !== undefined ? item.organization.description : undefined,
            tradingDefaults: item.organization.tradingDefaults !== undefined ? item.organization.tradingDefaults : undefined,
            llmDefaults: item.organization.llmDefaults !== undefined ? item.organization.llmDefaults : undefined,
            deletedAt: item.organization.deletedAt !== undefined ? item.organization.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    fundAssignments: prop.reviewedBy.fundAssignments ? 
      Array.isArray(prop.reviewedBy.fundAssignments) && prop.reviewedBy.fundAssignments.length > 0 &&  prop.reviewedBy.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.fundAssignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.fundAssignments.map((item: any) => ({
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
            tradingOverrides: item.fund.tradingOverrides !== undefined ? item.fund.tradingOverrides : undefined,
            llmOverrides: item.fund.llmOverrides !== undefined ? item.fund.llmOverrides : undefined,
            deletedAt: item.fund.deletedAt !== undefined ? item.fund.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investorProfile: prop.reviewedBy.investorProfile ? 
      typeof prop.reviewedBy.investorProfile === 'object' && Object.keys(prop.reviewedBy.investorProfile).length === 1 && Object.keys(prop.reviewedBy.investorProfile)[0] === 'id'
    ? { connect: {
          id: prop.reviewedBy.investorProfile.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.reviewedBy.investorProfile.id !== undefined ? prop.reviewedBy.investorProfile.id : undefined,
          userId: prop.reviewedBy.investorProfile.userId !== undefined ? prop.reviewedBy.investorProfile.userId : undefined,
          name: prop.reviewedBy.investorProfile.name !== undefined ? {
              equals: prop.reviewedBy.investorProfile.name 
             } : undefined,
          email: prop.reviewedBy.investorProfile.email !== undefined ? {
              equals: prop.reviewedBy.investorProfile.email 
             } : undefined,
        },
        create: {
          name: prop.reviewedBy.investorProfile.name !== undefined ? prop.reviewedBy.investorProfile.name : undefined,
          email: prop.reviewedBy.investorProfile.email !== undefined ? prop.reviewedBy.investorProfile.email : undefined,
          type: prop.reviewedBy.investorProfile.type !== undefined ? prop.reviewedBy.investorProfile.type : undefined,
          kycStatus: prop.reviewedBy.investorProfile.kycStatus !== undefined ? prop.reviewedBy.investorProfile.kycStatus : undefined,
          walletAddress: prop.reviewedBy.investorProfile.walletAddress !== undefined ? prop.reviewedBy.investorProfile.walletAddress : undefined,
          deletedAt: prop.reviewedBy.investorProfile.deletedAt !== undefined ? prop.reviewedBy.investorProfile.deletedAt : undefined,
      investments: prop.reviewedBy.investorProfile.investments ? 
        Array.isArray(prop.reviewedBy.investorProfile.investments) && prop.reviewedBy.investorProfile.investments.length > 0 &&  prop.reviewedBy.investorProfile.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.reviewedBy.investorProfile.investments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.reviewedBy.investorProfile.investments.map((item: any) => ({
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
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
    linkedProviders: prop.reviewedBy.linkedProviders ? 
      Array.isArray(prop.reviewedBy.linkedProviders) && prop.reviewedBy.linkedProviders.length > 0 &&  prop.reviewedBy.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.linkedProviders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.linkedProviders.map((item: any) => ({
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
    accountLinkingRequests: prop.reviewedBy.accountLinkingRequests ? 
      Array.isArray(prop.reviewedBy.accountLinkingRequests) && prop.reviewedBy.accountLinkingRequests.length > 0 &&  prop.reviewedBy.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.accountLinkingRequests.map((item: any) => ({
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
    dashboardLayouts: prop.reviewedBy.dashboardLayouts ? 
      Array.isArray(prop.reviewedBy.dashboardLayouts) && prop.reviewedBy.dashboardLayouts.length > 0 &&  prop.reviewedBy.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.reviewedBy.dashboardLayouts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.reviewedBy.dashboardLayouts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          layout: item.layout !== undefined ? item.layout : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  inviteToken: prop.inviteToken ? 
  typeof prop.inviteToken === 'object' && Object.keys(prop.inviteToken).length === 1 && (Object.keys(prop.inviteToken)[0] === 'id' || Object.keys(prop.inviteToken)[0] === 'symbol')
? {
  connect: {
    id: prop.inviteToken.id
  }
} : { upsert: {
      where: {
        id: prop.inviteToken.id !== undefined ? {
            equals: prop.inviteToken.id
          } : undefined,
        email: prop.inviteToken.email !== undefined ? {
            equals: prop.inviteToken.email
          } : undefined,
        waitlistEntryId: prop.inviteToken.waitlistEntryId !== undefined ? {
            equals: prop.inviteToken.waitlistEntryId
          } : undefined,
      },
      update: {
        id: prop.inviteToken.id !== undefined ? {
            set: prop.inviteToken.id
          } : undefined,
        token: prop.inviteToken.token !== undefined ? {
            set: prop.inviteToken.token
          } : undefined,
        email: prop.inviteToken.email !== undefined ? {
            set: prop.inviteToken.email
          } : undefined,
        used: prop.inviteToken.used !== undefined ? {
            set: prop.inviteToken.used
          } : undefined,
        usedAt: prop.inviteToken.usedAt !== undefined ? {
            set: prop.inviteToken.usedAt
          } : undefined,
        expiresAt: prop.inviteToken.expiresAt !== undefined ? {
            set: prop.inviteToken.expiresAt
          } : undefined,
      },
      create: {
        token: prop.inviteToken.token !== undefined ? prop.inviteToken.token : undefined,
        email: prop.inviteToken.email !== undefined ? prop.inviteToken.email : undefined,
        used: prop.inviteToken.used !== undefined ? prop.inviteToken.used : undefined,
        usedAt: prop.inviteToken.usedAt !== undefined ? prop.inviteToken.usedAt : undefined,
        expiresAt: prop.inviteToken.expiresAt !== undefined ? prop.inviteToken.expiresAt : undefined,
      },
    }
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyWaitlistEntry) {
          return response.data.updateManyWaitlistEntry;
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Delete a single WaitlistEntry record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted WaitlistEntry or null.
   */
  async delete(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const DELETE_ONE_WAITLISTENTRY = gql`
          mutation deleteOneWaitlistEntry($where: WaitlistEntryWhereUniqueInput!) {
            deleteOneWaitlistEntry(where: $where) {
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
          mutation: DELETE_ONE_WAITLISTENTRY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneWaitlistEntry) {
          return response.data.deleteOneWaitlistEntry;
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Retrieve a single WaitlistEntry record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved WaitlistEntry or null.
   */
  async get(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<WaitlistEntryType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const GET_WAITLISTENTRY = gql`
          query getWaitlistEntry($where: WaitlistEntryWhereUniqueInput!) {
            getWaitlistEntry(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_WAITLISTENTRY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getWaitlistEntry ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No WaitlistEntry found') {
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Retrieve all WaitlistEntries records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of WaitlistEntry records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<WaitlistEntryType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const GET_ALL_WAITLISTENTRY = gql`
          query getAllWaitlistEntry {
            waitlistEntries {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_WAITLISTENTRY,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.waitlistEntries ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No WaitlistEntry found') {
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
   * Find multiple WaitlistEntry records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found WaitlistEntry records or null.
   */
  async findMany(props: WaitlistEntryType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<WaitlistEntryType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
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

        const FIND_MANY_WAITLISTENTRY = gql`
          query findManyWaitlistEntry($where: WaitlistEntryWhereInput!) {
            waitlistEntries(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_WAITLISTENTRY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.waitlistentries) {
          return response.data.waitlistEntries;
        } else {
          return [] as WaitlistEntryType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No WaitlistEntry found') {
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
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
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
