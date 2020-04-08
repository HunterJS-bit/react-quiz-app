import React from "react"

function Quiz(props) {
  const handleChange = () => {
    console.log("handle changes")
  }

  const handleSubmit = () => {
    console.log("form submited ")
  }

  return (
    <div className="quiz-wrapper">
      <h3 className="question">
        Непосредно регулисање саобраћаја на путевима врше:
      </h3>
      <div className="answers">
        <form onSubmit={handleSubmit}>
          <label>
            униформисани комунални полицајци:
            <input name="isGoing" type="checkbox" onChange={handleChange} />
          </label>
          <br />
          <label>
            униформисани полицијски службеници,:
            <input name="isGoing" type="checkbox" onChange={handleChange} />
          </label>
          <br />
          <label>
            инспектори за друмски саобраћај:
            <input name="isGoing" type="checkbox" onChange={handleChange} />
          </label>
          <input type="submit" value="Check answer" />
        </form>
      </div>
    </div>
  )
}

export default Quiz
