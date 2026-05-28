import { useState } from "react";
import App from "../App";
import SignUpCard from "./SignInCard";

function SignUp({ onNavigate }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering Operator:", { username, email, password });
    // This is where your fetch('/api/auth/signup') logic will hook in
  };

  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#ebdbb2] border-b border-[#504945] pb-2">Register Operator</h2>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-xs font-bold uppercase tracking-wider text-[#a89984]">Handle / Alias</label>
          <div className="mt-1.5">
            <input 
              id="username" 
              type="text" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="operator_01"
              className="block w-full rounded border border-[#504945] bg-[#282828] py-2 px-3 text-[#ebdbb2] placeholder:text-[#7c6f64] focus:border-[#fabd2f] focus:ring-1 focus:ring-[#fabd2f] sm:text-sm outline-none transition-all font-mono" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#a89984]">Email Destination</label>
          <div className="mt-1.5">
            <input 
              id="email" 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@node.local"
              className="block w-full rounded border border-[#504945] bg-[#282828] py-2 px-3 text-[#ebdbb2] placeholder:text-[#7c6f64] focus:border-[#fabd2f] focus:ring-1 focus:ring-[#fabd2f] sm:text-sm outline-none transition-all font-mono" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-[#a89984]">Secure Passkey</label>
          <div className="mt-1.5">
            <input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="block w-full rounded border border-[#504945] bg-[#282828] py-2 px-3 text-[#ebdbb2] placeholder:text-[#7c6f64] focus:border-[#fabd2f] focus:ring-1 focus:ring-[#fabd2f] sm:text-sm outline-none transition-all font-mono" 
            />
          </div>
        </div>

        <div className="pt-2">
          <button type="submit" className="flex w-full justify-center rounded bg-[#b8bb26] px-4 py-2.5 text-sm font-bold text-[#282828] shadow hover:bg-[#8ec07c] transition-colors border border-[#ebdbb2] uppercase tracking-wider">
            Generate Profile
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-xs text-[#a89984]">
        Already registered?{' '}
        <button onClick={onNavigate} className="font-bold text-[#fabd2f] hover:underline bg-transparent border-none p-0 cursor-pointer">
          Verify session identity
        </button>
      </p>
    </>
  );
}

export default SignUpCard;