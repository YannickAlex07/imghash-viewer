import { FunctionComponent } from 'react'
import BottomBar from './components/BottomBar'
import HomeSelectButton from './components/HomeSelectButton'
import TitleHeader from './components/TitleHeader'

const Home: FunctionComponent = () => {
  return (
    <div>
      <BottomBar />
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
        {/* Text */}
        <TitleHeader
          title="Image Hash Viewer"
          description="Please select what you would like to do."
        />

        {/* Buttons */}
        <div className="flex gap-6">
          <HomeSelectButton
            destination="/decode/"
            title="Decode Hash"
            description="Decode a hash to its original bit matrix."
          />
          <div className="divider divider-horizontal">OR</div>
          <HomeSelectButton
            destination="/hash/"
            title="Hash Image"
            description="Generate hashes for a selected image."
          />
        </div>
      </div>
    </div>
  )
}

export default Home
