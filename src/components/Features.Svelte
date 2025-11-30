<script lang="ts">
  const features = [
    "Add, edit and delete transactions",
    "Categorize Transactions",
    "Income Vs Expenses tracking",
    "Multiple Accounts",
    "Transfer between accounts",
    "Overview Dashboard",
    "Automatic totals and summaries",
    "Export Data (CSV or PDF)",
    "Search filters and search transactions",
  ];
</script>

<main>
  <div class="features-box">
    {#each features as feature}
      <div class="feature-item"></div>
    {/each}
  </div>
</main>

<style></style>
