import { useTrackSelection } from "./bll/useTrackSelection";
import { TrackList } from "./ui/TrackList";
import { TrackDetail } from "./ui/TrackDetail";

function MainPage() {
  const {trackId, handleTrackSelect} = useTrackSelection()
  return (
    <div>
      <div style={{display: 'flex', gap: '40px'}}>
        <TrackList onTrackSelect ={handleTrackSelect} selectedTrackId={trackId}/>
        <TrackDetail trackId={trackId}/>
      </div>
    </div>
  );
}

export default MainPage