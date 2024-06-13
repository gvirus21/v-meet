import { Oval } from "react-loader-spinner";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Loader = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center h-full w-full bg-black",
        className
      )}
    >
      <Oval color="white" secondaryColor="#666" height={"60px"} />
    </div>
  );
};

export default Loader;
