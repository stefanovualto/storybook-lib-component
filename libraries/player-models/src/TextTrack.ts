export type TextTrack = Track &  {
    label: string;
}

type Track = {
    id: number
}

let titi: TextTrack = {
    id: 12,
    label: "sdfds"
}