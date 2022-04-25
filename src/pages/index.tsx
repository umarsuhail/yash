import * as React from "react"
import Home from "./Home"
typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null
typeof window !== `undefined` ? require("bootstrap/dist/js/bootstrap.min.js") : null
typeof window !== `undefined` ? require("@popperjs/core/dist/umd/popper.min.js") : null

const IndexPage = () => {
  return (
    <main >
      <Home />
    </main>
  )
}

export default IndexPage
