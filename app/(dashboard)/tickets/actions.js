"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addTicket(formData) {
  const ticket = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //insert the data
  const { error } = await supabase.from("tickets").insert({
    ...ticket,
    user_email: session.user.email,
  });

  if (error) {
    throw new Error("Could not add the new ticket");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}

export async function deleteTicket(id) {
  const supabase = createServerActionClient({ cookies });

  //delete the data
  const { error } = await supabase.from("tickets").delete().eq("id", id);

  if (error) {
    throw new Error("Could not delete the new ticket");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}
