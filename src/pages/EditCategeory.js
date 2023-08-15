import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditCategeory() {

    const { categoryid } = useParams()


  return (
    <>
      edite the {categoryid}
    </>
  )
}
