
import Preview from './PDF/preview.js'
import { useState , useEffect} from 'react'
import Fonts from './fonts/fonts.js'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Font} from '@react-pdf/renderer'

function App() {
  // console.log(Fonts);

  const familyNames = Fonts?.map((font) => font.family);
  // console.log(familyNames);
  // const defaultOption = options[0];
  const [fontName, setFontName] = useState(familyNames[0]);


  const [profile, setProfile] = useState({
    type: 'Profile',
    name: 'John Doe',
    profession: 'Junior Developer',
    display: true,
    about: 'About...',
    font: familyNames[0].family,
    fontLink : ''

  })


  const handleChangeFont = (e) =>{
  
    setFontName(e.value);

  }

  useEffect(() =>{

    const fontFamily = Fonts.filter((font) => font.family === fontName);
    setProfile({
      ...profile,
      fontLink: fontFamily[0]?.files?.regular
    })
    Font.register({
      family: fontName,
      src: fontFamily[0]?.files?.regular
    })
  },[fontName])

  useEffect(() =>{
    setProfile({
      ...profile,
      font: fontName
    })
  },[fontName])



  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value });
  }

  return (
    <div className="App">
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
        }}
      >
        <div style={{ width: '50%' }}>
          <div>
            <label>Name</label>
            <input
              name='name'
              defaultValue={profile.name}
              onChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
            />
          </div>
          <div>
            <label>Profession</label>
            <input
              name='profession'
              defaultValue={profile.profession}
              onChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
            />
          </div>
          
          <div>
            <label>About</label>
            <input
              name='about'
              defaultValue={profile.about}
              onChange={(e) => {
                handleChange(e.target.name, e.target.value)
              }}
            />
          </div>
          
          <div className='font-picker'>
            <Dropdown options={familyNames} onChange={handleChangeFont} value={fontName} placeholder="Select an option" />

          </div>
        </div>
        <Preview profile={profile} />
      </div>

    </div>
  );
}

export default App;
