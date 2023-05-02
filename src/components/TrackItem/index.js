import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const TrackItem = props => {
  const {track, updateTrackList} = props
  const {id, imageUrl, name, genre, duration} = track
  const onClickDeleteButton = () => {
    updateTrackList(id)
  }

  return (
    <li className="track-item">
      <img src={imageUrl} alt="track" className="track-image" />
      <div className="name-genre">
        <p className="name">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <p className="duration">{duration}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteButton}
        data-testid="delete"
      >
        <RiDeleteBin7Line />
      </button>
    </li>
  )
}

export default TrackItem
