export const seed = (knex) => {
    // Deletes ALL existing entries
    return knex("dishes")
        .del()
        .then(() => {
            return knex("users").insert([
                // Insert new menus
            ])
        })
}