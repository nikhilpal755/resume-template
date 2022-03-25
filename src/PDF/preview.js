import React from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import LeftSection from './leftSection'
import { RightSection } from './rightSection'
import styles from '../styles/index.js'
import TopSection from './topSection'

// Create Document Component
const Template = ({ profile }) => {
    return (
      <Document>
        <Page size='A4' style={styles.page}>
          {/* // We will divide our document into 2 columns */}
          <div style={{display: 'flex', flexDirection: 'column'}}>

              
            <div className='topSection'>
                <TopSection profile={profile}/>
            </div>
            <div className='bodySection' style={{display: 'flex', flexDirection: 'row'}}>
                <LeftSection profile={profile} />
                <RightSection profile={profile} />
            </div>
          </div>
        </Page>
      </Document>
    )
  }

export default function Preview({ profile }) {
    return (
        <div>
            <div style={{ flexGrow: 1 }}>
                <PDFViewer
                    showToolbar={true}
                    style={styles.pdfViewer}
                >
                    <Template profile={profile} />
                </PDFViewer>
                <PDFDownloadLink
                    document={<Template profile={profile} />}
                    fileName='template.pdf'
                >
                    {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        </div>
    )
}
