import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Initial() {
  const router = useRouter();
  function goTo(href) {
    router.push(`/${href}`);
  }

  useEffect(() => {
    goTo('home')
  }, [])

  return (
    <></>
  )
}
