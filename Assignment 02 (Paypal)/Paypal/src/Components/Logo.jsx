function Logo() {
  return (
    <a
      href="#"
      className="flex items-center shrink-0 transition-opacity hover:opacity-90"
      aria-label="PayPal Home"
    >
      <img
        src="/paypal-mark-color_new.svg"
        alt="PayPal Logo"
        className="h-8 w-auto object-contain"
      />
    </a>
  );
}

export default Logo;
