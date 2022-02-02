import Container from '../components/Container'
import { useState, useEffect } from 'react'


const index = () => {
    const [array, setArray] = useState([]);
    const [page, setPage] = useState(1);
    async function arrayGetter() {
        let res = await fetch('https://rickandmortyapi.com/api/character/?page=' + page)
        let data = await res.json()
        setArray(data.results)
        console.log(data.results)
        console.log(array)
    }
    useEffect(arrayGetter , [page])
    //function cambioLog() {
    //    useEffect(() => {
    //        setPage(document.getElementById("pag").value)
    //    }, [page])
    //    console.log(page)
    //}
    return <div>
        RICK AND MORTY API
        <p>hola</p>
        <div>pagina</div>
        <br />
        <div>
            <button onClick={() => setPage(page - 1)}>-</button>
            {page}
            <button onClick={() => setPage(page + 1)}>+</button>
        </div>
        {array.map((e) => (
            <div key={e.id}>
                <Container 
                    nombre={e.name}
                    imagen={e.image}
                />
            </div>
        ))}
    </div>;
};

export default index;
