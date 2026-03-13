
import {css} from "@app/styles/styled-system/css";
import {useGetCharactersQuery} from "@entities/character";


function App() {

  const {isLoading, isError, data} = useGetCharactersQuery({})

  return (
    <div className={css({fontSize: '2xl', color: 'red'})}>
      {data?.map((character) => (
          <div key={character.name}>{character.name}</div>
      ))}
    </div>
  )
}

export default App
