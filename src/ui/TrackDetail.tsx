import { useTrackDetails } from "../bll/useTrackDetails";
import styles from './Track-detail.module.css'
type Props = {
  trackId: string | null
}

export function TrackDetail({trackId}: Props) {
  const {trackDetails} = useTrackDetails(trackId)
  return (
    <div className={styles.track} >
      <h3>Details</h3>
      {!trackDetails && !trackId && "Track is not selected"}
      {!trackDetails && trackId && "Loading..."}
      {trackDetails &&
        trackId &&
        trackDetails.id !== trackId &&
        "Loading..."}
      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? "No Lyrics"}</p>
        </div>
      )}
    </div>
  );
}
