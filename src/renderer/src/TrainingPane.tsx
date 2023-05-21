import { getBlock1Pair, getSentences } from './lessonsBase'

export function TrainingPane(): JSX.Element {
  const { geo, eng } = getBlock1Pair()

  const geoSentences = getSentences(geo)
  const engSentences = getSentences(eng)

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Geo {geoSentences.length}</th>
            <th>Eng {engSentences.length}</th>
          </tr>
        </thead>
        <tbody>
          {geoSentences.map((geoSentence, i) => {
            return (
              <tr key={i}>
                <td>{geoSentence}</td>
                <td>{engSentences[i]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
