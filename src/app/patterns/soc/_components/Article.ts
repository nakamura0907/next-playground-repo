export type Article = {
    id: number
    title: string
    body: string
}

export const testArticles = [
    {
        id: 1,
        title: "title 1",
        body: "body 1",
    },
    {
        id: 2,
        title: "title 2",
        body: "body 2",
    }
] satisfies readonly Article[]