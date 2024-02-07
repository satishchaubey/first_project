"use server";

export async function createTodo(prevState, formData) {
  try {
    await createItem(formData.get("todo"));
    return revalidatePath("/");
  } catch (e) {
    return { message: "Failed to create" };
  }
}
