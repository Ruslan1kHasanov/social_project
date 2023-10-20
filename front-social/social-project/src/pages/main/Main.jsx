import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Main() {
  console.log('asd');
  return <Navigate to={'/auth'} />
}

export default Main
