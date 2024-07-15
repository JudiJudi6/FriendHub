import SearchPeopleInput from "./SearchPeopleInput";
import SignInUpButtons from "./SignInUpButtons";

interface MobileNavProps {
  closeNav: () => void;
}

export default function MobileNav({ closeNav }: MobileNavProps) {
  const auth = false; //dsadassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

  return (
    <div className="relative w-full h-full">
      <p className="absolute bottom-0 right-0 text-bg-dark-hover-alt text-4xl">
        FriendHub
      </p>
      {auth ? (
        <div></div>
      ) : (
        <div className="mt-10">
          <SignInUpButtons closeNav={closeNav}/>
        </div>
      )}
      <div className="mt-20">
        <SearchPeopleInput />
      </div>
    </div>
  );
}
