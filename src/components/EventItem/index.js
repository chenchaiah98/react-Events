// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEventItem, setActiveEventId} = props
  const {id, name, imageUrl, location} = eachEventItem

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li key={id} className="list-item" onClick={onClickEvent}>
      <div>
        <button type="button" className="btn">
          <img className="event-image" src={imageUrl} alt="event" />
        </button>
        <p>{name}</p>

        <p>{location}</p>
      </div>
    </li>
  )
}
export default EventItem
