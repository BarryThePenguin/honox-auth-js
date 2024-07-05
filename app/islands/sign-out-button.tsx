import { signOut } from "@hono/auth-js/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => {
        void signOut();
      }}
    >
      Sign Out
    </button>
  );
}
