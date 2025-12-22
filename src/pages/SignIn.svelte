<script>
</script>

<main>
    <div class="sign-in-card">
        <h1>Create your account</h1>
        <div class="user-information">
            <div class="user-name">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div class="user-email">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="user-password">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
        </div>
        <div class="buttons">
            <button type="submit">Create Account</button>
        </div>
        <div class="redirect">
            <p>Already have an account?</p>
            <a href="/sign-in">Sign In</a>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        color: white;
    }

    .sign-in-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;

        padding: 40px 60px;

        border-radius: 12px;
        box-shadow: var(--shadow-s);
        background: rgba(34, 34, 34, 0.4);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .user-information {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    input {
        color: white;
        background-color: #333;
        border-radius: 12px;
        border: 1px solid #444;
        padding: 10px;
        margin-left: 10px;
    }

    button {
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

    button:hover {
        box-shadow: var(--shadow-m);
        transform: translateY(-2px);
    }

    button:active {
        transform: translateY(0);
        box-shadow: var(--shadow-s);
    }

    .redirect {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .redirect a {
        color: white;
    }
</style>
