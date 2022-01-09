import { useState } from "react";
import { Cell as TCell } from "@lib/types";
import Cell from "./Cell";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const Field = () => {
    const letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const [grid, setGrid] = useState<TCell[][]>(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => {
        return {
            isHit: false,
            isMiss: false,
            isShip: false,
            isSunk: false,
        }
    })));

    return (
        <Grid
            templateColumns={`repeat(11, 1fr)`}
            templateRows={`repeat(11, 1fr)`}
            gap='1px'
            p='8px'
            w='min-content'
            borderRadius={'2xl'}
            transition='all'
        >
            {letters.map((letter, i) => (
                <Flex
                    key={i}
                    justify={'center'}
                    align={'center'}
                    w={{ base: 6, md: 8 }}
                    h={{ base: 6, md: 8 }}
                >
                    <Text
                        fontSize={'sm'}
                        fontWeight={'bold'}
                    >
                        {letter}
                    </Text>
                </Flex>
            ))}
            {
                grid.map((row, i) => (
                    <>
                        <Flex
                            key={i}
                            justify={'center'}
                            align={'center'}
                            w={{ base: 6, md: 8 }}
                            h={{ base: 6, md: 8 }}
                        >
                            <Text fontSize={'sm'}
                                fontWeight={'bold'}>{i + 1}</Text>
                        </Flex>

                        {row.map((cell, j) => (
                            <Cell key={`${i}-${j}`} />
                        ))}
                    </>
                ))
            }
        </Grid>
    )
}

export default Field
