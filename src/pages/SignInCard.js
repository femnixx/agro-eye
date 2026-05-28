import React from 'react';

function SignUpCard({ onRegister, onGoToSignin }) {
  return (
    <div className="w-full max-w-[400px] bg-[#3c3836] p-6 rounded-xl border border-[#504945] shadow-[8px_8px_0px_0px_#1d2021]">
      <div className="text-center mb-6">
        <div className="mx-auto h-12 w-12 rounded-lg bg-[#b8bb26] flex items-center justify-center font-bold text-[#282828] text-xl shadow-[2px_2px_0px_0px_#282828]">
          +
        </div>
        <h2 className="mt-4 text-2xl font-black uppercase tracking-widest text-[#b8bb26]">REGISTER NODE</h2>
        <p className="text-[10px] text-[#a89984] uppercase tracking-wider mt-1">Provision brand new access credentials</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onRegister(); }} className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-[#a89984] mb-1">Operator Alias / Handle</label>
          <input type="text" required placeholder="null_pointer" className="w-full bg-[#282828] border border-[#504945] rounded p-2.5 text-xs text-[#ebdbb2] placeholder:text-[#504945] outline-none focus:border-[#b8bb26]" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-[#a89984] mb-1">Target Network Address</label>
          <input type="email" required placeholder="operator@network.local" className="w-full bg-[#282828] border border-[#504945] rounded p-2.5 text-xs text-[#ebdbb2] placeholder:text-[#504945] outline-none focus:border-[#b8bb26]" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-[#a89984] mb-1">Set Account Passkey</label>
          <input type="password" required placeholder="••••••••" className="w-full bg-[#282828] border border-[#504945] rounded p-2.5 text-xs text-[#ebdbb2] placeholder:text-[#504945] outline-none focus:border-[#b8bb26]" />
        </div>
        <button type="submit" className="w-full bg-[#b8bb26] text-[#282828] font-bold py-2.5 rounded text-xs uppercase tracking-wider border border-[#ebdbb2] hover:bg-[#8ec07c] transition-all mt-2">
          Generate Cryptographic Profile
        </button>
      </form>

      <div className="mt-6 border-t border-[#504945] pt-4 text-center">
        <button onClick={onGoToSignin} className="text-xs text-[#fabd2f] hover:underline bg-transparent border-none p-0 cursor-pointer">
          [ Return to Session Identity Check ]
        </button>
      </div>
    </div>
  );
}

export default SignUpCard;