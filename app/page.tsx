"use client";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  
  // Redirect to dashboard if already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  // Don't render anything while checking auth status
  if (!isLoaded) {
    return <div className="container text-center">Loading...</div>;
  }

  // Only render the login page if not signed in
  if (!isSignedIn) {
    return (
      <div className="container text-center">
        <h1 className="heading heading-xl">myTonnes</h1>
        <p className="text-body">
          Track your weights and reps, for each exercise, for each workout.
        </p>
        <SignInButton mode="modal">
          <button className="button button-primary button-large">
            Get Started
          </button>
        </SignInButton>
      </div>
    );
  }

  // This should never render because the useEffect will redirect
  return null;
}
