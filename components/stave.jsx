import Image from "next/image"

export default function StaveDisplay() {

  const trebleNotes = "ABCDEFGABCDEFGABCD".split('')
  const bassNotes = "CDEFGABCDEFGABCDE".split('')

  return (
    <>
      <div className="flex items-end gap-16">
        <Staff notes={trebleNotes}/>
        <Staff notes={bassNotes}/>
      </div>
    </>
  )
}

function Staff({ notes }) {
  return (
    <ul className="flex flex-col-reverse items-center">
      {notes.map((val, idx) => {
        return (<StaffLine key={idx} srVal={val} srIdx={idx} />)
      })}
    </ul>
  )
}

function StaffLine({ srVal, srIdx }) {
  const staffLineStyle = "bg-gradient-to-t from-transparent from-45% via-primary via-50% to-transparent to-55% w-fit"
  return (
    <div key={srIdx} className={srIdx % 2 == 0 ? staffLineStyle : ""}>
      {/* {srVal} */}
      <Image
        src={"notes/blank.svg"}
        width={isFloatingStaffLine(srIdx) ? 32 : 256}
        height={16}
        alt=""
        />
    </div>
  )
}

function isFloatingStaffLine(rowIndex){
  return rowIndex < 4 || rowIndex > 12
}