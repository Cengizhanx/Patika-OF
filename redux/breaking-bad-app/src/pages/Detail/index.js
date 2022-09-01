import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../../components/Loading"
function Detail() {

  const { char_id } = useParams()

  const [char, setChar] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id])

  return (
    <div>
      {
        loading && <Loading></Loading>
      }
      {
        char && (
          <div>
            <br />
            <h1>{char.name}</h1>
            <br />
            <img src={char.img} alt={char.name} style={{ width: "50%" }} />
          </div>
        )
      }
      <br />
      {
        char &&

        <pre>
          Nickname : {char.nickname}
        </pre>
      }
    </div>
  )
}

export default Detail