import React from 'react'
import { Redirect } from 'react-router-dom'


const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render () {
      if (this.props.loggedIn) {
        return <WrappedComponent dog='dog' {...this.props}/>
      } else if (localStorage.getItem('token')) {
        return <div className='container'> Loading ... </div>
      } else {
         return <Redirect to='/login' />
      }
    }
  }
}

export default withAuth
