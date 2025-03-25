"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", input);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container">
      <div className="flex-between mb-lg">
        <h1 className="heading heading-lg">Workout</h1>
        <UserButton />
      </div>

      <div className="card">
        <h2 className="heading heading-md mb">Add an Exercise</h2>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="exercise" className="text-label">
            Exercise Name
          </label>
          <input
            id="exercise"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., Bench Press"
          />
          
          <button type="submit" className="button button-primary">
            Add Exercise
          </button>
        </form>
        
        {submitted && (
          <div className="alert alert-success">
            Exercise "{input}" added successfully!
          </div>
        )}
      </div>
    </div>
  );
} 