<main>
  <h1 class="aboutus-header headers">About Us:</h1>
  <h1 class="meet-the-team headers">Meet the team:</h1>
  <div class="team">
    <div class="team-member">
      <div class="left">
        <img src="src/assets/jayden.png" alt="dwayne-pfp" class="dwayne-pfp" />
        <h1 class="member-name">Dwayne Rheeder</h1>
      </div>
      <div class="right">
        <p>Software and Web Developer</p>
        <p>Coding since <i>2020</i></p>
      </div>
    </div>
  </div>
  <div class="app-purpose">
    <h1 class="headers">Purpose:</h1>
    <p class="app-description">
      Our app is designed to help users track and manage their personal finances
      effortlessly. It provides a clear overview of expenses, income, and
      account balances, empowering users to make informed financial decisions
      and achieve their budgeting goals.
    </p>
  </div>
  <div class="app-goal">
    <h1 class="headers">App Goal:</h1>
    <p class="app-goal-paragraph">
      The goal of our app is to simplify personal finance management by giving
      users an intuitive and visual way to monitor their spending, track
      savings, and plan for the future. By providing real-time insights and
      easy-to-understand charts, it helps users stay on top of their finances
      and make smarter financial decisions.
    </p>
  </div>
</main>

<style>
  .headers {
    text-align: center;
    font-size: 2rem;
    color: white;
    background-color: #333;
    padding: 20px;
    margin: 0;
  }

  .team {
    margin: 0;
    padding: 0;
    background-color: #333;
  }

  .team-member {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222;
    margin: 0px 20px;
    border: 2px solid #444;
  }

  .team-member h1,
  .team-member p {
    margin: 0;
    padding: 0;
  }

  .dwayne-pfp {
    width: 200px;
    border-radius: 50%;
    margin: 20px 40px;
  }

  .member-name {
    color: white;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .right {
    margin-right: 30px;
    font-size: 1.5rem;
    color: white;
  }

  .app-purpose,
  .app-goal {
    background-color: #333;
  }

  .app-description {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0px 300px;
    font-size: 1.5rem;
    color: white;
    background-color: #333;
  }

  .app-goal-paragraph {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0px 300px;
    font-size: 1.5rem;
    color: white;
    padding-bottom: 30px;
    background-color: #333;
  }
</style>
