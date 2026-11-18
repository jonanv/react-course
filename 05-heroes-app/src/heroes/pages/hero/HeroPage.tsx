import { useParams } from "react-router";

export const HeroPage = () => {

    const params = useParams();

    console.log({ params })

    return (
        <div>HeroPage</div>
    );
};
