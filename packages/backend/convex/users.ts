import { query, mutation } from "./_generated/server.js";


// fuction creation getMany
export const getMany = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect()

        return users;
    }
})


// function creation ad
export const add = mutation({
    args: {},
    handler: async (ctx) => {
        const userId = await ctx.db.insert("users", { name: "Nisant" })
    
        return userId;
    },

})