import StaveDisplay from "@/components/stave";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen py-10">
      <div className="flex min-h-fit w-[80%] flex-col items-center">
        <h1 className="text-6xl font-semibold mb-3">Hit that <span className="text-accent font-extrabold">NOTE</span></h1>
        <StaveDisplay />
      </div>
    </main>
  )
}
