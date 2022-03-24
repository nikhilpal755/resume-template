import { View, Text, Image } from '@react-pdf/renderer'
import styles from '../styles/index.js'
import {Font} from '@react-pdf/renderer'
import {useEffect} from 'react'

export const Profile = ({ profile }) => {
    useEffect(()=>{
        Font.register({
            family: profile?.font,
            src: profile?.fontLink
        })
    },[profile])
    
    
  return (
    <View style={styles.profile_container}>
      <View style={{marginTop: '20', paddingRight: '20', fontFamily: profile?.font}}>
        <Text style={styles.name_text}>CARRER OBJECTIVE</Text>
        <View style={styles.bottom_line}/>

        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae saepe magni minima blanditiis magnam aliquam autem accusantium? Officiis quas, architecto labore, quaerat quod aperiam, temporibus consectetur culpa numquam facilis amet!</Text>
      </View>
      <View style={{marginTop: '20', paddingRight: '20', fontFamily: profile?.font}}>
        <Text style={styles.name_text}>PROFESSIONAL EXPERIENCE</Text>
        <View style={styles.bottom_line}/>

        <View style={{display: 'flex' , width: '100%', justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{fontSize: '15px'}}> hello</Text>
                <Text style={{fontSize: '12px', fontWeight: 'light', color: 'grey'}}>fsfa</Text>
            </View>
            <View>
                <Text style={styles.text}>hello</Text>

            </View>

        </View>
      </View>
     
      {/* Expreince Section  */}
      {/* <View style={{marginTop: '50'}}>
          <Text style={styles.name_text}>PROFESSIONAL EXPERIENCE</Text>
      </View>
      <View style={styles.bottom_line}/>
      <div style={{display : 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', padding: '10'}}>
                  <Text style={{fontSize: '10', marginBottom: '10px'}}>dfsfafa</Text>
                  <Text style={{fontSize: '10', marginTop: '10px'}}>dfsfafa</Text>
              </div>
              <div>
                  <Text style={{}}>dfafa</Text>
                

              </div>
          </div>
          <div className='description'>

          </div>
      </div> */}
    </View>
  )
}

const LeftSection = ({ profile }) => {
  return (
    <View style={styles.section_left}>
      <Profile profile={profile} />
    </View>
  )
}

export default LeftSection
