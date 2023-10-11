import Image from "next/image"

export default function StaveDisplay() {

  const trebleNotes = "ABCDEFGABCDEFGABCD".split('')
  const bassNotes = "CDEFGABCDEFGABCDE".split('')

  // https://www.svgrepo.com/collection/music-symbols/

  return (
    <>
      <div className="flex items-end gap-16">
        <Staff notes={trebleNotes} clef={"treble"}/>
        <Staff notes={bassNotes} clef={"bass"}/>
      </div>
    </>
  )
}

//TODO: Convert these to importable components. This will allow for themed coloring and other options
// including optimizations that the Next/Image element doesn't do.
const trebleClef = (
  <Image
        src={"treble-clef.svg"}
        width={224}
        height={224}
        alt={""}
        className="absolute top-[50px] -left-[72px]"
      />
)

const bassClef = (
  <Image
        src={"bass-clef.svg"}
        width={112}
        height={112}
        alt={""}
        className="absolute top-[72px] -left-[8px]"
      />
)

function Staff({ notes, clef }) {
  return (
    <div className="relative">
      <ul className="flex flex-col-reverse items-center">
        {notes.map((val, idx) => {
          return (<StaffLine key={idx} srVal={val} srIdx={idx} />)
        })}
      </ul>
      {clef === "bass" ? bassClef : trebleClef}
    </div>
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