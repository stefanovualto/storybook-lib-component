// export type TextTrack = Track &  {
//     label: string;
// }

export type TextTrack = {
    id: number;
    lang: string;
    label: string;
    kind: string;
    defaultTrack: boolean;
};