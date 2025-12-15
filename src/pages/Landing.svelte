<script lang="ts">
  import { push } from "svelte-spa-router";
  import { Github } from "@lucide/svelte";
  import { Mail } from "@lucide/svelte";

  const slides = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
    },
  ];
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
        <a href="#header">Home</a>
        <a href="#carousel">Built With</a>
        <a href="#features">Features</a>
        <a href="#faqs">FAQ's</a>
        <a href="#aboutus">About Us</a>
      </div>
    </div>
    <div class="right-buttons">
      <button class="button" on:click={() => push("/signin")}>
        Get started
      </button>
      <button class="sign-in-button button" on:click={() => push("/signin")}>
        Sign In
      </button>
    </div>
  </div>

  <!-- Hero Section -->
  <div class="hero-section">
    <h1 class="hero-header">Welcome to a better way to track your finances</h1>
  </div>
  <div class="hero-section-buttons">
    <button class="button" on:click={() => push("/signin")}>
      Get started
    </button>
    <button class="sign-in-button button" on:click={() => push("/signin")}>
      Sign In
    </button>
  </div>

  <!-- Tech Stack Carousel -->
  <div class="carousel">
    <div class="slide-track">
      {#each slides as slide}
        <div class="slide">
          <img src={slide.src} height="100" width="250" alt="" />
        </div>
      {/each}
    </div>
  </div>

  <!-- Features -->
  <div class="features">
    <h1>Features</h1>
    <div class="features-grid">
      <div class="div1 features-item">Add, edit, delete transactions</div>
      <div class="div2 features-item">Categorize transactions</div>
      <div class="div3 features-item">Income vs. Expenses tracking</div>
      <div class="div4 features-item">Multiple accounts</div>
      <div class="div5 features-item">Transfer between accounts</div>
      <div class="div6 features-item">Overview Dashboard</div>
      <div class="div7 features-item">Automatic totals and summaries</div>
      <div class="div8 features-item">Export data (PDF or CSV)</div>
      <div class="div9 features-item">Search and filter transactions</div>
    </div>
  </div>

  <!-- FAQ's -->
  <div class="faqs">
    <div class="faq-left-section">
      <h1>Frequently Asked Questions</h1>
      <p>Got any questions, well here are some answers</p>
    </div>
    <div class="faq-right-section">
      <div class="faq-question">
        <h1>What is this app for?</h1>
        <p>
          This app helps you track your spending, manage your accounts, and
          understand where your money is going.
        </p>
      </div>
      <div class="faq-question">
        <h1>Is my data safe?</h1>
        <p>
          Yes. Your data never leaves your device and is not uploaded anywhere.
        </p>
      </div>
      <div class="faq-question">
        <h1>What happens if I clear my browser storage?</h1>
        <p>
          All your saved transactions will be deleted and the app will reset.
        </p>
      </div>
      <div class="faq-question">
        <h1>Does this cost anything?</h1>
        <p>No. It is completely free to use.</p>
      </div>
    </div>
  </div>

  <!-- About Us -->

  <!-- Footer Section -->
  <div class="footer">
    <div class="logo">
      <h1>SCFTA V2</h1>
    </div>
    <div class="page-links">
      <a href="#header">Home</a>
      <a href="#carousel">Built With</a>
      <a href="#features">Features</a>
      <a href="#faqs">FAQ's</a>
      <a href="#aboutus">About Us</a>
    </div>
    <div class="social-links">
      <a href="https://github.com/DwayneCrous"><Github /> Github</a>
      <a href="mailto:dwaynerheeder@proton.me"><Mail /> Email</a>
    </div>
    <div class="copyright">
      <p>© 2025 SCFTA V2, All rights reserved</p>
    </div>
  </div>
</main>

<style>
  :root {
    --shadow-s: inset 0 1px 2px #ffffff30, 0 1px 2px #00000030,
      0 2px 4px #00000015;

    --shadow-m: inset 0 1px 2px #ffffff50, 0 2px 4px #00000030,
      0 4px 8px #00000015;
  }

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

  .right-buttons a,
  a {
    text-decoration: none;
    color: white;
  }

  .get-started-button,
  .sign-in-button,
  .button {
    padding: 12px 20px;
    border-radius: 12px;
    border: none;
    background: #444;
    color: white;

    box-shadow: var(--shadow-s);

    transition:
      box-shadow 0.25s ease,
      transform 0.2s ease;
  }

  .get-started-button:hover,
  .sign-in-button:hover,
  .button:hover {
    box-shadow: var(--shadow-m);
    transform: translateY(-2px);
  }

  .get-started-button:active,
  .sign-in-button:active,
  .button:active {
    transform: translateY(0);
    box-shadow: var(--shadow-s);
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

  .hero-section-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 80px;
  }

  .carousel {
    position: relative;
    width: min(900px, 95vw);
    height: 100px;
    margin: 0 auto 60px auto;
    overflow: hidden;
    z-index: -1;

    border-radius: 12px;

    background: rgba(34, 34, 34, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    box-shadow: var(--shadow-s);
  }

  .carousel::before,
  .carousel::after {
    content: "";
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;

    background: linear-gradient(
      to right,
      rgba(34, 34, 34, 1) 0%,
      rgba(34, 34, 34, 0) 100%
    );
  }

  .carousel::after {
    right: 0;
    transform: rotateZ(180deg);
  }

  .carousel::before {
    left: 0;
  }

  .slide-track {
    display: flex;
    width: calc(250px * 14);
    animation: scroll 40s linear infinite;
  }

  .slide {
    width: 250px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
  }

  .slide img {
    height: 80px;
    padding-bottom: 20px;
    width: auto;

    filter: brightness(0.85) contrast(1.1);
    transition:
      transform 0.2s ease,
      filter 0.2s ease;
  }

  .slide img:hover {
    transform: translateY(-2px);
    filter: brightness(1) contrast(1.15);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
  }

  .features-item {
    text-align: center;
    background-color: #444;
    color: white;
    margin: 20px;
    padding: 20px;
    box-shadow: var(--shadow-s);
    border-radius: 12px;
  }

  .features-item:hover {
    box-shadow: var(--shadow-m);
    transform: translateY(-2px);
    transition:
      box-shadow 0.25s ease,
      transform 0.2s ease;
  }

  .features h1 {
    text-align: center;
    margin-bottom: 30px;
    color: white;
  }

  .div4 {
    grid-row-start: 2;
  }

  .div5 {
    grid-row-start: 2;
  }

  .div6 {
    grid-row-start: 2;
  }

  .div7 {
    grid-row-start: 3;
  }

  .div8 {
    grid-row-start: 3;
  }

  .div9 {
    grid-row-start: 3;
  }

  .faqs {
    display: flex;
    justify-content: space-between;
    margin: 100px 0;
  }

  .faq-left-section {
    margin-left: 350px;
    color: white;
  }

  .faq-right-section {
    margin-right: 150px;
    background-color: #444;
    border-radius: 12px;
    padding: 0 20px;
    box-shadow: var(--shadow-s);
  }

  .faq-question {
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: white;

    padding: 80px;
    background: rgba(34, 34, 34, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .social-links {
    display: flex;
    gap: 20px;
  }

  .page-links {
    display: flex;
    gap: 20px;
  }

  .page-links a:hover {
    opacity: 0.7;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
</style>
