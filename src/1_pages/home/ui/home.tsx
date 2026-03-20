import {useGetCharactersQuery} from "@entities/character";
import {css} from "@styled/css";

export const Home = () => {

    // const {data, isError, isLoading} = useGetCharactersQuery({})


    return (
        <div className={css({fontFamily: 'harry-potter', fontSize: '2rem', fontWeight: 'regular'})}>
            home
            {/*{data?.map(item => (*/}
            {/*    <div key={item.id}>*/}
            {/*        {item.name}*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};
