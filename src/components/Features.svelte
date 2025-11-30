<script lang="ts">
  const features = [
    {
      title: "Add, edit and delete transactions",
      desc: "Action buttons where you can modify and delete your recorded transactions",
    },
    {
      title: "Categorize Transactions",
      desc: "Assign categories to your recorded transactions for easier management and sorting",
    },
    {
      title: "Income Vs Expenses tracking",
      desc: "Track and see the differences between how much you spend vs how much you make",
    },
    {
      title: "Multiple Accounts",
      desc: "Create multiple accounts to track transactions in each account",
    },
    {
      title: "Transfer between accounts",
      desc: "Transfer currency between different accounts",
    },
    {
      title: "Overview Dashboard",
      desc: "Dashboard where you can see a quick overview of your transactions and statistics",
    },
    {
      title: "Automatic totals and summaries",
      desc: "Creates summaries and totals automatically based on transaction data",
    },
    {
      title: "Export Data (CSV or PDF)",
      desc: "Export all of your transaction data to csv or pdf files",
    },
    {
      title: "Search filters and search transactions",
      desc: "Section to search for transactions easily via search filters",
    },
  ];
</script>

<main>
  <h1 class="features-header">Features:</h1>
  <div class="features-box">
    {#each features as feature}
      <div class="feature-item">
        <h1>{feature.title}</h1>
        <p>{feature.desc}</p>
      </div>
    {/each}
  </div>
</main>

<style>
  .features-header {
    text-align: center;
    font-size: 2rem;
    color: white;
    background-color: #333;
    padding: 20px;
    margin: 0;
  }

  .features-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 12px;
    background-color: #333;
    margin: 0;
    padding: 20px;
  }

  .feature-item {
    border: 2px solid #444;
    background-color: #222;
    padding: 15px;
  }

  .feature-item h1 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .feature-item p {
    color: white;
    margin: 0;
  }
</style>
