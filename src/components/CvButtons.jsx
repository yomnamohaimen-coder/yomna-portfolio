// "Download CV" is the main action; "View CV" is a quiet link beside it.
export default function CvButtons() {
  return (
    <div className="cv-buttons">
      <a className="cv-download" href="/cv.pdf" download="Yomna_Abdel-Mohaimen_CV.pdf">
        Download CV
      </a>
      <a className="cv-view" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        View CV
      </a>
    </div>
  )
}
