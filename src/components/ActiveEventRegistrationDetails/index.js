// Write your code here

import './index.css'

const activeStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistration = props => {
  const {activeEventRegistration} = props
  const renderInitial = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register-image"
      />
      <h1>You have already Registered for the event</h1>
    </div>
  )

  const renderRegisteredClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="register-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen soon</p>
    </div>
  )

  const renderActiveEventRegisterDetails = () => {
    switch (activeEventRegistration) {
      case activeStatus.registered:
        return renderRegistered()
      case activeStatus.yetToRegister:
        return renderYetToRegister()
      case activeStatus.registrationsClosed:
        return renderRegisteredClosed()
      default:
        return renderInitial()
    }
  }

  return (
    <div className="registeration">{renderActiveEventRegisterDetails()}</div>
  )
}

export default ActiveEventRegistration
