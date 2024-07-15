import SignInForm from "../_components/signup/SignInForm";

export default function Page() {
  return (
    <div className="w-full p-4 flex justify-center items-center h-screen">
      <div className="w-full z-0 max-w-96 md:max-w-[440px] md:shadow-2xl md:py-6 md:px-10">
        <h3 className="text-3xl font-medium">Login</h3>
        <p className="text-sm mt-3">Hi, welcome back</p>
        <button className="h-10 my-6">google</button>
        <div className="relative w-full grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
          <div className="h-[1px] w-full bg-bg-dark-hover"></div>
          <p className="w-full text-xs text-bg-dark-hover">
            or sign in with email
          </p>
          <div className="h-[1px] w-full bg-bg-dark-hover"></div>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
