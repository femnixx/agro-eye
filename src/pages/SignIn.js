function SignIn() {
    <>
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
    <div class="mx-auto h-12 w-12 rounded-xl bg-amber-500 flex items-center justify-center font-bold text-neutral-950 text-xl tracking-wider">▲</div>
    <h2 class="mt-6 text-2xl font-bold tracking-tight text-white">Sign in to your profile</h2>
    <p class="mt-2 text-sm text-neutral-400">Enter your credentials to access your secure dashboard.</p>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[380px]">
    <form class="space-y-6" action="/api/auth/signin" method="POST" id="signin-form">
      <div>
        <label for="email" class="block text-sm font-medium text-neutral-300">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" required class="block w-full rounded-lg border-0 bg-neutral-900 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm outline-none" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium text-neutral-300">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-amber-500 hover:text-amber-400">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" required class="block w-full rounded-lg border-0 bg-neutral-900 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm outline-none" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-lg bg-amber-500 px-3 py-2.5 text-sm font-semibold text-neutral-950 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors">
          Authenticate
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-neutral-400">
      Not registered yet?
      <a href="signup.html" class="font-semibold text-amber-500 hover:text-amber-400">Create an account</a>
    </p>
  </div>
    </>
}