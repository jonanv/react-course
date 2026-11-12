import { Button } from "@/components/ui/button"

export const HeroesApp = () => {
  return (
    <div className="bg-gradient flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-white">HeroesApp</h1>
      <Button variant={"ghost"}>Submit</Button>
    </div>
  )
}
