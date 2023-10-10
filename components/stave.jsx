
export default function StaveDisplay() {

  const trebleNotes = "ABCDEFGABCDEFGABCD".split('')
  const bassNotes = "CDEFGABCDEFGABCDE".split('')

  return (
    <>
      <div className="flex items-end">
        <Stave notes={trebleNotes}/>
        <Stave notes={bassNotes}/>
      </div>
    </>
  )
}

function Stave({ notes }) {
  return (
    <ul className="flex flex-col-reverse">
      {notes.map((val, idx) => {
        return (<StaveLine key={idx} srVal={val} srIdx={idx} />)
      })}
    </ul>
  )
}

function StaveLine({ srVal, srIdx }) {
  const staffLineStyle = "bg-gradient-to-t from-transparent from-45% via-primary via-50% to-transparent to-55%"
  return (
    <div key={srIdx} className={srIdx % 2 == 0 ? staffLineStyle : ""}>{srVal}</div>
  )
}