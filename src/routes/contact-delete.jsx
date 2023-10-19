import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function deleteContactAction({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}