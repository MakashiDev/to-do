import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Dashboard from './dashboard/page';
import Home from './home/page';

export default function main() {

  return (
    <div className="min-h-screen bg-black">
      <SignedIn>
        <Dashboard />        
      </SignedIn>
      <SignedOut>
        <Home />
      </SignedOut>
    </div>
);
}

