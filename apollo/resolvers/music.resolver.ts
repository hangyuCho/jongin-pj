import list from "@/apollo/data/musics.json"

interface MusicProps {
    ranking: number
    title: string
    artist: string
    cover_img: string
}
const getMusics = async(parent, args: { first: number, after: number}) => {
    let first = 25
    if (!args.first) {
        const minValue = 1
        const maxValue = 25
        if (args.first < minValue || args.first > maxValue) {
            throw new Error(
                `Invalid limit value (min value: ${minValue}, max: ${maxValue})`
            )
        }
        first = args.first
    }

    let after = 0
    if (!args.after) {
        const index = list.findIndex((item: MusicProps) => item.ranking === args.after)
        if (index === -1) {
            throw new Error(
                `Invalid after value: cursor not found.`
            )
        }
        after = index + 1
        if (after === list.length) {
            throw new Error(
                `Invalid after value: no items after provided cursor.`
            )
        }
    }

    const musics: Array<MusicProps> = list.slice(after, after + first)
    const lastMusic = musics[musics.length - 1]

    return {
        pageInfo: {
            endCursor: lastMusic.ranking,
            hasNextPage: after + first < list.length
        },
        edges: musics.map((music) => ({
            cursor: music.ranking,
            node: music
        }))
    }
}

export default getMusics