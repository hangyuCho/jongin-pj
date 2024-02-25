"use client";

import { useQuery } from "@apollo/client";
import { gql } from "@/apollo/__generated__/client";

const GET_MUSICS = gql(`query MusicQuery($first: Int, $after: Int) {
  musics(first: $first, after: $after) {
    edges {
      node {
        artist
        cover_img
        ranking
        title
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`)

const Music = ({ first, after }: { first: number, after: number}) => {
    const { data, loading, error } = useQuery(GET_MUSICS as any,{
        variables: { first, after }
    })
    if (loading) {
        return <div>読み込み中</div>
    }
    return (
        <div>
            {error && <div>{error.message}</div>}
            <ul>
                {data && data.musics.edges.map((v, i) => <li key={String(i)}>{v.node.title}</li>)}
            </ul>
        </div>
    );
};

export default Music