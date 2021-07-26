import { Box, Icon, Image, Text } from "@chakra-ui/react";
import {TiCameraOutline} from 'react-icons/ti';


const MobileCard = ({name, company}) => {
    return (
        <Box
            maxWidth={["100%"]}
            display="flex"
            flexDir="row"
            p={4}
            mr="auto"
            gridGap={2}
        >
            <Box boxSize="100px" flexShrink={0}>
                <Image src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m21-2021-1.jpg" aria-label="samsung galaxy m21" />
            </Box>
            <Box display="flex" flexDir="column"  flexWrap="wrap">
                <Text
                    // textTransform="uppercase"
                    fontWeight="semibold"
                    fontSize="md"
                    letterSpacing="wide"
                    color="teal.600"
                >{company + " "+ name}</Text>
                {/* <Text fontSize="xl" fontWeight="semibold" letterSpacing="wide" fontFamily="mono"  >{name}</Text> */}
                <Text size="xl" ><Icon as={TiCameraOutline} w={5} h={5} />30MP</Text>
                <Text size="xl">Snapdragon 880</Text>
            </Box>

        </Box>
    )
}

export default MobileCard;