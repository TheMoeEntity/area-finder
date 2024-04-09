export type ISBProducts = {
    title: string
    created_at: string
    id: string
    amenities: string[]
    reviews: {
        data: reviewData[]
    }
}
export type reviewData = {
    name: string,
    date: string,
    rating: number,
    review: string,
    likes: number,
    dislikes: number,
    comments:
    {
        name: string,
        comment: string
    }[]

}