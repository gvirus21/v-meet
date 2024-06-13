import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <SignUp />
    </div>
  );
}
