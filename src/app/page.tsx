"use client"

import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports });

export default function Home() {
  return (
    <Authenticator socialProviders={['google']} signUpAttributes={['email']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello, {user?.username}!</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}