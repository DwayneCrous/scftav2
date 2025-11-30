<script lang="ts">
</script>

<main>
  <div class="header">
    <div class="left">
      <h1 class="left-title text">SCFTA</h1>
      <p class="left-title-description text">
        An easier way to track your finances.
      </p>
    </div>
    <div class="center">
      <ul>
        <a class="page-links" href="">Learn More</a>
        <i class="fa-solid fa-circle"></i>
        <a class="page-links" href="">Features</a>
        <i class="fa-solid fa-circle"></i>
        <a class="page-links" href="">Pricing</a>
        <i class="fa-solid fa-circle"></i>
        <a class="page-links" href="">About Us</a>
      </ul>
    </div>
    <div class="right">
      <div class="action-buttons">
        <a class="log-in-button buttons" id="login">Log In</a>
        <a class="create-account-button buttons" id="create-account"
          >Create Account</a
        >
      </div>
    </div>
  </div>
</main>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222;
    padding: 0;
    margin: 0;
  }

  .text {
    color: white;
    margin: 5px;
  }

  .left {
    margin: 10px;
  }

  .page-links {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
    margin: 3px;
  }

  .page-links:hover {
    color: rgb(156, 156, 156);
  }

  .fa-circle {
    color: white;
    font-size: 12px;
  }

  .buttons {
    padding: 8px 25px;
    color: white;
    background-color: #333;
    border: 2px solid #444;
    text-decoration: none;

    margin-right: 20px;
  }

  .buttons:hover {
    background-color: #222;
    cursor: pointer;
  }
</style>
