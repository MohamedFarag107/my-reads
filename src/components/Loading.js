import React from 'react'
import { Spinner } from 'reactstrap'

function Loading({loading}) {
  return (
    <>
        {loading && (
        <div className="overlay">
            <div className="search-loading">
                <Spinner color="primary">Loading...</Spinner>
            </div>
        </div>
    )}
    </>
  )
}

export default Loading