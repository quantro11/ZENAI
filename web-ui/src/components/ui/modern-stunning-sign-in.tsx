"use client";

import * as React from "react";

const SignIn1 = ({
  onSignIn,
  onGoogleSignIn,
  onSignUp,
  googleEnabled = true,
}: {
  onSignIn?: (email: string, password: string) => void;
  onGoogleSignIn?: () => void;
  onSignUp?: () => void;
  googleEnabled?: boolean;
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    if (onSignIn) {
      onSignIn(email, password);
      return;
    }
    alert("Sign in successful! (Demo)");
  };

  const handleGoogle = () => {
    if (onGoogleSignIn) {
      onGoogleSignIn();
      return;
    }
    alert("Google sign in (Demo)");
  };

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSignUp) {
      onSignUp();
      return;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] relative overflow-hidden w-full rounded-xl">
      {/* Centered glass card */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-gradient-to-r from-[#ffffff10] to-[#121212] backdrop-blur-sm  shadow-2xl p-8 flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#bcabff] via-[#7f8bff] to-[#4fd1c5] mb-6 shadow-lg text-[#0a0a10] font-extrabold text-xl">
          Z
        </div>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          ZenAI
        </h2>
        {/* Form */}
        <div className="flex flex-col w-full gap-4">
          <div className="w-full flex flex-col gap-3">
            <input
              placeholder="E-posta"
              type="email"
              value={email}
              className="w-full px-5 py-3 rounded-xl  bg-white/10 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Şifre"
              type="password"
              value={password}
              className="w-full px-5 py-3 rounded-xl  bg-white/10 text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <div className="text-sm text-red-400 text-left">{error}</div>
            )}
          </div>
          <hr className="opacity-10" />
          <div>
            <button
              onClick={handleSignIn}
              className="w-full bg-white/10 text-white font-medium px-5 py-3 rounded-full shadow hover:bg-white/20 transition mb-3  text-sm"
            >
              Giriş yap
            </button>
            {/* Google Sign In */}
            {googleEnabled && (
              <button
                onClick={handleGoogle}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#232526] to-[#2d2e30] rounded-full px-5 py-3 font-medium text-white shadow hover:brightness-110 transition mb-2 text-sm"
              >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google ile devam et
            </button>
            )}
            <div className="w-full text-center mt-2">
              <span className="text-xs text-gray-400">
                Hesabın yok mu?{" "}
                <a
                  href="#"
                  onClick={handleSignUp}
                  className="underline text-white/80 hover:text-white"
                >
                  Ücretsiz kayıt ol
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer note */}
      <div className="relative z-10 mt-8 flex flex-col items-center text-center">
        <p className="text-gray-400 text-xs">
          ZenAI — Konuya göre akıllı yönlendirme, Skills ve MCP bağlantıları.
        </p>
      </div>
    </div>
  );
};

export { SignIn1 };

export default SignIn1;
