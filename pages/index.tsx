import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const route = useRouter();
  const handleStartGame = () => {
    route.push('/match');
  }
  return (
    <Stack align={'center'} justify={'center'} flex={1} spacing={10}>
      <Heading>
        Battleship
      </Heading>
      <Input />
      <Button onClick={handleStartGame}>
        Start Game
      </Button>
    </Stack>
  )
}

export default Home
