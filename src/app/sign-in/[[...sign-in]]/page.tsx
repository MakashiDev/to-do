import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900/80 p-8 rounded-2xl shadow-2xl border border-zinc-800">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="text-zinc-400 mt-2">Sign in to continue your journey</p>
          </div>
          
          <div>
            <SignIn 
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-transparent shadow-none",
                  headerTitle: "text-white",
                  headerSubtitle: "text-zinc-400",
                  formButtonPrimary: "bg-zinc-800 hover:bg-zinc-700 transition-colors",
                  formFieldInput: "bg-black/50 border-zinc-800 text-white",
                  footerActionLink: "text-zinc-400 hover:text-zinc-300"
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}