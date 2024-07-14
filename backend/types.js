const zod = require("zod")

const todoSchema = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodoSchema = zod.object({
    id : zod.string(),
    title : zod.string().optional(),
    description : zod.string().optional(),
    isPending : zod.boolean().optional()
})

const updateSchema = zod.object({
    id : zod.string()
})

const deleteSchema = zod.object({
    id : zod.string()
})

module.exports = {todoSchema, updateSchema, deleteSchema, updateTodoSchema};