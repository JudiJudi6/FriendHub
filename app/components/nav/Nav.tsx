import BurgerButton from "./BurberButton";
import LogoLink from "./LogoLink";

export default function Nav() {
  return (
    <div className="fixed z-[100] w-full border-b border-b-main-cyan h-16 flex justify-center items-center bg-bg-dark">
      <div className="max-w-7xl flex justify-between items-center mx-auto px-4 w-full">
        <LogoLink />
        <BurgerButton />
      </div>
    </div>
  );
}
