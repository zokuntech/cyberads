"use server";
import { v4 as uuidv4 } from "uuid";

export async function saveIntoDB(email: string) {
  try {
    const id = uuidv4();
    const res = await fetch(`${process.env.BACKEND_URL}/lead`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        email: email,
      }),
    });

    if (res.status === 200) {
      return {
        message: "successfully saved email",
        status: 200,
      };
    } else {
      return {
        message: "error saving email",
        status: 500,
      };
    }
  } catch (err) {
    return {
      message: "error saving email",
      status: 404,
    };
  }
}
