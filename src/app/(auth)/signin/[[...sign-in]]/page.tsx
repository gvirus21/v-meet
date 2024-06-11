import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <SignIn />
    </div>
  );
}
