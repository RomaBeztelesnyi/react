export type GetTrackDetailsOutputData = {
  id:string
  attributes: {
    title:string
    lyrics?:string
  }
}

type GetTrackDetailsOutput = {
    data:GetTrackDetailsOutputData
}
export const getTrack = (trackId: string ) => {
   const promise: Promise<GetTrackDetailsOutput> = fetch(
      `${import.meta.env.VITE_APP_API}/playlists/tracks/` +
        trackId,
      {
        headers: {
          "api-key": import.meta.env.VITE_APP_KEY,
        },
      }
    ).then(res => res.json());
   return promise;
}   

type AttachmentDto = {
  url: string;
};

type TrackListItemOutputAttributes = {
  title: string;
  attachments: Array<AttachmentDto>;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListItemOutputAttributes;
};

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}
export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch(`${import.meta.env.VITE_APP_API}/playlists/tracks`, {
      headers: {
        "api-key": import.meta.env.VITE_APP_KEY,
      },
    }).then((res) => res.json())
      return promise
}