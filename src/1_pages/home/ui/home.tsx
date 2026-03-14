import {useGetCharactersQuery} from "@entities/character";

export const Home = () => {

    const {data, isError, isLoading} = useGetCharactersQuery({})


    return (
        <div>
            {data?.map(item => (
                <div key={item.id}>
                    {item.name}
                </div>
            ))}
        </div>
    );
};
