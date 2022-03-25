import { View, Text, Image } from '@react-pdf/renderer'
import styles from '../styles/index.js'
import { Font } from '@react-pdf/renderer'
import { useEffect } from 'react'

export const Profile = ({ profile }) => {
    useEffect(() => {
        Font.register({
            family: profile?.font,
            src: profile?.fontLink
        })
    }, [profile])


    return (
        <View style={styles.profile_container}>
            <View style={{ marginTop: '20', paddingRight: '20', fontFamily: profile?.font, marginBottom: '30px' }}>
                <Text style={styles.name_text}>CARRER OBJECTIVE</Text>
                <View style={{
                    borderTop: '1px solid #D3D3D3',
                    marginBottom: '10px',
                    marginTop: '10px'
                }} />

                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae saepe magni minima blanditiis magnam aliquam autem accusantium? Officiis quas, architecto labore, quaerat quod aperiam, temporibus consectetur culpa numquam facilis amet!</Text>
            </View>
            <View style={{ marginTop: '20', paddingRight: '20', fontFamily: profile?.font, marginTop: '40px' }}>
                <Text style={styles.name_text}>PROFESSIONAL EXPERIENCE</Text>
                <View style={{
                    borderTop: '1px solid #D3D3D3',
                    marginBottom: '10px',
                    marginTop: '10px'
                }} />

                <View style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontSize: '15px', marginBottom: '15px' }}> Marketing Intern</Text>
                        <Text style={{ fontSize: '12px', fontWeight: 'light', color: 'grey', marginBottom: '15px' }}>Google</Text>
                    </View>
                    <View style={{ textAlign: 'right' }}>
                        <Text style={styles.text}>17 Sept -present</Text>

                    </View>

                </View>
                <View style={{ marginTop: '20', marginBottom: '20'}}>
                    
                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>

                </View>
                <View style={{marginTop: '10', marginBottom: '20'}}>

                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>
                     
                </View>
                <View style={{marginTop: '10', marginBottom: '20'}}>

                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>
                     
                </View>
                <View style={{
                    borderTop: '1px solid #D3D3D3',
                    marginBottom: '10px',
                    marginTop: '10px'
                }} />
                <View style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontSize: '15px', marginBottom: '15px' }}> Marketing Intern</Text>
                        <Text style={{ fontSize: '12px', fontWeight: 'light', color: 'grey', marginBottom: '15px' }}>Google</Text>
                    </View>
                    <View style={{ textAlign: 'right' }}>
                        <Text style={styles.text}>17 Sept -present</Text>

                    </View>

                </View>
                <View style={{ marginTop: '20', marginBottom: '20'}}>
                    
                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>

                </View>
                <View style={{marginTop: '10', marginBottom: '20'}}>

                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>
                     
                </View>
                <View style={{marginTop: '10', marginBottom: '20'}}>

                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>
                     
                </View>
                <View style={{
                    borderTop: '1px solid #D3D3D3',
                    marginBottom: '10px',
                    marginTop: '10px'
                }} />
                <View style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontSize: '15px', marginBottom: '15px' }}> Marketing Intern</Text>
                        <Text style={{ fontSize: '12px', fontWeight: 'light', color: 'grey', marginBottom: '15px' }}>Google</Text>
                    </View>
                    <View style={{ textAlign: 'right' }}>
                        <Text style={styles.text}>17 Sept -present</Text>

                    </View>

                </View>
                <View style={{ marginTop: '20', marginBottom: '20'}}>
                    
                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>

                </View>
                <View style={{marginTop: '10', marginBottom: '20'}}>

                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>
                     
                </View>
                <View style={{marginTop: '10', marginBottom: '20'}}>

                    <Text style={styles.text}> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia necessitatibus, esse consequuntur voluptate</Text>
                     
                </View>
                <View style={{
                    borderTop: '1px solid #D3D3D3',
                    marginBottom: '10px',
                    marginTop: '10px'
                }} />
            </View>

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
