import AppLogo from "../assets/images/logo.svg?react";

export default function Logo() {
  return (
    <div className="w-[263px] sm:w-[373px]">
      <AppLogo className="w-full" />
    </div>
  );
  // return <img src={logo} alt="The Hangman Game logo" />;
}
