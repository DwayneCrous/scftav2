<script lang="ts">
</script>

<main>
  <!-- Header Section -->
  <div class="header">
    <div class="left-text">
      <h1 class="text">SCFTA V2</h1>
      <p class="text">A new version of the coolest finance tracker</p>
    </div>
    <div class="center-text">
      <div class="links">
        <a href="">Home</a>
        <a href="">Tech Stack</a>
        <a href="">Features</a>
        <a href="">FAQ's</a>
        <a href="">About Us</a>
      </div>
    </div>
    <div class="right-buttons">
      <a href="" class="get-started-button">Get started</a>
      <a href="" class="sign-in-button">Sign In</a>
    </div>
  </div>

  <!-- Hero Section -->
  <div class="hero-section">
    <h1 class="hero-header">Welcome to a better way to track your finances</h1>
  </div>
  <div class="buttons">
    <a href="" class="button">Get started</a>
    <a href="" class="button">Sign In</a>
  </div>
</main>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;

    background: rgba(34, 34, 34, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    position: sticky;
    top: 0;
  }

  .left-text {
    color: white;
    margin: 0;
  }

  .links a {
    padding: 5px 12px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: opacity 0.2s ease;
  }

  .links a:hover {
    opacity: 0.7;
  }

  .right-buttons {
    display: flex;
    gap: 10px;
  }

  .right-buttons a {
    text-decoration: none;
    color: white;
  }

  .get-started-button,
  .sign-in-button {
    background-color: #444;
    padding: 12px 20px;
    border: 1px solid #555;
    border-radius: 6px;
    transition: background 0.2s ease;
  }

  .get-started-button:hover,
  .sign-in-button:hover {
    background-color: #555;
  }

  .hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
  }

  .hero-header {
    color: white;
    font-size: clamp(2.5rem, 5vw, 4rem);
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
