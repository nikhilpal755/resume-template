import { StyleSheet } from '@react-pdf/renderer'

export default StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
  },
  section_top: {
    height: '10%',
    width: '100%',
    padding: '20',
    margin: '10'
  },
  name_logo: {
  
  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'100%',
    textAlign: 'center',
    margin: '2px 20px',
    fontSize: '15px',
    display: 'flex',
    height: '50px',
    width: '50px',
    padding: '15px 10px',
    border: '2px solid #4398e8',
    // color: 'blue'


   
  },name: {
    fontSize: '30px'
  },
  desc: {
    marginTop: '35px',
    fontSize: '15px',
    color : 'black'
  },
  header_line: {
    borderTop: '1px solid black',
    marginTop: '80px'
  },
  exp_heading: {
    margin: '10',
    marginTop: '20',
    padding: '10'
  },
  description: {
    fontSize: '10px',
    fontWeight: 'light',
  
  
  },
  bottom_line: {
    borderTop: '1px solid #D3D3D3',
    marginBottom: '10px',
    marginTop: '10px'
  },
  section_right: {
    margin: 10,
    padding: 10,
    paddingTop: 20,
    width: '25%',
  },
  section_left: {
    width: '75%',
    height: '100%',
    // backgroundColor: '#084c41',
  },
  profile_container: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // marginTop: '20',
    marginBottom: '20px',
    marginLeft: '30px',
    height: '150',
    fontFamily: 'Helvetica-Bold',
  },text: {
    fontSize: '10px',
    fontWeight:'light',
    color: 'grey'

  },
  name_text: {
    paddingTop: '10px',
    paddingBottom: '5px',
    fontSize: '14px',
    fontWeight: '900',
  },
  profession_text: {
    color: '#d1d5db',
    fontSize: '11px',
  },
  profile_img: {
    width: '60px',
    height: '60px',
    borderRadius: '90',
  },
  profile_line: {
    marginTop: '10px',
    width: '10%',
    height: '1px',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
})