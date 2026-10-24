"use client";

import { useActionState } from "react";
import { login, type FormState } from "../actions";

const initial: FormState = {};

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, initial);

  return (
    <section className="flex-1 flex items-center justify-center py-16">
      <form
        action={action}
        className="w-full max-w-sm p-6 rounded-xl bg-[var(--color-card-background)] space-y-4"
      >
        <h1 className="text-2xl font-bold text-[var(--color-brand-green-400)]">
          Admin login
        </h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="username"
          className="w-full px-3 py-2 rounded-md bg-[var(--color-input-background)] border border-[var(--color-input-border)]"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          autoComplete="current-password"
          className="w-full px-3 py-2 rounded-md bg-[var(--color-input-background)] border border-[var(--color-input-border)]"
        />
        {state.error && (
          <p role="alert" className="text-sm text-red-400">
            {state.error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="gradient-button gradient-button-hover w-full py-2 rounded-full font-semibold text-[var(--color-white)] disabled:opacity-60"
        >
          {pending ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </section>
  );
}
