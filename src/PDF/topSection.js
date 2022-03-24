import React,{useEffect} from 'react'
import { View , Text, Note} from '@react-pdf/renderer'
import styles from '../styles/index.js'
import {Font} from '@react-pdf/renderer'

export default function TopSection({profile}) {
    useEffect(()=>{
        Font.register({
            family: profile?.font,
            src : profile?.fontLink
        })
    },[profile])
  return (
    <View style={styles.section_top}>
        <div style={{display : 'flex', flexDirection: 'row',color: '#4398e8', fontFamily: profile?.font}}>
            <Text style={styles.name_logo}>LC</Text>
            <div style={{display: 'flex', flexDirection : 'column'}}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.desc}>{profile.profession}</Text>
            </div>
        </div>
        <View style={styles.header_line} />
        {/* <br/> */}
    </View>

  )
}
