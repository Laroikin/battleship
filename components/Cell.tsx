import { Box } from "@chakra-ui/react"
import { Cell as TCell } from "@lib/types"

const Cell = ({ isHit = false, isMiss = false, isShip = false, isSunk = false, ...rest }: TCell) => {
    return (
        <Box
            w={{ base: 6, md: 8 }}
            h={{ base: 6, md: 8 }}
            borderRadius={{ base: 3, md: 4 }}
            background={isHit ? "red.500" : isMiss ? "blue.500" : isShip ? "green.500" : isSunk ? "orange.600" : "whiteAlpha.300"}
            {...rest}
        />
    )
}

export default Cell
