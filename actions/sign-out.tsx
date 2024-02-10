"use server";

import { cookies } from "next/headers";

export default async function signOut() {
    cookies().set("session", "", { expires: new Date(0) });
}
