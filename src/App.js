import React, { useState } from 'react';
import SignInCard from './pages/SignInCard';
import SignUpCard from './pages/SignUpCard';
import HomeDashboard from './pages/HomeDashboard';

function App() {
  const [currentView, setCurrentView] = useState('signin');

  return (
    <div className="min-h-screen bg-[#282828] text-[#ebdbb2] font-mono flex flex-col justify-between selection:bg-[#fabd2f] selection:text-[#282828]">
      
      <main className="flex-1 flex items-center justify-center p-6">
        {currentView === 'signin' && (
          <SignInCard 
            onLogin={() => setCurrentView('home')} 
            onGoToSignup={() => setCurrentView('signup')} 
          />
        )}
        
        {currentView === 'signup' && (
          <SignUpCard 
            onRegister={() => setCurrentView('home')} 
            onGoToSignin={() => setCurrentView('signin')} 
          />
        )}
        
        {currentView === 'home' && (
          <HomeDashboard 
            onLogout={() => setCurrentView('signin')} 
          />
        )}
      </main>

      <footer className="border-t border-[#3c3836] bg-[#1d2021] py-3 text-center text-[10px] text-[#7c6f64] tracking-wider uppercase">
        Node Static Interface Pool // Env: Development // System Online
      </footer>
    </div>
  );
}

export default App;