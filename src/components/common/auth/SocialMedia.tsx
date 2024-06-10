import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { useRouter} from "next/navigation"

const SocialMedia = () => {
  const route = useRouter();
  return (
    <div className="flex gap-2 justify-center">
    <Button
    onClick={()=>(route.push('/signup'))}
      className={buttonVariants({
        variant: "social",
        size:"social",
        className:
          "flex-1 gap-2 relative bg-facebook",
      })}
    >facebook</Button>
    <Button
      className={buttonVariants({
        variant: "social",
        size:"social",
        className:
          "flex-1 gap-2 relative bg-facebook",
      })}
    >twitter</Button>
    <Button
      className={buttonVariants({
        variant: "social",
        size:"social",
        className:
          "flex-1 gap-2 relative bg-black",
      })}
    >github</Button>
    </div>
    
  );
};

export default SocialMedia;
