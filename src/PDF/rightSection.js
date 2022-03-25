import styles from '../styles/index.js'
import { View, Text } from '@react-pdf/renderer'
import { useEffect } from 'react'
import { Font } from '@react-pdf/renderer'

export const RightSection = ({ profile }) => {
     useEffect(() => {
        Font.register({
            family: profile?.font,
            src: profile?.fontLink
        })
    }, [profile])

  return (
    <View style={styles.section_right}>
      {/* <Text>{about}</Text> */}
      <View style={{marginTop: '-12px'}}> 

        <Text style={styles.name_text}>CONTACT</Text>
        <View style={{ borderTop: '1px solid #D3D3D3', marginBottom: '10px'}}/>

        <div>
    
            <Text style={{fontSize: '10px', fontWeight: 'bold'}}>Phone</Text>

        </div>

        <div>
            <Text style={{fontSize: '10px', fontWeight: 'bold'}}> Email </Text>
        </div>

        <div>
            <Text style={{fontSize: '10px', fontWeight: 'bold'}}>Linkedin</Text>     
        </div>

      </View>


      <View>
          <Text style={styles.name_text}>EDUCATION</Text>
          <View style={{ borderTop: '1px solid #D3D3D3', marginBottom: '10px'}}/>
          <Text style={{fontSize: '10px', fontFamily: profile?.font}}>New york university</Text>
          <Text style={{fontSize: '10px', fontWeight: 'bold'}}>Bachelors of Arts and Communication</Text>
      </View>

      <View>
          <Text style={styles.name_text}>RELEVANT SKILLS</Text>
          <View style={{ borderTop: '1px solid #D3D3D3', marginBottom: '10px'}}/>
          <Text style={{fontSize: '10px', fontFamily: profile?.font, marginBottom:'10px'}}>C++</Text>
          <Text style={{fontSize: '10px', fontFamily: profile?.font,marginBottom:'10px'}}>Java</Text>
          <Text style={{fontSize: '10px', fontFamily: profile?.font, marginBottom:'10px'}}>C++</Text>
          <Text style={{fontSize: '10px', fontFamily: profile?.font, marginBottom:'10px'}}>C++</Text>



      </View>

    </View>
  )
}