import { Divider, Stack } from "@chakra-ui/react";
import Field from "../components/Field";

const MatchPage = () => {
    return (
        <Stack direction={'row'}
            align={'center'}
            justify={"space-evenly"}
            flex={1}
        >
            <Field />
            <Divider orientation="vertical" h={"max-content"} />
            <Field />
        </Stack>
    )
}

export default MatchPage
