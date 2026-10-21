function Authbuttons() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Log In Button (Pill with soft gray background) */}
      <a
        href="#login"
        className="inline-flex items-center justify-center font-semibold text-[15px] text-[#0c0c0d] bg-[#eff2f5] hover:bg-[#e2e8f0] px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-colors cursor-pointer"
      >
        Log In
      </a>

      {/* Sign Up Button (Pill with solid black background) */}
      <a
        href="#signup"
        className="inline-flex items-center justify-center font-semibold text-[15px] text-white bg-black hover:bg-neutral-800 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
      >
        Sign Up
      </a>
    </div>
  );
}

export default Authbuttons;
