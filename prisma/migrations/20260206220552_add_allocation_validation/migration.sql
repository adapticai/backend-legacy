-- Add validation constraints to ensure allocation percentages are valid

-- Constraint: Ensure all allocation percentages sum to 100% (with floating point tolerance)
ALTER TABLE "allocations" ADD CONSTRAINT allocation_sum_check
CHECK (
  ("equities" + "optionsContracts" + "futures" + "etfs" + "forex" + "crypto")
  BETWEEN 99.99 AND 100.01
);

-- Constraint: Ensure no allocation percentages are negative
ALTER TABLE "allocations" ADD CONSTRAINT allocation_non_negative
CHECK (
  "equities" >= 0 AND
  "optionsContracts" >= 0 AND
  "futures" >= 0 AND
  "etfs" >= 0 AND
  "forex" >= 0 AND
  "crypto" >= 0
);
