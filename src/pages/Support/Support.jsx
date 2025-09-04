
import React from 'react'
import { Stack } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMdMail } from 'react-icons/io'
import { AiTwotoneMessage,} from 'react-icons/ai'
import InfoCard from '../Dashboard/components/InfoCard'
const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing ="80px"><SupportCard
    icon={IoMdMail} leftComponent={<ContactCard/>} title="contact Us" 
    text="Have a question or just want to know more? Feel free to reach out  to us."/>

    <SupportCard
    icon={AiTwotoneMessage} leftComponent={       
<InfoCard 
inverted={true}
tagText="Contact"
imgUrl="/grid_bg .svg"
text=" Learm more about our real estate, mortgage, and corporate accoount services
            "/>} 
    title="Live Chat " 
    text="Have a question or just want to know more? Feel free to reach out  to us."/>
    </Stack>
    </DashboardLayout>
  )
}

export default Support