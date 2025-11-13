import * as TypeGraphQL from 'type-graphql';
import { PortfolioGreeksHistory } from '../../generated/typegraphql-prisma/models/PortfolioGreeksHistory';
import { OptionsGreeksHistorySystemSummary } from './OptionsGreeksHistorySystemSummary';
import { getPrismaFromContext } from '../../generated/typegraphql-prisma/helpers';

/**
 * Custom resolver for PortfolioGreeksHistory aggregation queries
 * Provides system-wide analytics and summary statistics
 * Note: GraphQL query name remains 'optionsGreeksHistorySystemSummary' for backwards compatibility
 */
@TypeGraphQL.Resolver(_of => PortfolioGreeksHistory)
export class OptionsGreeksHistoryCustomResolver {
  /**
   * Get system-wide summary statistics for OptionsGreeksHistory
   * Executes aggregation query to get total accounts, snapshots, and time range
   */
  @TypeGraphQL.Query(_returns => OptionsGreeksHistorySystemSummary, {
    nullable: false,
    description: 'Get system-wide summary statistics for Greeks history data',
  })
  async optionsGreeksHistorySystemSummary(
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<OptionsGreeksHistorySystemSummary> {
    const prisma = getPrismaFromContext(ctx);

    // Execute aggregation query
    // This is equivalent to:
    // SELECT
    //   COUNT(DISTINCT account_id) as total_accounts,
    //   COUNT(*) as total_snapshots,
    //   MIN(timestamp) as oldest_snapshot,
    //   MAX(timestamp) as newest_snapshot
    // FROM portfolio_greeks_history
    const [aggregateResult, totalCount] = await Promise.all([
      prisma.portfolioGreeksHistory.aggregate({
        _min: {
          timestamp: true,
        },
        _max: {
          timestamp: true,
        },
      }),
      prisma.portfolioGreeksHistory.count(),
    ]);

    // Get distinct account count from the new schema
    const distinctAccounts = await prisma.portfolioGreeksHistory.groupBy({
      by: ['accountId'],
      _count: {
        accountId: true,
      },
    });

    return {
      totalAccounts: distinctAccounts.length,
      totalSnapshots: totalCount,
      oldestSnapshot: aggregateResult._min.timestamp,
      newestSnapshot: aggregateResult._max.timestamp,
    };
  }
}
